using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.DataAccess;
using WebApplication1.DomainServices.Entities;

namespace WebApplication1.Models
{
    public class AppDbContext : DbContext, IAppDbContext
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly AppDbContext _context;
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {
            UnitOfWork _unitOfWork = new UnitOfWork(_context);
        }

        public DbSet<Role> TEntity { get; set; }
    }
}
