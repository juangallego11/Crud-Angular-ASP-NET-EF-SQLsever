using BKTarjetas.Models;
using Microsoft.EntityFrameworkCore;

namespace BKTarjetas
{
    public class AplicationDbContext: DbContext
    {
        DbSet<TarjetaCredito> TarjetaCreditos { get; set; } 
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options) 
        { 
            
        }
    }
}
