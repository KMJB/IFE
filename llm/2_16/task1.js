/**
 * Created by lanleiming_bj on 2016/4/12.
 * 在init时，对table进行事件绑定
 */

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var aqiCity = document.getElementById('aqi-city-input');
var aqiValue = document.getElementById('aqi-value-input');
var aqiTable = document.getElementById('aqi-table');

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    if (checkIsCNEN(aqiCity.value) && checkIsInt(aqiValue.value)) {
        aqiData[aqiCity.value.trim()] = aqiValue.value.trim();
    } else {
        //对填写错误的input，focus
        if(!checkIsCNEN(aqiCity.value)){
            aqiCity.focus();
        }else{
            aqiValue.focus();
        }
    }
}
/**
 * 检测输入的数据是否为中英文 *
 */
function checkIsCNEN(value) {
    return (/^[a-zA-Z\u4e00-\u9fa5]+$/).test(value.trim());
}
/**
 * 检测输入的数据是否为整数 *
 */
function checkIsInt(value) {
    value.trim();
    return parseInt(value) == value;
}
/**
 * 对字符串进行trim处理 *
 */
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 根据检测结果来确定是否展示错误信息 *
 */
function showMsg(result, element) {
    var lb_msg = document.getElementById('msg-' + element.id);
    if (result) {
        //如果检测正确，则隐藏错误信息
        lb_msg.style.display = 'none';
    } else {
        //显示错误信息
        lb_msg.style.display = 'inline';
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str='<tr><th>城市</th><th>空气质量指数</th><th>操作</th></tr>';
    for (var item in aqiData) {
       str+='<tr><td>'+item+'</td><td>'+aqiData[item]+'</td><td><button>删除</button></td></tr>';
    }
    aqiTable.innerHTML=str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(key) {
    // do sth.
    delete aqiData[key];
    renderAqiList();
}

function init() {

    //城市名称失去焦点时，检测用户输入的值是否符合规则
    aqiCity.onblur = function () {
        showMsg(checkIsCNEN(aqiCity.value), aqiCity);
    };
    aqiValue.onblur = function () {
        showMsg(checkIsInt(aqiValue.value), aqiValue);
    };

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    aqiTable.addEventListener('click',function(event){
        var e = event || window.event;
        //ie he firefox兼容性处理
        //获当前点击事件作用的对象
        var dom = e.target || e.srcElement;
        //小写重置
        if (dom.nodeName.toLowerCase() == "button") {
            delBtnHandle(dom.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue); //选择了引起事件的删除按钮的父节点的父节点的子节点的子文本节点的节点值
        }
    });
}

init();
