using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace WeAPi.Models
{
    public partial class SibeeshPassionContext : DbContext
    {
        public SibeeshPassionContext()
        {
        }

        public SibeeshPassionContext(DbContextOptions<SibeeshPassionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblSubscriber> TblSubscribers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-CK178LU;Database=SibeeshPassion;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblSubscriber>(entity =>
            {
                entity.HasKey(e => e.SubscriberId)
                    .HasName("PK__tbl_Subs__7DFEB63402C44320");

                entity.ToTable("tbl_Subscribers");

                entity.Property(e => e.SubscriberId)
                    .ValueGeneratedNever()
                    .HasColumnName("SubscriberID");

                entity.Property(e => e.MailId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("MailID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
