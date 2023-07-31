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
    public partial class getType : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            PageDataSource = DBConn.RunSelectQuery("select news_type from news_setting where id=" + IID);
            if(PageDataSource.Tables[0].Rows.Count > 0)
            {
                string type = PageDataSource.Tables[0].Rows[0][0].ToString();
                if(type == "0")
                {
                    //온라인신문
                    Response.Write("0");
                }
                else if(type == "1")
                {
                    //지면신문
                    Response.Write("1");
                }
            }
        }
    }
}