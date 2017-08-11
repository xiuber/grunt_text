define([
	  'jquery', 'infoChannel','utilTool', 'cookie'
], function (jquery,InfoChannel, UtilTool,cookie) {
	  var url = configData.dataHost + '/user.php';//设置url
	  //显示更多
	  $("#go-quick-click").on("click",function(ev){
			$("#quick-go-div").slideToggle();
			ev.stopPropagation();
	  });
	  $("body").on("click",function(){
			if($("#quick-go-div").css("display")=="block"){
				  $("#quick-go-div").slideUp();
			}
	  });
	  //退出
	  $('[data-attach-point=quit]').on('click', function () {
			$("#top").show();
			$("#below").show();
	  });
	  $("[data-attach-point=cl]").on('click',function(){
			$("#top").hide();
			$("#below").hide();
	  });
	  $("[data-attach-point=ok]").on('click',function(){
			$("#top").hide();
			$("#below").hide();
			UtilTool.clearCookie();
			var param = {
				  action: "logout"
			};
			InfoChannel.getDataByAjax(url, param, function (data) {
			});
			window.location.href='/';
	  })
});

