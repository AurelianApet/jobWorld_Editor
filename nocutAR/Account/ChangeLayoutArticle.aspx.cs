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
    public partial class ChangeLayoutArticle : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(Request.Params["id"]))
            {
                return;
            }
            string id = Request.Params["id"];

            string title = Request.Params["title"];
            title = title.Replace("'", "''");
            string content = Request.Params["content"];
            content = content.Replace("'", "''");
            string summary = Request.Params["summary"];
            summary = summary.Replace("'", "''");

            string query = "update content set etitle='" + title + "', econtent='" + content + "', esummary='" + summary + "' where id=" + id;
            DBConn.RunUpdateQuery(query);
        }
    }
}