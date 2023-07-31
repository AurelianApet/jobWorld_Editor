using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace jobworld.Account
{
    public partial class getLayoutContent : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Request.Params["topid"]))
                return ;
            string topid = Request.Params["topid"];

            if (string.IsNullOrEmpty(Request.Params["type"]))
                return ;
            string type = Request.Params["type"];

            string query = "select * from layoutContent where id=" + topid;
            string layoutcontent = "";
            try
            {
                switch (type)
                {
                    case "1":
                        {
                            layoutcontent = DBConn.RunSelectQuery(query).Tables[0].Rows[0][2].ToString();
                            break;
                        };
                    case "2":
                        {
                            layoutcontent = DBConn.RunSelectQuery(query).Tables[0].Rows[0][3].ToString();
                            break;
                        };
                    case "3":
                        {
                            layoutcontent = DBConn.RunSelectQuery(query).Tables[0].Rows[0][4].ToString();
                            break;
                        };
                    case "4":
                        {
                            layoutcontent = DBConn.RunSelectQuery(query).Tables[0].Rows[0][6].ToString();
                            break;
                        };
                }
            }
            catch(Exception)
            {

            }
            Response.Write(layoutcontent);
        }
    }
}