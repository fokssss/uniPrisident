var vue = new Vue({
	el:'#main',
	data: {
	
	},
	methods: {
		openWin: function(type) {
			console.log(type);
			switch(type) {
				case 'buy': {
					summer.openWin({
                        "id" : "xxx",
                        "url" : "html/xxx.html",
                        "statusBarAppearance" : true,
                        "fullScreen" : false,
                        "bounces": true,
                        "animation" : {
                            "type" :"movein", //none|push|fade
                            "subType":"from_right", //from_left|from_top|from_bottom
                            "duration":300
                        }
                    });
					break;
				}
				case "movie": {
					
					break;
				}
			}	
		}
	},
	mounted: function() {
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
			    
                //基于准备好的dom,初始化echarts实例
        		var myChart=echarts.init(document.getElementById('myChart'));
        		//指定图表的配置项和数据
        		var	option={
        			title : {
        				text: '2016年上半年订单总额百分比',
        				x:'center',
        				y:10,
        				textStyle: {
        					color: '#333',
        					fontSize: 18
        				}
        			},
        		    tooltip : {                                 //提示框浮层内容格式器，支持字符串模板和回调函数两种形式
        				trigger: 'item',
        				formatter: "{a} <br/>{b} : {c} ({d}%)"  // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
        		    },
        			legend: {
        				x : 'center',
        				y : 'bottom',
        				itemGap:15, //legend元素间隔
        				itemWidth: 30, //图标宽度
        				itemHeight: 15, //图标高度
        				textStyle: {
        					color: '#333',
        					fontSize: 16,
        			    },
        			    data:['一月','二月','三月','四月','五月','六月']
        	        },
        		    calculable : false,
        		    series : [{
        			  name:'单月数据详情(单位：万元)',
        			  type:'pie',
        			  radius : '50%',
        			  center: ['50%', '50%'],
        			  data:[
        					{value:60, name:'一月'},
        					{value:100, name:'二月'},
        					{value:90, name:'三月'},
        					{value:120, name:'四月'},
        					{value:240, name:'五月'},
        					{value:480, name:'六月'},
        				]
        			}]
        		};
        		// 使用刚指定的配置项和数据显示图表。
        		myChart.setOption(option);	
        		// 点击事件操作
        		 myChart.on('click', function (param) {
        			alert(JSON.stringify(param.value));
        		}); 
	}
})