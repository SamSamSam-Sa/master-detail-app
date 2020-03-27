using MasterDetail.DBRepository.Models;
using Microsoft.EntityFrameworkCore;

namespace MasterDetail.DBRepository
{
    public class MasterDetailContext : DbContext
    {
        public MasterDetailContext(DbContextOptions<MasterDetailContext> options) : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>()
                .HasMany(c => c.Orders);
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
