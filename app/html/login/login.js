var vue = new Vue({
	el:"#index",
	data: {
		uname:"admin",
		upwd:"admin"
	},
	methods: {
		loginClick: function() {
			if($summer.os === "pc") {
				window.location.href = "../../index.html";
				return;
			}
			summer.openWin({
                "id" : "index",
                "url" : "index.html",
				"animation" : {
					"type" : "movein", //none|push|fade
					"subType" : "from_right", //from_left|from_top|from_bottom
					"duration" : 300
				}
            });
		}
	}
})