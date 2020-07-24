using System;
using System.Net;
using System.Net.Mail;
using WebApplication1.DomainServices.Entities;

namespace WebApplication1.Helpers
{
    public static class Mail
    {
        public static bool SendEmail(Company company, string toAddress,string subject, string body, string filename = null)
        {
            
            var from = (company != null) ? company.EmailMistica : "harlinacero@gmail.com";
            var password = (company != null) ? Encrypt.Base64Decode(company.PasswordMistica) : "h4rl1n4cer0";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(from, password)
            };

            try
            {
                MailMessage message = new MailMessage(from, toAddress);
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true;
                if (filename != null)
                {
                    message.Attachments.Add(new Attachment(filename));
                }
                smtp.Send(message);
                return true;
            }
            catch (Exception ex)
            {
                
                return false;
            }
        }
    }
}
