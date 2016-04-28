/**
 * Created by liyadan01_bj on 2016/4/27.
 */
function displayAbbrevations(){
    var abbrreviations=document.getElementsByTagName("abbr");
    if(abbrreviations.length<1) return false;
    var defs=new Array();
    for(var i=0; i<abbrreviations.length;i++){
        var current_abbr=abbrreviations[i];
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
    }
    var dlist=document.createElement("dl");
    for(key in defs){
        var definition=defs[key];
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
};

function displayAbbrevations2(){

}


addLoadEvent(displayAbbrevations);