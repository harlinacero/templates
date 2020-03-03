using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Parameters<T>
    {

        public int Top { get; set; }
        public Expression<Func<T, bool>> Where { get; set; }
        public Func<T, object> OrderBy { get; set; }
        public Func<T, object> OrderByDescending { get; set; }

        public Parameters()
        {
            Top = 0;
            Where = null;
            OrderBy = null;
            OrderByDescending = null;
        }
    }
}
