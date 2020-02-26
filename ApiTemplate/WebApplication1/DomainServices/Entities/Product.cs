
namespace WebApplication1.DomainServices.Entities
{
    public class Product : EntityBase
    {
        public string Code { get; set; }
        public string description { get; set; }
        public int type { get; set; }
        public string accountingAccount { get; set; }
    }
}
