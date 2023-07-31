using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using SelectPdf;
using System.Drawing;
using System.Threading;
using System.Windows.Forms;
using WebsitesScreenshot;

namespace jobworld.Account
{
    public partial class tempsaveContent : Common.PageBase
    {
        private void delTempsave()
        {
            string query = "delete layout where partid=" + IID;
            DBConn.RunDeleteQuery(query);
        }

        private void writeLayout(string layoutid, string top1id, string top2id, string top3id,
            string top4id, string top5id, string top6id, string banner1id, string banner2id, string adv1id, string adv2id, string adv3id, string nameid)
        {
            string query = "insert into layout values('" + IID + "', '" + layoutid
                + "', '" + top1id + "', '" + top2id + "', '" + top3id + "', '" + top4id + "', '" + top5id + "', '" + top6id
                + "', '" + banner1id + "', '" + banner2id + "', '" + adv1id + "', '" + adv2id + "', '" + adv3id + "', '" + nameid + "')";
            try
            {
                DBConn.RunInsertQuery(query);
            }
            catch(Exception)
            {

            }
            query = "select max(id) from layout where partid=" + IID;
            try
            {
                string count = DBConn.RunSelectQuery(query).Tables[0].Rows[0][0].ToString();
                query = "update news_setting set contentid='" + count + "' where id=" + IID;
                DBConn.RunUpdateQuery(query);
            }
            catch(Exception)
            {

            }
        }

        private string writeLayoutContent(string topid, string title, string cont, string summary, string image, string layoutid)
        {
            /*
            topid
            0-name
            1-top1
            2-top2
            3-top3
            4-top4
            5-top5
            6-top6
            7-banner1
            8-banner2
            9-adv1
            10-adv2
            11-adv3
             */
            try
            {
                title = title.Replace("'", "''");
                cont = cont.Replace("'", "''");
                summary = summary.Replace("'", "''");
                image = image.Replace("'", "''");
            }
            catch(Exception)
            {

            }
            try
            {
                string query = "insert into layoutContent values('" + topid + "', '" + title + "', '" + cont + "', '" + summary + "', '" + layoutid + "', '" + image + "')";
                DBConn.RunInsertQuery(query);
            }
            catch(Exception)
            {
            }
            try
            {
                string query = "select max(id) from layoutContent";
                string count = DBConn.RunSelectQuery(query).Tables[0].Rows[0][0].ToString();
                return count;
            }
            catch(Exception)
            {
                return "0";
            }
        }

        protected override void Page_Load(object sender, EventArgs e)
        {
            delTempsave();
            string type = Request.Params["type"];
            string cont = "";
            string title = "";
            string image = "";
            string summary = "";
            string name = "";

            switch(type)
            {
                case "1":
                    {
                        //layout1 name
                        name = Request.Params["layout1name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout1 top1
                        title = Request.Params["layout1top1title"];
                        image = Request.Params["layout1top1image"];
                        cont = Request.Params["layout1top1content"];
                        summary = Request.Params["layout1top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout1 top2
                        title = Request.Params["layout1top2title"];
                        cont = Request.Params["layout1top2content"];
                        summary = Request.Params["layout1top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, "", type);

                        //layout1 top3
                        title = Request.Params["layout1top3title"];
                        cont = Request.Params["layout1top3content"];
                        summary = Request.Params["layout1top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, "", type);

                        //layout1 banner1
                        image = Request.Params["layout1banner1"];
                        string banner1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner1id = "0";
                        }
                        else
                        {
                            banner1id = writeLayoutContent("7", "", "", "", image, type);
                        }
                        //layout1 banner2
                        image = Request.Params["layout1banner2"];
                        string banner2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner2id = "0";
                        }
                        else
                        {
                            banner2id = writeLayoutContent("8", "", "", "", image, type);
                        }
                        //layout1 adv3
                        image = Request.Params["layout1adv3"];
                        string adv3id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv3id = "0";
                        }
                        else
                        {
                            adv3id = writeLayoutContent("11", "", "", "", image, type);
                        }
                        //modify layoutdb

                        writeLayout(type, top1id, top2id, top3id, "0", "0", "0", banner1id, banner2id, "0", "0", adv3id, nameid);
                        break;
                    }
                case "4":
                    {
                        //layout4 name
                        name = Request.Params["layout4name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout4 top1
                        title = Request.Params["layout4top1title"];
                        image = Request.Params["layout4top1image"];
                        cont = Request.Params["layout4top1content"];
                        summary = Request.Params["layout4top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout4 top2
                        title = Request.Params["layout4top2title"];
                        image = Request.Params["layout4top2image"];
                        cont = Request.Params["layout4top2content"];
                        summary = Request.Params["layout4top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout4 top3
                        title = Request.Params["layout4top3title"];
                        cont = Request.Params["layout4top3content"];
                        summary = Request.Params["layout4top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, "", type);

                        //layout4 top4
                        title = Request.Params["layout4top4title"];
                        cont = Request.Params["layout4top4content"];
                        summary = Request.Params["layout4top4summary"];
                        string top4id = writeLayoutContent("4", title, cont, summary, "", type);

                        //layout4 banner1
                        image = Request.Params["layout4banner1"];
                        string banner1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner1id = "0";
                        }
                        else
                        {
                            banner1id = writeLayoutContent("7", "", "", "", image, type);
                        }
                        //layout4 banner2
                        image = Request.Params["layout4banner2"];
                        string banner2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner2id = "0";
                        }
                        else
                        {
                            banner2id = writeLayoutContent("8", "", "", "", image, type);
                        }
                        //layout4 adv1
                        image = Request.Params["layout4adv1"];
                        string adv1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv1id = "0";
                        }
                        else
                        {
                            adv1id = writeLayoutContent("9", "", "", "", image, type);
                        }
                        //layout4 adv3
                        image = Request.Params["layout4adv3"];
                        string adv3id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv3id = "0";
                        }
                        else
                        {
                            adv3id = writeLayoutContent("11", "", "", "", image, type);
                        }
                        writeLayout(type, top1id, top2id, top3id, top4id, "0", "0", banner1id, banner2id, adv1id, "0", adv3id, nameid);
                        break;
                    }
                case "5":
                    {
                        //layout5 name
                        name = Request.Params["layout5name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout5 top1
                        title = Request.Params["layout5top1title"];
                        image = Request.Params["layout5top1image"];
                        cont = Request.Params["layout5top1content"];
                        summary = Request.Params["layout5top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout5 top2
                        title = Request.Params["layout5top2title"];
                        cont = Request.Params["layout5top2content"];
                        summary = Request.Params["layout5top2summary"];
                        image = Request.Params["layout5top2image"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout5 top3
                        title = Request.Params["layout5top3title"];
                        cont = Request.Params["layout5top3content"];
                        summary = Request.Params["layout5top3summary"];
                        image = Request.Params["layout5top3image"];
                        string top3id = writeLayoutContent("3", title, cont, summary, image, type);

                        //layout5 top4
                        title = Request.Params["layout5top4title"];
                        cont = Request.Params["layout5top4content"];
                        summary = Request.Params["layout5top4summary"];
                        string top4id = writeLayoutContent("4", title, cont, summary, "", type);

                        //layout5 top5
                        title = Request.Params["layout5top5title"];
                        cont = Request.Params["layout5top5content"];
                        summary = Request.Params["layout5top5summary"];
                        string top5id = writeLayoutContent("5", title, cont, summary, "", type);

                        //layout5 top6
                        title = Request.Params["layout5top6title"];
                        cont = Request.Params["layout5top6content"];
                        summary = Request.Params["layout5top6summary"];
                        string top6id = writeLayoutContent("6", title, cont, summary, "", type);

                        //layout5 banner1
                        image = Request.Params["layout5banner1"];
                        string banner1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner1id = "0";
                        }
                        else
                        {
                            banner1id = writeLayoutContent("7", "", "", "", image, type);
                        }
                        //layout5 banner2
                        image = Request.Params["layout5banner2"];
                        string banner2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner2id = "0";
                        }
                        else
                        {
                            banner2id = writeLayoutContent("8", "", "", "", image, type);
                        }
                        //layout5 adv3
                        image = Request.Params["layout5adv3"];
                        string adv3id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv3id = "0";
                        }
                        else
                        {
                            adv3id = writeLayoutContent("8", "", "", "", image, type);
                        }
                        writeLayout(type, top1id, top2id, top3id, top4id, top5id, top6id, banner1id, banner2id, "0", "0", adv3id, nameid);
                        break;
                    }
                case "6":
                    {
                        //layout6 name
                        name = Request.Params["layout6name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout6 top1
                        title = Request.Params["layout6top1title"];
                        image = Request.Params["layout6top1image"];
                        cont = Request.Params["layout6top1content"];
                        summary = Request.Params["layout6top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout6 top2
                        title = Request.Params["layout6top2title"];
                        image = Request.Params["layout6top2image"];
                        cont = Request.Params["layout6top2content"];
                        summary = Request.Params["layout6top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout6 top3
                        title = Request.Params["layout6top3title"];
                        image = Request.Params["layout6top3image"];
                        cont = Request.Params["layout6top3content"];
                        summary = Request.Params["layout6top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, image, type);

                        //layout6 adv1
                        string adv1id;
                        image = Request.Params["layout6adv1"];
                        if (string.IsNullOrEmpty(image))
                        {
                            adv1id = "0";
                        }
                        else
                        {
                            adv1id = writeLayoutContent("9", "", "", "", image, type);
                        }

                        //layout6 adv3
                        image = Request.Params["layout6adv3"];
                        string adv3id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv3id = "0";
                        }
                        else
                        {
                            adv3id = writeLayoutContent("11", "", "", "", image, type);
                        }
                        writeLayout(type, top1id, top2id, top3id, "", "", "", "", "", adv1id, "0", adv3id, nameid);
                        break;
                    }
                case "7":
                    {
                        //layout7 name
                        name = Request.Params["layout7name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout7 top1
                        title = Request.Params["layout7top1title"];
                        image = Request.Params["layout7top1image"];
                        cont = Request.Params["layout7top1content"];
                        summary = Request.Params["layout7top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout7 top2
                        title = Request.Params["layout7top2title"];
                        image = Request.Params["layout7top2image"];
                        cont = Request.Params["layout7top2content"];
                        summary = Request.Params["layout7top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout7 top3
                        title = Request.Params["layout7top3title"];
                        image = Request.Params["layout7top3image"];
                        cont = Request.Params["layout7top3content"];
                        summary = Request.Params["layout7top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, image, type);

                        //layout7 top4
                        title = Request.Params["layout7top4title"];
                        image = Request.Params["layout7top4image"];
                        cont = Request.Params["layout7top4content"];
                        summary = Request.Params["layout7top4summary"];
                        string top4id = writeLayoutContent("4", title, cont, summary, image, type);

                        //layout7 adv1
                        image = Request.Params["layout7adv1"];
                        string adv1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv1id = "0";
                        }
                        else
                        {
                            adv1id = writeLayoutContent("9", "", "", "", image, type);
                        }
                        //layout7 adv2
                        image = Request.Params["layout7adv2"];
                        string adv2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv2id = "0";
                        }
                        else
                        {
                            adv2id = writeLayoutContent("10", "", "", "", image, type);
                        }
                        writeLayout(type, top1id, top2id, top3id, top4id, "", "", "0", "0", adv1id, adv2id, "0", nameid);
                        break;
                    }
                case "8":
                    {
                        //layout8 name
                        name = Request.Params["layout8name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout8 top1
                        title = Request.Params["layout8top1title"];
                        image = Request.Params["layout8top1image"];
                        cont = Request.Params["layout8top1content"];
                        summary = Request.Params["layout8top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout8 top2
                        title = Request.Params["layout8top2title"];
                        image = Request.Params["layout8top2image"];
                        cont = Request.Params["layout8top2content"];
                        summary = Request.Params["layout8top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout8 top3
                        title = Request.Params["layout8top3title"];
                        image = Request.Params["layout8top3image"];
                        cont = Request.Params["layout8top3content"];
                        summary = Request.Params["layout8top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, image, type);

                        //layout8 top4
                        title = Request.Params["layout8top4title"];
                        image = Request.Params["layout8top4image"];
                        cont = Request.Params["layout8top4content"];
                        summary = Request.Params["layout8top4summary"];
                        string top4id = writeLayoutContent("4", title, cont, summary, image, type);

                        //layout8 top5
                        title = Request.Params["layout8top5title"];
                        image = Request.Params["layout8top5image"];
                        cont = Request.Params["layout8top5content"];
                        summary = Request.Params["layout8top5summary"];
                        string top5id = writeLayoutContent("5", title, cont, summary, image, type);

                        //layout8 adv1
                        image = Request.Params["layout8adv1"];
                        string adv1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv1id = "0";
                        }
                        else
                        {
                            adv1id = writeLayoutContent("9", "", "", "", image, type);
                        }
                        //layout8 adv2
                        image = Request.Params["layout8adv2"];
                        string adv2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv2id = "0";
                        }
                        else
                        {
                            adv2id = writeLayoutContent("10", "", "", "", image, type);
                        }
                        writeLayout(type, top1id, top2id, top3id, top4id, top5id, "", "0", "0", adv1id, adv2id, "", nameid);
                        break;
                    }
                case "9":
                    {
                        //layout9 name
                        name = Request.Params["layout9name"];
                        string nameid = writeLayoutContent("0", name, "", "", "", type);

                        //layout9 top1
                        title = Request.Params["layout9top1title"];
                        image = Request.Params["layout9top1image"];
                        cont = Request.Params["layout9top1content"];
                        summary = Request.Params["layout9top1summary"];
                        string top1id = writeLayoutContent("1", title, cont, summary, image, type);

                        //layout9 top2
                        title = Request.Params["layout9top2title"];
                        image = Request.Params["layout9top2image"];
                        cont = Request.Params["layout9top2content"];
                        summary = Request.Params["layout9top2summary"];
                        string top2id = writeLayoutContent("2", title, cont, summary, image, type);

                        //layout9 top3
                        title = Request.Params["layout9top3title"];
                        image = Request.Params["layout9top3image"];
                        cont = Request.Params["layout9top3content"];
                        summary = Request.Params["layout9top3summary"];
                        string top3id = writeLayoutContent("3", title, cont, summary, image, type);

                        //layout9 top4
                        title = Request.Params["layout9top4title"];
                        image = Request.Params["layout9top4image"];
                        cont = Request.Params["layout9top4content"];
                        summary = Request.Params["layout9top4summary"];
                        string top4id = writeLayoutContent("4", title, cont, summary, image, type);

                        //layout9 top5
                        title = Request.Params["layout9top5title"];
                        image = Request.Params["layout9top5image"];
                        cont = Request.Params["layout9top5content"];
                        summary = Request.Params["layout9top5summary"];
                        string top5id = writeLayoutContent("5", title, cont, summary, image, type);

                        //layout9 top6
                        title = Request.Params["layout9top6title"];
                        image = Request.Params["layout9top6image"];
                        cont = Request.Params["layout9top6content"];
                        summary = Request.Params["layout9top6summary"];
                        string top6id = writeLayoutContent("6", title, cont, summary, image, type);

                        //layout9 adv1
                        image = Request.Params["layout9adv1"];
                        string adv1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            adv1id = "0";
                        }
                        else
                        {
                            adv1id = writeLayoutContent("9", "", "", "", image, type);
                        }
                        //layout9 banner1
                        image = Request.Params["layout9banner1"];
                        string banner1id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner1id = "0";
                        }
                        else
                        {
                            banner1id = writeLayoutContent("7", "", "", "", image, type);
                        }
                        //layout9 banner2
                        image = Request.Params["layout9banner2"];
                        string banner2id;
                        if (string.IsNullOrEmpty(image))
                        {
                            banner2id = "0";
                        }
                        else
                        {
                            banner2id = writeLayoutContent("8", "", "", "", image, type);
                        }

                        writeLayout(type, top1id, top2id, top3id, top4id, top5id, top6id, banner1id, banner2id, adv1id, "0", "0", nameid);
                        break;
                    }
            }
            Response.Write("");
        }
    }
}