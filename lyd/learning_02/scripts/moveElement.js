/**
 * Created by liyadan01_bj on 2016/5/4.
 */
function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left="-34px";
    }
    if(!elem.style.top){
        elem.style.top="-74px";
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    var dist=0;
    if(xpos==final_x&&ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        dist=Math.ceil((final_x-xpos)/50);
        xpos+=dist;
    }
    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/50);
        xpos-=dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((final_y-ypos)/50);
        ypos+=dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((ypos-final_y)/50);
        ypos-=dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}
