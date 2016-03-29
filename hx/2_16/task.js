/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
/*坑1:window.onload = function() */
window.onload = function() {
    var aqiData = {};
    var cityData = document.getElementById("aqi-city-input");
    var airData = document.getElementById("aqi-value-input");

    function addAqiData() {

        var city = cityData.value.trim();
        var air = airData.value.trim();
        if (!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
            alert("城市名必须为中英文字符！")
            return;
        }
        if (!air.match(/^\d+$/)) {
            alert("空气质量指数必须为整数！")
            return;
        }
        //生成二维数组
        aqiData[city] = air;

    }

    /**
     * 渲染aqi-table表格
     */
    function renderAqiList() {
        var aqitab = document.getElementById("aqi-table");
        var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
        //for...in循环，将对象所有属性依次循环出来\
        for (var i in aqiData) {
            console.log(i);
            items += "<tr><td>" + i + "</td><td>" + aqiData[i] + "</td><td>" + "<button type='button' style='text-align:center'>删除</button>";

        }
        aqitab.innerHTML = items;

    }

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    function addBtnHandle() {
        addAqiData();
        renderAqiList();
        cityData.value = "";
        airData.value = "";
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
        var aqitab = document.getElementById("aqi-table");
        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        document.getElementById("add-btn").onclick = function() {
            addBtnHandle();
        };
        document.getElementById("aqi-table").addEventListener("click", function(event) {
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
}
