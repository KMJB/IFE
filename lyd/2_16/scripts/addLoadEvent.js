/**
 * Created by liyadan01_bj on 2016/5/4.
 */
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof oldonload !='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}