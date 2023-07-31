<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>
<%@ Page Title="" Language="C#" MasterPageFile="~/Account/UserPage.Master" AutoEventWireup="true" CodeBehind="content.aspx.cs" Inherits="jobworld.Account.content" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" src="/Scripts/contentProcess.js"></script>
    <script type="text/javascript" src="/Scripts/common.js"></script>
    <script type="text/javascript">
        var layout1_count = 0;
        var layout2_count = 0;
        var layout3_count = 0;
        var layout4_count = 0;
        var layout5_count = 0;
        var layout6_count = 0;
        var layout7_count = 0;
        var layout8_count = 0;
        var layout9_count = 0;

        var currentID;

        var sel_layout = 0;

        var cur_SelLayout = 0;

        var sel_content_type = 0;
        var cur_selectedArticleID;
        var current_articleID;
        var current_selected_type;

        var selectedMenuType = 0;

        var isTempLayout = 0;

        var edit_News_name = "";

        var fix1title = "개관 5주년 맞는 '한국잡월드‘… 420만명 다녀가";
        var fix2title = "한국잡월드, ‘미래직업 Lab’ 개관";
        var fix3title = "‘미래직업Lab’ 개관 기념 세미나  개최";
        var fix1content = "국내 최대 어린이∙청소년 종합직업체험관인 한국잡월드가 개관 5주년을 맞았다. 2012년 5월 15일 문을 연 후, 현재까지 420만명이 방문해 직업∙진로 체험을 했다. 계속적인 신규 콘텐츠 개발과 함께 진로교육이 이루어지고 있어 인기를 끌고있다.";
        var fix2content = "한국잡월드가「미래직업Lab」을 개관한다. 제4차 산업혁명 시대를 맞이해 미래직업과 미래기술, 미래정보를 종합적으로 제공한다. 청소년들이 미래산업과 기술의 발전에 따른 미래직업 정보를 체험으로 이해할수 있도록 구성하였다.";
        var fix3content = "직업체험관 한국잡월드가 ‘미래직업Lab’ 개관을 기념해 미래직업 세미나와 특강을 개최한다. 한국잡월드 이사장은 “이번 특강과 세미나가 다양한 미래직업에 대해 탐색하고, 미래사회에 필요한 역량을 함양하는 기회가 되길 바란다”고 밝혔다.";
        var fix1image = "../images/fix1.png";
        var fix2image = "../images/fix2.png";
        var fix3image = "../images/fix3.png";
        var today = new Date();
        var today1 = new Date();

        function onEditNewsname() {
            onClosePopup();
            document.getElementById("popupForm").style.display = "";
            document.getElementById("editNewsnameForm").style.display = "";
            if (cur_SelLayout == 0)
            {
                document.getElementById("edit_Newsname").value = edit_News_name;
            }
            else {
                document.getElementById("edit_Newsname").value = document.getElementById("layout" + cur_SelLayout + "_Newsname").innerText;
            }
        }

        $(document).ready(function () {
            current_selected_type = 0;
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }
            var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
            var day = days[today.getDay()];

            today = yyyy + '년 ' + mm + '월 ' + dd + '일 ' + day;
            today1 = yyyy + '년 ' + mm + '월 ' + dd + '일 ';

            document.getElementById("layout1_date").innerText = today;
            document.getElementById("layout4_date").innerText = today;
            document.getElementById("layout5_date").innerText = today;
            document.getElementById("layout6_publish_date").innerText = today;
            document.getElementById("layout7_publish_date").innerText = today;
            document.getElementById("layout8_publish_date").innerText = today;
            document.getElementById("layout9_publish_date").innerText = today;

            document.getElementById("layout6_top4_title").innerText = fix1title;
            document.getElementById("layout6_top4_content").innerText = fix1content;
            document.getElementById("layout6_top4_image").src = fix1image;

            document.getElementById("layout6_top5_title").innerText = fix2title;
            document.getElementById("layout6_top5_content").innerText = fix2content;
            document.getElementById("layout6_top5_image").src = fix2image;

            document.getElementById("layout6_top6_title").innerText = fix3title;
            document.getElementById("layout6_top6_content").innerText = fix3content;
            document.getElementById("layout6_top6_image").src = fix3image;

            document.getElementById("layout7_top5_title").innerText = fix1title;
            document.getElementById("layout7_top5_content").innerText = fix1content;
            document.getElementById("layout7_top5_image").src = fix1image;

            document.getElementById("layout7_top6_title").innerText = fix2title;
            document.getElementById("layout7_top6_image").src = fix2image;
            document.getElementById("layout7_top6_content").innerText = fix2content;

            document.getElementById("layout8_top6_content").innerText = fix1content;
            document.getElementById("layout8_top6_title").innerText = fix1title;
            document.getElementById("layout8_top6_image").src = fix1image;
            show(1);
            InitNewsList();
            InitNewsName();
            InitDragDrop();
            if (sel_content_type == 0) {
                onShowContent();
            }
            else if (sel_content_type == 1) {
                onAdvertisement();
            }

            InitLayoutContent();

            $('#articleDetailTitle2').bind('keyup paste drop', function (e) {
                $('#title_letters').text(getLength($('#articleDetailTitle2').val()));
//                change(document.getElementById('articleDetailTitle2'), 59);
            });

            $('#articleDetailText2').bind('keyup paste drop', function (e) {
                $('#content_letters').text(getLength($('#articleDetailText2').val()));
//                change(document.getElementById('articleDetailText2'), 899);
            });

            $('#articleDetailSummary2').bind('keyup paste drop', function (e) {
                $('#summary_letters').text(getLength($('#articleDetailSummary2').val()));
//                change(document.getElementById('articleDetailSummary2'), 499);
            });

            $('#testTxt').bind('keyup paste drop', function (e) {
                $('#test_letters').text(getLength($('#testTxt').val()));
            });
            InitSelectLayout1();
        });

/*
        setInterval(function () {
            LoadMenu();
        }, 1000);
*/

        function loadlink()
        {
            try
            {
                $.ajax({
                    url: 'getStatue.aspx',
                    type: "post",
                    async: false,
                    success: function (data) {
                        var da = data.split(',');
                        if(da[0] == "1")
                        {
                            location.href = "login.aspx";
                        }
                        else if(da[0] == "0")
                        {
                            location.href = "standby.aspx";
                        }
                    },
                    error: function () {
                    }
                });
            }
            catch(e)
            {

            }
        }

        loadlink();
        setInterval(function () {
            loadlink()
        }, 5000);

    </script>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="header">
	    <div class="box_head">
		    <div class="ar_hd clfix">
			    <h1>
				    <a><img src="../images/top_logo_new.png" align="신문사뉴스">
                        <strong><asp:Literal ID="titleContent" runat="server"></asp:Literal></strong>
				    </a>
			    </h1>
			    <div class="top_mem">
				    <strong><asp:Literal ID="top_mem" runat="server"></asp:Literal></strong>
			    </div>
			    <div class="btn_btm"><a class="btn_save" onclick="onShowPreview()"><img src="../images/btn_save.png" alt=""></a></div>
		    </div>
		    <a class="btn_qu"><!--<img src="../images/ic_q.png" alt="">--></a>
	    </div>
    </div>

    <div id="container">
	    <div id="content1" class="clfix">
		    <div class="wrap_3col clfix">
			    <div class="lnb">
				    <div class="tablist">
					    <ul>
						    <li class="mu1" id="mySelectedArticleMenu"><a onclick="onContentList()"><strong>내 선택기사</strong></a></li>
						    <li class="mu2" id="AdvertisementMenu"><a onclick="onAdvertisement()"><strong>광고</strong></a></li>
					    </ul>
				    </div>

                    <div id="showArticleContent" class="dt_list" style="display:block;">
				        <ul>
                            <asp:Literal ID="showContent" runat="server" ></asp:Literal>
				        </ul>
                    </div>

                    <div id="showAdvertisementContent" class="dt_list2" style="display:none;" >
				        <div>
                            <div class="l_tit"><strong>사각광고</strong>
                                <a onclick="onShowAdv1()"><img src="../images/ico_adup.png" alt="" /></a>
                            </div>
					        <ul id="adv1">
                                <asp:Literal ID="AdvertisementList1" runat="server" ></asp:Literal>
					        </ul>
				        </div>
				        <div>
                            <div class="l_tit"><strong>배너광고</strong>
                                <a onclick="onShowAdv2()"><img src="../images/ico_adup.png" alt="" /></a>
                            </div>
					        <ul id="adv2">
                                <asp:Literal ID="AdvertisementList2" runat="server" ></asp:Literal>
					        </ul>
				        </div>
				        <div>
                            <div class="l_tit"><strong>삼단광고</strong>
                                <a onclick="onShowAdv3()"><img src="../images/ico_adup.png" alt="" /></a>
                            </div>
					        <ul id="adv3">
                                <asp:Literal ID="AdvertisementList3" runat="server" ></asp:Literal>
					        </ul>
				        </div>
                    </div>
			    </div>

			    <div class="box_contc">
				    <section class="ar_inbox">
					    <div class="tabarea" id="articlemenu">
						    <ul class="clfix">
							    <li class="on" id="articleMenu"><button type="button" onclick="onShowContent()">기사원고</button></li>
							    <li id="editMenu"><button type="button" onclick="onShowEdit()">신문편집</button></li>
						    </ul>
					    </div>
					    <div class="cont_slf" id="newsContent">
                            <ul class="list_cat clfix">
                                <li id="type_menu1" class="on"><a onclick="show(1)">ALL</a></li>
                                <li id="type_menu2"><a onclick="show(2)">정치/사회</a></li>
                                <li id="type_menu3"><a onclick="show(3)">경제/국제</a></li>
                                <li id="type_menu4"><a onclick="show(4)">문화/예술</a></li>
                                <li id="type_menu5"><a onclick="show(5)">과학/기술</a></li>
                                <li id="type_menu6"><a onclick="show(6)">취재기사</a></li>
						    </ul>
						    <div class="in_cont" id="showArticelView">
						    </div>
					    </div>

                        <div class="cont_srf" id="newsEdit" style="overflow-y:scroll;height:795px;">
                            <div class="in_cont" id="layout1Content" style="display:none">
                                <div class="ar_codz3ty" id="layout1_show_content">
								    <div class="codz_head clfix">
									    <div class="bn1"><img id="layout1_lbanner" alt=""></div>
									    <div class="title" id="layout1_Newsname">잡월드신문</div>
									    <div class="bn2"><img id="layout1_rbanner" alt=""></div>
								    </div>
                                    <div class="codz_date clfix">
									    <div class="date" id="layout1_author"></div>
									    <div class="cet"><a onclick="window.open('http://www.koreajobworld.or.kr', 'koreajobworld', 'width=1920,height=1080')">www.koreajobworld.or.kr</a></div>
									    <div class="addr" id="layout1_date"></div>
								    </div>
								    <div class="codz_bod clfix">
    									<div class="bod_l">
									        <div class="tp1 mb15 clfix">
            								    <h3 id="layout1_top1_title"></h3>
            								    <input type="hidden" id="layout1_top1_title1" />
										        <div class="tx_ph clfix">
											        <div class="img"><img id="layout1_top1_image" alt="" /></div>
											        <div class="tx_r">
                                                        <p class="fl" id="layout1_top1_content"></p>
											        </div>
										        </div>
                                                <span class="pos_nm_nw" id="layout1_top1_author"></span><span id="layout1_top1_regdate" style="display:none"></span>
                                                <input type="hidden" id="layout1_top1_summary" />
									        </div>
									        <div class="tp_bmt mb15">
										        <div class="tp2 bdrt">
            									    <h4 id="layout1_top2_title"></h4>
                                                    <div class="fl">
                                                        <p id="layout1_top2_content"></p>
                                                    </div>
                                                    <input type="hidden" id="layout1_top2_con" />
                                                    <input type="hidden" id="layout1_top2_summary" />
                                                    <span class="pos_nm_nw" id="layout1_top2_author"></span><span id="layout1_top2_regdate" style="display:none"></span>
										        </div>
									        </div>
                                        </div>
                                        <div class="bod_r">
                                        	<div class="tp3 bdlt">
                								<h4 id="layout1_top3_title"></h4>
											    <div class="fl"><p id="layout1_top3_content"></p></div>
                                                <span class="pos_nm_nw" id="layout1_top3_author"></span><span id="layout1_top3_regdate" style="display:none"></span>
                                                <input type="hidden" id="layout1_top3_summary" />
										    </div>
                                        </div>
					                    <div class="codz_btm mb15">
									        <div class="bn"><img id="layout1_adv" alt=""></div>
								        </div>
                                        <div class="codz_copy bdrt">
                                           <img src="../images/footer_logo.jpg">
									        ALL RIGHT BY RESERVED JOBWORLD &nbsp;위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								        </div>
								    </div>
                                </div>

							    <div class="ar_layup ar_layz3" id="layout1_temp" style="display:block">
								    <div class="bn1" id="layout1_temp_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Bn1" onclick="cancelLayout1Bn1()" style="display:none"></p>
                                        <div id="layout1_notice_bn1">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                        <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="bn2" id="layout1_temp_bn2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Bn2" onclick="cancelLayout1Bn2()" style="display:none"></p>
                                        <div id="layout1_notice_bn2">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="top1" id="layout1_top1" ondblclick="showLayoutTop(1, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Top1" onclick="cancelLayout1Top1()" style="display:none"></p>
									    <div id="layout1_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout1_top1_value" />
								    </div>
								    <div class="top2" id="layout1_top2" ondblclick="showLayoutTop(1, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Top2" onclick="cancelLayout1Top2()" style="display:none"></p>
									    <div id="layout1_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout1_top2_value" />
								    </div>
								    <div class="top3" id="layout1_top3" ondblclick="showLayoutTop(1, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Top3" onclick="cancelLayout1Top3()" style="display:none"></p>
									    <div id="layout1_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout1_top3_value" />
								    </div>
								    <div class="tp_bm" id="layout1_tp_bm">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout1Bm" onclick="cancelLayout1Bm()" style="display:none"></p>
									    <div id="layout1_notice_tp">
										    <strong>3단 광고</strong>
										    <p>좌측 날개에서 원하는 3단광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
							    </div>
						    </div>

                            <div class="in_cont" id="layout4Content" style="display:none">
                                <div class="ar_codz4_3ty" id="layout4_show_content">
								    <div class="codz_head clfix">
									    <div class="bn1"><img id="layout4_bn1" alt="" /></div>
									    <div class="title" id="layout4_Newsname">잡월드신문</div>
									    <div class="bn2"><img id="layout4_bn2" alt=""></div>
								    </div>
                                    <div class="codz_date clfix">
									    <div class="date" id="layout4_author"></div>
									    <div class="cet"><a onclick="window.open('http://www.koreajobworld.or.kr', 'koreajobworld', 'width=1920,height=1080')">www.koreajobworld.or.kr</a></div>
									    <div class="addr" id="layout4_date"></div>
								    </div>
								    <div class="codz_bod clfix">
									    <div class="ar_fl">
										    <div class="tp1 mb15 clfix">
											    <div class="tx_ph clfix">
            										<h3 id="layout4_top1_title"></h3>
            										<input type="hidden" id="layout4_top1_title1" />
												    <div class="img">
													    <img id="layout4_top1_image" alt=""></div>
												    <div class="tx_r mt15">
                                                        <p class="fl" id="layout4_top1_content"></p>
												    </div>
                                                    <input type="hidden" id="layout4_top1_con" />
                                                    <input type="hidden" id="layout4_top1_summary" />
                                                    <span class="pos_nm_nw" id="layout4_top1_author"></span><span id="layout4_top1_regdate" style="display:none"></span>
											    </div>
										    </div>
                                            <div class="bn2">
											    <img id="layout4_bn12" alt="">
										    </div>
									    </div>
									    <div class="ar_fr">
										    <div class="bn1">
											    <img id="layout4_bn11" alt="">
										    </div>
										    <div class="tp2 mt20">
            									<h4 id="layout4_top2_title"></h4>
                                                <input type="hidden" id="layout4_top2_summary" />
                                                <input type="hidden" id="layout4_top2_con" />
                                                <div class="fl">
                                                    <p class="img_wrap mb5"><img id="layout4_top2_image" alt=""></p>
                                                    <p id="layout4_top2_content"></p>
                                                </div>
                                                <span class="pos_nm_nw" id="layout4_top2_author"></span><span id="layout4_top2_regdate" style="display:none"></span>
										    </div>
										    <div class="tp3 bdrt mt15">
            									<h5 id="layout4_top3_title"></h5>  
                                                <input type="hidden" id="layout4_top3_summary" />
                                                <input type="hidden" id="layout4_top3_con" />
											    <div class="ovr">
												    <p class="fl" id="layout4_top3_content"></p>
											    </div>
                                                <span class="pos_nm_nw" id="layout4_top3_author"></span><span id="layout4_top3_regdate" style="display:none"></span>
										    </div>
										    <div class="tp4 bdrt mt15">
            									<h5 id="layout4_top4_title"></h5>
                                                <input type="hidden" id="layout4_top4_summary" />
                                                <input type="hidden" id="layout4_top4_con" />
											    <div class="ovr">
												    <p class="fl" id="layout4_top4_content"></p>
											    </div>
                                                <span class="pos_nm_nw" id="layout4_top4_author"></span><span id="layout4_top4_regdate" style="display:none"></span>
										    </div>
									    </div>
                                        <div class="codz_copy bdrt">
                                            <img src="../images/footer_logo.jpg">
									        ALL RIGHT BY RESERVED JOBWORLD &nbsp;위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								        </div>							    
								    </div>
							    </div>

							    <div class="ar_layup ar_layz4_3" id="layout4_temp" style="display:block">
								    <div class="bn1" id="layout4_temp_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Bn1" onclick="cancelLayout4Bn1()" style="display:none"></p>
									    <div id="layout4_notice_bn1">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="bn2" id="layout4_temp_bn2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Bn2" onclick="cancelLayout4Bn2()" style="display:none"></p>
									    <div id="layout4_notice_bn2">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="top1" id="layout4_top1" ondblclick="showLayoutTop(4, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Top1" onclick="cancelLayout4Top1()" style="display:none"></p>
									    <div id="layout4_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout4_top1_value" />
								    </div>
								    <div class="tp_bm1" id="layout4_tp_bm1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Bm1" onclick="cancelLayout4Bm1()" style="display:none"></p>
									    <div id="layout4_notice_tp1">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 배너광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="tp_bm2" id="layout4_tp_bm2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Bm2" onclick="cancelLayout4Bm2()" style="display:none"></p>
									    <div id="layout4_notice_tp2">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 사각광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="top2" id="layout4_top2" ondblclick="showLayoutTop(4, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Top2" onclick="cancelLayout4Top2()" style="display:none"></p>
									    <div id="layout4_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout4_top2_value" />
								    </div>
								    <div class="top3" id="layout4_top3" ondblclick="showLayoutTop(4, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Top3" onclick="cancelLayout4Top3()" style="display:none"></p>
									    <div id="layout4_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout4_top3_value" />
								    </div>
								    <div class="top4" id="layout4_top4" ondblclick="showLayoutTop(4, 4)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout4Top4" onclick="cancelLayout4Top4()" style="display:none"></p>
									    <div id="layout4_temp_top4">
										    <strong>TOP4</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
										    <div class="txt_nwPt">
												    <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
												    <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
										    </div>
                                            <input type="hidden" id="layout4_top4_value" />
                                        </div>
								    </div>
							    </div>
						    </div>

                            <div class="in_cont" id="layout5Content" style="display:none">
                                <div class="ar_codz6ty" id="layout5_show_content">
								    <div class="codz_head clfix">
									    <div class="bn1"><img id="layout5_bn1" alt=""></div>
									    <div class="title" id="layout5_Newsname">잡월드신문</div>
									    <div class="bn2"><img id="layout5_bn2" alt=""></div>
								    </div>
                                    <div class="codz_date clfix">
									    <div class="date" id="layout5_author"></div>
									    <div class="cet"><a onclick="window.open('http://www.koreajobworld.or.kr', 'koreajobworld', 'width=1920,height=1080')">www.koreajobworld.or.kr</a></div>
									    <div class="addr" id="layout5_date"></div>
								    </div>
								    <div class="codz_bod clfix">
									    <div class="ar_fl">
										    <div class="tp1 mb15 clfix">
											    <div class="tx_ph clfix">
            										<h3 id="layout5_top1_title"></h3>
            										<input type="hidden" id="layout5_top1_title1" />
                                                    <input type="hidden" id="layout5_top1_summary" />
                                                    <input type="hidden" id="layout5_top1_con" />
												    <div class="img">
													    <img id="layout5_top1_image" alt=""></div>
												    <div class="tx_r mt15">
													    <p class="fl" id="layout5_top1_content"></p>
												    </div>
											    </div>
                                                <span class="pos_nm_nw" id="layout5_top1_author"></span><span id="layout5_top1_regdate" style="display:none"></span>
										    </div>
										    <div class="tp3 bdrt mt15">
            									<h4 id="layout5_top3_title"></h4>
                                                <input type="hidden" id="layout5_top3_summary" />
                                                <input type="hidden" id="layout5_top3_con" />
											    <div class="fl">
												    <p id="layout5_top3_content"></p>
											    </div>
											    <div class="fr">
                                                    <p class="mb5"><img id="layout5_top3_image" alt=""></p>
											    </div>
                                                <span id="layout5_top3_author" class="pos_nm_nw"></span><span id="layout5_top3_regdate" style="display:none"></span>
										    </div>

										    <div class="tp5 bdrt mt15">
            									<h5 id="layout5_top5_title"></h5>
                                                <input type="hidden" id="layout5_top5_summary" />
                                                <input type="hidden" id="layout5_top5_con" />
											    <div class="fl">
												    <p id="layout5_top5_content"></p>
											    </div>
                                                <span class="pos_nm_nw" id="layout5_top5_author"></span><span id="layout5_top5_regdate" style="display:none"></span>
										    </div>
									    </div>
								        <div class="ar_fr">
										    <div class="tp2 mb15">
            								    <h4 id="layout5_top2_title"></h4>
                                                <input type="hidden" id="layout5_top2_summary" />
                                                <input type="hidden" id="layout5_top2_con" />
											    <div class="ovr">
                                                    <div class="fl">
													    <p class=" img_wrap mb5"><img id="layout5_top2_image" alt=""></p>
													    <p id="layout5_top2_content"></p>
												    </div>
											    </div>
	                                            <span class="pos_nm_nw" id="layout5_top2_author"></span><span id="layout5_top2_regdate" style="display:none"></span>
    									    </div>

                                            <div class="tp6">
											    <div class="bn">
												    <img id="layout5banner" alt="">
											    </div>
										    </div>

										    <div class="tp4 bdrt mb15">
            								    <h4 id="layout5_top4_title"></h4>
                                                <input type="hidden" id="layout5_top4_summary" />
                                                <input type="hidden" id="layout5_top4_con" />
											    <div class="ovr">
												    <p id="layout5_top4_content" class="fl"></p>
											    </div>
                                                <span class="pos_nm_nw" id="layout5_top4_author"></span><span id="layout5_top4_regdate" style="display:none"></span>
										    </div>

										    <div class="tp5 bdrt mt15">
            								    <h4 id="layout5_top6_title"></h4>
                                                <input type="hidden" id="layout5_top6_summary" />
                                                <input type="hidden" id="layout5_top6_con" />
											    <div class="fl">
												    <p id="layout5_top6_content"></p>
											    </div>
                                                <span class="pos_nm_nw" id="layout5_top6_author"></span><span id="layout5_top6_regdate" style="display:none"></span>
										    </div>
									    </div>
                                        <div class="codz_copy bdrt">
                                            <img src="../images/footer_logo.jpg">
									        ALL RIGHT BY RESERVED JOBWORLD &nbsp;위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								        </div>							    
								    </div>
							    </div>

							    <div class="ar_layup ar_layz6" id="layout5_temp" style="display:block">
								    <div class="bn1" id="layout5_temp_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Bn1" onclick="cancelLayout5Bn1()" style="display:none"></p>
									    <div id="layout5_notice_bn1">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="bn2" id="layout5_temp_bn2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Bn2" onclick="cancelLayout5Bn2()" style="display:none"></p>
									    <div id="layout5_notice_bn2">
									        <strong>배너광고</strong>
									        <p>좌측 날개에서 원하는 배너광고를<br>이 위치에 끌어 놓아 주세요</p>
                                        </div>
								    </div>
								    <div class="top1" id="layout5_top1" ondblclick="showLayoutTop(5, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top1" onclick="cancelLayout5Top1()" style="display:none"></p>
									    <div id="layout5_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
                                        <input type="hidden" id="layout5_top1_value" />
                                        </div>
								    </div>
								    <div class="top2" id="layout5_top2" ondblclick="showLayoutTop(5, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top2" onclick="cancelLayout5Top2()" style="display:none"></p>
									    <div id="layout5_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout5_top2_value" />
								    </div>
								    <div class="top3" id="layout5_top3" ondblclick="showLayoutTop(5, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top3" onclick="cancelLayout5Top3()" style="display:none"></p>
									    <div id="layout5_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="yel"><strong>기사이미지</strong></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout5_top3_value" />
								    </div>                                
                                    <div class="top33" id="layout5_top5" ondblclick="showLayoutTop(5, 5)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top5" onclick="cancelLayout5Top5()" style="display:none"></p>
									    <div id="layout5_temp_top5">
										    <strong>TOP5</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
										    <!-- 0620 추가 -->
										    <div class="txt_nwPt">
											    <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
											    <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
										    </div>
									    </div>
                                        <input type="hidden" id="layout5_top5_value" />
								    </div>
                                    <div class="top4" id="layout5_banner">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Banner" onclick="cancelLayout5Banner()" style="display:none"></p>
									    <div id="layout5_temp_banner">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 삼단광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="top5" id="layout5_top4" ondblclick="showLayoutTop(5, 4)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top4" onclick="cancelLayout5Top4()" style="display:none"></p>
									    <div id="layout5_temp_top4">
										    <strong>TOP4</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout5_top4_value" />
								    </div>
								    <div class="top6" id="layout5_top6" ondblclick="showLayoutTop(5, 6)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout5Top6" onclick="cancelLayout5Top6()" style="display:none"></p>
									    <div id="layout5_temp_top6">
										    <strong>TOP6</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
                                            <div class="txt_nwPt">
                                                <div class="red"><strong>기사제목</strong><span>&lt;00글자 이하&gt;</span></div>
                                                <div class="grn"><strong>편집기사</strong><span>&lt;00글자 이하&gt;</span></div>
                                            </div>
									    </div>
                                        <input type="hidden" id="layout5_top6_value" />
								    </div>
							    </div>
						    </div>

                            <div class="in_cont" id="layout6Content" style="display:none">
                                <div class="ar_cod_a" id="layout6_show_content">
								    <div class="codz_head2 clfix">
									    <div class="title" id="layout6_Newsname">잡월드신문</div>
									    <div class="cod_gnb">
										    <ul class="clfix">
											    <li id="layout6_sel1" class="on"><a onclick="onLayoutSel(6, 1)">정치/사회</a></li>
											    <li id="layout6_sel2"><a onclick="onLayoutSel(6, 2)">경제/국제</a></li>
											    <li id="layout6_sel3"><a onclick="onLayoutSel(6, 3)">문화/예술</a></li>
											    <li id="layout6_sel4"><a onclick="onLayoutSel(6, 4)">과학/기술</a></li>
										    </ul>
									    </div>
								    </div>
                                    <div class="mt7 pb5">
                                        <span class="fl f12 colblack" id="layout6_publish_date"></span>
                                        <span class="fr f12 colblack" id="layout6_author"></span></div>
								    <div class="codz_bod clfix">
									    <div class="tp1 clfix">
										    <div class="tx_ph clfix">
											    <div class="img"><img style="width:325px;height:244px;" id="layout6_top1_image" alt=""></div>
											    <div class="tx_r">
            										<input type="hidden" id="layout6_top1_title1" />
            										<h3 id="layout6_top1_title"></h3>
												    <p id="layout6_top1_content"></p>
                                                    <div class="footertxt" id="layout6_footer" style="display:none">
                                                        <p class="colblack align-r"><span id="layout6_top1_regdate"></span>  ㅣ  <span id="layout6_top1_author"></span></p>
                                                        <p class="colblack">잡월드신문  ALL RIGHT RESERVED BY JOBWORLD</p>
                                                    </div>
                                                    <input type="hidden" id="layout6_top1_summary" />
											    </div>
										    </div>
									    </div>
								    </div>
								    <div class="codz_bod mb10 clfix">
									    <div class="tp_bmt clfix">
										    <div class="tp2">
            									<h4 id="layout6_top2_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout6_top2_image" alt=""></p>
												    <p id="layout6_top2_content" class="fr"></p>
                                                    <input type="hidden" id="layout6_top2_summary" />
                                                    <input type="hidden" id="layout6_top2_regdate" />
                                                    <input type="hidden" id="layout6_top2_author" />
											    </div>
										    </div>
										    <div class="tp3 mt20">
            									<h4 id="layout6_top3_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout6_top3_image" alt=""></p>
												    <p class="fr" id="layout6_top3_content"></p>
                                                    <input type="hidden" id="layout6_top3_summary" />
                                                    <input type="hidden" id="layout6_top3_regdate" />
                                                    <input type="hidden" id="layout6_top3_author" />
											    </div>
										    </div>
										    <div class="tp4 mt20" id="layout6_top4_real">
                                                <h4 id="layout6_top4_title"></h4>
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout6_top4_image" alt=""></p>
											        <p class="fr" id="layout6_top4_content"></p>
										        </div>
										    </div>
										    <div class="tp5 mt20" id="layout6_top5_real">
                                                <h4 id="layout6_top5_title"></h4>
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout6_top5_image" alt=""></p>
											        <p class="fr" id="layout6_top5_content"></p>
										        </div>
										    </div>
										    <div class="tp6 mt20" id="layout6_top6_real">
                                                <h4 id="layout6_top6_title"></h4>
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout6_top6_image" alt=""></p>
											        <p class="fr" id="layout6_top6_content"></p>
										        </div>
										    </div>
									    </div>
                                        <div class="bn1">
										    <img id="layout6_bn1" style="width:209px;height:210px;" alt="" />
									    </div>
                                        <div class="news">
                                            <img src="../images/ic_news.png" />
                                            <div>
                                                <h5>많이 본 기사</h5>
                                                <ul id="layout6_news"></ul>
                                            </div>
									    </div>
                                        <div class="bn2">
										    <img src="../images/banner_500x500_01.png" alt="">
									    </div>
								    </div>
								    <div class="codz_btm">
									    <div class="bn"><img style="width:725px;height:434px;" id="layout6_bn" alt="" /></div>
								    </div>
								    <div class="codz_copy">
                                        <img src="../images/footer_logo.jpg">
									    ALL RIGHT BY RESERVED JOBWORLD<br />
                                        위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								    </div>
							    </div>
							    <div class="ar_layup ar_layo ar_layo_a" id="layout6_temp" style="display: block;">
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="top1" id="layout6_top1" ondblclick="showLayoutTop(6, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout6Top1" onclick="cancelLayout6Top1()" style="display:none"></p>
									    <div id="layout6_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout6_top1_value" />
								    </div>
								    <div class="top2" id="layout6_top2" ondblclick="showLayoutTop(6, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout6Top2" onclick="cancelLayout6Top2()" style="display:none"></p>
									    <div id="layout6_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout6_top2_value" />
								    </div>
								    <div class="top3" id="layout6_top3" ondblclick="showLayoutTop(6, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout6Top3" onclick="cancelLayout6Top3()" style="display:none"></p>
									    <div id="layout6_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout6_top3_value" />
								    </div>
								    <div class="tp_bm" id="layout6_tp_bm">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout6Bm" onclick="cancelLayout6Bm()" style="display:none"></p>
									    <div id="layout6_notice_tp">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 3단광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
                                    <div class="tp_bm tp_bm2" id="layout6_tp_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout6bn1" onclick="cancelLayout6Bn1()" style="display:none"></p>
									    <div id="layout6_notice_bn1">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 사각광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
							    </div>
						    </div>

                            <div class="in_cont" id="layout7Content" style="display:none">
                                <div class="ar_cod_b" id="layout7_show_content">
								    <div class="codz_head2 clfix">
									    <div id="layout7_Newsname" class="title">잡월드신문</div>
									    <div class="cod_gnb">
										    <ul class="clfix">
											    <li id="layout7_sel1" class="on"><a onclick="onLayoutSel(7, 1)">정치/사회</a></li>
											    <li id="layout7_sel2"><a onclick="onLayoutSel(7, 2)">경제/국제</a></li>
											    <li id="layout7_sel3"><a onclick="onLayoutSel(7, 3)">문화/예술</a></li>
											    <li id="layout7_sel4"><a onclick="onLayoutSel(7, 4)">과학/기술</a></li>
										    </ul>
									    </div>
								    </div>
                                    <div class="mt7 pb5"><span class="fl f12 colblack" id="layout7_publish_date"></span>
                                        <span class="fr f12 colblack" id="layout7_author"></span></div>
								    <div class="codz_bod clfix">
									    <div class="tp1 clfix">
										    <div class="tx_ph clfix">
											    <div class="img"><img style="width:325px;height:244px;" id="layout7_top1_image" alt=""></div>
											    <div class="tx_r">
            										<h3 id="layout7_top1_title"></h3>
            										<input type="hidden" id="layout7_top1_title1" />
                                                    <input type="hidden" id="layout7_top1_summary" />
												    <p id="layout7_top1_content"></p>
                                                    <div class="footertxt" id="layout7_footer" style="display:none">
                                                        <p class="colblack align-r"><span id="layout7_top1_regdate"></span>  ㅣ  <span id="layout7_top1_author"></span></p>
                                                        <p class="colblack">잡월드신문  ALL RIGHT RESERVED BY JOBWORLD</p>
                                                    </div>
											    </div>
										    </div>
									    </div>
								    </div>
								    <div class="codz_bod clfix">
									    <div class="tp_bmt clfix">
										    <div class="tp2 mb20">
            									<h4 id="layout7_top2_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout7_top2_image" alt=""></p>
												    <p class="fr" id="layout7_top2_content"></p>
                                                    <input type="hidden" id="layout7_top2_regdate" />
                                                    <input type="hidden" id="layout7_top2_author" />
                                                    <input type="hidden" id="layout7_top2_summary" />
											    </div>
										    </div>
										    <div class="tp3 mb20">
            									<h4 id="layout7_top3_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout7_top3_image" alt=""></p>
												    <p class="fr" id="layout7_top3_content"></p>
                                                    <input type="hidden" id="layout7_top3_regdate" />
                                                    <input type="hidden" id="layout7_top3_author" />
                                                    <input type="hidden" id="layout7_top3_summary" />
											    </div>
										    </div>
										    <div class="bn1 mb20"><img style="width:487px;height:227px;" id="layout7_bn1" alt=""></div>
										    <div class="tp4 mb20">
            									<h4 id="layout7_top4_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout7_top4_image" alt=""></p>
												    <p class="fr" id="layout7_top4_content"></p>
                                                    <input type="hidden" id="layout7_top4_summary" />
                                                    <input type="hidden" id="layout7_top4_regdate" />
                                                    <input type="hidden" id="layout7_top4_author" />
											    </div>
										    </div>
										    <div class="tp5 mb20" id="layout7_top5_real">
            							        <h4 id="layout7_top5_title"></h4>
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout7_top5_image" alt=""></p>
											        <p class="fr" id="layout7_top5_content"></p>
										        </div>
										    </div>
										    <div class="tp6" id="layout7_top6_real">
            							        <h4 id="layout7_top6_title"></h4>
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout7_top6_image" alt=""></p>
											        <p class="fr" id="layout7_top6_content"></p>
										        </div>
										    </div>
									    </div>
                                        <div class="news">
                                            <img src="../images/ic_news.png" />
                                            <div>
                                                <h5>많이 본 기사</h5>
                                                <ul id="layout7_news"></ul>
                                            </div>
									    </div>
									    <div class="bn2">
										    <img style="width:210px;height:210px;" id="layout7_bn2" alt="">
									    </div>
                                        <div class="bn2">
										    <img src="../images/banner_500x500_01.png" alt="">
									    </div>
                                        <div class="bn2">
										    <img src="../images/banner_500x500_04.png" alt="">
									    </div>
								    </div>
								    <div class="codz_copy">
                                        <img src="../images/footer_logo.jpg">
									    ALL RIGHT BY RESERVED JOBWORLD<br />
                                        위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								    </div>
							    </div>

							    <div class="ar_layup ar_layo ar_layo_b" id="layout7_temp" style="display:block;">
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="top1" id="layout7_top1" ondblclick="showLayoutTop(7, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Top1" onclick="cancelLayout7Top1()" style="display:none"></p>
									    <div id="layout7_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout7_top1_value" />
								    </div>
								    <div class="top2" id="layout7_top2" ondblclick="showLayoutTop(7, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Top2" onclick="cancelLayout7Top2()" style="display:none"></p>
									    <div id="layout7_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout7_top2_value" />
								    </div>
								    <div class="top3" id="layout7_top3" ondblclick="showLayoutTop(7, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Top3" onclick="cancelLayout7Top3()" style="display:none"></p>
									    <div id="layout7_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout7_top3_value" />
								    </div>
								    <div class="top4" id="layout7_top4" ondblclick="showLayoutTop(7, 4)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Top4" onclick="cancelLayout7Top4()" style="display:none"></p>
									    <div id="layout7_temp_top4">
										    <strong>TOP4</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout7_top4_value" />
								    </div>
								    <div class="tp_bm tp_bm1" id="layout7_tp_bm1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Bm1" onclick="cancelLayout7Bm1()" style="display:none"></p>
									    <div id="layout7_notice_tp1">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 배너광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="tp_bm tp_bm2" id="layout7_tp_bm2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout7Bm2" onclick="cancelLayout7Bm2()" style="display:none"></p>
									    <div id="layout7_notice_tp2">
										    <strong>광고</strong>
										    <p>좌측 날개에서 원하는 사각광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
							    </div>
						    </div>
                            <div class="in_cont" id="layout8Content" style="display:none">
                                <div class="ar_cod_c" id="layout8_show_content">
								    <div class="codz_head2 clfix">
									    <div class="title" id="layout8_Newsname">잡월드신문</div>
									    <div class="cod_gnb">
										    <ul class="clfix">
											    <li id="layout8_sel1" class="on"><a onclick="onLayoutSel(8, 1)">정치/사회</a></li>
											    <li id="layout8_sel2"><a onclick="onLayoutSel(8, 2)" >경제/국제</a></li>
											    <li id="layout8_sel3"><a onclick="onLayoutSel(8, 3)" >문화/예술</a></li>
											    <li id="layout8_sel4"><a onclick="onLayoutSel(8, 4)" >과학/기술</a></li>
										    </ul>
									    </div>
								    </div>

                                    <div class="mt7 pb5"><span class="fl f12 colblack" id="layout8_publish_date"></span>
                                        <span class="fr f12 colblack" id="layout8_author"></span></div>

								    <div class="codz_bod clfix">
									    <div class="ar_fl">
										    <div class="tp1 clfix">
            									<h3 id="layout8_top1_title"></h3>
            									<input type="hidden" id="layout8_top1_title1" />
											    <div class="tx_ph clfix">
												    <div class="img"><img style="width:429px;height:321px;" id="layout8_top1_image" alt=""></div>
                                                    <input type="hidden" id="layout8_top1_summary" />
												    <div class="tx_r" id="layout8_top1_content">
													    <p></p>
												    </div>
                                                    <div id="layout8_footer" class="footertxt" style="display:none">
                                                        <p class="colblack align-r"><span id="layout8_top1_regdate"></span>  ㅣ  <span id="layout8_top1_author"></span></p>
                                                        <p class="colblack">잡월드신문  ALL RIGHT RESERVED BY JOBWORLD</p>
                                                    </div>
											    </div>
										    </div>
										    <div class="tp2 mt10">
            									<h4 id="layout8_top2_title"></h4>
                                                    <input type="hidden" id="layout8_top2_summary" />
                                                    <input type="hidden" id="layout8_top2_regdate" />
                                                    <input type="hidden" id="layout8_top2_author" />
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout8_top2_image" alt=""></p>
												    <p class="fr" id="layout8_top2_content"></p>
											    </div>
										    </div>
										    <div class="tp3 mt10">
            									<h4 id="layout8_top3_title"></h4>
                                                    <input type="hidden" id="layout8_top3_summary" />
                                                    <input type="hidden" id="layout8_top3_regdate" />
                                                    <input type="hidden" id="layout8_top3_author" />
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout8_top3_image" alt=""></p>
												    <p class="fr" id="layout8_top3_content"></p>
											    </div>
										    </div>
										    <div class="tp4 mt10">
            									<h4 id="layout8_top4_title"></h4>
                                                    <input type="hidden" id="layout8_top4_summary" />
                                                    <input type="hidden" id="layout8_top4_regdate" />
                                                    <input type="hidden" id="layout8_top4_author" />
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout8_top4_image" alt=""></p>
												    <p class="fr" id="layout8_top4_content"></p>
											    </div>
										    </div>
										    <div class="tp5 mt10">
                                                    <input type="hidden" id="layout8_top5_summary" />
                                                    <input type="hidden" id="layout8_top5_regdate" />
                                                    <input type="hidden" id="layout8_top5_author" />
            									<h4 id="layout8_top5_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:141px;height:106px;" id="layout8_top5_image" alt=""></p>
												    <p class="fr" id="layout8_top5_content"></p>
											    </div>
										    </div>
										    <div class="tp6 mt10" id="layout8_top6_real">
            							        <h4 id="layout8_top6_title"></h4>
                                                    <input type="hidden" id="layout8_top6_summary" />
										        <div class="ovr">
											        <p class="fl"><img style="width:141px;height:106px;" id="layout8_top6_image" alt=""></p>
											        <p class="fr" id="layout8_top6_content"></p>
										        </div>
										    </div>
									    </div>
									    <div class="ar_fr">
										    <div class="bn1 mb20">
											    <img style="width:232px;height:232px;" id="layout8_bn11" alt="">
										    </div>
                                            <div class="news">
                                                <img src="../images/ic_news.png" />
                                                <div>
                                                    <h5>많이 본 기사</h5>
                                                    <ul id="layout8_news"></ul>
                                                </div>
									        </div>
										    <div class="bn2"><img style="width:232px;height:98px;" id="layout8_bn12" alt=""></div>										
                                            <div class="bn2"><img src="../images/banner_284.png" alt=""></div>
                                            <div class="bn2"><img src="../images/banner_309.png" alt=""></div>
									    </div>
								    </div>
								    <div class="codz_copy">
                                        <img src="../images/footer_logo.jpg">
									    ALL RIGHT BY RESERVED JOBWORLD<br />
                                        위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								    </div>
							    </div>

							    <div class="ar_layup ar_layo ar_layo_c" id="layout8_temp" style="display:block">
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="top1" id="layout8_top1" ondblclick="showLayoutTop(8, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Top1" onclick="cancelLayout8Top1()" style="display:none"></p>
									    <div id="layout8_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout8_top1_value" />
								    </div>
								    <div class="top2" id="layout8_top2" ondblclick="showLayoutTop(8, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Top2" onclick="cancelLayout8Top2()" style="display:none"></p>
									    <div id="layout8_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout8_top2_value" />
								    </div>
								    <div class="top3" id="layout8_top3" ondblclick="showLayoutTop(8, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Top3" onclick="cancelLayout8Top3()" style="display:none"></p>
									    <div id="layout8_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout8_top3_value" />
								    </div>
								    <div class="top4" id="layout8_top4" ondblclick="showLayoutTop(8, 4)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Top4" onclick="cancelLayout8Top4()" style="display:none"></p>
									    <div id="layout8_temp_top4">
										    <strong>TOP4</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout8_top4_value" />
								    </div>
								    <div class="top5" id="layout8_top5" ondblclick="showLayoutTop(8, 5)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Top5" onclick="cancelLayout8Top5()" style="display:none"></p>
									    <div id="layout8_temp_top5">
										    <strong>TOP5</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout8_top5_value" />
								    </div>
								    <div class="tp_bm tp_bm1" id="layout8_tp_bm1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Bm1" onclick="cancelLayout8Bm1()" style="display:none"></p>
									    <div id="layout8_notice_tp1">
										    <strong>광고</strong>
                                            <p>좌측 날개에서 원하는 사각광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="bn1" id="layout8_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout8Bm2" onclick="cancelLayout8Bm2()" style="display:none"></p>
									    <div id="layout8_notice_tp2">
										    <strong>배너광고</strong>
										    <p>좌측 날개에서 원하는 배너광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
							    </div>
						    </div>

                            <div class="in_cont" id="layout9Content" style="display:none">
                                <div class="ar_cod_d" id="layout9_show_content">
								    <div class="codz_head2 clfix">
									    <div class="title" id="layout9_Newsname">잡월드신문</div>
									    <div class="cod_gnb">
										    <ul class="clfix">
											    <li id="layout9_sel1" class="on"><a onclick="onLayoutSel(9, 1)"">정치/사회</a></li>
											    <li id="layout9_sel2"><a onclick="onLayoutSel(9, 2)">경제/국제</a></li>
											    <li id="layout9_sel3"><a onclick="onLayoutSel(9, 3)">문화/예술</a></li>
											    <li id="layout9_sel4"><a onclick="onLayoutSel(9, 4)">과학/기술</a></li>
										    </ul>
									    </div>
								    </div>

                                    <div class="mt7 pb5">
                                        <span class="fl f12 colblack" id="layout9_publish_date"></span>
                                        <span class="fr f12 colblack" id="layout9_author"></span></div>
								    <div class="codz_bod clfix">
									    <div class="tp1 clfix">
										    <div class="tx_ph clfix">
											    <div class="img"><img style="width:325px;height:244px;" id="layout9_top1_image" alt=""></div>
                                                    <input type="hidden" id="layout9_top1_summary" />
											    <div class="tx_r">
            										<h3 id="layout9_top1_title"></h3>
            										<input type="hidden" id="layout9_top1_title1" />
												    <p id="layout9_top1_content"></p>
                                                    <div id="layout9_footer" class="footertxt" style="display:none">
                                                        <p class="colblack align-r"><span id="layout9_top1_regdate"></span>  ㅣ  <span id="layout9_top1_author"></span></p>
                                                        <p class="colblack">잡월드신문  ALL RIGHT RESERVED BY JOBWORLD</p>
                                                    </div>
											    </div>
										    </div>
									    </div>
									    <div class="tp2 mt20">
                                            <input type="hidden" id="layout9_top2_summary" />
                                            <input type="hidden" id="layout9_top2_regdate" />
                                            <input type="hidden" id="layout9_top2_author" />
										    <div class="ovr">
											    <p class="fl"><img style="width:210px;height:120px;" id="layout9_top2_image" alt=""></p>
                                                <div class="fr_wrap">
                								    <h4 class="fr" id="layout9_top2_title"></h4>
											        <p class="fr" id="layout9_top2_content"></p>
                                                </div>
										    </div>
									    </div>
									    <div class="tp_bmt clfix">
                                            <div>
										        <div class="bn1"><img style="width:313px;height:132px;" id="layout9_bn1_image" alt=""></div>
										        <div class="bn2">
											        <img style="width:313px;height:133px;" id="layout9_bn2_image" alt="">
										        </div>
                                            </div>
									    </div>
								    </div>
								    <div class="codz_bod clfix">
									    <div class="ar_fl">
										    <div class="tp3 mb20">
                                                    <input type="hidden" id="layout9_top3_summary" />
                                                    <input type="hidden" id="layout9_top3_regdate" />
                                                    <input type="hidden" id="layout9_top3_author" />
            									<h4 id="layout9_top3_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:146px;height:109px;" id="layout9_top3_image" alt=""></p>
												    <p class="fr" id="layout9_top3_content"></p>
											    </div>
										    </div>
										    <div class="tp4 mb20">
            									<h4 id="layout9_top4_title"></h4>
                                                    <input type="hidden" id="layout9_top4_summary" />
                                                    <input type="hidden" id="layout9_top4_regdate" />
                                                    <input type="hidden" id="layout9_top4_author" />
											    <div class="ovr">
												    <p class="fl"><img style="width:146px;height:109px;" id="layout9_top4_image" alt=""></p>
												    <p class="fr" id="layout9_top4_content"></p>
											    </div>
										    </div>
										    <div class="tp5 mb20">
            									<h4 id="layout9_top5_title"></h4>
                                                    <input type="hidden" id="layout9_top5_summary" />
                                                    <input type="hidden" id="layout9_top5_regdate" />
                                                    <input type="hidden" id="layout9_top5_author" />
											    <div class="ovr">
												    <p class="fl"><img style="width:146px;height:109px;" id="layout9_top5_image" alt=""></p>
												    <p class="fr" id="layout9_top5_content"></p>
											    </div>
										    </div>
										    <div class="tp6 mb20">
                                                    <input type="hidden" id="layout9_top6_summary" />
                                                    <input type="hidden" id="layout9_top6_regdate" />
                                                    <input type="hidden" id="layout9_top6_author" />
            									<h4 id="layout9_top6_title"></h4>
											    <div class="ovr">
												    <p class="fl"><img style="width:146px;height:109px;" id="layout9_top6_image" alt=""></p>
												    <p class="fr" id="layout9_top6_content"></p>
											    </div>
										    </div>
									    </div>
									    <div class="bn3">
										    <img style="width:218px;height:216px;" id="layout9_bn3" alt="">
									    </div>
                                        <div class="news">
                                            <img src="../images/ic_news.png" />
                                            <div>
                                                <h5>많이 본 기사</h5>
                                                <ul id="layout9_news"></ul>
                                            </div>
									    </div>
								    </div>
								    <div class="codz_copy">
                                        <img src="../images/footer_logo.jpg">
									    ALL RIGHT BY RESERVED JOBWORLD<br />
                                        위 신문기사 내용은 체험을 위해 가공된 기사로 실제 사실과 다를 수 있습니다.
								    </div>
							    </div>

							    <div class="ar_layup ar_layo ar_layo_d" id="layout9_temp" style="display:block">
								    <div class="tp_cn">
                                        <a onclick="onEditNewsname()">
                                            <img src="../images/ic_la1.gif" alt=""></a>
								    </div>
								    <div class="top1" id="layout9_top1" ondblclick="showLayoutTop(9, 1)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top1" onclick="cancelLayout9Top1()" style="display:none"></p>
									    <div id="layout9_temp_top1">
										    <strong>TOP1</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top1_value" />
								    </div>
								    <div class="top2" id="layout9_top2" ondblclick="showLayoutTop(9, 2)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top2" onclick="cancelLayout9Top2()" style="display:none"></p>
									    <div id="layout9_temp_top2">
										    <strong>TOP2</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top2_value" />
								    </div>
								    <div class="top3" id="layout9_top3" ondblclick="showLayoutTop(9, 3)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top3" onclick="cancelLayout9Top3()" style="display:none"></p>
									    <div id="layout9_temp_top3">
										    <strong>TOP3</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top3_value" />
								    </div>
								    <div class="top4" id="layout9_top4" ondblclick="showLayoutTop(9, 4)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top4" onclick="cancelLayout9Top4()" style="display:none"></p>
									    <div id="layout9_temp_top4">
										    <strong>TOP4</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top4_value" />
								    </div>
								    <div class="top5 mb20" id="layout9_top5" ondblclick="showLayoutTop(9, 5)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top5" onclick="cancelLayout9Top5()" style="display:none"></p>
									    <div id="layout9_temp_top5">
										    <strong>TOP5</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top5_value" />
								    </div>
								    <div class="top6 mb20" id="layout9_top6" ondblclick="showLayoutTop(9, 6)">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Top6" onclick="cancelLayout9Top6()" style="display:none"></p>
									    <div id="layout9_temp_top6">
										    <strong>TOP6</strong>
										    <p>좌측 날개에서 원하는 기사를 이 위치에 끌어 놓아 주세요</p>
									    </div>
                                        <input type="hidden" id="layout9_top6_value" />
								    </div>
								    <div class="tp_bm" id="layout9_tp_bm">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Bm" onclick="cancelLayout9Bm()" style="display:none"></p>
									    <div id="layout9_notice_tp1">
										    <strong>광고</strong>
                                            <p>좌측 날개에서 원하는 사각광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="bn1" id="layout9_bn1">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Bn1" onclick="cancelLayout9Bn1()" style="display:none"></p>
									    <div id="layout9_notice_tp2">
										    <strong>배너광고</strong>
										    <p>좌측 날개에서 원하는 배너광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
								    <div class="bn2" id="layout9_bn2">
                                        <p class="close_btn"><img src="../images/close_btn.png" alt="" id="imgLayout9Bn2" onclick="cancelLayout9Bn2()" style="display:none"></p>
									    <div id="layout9_notice_tp3">
										    <strong>배너광고</strong>
										    <p>좌측 날개에서 원하는 배너광고를 이 위치에 끌어 놓아 주세요</p>
									    </div>
								    </div>
							    </div>
						    </div>
                        </div>
				    </section>
			    </div>

			    <div class="box_lay" id="layout_select">
				    <strong class="tit">레이아웃 선택</strong>
				    <div class="list_lay">
					    <ul id="ul_layout1">
						    <li class="on" id="li_layout1">
							    <div>
                                    <a onclick="onLayout(1)">
                                        <img style="width:147px;height:185px;" src="../images/3type.png" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
<!--
						    <li id="li_layout2">
							    <div>
                                    <a onclick="onLayout(2)">
                                        <img style="width:147px;height:185px;" src="../images/4-1type.png" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>

						    <li id="li_layout3">
							    <div>
                                    <a onclick="onLayout(3)">
                                        <img style="width:147px;height:185px;" src="../images/4-2type.png" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
-->
						    <li id="li_layout4">
							    <div>
                                    <a onclick="onLayout(4)">
                                        <img style="width:147px;height:185px;" src="../images/4-3type.png" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
						    <li id="li_layout5">
							    <div>
                                    <a onclick="onLayout(5)">
                                        <img style="width:147px;height:185px;" src="../images/6type.png" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
					    </ul>
					    <ul id="ul_layout2">
						    <li class="on" id="li_layout6">
							    <div>
                                    <a onclick="onLayout(6)">
                                        <img style="width:147px;height:185px;" src="../images/Atype.gif" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
						    <li id="li_layout7">
							    <div>
                                    <a onclick="onLayout(7)">
                                        <img style="width:147px;height:185px;" src="../images/Btype.gif" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
						    <li id="li_layout8">
							    <div>
                                    <a onclick="onLayout(8)">
                                        <img style="width:147px;height:185px;" src="../images/Ctype.gif" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
						    <li id="li_layout9">
							    <div>
                                    <a onclick="onLayout(9)">
                                        <img style="width:147px;height:185px;" src="../images/Dtype.gif" alt="">
                                    </a>
                                 </div>
							    <span class="icpos"><img src="../images/ic_arrr.png" alt=""></span>
						    </li>
					    </ul>
				    </div>
			    </div>
            </div>
        </div>
        <div class="box_btvbtm">
	        <div class="btn_nor disib mr5"><a onclick="onTempSave()">임시저장</a></div>
	        <div class="btn_nor disib"><a onclick="onSave()">완료</a></div>
    </div>

    <div class="wrap_layerpop" id="popupForm" style="display:none">
        <div class="layerpop pop1" id="saveFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>편집완료 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">현재 편집상태를 저장하고 편집을 완료합니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="saveArticle()">확인</a></span>
					    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="layoutFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>배치기사 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">이미 배치된 기사입니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="layoutFormpopup1" style="display:none">
		    <div class="box_titpop">
			    <h2>배치기사 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">배치된 기사는 '내 선택기사'에서<br />삭제할수 없습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="layoutFormpopup2" style="display:none">
		    <div class="box_titpop">
			    <h2>레이아웃 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">이미 기사가 배치된 레이아웃이 있습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="saveFormpopup1" style="display:none">
		    <div class="box_titpop">
			    <h2>저장 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">성공적으로 저장되었습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="saveFormpopup2" style="display:none">
		    <div class="box_titpop">
			    <h2>저장 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">저장에 실패하였습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="saveFormpopup3" style="display:none">
		    <div class="box_titpop">
			    <h2>저장 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">저장시 알지 못할 오류가 발생하였습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="saveFormpopup4" style="display:none">
		    <div class="box_titpop">
			    <h2>임시저장 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">성공적으로 임시저장되었습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="completeFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>완료 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">모든 칸을 다 채워야 완료할수 있습니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="loginNameErrorFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>이름 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">이름을 입력하십시오.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="loginNewsNameErrorFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>신문사명 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">신문사명을 입력하십시오.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="loginNewsNameErrorFormpopup1" style="display:none">
		    <div class="box_titpop">
			    <h2>신문사명 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">신문사명은 최대 6자여야 합니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="emailErrorFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>이메일 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">이메일을 입력하십시오.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="emailErrorFormpopup1" style="display:none">
		    <div class="box_titpop">
			    <h2>이메일 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">이메일형식이 아닙니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="onClosePopup()">확인</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop1" id="tempsaveFormpopup" style="display:none">
		    <div class="box_titpop">
			    <h2>임시저장 확인</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="box_in">
				    <p class="tx_t1">현재 편집상태를 임시저장합니다.</p>
				    <div class="btn_polst">
					    <span class="btn_askk mr5"><a onclick="tempsaveArticle()">확인</a></span>
					    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
				    </div>
			    </div>
		    </div>
	    </div>

	    <div class="layerpop pop2" id="editNewsnameForm" style="display:none">
		    <div class="box_titpop">
			    <h2>신문사명 편집</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="board_write">
				    <table>
					    <colgroup>
						    <col style="width: 15%;">
						    <col style="width: 35%;">
						    <col style="width: 15%;">
						    <col style="width: 35%;">
					    </colgroup>
					    <tbody>
						    <tr>
							    <th scope="row">신문사명</th>
							    <td colspan="3"><input id="edit_Newsname" maxlength="6" type="text"></td>
						    </tr>
						    <tr>
							    <th scope="row">폰트</th>
							    <td>
								    <select id="edit_Newsname_font">
									    <option>굴림</option>
									    <option>돋움</option>
									    <option>궁서</option>
									    <option>바탕</option>
									    <option>명조</option>
								    </select>
							    </td>
							    <th scope="row">크기</th>
							    <td>
								    <select id="edit_Newsname_size">
									    <option>32pt</option>
								    </select>
							    </td>
						    </tr>
					    </tbody>
				    </table>
			    </div>
			    <div class="btn_polst mt20 mb20">
				    <span class="btn_askk mr5"><a onclick="editNewname()">확인</a></span>
				    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop3" id="editSeletedArticlepopup" style="display:none">
		    <div class="box_titpop">
			    <h2>배치기사 편집</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="board_write">
				    <table>
					    <colgroup>
						    <col style="width: 15%;">
						    <col style="width: 85%;">
					    </colgroup>
					    <tbody>
						    <tr>
							    <th scope="row">제목</th>
							    <td><input id="selectedArticleTitle" type="text"></td>
						    </tr>
						    <tr>
							    <th scope="row">상세기사/th>
							    <td>
								    <textarea id="selectedArticleContent" class="txtar1"></textarea>
							    </td>
						    </tr>
						    <tr>
							    <th scope="row">편집기사</th>
							    <td>
								    <textarea id="selectedArticleSummary" class="txtar2"></textarea>
							    </td>
						    </tr>
					    </tbody>
				    </table>
			    </div>
			    <div class="btn_polst mt20 mb20">
				    <span class="btn_askk mr5"><a onclick="onEditSelectedArticle()">확인</a></span>
				    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop4" id="show_preview_popup">
		    <div class="box_titpop">
                <h2>미리보기</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="clfix">
                 <section class="ar_inbox">
                    <div class="cont_srf" id="preview_popup_result" style="overflow-y: auto;height:931px;background-color:#fff;">
                    </div>
                 </section>
		    </div>
	    </div>

        <div class="layerpop pop4" id="article_showDetail" style="display:none">
		    <div class="box_contpop">
                <div class="pop_result">
				    <div class="title_wrap">
        				<h3 id="articleDetailTitle"></h3>
					    <div class="close_btn02" onclick="onClosePopup();"><img src="../images/btn_close02.png" alt=""></div>
				    </div>
				    <div id="author">
				    </div>
				    <div id="regdate">
				    </div>
				    <p class="line"></p>
				    <p class="align-c"><img id="articleDetailImage" style="width:484px;height:363px;" alt=""></p>
				    <div class="ar_txt" id="articleDetailText">
				    </div>
			    </div>

			    <div class="btn_polst mt20 mb20">
				    <span class="btn_askk mr5"><a onclick="ongotoMyarticle()">내 선택기사</a></span>
				    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop3" id="article_showDetail1">
            <div class="box_titpop">
			    <h2>배치기사 편집</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="board_write">
				    <table>
					    <colgroup>
						    <col style="width: 15%;">
						    <col style="width: 85%;">
					    </colgroup>
					    <tbody>
						    <tr>
							    <th scope="row">제목
							    </th>
							    <td><input id="articleDetailTitle1" type="text"></td>
						    </tr>
						    <tr>
							    <th scope="row">상세기사
							    </th>
							    <td>
								    <textarea id="articleDetailText1" class="txtar1"></textarea>
							    </td>
						    </tr>
						    <tr>
							    <th scope="row">편집기사
							    </th>
							    <td>
								    <textarea id="articleDetailSummary1" class="txtar2"></textarea>
							    </td>
						    </tr>
					    </tbody>
				    </table>
			    </div>
			    <div class="btn_polst mt20 mb20">
				    <span class="btn_askk mr5"><a onclick="onChangeValues()">확인</a></span>
				    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
			    </div>
		    </div>
	    </div>

        <div class="layerpop pop5" id="article_showDetail2">
		    <div class="box_titpop">
			    <h2>배치기사 편집</h2>
			    <div class="btn_close"><button type="button">닫기</button></div>
		    </div>
		    <div class="box_contpop">
			    <div class="ar_col2pop clfix">
				    <div class="fl">
					    <div class="board_write">
						    <table>
							    <colgroup>
								    <col style="width: 15%;">
								    <col style="width: 85%;">
							    </colgroup>
							    <tbody>
								    <tr>
									    <th scope="row">제목<br />
                                            <span id="title_letters"></span>
									    </th>
									    <td><input type="text" id="articleDetailTitle2"></td>
								    </tr>
								    <tr>
									    <th scope="row">상세기사<br />
                                            <span id="content_letters"></span>
									    </th>
									    <td>
										    <textarea class="txtar1" id="articleDetailText2"></textarea>
									    </td>
								    </tr>
								    <tr>
									    <th scope="row">편집기사<br />
                                            <span id="summary_letters"></span>
									    </th>
									    <td>
										    <textarea class="txtar2" id="articleDetailSummary2"></textarea>
									    </td>
								    </tr>
							    </tbody>
						    </table>
					    </div>
					    <div class="btn_polst mt20 mb20">
						    <span class="btn_askk mr5"><a onclick="onChangeValues()">확인</a></span>
						    <span class="btn_askk"><a onclick="onClosePopup()">취소</a></span>
					    </div>
				    </div>
				    <div class="fr">
					    <div class="tx_num_wrap"><strong class="tit_nw">기사편집기</strong><div class="tx_num_wrap_in"><div class="tx_num" id="test_letters">00 </div><div>자</div></div></div>
					    <div class="ar_txtar">
						    <textarea name="" id="testTxt"></textarea>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>

    </div>
</asp:Content>
