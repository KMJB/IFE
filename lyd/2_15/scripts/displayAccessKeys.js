/**
 * Created by liyadan01_bj on 2016/5/3.
 */
function displayAccessKeys(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)  return false;
    //取得所有文档的连接
    var links=document.getElementsByTagName("a");
    var list=document.createElement("ul");
    //遍历连接
    for(var i=0; i<links.length;i++){
        var current_link=links[i];
        if(!current_link.getAttribute("accesskey")) continue;
        var key=current_link.getAttribute("accesskey");
        var text=current_link.lastChild.nodeValue;
        var item=document.createElement("li");
        var item_text=document.createTextNode(key+":"+text);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h2");
    var hearder_text=document.createTextNode("AccessKeys");
    header.appendChild(hearder_text);
    var body=document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(list);
}
addLoadEvent(displayAccessKeys);