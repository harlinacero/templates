using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.AppServices;
using WebApplication1.AppServices.Contrracts;
using WebApplication1.DataAccess;
using WebApplication1.DataAccess.Context;
using WebApplication1.DataAccess.Repository;
using WebApplication1.DomainServices;
using WebApplication1.DomainServices.Contracts;

namespace WebApplication1.DependendeInjection
{
    public static class DependencyInjectionProfile
    {
        public static void RegisterProfile(IServiceCollection services)
        {
            services.AddSingleton<IDbClient, DbClient>(s =>
            {
                DbSettings settings = s.GetService<DbSettings>();
                return new DbClient(settings.ConnectionString);
            });


            services.AddTransient<DbContext, AppDbContext>(s =>
            {
                DbSettings settings = s.GetService<DbSettings>();
                return new AppDbContext(settings.ConnectionString);
            });

            services.AddSingleton<ISessionDomainService, SessionDomainService>();
            services.AddSingleton<IAdminDomainService, AdminDomainService>();
            services.AddSingleton<IProviderDomainService, ProviderDomainService>();
            services.AddSingleton<IProductDomainService, ProductDomainService>();
            services.AddSingleton<ICompanyDomainService, CompanyDomainService>();


            services.AddSingleton<ISessionAppService, SessionAppService>();
            services.AddSingleton<IAdminAppService, AdminAppService>();
            services.AddSingleton<IProviderAppService, ProviderAppService>();
            services.AddSingleton<IProductAppService, ProductAppService>();
            services.AddSingleton<ICompanyAppService, CompanyAppService>();

            services.AddTransient(typeof(IRepository<>), typeof(Repository<>));
        }
    }
}
