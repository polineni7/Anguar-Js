using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WeAPi.Models;

namespace WeAPi.Controllers
{
    public class HomeController : Controller
    {
        public IEnumerable<TblSubscriber> Get()
        {
            return myEntity.TblSubscribers.AsEnumerable();
        }
        private SibeeshPassionContext myEntity = new SibeeshPassionContext();

        // POST: api/Subscriber  
        public void Post(TblSubscriber sub)
        {
            if (ModelState.IsValid)
            {
                myEntity.TblSubscribers.Add(sub);
                myEntity.SaveChanges();
            }
        }
        // PUT: api/Subscriber/5  
        public void Put(TblSubscriber sub)
        {
            if (ModelState.IsValid)
            {
                myEntity.Entry(sub).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                try
                {
                    myEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
        // DELETE: api/Subscriber/5  
        public void Delete(int id)
        {
            TblSubscriber dlt = myEntity.TblSubscribers.Find(id);
            if (dlt != null)
            {
                try
                {
                    myEntity.TblSubscribers.Remove(dlt);
                    myEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }

}
