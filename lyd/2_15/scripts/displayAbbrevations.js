/**
 * Created by liyadan01_bj on 2016/4/27.
 */
function displayAbbrevations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    //取得所有缩略词
    var abbrreviations=document.getElementsByTagName("abbr");
    if(abbrreviations.length<1) return false;
    //遍历这些缩略词
    var defs=new Array();
    for(var i=0; i<abbrreviations.length;i++){
        var current_abbr=abbrreviations[i];
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
    }
    //创建定义列表
    var dlist=document.createElement("dl");
    //遍历定义
    for(key in defs){
        var definition=defs[key];
        //创建定义标题
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //创建标题
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbrevations");
    header.appendChild(header_text);

    var body=document.getElementsByTagName("body")[0];
    //把标题添加到页面主体
    body.appendChild(header);
    //把定义列表添加到页面主体
    body.appendChild(dlist);
};
function displayAbbrevations2(){
    var abbrreviations=document.getElementsByTagName("abbr");
    if(abbrreviations.length<1) return false;
    var dlist=document.createElement("dl");
    for(var i=0; i<abbrreviations.length; i++){
        var current_abbr=abbrreviations[i];
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        var dtitle=document.createElement("dt");
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc=document.createElement("dd");
        var ddesc_text=document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Abbrevations");
    header.appendChild(header_text);

    var body=document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(dlist);
}


addLoadEvent(displayAbbrevations);