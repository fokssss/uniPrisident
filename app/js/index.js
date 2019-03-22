summerready = function() {
	setTitle(1);
	// here is your code...
	/*var top = $summer.offset($summer.byId('header')).h;
	 var bottom = $summer.offset($summer.byId('footer')).h + 25;
	 summer.openFrame({
	 id: 'main',
	 url: 'html/main.html',
	 bounces: true,
	 position: {
	 top: top,
	 bottom: bottom,
	 left: 0,
	 right: 0
	 }
	 });*/
}
var vue = new Vue({
	el : '#win',
	data : {

	},
	methods : {
		openWin : function(type) {
			console.log(type);
			switch(type) {
			case 'buy':
				if($summer.os === "pc") {
					window.location.href = "html/func/goodsList.html";
					return;
				}
				this.jump("goodsList");
				break;
			case 'ktv':
				if($summer.os === "pc") {
					window.location.href = "html/func/goodsDetail.html";
					return;
				}
				this.jump("goodsDetail", {
					data : {
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
					}
				});
				break;
			case 'hotel':
				if($summer.os === "pc") {
					window.location.href = "html/func/addGoods.html";
					return;
				}
				this.jump("addGoods");
				/*summer.download({
                    //"url" : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552025104609&di=6642a969bd830d3f2eb57f60e2bef9a4&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fnews%2Fw%3D638%2Fsign%3De710083d9e25bc312b5d029b66dd8de7%2F314e251f95cad1c86d6321d4783e6709c83d516d.jpg", //下载文件的url
                   	"url" : "http://10.6.255.244:8090/fileUploadForTrain/upload/pdf1.pdf",
                    "locate" : "download/image", //下载后文件存放的路径
                    "filename" : "newfile.pdf", //下载后重命名的文件名
                    "override" : "true", //下载后是否覆盖同名文件(true和false)
                    "callback" : function(res) {
                	 	//alert(JSON.stringify(res));
                	 	if(res.isfinish !== "undefined" && res.isfinish == true) {
  							console.log(JSON.stringify(res));  
  							var path = "";
  							if($summer.os === "android") {
					 			path = res.savePath;
							} else if($summer.os === "ios") {
						 		path =  summer.getFileInfo(res.savePath);
						 		path = JSON.parse(path).allowReadPath;
						 	}   
						 	//$("#main").attr("src", path);     	    	 	
                	 	}
                    } //下载完成之后的回调函数
                });
				*/
				break;
			case "movie":
				summer.getPermission(["android.permission.CAMERA"], function(response) {
				}, function(response) {
				});
				summer.openScanner({
					 callback : function(args) {
						 $("#main").attr("src", args.umdcode);
						 $(".um-group-title-l.sec").html(args.umdcode);
					 }
				 });
	/**/
				/*	
				 cordova.plugins.barcodeScanner.scan(function(result) {
				 //alert(JSON.stringify(result));
				 $(".um-group-title-l.sec").html(result.text);
				 }, function(error) {
				 alert("Scanning failed: " + error);
				 });
			 
				var params = {
					zxing : false,
					albumVisible : false
				};
				ZBar.scan(params, function(args) {
					summer.toast({
						msg : args
					});
				}, function(args) {
					summer.toast({
						msg : args
					});
				});*/
				break;
			}
		},
		jump : function(wid, param) {
			if($summer.os=== "pc") {
				window.location.href="";
				return;
			}
			summer.openWin({
				"id" : wid,
				"url" : "html/func/" + wid + ".html",
				"statusBarAppearance" : true,
				"fullScreen" : false,
				"bounces" : true,
				"pageParam" : param || {},
			});
		}
	},
	mounted : function() {
		var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
		var recalc = function() {
			var clientWidth = document.documentElement.clientWidth;
			//if (clientWidth >= 750) {
			//    clientWidth = 750;
			// };
			if (!clientWidth)
				return;
			// docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			window.location.reload();
		};
		if (!document.addEventListener)
			return;
		window.addEventListener(resizeEvt, recalc, false);
		// 隐藏动画
		sara.hideLoading();
	}
})

//sa-title
function setTitle(index) {
	var title = $(".mui-tab-item.mui-active .mui-tab-label").html();
	$("#sa-title").html("&nbsp;&nbsp;" + title);
	//console.log(title);
}