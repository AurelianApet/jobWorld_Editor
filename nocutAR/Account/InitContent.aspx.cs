using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DataAccess;
using System.Net;
using jobworld.Common;


namespace jobworld.Account
{
    public partial class InitContent : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Request.Params["step"]))
            {
                return;
            }
            string step = Request.Params["step"];
            string content = "";
            PageDataSource = DBConn.RunSelectQuery("SELECT * FROM news_setting order by id asc");
            int count = PageDataSource.Tables[0].Rows.Count;
            if (count > 0)
            {
                content += "<table>";
                for (int i = 0; i < Math.Ceiling(count / 3.0); i++)
                {
                    content += "<tr>";
                    for (int j = 0; j < 3; j++)
                    {
                        content += "<td>";

                        if (3 * i + j >= count)
                            break;

                        string company = PageDataSource.Tables[0].Rows[3 * i + j][1].ToString();
                        string collector = PageDataSource.Tables[0].Rows[3 * i + j][2].ToString();
                        string editor = PageDataSource.Tables[0].Rows[3 * i + j][3].ToString();

                        if(step == "0")
                        {
                            content += "<table><tr><td>"
                                + "신문사명"
                                + Convert.ToString(3 * i + j + 1)
                                + "</td>"
                                + "</tr><tr><td>"
                                + "취재"
                                + "</td>"
                                + "<td><input type='text' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1) - 1)
                                + "' readonly />"
                                + "</td>"
                                + "</tr><tr>"
                                + "<td>"
                                + "편집"
                                + "</td><td><input type='text' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1))
                                + "' readonly />"
                                + "</td></tr></table>";
                        }
                        else if(step == "1")
                        {
                            content += "<table><tr><td>"
                                + "<input type = 'text' id = 'company"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "신문사명"
                                + Convert.ToString(3 * i + j + 1)
                                + "' readonly />"
                                + "</td>"
                                + "</td><td>"
                                + "<input type = 'button' value = '확인' id='btnCom"
                                + Convert.ToString(3 * i + j)
                                + "' onclick = 'DsetCom("
                                + Convert.ToString(3 * i + j)
                                + ")' style='display:none' />"
                                + "</td>"
                                + "</tr><tr><td>"
                                + "취재"
                                + "</td>"
                                + "<td><input type='text' id='collector"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1) - 1)
                                + "' readonly />"
                                + "</td><td>"
                                + "<input type = 'button' id='btnCol"
                                + Convert.ToString(3 * i + j)
                                + "' onclick='DsetCollector("
                                + Convert.ToString(3 * i + j)
                                + ")' value = '대기' />"
                                + "</td></tr><tr>"
                                + "<td>"
                                + "편집"
                                + "</td><td><input type='text' id='editor"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1))
                                + "' readonly />"
                                + "</td><td>"
                                + "<input type = 'button' id='btnEdi"
                                + Convert.ToString(3 * i + j)
                                + "' onclick='DsetEditor("
                                + Convert.ToString(3 * i + j)
                                + ")' value = '대기' />"
                                + "</td></tr></table>";
                        }
                        else if(step == "2")
                        {
                            content += "<table><tr><td>"
                                + "<input type = 'text' id = 'company1"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "신문사명"
                                + Convert.ToString(3 * i + j + 1)
                                + "' readonly />"
                                + "</td>"
                                + "</td><td>"
                                + "<input type = 'button' value = '확인' id='btnCom1"
                                + Convert.ToString(3 * i + j)
                                + "' onclick = 'DsetCom("
                                + Convert.ToString(3 * i + j)
                                + ")' style='display:none' disabled='true' />"
                                + "</td>"
                                + "</tr><tr><td>"
                                + "취재"
                                + "</td>"
                                + "<td><input type='text' id='collector1"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1) - 1)
                                + "' readonly disable='true' />"
                                + "</td><td>"
                                + "<input type = 'button' id='btnCol1"
                                + Convert.ToString(3 * i + j)
                                + "' onclick='DsetCollector("
                                + Convert.ToString(3 * i + j)
                                + ")' value = '체험중' style='display:none;' />"
                                + "</td></tr><tr>"
                                + "<td>"
                                + "편집"
                                + "</td><td><input type='text' id='editor1"
                                + Convert.ToString(3 * i + j)
                                + "' value='"
                                + "체험자"
                                + Convert.ToString(2 * (3 * i + j + 1))
                                + "' readonly disable='true' />"
                                + "</td><td>"
                                + "<input type = 'button' id='btnEdi1"
                                + Convert.ToString(3 * i + j)
                                + "' onclick='DsetEditor("
                                + Convert.ToString(3 * i + j)
                                + ")' value = '체험중' style='display:none' />"
                                + "</td></tr></table>";
                        }
                        else if(step == "3")
                        {
                            string statue = PageDataSource.Tables[0].Rows[3 * i + j][6].ToString();
                            if (statue == "3")
                            {
                                content += "<table><tr><td>인쇄</td><td>|</td><td>이메일</td></tr></table>"
                                    + "<table><tr><td>"
                                    + company
                                    + "</td><td>"
                                    + "<input type = 'button' value = '확인' onclick = '' />"
                                    + "</td></tr><tr><td>"
                                    + "취재"
                                    + "</td>"
                                    + "<td><input type='text' value='"
                                    + collector
                                    + "' readonly />"
                                    + "</td></tr><tr>"
                                    + "<td>"
                                    + "편집"
                                    + "</td><td><input type='text' value='"
                                    + editor
                                    + "' readonly />"
                                    + "</td></tr></table>";
                            }
                        }
                        content += "</td>";
                    }
                    content += "</tr>";
                }
                content += "</table>";
            }
            Response.Write(content);
        }
    }
}