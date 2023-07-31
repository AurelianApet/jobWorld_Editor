function getLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 0x80) {
            len++;
        } else {
            len += 2;
        }
    }
    return len;
}

function change(obj, len) {
    var txt = obj.value;
    if (getLength(txt) <= len) {
        return;
    }
    while (getLength(txt) > len) {
        txt = txt.substring(0, txt.length - 1);
    }
    obj.value = txt;
}

function getLetters(str, limit_num, limit_row)
{
    var len = 0;
    var rows = 0;
    var content = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) == 10) {
            len = 0;
            rows++;
            if (rows >= limit_row)
                break;
            content += "\n";
        }
        else if (str.charCodeAt(i) < 0x80) {
            if (len >= limit_num) {
                len = 1;
                rows++;
            }
            else {
                len++;
            }
            if (rows >= limit_row)
                break;
            content += str[i];
        } else {
            if (len >= limit_num) {
                len = 1;
                rows++;
            }
            else {
                len += 2;
            }
            if (rows >= limit_row)
                break;
            content += str[i];
        }
    }
    return content;
}

function change1(obj, len) {
    var txt = obj.innerHTML;
    if (getLength(txt) <= len) {
        return;
    }
    while (getLength(txt) > len) {
        txt = txt.substring(0, txt.length - 1);
    }
    obj.innerHTML = txt;
}

function getLayoutContent(layoutid, topid, type) {
    /*
    type
    1:title
    2:content
    3:summary
    4:image
    */
    var content = "";
    $.ajax({
        url: "getLayoutContent.aspx?topid=" + topid + "&type=" + type,
        type: "post",
        processData: false,
        contentType: false,
        async: false,
        success: function (data, textStatus, jqXHR) {
            content = data;
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
    return content;
}

function InitNewsName() {
    $.ajax({
        url: "getNewsname.aspx",
        type: "post",
        processData: false,
        contentType: false,
        async: false,
        success: function (data, textStatus, jqXHR) {
            if (data != null) {
                var names = data.split(',');
                if (names[0] != null) {
                    edit_News_name = names[0];
                    document.getElementById("layout1_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout1_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout4_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout4_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout5_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout5_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout6_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout6_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout7_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout7_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout8_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout8_Newsname").innerText = names[0].substr(0, 6);

                    document.getElementById("layout9_Newsname").style.fontSize = '32pt';
                    document.getElementById("layout9_Newsname").innerText = names[0].substr(0, 6);
                }
                if (names[1] != null && names[2] != null) {
                    document.getElementById("layout1_author").innerText = "취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout4_author").innerText = "취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout5_author").innerText = "취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout6_author").innerHTML = "<a style='cursor:pointer;' onclick='window.open(\"http://www.koreajobworld.or.kr\", \"koreajobworld\", \"width=1920,height=1080\")'>www.koreajobworld.or.kr</a>\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout7_author").innerHTML = "<a style='cursor:pointer;' onclick='window.open(\"http://www.koreajobworld.or.kr\", \"koreajobworld\", \"width=1920,height=1080\")'>www.koreajobworld.or.kr</a>\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout8_author").innerHTML = "<a style='cursor:pointer;' onclick='window.open(\"http://www.koreajobworld.or.kr\", \"koreajobworld\", \"width=1920,height=1080\")'>www.koreajobworld.or.kr</a>\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                    document.getElementById("layout9_author").innerHTML = "<a style='cursor:pointer;' onclick='window.open(\"http://www.koreajobworld.or.kr\", \"koreajobworld\", \"width=1920,height=1080\")'>www.koreajobworld.or.kr</a>\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002\u2002취재기자 : " + names[1].substr(0, 3) + " | 편집기자 : " + names[2].substr(0, 3);
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function InitNewsList() {
    /*
                $.ajax({
                    url: "getNewsList.aspx",
                    type: "post",
                    processData: false,
                    contentType: false,
                    async: false,
                    success: function (data) {
                        document.getElementById("layout6_news").innerHTML = "";
                        document.getElementById("layout7_news").innerHTML = "";
                        document.getElementById("layout8_news").innerHTML = "";
                        var strs = data.split(',*,');
                        for (i = 0; i < strs.length - 1; i++) {
                            var str = strs[i].split(':*:');
                            try {
                                var title = str[1];
                            }
                            catch (e) {
    
                            }
                            try {
                                var id = str[0];
                            }
                            catch (e) {
    
                            }
                            document.getElementById("layout6_news").innerHTML += "<li style='text-align: left;background: url(../images/dot_lay.png) no-repeat 0 24%;padding-left: 10px;margin-bottom: 7px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'"
                                + ">" + "<a style='cursor:pointer' onclick='showArticleContentPopup(" + id + ")'>" + title.substr(0, 16) + "</a></li>";
                            document.getElementById("layout7_news").innerHTML += "<li style='text-align: left;background: url(../images/dot_lay.png) no-repeat 0 24%;padding-left: 10px;margin-bottom: 7px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'"
                                + ">" + "<a style='cursor:pointer' onclick='showArticleContentPopup(" + id + ")'>" + title.substr(0, 16) + "</a></li>";
                            document.getElementById("layout8_news").innerHTML += "<li style='text-align: left;background: url(../images/dot_lay.png) no-repeat 0 24%;padding-left: 10px;margin-bottom: 7px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;'"
                                + ">" + "<a style='cursor:pointer' onclick='showArticleContentPopup(" + id + ")'>" + title.substr(0, 16) + "</a></li>";
                        }
                    }
                });
    */
    for (var i = 6; i <= 9; i++) {
        $.ajax({
            url: "getNews.aspx",
            type: "post",
            processData: false,
            contentType: false,
            async: false,
            success: function (data) {
                var strs = data.split(',*,');
                for (var j = 0; j < strs.length - 1; j++) {
                    var str = strs[j].split(':*:');
                    try {
                        var link = str[1];
                    }
                    catch (e) {

                    }
                    try {
                        var name = str[0];
                    }
                    catch (e) {

                    }
                    if (link != null && link != "")
                    {
                        document.getElementById("layout" + i + "_news").innerHTML +=
                            "<li><a style='cursor:pointer' onclick='window.open(\""
                            + link
                            + "\", \"_blank\", \"width=1920,height=1080\")'>"
                            + name
                            + "</a></li>";
                    }
                    else
                    {
                        document.getElementById("layout" + i + "_news").innerHTML +=
                            "<li><a>"
                            + name
                            + "</a></li>";
                    }
                }
            }
        });
    }
}

function InitDragDrop() {
    $(".alst").draggable({
        helper: "clone",
        revert: "invalid",
        opacity: "0.3"
    });

    $(".advertisement3").draggable({
        helper: "clone",
        revert: "invalid",
        opacity: "0.3"
    });

    $(".advertisement1").draggable({
        helper: "clone",
        revert: "invalid",
        opacity: "0.3"
    });

    $(".advertisement2").draggable({
        helper: "clone",
        revert: "invalid",
        opacity: "0.3"
    });

    $("#layout4_tp_bm1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            layout4_count++;
            document.getElementById("layout4_tp_bm1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout4Bm1").style.display = "";
            document.getElementById("layout4_notice_tp1").style.display = "none";
            document.getElementById("layout4_bn11").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout4_bn11").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
        }
    });

    $("#layout4_tp_bm2").droppable({
        accept: ".advertisement1",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            layout4_count++;
            document.getElementById("layout4_tp_bm2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout4Bm2").style.display = "";
            document.getElementById("layout4_notice_tp2").style.display = "none";
            document.getElementById("layout4_bn12").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout4_bn12").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
        }
    });

    $("#layout5_banner").droppable({
        accept: ".advertisement3",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            layout5_count++;
            document.getElementById("layout5_banner").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout5Banner").style.display = "";
            document.getElementById("layout5_temp_banner").style.display = "none";
            document.getElementById("layout5banner").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout5banner").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
        }
    });

    $("#layout6_tp_bm").droppable({
        accept: ".advertisement3",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout6_tp_bm").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout6Bm").style.display = "";
            document.getElementById("layout6_notice_tp").style.display = "none";
            document.getElementById("layout6_bn").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout6_bn").src = document.getElementById("advImage" + d_lid).src;
                layout6_count++;
            }
            sel_layout++;
        }
    });

    $("#layout6_tp_bn1").droppable({
        accept: ".advertisement1",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout6_tp_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout6bn1").style.display = "";
            document.getElementById("layout6_notice_bn1").style.display = "none";
            document.getElementById("layout6_bn1").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout6_bn1").src = document.getElementById("advImage" + d_lid).src;
                layout6_count++;
            }
            sel_layout++;
        }
    });

    $("#layout7_tp_bm1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout7_tp_bm1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout7Bm1").style.display = "";
            document.getElementById("layout7_notice_tp1").style.display = "none";
            document.getElementById("layout7_bn1").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout7_bn1").src = document.getElementById("advImage" + d_lid).src;
            }
            layout7_count++;
            sel_layout++;
        }
    });

    $("#layout7_tp_bm2").droppable({
        accept: ".advertisement1",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout7_tp_bm2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout7Bm2").style.display = "";
            document.getElementById("layout7_notice_tp2").style.display = "none";
            document.getElementById("layout7_bn2").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout7_bn2").src = document.getElementById("advImage" + d_lid).src;
            }
            layout7_count++;
            sel_layout++;
        }
    });

    $("#layout8_tp_bm1").droppable({
        accept: ".advertisement1",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout8_tp_bm1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout8Bm1").style.display = "";
            document.getElementById("layout8_notice_tp1").style.display = "none";
            document.getElementById("layout8_bn11").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout8_bn11").src = document.getElementById("advImage" + d_lid).src;
            }
            layout8_count++;
            sel_layout++;
        }
    });

    $("#layout8_bn1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout8_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout8Bm2").style.display = "";
            document.getElementById("layout8_notice_tp2").style.display = "none";
            document.getElementById("layout8_bn12").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout8_bn12").src = document.getElementById("advImage" + d_lid).src;
            }
            layout8_count++;
            sel_layout++;
        }
    });

    $("#layout9_tp_bm").droppable({
        accept: ".advertisement1",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout9_tp_bm").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout9Bm").style.display = "";
            document.getElementById("layout9_notice_tp1").style.display = "none";
            document.getElementById("layout9_bn3").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout9_bn3").src = document.getElementById("advImage" + d_lid).src;
            }
            layout9_count++;
            sel_layout++;
        }
    });

    $("#layout9_bn1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout9_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout9Bn1").style.display = "";
            document.getElementById("layout9_notice_tp2").style.display = "none";
            document.getElementById("layout9_bn1_image").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout9_bn1_image").src = document.getElementById("advImage" + d_lid).src;
            }
            layout9_count++;
            sel_layout++;
        }
    });

    $("#layout9_bn2").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout9_bn2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout9Bn2").style.display = "";
            document.getElementById("layout9_notice_tp3").style.display = "none";
            document.getElementById("layout9_bn2_image").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout9_bn2_image").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout9_count++;
        }
    });

    $("#layout1_temp .bn1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout1_temp_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout1Bn1").style.display = "";
            document.getElementById("layout1_notice_bn1").style.display = "none";
            document.getElementById("layout1_lbanner").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout1_lbanner").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout1_count++;
        }
    });

    $("#layout1_temp .bn2").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout1_temp_bn2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout1Bn2").style.display = "";
            document.getElementById("layout1_notice_bn2").style.display = "none";
            document.getElementById("layout1_rbanner").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout1_rbanner").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout1_count++;
        }
    });

    $("#layout4_temp .bn1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout4_temp_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout4Bn1").style.display = "";
            document.getElementById("layout4_notice_bn1").style.display = "none";
            document.getElementById("layout4_bn1").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout4_bn1").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout4_count++;
        }
    });

    $("#layout4_temp .bn2").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout4_temp_bn2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout4Bn2").style.display = "";
            document.getElementById("layout4_notice_bn2").style.display = "none";
            document.getElementById("layout4_bn2").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout4_bn2").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout4_count++;
        }
    });

    $("#layout5_temp .bn1").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout5_temp_bn1").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout5Bn1").style.display = "";
            document.getElementById("layout5_notice_bn1").style.display = "none";
            document.getElementById("layout5_bn1").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout5_bn1").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout5_count++;
        }
    });

    $("#layout5_temp .bn2").droppable({
        accept: ".advertisement2",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout5_temp_bn2").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout5Bn2").style.display = "";
            document.getElementById("layout5_notice_bn2").style.display = "none";
            document.getElementById("layout5_bn2").style.display = "";

            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout5_bn2").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout5_count++;
        }
    });

    $("#layout1_tp_bm").droppable({
        accept: ".advertisement3",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            document.getElementById("layout1_tp_bm").style = "background-image:url(); cursor:pointer;";
            document.getElementById("imgLayout1Bm").style.display = "";
            document.getElementById("layout1_notice_tp").style.display = "none";
            document.getElementById("layout1_adv").style.display = "";
            var d_lid = ui.helper.context.id;
            d_lid = d_lid.replace("advli", "");
            if (document.getElementById("advImage" + d_lid).src != null && document.getElementById("advImage" + d_lid).src != "") {
                document.getElementById("layout1_adv").src = document.getElementById("advImage" + d_lid).src;
            }
            sel_layout++;
            layout1_count++;
        }
    });

    $(".lnb").droppable({
        accept: ".alst",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function (event, ui) {
            var lid = ui.helper.context.id;
            lid = lid.replace("alst", "");

            if (document.getElementById("liContent" + lid) == null) {
                var element_div = '<li id="liContent' + lid + '"><div class="tx_data"><a class="aContent" id="aContent'
                    + lid
                    + '" onclick="showContent('
                    + lid + ')" style="cursor:pointer">' + document.getElementById("alst" + lid).innerText
                    + '</a><button type="button" onclick="xButtonClick('
                    + lid
                    + ')" id="xButton' + lid + '" class="btn_x"><img src="../images/btn_x.png"></button></div></li>'
                $(".dt_list ul").append(element_div);
                addCount(lid);
                //                    currentID = lid;
                DragDropFunc();
            }
            else {
                onClosePopup();
                document.getElementById("popupForm").style.display = "";
                document.getElementById("layoutFormpopup").style.display = "";
            }
        }
    });
}

function addCount(id) {
    $.ajax({
        url: 'addCount.aspx?id=' + id,
        type: "post",
        async: false,
        success: function () {
        },
        error: function () {
        }
    });
}

function LoadMenu() {
    show(selectedMenuType + 1);
}

function onShowPreview() {
    onClosePopup();
    document.getElementById("popupForm").style.display = "";
    document.getElementById("show_preview_popup").style.display = "";
    var preview_content = document.getElementById("newsEdit").innerHTML.split('ondblclick=').join('onerror=');
    preview_content = preview_content.split('onclick=').join('onerror=');
    document.getElementById("preview_popup_result").innerHTML = preview_content;

    if (cur_SelLayout == 6) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout6Content').children('#layout6_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 7) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout7Content').children('#layout7_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 8) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout8Content').children('#layout8_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 9) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout9Content').children('#layout9_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 1) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout1Content').children('#layout1_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 2) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout2Content').children('#layout2_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 3) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout3Content').children('#layout3_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 4) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout4Content').children('#layout4_temp').attr('style', 'display:none');
    }
    else if (cur_SelLayout == 5) {
        $('#show_preview_popup').children('.clfix').children('.ar_inbox').children('#preview_popup_result').children('#layout5Content').children('#layout5_temp').attr('style', 'display:none');
    }
}

function onLayoutSel(id1, id2) {
        for (var i = 1; i <= 4; i++) {
            var elm = document.getElementById("layout" + id1 + "_sel" + i);
            if (i == id2) {
                document.getElementById(elm).setAttribute("class", "on");
            }
            else {
                document.getElementById(elm).setAttribute("class", "");
            }
            current_selected_type = id2 - 1;
        }
    }

    function DragDropFunc() {
        $(".dt_list ul li").draggable({
            helper: "clone",
            revert: "invalid",
            opacity: "0.3"
        });

        $("#layout1_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout1_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout1_temp_top1").style.display = "none";
                document.getElementById("imgLayout1Top1").style.display = "";
                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "")
                                    {
                                        document.getElementById("layout1_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout1_top1_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout1_top1_title").innerHTML = title;
                                        if (getLength(title) > 100)
                                        {
                                            change1(document.getElementById("layout1_top1_title"), 100);
                                          //  document.getElementById("layout1_top1_title").innerHTML += "···";
                                        }
                                        document.getElementById("layout1_top1_title1").value = title;
                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout1_top1_content").innerText = summary;
                                    }

                                    if (content != null && content != "") {
                                        document.getElementById("layout1_top1_summary").value = content;
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout1_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout1_top1_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout1_count++;
                                document.getElementById("layout1_top1_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                        //                            $("#liContent" + d_lid).children('div').html("<div class='tx_data'>" + $("#liContent" + d_lid).children('div').html() + "</div>");
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout1_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout1_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout1_temp_top2").style.display = "none";
                document.getElementById("imgLayout1Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout1_top2_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout1_top2_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout1_top2_title").innerHTML = title;
                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout1_top2_con").value = summary;
//                                        document.getElementById("layout1_top2_content").innerText = getLetters(summary, 26, 19);
                                        document.getElementById("layout1_top2_content").innerText = summary;
                                    }

                                    if (content != null && content != "") {
                                        document.getElementById("layout1_top2_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout1_count++;
                                document.getElementById("layout1_top2_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });
        $("#layout1_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout1_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout1_temp_top3").style.display = "none";
                document.getElementById("imgLayout1Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                        + d_lid
                        + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout1_top3_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout1_top3_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout1_top3_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout1_top3_content").innerText = summary;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout1_top3_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout1_count++;
                                option = 0;
                                document.getElementById("layout1_top3_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout4_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout4_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout4_temp_top1").style.display = "none";
                document.getElementById("imgLayout4Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout4_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout4_top1_regdate").innerText = today1;
//                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout4_top1_title1").value = title;
                                        document.getElementById("layout4_top1_title").innerHTML = title;
                                        if (getLength(title) > 84) {
                                            change1(document.getElementById("layout4_top1_title"), 84);
                                       //     document.getElementById("layout4_top1_title").innerHTML += "···";
                                        }
                                    }

                                    if (content != null && content != "") {
                                        document.getElementById("layout4_top1_summary").value = content;
                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout4_top1_con").value = summary;
//                                        document.getElementById("layout4_top1_content").innerText = getLetters(summary, 28, 13);
                                        document.getElementById("layout4_top1_content").innerText = summary;
                                    }

                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout4_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout4_top1_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout4_count++;
                                option = 0;
                                document.getElementById("layout4_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout4_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout4_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout4_temp_top2").style.display = "none";
                document.getElementById("imgLayout4Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout4_top2_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout4_top2_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout4_top2_title").innerHTML = title;
                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout4_top2_con").value = summary;
//                                        document.getElementById("layout4_top2_content").innerText = getLetters(summary, 28, 16);
                                        document.getElementById("layout4_top2_content").innerText = summary;
                                    }

                                    if (content != null && content != "") {
                                        document.getElementById("layout4_top2_summary").value = content;
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout4_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout4_top2_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout4_count++;
                                option = 0;
                                document.getElementById("layout4_top2_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout4_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout4_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout4_temp_top3").style.display = "none";
                document.getElementById("imgLayout4Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout4_top3_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout4_top3_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout4_top3_title").innerHTML = title;
                                    }

                                    if (content != null && content != "") {
                                        document.getElementById("layout4_top3_summary").value = content;
                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout4_top3_con").value = summary;
//                                        document.getElementById("layout4_top3_content").innerText = getLetters(summary, 27, 15);
                                        document.getElementById("layout4_top3_content").innerText = summary;
                                    }
                                }
                                sel_layout++;
                                layout4_count++;
                                option = 0;
                                document.getElementById("layout4_top3_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout4_top4").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout4_top4").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout4_temp_top4").style.display = "none";
                document.getElementById("imgLayout4Top4").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP4</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP4</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout4_top4_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout4_top4_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout4_top4_title").innerHTML = title;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout4_top4_summary").value = content;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout4_top4_con").value = summary;
//                                        document.getElementById("layout4_top4_content").innerText = getLetters(summary, 27, 15);
                                        document.getElementById("layout4_top4_content").innerText = summary;
                                    }
                                }
                                sel_layout++;
                                layout4_count++;
                                option = 0;
                                document.getElementById("layout4_top4_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top1").style.display = "none";
                document.getElementById("imgLayout5Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top1_regdate").innerText = today1;
//                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top1_title1").value = title;
                                        document.getElementById("layout5_top1_title").innerHTML = title;
                                        if (getLength(title) > 84) {
                                            change1(document.getElementById("layout5_top1_title"), 84);
                                         //   document.getElementById("layout5_top1_title").innerHTML += "···";
                                        }
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top1_con").value = summary;
//                                        document.getElementById("layout5_top1_content").innerText = getLetters(summary, 28, 13);
                                        document.getElementById("layout5_top1_content").innerText = summary;
                                    }

                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout5_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout5_top1_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top1_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout5_count++;
                                option = 0;
                                document.getElementById("layout5_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top2").style.display = "none";
                document.getElementById("imgLayout5Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top2_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top2_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top2_title").innerHTML = title;
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout5_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout5_top2_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top2_summary").value = content;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top2_con").value = summary;
//                                        document.getElementById("layout5_top2_content").innerText = getLetters(summary, 29, 16);
                                        document.getElementById("layout5_top2_content").innerText = summary;
                                    }
                                }
                                sel_layout++;
                                option = 0;
                                layout5_count++;
                                document.getElementById("layout5_top2_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top3").style.display = "none";
                document.getElementById("imgLayout5Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top3_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top3_regdate").innerText = today1;
//                                    }

                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout5_top3_image").src = conDomain + imagepath;
                                        document.getElementById("layout5_top3_image").style.display = "";
                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top3_title").innerHTML = title;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top3_summary").value = content;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top3_con").value = summary;
                                        document.getElementById("layout5_top3_content").innerText = summary;
                                    }
                                }
                                sel_layout++;
                                layout5_count++;
                                option = 0;
                                document.getElementById("layout5_top3_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top4").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top4").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top4").style.display = "none";
                document.getElementById("imgLayout5Top4").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP4</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP4</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top4_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top4_regdate").innerText = today1;
//                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top4_con").value = summary;
//                                        document.getElementById("layout5_top4_content").innerText = getLetters(summary, 28, 15);
                                        document.getElementById("layout5_top4_content").innerText = summary;
                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top4_title").innerHTML = title;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top4_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout5_count++;
                                option = 0;
                                document.getElementById("layout5_top4_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top5").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top5").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top5").style.display = "none";
                document.getElementById("imgLayout5Top5").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP5</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP5</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top5_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top5_regdate").innerText = today1;
//                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top5_con").value = summary;
//                                        document.getElementById("layout5_top5_content").innerText = getLetters(summary, 28, 15);
                                        document.getElementById("layout5_top5_content").innerText = summary;
                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top5_title").innerHTML = title;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top5_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                option = 0;
                                layout5_count++;
                                document.getElementById("layout5_top5_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout5_top6").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout5_top6").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout5_temp_top6").style.display = "none";
                document.getElementById("imgLayout5Top6").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP6</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP6</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                        content = content.split('\\n').join('<br>');
                                        content = content.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout5_top6_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout5_top6_regdate").innerText = today1;
//                                    }

                                    if (summary != null && summary != "") {
                                        document.getElementById("layout5_top6_con").value = summary;
//                                        document.getElementById("layout5_top6_content").innerText = getLetters(summary, 28, 15);
                                        document.getElementById("layout5_top6_content").innerText = summary;
                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout5_top6_title").innerHTML = title;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout5_top6_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout5_count++;
                                option = 0;
                                document.getElementById("layout5_top6_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout6_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout6_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout6_temp_top1").style.display = "none";
                document.getElementById("imgLayout6Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout6_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout6_top1_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout6_top1_title1").value = title;
                                        document.getElementById("layout6_top1_title").innerHTML = title;
                                        if (getLength(title) > 35) {
                                            change1(document.getElementById("layout6_top1_title"), 32);
                                            document.getElementById("layout6_top1_title").innerHTML += "···";
                                        }
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout6_top1_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout6_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout6_top1_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout6_top1_summary").value = content.split('<br>').join('\n');
                                    }
//                                    document.getElementById("layout6_footer").style.display = "";
                                }
                                sel_layout++;
                                layout6_count++;
                                option = 0;
                                document.getElementById("layout6_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout6_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout6_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout6_temp_top2").style.display = "none";
                document.getElementById("imgLayout6Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout6_top2_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout6_top2_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout6_top2_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout6_top2_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout6_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout6_top2_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout6_top2_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                layout6_count++;
                                option = 0;
                                sel_layout++;
                                document.getElementById("layout6_top2_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout6_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout6_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout6_temp_top3").style.display = "none";
                document.getElementById("imgLayout6Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout6_top3_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout6_top3_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout6_top3_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout6_top3_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout6_top3_image").src = conDomain + imagepath;
                                        document.getElementById("layout6_top3_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout6_top3_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                layout6_count++;
                                sel_layout++;
                                document.getElementById("layout6_top3_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout7_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout7_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout7_temp_top1").style.display = "none";
                document.getElementById("imgLayout7Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout7_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout7_top1_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout7_top1_title1").value = title;
                                        document.getElementById("layout7_top1_title").innerHTML = title;
                                        if (getLength(title) > 35) {
                                            change1(document.getElementById("layout7_top1_title"), 32);
                                            document.getElementById("layout7_top1_title").innerHTML += "···";
                                        }
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout7_top1_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout7_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout7_top1_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout7_top1_summary").value = content.split('<br>').join('\n');
                                    }
//                                    document.getElementById("layout7_footer").style.display = "";
                                }
                                layout7_count++;
                                sel_layout++;
                                option = 0;
                                document.getElementById("layout7_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout7_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout7_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout7_temp_top2").style.display = "none";
                document.getElementById("imgLayout7Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout7_top2_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout7_top2_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout7_top2_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout7_top2_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout7_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout7_top2_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout7_top2_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                layout7_count++;
                                option = 0;
                                sel_layout++;
                                document.getElementById("layout7_top2_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout7_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout7_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout7_temp_top3").style.display = "none";
                document.getElementById("imgLayout7Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout7_top3_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout7_top3_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout7_top3_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout7_top3_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout7_top3_image").src = conDomain + imagepath;
                                        document.getElementById("layout7_top3_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout7_top3_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout7_count++;
                                option = 0;
                                document.getElementById("layout7_top3_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout7_top4").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout7_top4").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout7_temp_top4").style.display = "none";
                document.getElementById("imgLayout7Top4").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP4</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP4</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout7_top4_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout7_top4_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout7_top4_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout7_top4_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout7_top4_image").src = conDomain + imagepath;
                                        document.getElementById("layout7_top4_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout7_top4_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout7_count++;
                                option = 0;
                                document.getElementById("layout7_top4_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout8_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout8_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout8_temp_top1").style.display = "none";
                document.getElementById("imgLayout8Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout8_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout8_top1_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout8_top1_title1").value = title;
                                        document.getElementById("layout8_top1_title").innerHTML = title;
                                        if (getLength(title) > 39) {
                                            change1(document.getElementById("layout8_top1_title"), 36);
                                            document.getElementById("layout8_top1_title").innerHTML += "···";
                                        }
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout8_top1_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout8_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout8_top1_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout8_top1_summary").value = content.split('<br>').join('\n');
                                    }
//                                    document.getElementById("layout8_footer").style.display = "";
                                }
                                sel_layout++;
                                layout8_count++;
                                option = 0;
                                document.getElementById("layout8_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout8_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout8_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout8_temp_top2").style.display = "none";
                document.getElementById("imgLayout8Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                addCount(d_lid);

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout8_top2_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout8_top2_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout8_top2_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout8_top2_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout8_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout8_top2_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout8_top2_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout8_count++;
                                document.getElementById("layout8_top2_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout8_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout8_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout8_temp_top3").style.display = "none";
                document.getElementById("imgLayout8Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");
                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout8_top3_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout8_top3_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout8_top3_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout8_top3_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout8_top3_image").src = conDomain + imagepath;
                                        document.getElementById("layout8_top3_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout8_top3_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout8_count++;
                                document.getElementById("layout8_top3_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout8_top4").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout8_top4").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout8_temp_top4").style.display = "none";
                document.getElementById("imgLayout8Top4").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP4</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP4</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout8_top4_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout8_top4_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout8_top4_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout8_top4_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout8_top4_image").src = conDomain + imagepath;
                                        document.getElementById("layout8_top4_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout8_top4_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout8_count++;
                                option = 0;
                                document.getElementById("layout8_top4_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout8_top5").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout8_top5").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout8_temp_top5").style.display = "none";
                document.getElementById("imgLayout8Top5").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP5</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP5</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout8_top5_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout8_top5_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout8_top5_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout8_top5_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout8_top5_image").src = conDomain + imagepath;
                                        document.getElementById("layout8_top5_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout8_top5_summary").value = content.split('<br>').join('\n');
                                    }
                                }
                                sel_layout++;
                                layout8_count++;
                                option = 0;
                                document.getElementById("layout8_top5_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top1").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top1").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top1").style.display = "none";
                document.getElementById("imgLayout9Top1").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP1</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP1</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top1_author").innerText = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top1_regdate").innerText = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top1_title1").value = title;
                                        document.getElementById("layout9_top1_title").innerHTML = title;
                                        if (getLength(title) > 33) {
                                            change1(document.getElementById("layout9_top1_title"), 30);
                                            document.getElementById("layout9_top1_title").innerHTML += "···";
                                        }
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top1_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top1_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top1_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top1_summary").value = content.split('<br>').join('\n');
                                    }
//                                    document.getElementById("layout9_footer").style.display = "";
                                }
                                sel_layout++;
                                layout9_count++;
                                option = 0;
                                document.getElementById("layout9_top1_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top2").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top2").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top2").style.display = "none";
                document.getElementById("imgLayout9Top2").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP2</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP2</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top2_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top2_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top2_title").innerHTML = title.split('<br>').join('\n');
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top2_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top2_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top2_image").style.display = "";
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top2_summary").value = content;
                                    }
                                }
                                sel_layout++;
                                layout9_count++;
                                document.getElementById("layout9_top2_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top3").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top3").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top3").style.display = "none";
                document.getElementById("imgLayout9Top3").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP3</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP3</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top3_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top3_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top3_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top3_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top3_summary").value = content.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top3_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top3_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout9_count++;
                                document.getElementById("layout9_top3_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top4").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top4").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top4").style.display = "none";
                document.getElementById("imgLayout9Top4").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP4</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP4</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top4_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top4_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top4_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top4_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top4_summary").value = content.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top4_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top4_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout9_count++;
                                option = 0;
                                document.getElementById("layout9_top4_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top5").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top5").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top5").style.display = "none";
                document.getElementById("imgLayout9Top5").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP5</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP5</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top5_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top5_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top5_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top5_content").innerText = summary.split('<br>').join('\n');;
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top5_summary").value = content.split('<br>').join('\n');;
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top5_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top5_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout9_count++;
                                document.getElementById("layout9_top5_value").value = d_lid;
                                option = 0;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });

        $("#layout9_top6").droppable({
            accept: ".dt_list ul li",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                document.getElementById("layout9_top6").style = "background-image:url(); cursor:pointer;";
                document.getElementById("layout9_temp_top6").style.display = "none";
                document.getElementById("imgLayout9Top6").style.display = "";

                var d_lid = ui.helper.context.id;
                d_lid = d_lid.replace("liContent", "");
                addCount(d_lid);

                $("#liContent" + d_lid).children('div').attr("class", "tx_data add");

                if ($("#liContent" + d_lid).children('div').html().indexOf("icpos") == -1) {
                    if ($("#showArticleContent").children('ul').html().indexOf("<span>TOP6</span>") == -1) {
                        $("#liContent" + d_lid).children('div').html("<span class='icpos' style='cursor:pointer' onclick='onCaption("
                            + d_lid
                            + ")'><span>TOP6</span></span>" + $("#liContent" + d_lid).children('div').html());
                        $.ajax({
                            url: "getContent.aspx?id=" + d_lid,
                            type: "post",
                            processData: false,
                            contentType: false,
                            async: false,
                            success: function (data, textStatus, jqXHR) {
                                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                                var x = xmlDoc.getElementsByTagName("content");
                                for (i = 0; i < x.length; i++) {
                                    try {
                                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                                        content = content.split('\\r\\n\\r\\n').join('<br>');
                                        content = content.split('\\r\\n').join('<br>');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                                        summary = summary.split('\\r\\n\\r\\n').join('<br>');
                                        summary = summary.split('\\r\\n').join('<br>');
                                        summary = summary.split('<br>').join('\n');
                                    }
                                    catch (e) {

                                    }
                                    try {
                                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    try {
                                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                                    }
                                    catch (e) {

                                    }

                                    if (author != null && author != "") {
                                        document.getElementById("layout9_top6_author").value = author + "기자";
                                    }

//                                    if (regdate != null && regdate != "") {
                                        document.getElementById("layout9_top6_regdate").value = today1;
//                                    }

                                    if (title != null && title != "") {
                                        document.getElementById("layout9_top6_title").innerHTML = title;
                                    }
                                    if (summary != null && summary != "") {
                                        document.getElementById("layout9_top6_content").innerText = summary.split('<br>').join('\n');
                                    }
                                    if (content != null && content != "") {
                                        document.getElementById("layout9_top6_summary").value = content.split('<br>').join('\n');
                                    }
                                    if (imagepath != null && imagepath != "") {
                                        document.getElementById("layout9_top6_image").src = conDomain + imagepath;
                                        document.getElementById("layout9_top6_image").style.display = "";
                                    }
                                }
                                sel_layout++;
                                layout9_count++;
                                option = 0;
                                document.getElementById("layout9_top6_value").value = d_lid;
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                            }
                        });
                    }
                    else {
                        onClosePopup();
                        document.getElementById("popupForm").style.display = "";
                        document.getElementById("layoutFormpopup").style.display = "";
                    }
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("layoutFormpopup").style.display = "";
                }
            }
        });
    }

    function checkLayout()
    {
        if (sel_layout == 0)
            return true;
        return false;
    }

    function onLayout(id) {
        if (checkLayout()) {
            onShowEdit();
            document.getElementById("newsContent").style.display = "none";
            document.getElementById("newsEdit").style.display = "";
            for (var i = 1; i <= 9; i++) {
                if (i == 2) { continue; }
                else if (i == 3) { continue; }

                var elm = document.getElementById("layout" + i + "Content");
                var elm1 = document.getElementById("li_layout" + i);
                if (i == id) {
                    elm.style.display = "";
                    elm1.setAttribute("class", "on");
                }
                else {
                    elm.style.display = "none";
                    elm1.setAttribute("class", "");
                }
            }
            cur_SelLayout = id;
        }
        else {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup2").style.display = "";
        }
    }

    function onContentList() {
        document.getElementById("mySelectedArticleMenu").style.background = "#2d96c1";
        document.getElementById("AdvertisementMenu").style.background = "#2d435c";
        document.getElementById("showArticleContent").style.display = "block";
        document.getElementById("showAdvertisementContent").style.display = "none";
        sel_content_type = 0;
    }

    function onAdvertisement() {
        document.getElementById("AdvertisementMenu").style.background = "#2d96c1";
        document.getElementById("mySelectedArticleMenu").style.background = "#2d435c";
        document.getElementById("showArticleContent").style.display = "none";
        document.getElementById("showAdvertisementContent").style.display = "block";
        sel_content_type = 1;
    }

    function onShowContent() {
        document.getElementById("layout_select").style.display = "none";
        sel_content_type = 0;
        document.getElementById("newsEdit").style.display = "none";
        document.getElementById("newsContent").style.display = "";
        document.getElementById("articleMenu").setAttribute("class", "on");
        document.getElementById("editMenu").setAttribute("class", "");
    }

    function onShowEdit() {
        document.getElementById("layout_select").style.display = "";
        document.getElementById("newsEdit").style.display = "";
        document.getElementById("newsContent").style.display = "none";
        document.getElementById("articleMenu").setAttribute("class", "");
        document.getElementById("editMenu").setAttribute("class", "on");
//        InitSelectLayout1();
        InitNewsName();
    }

    function xButtonClick(id) {
        var con = $("#xButton" + id).parent().html();
        if (con.indexOf("<span>TOP1</span>") > -1)
        {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        else if (con.indexOf("<span>TOP2</span>") > -1) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        else if (con.indexOf("<span>TOP3</span>") > -1) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        else if (con.indexOf("<span>TOP4</span>") > -1) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        else if (con.indexOf("<span>TOP5</span>") > -1) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        else if (con.indexOf("<span>TOP6</span>") > -1) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup1").style.display = "";
            return;
        }
        $("#xButton" + id).parent().parent('li').remove();
    }

    function showArticleContentPopup(id) {
        addCount(id);
        current_articleID = id;
        onClosePopup();
        document.getElementById("popupForm").style.display = "";
        document.getElementById("article_showDetail").style.display = "";
        $.ajax({
            url: "getContent.aspx?id=" + id,
            type: "post",
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                var x = xmlDoc.getElementsByTagName("content");
                for (i = 0; i < x.length; i++) {
                    try {
                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var imagepath = x[i].getElementsByTagName("imagepath")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var author = x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var regdate = x[i].getElementsByTagName("regdate")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    content = content.split('\\r\\n\\r\\n').join('\n');
                    summary = summary.split('\\r\\n\\r\\n').join('\n');
                    content = content.split('\\r\\n').join('\n');
                    summary = summary.split('\\r\\n').join('\n');
                    content = content.split('\\n').join('\n');
                    summary = summary.split('\\n').join('\n');

                    try {
                        var type = x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    if (type == "0") {
                        type = "정치/사회";
                    }
                    else if (type == "1") {
                        type = "경제/국제";
                    }
                    else if (type == "2") {
                        type = "문화/예술";
                    }
                    else if (type == "3") {
                        type = "과학/기술";
                    }
                    else if (type == "4") {
                        type = "취재기사";
                    }
                    if (content != null && content != "") {
                        document.getElementById("articleDetailText").innerText = content;
                    }
                    if (imagepath != null && imagepath != "") {
                        document.getElementById("articleDetailImage").src = conDomain + imagepath;
                    }
                    if (title != null && title != "") {
                        document.getElementById("articleDetailTitle").innerText = title;
                    }
                    if (author != null && author != "") {
                        document.getElementById("author").innerText = author;
                    }
                    if (regdate != null && regdate != "") {
                        document.getElementById("regdate").innerText = regdate;
                    }
                    /*
                                        if (summary != null && summary != "") {
                                            document.getElementById("articleDetailSummary").innerText = summary;
                                        }                    
                    */
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    }

    function saveArticle() {
        onShowResult();
        onShowPreview();
        onClosePopup();
        var data = new FormData();
        data.append("content", document.getElementById("preview_popup_result").innerHTML);
        $.ajax({
            url: "saveContent.aspx",
            type: "post",
            data: data,
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                layout1_count = 0; layout2_count = 0; layout3_count = 0; layout4_count = 0; layout5_count = 0; layout6_count = 0; layout7_count = 0;
                layout8_count = 0; layout9_count = 0;
                if (data == "success") {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("saveFormpopup1").style.display = "";
                    location.href = "standby2.aspx";
                }
                else {
                    onClosePopup();
                    document.getElementById("popupForm").style.display = "";
                    document.getElementById("saveFormpopup2").style.display = "";
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                onClosePopup();
                document.getElementById("popupForm").style.display = "";
                document.getElementById("saveFormpopup3").style.display = "";
            }
        });
    }

    function GetContent() {
        var data = new FormData();
        data.append("type", cur_SelLayout);
//        switch (cur_SelLayout) {
        if (cur_SelLayout == 1 || cur_SelLayout == "1")
//            case 1, "1":
                {
                    data.append("layout1name", document.getElementById("layout1_Newsname").innerHTML);
                    data.append("layout1top1title", document.getElementById("layout1_top1_title1").value);
                    data.append("layout1top1image", document.getElementById("layout1_top1_image").src);
                    var content = document.getElementById("layout1_top1_content").innerText;
                    data.append("layout1top1summary", content);
                    data.append("layout1top1content", document.getElementById("layout1_top1_summary").value.split('<br>').join('\n'));

                    data.append("layout1top2title", document.getElementById("layout1_top2_title").innerText);
                    var content = document.getElementById("layout1_top2_con").value;
                    data.append("layout1top2summary", content);
                    data.append("layout1top2content", document.getElementById("layout1_top2_summary").value.split('<br>').join('\n'));

                    data.append("layout1top3title", document.getElementById("layout1_top3_title").innerText);
                    var content = document.getElementById("layout1_top3_content").innerText;
                    data.append("layout1top3summary", content);
                    data.append("layout1top3content", document.getElementById("layout1_top3_summary").value.split('<br>').join('\n'));

                    if (document.getElementById("layout1_lbanner").src.indexOf('.jpg') > -1 || document.getElementById("layout1_lbanner").src.indexOf('.png') > -1) {
                        data.append("layout1banner1", document.getElementById("layout1_lbanner").src);
                    }
                    if (document.getElementById("layout1_rbanner").src.indexOf('.jpg') > -1 || document.getElementById("layout1_rbanner").src.indexOf('.png') > -1) {
                        data.append("layout1banner2", document.getElementById("layout1_rbanner").src);
                    }
                    if (document.getElementById("layout1_adv").src.indexOf('.jpg') > -1 || document.getElementById("layout1_adv").src.indexOf('.png') > -1) {
                        data.append("layout1adv3", document.getElementById("layout1_adv").src);
                    }
//                    break;
                }
        else if (cur_SelLayout == 4 || cur_SelLayout == "4")
//            case 4, "4":
                {
                    data.append("layout4name", document.getElementById("layout4_Newsname").innerHTML);
                    data.append("layout4top1title", document.getElementById("layout4_top1_title1").value);
                    data.append("layout4top1image", document.getElementById("layout4_top1_image").src);
                    var content = document.getElementById("layout4_top1_con").value;
                    data.append("layout4top1summary", content);
                    data.append("layout4top1content", document.getElementById("layout4_top1_summary").value.split('<br>').join('\n'));

                    data.append("layout4top2title", document.getElementById("layout4_top2_title").innerText);
                    data.append("layout4top2image", document.getElementById("layout4_top2_image").src);
                    content = document.getElementById("layout4_top2_con").value;
                    data.append("layout4top2summary", content);
                    data.append("layout4top2content", document.getElementById("layout4_top2_summary").value.split('<br>').join('\n'));

                    data.append("layout4top3title", document.getElementById("layout4_top3_title").innerText);
                    content = document.getElementById("layout4_top3_con").value;
                    data.append("layout4top3summary", content);
                    data.append("layout4top3content", document.getElementById("layout4_top3_summary").value.split('<br>').join('\n'));

                    data.append("layout4top4title", document.getElementById("layout4_top4_title").innerText);
                    content = document.getElementById("layout4_top4_con").value;
                    data.append("layout4top4summary", content);
                    data.append("layout4top4content", document.getElementById("layout4_top4_summary").value.split('<br>').join('\n'));

                    if (document.getElementById("layout4_bn1").src.indexOf('.jpg') > -1 || document.getElementById("layout4_bn1").src.indexOf('.png') > -1) {
                        data.append("layout4banner1", document.getElementById("layout4_bn1").src);
                    }
                    if (document.getElementById("layout4_bn2").src.indexOf('.jpg') > -1 || document.getElementById("layout4_bn2").src.indexOf('.png') > -1) {
                        data.append("layout4banner2", document.getElementById("layout4_bn2").src);
                    }
                    if (document.getElementById("layout4_bn11").src.indexOf('.jpg') > -1 || document.getElementById("layout4_bn11").src.indexOf('.png') > -1) {
                        data.append("layout4adv3", document.getElementById("layout4_bn11").src);
                    }
                    if (document.getElementById("layout4_bn12").src.indexOf('.jpg') > -1 || document.getElementById("layout4_bn12").src.indexOf('.png') > -1) {
                        data.append("layout4adv1", document.getElementById("layout4_bn12").src);
                    }
//                    break;
                }
        else if (cur_SelLayout == 5 || cur_SelLayout == "5")
//            case 5, "5":
                {
                    data.append("layout5name", document.getElementById("layout5_Newsname").innerHTML);
                    data.append("layout5top1title", document.getElementById("layout5_top1_title1").value);
                    data.append("layout5top1image", document.getElementById("layout5_top1_image").src);
                    var content = document.getElementById("layout5_top1_con").value;
                    data.append("layout5top1summary", content);
                    data.append("layout5top1content", document.getElementById("layout5_top1_summary").value.split('<br>').join('\n'));
                    data.append("layout5top2title", document.getElementById("layout5_top2_title").innerText);
                    content = document.getElementById("layout5_top2_con").value;
                    data.append("layout5top2summary", content);
                    data.append("layout5top2content", document.getElementById("layout5_top2_summary").value.split('<br>').join('\n'));
                    data.append("layout5top2image", document.getElementById("layout5_top2_image").src);
                    data.append("layout5top3title", document.getElementById("layout5_top3_title").innerText);
                    content = document.getElementById("layout5_top3_con").value;
                    data.append("layout5top3image", document.getElementById("layout5_top3_image").src);
                    data.append("layout5top3summary", content);
                    data.append("layout5top3content", document.getElementById("layout5_top3_summary").value.split('<br>').join('\n'));
                    data.append("layout5top4title", document.getElementById("layout5_top4_title").innerText);
                    content = document.getElementById("layout5_top4_con").value;
                    data.append("layout5top4summary", content);
                    data.append("layout5top4content", document.getElementById("layout5_top4_summary").value.split('<br>').join('\n'));
                    data.append("layout5top5title", document.getElementById("layout5_top5_title").innerText);
                    content = document.getElementById("layout5_top5_con").value;
                    data.append("layout5top5summary", content);
                    data.append("layout5top5content", document.getElementById("layout5_top5_summary").value.split('<br>').join('\n'));
                    data.append("layout5top6title", document.getElementById("layout5_top6_title").innerText);
                    content = document.getElementById("layout5_top6_con").value;
                    data.append("layout5top6summary", content);
                    data.append("layout5top6content", document.getElementById("layout5_top6_summary").value.split('<br>').join('\n'));

                    if (document.getElementById("layout5_bn1").src.indexOf('.jpg') > -1 || document.getElementById("layout5_bn1").src.indexOf('.png') > -1) {
                        data.append("layout5banner1", document.getElementById("layout5_bn1").src);
                    }
                    if (document.getElementById("layout5_bn2").src.indexOf('.jpg') > -1 || document.getElementById("layout5_bn2").src.indexOf('.png') > -1) {
                        data.append("layout5banner2", document.getElementById("layout5_bn2").src);
                    }
                    if (document.getElementById("layout5banner").src.indexOf('.jpg') > -1 || document.getElementById("layout5banner").src.indexOf('.png') > -1) {
                        data.append("layout5adv3", document.getElementById("layout5banner").src);
                    }
            //                    break;
                }
//            case 6, "6":
    else if (cur_SelLayout == 6 || cur_SelLayout == "6")
        {
                    data.append("layout6name", document.getElementById("layout6_Newsname").innerHTML);
                    data.append("layout6top1title", document.getElementById("layout6_top1_title1").value);
                    data.append("layout6top1image", document.getElementById("layout6_top1_image").src);
                    var content = document.getElementById("layout6_top1_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout6top1summary", content);
                    data.append("layout6top1content", document.getElementById("layout6_top1_summary").value.replace("<br>", ""));

                    data.append("layout6top2title", document.getElementById("layout6_top2_title").innerText);
                    data.append("layout6top2image", document.getElementById("layout6_top2_image").src);
                    var content = document.getElementById("layout6_top2_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout6top2summary", content);
                    data.append("layout6top2content", document.getElementById("layout6_top2_summary").value.replace("<br>", ""));

                    data.append("layout6top3title", document.getElementById("layout6_top3_title").innerText);
                    data.append("layout6top3image", document.getElementById("layout6_top3_image").src);
                    var content = document.getElementById("layout6_top3_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout6top3summary", content);
                    data.append("layout6top3content", document.getElementById("layout6_top3_summary").value.replace("<br>", ""));

                    if (document.getElementById("layout6_bn1").src.indexOf('.jpg') > -1 || document.getElementById("layout6_bn1").src.indexOf('.png') > -1)
                    {
                        data.append("layout6adv1", document.getElementById("layout6_bn1").src);
                    }
                    if (document.getElementById("layout6_bn").src.indexOf('.jpg') > -1 || document.getElementById("layout6_bn").src.indexOf('.png') > -1){
                        data.append("layout6adv3", document.getElementById("layout6_bn").src);
                    }
//                    break;
            }
            else if (cur_SelLayout == 7 || cur_SelLayout == "7")
        //            case 7, "7":
                {
                    data.append("layout7name", document.getElementById("layout7_Newsname").innerHTML);
                    data.append("layout7top1title", document.getElementById("layout7_top1_title1").value);
                    data.append("layout7top1image", document.getElementById("layout7_top1_image").src);
                    var content = document.getElementById("layout7_top1_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout7top1summary", content);
                    data.append("layout7top1content", document.getElementById("layout7_top1_summary").value.replace("<br>", ""));

                    data.append("layout7top2title", document.getElementById("layout7_top2_title").innerText);
                    data.append("layout7top2image", document.getElementById("layout7_top2_image").src);
                    var content = document.getElementById("layout7_top2_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout7top2summary", content);
                    data.append("layout7top2content", document.getElementById("layout7_top2_summary").value.replace("<br>", ""));

                    data.append("layout7top3title", document.getElementById("layout7_top3_title").innerText);
                    data.append("layout7top3image", document.getElementById("layout7_top3_image").src);
                    var content = document.getElementById("layout7_top3_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout7top3summary", content);
                    data.append("layout7top3content", document.getElementById("layout7_top3_summary").value.replace("<br>", ""));

                    data.append("layout7top4title", document.getElementById("layout7_top4_title").innerText);
                    data.append("layout7top4image", document.getElementById("layout7_top4_image").src);
                    var content = document.getElementById("layout7_top4_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout7top4summary", content);
                    data.append("layout7top4content", document.getElementById("layout7_top4_summary").value.replace("<br>", ""));

                    if (document.getElementById("layout7_bn1").src.indexOf('.jpg') > -1 || document.getElementById("layout7_bn1").src.indexOf('.png') > -1) {
                        data.append("layout7adv1", document.getElementById("layout7_bn1").src);
                    }
                    if (document.getElementById("layout7_bn2").src.indexOf('.jpg') > -1 || document.getElementById("layout7_bn2").src.indexOf('.png') > -1) {
                        data.append("layout7adv2", document.getElementById("layout7_bn2").src);
                    }
//                    break;
                }
//            case 8, "8":
                else if (cur_SelLayout == 8 || cur_SelLayout == "8")
                {
                    data.append("layout8name", document.getElementById("layout8_Newsname").innerHTML);
                    data.append("layout8top1title", document.getElementById("layout8_top1_title1").value);
                    data.append("layout8top1image", document.getElementById("layout8_top1_image").src);
                    var content = document.getElementById("layout8_top1_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout8top1summary", content);
                    data.append("layout8top1content", document.getElementById("layout8_top1_summary").value.replace("<br>", ""));

                    data.append("layout8top2title", document.getElementById("layout8_top2_title").innerText);
                    data.append("layout8top2image", document.getElementById("layout8_top2_image").src);
                    var content = document.getElementById("layout8_top2_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout8top2summary", content);
                    data.append("layout8top2content", document.getElementById("layout8_top2_summary").value.replace("<br>", ""));

                    data.append("layout8top3title", document.getElementById("layout8_top3_title").innerText);
                    data.append("layout8top3image", document.getElementById("layout8_top3_image").src);
                    var content = document.getElementById("layout8_top3_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout8top3summary", content);
                    data.append("layout8top3content", document.getElementById("layout8_top3_summary").value.replace("<br>", ""));

                    data.append("layout8top4title", document.getElementById("layout8_top4_title").innerText);
                    data.append("layout8top4image", document.getElementById("layout8_top4_image").src);
                    var content = document.getElementById("layout8_top4_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout8top4summary", content);
                    data.append("layout8top4content", document.getElementById("layout8_top4_summary").value.replace("<br>", ""));

                    data.append("layout8top5title", document.getElementById("layout8_top5_title").innerText);
                    data.append("layout8top5image", document.getElementById("layout8_top5_image").src);
                    var content = document.getElementById("layout8_top5_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout8top5summary", content);
                    data.append("layout8top5content", document.getElementById("layout8_top5_summary").value.replace("<br>", ""));

                    if (document.getElementById("layout8_bn11").src.indexOf('.jpg') > -1 || document.getElementById("layout8_bn11").src.indexOf('.png') > -1) {
                        data.append("layout8adv1", document.getElementById("layout8_bn11").src);
                    }
                    if (document.getElementById("layout8_bn12").src.indexOf('.jpg') > -1 || document.getElementById("layout8_bn12").src.indexOf('.png') > -1) {
                        data.append("layout8adv2", document.getElementById("layout8_bn12").src);
                    }
//                    break;
                }
                else if (cur_SelLayout == 9 || cur_SelLayout == "9")
                    //            case 9, "9":
                {
                    data.append("layout9name", document.getElementById("layout9_Newsname").innerHTML);
                    data.append("layout9top1title", document.getElementById("layout9_top1_title1").value);
                    data.append("layout9top1image", document.getElementById("layout9_top1_image").src);
                    var content = document.getElementById("layout9_top1_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top1summary", content);
                    data.append("layout9top1content", document.getElementById("layout9_top1_summary").value.replace("<br>", ""));

                    data.append("layout9top2title", document.getElementById("layout9_top2_title").innerText);
                    data.append("layout9top2image", document.getElementById("layout9_top2_image").src);
                    var content = document.getElementById("layout9_top2_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top2summary", content);
                    data.append("layout9top2content", document.getElementById("layout9_top2_summary").value.replace("<br>", ""));

                    data.append("layout9top3title", document.getElementById("layout9_top3_title").innerText);
                    data.append("layout9top3image", document.getElementById("layout9_top3_image").src);
                    var content = document.getElementById("layout9_top3_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top3summary", content);
                    data.append("layout9top3content", document.getElementById("layout9_top3_summary").value.replace("<br>", ""));

                    data.append("layout9top4title", document.getElementById("layout9_top4_title").innerText);
                    data.append("layout9top4image", document.getElementById("layout9_top4_image").src);
                    var content = document.getElementById("layout9_top4_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top4summary", content);
                    data.append("layout9top4content", document.getElementById("layout9_top4_summary").value.replace("<br>", ""));

                    data.append("layout9top5title", document.getElementById("layout9_top5_title").innerText);
                    data.append("layout9top5image", document.getElementById("layout9_top5_image").src);
                    var content = document.getElementById("layout9_top5_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top5summary", content);
                    data.append("layout9top5content", document.getElementById("layout9_top5_summary").value.replace("<br>", ""));

                    data.append("layout9top6title", document.getElementById("layout9_top6_title").innerText);
                    data.append("layout9top6image", document.getElementById("layout9_top6_image").src);
                    var content = document.getElementById("layout9_top6_content").innerText;
                    content = content.replace("<br>", "");
                    data.append("layout9top6summary", content);
                    data.append("layout9top6content", document.getElementById("layout9_top6_summary").value.replace("<br>", ""));

                    if (document.getElementById("layout9_bn1_image").src.indexOf('.jpg') > -1 || document.getElementById("layout9_bn1_image").src.indexOf('.png') > -1) {
                        data.append("layout9banner1", document.getElementById("layout9_bn1_image").src);
                    }
                    if (document.getElementById("layout9_bn2_image").src.indexOf('.jpg') > -1 || document.getElementById("layout9_bn2_image").src.indexOf('.png') > -1) {
                        data.append("layout9banner2", document.getElementById("layout9_bn2_image").src);
                    }
                    if (document.getElementById("layout9_bn3").src.indexOf('.jpg') > -1 || document.getElementById("layout9_bn3").src.indexOf('.png') > -1) {
                        data.append("layout9adv1", document.getElementById("layout9_bn3").src);
                    }
//                    break;
//                }
        }
        return data;
    }

    function tempsaveArticle() {
//        onShowResult();
        var content = GetContent();
        $.ajax({
            url: "tempsaveContent.aspx",
            type: "post",
            data: content,
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                onClosePopup();
                document.getElementById("popupForm").style.display = "";
                document.getElementById("saveFormpopup4").style.display = "";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                onClosePopup();
            }
        });
    }

    function onSave() {
        if (layout1_count >= 6 || layout2_count >= 7 || layout3_count >= 7 || layout4_count >= 8 || layout5_count >= 9 || layout6_count >= 5 ||
            layout7_count >= 6 || layout8_count >= 7 || layout9_count >= 9) {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("saveFormpopup").style.display = "";
        }
        else {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("completeFormpopup").style.display = "";
        }
    }

    function onTempSave() {
        onClosePopup();
        document.getElementById("popupForm").style.display = "";
        document.getElementById("tempsaveFormpopup").style.display = "";
    }

    function onCancel() {
        location.reload();
    }

    function editNewname() {
        var newsname = document.getElementById("edit_Newsname").value;
        var font = document.getElementById("edit_Newsname_font").selectedIndex;
        var size = document.getElementById("edit_Newsname_size").selectedIndex;
        var data = new FormData();
//        edit_News_name = document.getElementById("edit_Newsname").value;
        if (font == "0") {
            var fontname = "굴림";
        }
        else if (font == "1") {
            var fontname = "돋움";
        }
        else if (font == "2") {
            var fontname = "궁서";
        }
        else if (font == "3") {
            var fontname = "바탕";
        }
        else if (font == "4") {
            var fontname = "Nanum Myeongjo";
        }

        if (size == "0") {
            var fontsize = 32;
        }

        data.append("newsname", newsname);
        $.ajax({
            url: "saveNewsname.aspx",
            type: "post",
            data: data,
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });

        for (var i = 1; i <= 9; i++) {
            if (i == 2 || i == 3)
                continue;
            document.getElementById("layout" + i + "_Newsname").style.fontFamily = fontname;
            document.getElementById("layout" + i + "_Newsname").style.fontSize = fontsize + "pt";
            document.getElementById("layout" + i + "_Newsname").innerHTML = newsname;
        }
        onClosePopup();
    }

    function ongotoMyarticle() {
        if (document.getElementById("liContent" + current_articleID) == null) {
            var element_div = '<li id="liContent' + current_articleID + '"><div class="tx_data"><a class="aContent" id="aContent'
                        + current_articleID
                        + '" onclick="showContent('
                        + current_articleID + ')" style="cursor:pointer">' + document.getElementById("alst" + current_articleID).innerText
                        + '</a><button type="button" onclick="xButtonClick('
                        + current_articleID
                        + ')" id="xButton' + current_articleID + '" class="btn_x"><img src="../images/btn_x.png"></button></div></li>'
            $(".dt_list ul").append(element_div);
            DragDropFunc();
            onClosePopup();
            addCount(lid);
        }
        else {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("layoutFormpopup").style.display = "";
        }
    }

    function onEditSelectedArticle() {
        var title = document.getElementById("selectedArticleTitle").value;
        var content = document.getElementById("selectedArticleContent").value;
        var summary = document.getElementById("selectedArticleSummary").value;
        var data = new FormData();
        data.append("title", title);
        data.append("content", content);
        data.append("summary", summary);

        $.ajax({
            url: 'changeArticleContent.aspx?id=' + cur_selectedArticleID,
            type: "post",
            data: data,
            processData: false,
            contentType: false,
            async: false,
            success: function (data) {
                if (data == "success") {
                    document.getElementById("aContent" + cur_selectedArticleID).innerText = title;
                }
            },
            error: function (data) {
            }
        });
        onClosePopup();
    }

    function onCaption111(id) {
        onClosePopup();
        document.getElementById("popupForm").style.display = "";
        document.getElementById("editSeletedArticlepopup").style.display = "";
        cur_selectedArticleID = id;

        $.ajax({
            url: "getContent.aspx?id=" + cur_selectedArticleID,
            type: "post",
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                var xmlDoc = new DOMParser().parseFromString(data, 'text/xml');
                var x = xmlDoc.getElementsByTagName("content");
                for (i = 0; i < x.length; i++) {
                    try {
                        var title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var content = x[i].getElementsByTagName("econtent")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    try {
                        var summary = x[i].getElementsByTagName("summary")[0].childNodes[0].nodeValue;
                    }
                    catch (e) {

                    }
                    if (title != null && title != "") {
                        document.getElementById("selectedArticleTitle").value = title;
                    }
                    if (content != null && content != "") {
                        document.getElementById("selectedArticleContent").value = content;
                    }
                    if (summary != null && summary != "") {
                        document.getElementById("selectedArticleSummary").value = summary;
                    }
                }
            },
            error: function (data) {
            }
        });
    }

    function onClosePopup() {
        document.getElementById("popupForm").style.display = "none";
        document.getElementById("editSeletedArticlepopup").style.display = "none";
        document.getElementById("editNewsnameForm").style.display = "none";
        document.getElementById("article_showDetail").style.display = "none";
        document.getElementById("article_showDetail1").style.display = "none";
        document.getElementById("article_showDetail2").style.display = "none";
        document.getElementById("saveFormpopup").style.display = "none";
        document.getElementById("tempsaveFormpopup").style.display = "none";
        document.getElementById("show_preview_popup").style.display = "none";
        document.getElementById("layoutFormpopup").style.display = "none";
        document.getElementById("layoutFormpopup1").style.display = "none";
        document.getElementById("layoutFormpopup2").style.display = "none";
        document.getElementById("saveFormpopup1").style.display = "none";
        document.getElementById("saveFormpopup2").style.display = "none";
        document.getElementById("saveFormpopup3").style.display = "none";
        document.getElementById("saveFormpopup4").style.display = "none";
        document.getElementById("completeFormpopup").style.display = "none";
        document.getElementById("loginNameErrorFormpopup").style.display = "none";
        document.getElementById("loginNewsNameErrorFormpopup").style.display = "none";
        document.getElementById("loginNewsNameErrorFormpopup1").style.display = "none";
        document.getElementById("emailErrorFormpopup1").style.display = "none";
        document.getElementById("show_preview_popup").style.display = "none";
    }

    function onShowResult() {
        for (var i = 1; i <= 9; i++) {
            if (i == 2 || i == 3)
                continue;
            document.getElementById("layout" + i + "_temp").style.display = "none";
        }
        document.getElementById("show_preview_popup").style.display = "none";
    }

    var fieldValue = 0;
    var option = 0;

    function showLayoutTop(id1, id2) {
        if (option == 0) {
            if (document.getElementById("layout" + id1 + "_top" + id2).style.backgroundImage == "url(\"\")") {
                onClosePopup();
                document.getElementById("popupForm").style.display = "";
                if (id1 >= 6) {
                    if (id2 == 1) {
                        document.getElementById("articleDetailTitle1").value = document.getElementById("layout" + id1 + "_top" + id2 + "_title1").value;
                    }
                    else {
                        document.getElementById("articleDetailTitle1").value = document.getElementById("layout" + id1 + "_top" + id2 + "_title").innerText;
                    }
                    document.getElementById("article_showDetail1").style.display = "";
                    document.getElementById("articleDetailText1").value = document.getElementById("layout" + id1 + "_top" + id2 + "_summary").value.split('<br>').join('\n');
                    document.getElementById("articleDetailSummary1").value = document.getElementById("layout" + id1 + "_top" + id2 + "_content").innerHTML.split('<br>').join('\n');
                }
                else {
                    if (id2 == 1) {
                        document.getElementById("articleDetailTitle2").value = document.getElementById("layout" + id1 + "_top" + id2 + "_title1").value;
                    }
                    else {
                        document.getElementById("articleDetailTitle2").value = document.getElementById("layout" + id1 + "_top" + id2 + "_title").innerText;
                    }
                    document.getElementById("article_showDetail2").style.display = "";
                    if (id1 == 1 && id2 == 2)
                    {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout1_top2_con").value;
                    }
                    else if(id1 == 4 && id2 == 1)
                    {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout4_top1_con").value;
                    }
                    else if (id1 == 4 && id2 == 2) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout4_top2_con").value;
                    }
                    else if (id1 == 4 && id2 == 3) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout4_top3_con").value;
                    }
                    else if (id1 == 4 && id2 == 4) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout4_top4_con").value;
                    }
                    else if (id1 == 5 && id2 == 1) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top1_con").value;
                    }
                    else if (id1 == 5 && id2 == 2) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top2_con").value;
                    }
                    else if (id1 == 5 && id2 == 3) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top3_con").value;
                    }
                    else if (id1 == 5 && id2 == 4) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top4_con").value;
                    }
                    else if (id1 == 5 && id2 == 5) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top5_con").value;
                    }
                    else if (id1 == 5 && id2 == 6) {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout5_top6_con").value;
                    }
                    else
                    {
                        document.getElementById("articleDetailSummary2").value = document.getElementById("layout" + id1 + "_top" + id2 + "_content").innerText;
                    }

                    document.getElementById("articleDetailText2").value = document.getElementById("layout" + id1 + "_top" + id2 + "_summary").value.split('<br>').join('\n');
                    $('#title_letters').text(getLength($('#articleDetailTitle2').val()));
                   // change(document.getElementById('articleDetailTitle2'), 100);
                    $('#content_letters').text(getLength($('#articleDetailText2').val()));
                  //  change(document.getElementById('articleDetailText2'), 899);
                    $('#summary_letters').text(getLength($('#articleDetailSummary2').val()));
                  //  change(document.getElementById('articleDetailSummary2'), 499);
                }
                fieldValue = id2;
            }
        }
//        option = 0;
    }

    function changeArticle(data, id) {
        $.ajax({
            url: 'ChangeLayoutArticle.aspx?id=' + id,
            type: "post",
            data: data,
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                HideProgress();
            }
        });
    }

    function onChangeValues() {
        onClosePopup();
        var data = new FormData();
        if (document.getElementById("layout1Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout1_top1_title").innerText = document.getElementById("articleDetailTitle2").value;
                if (getLength(document.getElementById("articleDetailTitle2").value) > 100) {
                    change1(document.getElementById("layout1_top1_title"), 100);
                  //  document.getElementById("layout1_top1_title").innerHTML += "···";
                }
                document.getElementById("layout1_top1_title1").value = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;

                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", content);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout1_top1_value").value);

                document.getElementById("layout1_top1_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout1_top1_summary").value = content;
            }
            else if (fieldValue == 2) {
                document.getElementById("layout1_top2_title").innerText = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout1_top2_con").value = document.getElementById("articleDetailSummary2").value;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", content);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout1_top2_value").value);
                document.getElementById("layout1_top2_summary").value = content;
//                document.getElementById("layout1_top2_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 26, 19);
                document.getElementById("layout1_top2_content").innerText = document.getElementById("articleDetailSummary2").value;
            }
            else if (fieldValue == 3) {
                document.getElementById("layout1_top3_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                document.getElementById("layout1_top3_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout1_top3_summary").value = document.getElementById("articleDetailText2").value;

                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout1_top3_value").value);
            }
        }
        else if (document.getElementById("layout4Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout4_top1_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                if (getLength(document.getElementById("articleDetailTitle2").value) > 84) {
                    change1(document.getElementById("layout4_top1_title"), 84);
              //      document.getElementById("layout4_top1_title").innerHTML += "···";
                }
                document.getElementById("layout4_top1_title1").value = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout4_top1_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout4_top1_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 13);
                document.getElementById("layout4_top1_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout4_top1_summary").value = content;

                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout4_top1_value").value);
            }
            else if (fieldValue == 2) {
                document.getElementById("layout4_top2_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout4_top2_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout4_top2_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 16);
                document.getElementById("layout4_top2_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout4_top2_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout4_top2_value").value);
            }
            else if (fieldValue == 3) {
                document.getElementById("layout4_top3_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout4_top3_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout4_top3_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 27, 15);
                document.getElementById("layout4_top3_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout4_top3_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout4_top3_value").value);
            }
            else if (fieldValue == 4) {
                document.getElementById("layout4_top4_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout4_top4_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout4_top4_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 27, 15);
                document.getElementById("layout4_top4_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout4_top4_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout4_top4_value").value);
            }
        }
        else if (document.getElementById("layout5Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout5_top1_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                if (getLength(document.getElementById("articleDetailTitle2").value) > 84) {
                    change1(document.getElementById("layout5_top1_title"), 84);
              //      document.getElementById("layout5_top1_title").innerHTML += "···";
                }
                document.getElementById("layout5_top1_title1").value = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top1_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout5_top1_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 13);
                document.getElementById("layout5_top1_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top1_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top1_value").value);
            }
            else if (fieldValue == 2) {
                document.getElementById("layout5_top2_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top2_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout5_top2_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 29, 16);
                document.getElementById("layout5_top2_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top2_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top2_value").value);
            }
            else if (fieldValue == 3) {
                document.getElementById("layout5_top3_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top3_con").value = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top3_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top3_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top3_value").value);
            }
            else if (fieldValue == 4) {
                document.getElementById("layout5_top4_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top4_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout5_top4_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 15);
                document.getElementById("layout5_top4_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top4_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top4_value").value);
            }
            else if (fieldValue == 5) {
                document.getElementById("layout5_top5_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top5_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout5_top5_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 15);
                document.getElementById("layout5_top5_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top5_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top5_value").value);
            }
            else if (fieldValue == 6) {
                document.getElementById("layout5_top6_title").innerHTML = document.getElementById("articleDetailTitle2").value;
                var content = document.getElementById("articleDetailText2").value;
                document.getElementById("layout5_top6_con").value = document.getElementById("articleDetailSummary2").value;
//                document.getElementById("layout5_top6_content").innerText = getLetters(document.getElementById("articleDetailSummary2").value, 28, 15);
                document.getElementById("layout5_top6_content").innerText = document.getElementById("articleDetailSummary2").value;
                document.getElementById("layout5_top6_summary").value = content;
                data.append("title", document.getElementById("articleDetailTitle2").value);
                data.append("content", document.getElementById("articleDetailText2").value);
                data.append("summary", document.getElementById("articleDetailSummary2").value);
                //changeArticle(data, document.getElementById("layout5_top6_value").value);
            }
        }
        else if (document.getElementById("layout6Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout6_top1_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                if (getLength(document.getElementById("articleDetailTitle1").value) > 35) {
                    change1(document.getElementById("layout6_top1_title"), 32);
                    document.getElementById("layout6_top1_title").innerHTML += "···";
                }
                document.getElementById("layout6_top1_title1").value = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout6_top1_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout6_top1_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout6_top1_value").value);
            }
            else if (fieldValue == 2) {
                document.getElementById("layout6_top2_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout6_top2_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout6_top2_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout6_top2_value").value);
            }
            else if (fieldValue == 3) {
                document.getElementById("layout6_top3_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout6_top3_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout6_top3_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout6_top3_value").value);
            }
        }
        else if (document.getElementById("layout7Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout7_top1_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                if (getLength(document.getElementById("articleDetailTitle1").value) > 35) {
                    change1(document.getElementById("layout7_top1_title"), 32);
                    document.getElementById("layout7_top1_title").innerHTML += "···";
                }
                document.getElementById("layout7_top1_title1").value = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout7_top1_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout7_top1_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout7_top1_value").value);
            }
            else if (fieldValue == 2) {
                document.getElementById("layout7_top2_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout7_top2_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout7_top2_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout7_top2_value").value);
            }
            else if (fieldValue == 3) {
                document.getElementById("layout7_top3_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout7_top3_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout7_top3_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout7_top3_value").value);
            }
            else if (fieldValue == 4) {
                document.getElementById("layout7_top4_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout7_top4_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout7_top4_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout7_top4_value").value);
            }
        }
        else if (document.getElementById("layout8Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout8_top1_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                if (getLength(document.getElementById("articleDetailTitle1").value) > 39) {
                    change1(document.getElementById("layout8_top1_title"), 36);
                    document.getElementById("layout8_top1_title").innerHTML += "···";
                }
                document.getElementById("layout8_top1_title1").value = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout8_top1_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout8_top1_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout8_top1_value").value);

            }
            else if (fieldValue == 2) {
                document.getElementById("layout8_top2_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout8_top2_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout8_top2_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout8_top2_value").value);
            }
            else if (fieldValue == 3) {
                document.getElementById("layout8_top3_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout8_top3_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout8_top3_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout8_top3_value").value);

            }
            else if (fieldValue == 4) {
                document.getElementById("layout8_top4_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout8_top4_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout8_top4_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout8_top4_value").value);

            }
            else if (fieldValue == 5) {
                document.getElementById("layout8_top5_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout8_top5_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout8_top5_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout8_top5_value").value);
            }
        }
        else if (document.getElementById("layout9Content").style.display != "none") {
            if (fieldValue == 1) {
                document.getElementById("layout9_top1_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                if (getLength(document.getElementById("articleDetailTitle1").value) > 33) {
                    change1(document.getElementById("layout9_top1_title"), 30);
                    document.getElementById("layout9_top1_title").innerHTML += "···";
                }
                document.getElementById("layout9_top1_title1").value = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top1_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top1_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top1_value").value);

            }
            else if (fieldValue == 2) {
                document.getElementById("layout9_top2_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top2_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top2_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top2_value").value);

            }
            else if (fieldValue == 3) {
                document.getElementById("layout9_top3_title").innerText = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top3_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top3_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top3_value").value);

            }
            else if (fieldValue == 4) {
                document.getElementById("layout9_top4_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top4_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top4_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top4_value").value);

            }
            else if (fieldValue == 5) {
                document.getElementById("layout9_top5_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top5_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top5_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top5_value").value);

            }
            else if (fieldValue == 6) {
                document.getElementById("layout9_top6_title").innerHTML = document.getElementById("articleDetailTitle1").value;
                document.getElementById("layout9_top6_content").innerText = document.getElementById("articleDetailSummary1").value;
                document.getElementById("layout9_top6_summary").value = document.getElementById("articleDetailText1").value;

                data.append("title", document.getElementById("articleDetailTitle1").value);
                data.append("content", document.getElementById("articleDetailText1").value);
                data.append("summary", document.getElementById("articleDetailSummary1").value);
                //changeArticle(data, document.getElementById("layout9_top6_value").value);

            }
        }
    }

    function cancelLeftMenu(id) {
        var litags = $("#showArticleContent").children("ul").children("li");
        if (id == 1) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP1") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 2) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP2") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 3) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP3") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 4) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP4") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 5) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP5") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 6) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("TOP6") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
        else if (id == 7) {
            for (var i = 0; i < litags.children("div").children("span").length; i++) {
                if (litags.children("div").children("span")[i].innerHTML.indexOf("단신") > -1) {
                    litags.children("div").children("span")[i].remove();
                }
            }
        }
    }

    function cancelLayout1Top1() {
        layout1_count--;
        document.getElementById("layout1_top1").style.display = "";
        document.getElementById("imgLayout1Top1").style.display = "none";
        document.getElementById("layout1_temp_top1").style.display = "";
        document.getElementById("layout1_top1_title").innerText = "";
        document.getElementById("layout1_top1_title1").value = "";
        document.getElementById("layout1_top1_image").src = "";
        document.getElementById("layout1_top1_image").style.display = "none";
        document.getElementById("layout1_top1_content").innerText = "";
        document.getElementById("layout1_top1_summary").value = "";
        document.getElementById("layout1_top1_author").innerText = "";
        document.getElementById("layout1_top1_regdate").innerText = "";
        option = 1;
        onClosePopup();
        cancelLeftMenu(1);
        sel_layout--;
    }

    function cancelLayout1Top2() {
        layout1_count--;
        document.getElementById("layout1_top2").style.display = "";
        document.getElementById("imgLayout1Top2").style.display = "none";
        onClosePopup();
        document.getElementById("layout1_temp_top2").style.display = "";
        document.getElementById("layout1_top2_title").innerText = "";
        document.getElementById("layout1_top2_content").innerText = "";
        document.getElementById("layout1_top2_con").value = "";
        document.getElementById("layout1_top2_summary").value = "";
        document.getElementById("layout1_top2_author").innerText = "";
        document.getElementById("layout1_top2_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;
    }

    function cancelLayout1Top3() {
        layout1_count--;
        document.getElementById("layout1_top3").style.display = "";
        onClosePopup();
        document.getElementById("imgLayout1Top3").style.display = "none";
        document.getElementById("layout1_temp_top3").style.display = "";
        document.getElementById("layout1_top3_title").innerText = "";
        document.getElementById("layout1_top3_content").innerText = "";
        document.getElementById("layout1_top3_summary").value = "";
        document.getElementById("layout1_top3_author").innerText = "";
        document.getElementById("layout1_top3_regdate").innerText = "";
        cancelLeftMenu(3);
        option = 1;
        sel_layout--;

    }

    function cancelLayout4Top1() {
        layout4_count--;
        document.getElementById("layout4_top1").style.display = "";
        onClosePopup();
        document.getElementById("imgLayout4Top1").style.display = "none";
        document.getElementById("layout4_temp_top1").style.display = "";
        document.getElementById("layout4_top1_title").innerText = "";
        document.getElementById("layout4_top1_title1").value = "";
        document.getElementById("layout4_top1_image").src = "";
        document.getElementById("layout4_top1_image").style.display = "none";
        document.getElementById("layout4_top1_content").innerText = "";
        document.getElementById("layout4_top1_con").value = "";
        document.getElementById("layout4_top1_summary").value = "";
        document.getElementById("layout4_top1_author").innerText = "";
        document.getElementById("layout4_top1_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(1);
        sel_layout--;

    }

    function cancelLayout4Top2() {
        layout4_count--;
        document.getElementById("layout4_top2").style.display = "";
        onClosePopup();
        document.getElementById("imgLayout4Top2").style.display = "none";
        document.getElementById("layout4_temp_top2").style.display = "";
        document.getElementById("layout4_top2_title").innerText = "";
        document.getElementById("layout4_top2_image").src = "";
        document.getElementById("layout4_top2_image").style.display = "none";
        document.getElementById("layout4_top2_content").innerText = "";
        document.getElementById("layout4_top2_con").value = "";
        document.getElementById("layout4_top2_summary").value = "";
        document.getElementById("layout4_top2_author").innerText = "";
        document.getElementById("layout4_top2_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;

    }

    function cancelLayout4Top3() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_top3").style.display = "";
        document.getElementById("imgLayout4Top3").style.display = "none";
        document.getElementById("layout4_temp_top3").style.display = "";
        document.getElementById("layout4_top3_title").innerText = "";
        document.getElementById("layout4_top3_content").innerText = "";
        document.getElementById("layout4_top3_con").value = "";
        document.getElementById("layout4_top3_summary").value = "";
        document.getElementById("layout4_top3_author").innerText = "";
        document.getElementById("layout4_top3_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(3);
        sel_layout--;

    }

    function cancelLayout4Top4() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_top4").style.display = "";
        document.getElementById("imgLayout4Top4").style.display = "none";
        document.getElementById("layout4_temp_top4").style.display = "";
        document.getElementById("layout4_top4_title").innerText = "";
        document.getElementById("layout4_top4_content").innerText = "";
        document.getElementById("layout4_top4_con").value = "";
        document.getElementById("layout4_top4_summary").value = "";
        document.getElementById("layout4_top4_author").innerText = "";
        document.getElementById("layout4_top4_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(4);
        sel_layout--;

    }

    function cancelLayout5Top1() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top1").style.display = "";
        document.getElementById("imgLayout5Top1").style.display = "none";
        document.getElementById("layout5_temp_top1").style.display = "";
        document.getElementById("layout5_top1_title").innerText = "";
        document.getElementById("layout5_top1_title1").value = "";
        document.getElementById("layout5_top1_image").src = "";
        document.getElementById("layout5_top1_image").style.display = "none";
        document.getElementById("layout5_top1_content").innerText = "";
        document.getElementById("layout5_top1_con").value = "";
        document.getElementById("layout5_top1_summary").value = "";
        document.getElementById("layout5_top1_author").innerText = "";
        document.getElementById("layout5_top1_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(1);
        sel_layout--;

    }

    function cancelLayout5Top2() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top2").style.display = "";
        document.getElementById("imgLayout5Top2").style.display = "none";
        document.getElementById("layout5_temp_top2").style.display = "";
        document.getElementById("layout5_top2_title").innerText = "";
        document.getElementById("layout5_top2_content").innerText = "";
        document.getElementById("layout5_top2_con").value = "";
        document.getElementById("layout5_top2_summary").value = "";
        document.getElementById("layout5_top2_author").innerText = "";
        document.getElementById("layout5_top2_regdate").innerText = "";
        document.getElementById("layout5_top2_image").src = "";
        document.getElementById("layout5_top2_image").style.display = "none";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;

    }

    function cancelLayout5Top3() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top3").style.display = "";
        document.getElementById("imgLayout5Top3").style.display = "none";
        document.getElementById("layout5_temp_top3").style.display = "";
        document.getElementById("layout5_top3_title").innerText = "";
        document.getElementById("layout5_top3_content").innerText = "";
        document.getElementById("layout5_top3_con").value = "";
        document.getElementById("layout5_top3_summary").value = "";
        document.getElementById("layout5_top3_author").innerText = "";
        document.getElementById("layout5_top3_regdate").innerText = "";
        document.getElementById("layout5_top3_image").src = "";
        document.getElementById("layout5_top3_image").style.display = "none";
        option = 1;
        cancelLeftMenu(3);
        sel_layout--;

    }

    function cancelLayout5Top4() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top4").style.display = "";
        document.getElementById("imgLayout5Top4").style.display = "none";
        document.getElementById("layout5_temp_top4").style.display = "";
        document.getElementById("layout5_top4_title").innerText = "";
        document.getElementById("layout5_top4_content").innerText = "";
        document.getElementById("layout5_top4_con").value = "";
        document.getElementById("layout5_top4_summary").value = "";
        document.getElementById("layout5_top4_author").innerText = "";
        document.getElementById("layout5_top4_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(4);
        sel_layout--;

    }

    function cancelLayout5Top5() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top5").style.display = "";
        document.getElementById("imgLayout5Top5").style.display = "none";
        document.getElementById("layout5_temp_top5").style.display = "";
        document.getElementById("layout5_top5_title").innerText = "";
        document.getElementById("layout5_top5_content").innerText = "";
        document.getElementById("layout5_top5_con").value = "";
        document.getElementById("layout5_top5_summary").value = "";
        document.getElementById("layout5_top5_author").innerText = "";
        document.getElementById("layout5_top5_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(5);
        sel_layout--;
    }

    function cancelLayout5Banner() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_banner").style.display = "";
        document.getElementById("imgLayout5Banner").style.display = "none";
        document.getElementById("layout5_temp_banner").style.display = "";
        document.getElementById("layout5banner").src = "";
        sel_layout--;
    }

    function cancelLayout5Top6() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_top6").style.display = "";
        document.getElementById("imgLayout5Top6").style.display = "none";
        document.getElementById("layout5_temp_top6").style.display = "";
        document.getElementById("layout5_top6_title").innerText = "";
        document.getElementById("layout5_top6_content").innerText = "";
        document.getElementById("layout5_top6_con").value = "";
        document.getElementById("layout5_top6_summary").value = "";
        document.getElementById("layout5_top6_author").innerText = "";
        document.getElementById("layout5_top6_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(6);
        sel_layout--;
    }

    function cancelLayout6Top1() {
        layout6_count--;
        onClosePopup();
        document.getElementById("layout6_top1").style.display = "";
        document.getElementById("imgLayout6Top1").style.display = "none";
        document.getElementById("layout6_temp_top1").style.display = "";
        document.getElementById("layout6_top1_title").innerText = "";
        document.getElementById("layout6_top1_title1").value = "";
        document.getElementById("layout6_top1_image").src = "";
        document.getElementById("layout6_top1_image").style.display = "none";
        document.getElementById("layout6_top1_content").innerText = "";
        document.getElementById("layout6_top1_summary").value = "";
        document.getElementById("layout6_top1_author").innerText = "";
        document.getElementById("layout6_top1_regdate").innerText = "";
        option = 1;
        sel_layout--;
//        document.getElementById("layout6_footer").style.display = "none";
        cancelLeftMenu(1);
    }

    function cancelLayout6Top2() {
        layout6_count--;
        onClosePopup();
        document.getElementById("layout6_top2").style.display = "";
        document.getElementById("imgLayout6Top2").style.display = "none";
        document.getElementById("layout6_temp_top2").style.display = "";
        document.getElementById("layout6_top2_title").innerText = "";
        document.getElementById("layout6_top2_image").src = "";
        document.getElementById("layout6_top2_image").style.display = "none";
        document.getElementById("layout6_top2_content").innerText = "";
        document.getElementById("layout6_top2_summary").value = "";
        document.getElementById("layout6_top2_author").value = "";
        document.getElementById("layout6_top2_regdate").value = "";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;

    }

    function cancelLayout6Top3() {
        layout6_count--;
        onClosePopup();
        document.getElementById("layout6_top3").style.display = "";
        document.getElementById("imgLayout6Top3").style.display = "none";
        document.getElementById("layout6_temp_top3").style.display = "";
        document.getElementById("layout6_top3_title").innerText = "";
        document.getElementById("layout6_top3_image").src = "";
        document.getElementById("layout6_top3_image").style.display = "none";
        document.getElementById("layout6_top3_content").innerText = "";
        document.getElementById("layout6_top3_summary").value = "";
        document.getElementById("layout6_top3_author").value = "";
        document.getElementById("layout6_top3_regdate").value = "";
        option = 1;
        cancelLeftMenu(3);
        sel_layout--;

    }

    function cancelLayout7Top1() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_top1").style.display = "";
        document.getElementById("imgLayout7Top1").style.display = "none";
        document.getElementById("layout7_temp_top1").style.display = "";
        document.getElementById("layout7_top1_title").innerText = "";
        document.getElementById("layout7_top1_title1").value = "";
        document.getElementById("layout7_top1_image").src = "";
        document.getElementById("layout7_top1_image").style.display = "none";
        document.getElementById("layout7_top1_content").innerText = "";
        document.getElementById("layout7_top1_summary").value = "";
        document.getElementById("layout7_top1_author").innerText = "";
        document.getElementById("layout7_top1_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(1);
        sel_layout--;
//        document.getElementById("layout7_footer").style.display = "none";
    }

    function cancelLayout7Top2() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_top2").style.display = "";
        document.getElementById("imgLayout7Top2").style.display = "none";
        document.getElementById("layout7_temp_top2").style.display = "";
        document.getElementById("layout7_top2_title").innerText = "";
        document.getElementById("layout7_top2_image").src = "";
        document.getElementById("layout7_top2_image").style.display = "none";
        document.getElementById("layout7_top2_content").innerText = "";
        document.getElementById("layout7_top2_summary").value = "";
        document.getElementById("layout7_top2_author").value = "";
        document.getElementById("layout7_top2_regdate").value = "";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;

    }

    function cancelLayout7Top3() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_top3").style.display = "";
        document.getElementById("imgLayout7Top3").style.display = "none";
        document.getElementById("layout7_temp_top3").style.display = "";
        document.getElementById("layout7_top3_title").innerText = "";
        document.getElementById("layout7_top3_image").src = "";
        document.getElementById("layout7_top3_image").style.display = "none";
        option = 1;
        document.getElementById("layout7_top3_content").innerText = "";
        document.getElementById("layout7_top3_summary").value = "";
        document.getElementById("layout7_top3_author").value = "";
        document.getElementById("layout7_top3_regdate").value = "";
        cancelLeftMenu(3);
        sel_layout--;

    }

    function cancelLayout7Top4() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_top4").style.display = "";
        document.getElementById("imgLayout7Top4").style.display = "none";
        document.getElementById("layout7_temp_top4").style.display = "";
        document.getElementById("layout7_top4_title").innerText = "";
        document.getElementById("layout7_top4_image").src = "";
        document.getElementById("layout7_top4_image").style.display = "none";
        option = 1;
        document.getElementById("layout7_top4_content").innerText = "";
        document.getElementById("layout7_top4_summary").value = "";
        document.getElementById("layout7_top4_author").value = "";
        document.getElementById("layout7_top4_regdate").value = "";
        cancelLeftMenu(4);
        sel_layout--;

    }

    function cancelLayout8Top1() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_top1").style.display = "";
        document.getElementById("imgLayout8Top1").style.display = "none";
        document.getElementById("layout8_temp_top1").style.display = "";
        document.getElementById("layout8_top1_title").innerText = "";
        document.getElementById("layout8_top1_title1").value = "";
        document.getElementById("layout8_top1_image").src = "";
        document.getElementById("layout8_top1_image").style.display = "none";
        document.getElementById("layout8_top1_content").innerText = "";
        document.getElementById("layout8_top1_summary").value = "";
        document.getElementById("layout8_top1_author").innerText = "";
        document.getElementById("layout8_top1_regdate").innerText = "";
        option = 1;
        cancelLeftMenu(1);
        sel_layout--;
//        document.getElementById("layout8_footer").style.display = "none";
    }

    function cancelLayout8Top2() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_top2").style.display = "";
        document.getElementById("imgLayout8Top2").style.display = "none";
        document.getElementById("layout8_temp_top2").style.display = "";
        document.getElementById("layout8_top2_title").innerText = "";
        document.getElementById("layout8_top2_image").src = "";
        document.getElementById("layout8_top2_image").style.display = "none";
        document.getElementById("layout8_top2_content").innerText = "";
        document.getElementById("layout8_top2_summary").value = "";
        option = 1;
        cancelLeftMenu(2);
        sel_layout--;
        document.getElementById("layout8_top2_author").value = "";
        document.getElementById("layout8_top2_regdate").value = "";

    }

    function cancelLayout8Top3() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_top3").style.display = "";
        document.getElementById("imgLayout8Top3").style.display = "none";
        document.getElementById("layout8_temp_top3").style.display = "";
        document.getElementById("layout8_top3_title").innerText = "";
        document.getElementById("layout8_top3_image").src = "";
        document.getElementById("layout8_top3_image").style.display = "none";
        document.getElementById("layout8_top3_content").innerText = "";
        document.getElementById("layout8_top3_summary").value = "";
        option = 1;
        sel_layout--;
        document.getElementById("layout8_top3_author").value = "";
        document.getElementById("layout8_top3_regdate").value = "";

        cancelLeftMenu(3);
    }

    function cancelLayout8Top4() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_top4").style.display = "";
        document.getElementById("imgLayout8Top4").style.display = "none";
        document.getElementById("layout8_temp_top4").style.display = "";
        document.getElementById("layout8_top4_title").innerText = "";
        document.getElementById("layout8_top4_image").src = "";
        document.getElementById("layout8_top4_image").style.display = "none";
        option = 1;
        document.getElementById("layout8_top4_content").innerText = "";
        document.getElementById("layout8_top4_summary").value = "";
        document.getElementById("layout8_top4_author").value = "";
        document.getElementById("layout8_top4_regdate").value = "";
        cancelLeftMenu(4);
        sel_layout--;

    }

    function cancelLayout8Top5() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_top5").style.display = "";
        document.getElementById("imgLayout8Top5").style.display = "none";
        document.getElementById("layout8_temp_top5").style.display = "";
        document.getElementById("layout8_top5_title").innerText = "";
        document.getElementById("layout8_top5_image").src = "";
        document.getElementById("layout8_top5_image").style.display = "none";
        option = 1;
        document.getElementById("layout8_top5_content").innerText = "";
        document.getElementById("layout8_top5_summary").value = "";
        document.getElementById("layout8_top5_author").value = "";
        document.getElementById("layout8_top5_regdate").value = "";
        cancelLeftMenu(5);
        sel_layout--;

    }

    function cancelLayout9Top1() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top1").style.display = "";
        document.getElementById("imgLayout9Top1").style.display = "none";
        document.getElementById("layout9_temp_top1").style.display = "";
        document.getElementById("layout9_top1_title").innerText = "";
        document.getElementById("layout9_top1_title1").value = "";
        document.getElementById("layout9_top1_image").src = "";
        document.getElementById("layout9_top1_image").style.display = "none";
        option = 1;
        document.getElementById("layout9_top1_content").innerText = "";
        document.getElementById("layout9_top1_summary").value = "";
        document.getElementById("layout9_top1_author").innerText = "";
        document.getElementById("layout9_top1_regdate").innerText = "";
        cancelLeftMenu(1);
        sel_layout--;
//        document.getElementById("layout9_footer").style.display = "none";
    }

    function cancelLayout9Top2() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top2").style.display = "";
        document.getElementById("imgLayout9Top2").style.display = "none";
        document.getElementById("layout9_temp_top2").style.display = "";
        document.getElementById("layout9_top2_title").innerText = "";
        document.getElementById("layout9_top2_image").src = "";
        document.getElementById("layout9_top2_image").style.display = "none";
        document.getElementById("layout9_top2_content").innerText = "";
        document.getElementById("layout9_top2_summary").value = "";
        option = 1;
        cancelLeftMenu(2);
        document.getElementById("layout9_top2_author").value = "";
        document.getElementById("layout9_top2_regdate").value = "";
        sel_layout--;

    }

    function cancelLayout9Top3() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top3").style.display = "";
        document.getElementById("imgLayout9Top3").style.display = "none";
        document.getElementById("layout9_temp_top3").style.display = "";
        document.getElementById("layout9_top3_title").innerText = "";
        document.getElementById("layout9_top3_image").src = "";
        document.getElementById("layout9_top3_image").style.display = "none";
        option = 1;
        document.getElementById("layout9_top3_content").innerText = "";
        document.getElementById("layout9_top3_summary").value = "";
        document.getElementById("layout9_top3_author").value = "";
        document.getElementById("layout9_top3_regdate").value = "";
        cancelLeftMenu(3);
        sel_layout--;

    }

    function cancelLayout9Top4() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top4").style.display = "";
        document.getElementById("imgLayout9Top4").style.display = "none";
        document.getElementById("layout9_temp_top4").style.display = "";
        document.getElementById("layout9_top4_title").innerText = "";
        document.getElementById("layout9_top4_image").src = "";
        document.getElementById("layout9_top4_image").style.display = "none";
        option = 1;
        document.getElementById("layout9_top4_content").innerText = "";
        document.getElementById("layout9_top4_summary").value = "";
        cancelLeftMenu(4);
        sel_layout--;
        document.getElementById("layout9_top4_author").value = "";
        document.getElementById("layout9_top4_regdate").value = "";

    }

    function cancelLayout9Top5() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top5").style.display = "";
        document.getElementById("imgLayout9Top5").style.display = "none";
        document.getElementById("layout9_temp_top5").style.display = "";
        document.getElementById("layout9_top5_title").innerText = "";
        document.getElementById("layout9_top5_image").src = "";
        document.getElementById("layout9_top5_image").style.display = "none";
        option = 1;
        document.getElementById("layout9_top5_content").innerText = "";
        document.getElementById("layout9_top5_summary").value = "";
        sel_layout--;
        document.getElementById("layout9_top5_author").value = "";
        document.getElementById("layout9_top5_regdate").value = "";
        cancelLeftMenu(5);
    }

    function cancelLayout9Top6() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_top6").style.display = "";
        document.getElementById("imgLayout9Top6").style.display = "none";
        document.getElementById("layout9_temp_top6").style.display = "";
        document.getElementById("layout9_top6_title").innerText = "";
        document.getElementById("layout9_top6_image").src = "";
        document.getElementById("layout9_top6_image").style.display = "none";
        option = 1;
        document.getElementById("layout9_top6_content").innerText = "";
        document.getElementById("layout9_top6_summary").value = "";
        sel_layout--;
        document.getElementById("layout9_top6_author").value = "";
        document.getElementById("layout9_top6_regdate").value = "";
        cancelLeftMenu(6);
    }

    function cancelLayout1Bn1() {
        layout1_count--;
        onClosePopup();
        document.getElementById("layout1_temp_bn1").style.display = "";
        document.getElementById("imgLayout1Bn1").style.display = "none";
        document.getElementById("layout1_notice_bn1").style.display = "";
        document.getElementById("layout1_lbanner").src = "";
        document.getElementById("layout1_lbanner").style.display = "none";
        sel_layout--;

    }

    function cancelLayout1Bn2() {
        layout1_count--;
        onClosePopup();
        document.getElementById("layout1_temp_bn2").style.display = "";
        document.getElementById("imgLayout1Bn2").style.display = "none";
        document.getElementById("layout1_notice_bn2").style.display = "";
        document.getElementById("layout1_rbanner").src = "";
        document.getElementById("layout1_rbanner").style.display = "none";
        sel_layout--;

    }

    function cancelLayout1Bm() {
        layout1_count--;
        onClosePopup();
        document.getElementById("layout1_tp_bm").style.display = "";
        document.getElementById("imgLayout1Bm").style.display = "none";
        document.getElementById("layout1_notice_tp").style.display = "";
        document.getElementById("layout1_adv").src = "";
        document.getElementById("layout1_adv").style.display = "none";
        sel_layout--;
    }

    function cancelLayout4Bn1() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_temp_bn1").style.display = "";
        document.getElementById("imgLayout4Bn1").style.display = "none";
        document.getElementById("layout4_notice_bn1").style.display = "";
        document.getElementById("layout4_bn1").src = "";
        sel_layout--;
        document.getElementById("layout4_bn1").style.display = "none";
    }

    function cancelLayout4Bn2() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_temp_bn2").style.display = "";
        document.getElementById("imgLayout4Bn2").style.display = "none";
        document.getElementById("layout4_notice_bn2").style.display = "";
        document.getElementById("layout4_bn2").src = "";
        sel_layout--;
        document.getElementById("layout4_bn2").style.display = "none";
    }

    function cancelLayout4Bm1() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_tp_bm1").style.display = "";
        document.getElementById("imgLayout4Bm1").style.display = "none";
        document.getElementById("layout4_notice_tp1").style.display = "";
        document.getElementById("layout4_bn11").src = "";
        sel_layout--;
        document.getElementById("layout4_bn11").style.display = "none";
    }

    function cancelLayout4Bm2() {
        layout4_count--;
        onClosePopup();
        document.getElementById("layout4_tp_bm2").style.display = "";
        document.getElementById("imgLayout4Bm2").style.display = "none";
        document.getElementById("layout4_notice_tp2").style.display = "";
        document.getElementById("layout4_bn12").src = "";
        sel_layout--;
        document.getElementById("layout4_bn12").style.display = "none";
    }

    function cancelLayout5Bn2() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_temp_bn2").style.display = "";
        document.getElementById("imgLayout5Bn2").style.display = "none";
        document.getElementById("layout5_notice_bn2").style.display = "";
        document.getElementById("layout5_bn2").src = "";
        sel_layout--;
        document.getElementById("layout5_bn2").style.display = "none";
    }

    function cancelLayout5Bn1() {
        layout5_count--;
        onClosePopup();
        document.getElementById("layout5_temp_bn1").style.display = "";
        document.getElementById("imgLayout5Bn1").style.display = "none";
        document.getElementById("layout5_notice_bn1").style.display = "";
        document.getElementById("layout5_bn1").src = "";
        sel_layout--;
        document.getElementById("layout5_bn1").style.display = "none";
    }

    function cancelLayout6Bm() {
        layout6_count--;
        onClosePopup();
        document.getElementById("layout6_tp_bm").style.display = "";
        document.getElementById("imgLayout6Bm").style.display = "none";
        document.getElementById("layout6_notice_tp").style.display = "";
        document.getElementById("layout6_bn").src = "";
        sel_layout--;
        document.getElementById("layout6_bn").style.display = "none";
    }

    function cancelLayout6Bn1() {
        layout6_count--;
        onClosePopup();
        document.getElementById("layout6_tp_bn1").style.display = "";
        document.getElementById("imgLayout6bn1").style.display = "none";
        document.getElementById("layout6_notice_bn1").style.display = "";
        document.getElementById("layout6_bn1").src = "";
        sel_layout--;
        document.getElementById("layout6_bn1").style.display = "none";
    }

    function cancelLayout7Bm1() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_tp_bm1").style.display = "";
        document.getElementById("imgLayout7Bm1").style.display = "none";
        document.getElementById("layout7_notice_tp1").style.display = "";
        document.getElementById("layout7_bn1").src = "";
        sel_layout--;
        document.getElementById("layout7_bn1").style.display = "none";
    }

    function cancelLayout7Bm2() {
        layout7_count--;
        onClosePopup();
        document.getElementById("layout7_tp_bm2").style.display = "";
        document.getElementById("imgLayout7Bm2").style.display = "none";
        document.getElementById("layout7_notice_tp2").style.display = "";
        document.getElementById("layout7_bn2").src = "";
        sel_layout--;
        document.getElementById("layout7_bn2").style.display = "none";
    }

    function cancelLayout8Bm1() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_tp_bm1").style.display = "";
        document.getElementById("imgLayout8Bm1").style.display = "none";
        document.getElementById("layout8_notice_tp1").style.display = "";
        document.getElementById("layout8_bn11").src = "";
        sel_layout--;
        document.getElementById("layout8_bn11").style.display = "none";
    }

    function cancelLayout8Bm2() {
        layout8_count--;
        onClosePopup();
        document.getElementById("layout8_bn1").style.display = "";
        document.getElementById("imgLayout8Bm2").style.display = "none";
        document.getElementById("layout8_notice_tp2").style.display = "";
        document.getElementById("layout8_bn12").src = "";
        sel_layout--;
        document.getElementById("layout8_bn12").style.display = "none";
    }

    function cancelLayout9Bm() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_tp_bm").style.display = "";
        document.getElementById("imgLayout9Bm").style.display = "none";
        document.getElementById("layout9_notice_tp1").style.display = "";
        document.getElementById("layout9_bn3").src = "";
        sel_layout--;
        document.getElementById("layout9_bn3").style.display = "none";
    }

    function cancelLayout9Bn1() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_bn1").style.display = "";
        document.getElementById("imgLayout9Bn1").style.display = "none";
        document.getElementById("layout9_notice_tp2").style.display = "";
        document.getElementById("layout9_bn1_image").src = "";
        sel_layout--;
        document.getElementById("layout9_bn1_image").style.display = "none";
    }

    function cancelLayout9Bn2() {
        layout9_count--;
        onClosePopup();
        document.getElementById("layout9_bn2").style.display = "";
        document.getElementById("imgLayout9Bn2").style.display = "none";
        document.getElementById("layout9_notice_tp3").style.display = "";
        document.getElementById("layout9_bn2_image").src = "";
        sel_layout--;
        document.getElementById("layout9_bn2_image").style.display = "none";
    }

    function show(id) {
        selectedMenuType = id - 1;
        for (var i = 1; i <= 6; i++) {
            if (i == id) {
                document.getElementById("type_menu" + i).setAttribute("class", "on");
            }
            else {
                document.getElementById("type_menu" + i).setAttribute("class", "");
            }
        }

        $.ajax({
            url: 'getCategory.aspx?type=' + (id - 1),
            type: "post",
            async: false,
            success: function (data) {
                document.getElementById("showArticelView").innerHTML = data;
                InitDragDrop();
            },
            error: function (data) {
            }
        });
    }

    function InitSelectLayout1() {
        if (isTempLayout == 0)
        {
            var type = 0;
            $.ajax({
                url: "getType.aspx",
                type: "post",
                processData: false,
                contentType: false,
                async: false,
                success: function (data, textStatus, jqXHR) {
                    type = data;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });

            if (type == 0) {
                document.getElementById("ul_layout2").style.display = "";
                document.getElementById("ul_layout1").style.display = "none";
                document.getElementById("layout6Content").style.display = "";
                cur_SelLayout = 6;
            }
            else if (type == 1) {
                document.getElementById("ul_layout2").style.display = "none";
                document.getElementById("ul_layout1").style.display = "";
                document.getElementById("layout1Content").style.display = "";
                cur_SelLayout = 1;
            }
        }
    }

    function InitLayoutContent() {
        var type = 0;
        $.ajax({
            url: "getType.aspx",
            type: "post",
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                type = data;
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });

        if (type == 0) {
            document.getElementById("ul_layout2").style.display = "";
            document.getElementById("ul_layout1").style.display = "none";
        }
        else if (type == 1) {
            document.getElementById("ul_layout2").style.display = "none";
            document.getElementById("ul_layout1").style.display = "";
        }
        var nameid = 0;
        var top1id = 0;
        var top2id = 0;
        var top3id = 0;
        var top4id = 0;
        var top5id = 0;
        var top6id = 0;
        var top7id = 0;
        var top8id = 0;
        var top9id = 0;
        var banner1id = 0;
        var banner2id = 0;
        var adv1id = 0;
        var adv2id = 0;
        var adv3id = 0;

        var flag = true;
        $.ajax({
            url: "getLayout.aspx",
            type: "post",
            processData: false,
            contentType: false,
            async: false,
            success: function (data, textStatus, jqXHR) {
                if (data != "") {
                    var content = data.split(',');
                    cur_SelLayout = content[0];
                    if (type == 0) {
                        if (cur_SelLayout <= 5) {
                            flag = false;
                        }
                    }
                    else {
                        if (cur_SelLayout > 5) {
                            flag = false;
                        }
                    }
                    if (flag) {
                        onLayout(cur_SelLayout);
                        top1id = content[1];
                        top2id = content[2];
                        top3id = content[3];
                        top4id = content[4];
                        top5id = content[5];
                        top6id = content[6];
                        banner1id = content[7];
                        banner2id = content[8];
                        adv1id = content[9];
                        adv2id = content[10];
                        adv3id = content[11];
                        nameid = content[12];
                    }
                    else {
                        if (type == 0) {
                            document.getElementById("layout6Content").style.display = "";
                            cur_SelLayout = 6;
                        }
                        else if (type == 1) {
                            document.getElementById("layout1Content").style.display = "";
                            cur_SelLayout = 1;
                        }
                    }
                }
                else
                {
                    flag = false;
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                return;
            }
        });

        if (flag) {
            isTempLayout = 1;
            sel_layout = 0;
            //                switch (cur_SelLayout) {
            //                    case 1:
            if (cur_SelLayout == 1) {
                var name = getLayoutContent(1, nameid, 1);
                document.getElementById("layout1_Newsname").innerHTML = name;
                var title = getLayoutContent(1, top1id, 1);
                var content = getLayoutContent(1, top1id, 2);
                var summary = getLayoutContent(1, top1id, 3);
                var image = getLayoutContent(1, top1id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout1_top1_title").innerText = title;
                    document.getElementById("layout1_top1_title1").value = title;
                    change(document.getElementById("layout1_top1_title1"), 100);
                    document.getElementById("layout1_top1_content").innerText = summary;
                    document.getElementById("layout1_top1_summary").value = content;
                    document.getElementById("layout1_top1_image").src = image;
                    document.getElementById("layout1_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Top1").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_temp_top1").style.display = "none";
                }
                title = getLayoutContent(1, top2id, 1);
                content = getLayoutContent(1, top2id, 2);
                summary = getLayoutContent(1, top2id, 3);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout1_top2_title").innerText = title;
                    document.getElementById("layout1_top2_con").value = summary;
//                    document.getElementById("layout1_top2_content").innerText = getLetters(summary, 26, 19);
                    document.getElementById("layout1_top2_content").innerText = summary;
                    document.getElementById("layout1_top2_summary").value = content;
                    document.getElementById("layout1_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Top2").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_temp_top2").style.display = "none";
                }

                title = getLayoutContent(1, top3id, 1);
                content = getLayoutContent(1, top3id, 2);
                summary = getLayoutContent(1, top3id, 3);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout1_top3_title").innerText = title;
                    document.getElementById("layout1_top3_content").innerText = summary;
                    document.getElementById("layout1_top3_summary").value = content;

                    document.getElementById("layout1_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Top3").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_temp_top3").style.display = "none";
                }

                image = getLayoutContent(1, banner1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout1_lbanner").src = image;
                    document.getElementById("layout1_temp_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Bn1").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_notice_bn1").style.display = "none";
                }

                image = getLayoutContent(1, banner2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout1_rbanner").src = image;
                    document.getElementById("layout1_temp_bn2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Bn2").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_notice_bn2").style.display = "none";
                }

                image = getLayoutContent(1, adv3id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout1_adv").src = image;
                    document.getElementById("layout1_tp_bm").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout1Bm").style.display = "";
                    sel_layout++;
                    layout1_count++;
                    document.getElementById("layout1_temp_top3").style.display = "none";
                }
                //                            break;
            }
                //                    case 4:
            else if (cur_SelLayout == 4) {
                var name = getLayoutContent(4, nameid, 1);
                document.getElementById("layout4_Newsname").innerHTML = name;
                var title = getLayoutContent(4, top1id, 1);
                var content = getLayoutContent(4, top1id, 2);
                var summary = getLayoutContent(4, top1id, 3);
                var image = getLayoutContent(4, top1id, 4);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout4_top1_title").innerText = title;
                    document.getElementById("layout4_top1_title1").value = title;
                    change(document.getElementById("layout4_top1_title1"), 84);
                    document.getElementById("layout4_top1_con").value = summary;
//                    document.getElementById("layout4_top1_content").innerText = getLetters(summary, 28, 13);
                    document.getElementById("layout4_top1_content").innerText = summary;
                    document.getElementById("layout4_top1_summary").value = content;
                    document.getElementById("layout4_top1_image").src = image;
                    document.getElementById("layout4_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Top1").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_temp_top1").style.display = "none";
                }
                title = getLayoutContent(4, top2id, 1);
                content = getLayoutContent(4, top2id, 2);
                summary = getLayoutContent(4, top2id, 3);
                image = getLayoutContent(4, top2id, 4);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout4_top2_title").innerText = title;
                    document.getElementById("layout4_top2_con").value = summary;
//                    document.getElementById("layout4_top2_content").innerText = getLetters(summary, 28, 16);
                    document.getElementById("layout4_top2_content").innerText = summary;
                    document.getElementById("layout4_top2_summary").value = content;
                    document.getElementById("layout4_top2_image").src = image;
                    document.getElementById("layout4_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Top2").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_temp_top2").style.display = "none";
                }
                title = getLayoutContent(4, top3id, 1);
                content = getLayoutContent(4, top3id, 2);
                summary = getLayoutContent(4, top3id, 3);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout4_top3_title").innerText = title;
                    document.getElementById("layout4_top3_con").value = summary;
//                    document.getElementById("layout4_top3_content").innerText = getLetters(summary, 27, 15);
                    document.getElementById("layout4_top3_content").innerText = summary;
                    document.getElementById("layout4_top3_summary").value = content;
                    document.getElementById("layout4_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Top3").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_temp_top3").style.display = "none";
                }
                title = getLayoutContent(4, top4id, 1);
                content = getLayoutContent(4, top4id, 2);
                summary = getLayoutContent(4, top4id, 3);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout4_top4_title").innerText = title;
                    document.getElementById("layout4_top4_con").value = summary;
//                    document.getElementById("layout4_top4_content").innerText = getLetters(summary, 27, 15);
                    document.getElementById("layout4_top4_content").innerText = summary;
                    document.getElementById("layout4_top4_summary").value = content;
                    document.getElementById("layout4_top4").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Top4").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_temp_top4").style.display = "none";
                }
                image = getLayoutContent(4, banner1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout4_bn1").src = image;

                    document.getElementById("layout4_temp_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Bn1").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_notice_bn1").style.display = "none";
                }
                image = getLayoutContent(4, banner2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout4_bn2").src = image;

                    document.getElementById("layout4_temp_bn2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Bn2").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_notice_bn2").style.display = "none";
                }
                image = getLayoutContent(4, adv3id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout4_bn11").src = image;

                    document.getElementById("layout4_tp_bm1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout4Bm1").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_notice_tp1").style.display = "none";
                }
                image = getLayoutContent(4, adv1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout4_bn12").src = image;
                    document.getElementById("layout4_tp_bm2").style = "background-image:url();cursor:pointer;height:351px;";
                    document.getElementById("imgLayout4Bm2").style.display = "";
                    sel_layout++;
                    layout4_count++;
                    document.getElementById("layout4_notice_tp2").style.display = "none";
                }
                //                            break;
            }
                //                    case 5:
            else if (cur_SelLayout == 5) {
                var name = getLayoutContent(5, nameid, 1);
                document.getElementById("layout5_Newsname").innerHTML = name;
                var title = getLayoutContent(5, top1id, 1);
                var content = getLayoutContent(5, top1id, 2);
                var summary = getLayoutContent(5, top1id, 3);
                var image = getLayoutContent(5, top1id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout5_top1_title").innerText = title;
                    document.getElementById("layout5_top1_title1").value = title;
                    change(document.getElementById("layout5_top1_title1"), 84);
                    document.getElementById("layout5_top1_con").value = summary;
//                    document.getElementById("layout5_top1_content").innerText = getLetters(summary, 28, 13);
                    document.getElementById("layout5_top1_content").innerText = summary;
                    document.getElementById("layout5_top1_summary").value = content;
                    document.getElementById("layout5_top1_image").src = image;
                    document.getElementById("layout5_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top1").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top1").style.display = "none";
                }
                title = getLayoutContent(5, top2id, 1);
                content = getLayoutContent(5, top2id, 2);
                summary = getLayoutContent(5, top2id, 3);
                image = getLayoutContent(5, top2id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {

                    document.getElementById("layout5_top2_title").innerText = title;
                    document.getElementById("layout5_top2_con").value = summary;
//                    document.getElementById("layout5_top2_content").innerText = getLetters(summary, 29, 16);
                    document.getElementById("layout5_top2_content").innerText = summary;
                    document.getElementById("layout5_top2_summary").value = content;
                    document.getElementById("layout5_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top2").style.display = "";
                    document.getElementById("layout5_top2_image").src = image;
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top2").style.display = "none";
                }
                title = getLayoutContent(5, top3id, 1);
                content = getLayoutContent(5, top3id, 2);
                summary = getLayoutContent(5, top3id, 3);
                image = getLayoutContent(5, top3id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout5_top3_title").innerText = title;
                    document.getElementById("layout5_top3_con").value = summary;
                    document.getElementById("layout5_top3_content").innerText = summary;
                    document.getElementById("layout5_top3_summary").value = content;
                    document.getElementById("layout5_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top3").style.display = "";
                    document.getElementById("layout5_top3_image").src = image;
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top3").style.display = "none";
                }
                title = getLayoutContent(5, top4id, 1);
                content = getLayoutContent(5, top4id, 2);
                summary = getLayoutContent(5, top4id, 3);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout5_top4_title").innerText = title;
                    document.getElementById("layout5_top4_con").value = summary;
//                    document.getElementById("layout5_top4_content").innerText = getLetters(summary, 28, 15);
                    document.getElementById("layout5_top4_content").innerText = summary;
                    document.getElementById("layout5_top4_summary").value = content;
                    document.getElementById("layout5_top4").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top4").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top4").style.display = "none";
                }
                title = getLayoutContent(5, top5id, 1);
                content = getLayoutContent(5, top5id, 2);
                summary = getLayoutContent(5, top5id, 3);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout5_top5_title").innerText = title;
                    document.getElementById("layout5_top5_con").value = summary;
                    document.getElementById("layout5_top5_content").innerText = summary;
//                    document.getElementById("layout5_top5_content").innerText = getLetters(summary, 28, 15);
                    document.getElementById("layout5_top5_summary").value = content
                    document.getElementById("layout5_top5").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top5").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top5").style.display = "none";
                }
                title = getLayoutContent(5, top6id, 1);
                content = getLayoutContent(5, top6id, 2);
                summary = getLayoutContent(5, top6id, 3);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "")) {
                    document.getElementById("layout5_top6_title").innerText = title;
                    document.getElementById("layout5_top6_con").value = summary;
                    var temp = getLetters(content, 27, 9);
                    document.getElementById("layout5_top6_content").innerText = temp;
                    content = content.substr(temp.length);
//                    document.getElementById("layout5_top6_content").innerText = getLetters(summary, 28, 15);
                    document.getElementById("layout5_top6_content").innerText = summary;
                    document.getElementById("layout5_top6_summary").value = content;
                    document.getElementById("layout5_top6").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Top6").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_top6").style.display = "none";
                }
                image = getLayoutContent(5, banner1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout5_bn1").src = image;
                    document.getElementById("layout5_temp_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Bn1").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_notice_bn1").style.display = "none";
                }
                image = getLayoutContent(5, banner2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout5_bn2").src = image;
                    document.getElementById("layout5_temp_bn2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Bn2").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_notice_bn2").style.display = "none";
                }
                image = getLayoutContent(5, adv3id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout5banner").src = image;
                    document.getElementById("layout5_banner").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout5Banner").style.display = "";
                    sel_layout++;
                    layout5_count++;
                    document.getElementById("layout5_temp_banner").style.display = "none";
                }
                //                            break;
            }
                //                    case 6:
            else if (cur_SelLayout == 6) {
                var name = getLayoutContent(6, nameid, 1);
                document.getElementById("layout6_Newsname").innerHTML = name;

                var title = getLayoutContent(6, top1id, 1);
                var content = getLayoutContent(6, top1id, 2);
                var summary = getLayoutContent(6, top1id, 3);
                var image = getLayoutContent(6, top1id, 4);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout6_top1_title").innerText = title;
                    document.getElementById("layout6_top1_title1").value = title;
                    change(document.getElementById("layout6_top1_title1"), 35);
                    document.getElementById("layout6_top1_content").innerText = summary;
                    document.getElementById("layout6_top1_summary").value = content;
                    document.getElementById("layout6_top1_image").src = image;

                    document.getElementById("layout6_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout6Top1").style.display = "";
                    sel_layout++;
                    layout6_count++;
                    document.getElementById("layout6_temp_top1").style.display = "none";
                }
                title = getLayoutContent(6, top2id, 1);
                content = getLayoutContent(6, top2id, 2);
                summary = getLayoutContent(6, top2id, 3);
                image = getLayoutContent(6, top2id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout6_top2_title").innerText = title;
                    document.getElementById("layout6_top2_content").innerText = summary;
                    document.getElementById("layout6_top2_summary").value = content;
                    document.getElementById("layout6_top2_image").src = image;

                    document.getElementById("layout6_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout6Top2").style.display = "";
                    sel_layout++;
                    layout6_count++;
                    document.getElementById("layout6_temp_top2").style.display = "none";
                }
                title = getLayoutContent(6, top3id, 1);
                content = getLayoutContent(6, top3id, 2);
                summary = getLayoutContent(6, top3id, 3);
                image = getLayoutContent(6, top3id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout6_top3_title").innerText = title;
                    document.getElementById("layout6_top3_content").innerText = summary;
                    document.getElementById("layout6_top3_summary").value = content;
                    document.getElementById("layout6_top3_image").src = image;

                    document.getElementById("layout6_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout6Top3").style.display = "";
                    sel_layout++;
                    layout6_count++;
                    document.getElementById("layout6_temp_top3").style.display = "none";
                }
                document.getElementById("layout6_top4_title").innerText = fix1title;
                document.getElementById("layout6_top4_content").innerText = fix1content;
                document.getElementById("layout6_top4_image").src = fix1image;

                document.getElementById("layout6_top5_title").innerText = fix2title;
                document.getElementById("layout6_top5_content").innerText = fix2content;
                document.getElementById("layout6_top5_image").src = fix2image;

                document.getElementById("layout6_top6_title").innerText = fix3title;
                document.getElementById("layout6_top6_content").innerText = fix3content;
                document.getElementById("layout6_top6_image").src = fix3image;

                image = getLayoutContent(6, adv1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout6_bn1").src = image;

                    document.getElementById("layout6_tp_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout6bn1").style.display = "";
                    sel_layout++;
                    layout6_count++;
                    document.getElementById("layout6_notice_bn1").style.display = "none";
                }
                image = getLayoutContent(6, adv3id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout6_bn").src = image;

                    document.getElementById("layout6_tp_bm").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout6Bm").style.display = "";
                    sel_layout++;
                    layout6_count++;
                    document.getElementById("layout6_notice_tp").style.display = "none";
                }
                //                            break;
            }
                //                    case 7:
            else if (cur_SelLayout == 7) {
                var name = getLayoutContent(7, nameid, 1);
                document.getElementById("layout7_Newsname").innerHTML = name;

                var title = getLayoutContent(7, top1id, 1);
                var content = getLayoutContent(7, top1id, 2);
                var summary = getLayoutContent(7, top1id, 3);
                var image = getLayoutContent(7, top1id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout7_top1_title").innerText = title;
                    document.getElementById("layout7_top1_title1").value = title;
                    change(document.getElementById("layout7_top1_title1"), 35);
                    document.getElementById("layout7_top1_content").innerText = summary;
                    document.getElementById("layout7_top1_summary").value = content;
                    document.getElementById("layout7_top1_image").src = image;

                    document.getElementById("layout7_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Top1").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_temp_top1").style.display = "none";
                }
                title = getLayoutContent(7, top2id, 1);
                content = getLayoutContent(7, top2id, 2);
                summary = getLayoutContent(7, top2id, 3);
                image = getLayoutContent(7, top2id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout7_top2_title").innerText = title;
                    document.getElementById("layout7_top2_content").innerText = summary;
                    document.getElementById("layout7_top2_summary").value = content;
                    document.getElementById("layout7_top2_image").src = image;

                    document.getElementById("layout7_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Top2").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_temp_top2").style.display = "none";
                }
                title = getLayoutContent(7, top3id, 1);
                content = getLayoutContent(7, top3id, 2);
                summary = getLayoutContent(7, top3id, 3);
                image = getLayoutContent(7, top3id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout7_top3_title").innerText = title;
                    document.getElementById("layout7_top3_content").innerText = summary;
                    document.getElementById("layout7_top3_summary").value = content;
                    document.getElementById("layout7_top3_image").src = image;

                    document.getElementById("layout7_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Top3").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_temp_top3").style.display = "none";
                }
                title = getLayoutContent(7, top4id, 1);
                content = getLayoutContent(7, top4id, 2);
                summary = getLayoutContent(7, top4id, 3);
                image = getLayoutContent(7, top4id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout7_top4_title").innerText = title;
                    document.getElementById("layout7_top4_content").innerText = summary;
                    document.getElementById("layout7_top4_summary").value = content;
                    document.getElementById("layout7_top4_image").src = image;

                    document.getElementById("layout7_top4").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Top4").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_temp_top4").style.display = "none";
                }

                document.getElementById("layout7_top5_title").innerText = fix1title;
                document.getElementById("layout7_top5_content").innerText = fix1content;
                document.getElementById("layout7_top5_image").src = fix1image;

                document.getElementById("layout7_top6_title").innerText = fix2title;
                document.getElementById("layout7_top6_image").src = fix2image;
                document.getElementById("layout7_top6_content").innerText = fix2content;

                image = getLayoutContent(7, adv1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout7_bn1").src = image;
                    document.getElementById("layout7_tp_bm1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Bm1").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_notice_tp1").style.display = "none";
                }
                image = getLayoutContent(7, adv2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout7_bn2").src = image;
                    document.getElementById("layout7_tp_bm2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout7Bm2").style.display = "";
                    sel_layout++;
                    layout7_count++;
                    document.getElementById("layout7_notice_tp2").style.display = "none";
                }
                //                            break;
            }
                //                    case 8:
            else if (cur_SelLayout == 8) {
                var name = getLayoutContent(8, nameid, 1);
                document.getElementById("layout8_Newsname").innerHTML = name;

                document.getElementById("layout8_top1").style = "background-image:url();cursor:pointer;";
                document.getElementById("imgLayout8Top1").style.display = "";
                var title = getLayoutContent(8, top1id, 1);
                var content = getLayoutContent(8, top1id, 2);
                var summary = getLayoutContent(8, top1id, 3);
                var image = getLayoutContent(8, top1id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout8_top1_title").innerText = title;
                    document.getElementById("layout8_top1_title1").value = title;
                    change(document.getElementById("layout8_top1_title1"), 39);
                    document.getElementById("layout8_top1_content").innerText = summary;
                    document.getElementById("layout8_top1_summary").value = content;
                    document.getElementById("layout8_top1_image").src = image;

                    document.getElementById("layout8_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Top1").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_temp_top1").style.display = "none";
                }
                title = getLayoutContent(8, top2id, 1);
                content = getLayoutContent(8, top2id, 2);
                summary = getLayoutContent(8, top2id, 3);
                image = getLayoutContent(8, top2id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout8_top2_title").innerHTML = title;
                    document.getElementById("layout8_top2_content").innerHTML = summary;
                    document.getElementById("layout8_top2_summary").value = content;
                    document.getElementById("layout8_top2_image").src = image;

                    document.getElementById("layout8_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Top2").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_temp_top2").style.display = "none";

                }
                title = getLayoutContent(8, top3id, 1);
                content = getLayoutContent(8, top3id, 2);
                summary = getLayoutContent(8, top3id, 3);
                image = getLayoutContent(8, top3id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout8_top3_title").innerHTML = title;
                    document.getElementById("layout8_top3_content").innerHTML = summary;
                    document.getElementById("layout8_top3_summary").value = content;
                    document.getElementById("layout8_top3_image").src = image;

                    document.getElementById("layout8_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Top3").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_temp_top3").style.display = "none";

                }
                title = getLayoutContent(8, top4id, 1);
                content = getLayoutContent(8, top4id, 2);
                summary = getLayoutContent(8, top4id, 3);
                image = getLayoutContent(8, top4id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout8_top4_title").innerHTML = title;
                    document.getElementById("layout8_top4_content").innerHTML = summary;
                    document.getElementById("layout8_top4_summary").value = content;
                    document.getElementById("layout8_top4_image").src = image;

                    document.getElementById("layout8_top4").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Top4").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_temp_top4").style.display = "none";

                }
                title = getLayoutContent(8, top5id, 1);
                content = getLayoutContent(8, top5id, 2);
                summary = getLayoutContent(8, top5id, 3);
                image = getLayoutContent(8, top5id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout8_top5_title").innerHTML = title;
                    document.getElementById("layout8_top5_content").innerHTML = summary;
                    document.getElementById("layout8_top5_summary").value = content;
                    document.getElementById("layout8_top5_image").src = image;

                    document.getElementById("layout8_top5").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Top5").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_temp_top5").style.display = "none";

                }

                document.getElementById("layout8_top6_content").innerText = fix1content;
                document.getElementById("layout8_top6_title").innerText = fix1title;
                document.getElementById("layout8_top6_image").src = fix1image;

                image = getLayoutContent(8, adv1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout8_bn11").src = image;

                    document.getElementById("layout8_tp_bm1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Bm1").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_notice_tp1").style.display = "none";
                }
                image = getLayoutContent(8, adv2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout8_bn12").src = image;

                    document.getElementById("layout8_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout8Bm2").style.display = "";
                    sel_layout++;
                    layout8_count++;
                    document.getElementById("layout8_notice_tp2").style.display = "none";
                }
                //                            break;
            }
                //                    case 9:
            else if (cur_SelLayout == 9) {
                var name = getLayoutContent(9, nameid, 1);
                document.getElementById("layout9_Newsname").innerHTML = name;

                var title = getLayoutContent(9, top1id, 1);
                var content = getLayoutContent(9, top1id, 2);
                var summary = getLayoutContent(9, top1id, 3);
                var image = getLayoutContent(9, top1id, 4);

                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {
                    document.getElementById("layout9_top1_title").innerHTML = title;
                    document.getElementById("layout9_top1_title1").value = title;
                    change(document.getElementById("layout9_top1_title1"), 33);
                    document.getElementById("layout9_top1_content").innerHTML = summary;
                    document.getElementById("layout9_top1_summary").value = content;
                    document.getElementById("layout9_top1_image").src = image;

                    document.getElementById("layout9_top1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top1").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top1").style.display = "none";
                }
                title = getLayoutContent(9, top2id, 1);
                content = getLayoutContent(9, top2id, 2);
                summary = getLayoutContent(9, top2id, 3);
                image = getLayoutContent(9, top2id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout9_top2_title").innerHTML = title;
                    document.getElementById("layout9_top2_content").innerHTML = summary;
                    document.getElementById("layout9_top2_summary").value = content;
                    document.getElementById("layout9_top2_image").src = image;

                    document.getElementById("layout9_top2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top2").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top2").style.display = "none";
                }
                title = getLayoutContent(9, top3id, 1);
                content = getLayoutContent(9, top3id, 2);
                summary = getLayoutContent(9, top3id, 3);
                image = getLayoutContent(9, top3id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout9_top3_title").innerText = title;
                    document.getElementById("layout9_top3_content").innerHTML = summary;
                    document.getElementById("layout9_top3_summary").value = content;
                    document.getElementById("layout9_top3_image").src = image;

                    document.getElementById("layout9_top3").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top3").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top3").style.display = "none";
                }
                title = getLayoutContent(9, top4id, 1);
                content = getLayoutContent(9, top4id, 2);
                image = getLayoutContent(9, top4id, 4);
                summary = getLayoutContent(9, top4id, 3);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout9_top4_title").innerHTML = title;
                    document.getElementById("layout9_top4_content").innerHTML = summary;
                    document.getElementById("layout9_top4_summary").value = content;
                    document.getElementById("layout9_top4_image").src = image;

                    document.getElementById("layout9_top4").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top4").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top4").style.display = "none";
                }
                title = getLayoutContent(9, top5id, 1);
                content = getLayoutContent(9, top5id, 2);
                summary = getLayoutContent(9, top5id, 3);
                image = getLayoutContent(9, top5id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout9_top5_title").innerHTML = title;
                    document.getElementById("layout9_top5_content").innerHTML = summary;
                    document.getElementById("layout9_top5_summary").value = content;
                    document.getElementById("layout9_top5_image").src = image;

                    document.getElementById("layout9_top5").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top5").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top5").style.display = "none";
                }
                title = getLayoutContent(9, top6id, 1);
                content = getLayoutContent(9, top6id, 2);
                summary = getLayoutContent(9, top6id, 3);
                image = getLayoutContent(9, top6id, 4);
                if ((title != null && title != "") || (content != null && content != "") || (summary != null && summary != "") || (image != null && image != "")) {

                    document.getElementById("layout9_top6_title").innerHTML = title;
                    document.getElementById("layout9_top6_content").innerHTML = summary;
                    document.getElementById("layout9_top6_summary").value = content;
                    document.getElementById("layout9_top6_image").src = image;

                    document.getElementById("layout9_top6").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Top6").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_temp_top6").style.display = "none";
                }
                image = getLayoutContent(9, banner1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout9_bn1_image").src = image;

                    document.getElementById("layout9_bn1").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Bn1").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_notice_tp2").style.display = "none";
                }
                image = getLayoutContent(9, banner2id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout9_bn2_image").src = image;

                    document.getElementById("layout9_bn2").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Bn2").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_notice_tp3").style.display = "none";
                }
                image = getLayoutContent(9, adv1id, 4);
                if (image != null && image != "") {
                    document.getElementById("layout9_bn3").src = image;

                    document.getElementById("layout9_tp_bm").style = "background-image:url();cursor:pointer;";
                    document.getElementById("imgLayout9Bm").style.display = "";
                    sel_layout++;
                    layout9_count++;
                    document.getElementById("layout9_notice_tp1").style.display = "none";
                }
                //                            break;
            }
            //                }
        }
    }