<%@ Page Title="" Language="C#" MasterPageFile="~/Account/UserPage.Master" AutoEventWireup="true" CodeBehind="standby.aspx.cs" Inherits="jobworld.Account.standby" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript">
    setInterval(function () {
        loadlink()
    }, 5000);

    function loadlink() {
        $.ajax({
            url: 'getStatue.aspx',
            type: "post",
            async: false,
            success: function (data) {
                var da = data.split(',');
                if(da[0] == "1")
                {
                    document.location = "Login.aspx";
                }
            },
            error: function (data) {
            }
        });
    }
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="wrap_comg">	
    </div>
</asp:Content>