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
    public partial class getLayout : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string query = "select contentid from news_setting where id=" + IID;
            try
            {
                string contentID = DBConn.RunSelectQuery(query).Tables[0].Rows[0][0].ToString();
                query = "select * from layout where id=" + contentID;
                string layoutid = DBConn.RunSelectQuery(query).Tables[0].Rows[0][2].ToString();
                string top1id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][3].ToString();
                string top2id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][4].ToString();
                string top3id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][5].ToString();
                string top4id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][6].ToString();
                string top5id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][7].ToString();
                string top6id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][8].ToString();
                string banner1id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][9].ToString();
                string banner2id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][10].ToString();
                string adv1id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][11].ToString();
                string adv2id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][12].ToString();
                string adv3id = DBConn.RunSelectQuery(query).Tables[0].Rows[0][13].ToString();
                string nameid = DBConn.RunSelectQuery(query).Tables[0].Rows[0][14].ToString();

                string result = layoutid + "," + top1id + "," + top2id + "," + top3id + "," + top4id + "," + top5id + "," + top6id +
                    "," + banner1id + "," + banner2id + "," + adv1id + "," + adv2id + "," + adv3id + "," + nameid;
                Response.Write(result);
            }
            catch (Exception)
            {
                Response.Write("");
            }
        }
    }
}