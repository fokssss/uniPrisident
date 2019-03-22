var vue = new Vue({
	el:'#index',
	data: {
		goods: {
			goodsName : "",
			conunt : "",
			goodsUnit : '',
			source : "",
			price : "",
			priceUnit : '',
			mark : '',
			time : '',
			dep : '',
			approver : ''
		}
	},
	methods: {
		commitOrder: function() {
			if($summer.os === "pc") {
				window.location.href = "./goodsList.html";
				return;
			}
			var json = JSON.stringify(this.goods);
			summer.execScript({
                "winId" : "goodsList",
                "script" : 'addNewPurchaseOrderCallBack('+json+');'
            });
            summer.closeWin();
		},
		closeWin: function() {
			if($summer.os === "pc") {
				window.location.href = "./goodsList.html";
				return;
			}
			summer.closeWin();
		}
	},
	mounted: function() {
		//this.goods = summer.pageParam.data || {};
		// 隐藏动画
		sara.hideLoading();
	}
});