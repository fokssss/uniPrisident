
// 构造控件Vue实例
var listview = new Vue({
	el : '#listview',
	data : {
		listDatas : [],
		timeOutEvent : 0
	},
	mounted : function() {
		// 组件挂载后执行...
		this.listDatas = [{
			"sender" : "通知消息",
			"img" : "../../img/org1.png",
			"msgNum" : 0,
			"lastMsg" : "暂无最新消息",
			"lastTime" : "15:24"
			}, {
			"sender" : "合同消息",
			"img" : "../../img/org2.png",
			"msgNum" : 4,
			"lastMsg" : "DX3型重型机械出口合同",
			"lastTime" : "12:40"
			}, {
			"sender" : "集团发文",
			"img" : "../../img/org3.png",
			"msgNum" : 5,
			"lastMsg" : "关于深入学习两会报道专题",
			"lastTime" : "12:21"
			}];
			
			// 隐藏动画
			sara.hideLoading();

	},
	methods : {
		/* 在这里定义方法 */
		itemClick : function(index) {
			// 这里编辑单击列表项逻辑
			alert("您点击了列表第" + (index + 1) + "行！");
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
			}, 2000);
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
					"sender" : "集团咨询部",
					"img" : "../../img/org5.png",
					"msgNum" : 6,
					"lastMsg" : "各位同仁，2015年4季度油料报销标准5.85元/升。",
					"lastTime" : "12月22日"
				};
				self.listDatas.push(row);
				self.$refs.loadmore.onBottomLoaded();
			}, 2000);
		}
	}
}); 