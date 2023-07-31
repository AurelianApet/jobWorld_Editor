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
    public partial class getCategory : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(Request.Params["type"]))
            {
                return;
            }
            string type = Request.Params["type"];
            if(type == "0")
            {
                showAll(sender, e);
            }
            else if(type == "1")
            {
                showPolicy(sender, e);
            }
            else if (type == "2")
            {
                showEconomy(sender, e);
            }
            else if (type == "3")
            {
                showCulture(sender, e);
            }
            else if (type == "4")
            {
                showScience(sender, e);
            }
            else if (type == "5")
            {
                showMyArticle(sender, e);
            }
        }

        protected void showAll(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }

        protected void showPolicy(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content where type=0 order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }

        protected void showEconomy(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content where type=1 order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }

        protected void showCulture(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content where type=2 order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }

        protected void showScience(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content where type=3 order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }

        protected void showMyArticle(object sender, EventArgs e)
        {
            string showArticleView = "";
            string query = "select * from content where type=4 order by regdate desc";
            PageDataSource = DBConn.RunSelectQuery(query);
            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                for (int i = 0; i < PageDataSource.Tables[0].Rows.Count; i++)
                {
                    int id = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][0].ToString());
                    int content_type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][9].ToString());
                    string title = PageDataSource.Tables[0].Rows[i][3].ToString();
                    string summary = PageDataSource.Tables[0].Rows[i][5].ToString();
                    int type = Convert.ToInt32(PageDataSource.Tables[0].Rows[i][2].ToString());
                    string sel_type = "";
                    if (type == 0)
                    {
                        sel_type = "정치/사회";
                    }
                    else if (type == 1)
                    {
                        sel_type = "경제/국제";
                    }
                    else if (type == 2)
                    {
                        sel_type = "문화/예술";
                    }
                    else if (type == 3)
                    {
                        sel_type = "과학/기술";
                    }
                    else if (type == 4)
                    {
                        sel_type = "취재기사";
                    }

                    showArticleView += "<div class='lst' id='lst"
                        + id
                        + "'><div style='width:100%;padding-bottom: 10px;' class='tit_tp'>"
                        + "<strong><a style='cursor:pointer;' class='alst' id='alst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + title
                        + "</a></strong><span><a style='cursor:pointer' class='tlst' id='tlst"
                        + id
                        + "' onclick='showArticleContentPopup("
                        + id
                        + ")' >"
                        + sel_type
                        + "<img src='../images/btn_blnk.png'></a></span></div></div>";
                }
            }
            else
            {
                showArticleView = "";
            }
            Response.Write(showArticleView);
        }
    }
}