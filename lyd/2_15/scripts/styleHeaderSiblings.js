/**
 * Created by liyadan01_bj on 2016/5/3.
 */
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers=document.getElementsByTagName("h1");
    var elem;
    for(var i=0; i<headers.length; i++){
        elem=getNextElement(headers[i].nextSibling);
        addClass(elem,"intro");
    }
}
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function addClass(element, value){
    if(!element.className){
        element.className=value;
    }else{
        element.className+=" "+value;
    }
}

function styleElementSiblins(tag,theclass){
    if(!document.getElementsByClassName) return false;
    var elems=document.getElementsByTagName(tag);
    var elem;
    for(var i=0;i<elems.length;i++){
        elem=getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
addLoadEvent(function () {
    styleElementSiblins("h1","intro");
});