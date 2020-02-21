using Microsoft.EntityFrameworkCore;
using Npgsql;
using Npgsql.EntityFrameworkCore.PostgreSQL.Infrastructure;
using WebApplication1.DataAccess;
using WebApplication1.DomainServices.Entities;

namespace WebApplication1.DataAccess
{
    public class AppDbContext : DbContext
    {
        private string _connectionString;
        public DbSet<Role> Role { get; set; }
        public DbSet<Person> User { get; set; }


        public AppDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql(_connectionString);
    }
}
