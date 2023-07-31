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
    public partial class editNewsname : Common.PageBase
    {
        protected override void Page_Load(object sender, EventArgs e)
        {
            string name = Request.Params["newsname"];
        }
    }
}