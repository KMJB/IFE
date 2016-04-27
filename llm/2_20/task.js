/**
 * Created by lanleiming_bj on 2016/4/14.
 */
window.onload = function () {
    /* 数组队列 */
    var datalist = [];
    var leftOrRight = {
        'left': 1,
        'right': 0
    };

    /**
     * 往队列中插入数据
     * 从左侧或者右侧插入
     */
    function insertIntoList(value, leftOrRightItem) {
        var pattern = /[^0-9a-zA-Z\u4e00-\u9fa5]+/;
        var arr = value.split(pattern);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == '' || arr[i] == null)continue;
            if (leftOrRightItem == leftOrRight.left) {
                datalist.splice(0, 0, arr[i]);
            } else {
                datalist.push(arr[i]);
            }
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
    function render(key) {
        var str = '';
        datalist.forEach(function (item, index) {
            if (key != null && key != '') {
                item = item.replace(new RegExp('('+key+')','g'), '<span style="color:blue;">$1</span>');
            }
            str += '<p index="' + index + '">' + item + '</p>';
        });
        document.getElementById('data-list').innerHTML = str;
    }

    /**
     * 查询
     */
    function search() {
        var keyword = document.getElementById('txt_keyword').value;
        if (keyword == null || keyword == '') {
            alert('请输入要查询的值！');
            return;
        }
        render(keyword);
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
                alert(deleteValueFromList(inputValue, leftOrRight.left));
                break;
            case '右侧出':
                alert(deleteValueFromList(inputValue, leftOrRight.right));
                break;
            case '查询':
                search();
                return;
            default :
                break;
        }
        document.getElementById('txt_input').value = '';
        render();
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
            if (dom.nodeName.toLowerCase() == "p") {
                killMySelf(dom);
            }
        });
    }

    init();
}