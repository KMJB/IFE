/**
 * Created by liyadan01_bj on 2016/5/4.
 */
function prepareSlideshow(){
    //ȷ�������֧��DOM����
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    //ȷ��Ԫ�ش���
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
    //ΪͼƬ������ʽ
    preview.style.position="absolute";
    preview.style.left="-34px";
    preview.style.top="-74px";
    //����б��е���������
    var links=list.getElementsByTagName("a");
    //Ϊmouseover��Ӷ���Ч��
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
