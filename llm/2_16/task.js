/**
 * Created by lanleiming_bj on 2016/4/12.
 * 在遍历创建tr时，给每个button绑定事件。（不是最优解）
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
}

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
    aqiTable.innerHTML='';//每次渲染前，先清空tr
    createTR_title();//创建表格title
    for (var item in aqiData) {
       createTR(item,aqiData[item]); //循环遍历，创建tr；并绑定事件
    }
}
/**
 * 创建tr-title
 */
function createTR_title() {
    var trTitle = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.innerHTML = '城市';
    var th2 = document.createElement('th');
    th2.innerHTML = '空气质量';
    var th3 = document.createElement('th');
    th3.innerHTML = '操作';
    trTitle.appendChild(th1);
    trTitle.appendChild(th2);
    trTitle.appendChild(th3);
    aqiTable.appendChild(trTitle);
}
function createTR(city,value) {
    var trTitle = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.innerHTML = city;
    var td2 = document.createElement('td');
    td2.innerHTML = value;
    var td3 = document.createElement('td');
    var btn = document.createElement('button');
    btn.onclick=delBtnHandle; //绑定事件
    btn.innerHTML='删除';
    td3.appendChild(btn);

    trTitle.appendChild(td1);
    trTitle.appendChild(td2);
    trTitle.appendChild(td3);
    aqiTable.appendChild(trTitle);
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
function delBtnHandle(obj) {
    // do sth.
    delete aqiData[this.parentNode.parentNode.firstChild.innerHTML];
    renderAqiList();
}

function init() {

    //城市名称失去焦点时，检测用户输入的值是否符合规则
    aqiCity.onblur = function () {
        showMsg(checkIsCNEN(aqiCity.value), aqiCity);
    }
    aqiValue.onblur = function () {
        showMsg(checkIsInt(aqiValue.value), aqiValue);
    }

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = addBtnHandle;

}

init();
