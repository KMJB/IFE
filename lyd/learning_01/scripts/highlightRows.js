/**
 * Created by liyadan01_bj on 2016/5/4.
 */
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows=document.getElementsByTagName("tr");
    if(rows.length<1) return false;
    for(var i=0; i<rows.length;i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight="bold";
        };
        rows[i].onmouseout=function(){
            this.style.fontWeight="normal";
        }
    }
}
addLoadEvent(highlightRows);
