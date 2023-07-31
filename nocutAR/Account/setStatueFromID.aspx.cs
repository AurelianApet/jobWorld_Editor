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
    public partial class setStatueFromID : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Request.Params["step"]))
            {
                return;
            }
            string step = Request.Params["step"];

            if (string.IsNullOrEmpty(Request.Params["id"]))
            {
                return;
            }
            string id = Request.Params["id"];

            try
            {
                if (step == "1")
                {
                    try
                    {
                        string query = "update news_setting set e_statue = '1' where id=" + id;
                        DBConn.RunUpdateQuery(query);
                    }
                    catch(Exception)
                    {
                        Response.Write("fail");
                    }
                }
                else if (step == "2")
                {
                    try
                    {
                        string query = "update news_setting set e_statue = '2' where id=" + id;
                        DBConn.RunUpdateQuery(query);
                    }
                    catch (Exception)
                    {
                        Response.Write("fail");
                    }
                }
                else if (step == "3")
                {
                    try
                    {
                        string query = "update news_setting set statue = 0, c_statue=0, e_statue=0, company='신문사명', collector='체험자1', editor='체험자2' where id=" + id;
                        DBConn.RunUpdateQuery(query);
                    }
                    catch(Exception)
                    {
                        Response.Write("fail");
                    }
                }
                Response.Write("success");
            }
            catch(Exception)
            {
                Response.Write("fail");
            }
        }

        protected override void Page_Init(object sender, EventArgs e)
        {

        }
    }
}