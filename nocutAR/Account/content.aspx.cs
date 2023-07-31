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
    public partial class content : Common.PageBase
    {
        private void PageLoad(int type)
        {
            string query = "select * from content order by id asc";
            PageDataSource = DBConn.RunSelectQuery(query);
            showContent.Text = "";
            if (type == 0)
            {
                int count = PageDataSource.Tables[0].Rows.Count;
                if (count > 0)
                {
                    for (int i = 0; i < count; i++)
                    {
//                        showContent.Text += "<li id='liContent"
//                            + PageDataSource.Tables[0].Rows[i][0].ToString()
//                            + "'><div class='tx_data'><a onclick='showContent("
//                            + PageDataSource.Tables[0].Rows[i][0].ToString()
//                            + ")' style='cursor:pointer' >"
//                            + PageDataSource.Tables[0].Rows[i][3].ToString()
//                            + "</a>"
//                            + "<button type='button' class='btn_x'><img src='../images/btn_x.png'></button></div></li>";
                    }
                };
            }
            else if (type == 1)
            {
                int count = PageDataSource.Tables[0].Rows.Count;
                if (count > 0)
                {
                    for (int i = 0; i < count; i++)
                    {
                        showContent.Text += "<li id='liContent"
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + "'><div class='tx_data'><a onclick='showContent("
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + ")' style='cursor:pointer' >"
                            + PageDataSource.Tables[0].Rows[i][4].ToString()
                            + "</a>"
                            + "<button type='button' id='xButton"
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + "' onclick='xButtonClick("
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + ")' class='btn_x'><img src='../images/btn_x.png'></button></div></li>";
                    }
                };
            }
            else if (type == 2)
            {
                int count = PageDataSource.Tables[0].Rows.Count;
                if (count > 0)
                {
                    for (int i = 0; i < count; i++)
                    {
                        showContent.Text += "<li id='liContent"
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + "'><div class='tx_data'><a onclick='showContent("
                            + PageDataSource.Tables[0].Rows[i][0].ToString()
                            + ")' style='cursor:pointer' >"
                            + PageDataSource.Tables[0].Rows[i][5].ToString()
                            + "</a>";
                    }
                };
            }

            query = "select * from advertisement where type=0 order by id asc";
            PageDataSource = DBConn.RunSelectQuery(query);
            int count1 = PageDataSource.Tables[0].Rows.Count;
            if (count1 > 0)
            {
                AdvertisementList1.Text = "";
                for (int i = 0; i < count1; i++)
                {
                    string id = PageDataSource.Tables[0].Rows[i][0].ToString();
                    string imgpath = PageDataSource.Tables[0].Rows[i][2].ToString();
                    AdvertisementList1.Text += "<li class='advertisement1' id='advli"
                        + id
                        + "' >"
                        + "<a style='cursor:pointer' onclick='showAdvContent("
                        + id
                        + ")'><img id='advImage"
                        + id
                        + "' style='width:182px;height:182px;' src="
                        + advPath + imgpath
                        + "></a></li>";
                }
            }

            query = "select * from advertisement where type=1 order by id asc";
            PageDataSource = DBConn.RunSelectQuery(query);
            count1 = PageDataSource.Tables[0].Rows.Count;
            if (count1 > 0)
            {
                AdvertisementList2.Text = "";
                for (int i = 0; i < count1; i++)
                {
                    string id = PageDataSource.Tables[0].Rows[i][0].ToString();
                    string imgpath = PageDataSource.Tables[0].Rows[i][2].ToString();
                    AdvertisementList2.Text += "<li class='advertisement2' id='advli"
                        + id
                        + "' >"
                        + "<a style='cursor:pointer' onclick='showAdvContent("
                        + id
                        + ")'><img id='advImage"
                        + id
                        + "' style='width:182px;height:78px;' src="
                        + advPath + imgpath
                        + "></a></li>";
                }
            }

            query = "select * from advertisement where type=2 order by id asc";
            PageDataSource = DBConn.RunSelectQuery(query);
            count1 = PageDataSource.Tables[0].Rows.Count;
            if (count1 > 0)
            {
                AdvertisementList3.Text = "";
                for (int i = 0; i < count1; i++)
                {
                    string id = PageDataSource.Tables[0].Rows[i][0].ToString();
                    string imgpath = PageDataSource.Tables[0].Rows[i][2].ToString();
                    AdvertisementList3.Text += "<li class='advertisement3' id='advli"
                        + id
                        + "' >"
                        + "<a style='cursor:pointer' onclick='showAdvContent("
                        + id
                        + ")'><img id='advImage"
                        + id
                        + "' style='width:182px;height:110px;' src="
                        + advPath + imgpath
                        + "></a></li>";
                }
            }
        }

        protected override void Page_Load(object sender, EventArgs e)
        {
//            showAll(sender, e);
            string query = "select news_type from news_setting where id=" + IID;
            PageDataSource = DBConn.RunSelectQuery(query);
            int type = 0;
            if(PageDataSource.Tables[0].Rows.Count > 0)
                type = Convert.ToInt32(PageDataSource.Tables[0].Rows[0][0].ToString());

            if (type == 0)
                titleContent.Text = "인터넷신문 편집";
            else if (type == 1)
                titleContent.Text = "지면신문 편집";

            try
            {
                string editor = DBConn.RunSelectQuery("select editor from news_setting where id=" + IID).Tables[0].Rows[0][0].ToString();
                if(editor.Length > 6)
                    editor = editor.Substring(0, 6);
                top_mem.Text = editor + " 기자";
            }
            catch(Exception ex)
            {

            }

            PageLoad(0);
        }
    }
}