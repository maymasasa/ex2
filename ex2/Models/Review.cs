using System.ComponentModel.DataAnnotations;

namespace ex2.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Comment { get; set; }
        [Range(1,5)]
        public int Rate { get; set; } 
        public string Time { get; set; }

        public Review()
        {
            Time = string.Format("{0:HH:mm:ss tt}", DateTime.Now);
        }
    }
}

