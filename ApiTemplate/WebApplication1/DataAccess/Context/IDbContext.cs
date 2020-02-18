using Npgsql;

namespace WebApplication1.DataAccess
{
    public interface IDbContext
    {
        void BeginTransaction();
        void CommitChanges();
        void RollbackChanges();
    }

   
}
