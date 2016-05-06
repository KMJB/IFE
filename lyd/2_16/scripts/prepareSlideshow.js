/**
 * Created by liyadan01_bj on 2016/5/4.
 */
function prepareSlideshow(){
    //确保浏览器支持DOM方法
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    //确保元素存在
    if(!document.getElementsByTagName("linklist")) return false;
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview=document.createElement("img");
    preview.setAttribute("src","../../source/topics.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list=document.getElementById("linklist");
    insertAfter(slideshow,list);
    //为图片设置样式
    preview.style.position="absolute";
    preview.style.left="-34px";
    preview.style.top="-74px";
    //获得列表中的所有连接
    var links=list.getElementsByTagName("a");
    //为mouseover添加动画效果
    links[0].onmouseover=function(){
        moveElement("preview",-34,-174,10);
    };
    links[1].onmouseover=function(){
        moveElement("preview",-34,-274,10);
    };
    links[2].onmouseover=function(){
        moveElement("preview",-34,-374,10);
    }
}
addLoadEvent(prepareSlideshow);
