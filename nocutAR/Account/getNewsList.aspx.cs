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

namespace jobworld.Account
{
    public partial class getNewsList : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string str = "";
            try
            {
                string query = "select * from content order by count desc";
                PageDataSource = DBConn.RunSelectQuery(query);
                int count = PageDataSource.Tables[0].Rows.Count;
                string id;
                string title;
                if(count > 0)
                {
                    for (int i = 0; i < 10; i++)
                    {
                        if (i >= count) break;
                        id = PageDataSource.Tables[0].Rows[i][0].ToString();
                        str += id + ":*:";
                        title = PageDataSource.Tables[0].Rows[i][3].ToString();
                        str += title + ",*,";
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