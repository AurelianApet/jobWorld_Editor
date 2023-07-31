using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace jobworld.Account
{
    public partial class getNews : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string str = "";
            try
            {
                string query = "select * from news";
                PageDataSource = DBConn.RunSelectQuery(query);
                int count = PageDataSource.Tables[0].Rows.Count;
                string name;
                string link;
                if (count > 0)
                {
                    for (int i = 0; i < 8; i++)
                    {
                        name = PageDataSource.Tables[0].Rows[i][1].ToString();
                        str += name + ":*:";
                        link = PageDataSource.Tables[0].Rows[i][2].ToString();
                        str += link + ",*,";
                    }
                }
            }
            catch (Exception)
            {
            }
            Response.Write(str);

        }
    }
}