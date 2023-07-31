<%@ Page Title="" Language="C#" MasterPageFile="~/Account/UserPage.Master" AutoEventWireup="true" CodeBehind="standby2.aspx.cs" Inherits="jobworld.Account.standby2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript">
    function loadlink() {
        $.ajax({
            url: 'getStatue.aspx',
            type: "post",
            async: false,
            success: function (data) {
                var da = data.split(',');
                if (da[0] == "3") {
                    document.location = "standby3.aspx";
                }
                else if(da[0] == "1")
                {
                    document.location = "Login.aspx";
                }
                else if (da[0] == "0") {
                    document.location = "standby.aspx";
                }
                else if(da[0] == "2")
                {
                    if(da[1] == "1")
                    {
                        document.location = "content.aspx";
                    }
                }
            },
            error: function (data) {
            }
        });
    }

    setInterval(function () {
        loadlink()
    }, 1000);
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="wrap_comg" style="background: url(../images/3.gif) no-repeat 0 0;">	
    </div>
</asp:Content>