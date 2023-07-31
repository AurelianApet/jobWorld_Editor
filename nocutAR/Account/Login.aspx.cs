using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using jobworld.Common;
using DataAccess;

namespace jobworld.Account
{
    public partial class Login : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string query = "select statue from news_setting where id=" + IID;
            try
            {
                PageDataSource = DBConn.RunSelectQuery(query);
                if(PageDataSource.Tables[0].Rows.Count > 0)
                {
                    int statue = Convert.ToInt32(PageDataSource.Tables[0].Rows[0][0].ToString());
                    if(statue == 0)
                    {
                        Response.Redirect("standby.aspx");
                    }
                    else if(statue >= 2)
                    {
                        Response.Redirect("content.aspx");
                    }
                }
            }
            catch(Exception)
            {

            }
        }
    }
}