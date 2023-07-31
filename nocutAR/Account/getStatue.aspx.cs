using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataAccess;
using System.Text;
using System.Data;
using jobworld.Common;
using System.Net;

namespace jobworld.Account
{
    public partial class getStatue : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string query = "select statue from news_setting where id=" + IID;
            try
            {
                PageDataSource = DBConn.RunSelectQuery(query);
                int count = PageDataSource.Tables[0].Rows.Count;
                if (count > 0)
                {
                    int statue = Convert.ToInt32(PageDataSource.Tables[0].Rows[0][0].ToString());
                    if (statue == 2)
                    {
                        int e_statue = Convert.ToInt32(DBConn.RunSelectQuery("select e_statue from news_setting where id=" + IID).Tables[0].Rows[0][0].ToString());
                        Response.Write(statue + "," + e_statue);
                    }
                    else
                    {
                        Response.Write(statue);
                    }
                }
                else
                {
                    Response.Write("0");
                }
            }
            catch(Exception)
            {
                Response.Write("0");
            }
        }
    }
}