using System.Net;
using System.Net.Mail;


namespace WebApplication1.Helpers
{
    public static class Mail
    {
        public static bool SendEmail(string fromAddress, string toAddress, string fromPassword, string subject, string body)
        {
           // var fromAddress = new MailAddress("from@gmail.com", "From Name");
           // var toAddress = new MailAddress("to@example.com", "To Name");
            //const string fromPassword = "fromPassword";
            //const string subject = "Subject";
            //const string body = "Body";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                try
                {
                    smtp.Send(message);
                    return true;
                }
                catch (System.Exception)
                {
                    return false;
                }
            }
        }
    }
}
