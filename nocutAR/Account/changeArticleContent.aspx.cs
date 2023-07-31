using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using jobworld.Common;
using System.Net;

namespace jobworld.Account
{
    public partial class changeArticleContent : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(Request.Params["id"]))
            {
                return;
            }
            string id = Request.Params["id"];
            string title = Request.Params["title"];
            string content = Request.Params["content"];
            string summary = Request.Params["summary"];
            string query = "update content set etitle = '" + title + "', econtent = '" + content + "', esummary = '" + summary + "' where id=" + id;
            try
            {
                DBConn.RunUpdateQuery(query);
                Response.Write("success");
            }
            catch(Exception)
            {

            }
        }
    }
}