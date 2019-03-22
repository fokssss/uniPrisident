

var vue = new Vue({
	el:'#index',
	data: {
		goods: {}
	},
	methods: {
		closeWin:function() {
			if($summer.os === "pc") {
				window.location.href = "./goodsList.html";
				return;
			}
			summer.closeWin();
		}
	},
	mounted: function() {
		
		
		// 隐藏动画
		sara.hideLoading();
		//this.goods = summer.pageParam.data || {};
		/* {
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
		} */
	}
});

summerready = function() {
	if($summer.os === "pc") {
		vue.goods = JSON.parse(summer.getStorage("data"));
		return;
	}
	vue.goods = summer.pageParam.data || {};
}