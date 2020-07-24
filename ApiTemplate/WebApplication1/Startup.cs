using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using WebApplication1.DependendeInjection;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DataAccess;

namespace WebApplication1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllHeaders",
                      builder =>
                      {
                          builder.AllowAnyOrigin()
                                 .AllowAnyHeader()
                                 .AllowAnyMethod();
                      });
            });

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            //services.AddEntityFrameworkNpgsql().AddDbContext<AppDbContext>(opt => opt.UseNpgsql(Configuration.GetConnectionString("AppDbContext")));
            //services.AddDbContext<AppDbContext>(options =>  options.UseNpgsql(Configuration.GetConnectionString("AppDbContext")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSingleton<IConfiguration>(Configuration);

            DependencyInjectionProfile.RegisterProfile(services);

        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }


            //Obtenemos el nombre de la aplicación URL
            string appNameURI = Configuration.GetValue<string>("AppNameURI")?.Trim() ?? "/";
            appNameURI = (!appNameURI.StartsWith("/") ? ("/" + appNameURI) : appNameURI);
            appNameURI = (!appNameURI.EndsWith("/") ? (appNameURI + "/") : appNameURI);

            string swaggerEndPoint = $"{appNameURI}swagger/v1/swagger.json";

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("AllowAllHeaders");
            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUI(s =>
            {
                s.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                s.RoutePrefix = string.Empty;
            });

        }
    }
}
