using jobworld.Common;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace jobworld.Account
{
    public partial class ConfirmLogin : Common.PageBase
    {
        private void delTempsave()
        {
            string query = "delete layout where partid=" + IID;
            DBConn.RunDeleteQuery(query);
        }

        protected override void Page_Load(object sender, EventArgs e)
        {
            string name = Request.Params["name"];
            string newsType = Request.Params["type"];
            string newsName = Request.Params["newsname"];
            string email = Request.Params["email"];

            try
            {
                string query = "update news_setting set company = '" + newsName + "', editor='" + name + "', e_email='" + email + "', news_type='" + newsType + "', e_statue=1 where id=" + IID;
                DBConn.RunUpdateQuery(query);
                delTempsave();
                Response.Write("success");
            }
            catch (Exception)
            {

            }
        }
    }
}