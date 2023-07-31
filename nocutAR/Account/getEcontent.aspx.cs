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
using System.Text.RegularExpressions;

namespace jobworld.Account
{
    public partial class getEcontent : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Request.Params["id"]))
            {
                return;
            }
            string id = Request.Params["id"];

            if (string.IsNullOrEmpty(Request.Params["type"]))
            {
                return;
            }
            string type = Request.Params["type"];
            if(type == "0")
            {
                PageDataSource = DBConn.RunSelectQuery("select econtent from content where id=" + id);
                Response.Write(PageDataSource.Tables[0].Rows[0][0].ToString());
            }
            else if(type == "1")
            {
                PageDataSource = DBConn.RunSelectQuery("select esummary from content where id=" + id);
                Response.Write(PageDataSource.Tables[0].Rows[0][0].ToString());
            }
        }
    }
}