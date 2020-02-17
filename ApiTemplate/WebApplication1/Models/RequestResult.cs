using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{

    public class RequestResult<T> where T : class
    {
        public bool IsSuccesfull { get; set; }
        public string Message { get; set; }
        public T Result { get; set; }


        public static RequestResult<T> CreateSuccesfull(T entity)
        {
            return new RequestResult<T>()
            {
                IsSuccesfull = true,
                Result = entity,
                Message = null
            };
        }

        public static RequestResult<T> CreateUnSuccesfull(string message)
        {
            return new RequestResult<T>()
            {
                IsSuccesfull = false,
                Result = null,
                Message = message
            };
        }

    }

}
