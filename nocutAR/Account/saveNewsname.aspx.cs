using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace jobworld.Account
{
    public partial class saveNewsname : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(Request.Params["newsname"]))
            {
                return;
            }
            string newsname = Request.Params["newsname"];
            string query = "update news_setting set company='" + newsname + "' where id=" + IID;
            try
            {
                DBConn.RunUpdateQuery(query);
            }
            catch(Exception)
            {

            }
        }
    }
}