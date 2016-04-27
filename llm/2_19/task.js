/**
 * Created by lanleiming_bj on 2016/4/14.
 */
window.onload = function () {
    /* 数组队列 */
    var datalist = [];
    var snapArray = [];
    var leftOrRight = {
        'left': 1,
        'right': 0
    };
    /**
     * 随机生成一组数据,填充到队列中
     * 30个10到100的数字
     */
    function randomList(){
        /**
         * 随机生成一个指定范围内的数字
         */
        function RandomNum(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range);
            return num;
        }
        datalist=[];
       for(var i=0; i< 30;i++){
           var number =RandomNum(10,100);
           datalist.push(number);
       }
    }

    /**
     * 往队列中插入数据
     * 从左侧或者右侧插入
     */
    function insertIntoList(value, leftOrRightItem) {
        if (value == '' || isNaN(value)|| parseInt(value) < 10 || parseInt(value) >100) {
            alert('请输入正确的数字');
            return;
        }
        if (leftOrRightItem == leftOrRight.left) {
            datalist.splice(0, 0, value);
        } else {
            datalist.push(value);
        }
    }

    /**
     * 在队列中删除数据
     * 从左侧或者右侧删除第一个数据
     * 返回刚刚删除的数据
     */
    function deleteValueFromList(value, leftOrRightItem) {
        if (datalist.length == 0) {
            return '该队列为空，请先添加数据！';
        }
        if (leftOrRightItem == leftOrRight.left) {
            return datalist.shift();
        } else {
            return datalist.pop();
        }
    }

    /**
     * 渲染数组
     * 将数组中数据输出到id为data-list里面
     */
    function render(arr) {
        arr = arr || datalist;
        var str = '';
        arr.forEach(function (item, index) {
            var c_color; //不同的高度，定义不同的颜色
            if(item>80){
                c_color = '#005db1;';
            }else if(item>60){
                c_color = '#73832a;';
            }else if(item>40){
                c_color = '#a02730;';
            }else{
                c_color = '#538289;';
            }
            str += '<div class="data-item" style="background-color:'+c_color+' height:'+item*4+'px;" title="'+item+'" index="' + index + '"></div>';
        });
        document.getElementById('data-list').innerHTML = str;
    }

    /**
    * 冒泡排序
    */
    function bubble_sort(){
        for(var i=0; i<datalist.length;i++){
            for(var j=0; j<datalist.length-i-1 ;j++){
                if (datalist[j] > datalist[j + 1]) {
                    var temp = datalist[j+1];
                    datalist[j+1] =datalist[j];
                    datalist[j] = temp;
                   // snapArray.push(datalist);
                    snapArray.push(JSON.parse(JSON.stringify(datalist))); // 记录快照
                }
            }
        }
        var timer = setInterval(paint, 10); //定时绘制
        function paint() {
            var snapshot = snapArray.shift() || [];
            if (snapshot.length !== 0) {
                render(snapshot);
            } else {
                clearInterval(timer); //绘制结束
                return;
            }
        }




    }
    /**
     * 点击 功能按钮的处理逻辑
     * 获取用户输入，更新数据，渲染数组
     */
    function addBtnHandler(element) {
        //处理逻辑
        //1、检测用户输入的是否为数字
        var inputValue = document.getElementById('txt_input').value;
        //2、根据点击的按钮类型，进行相应的处理
        switch (element.innerHTML) {
            case '左侧入':
                insertIntoList(inputValue, leftOrRight.left);
                break;
            case '右侧入':
                insertIntoList(inputValue, leftOrRight.right);
                break;
            case '左侧出':
                deleteValueFromList(inputValue, leftOrRight.left);
                break;
            case '右侧出':
                deleteValueFromList(inputValue, leftOrRight.right);
                break;
            case '随机产生':
                randomList();
                render();
                break;
            case '冒泡排序':
                bubble_sort();
                break;
            default :
                break;
        }

    }

    /**
     * 点击 每个数字的逻辑
     * 获取用户点击的是哪个数字，删除自身。并重新渲染
     */
    function killMySelf(element) {
        //处理逻辑
        var cIndex = element.getAttribute('index');
        datalist.splice(cIndex, 1);
        render();
    }

    function init() {
        //给每个功能按钮绑定事件
        document.getElementById('div-input').addEventListener('click', function (event) {
            var e = event || window.event;
            var dom = e.srcElement || e.target;
            if (dom.nodeName.toLowerCase() == "button") {
                addBtnHandler(dom);
            }
        });
        //给每个数字绑定点击事件
        document.getElementById('data-list').addEventListener('click', function (event) {
            var e = event || window.event;
            var dom = e.srcElement || e.target;
            if (dom.className.toLowerCase() == "data-item") {
                killMySelf(dom);
            }
        });
    }

    init();
}