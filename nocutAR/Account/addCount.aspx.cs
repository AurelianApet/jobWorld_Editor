using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataAccess;
using System.Text;
using System.Data;

namespace jobworld.Account
{
    public partial class addCount : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(Request.Params["id"]))
            {
                return;
            }
            string id = Request.Params["id"];
            string query = "update content set count = count + 1 where id=" + id;
            try
            {
                DBConn.RunUpdateQuery(query);
            }
            catch (Exception)
            {

            }
        }
    }
}