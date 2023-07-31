using DataAccess;
using System.Text;
using System.Data;
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
using ICSharpCode.SharpZipLib.Checksums;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.GZip;
using System.Text.RegularExpressions;


namespace jobworld.Account
{
    public partial class saveContent : Common.PageBase
    {
        private WebsitesScreenshot.WebsitesScreenshot __AsyncWebsitesScreenshot;
        private string img_savePath;
        public void ConvertHtmlToImage(string url, string image_savePath)
        {
            img_savePath = image_savePath;
            __AsyncWebsitesScreenshot = new WebsitesScreenshot.WebsitesScreenshot("PLSE9Q09IJIONHYUV92I8EZ9H");
            __AsyncWebsitesScreenshot.CaptureResult += new WebsitesScreenshot.WebsitesScreenshot.CaptureResultEventHandler(
                        __AsyncWebsitesScreenshot_CaptureWebpageResult);
            __AsyncWebsitesScreenshot.CaptureWebpageAsync(url);
        }

        private void __AsyncWebsitesScreenshot_CaptureWebpageResult
    (WebsitesScreenshot.WebsitesScreenshot.Result pResult)
        {
            if (pResult == WebsitesScreenshot.
                WebsitesScreenshot.Result.Captured)
            {
                __AsyncWebsitesScreenshot.ImageWidth = 1080;
                __AsyncWebsitesScreenshot.ImageHeight = 1418;
                __AsyncWebsitesScreenshot.SaveImage(img_savePath);
            }
        }

        private void copyFiles(string saveDirectoryPath)
        {
            string originalDirecotoryPath = absContentPath + @"origin\";

            if (System.IO.Directory.Exists(originalDirecotoryPath))
            {
                string[] files = System.IO.Directory.GetFiles(originalDirecotoryPath);
                foreach (string s in files)
                {
                    try
                    {
                        string fileName = System.IO.Path.GetFileName(s);
                        string destFile = System.IO.Path.Combine(saveDirectoryPath, fileName);
                        System.IO.File.Copy(s, destFile, false);
                    }
                    catch (Exception)
                    {

                    }
                }
            }
        }

        private void makeZip(string saveDirectoryPath)
        {
            // zip up the files
            try
            {
                string[] filenames = Directory.GetFiles(saveDirectoryPath);

                // Zip up the files - From SharpZipLib Demo Code
                using (ZipOutputStream s = new ZipOutputStream(File.Create(saveDirectoryPath + @"\result" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".zip")))
                {
                    s.SetLevel(9); // 0-9, 9 being the highest level of compression
                    byte[] buffer = new byte[4096];
                    foreach (string file in filenames)
                    {
                        ZipEntry entry = new ZipEntry(Path.GetFileName(file));
                        entry.DateTime = DateTime.Now;
                        s.PutNextEntry(entry);
                        using (FileStream fs = File.OpenRead(file))
                        {
                            int sourceBytes;
                            do
                            {
                                sourceBytes = fs.Read(buffer, 0, buffer.Length);
                                s.Write(buffer, 0, sourceBytes);

                            } while (sourceBytes > 0);
                        }
                    }
                    s.Finish();
                    s.Close();
                }
            }
            catch (Exception)
            {

            }
        }

        private void copyImageFiles(string subimage, string saveDirectoryPath)
        {
            string originalDirecotoryPath = absContentPath + @"articleFiles\" + subimage;
            try
            {
                string destFile = System.IO.Path.Combine(saveDirectoryPath, subimage);
                System.IO.File.Copy(originalDirecotoryPath, destFile, true);
            }
            catch (Exception ex)
            {

            }
        }

        private void copyAdvFiles(string subimage, string saveDirectoryPath)
        {
            string originalDirecotoryPath = absAdvertisementPath + subimage;
            try
            {
                string destFile = System.IO.Path.Combine(saveDirectoryPath, subimage);
                System.IO.File.Copy(originalDirecotoryPath, destFile, true);
            }
            catch (Exception ex)
            {

            }
        }

        private void delTempsave()
        {
            string query = "delete layout where partid=" + IID;
            DBConn.RunDeleteQuery(query);
        }

        protected override void Page_Load(object sender, EventArgs e)
        {
            string content = Request.Params["content"];

            string query = "select number from news_setting where id=" + IID;
            string num = DBConn.RunSelectQuery(query).Tables[0].Rows[0][0].ToString();
            
            query = "select * from news_setting where id=" + IID;
            PageDataSource = DBConn.RunSelectQuery(query);

            DateTime dateTime = DateTime.UtcNow.Date;
            string today = dateTime.ToString("yyyyMMdd");
            string foldername = today + @"_" + num;
            string partfoldername = IID;
            string saveDirectoryPath = absContentPath + foldername + @"\" + partfoldername + @"\";
            try
            {
                if (!System.IO.Directory.Exists(saveDirectoryPath))
                    System.IO.Directory.CreateDirectory(saveDirectoryPath);
            }
            catch (Exception)
            {

            }
            string[] files = System.IO.Directory.GetFiles(saveDirectoryPath);
            foreach (string s in files)
            {
                try
                {
                    System.IO.File.Delete(s);
                }
                catch (Exception)
                {

                }
            }
            copyFiles(saveDirectoryPath);
            string header = "<html>"
            + "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />"
            + "<link href='css.css' rel='stylesheet' type='text/css' media='all' >"
            + "<link rel='stylesheet' type='text/css' href='common.css' >"
            + "<link rel='stylesheet' type='text/css' href='layout.css' >"
            + "<link rel='stylesheet' type='text/css' href='content.css' >"
            + "<script type='text/javascript' src='showResult.js'></script>"
            //            + "<script>$(document).ready(function() {"
            //            + "document.getElementById('layout6_footer').style.display='';"
            //            + "document.getElementById('layout7_footer').style.display='';"
            //            + "document.getElementById('layout8_footer').style.display='';"
            //            + "document.getElementById('layout9_footer').style.display='';"
            //            + "});</script>"
            + "<body style='overflow-x:hidden;'><center><div id='container'>"
            + "<div id = 'content1' class='clfix'>"
            + "<div class='wrap_3col clfix'>"
            + "<div class='box_contc'>"
            + "<section class='ar_inbox' style='border:1px;'>"
            + "<div class='cont_srf' id='newsEdit' style='height:100%;overflow-y: initial;'>";

            string printheader = "<html>"
            + "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />"
            + "<link href='css.css' rel='stylesheet' type='text/css' media='all' >"
            + "<link rel='stylesheet' type='text/css' href='common.css' >"
            + "<link rel='stylesheet' type='text/css' href='layout.css' >"
            + "<link rel='stylesheet' type='text/css' href='content.css' >"
            + "<script src='jquery-1.11.2.min.js' type='text/javascript'></script><script>"
            + "$(document).ready(function() {"
            + "window.print();});</script>"
            + "<body style='overflow-x:hidden;'><center><div id='container'>"
            + "<div id = 'content1' class='clfix'>"
            + "<div class='wrap_3col clfix'>"
            + "<div class='box_contc'>"
            + "<section class='ar_inbox' style='border:1px;'>"
            + "<div class='cont_srf' id='newsEdit' style='height:100%;overflow-y: initial;'>";

            string footer = "</div></section></div></div></div></div>";
            string lastfooter = "</div></center></body></html>";

            string pattern = @"src=""http://[\w]*[\d+.]*[:][\d]+[/]*[\w]*[/]*(?<VAL>[\w-]*[.][\w]*)";
            MatchCollection mc = Regex.Matches(content, pattern);
            string[] subimages = new string[mc.Count];
            int ct = 0;
            foreach (Match m in mc)
            {
                subimages[ct] = m.Groups["VAL"].Value;
                try
                {
                    copyImageFiles(subimages[ct], saveDirectoryPath);
                }
                catch(Exception)
                {

                }
                try
                {
                    copyAdvFiles(subimages[ct], saveDirectoryPath);
                }
                catch (Exception) { }
                try
                {
                    content = content.Replace(conPath + "articleFiles/" + subimages[ct], subimages[ct]);
                }
                catch (Exception)
                {

                }
                try
                {
                    content = content.Replace(advPath + subimages[ct], subimages[ct]);
                }
                catch (Exception)
                {

                }
                ct++;
            }

            string popupForm = System.IO.File.ReadAllText(absContentPath + @"origin\popup.txt");
            string sContent = header + content + footer + popupForm + lastfooter;
            string sContentPrint = printheader + content + footer + popupForm + lastfooter;

            sContent = sContent.Replace("../images/", "");
            sContent = sContent.Replace("../font/", "");
            sContent = sContent.Replace("<div class='box_contc'>", "<div class='box_contc' style='width:810px'>");
            sContent = sContent.Replace("<div class='wrap_3col clfix'>", "<div class='wrap_3col clfix' style='width:810px'>");
            sContent = sContent.Replace("onerror=", "onclick=");
            //            byte[] bytes = Encoding.Default.GetBytes(sContent);
            //            sContent = Encoding.UTF8.GetString(bytes);
            sContentPrint = sContentPrint.Replace("../images/", "");
            sContentPrint = sContentPrint.Replace("../font/", "");
            sContentPrint = sContentPrint.Replace("<div class='box_contc'>", "<div class='box_contc' style='width:810px'>");
            sContentPrint = sContentPrint.Replace("<div class='wrap_3col clfix'>", "<div class='wrap_3col clfix' style='width:810px'>");
            sContentPrint = sContentPrint.Replace("onerror=", "onclick=");

            if (PageDataSource.Tables[0].Rows.Count > 0)
            {
                string news_type = PageDataSource.Tables[0].Rows[0][9].ToString();
                string company = PageDataSource.Tables[0].Rows[0][1].ToString();
                string collector = PageDataSource.Tables[0].Rows[0][2].ToString();
                string editor = PageDataSource.Tables[0].Rows[0][3].ToString();
                if(news_type == "0")
                {
                    //인터넷신문
                    //html파일 만들기
                    string filename = foldername + @"\" + partfoldername + @"\" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".html";
                    string printfilename = foldername + @"\" + partfoldername + @"\" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + "_print.html";
                    try
                    {
                        System.IO.File.AppendAllText(absContentPath + filename, sContent, Encoding.UTF8);
                        System.IO.File.AppendAllText(absContentPath + printfilename, sContentPrint, Encoding.UTF8);

                        string imageFilename = DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".jpg";
                        ConvertHtmlToImage(conPath + printfilename, absImagePath + imageFilename);

                        query = "update news_setting set savePath='" + filename + "', saveImagePath='" + imageFilename + "' where id=" + IID;
                        DBConn.RunUpdateQuery(query);
                        string curdatetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff");
                        query = "insert into completeArticles values('" + IID + "', '" + filename + "', '0', '" + curdatetime + "', '" + company + "', '" + collector + "', '" + editor + "', '0', '" + imageFilename + "', '1')";
                        DBConn.RunInsertQuery(query);
                        query = "update news_setting set e_statue=2 where id=" + IID;
                        DBConn.RunUpdateQuery(query);

                        Response.Write("success");
                    }
                    catch (Exception)
                    {

                    }
                }
                else if(news_type == "1")
                {
                    //지면신문
                    //pdf파일 만들기
                    string filename = foldername + @"\" + partfoldername + @"\" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".pdf";
                    string filename1 = foldername + @"\" + partfoldername + @"\" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".html";
                    string print_filename = foldername + @"\" + partfoldername + @"\" + DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + "_print.html";

                    string imageFilename = "";
                    try
                    {
                        imageFilename = DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss") + "_" + IID + ".jpg";
                        System.IO.File.AppendAllText(absContentPath + filename1, sContent, Encoding.UTF8);
                        System.IO.File.AppendAllText(absContentPath + print_filename, sContentPrint, Encoding.UTF8);
                        ConvertHtmlToImage(conPath + print_filename, absImagePath+ imageFilename);
                    }
                    catch (Exception)
                    {

                    }

                    //pageSize
                    //A1
                    //A2
                    //A3
                    //A4
                    //A5
                    //Letter
                    //HalfLetter
                    //Ledger
                    //Legal

                    string pdf_page_size = "A4";
                    PdfPageSize pageSize = (PdfPageSize)Enum.Parse(typeof(PdfPageSize),
                        pdf_page_size, true);

                    //Portrait
                    //Landscape
                    string pdf_orientation = "Portrait";
                    PdfPageOrientation pdfOrientation =
                        (PdfPageOrientation)Enum.Parse(typeof(PdfPageOrientation),
                        pdf_orientation, true);

                    int webPageWidth = 1024;
                    int webPageHeight = 0;

                    // instantiate a html to pdf converter object
                    HtmlToPdf converter = new HtmlToPdf();

                    // set converter options
                    converter.Options.PdfPageSize = pageSize;
                    converter.Options.PdfPageOrientation = pdfOrientation;
                    converter.Options.WebPageWidth = webPageWidth;
                    converter.Options.WebPageHeight = webPageHeight;
                    try
                    {
                        // create a new pdf document converting an url
//                        PdfDocument doc = converter.ConvertHtmlString(sContent, baseUrl);

                        PdfDocument doc = converter.ConvertUrl(absContentPath + print_filename);

                        string fullpath = absContentPath + filename;
                        doc.Save(fullpath);
                        doc.Close();
                        query = "update news_setting set savePath='" + filename + "', saveImagePath='" + imageFilename + "' where id=" + IID;
                        DBConn.RunUpdateQuery(query);
                        string curdatetime = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss.fff");
                        query = "insert into completeArticles values('" + IID + "', '" + filename + "', '1', '" + curdatetime + "', '" + company + "', '" + collector + "', '" + editor + "', '0', '" + imageFilename + "', '1')";
                        DBConn.RunInsertQuery(query);
                        query = "update news_setting set e_statue=2 where id=" + IID;
                        DBConn.RunUpdateQuery(query);
                        Response.Write("success");
                    }
                    catch(Exception)
                    {

                    }
                }
            }
            makeZip(saveDirectoryPath);
//            delTempsave();
        }
    }
}