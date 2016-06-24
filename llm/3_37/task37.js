/**
 * Created by lanleiming_bj on 2016/6/23.
 */
var maskdiv = $('.floatlayer-maskDiv');
var btnLogin = $('#btnLogin');
var btnCancle = $('#btnCancel');
var title = $('h2');
var resize =$('floatlayer-resizable');
var divFloat = $('#divFloat');

function hide(){
  maskdiv.style.display = 'none';
}
function show(){
    maskdiv.style.display = 'block';
}


window.onload = function(){
    hide();
    btnLogin.onclick = show;
    /*
    addEvent(title, 'mousedown', function(event) {
        var disX = event.clientX - this.offsetLeft,
            disY = event.clientY - this.offsetTop;

        var move = function(event) {
            divFloat.style.left = event.clientX - disX + "px";
            divFloat.style.top = event.clientY - disY + "px";
        };

        addEvent(document, 'mousemove', move);
        addEvent(document, 'mouseup', function() {
            removeEvent(document, 'mousemove', move);
        })
    });

   */

};
