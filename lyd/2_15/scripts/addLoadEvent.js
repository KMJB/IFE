/**
 * Created by liyadan01_bj on 2016/4/26.
 */
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload != 'function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}