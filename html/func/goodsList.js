// 构造控件Vue实例
var vue = new Vue({
	el : '#index',
	data : {
		listDatas : [],
		timeOutEvent : 0
	},
	mounted : function() {
		// 组件挂载后执行...
		this.listDatas = [{
			goodsName : "青苹果",
			conunt : "23",
			goodsUnit : '吨',
			source : "山东泰安青苹果庄园",
			price : "3504",
			priceUnit : '元',
			mark : '保证破损率低于3%',
			time : '2019-2-22',
			dep : '生产部',
			approver : '陈德桂'
		}, {
			goodsName : "柠檬酸",
			conunt : "48",
			goodsUnit : '吨',
			source : "广西南宁海威康纳柠檬园",
			price : "4301",
			priceUnit : '元',
			mark : '保证破损率低于3%',
			time : '2019-2-26',
			dep : '生产部',
			approver : '陈德桂'
		}, {
			goodsName : "小麦",
			conunt : "158",
			goodsUnit : '吨',
			source : "河南新乡国粮储备库",
			price : "1320",
			priceUnit : '元',
			mark : '严格抽查防止霉变小麦掺杂严格抽查防止霉变小麦掺杂严格抽查防止霉变小麦掺杂ch-list-row-notech-list-row-notech-list-row-note',
			time : '2019-2-24',
			dep : '生产部',
			approver : '陈德桂'
		}, {
			goodsName : "精盐",
			conunt : "223",
			goodsUnit : '吨',
			source : "青海盐城",
			price : "3150",
			priceUnit : '元',
			mark : '无',
			time : '2019-2-27',
			dep : '生产部',
			approver : '陈德桂'
		}];

		// 隐藏动画
		sara.hideLoading();

	},
	methods : {
		addPurchaseOrder: function() {
			if($summer.os === "pc") {
				window.location.href = "./addGoods.html";
				return;
			}
			summer.openWin({
                "id" : "addGoods",
                "url" : "html/func/addGoods.html",
                "statusBarAppearance" : true,
                "fullScreen" : false,
                "bounces": true,
                "animation" : {
                    "type" :"movein", //none|push|fade  movein
                    "subType": "from_right", //"from_right", //from_left|from_top|from_bottom
                    "duration":300
                }
            });
		},
		closeWin: function() {
			if($summer.os === "pc") {
				window.location.href = "../../index.html";
				return;
			}
			summer.closeWin();
		},
		/* 在这里定义方法 */
		itemClick : function(index) {
			// 这里编辑单击列表项逻辑
			//alert("您点击了列表第" + (index + 1) + "行！");
			if($summer.os === "pc") {
				summer.setStorage("data", JSON.stringify(this.listDatas[index]));
				window.location.href = "./goodsDetail.html";
				return;
			}
			summer.openWin({
                "id" : "goodsDetail",
                "url" : "html/func/goodsDetail.html",
                "statusBarAppearance" : true,
                "fullScreen" : false,
                "bounces": true,
                "pageParam": {
                	data: this.listDatas[index]
                },
                "animation" : {
                    "type" :"movein", //none|push|fade  movein
                    "subType": "from_right", //"from_right", //from_left|from_top|from_bottom
                    "duration":300
                }
            });
			
		},
		tapHold : function(index) {
			// 这里编辑长按列表项逻辑
			var ev = event || window.event;
			var touches = ev.targetTouches;
			if (touches.length > 1) {
				return;
			}
			this.timeOutEvent = setTimeout(function() {
				this.timeOutEvent = 0;
				alert("您长按了列表第" + (index + 1) + "行！");
			}, 1500);
		},
		cancelTapHold : function() {
			// 取消长按
			clearTimeout(this.timeOutEvent);
			this.timeOutEvent = 0;
		},
		deleteItem : function(index) {
			// 这里编辑删除列表项逻辑
			this.listDatas.splice(index, 1);
		},
		loadTop : function() {
			// 这里编辑下拉刷新逻辑
			var self = this;
			setTimeout(function() {
				/*
				 var row = {
				 "sender" : "集团技术部",
				 "img" : "../../img/org4.png",
				 "msgNum" : 2,
				 "lastMsg" : "各位同仁，2015年4季度油料报销标准5.85元/升。",
				 "lastTime" : "16:22",
				 };
				 self.listDatas.unshift(row);
				 */
				self.$refs.loadmore.onTopLoaded();
			}, 2000);
		},
		loadBottom : function() {
			// 这里编辑上拉加载逻辑
			var self = this;
			setTimeout(function() {
				var row = {
					goodsName : "小麦",
					conunt : "158",
					goodsUnit : '吨',
					source : "河南新乡国粮储备库",
					price : "1320",
					priceUnit : '元',
					mark : '严格抽查防止霉变小麦掺杂严格抽查防止霉变小麦掺杂严格抽查防止霉变小麦掺杂ch-list-row-notech-list-row-notech-list-row-note',
					time : '2019-2-24',
					dep : '生产部',
					approver : '陈德桂'
				};
				self.listDatas.push(row);
				self.$refs.loadmore.onBottomLoaded();
			}, 2000);
		}
	}
});

function addNewPurchaseOrderCallBack(args) {
	//alert(JSON.stringify(args));
	vue.listDatas.unshift(args);
}
