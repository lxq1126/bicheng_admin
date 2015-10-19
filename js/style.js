

$(function(){
    //home事件
    

     $(".head .menu .home").click(function(){
         $(this).addClass("li-bg").siblings(".onmouse").removeClass("li-bg");//首页添加样式，清除兄弟元素样式
         $(".head .menu .onmouse").find(".child").slideUp();//隐藏兄弟元素的子菜单
     })

     // 鼠标移入显示隐藏子菜单
     $(".head .menu .onmouse").mouseover(function(){


         $(".head .menu .home").removeClass("li-bg");//清除首页样式
         $(this).addClass("li-bg").siblings(".onmouse").removeClass("li-bg");//清除兄弟元素样式
         $(this).find(".child").slideDown();//显示隐藏的子菜单
         $(this).siblings(".onmouse").find(".child").slideUp();//隐藏兄弟元素的子菜单
     }).mouseout(function(){
         
          $(this).siblings(".onmouse").find("li").removeClass("child-bg");//清除子菜单样式
          $(this).siblings(".onmouse").find(".sanjiao").empty();//清除子菜单三角形
     })

     // 三角箭头
      
     $(".cur .child li").click(function(){

            $(this).addClass("child-bg").siblings().removeClass("child-bg");
            $(this).siblings("li").find(".sanjiao").empty();
            var sanjiao = "<i class=\"iconfont sanjiao\">&#xe600;</i>";
            $(this).find(".iconfont").after(sanjiao);
     })
     
     $(".menu-child .child li").click(function(){
         $(this).find(".iconfont").addClass("icon-show");
         $(this).siblings("li").find(".iconfont").removeClass("icon-show");
          
     })

     //适应屏幕高度
     $(function(){
         $(window).resize(function(){
             $(".mainFrame").stop(true,false).animate({
                 height:$(document).height()-80
             },1)
             
         });   
         $(window).resize();
     });
      
    // 表格最后一行对齐
    var checkboxWidth =  $(".table-list tr th:nth-child(2)").width();//获得第二格的宽度
    var lastCheck = checkboxWidth*0.2;

    $(".table-list tr:last td:nth-child(2)").css({"text-align":"left","padding-left":lastCheck+"px"});
     // $(".table-list tr:last td").css({"border":"0","height":"50px"});

    // 弹出层
    $(".layer-table tr th").css({"text-align":"right","width":"20%","padding-right":"3.5%"});
    $(".layer-table tr td").css({"text-align":"left","width":"75%"});
    $(".layer-table tr:last td").css({"text-align":"center","height":"80px"});

     $(".wenbenlast tr:last td:nth-child(2)").css({"text-align":"left"});

    // 表格编辑  
   $(".edit-a:nth-child(1)").css({"color":"#3498DB"});
   $(".edit-a:nth-child(2)").css({"color":"#00A388"});
   $(".edit-a:nth-child(3)").css({"color":"#E74C3C"});
    


    $('.add-ad').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '315px'],
            title:['+添加属性'],
            content:'add_ad.html'
        });
    });
    $('.add-pay').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '505px'],
            title:['+添加属性'],
            content:'add_pay.html'
        });
    }); 
    $('.add-business').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '535px'],
            title:['+ 添加商家'],
            content:'add_business.html'
        });
    });
    $('.add-shop-mould').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '270px'],
            title:['+ 添加模板'],
            content:'add_shop_mould.html'
        });
    });
    $('.add-user').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '720px'],
            title:['+ 添加用户'],
            content:'add_user_list.html'
        });
    });
    $('.add-weixin').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '430px'],
            title:['+ 添加公众号'],
            content:'add_weixin.html'
        });
    });
    $('.weixin-send ').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '210px'],
            title:['+ 关注时回复'],
            content:'weixin_send.html'
        });
    });
    $('.add-weixin-ml ').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '490px'],
            title:['+ 添加信息分类'],
            content:'add_weixin_ml.html'
        });
    });
    $('.add-tuwen').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '620px'],
            title:['+ 添加图文'],
            content:'add_tuwen.html'
        });
    });
    $('.add-wenben').on('click', function(){
        layer.open({
            type: 2,
            shadeClose:true,
            skin: 'layui-layer-rim', //加上边框
            area: ['850px', '440px'],
            title:['+ 添加图文'],
            content:'add_wenben.html'
        });
    });



    // 下拉选择菜单
    var selects=$('select');//获取select

    for(var i=0;i<selects.length;i++){
        createSelect(selects[i],i);
    }

    function createSelect(select_container,index){

        //创建select容器，class为select_box，插入到select标签前
        var tag_select=$('<div></div>');//div相当于select标签
        tag_select.attr('class','select_box');
        tag_select.insertBefore(select_container);

        //显示框class为select_showbox,插入到创建的tag_select中
        var select_showbox=$('<div></div>');//显示框
        select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);

        //创建option容器，class为select_option，插入到创建的tag_select中
        var ul_option=$('<ul></ul>');//创建option列表
        ul_option.attr('class','select_option');
        ul_option.appendTo(tag_select);
        createOptions(index,ul_option);//创建option

        //点击显示框
        tag_select.toggle(function(){
            ul_option.show();
        },function(){
            ul_option.hide();
        });

        var li_option=ul_option.find('li');
        li_option.on('click',function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            var value=$(this).text();
            select_showbox.text(value);
            ul_option.hide();
        });

        li_option.hover(function(){
            $(this).addClass('hover').siblings().removeClass('hover');  
        },function(){
            li_option.removeClass('hover');
        });

    }

    function createOptions(index,ul_list){
        //获取被选中的元素并将其值赋值到显示框中
        var options=selects.eq(index).find('option'),
            selected_option=options.filter(':selected'),
            selected_index=selected_option.index(),
            showbox=ul_list.prev();
            showbox.text(selected_option.text());
        
        //为每个option建立个li并赋值
        for(var n=0;n<options.length;n++){
            var tag_option=$('<li></li>'),//li相当于option
                txt_option=options.eq(n).text();
            tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);

            //为被选中的元素添加class为selected
            if(n==selected_index){
                tag_option.attr('class','selected');
            }
        }
    }
    // thispage 
     // JavaScript Document
    $(function(){
        //根据总页数判断，如果小于5页，则显示所有页数，如果大于5页，则显示5页。根据当前点击的页数生成
        
        var pageCount = 11;//模拟后台总页数
        //生成分页按钮
        if(pageCount>5){
            page_icon(1,5,0);
        }else{
            page_icon(1,pageCount,0);
        }
        
        //点击分页按钮触发
        $("#pageGro li").live("click",function(){
            if(pageCount > 5){
                var pageNum = parseInt($(this).html());//获取当前页数
                pageGroup(pageNum,pageCount);
            }else{
                $(this).addClass("on");
                $(this).siblings("li").removeClass("on");
            }
        });
        
        //点击上一页触发
        $("#pageGro .pageUp").click(function(){
            if(pageCount > 5){
                var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
                pageUp(pageNum,pageCount);
            }else{
                var index = $("#pageGro ul li.on").index();//获取当前页
                if(index > 0){
                    $("#pageGro li").removeClass("on");//清除所有选中
                    $("#pageGro ul li").eq(index-1).addClass("on");//选中上一页
                }
            }
        });
        
        //点击下一页触发
        $("#pageGro .pageDown").click(function(){
            if(pageCount > 5){
                var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
                pageDown(pageNum,pageCount);
            }else{
                var index = $("#pageGro ul li.on").index();//获取当前页
                if(index+1 < pageCount){
                    $("#pageGro li").removeClass("on");//清除所有选中
                    $("#pageGro ul li").eq(index+1).addClass("on");//选中上一页
                }
            }
        });
    });

    //点击跳转页面
    function pageGroup(pageNum,pageCount){
        switch(pageNum){
            case 1:
                page_icon(1,5,0);
            break;
            case 2:
                page_icon(1,5,1);
            break;
            case pageCount-1:
                page_icon(pageCount-4,pageCount,3);
            break;
            case pageCount:
                page_icon(pageCount-4,pageCount,4);
            break;
            default:
                page_icon(pageNum-2,pageNum+2,2);
            break;
        }
    }

    //根据当前选中页生成页面点击按钮
    function page_icon(page,count,eq){
        var ul_html = "";
        for(var i=page; i<=count; i++){
            ul_html += "<li>"+i+"</li>";
        }
        $("#pageGro ul").html(ul_html);
        $("#pageGro ul li").eq(eq).addClass("on");
    }

    //上一页
    function pageUp(pageNum,pageCount){
        switch(pageNum){
            case 1:
            break;
            case 2:
                page_icon(1,5,0);
            break;
            case pageCount-1:
                page_icon(pageCount-4,pageCount,2);
            break;
            case pageCount:
                page_icon(pageCount-4,pageCount,3);
            break;
            default:
                page_icon(pageNum-2,pageNum+2,1);
            break;
        }
    }

    //下一页
    function pageDown(pageNum,pageCount){
        switch(pageNum){
            case 1:
                page_icon(1,5,1);
            break;
            case 2:
                page_icon(1,5,2);
            break;
            case pageCount-1:
                page_icon(pageCount-4,pageCount,4);
            break;
            case pageCount:
            break;
            default:
                page_icon(pageNum-2,pageNum+2,3);
            break;
        }
    }
})