using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Web; 

namespace WebApplication1.DataAccess
{
    public class PostgreSQLConnection
    {
        private NpgsqlConnection cnnPsql;
        private NpgsqlCommand cmdPsql;
        private NpgsqlTransaction trPsql;
        private NpgsqlDataAdapter adCemi;
        public PostgreSQLConnection(string connectionString)
        {
            string cnn = connectionString;
            Conecta(cnn);
        }

        private void Conecta(string cnn)
        {
            cnnPsql = new NpgsqlConnection(cnn);
        }


        public void AbortarTransaccion()
        {
            try
            {
                this.trPsql.Rollback();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
                //throw;
            }
            finally
            {
                this.cnnPsql.Close();
                this.trPsql = null;
            }
        }

        public DataSet TraerDatos(string strSQL)
        {
            try
            {
                DataSet dsTemp = new DataSet("dsCem");
                cmdPsql = new NpgsqlCommand(strSQL, cnnPsql, trPsql);
                adCemi = new NpgsqlDataAdapter(cmdPsql);
                dsTemp.Clear();
                adCemi.Fill(dsTemp);
                cnnPsql.Close();

                return dsTemp;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
                this.AbortarTransaccion();
                cnnPsql.Close();
                return null;
            }
        }


        public void Log(string texto)
        {
            if (File.Exists("Log_wcf.txt"))
            {
                using (System.IO.StreamWriter sw = new System.IO.StreamWriter("Log_wcf.txt", true))
                {
                    sw.WriteLine("-------------------");
                    sw.WriteLine("Dato: {0}", texto);
                    sw.Write("Fecha: ");
                    sw.WriteLine(DateTime.Now);
                }
            }
            else
            {
                using (StreamWriter sw = File.CreateText("Log_wcf.txt"))
                {
                    sw.WriteLine("Archivo Creado:");
                    sw.WriteLine(DateTime.Now);
                    sw.WriteLine("-------------------");
                    sw.WriteLine("Dato: {0}", texto);
                    sw.Write("Fecha: ");
                    sw.WriteLine(DateTime.Now);
                    sw.Close();
                }
            }
        }

        public bool ExecuteQuery(string sql)
        {
            try
            {
                cnnPsql.Close();
                cnnPsql.Open();
                trPsql = cnnPsql.BeginTransaction();
                try
                {
                    cmdPsql = new NpgsqlCommand(sql, cnnPsql, trPsql);
                    
                    cmdPsql.ExecuteNonQuery();
                    trPsql.Commit();
                    cnnPsql.Close();
                    return true;
                }
                catch (Exception e)
                {
                    trPsql.Rollback();
                    cnnPsql.Close();
                    Console.WriteLine(e.Message.ToString());
                    Log(e.Message.ToString());

                    return false;
                }
            }
            catch (Exception et)
            {
                cnnPsql.Close();
                Console.WriteLine(et.Message.ToString());
                Log(et.Message.ToString());
                return false;
            }

        }


        //Se establece los parámetros de la consulta y se entrega en fornato JSON
        public List<Dictionary<string, object>> ListAll(string sql) 
        {

            List<Dictionary<string, object>> rows = new List<Dictionary<string, object>>();
            Dictionary<string, object> row;
            DataTable dt = new DataTable();
            using (NpgsqlCommand cmd = new NpgsqlCommand(sql, cnnPsql, trPsql))
            {
                try
                {
                    NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
                    da.Fill(dt);
                    foreach (DataRow dr in dt.Rows)
                    {
                        row = new Dictionary<string, object>();
                        foreach (DataColumn col in dt.Columns)
                        {
                            row.Add(col.ColumnName, dr[col]);
                        }
                        rows.Add(row);
                    }                   

                    cnnPsql.Close();
                    return rows;
                }
                catch (NpgsqlException e)
                {
                    Log(e.Message.ToString());
                }
                catch (NullReferenceException e)
                {
                    Log(e.Message.ToString());
                }
                catch (InvalidOperationException e)
                {
                    Log(e.Message.ToString());
                }
                finally
                {
                    
                }

                return rows;
            }
            //}
        }

        public DataTable ListAll2(string sql)
        {

            DataTable dt = new DataTable();
            using (NpgsqlCommand cmd = new NpgsqlCommand(sql, cnnPsql, trPsql))
            {
                try
                {
                    NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
                  
                    da.Fill(dt);
                    cnnPsql.Close();
                    return dt;
                }
                catch (NpgsqlException e)
                {
                    Log(e.Message.ToString());
                }
                catch (NullReferenceException e)
                {
                    Log(e.Message.ToString());
                }
                catch (InvalidOperationException e)
                {
                    Log(e.Message.ToString());
                }
                finally
                {

                }

                return dt;
            }
            //}
        }

    }
}
