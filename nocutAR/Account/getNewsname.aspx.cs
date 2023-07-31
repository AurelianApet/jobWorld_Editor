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
    public partial class getNewsname : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            PageDataSource = DBConn.RunSelectQuery("select * from news_setting where id=" + IID);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                string newsname = PageDataSource.Tables[0].Rows[0][1].ToString();
                string collector = PageDataSource.Tables[0].Rows[0][2].ToString();
                string editor = PageDataSource.Tables[0].Rows[0][3].ToString();

                Response.Write(newsname + "," + collector + "," + editor);
            }
        }
    }
}