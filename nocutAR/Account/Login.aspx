<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/Account/UserPage.Master" CodeBehind="Login.aspx.cs" Inherits="jobworld.Account.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        function onLogin()
        {
            var editorname = document.getElementById("nm").value;
            if (editorname == null || editorname == "")
            {
                alert("이름을 입력하세요.");
                return;
            }
            var type = document.getElementById("news_type").selectedIndex;
            var newsname = document.getElementById("pap2").value;
            if (newsname == null || newsname == "")
            {
                alert("신문사명을 입력하세요.");
                return;
            }
            if (newsname.length > 6)
            {
                alert("신문사명은 6자이하여야 합니다.");
                return;
            }
            var email = document.getElementById("mal").value;
            if (email == null || email == "")
            {
                alert("이메일을 입력하세요.");
                return;
            }
            if (email.indexOf("@") == -1 || email.indexOf(".") == -1)
            {
                alert("이메일형식이 아닙니다.");
                return;
            }
            var data = new FormData();
            data.append("name", editorname);
            data.append("type", type);
            data.append("newsname", newsname);
            data.append("email", email);

            $.ajax({
                url: "ConfirmLogin.aspx",
                type: "post",
                data:data,
                processData: false,
                contentType: false,
                async: false,
                success: function (data, textStatus, jqXHR) {
                    if(data == "success")
                    {
                        location.href = "standby1.aspx";
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {

                }
            });
        }

        function loadlink() {
            $.ajax({
                url: 'getStatue.aspx',
                type: "post",
                async: false,
                success: function (data) {
                    var da = data.split(',');
                    if (da[0] == "0") {
                        document.location = "standby.aspx";
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

<asp:Content ID="Content4" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="wrap_comg">
	    <div class="box_login">
		    <div class="ar_inp ar_inp2">
			    <div class="nm"><label for="nm">이름</label>
                    <input type="text" maxlength="4" id="nm">			    
			    </div>
			    <div class="pap"><label for="news_type">신문종류</label>
                    <select id="news_type" style="margin-top: 2px;margin-left: 10px;width: 150px;height: 30px;">
                        <option>인터넷신문</option>
                        <option>지면신문</option>
                    </select>
                </div>
			    <div class="pap"><label for="pap2">신문사명</label>
                    <input type="text" maxlength="6" id="pap2">
			    </div>
			    <div class="mal"><label for="mal">이메일</label>
                    <input type="text" id="mal">
                </div>
			    <div class="btn_ok">
                    <a style="cursor:pointer" onclick="onLogin()">확인</a>
                </div>
		    </div>
	    </div>
    </div>
</asp:Content>