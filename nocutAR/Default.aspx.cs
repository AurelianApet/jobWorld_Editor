using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Data;
using jobworld.Common;
using System.Net;

namespace jobworld
{
    public partial class Default : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            try
            {
                string query = "select e_statue from news_setting where id=" + IID;
                PageDataSource = DBConn.RunSelectQuery(query);
                if (PageDataSource.Tables[0].Rows.Count > 0)
                {
                    int statue = Convert.ToInt32(PageDataSource.Tables[0].Rows[0][0].ToString());
                    if (statue > 0)
                    {
                        Response.Redirect("Account/content.aspx");
                    }
                    else
                    {
                        Response.Redirect("Account/Login.aspx");
                    }
                }
                else
                {
                    Response.Redirect("Account/Login.aspx");
                }
            }
            catch(Exception)
            {

            }
        }
    }
}
