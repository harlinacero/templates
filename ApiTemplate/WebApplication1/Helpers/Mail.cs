using System.Net;
using System.Net.Mail;


namespace WebApplication1.Helpers
{
    public static class Mail
    {
        public static bool SendEmail(string fromAddress, string toAddress, string fromPassword, string subject, string body, string filename = null)
        {

            Attachment attachment = new Attachment(filename);

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress, fromPassword)
            };
            //using (var message = new MailMessage(fromAddress, toAddress)
            //{
            //    Subject = subject,
            //    Body = body,
            //    IsBodyHtml = true
            //})

            try
            {
                MailMessage message = new MailMessage(fromAddress, toAddress);
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true;
                message.Attachments.Add(new Attachment(filename));
                smtp.Send(message);
                return true;
            }
            catch (System.Exception ex)
            {
                return false;
            }
        }
    }
}
