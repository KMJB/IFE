/**
 * Created by liyadan01_bj on 2016/5/3.
 */
function displayCitations(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    //ȡ����������
    var quotes=document.getElementsByTagName("blockquote");
    //��������
    for(var i=0; i<quotes.length; i++){
        //���û��cite����ѭ��
        if(!quotes[i].getAttribute("cite")) continue;
        //��ȡ������cite����
        var url=quotes[i].getAttribute("cite");
        //ȡ�������е�����Ԫ�ؽڵ�
        var quoteChildren=quotes[i].getElementsByTagName("*");
        //���û��Ԫ�ؽڵ㣬����ѭ��
        if(quoteChildren.length<1) continue;
        //ȡ�������е����һ��Ԫ�ؽڵ�
        var elem=quoteChildren[quoteChildren.length-1];
        //�������
        var link=document.createElement("a");
        var link_text=document.createTextNode("sorce");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var surperscript=document.createElement("sup");
        surperscript.appendChild(link);
        //�ѱ����ӵ������е����һ��Ԫ�ؽڵ�
        elem.appendChild(surperscript);
    }
}
addLoadEvent(displayCitations);