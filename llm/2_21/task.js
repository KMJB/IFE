/**
 * Created by lanleiming_bj on 2016/4/14.
 */
window.onload = function () {
    /* 数组队列 */
    var tagList = [];
    var hobbyList = [];
    /*数据类型*/
    var dataType = {
        'Tag': 1,
        'Hobby': 2
    };
    //事件绑定兼容
    function addEventHandler(ele, event, hanlder) {
        if (ele.addEventListener) {
            ele.addEventListener(event, hanlder, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on"+event, hanlder);
        } else  {
            ele["on" + event] = hanlder;
        }
    }
    function getDom(event){
        var e = event || window.event;
        return e.srcElement || e.target;
    }
    /**
     * 扩展array对象方法：contains
     * 判断元素是否在数组中
     */
    Array.prototype.contains = function (obj) {
        var i = this.length;
        while (i--) {
            if (this[i] === obj) {
                return true;
            }
        }
        return false;
    };


    var txt_tag = document.getElementById('txt_tag');
    var txt_hobby = document.getElementById('txt_hobby');
    var btn_hobby = document.getElementById('btn_hobby');
    var pattern = /[^0-9a-zA-Z\u4e00-\u9fa5]+/;
    var div_tag = document.getElementById('tag-list');
    var div_hobby = document.getElementById('hobby-list');

    /**
     * 往队列中插入数据
     */
    function insertIntoList(txt_dom, cType) {
        var arr = txt_dom.value.trim().split(pattern);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == '' || arr[i] == null)continue;
            var newArray = cType == dataType.Tag ? tagList : hobbyList;
            if (!newArray.contains(arr[i])) {
                if (newArray.length >= 10) {
                    newArray.shift();
                }
                newArray.push(arr[i]);
            }
        }
        txt_dom.value='';
    }


    /**
     * 渲染数组
     * 将数组中数据输出到div中
     */
    function render(cType) {
        var str = '';
        var newArray = cType == dataType.Tag ? tagList : hobbyList;
        var newId = cType == dataType.Tag ? 'tag-list' : 'hobby-list';
        newArray.forEach(function (item, index) {
            str += '<p index="' + index + '">' + item + '</p>';
        });
        document.getElementById(newId).innerHTML = str;
    }


    /**
     * 点击 每个tag/hobby的逻辑
     * 获取用户点击的是哪个，删除自身。并重新渲染
     */
    function killMySelf(element) {
        if (element.nodeName.toLowerCase() != "p") {
            return;
        }
        //处理逻辑
        var cIndex = element.getAttribute('index');
        var ctype;
        var newArray;
        if (element.parentNode.id == 'tag-list') {
            ctype = dataType.Tag;
            newArray = tagList;
        } else {
            ctype = dataType.Hobby;
            newArray = hobbyList;
        }
        newArray.splice(cIndex, 1);
        render(ctype);
    }
    //鼠标悬浮事件，改变tag/hobby中的文字内容
    function changeTextOver(dom){
       if(dom.nodeName.toLowerCase()=='p'){
           dom.innerHTML = '删除'+ dom.innerHTML;
       }
    }
    function changeTextOut(dom){
        if(dom.nodeName.toLowerCase()=='p'){
            dom.innerHTML = dom.innerHTML.substring(2,dom.innerHTML.length);
        }
    }

    function init() {
        //给tag添加 按键事件
        txt_tag.onkeyup = function () {
            if (pattern.test(txt_tag.value)||event.keyCode==13) {
                insertIntoList(txt_tag,dataType.Tag);
                render(dataType.Tag);
            }
        };
        //添加兴趣爱好
        btn_hobby.onclick=function(){
            insertIntoList(txt_hobby,dataType.hobby);
            render(dataType.hobby);
        };

        //给每个tag/hobby添加点击事件
        addEventHandler(div_tag,'click',function(event){
            killMySelf(getDom(event));
        });
        addEventHandler(div_hobby,'click',function(event){
            killMySelf(getDom(event));
        });
        //给每个tag/hobby添加 鼠标悬浮事件
        addEventHandler(div_tag,'mouseover',function(event){
            changeTextOver(getDom(event));
        });
        addEventHandler(div_hobby,'mouseover',function(event){
            changeTextOver(getDom(event));
        });
        addEventHandler(div_tag,'mouseout',function(event){
            changeTextOut(getDom(event));
        });
        addEventHandler(div_hobby,'mouseout',function(event){
            changeTextOut(getDom(event));
        });
    }
    init();
};