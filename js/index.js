$.extend({
  showDialog: function(obj) {
    var type = obj.type || "alert";
    var title = obj.title;
    var content=obj.content;
    var duration = obj.duration || 2000;  
    var _html = "<div id='pop-div' style='position: fixed; z-index:999; top: 0; left: 0;width:100%; height:100%; background-color: rgba(0 ,0, 0, 0.2)'>";
      if (type == 'toast') {
        _html += "<div style='position:relative;min-width:65%;max-width:80%;display: inline-block;padding: 0px 20px; border-radius: 6px;margin: 0 auto;left: 50%;top: 50%; -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -webkit-transform: translateY(-50%);transform: translate(-50%,-50%);background-color: #fafafa;text-align: center;font-size: 16px;word-wrap: break-word; word-break:break-all;overflow: hidden;border-radius: 10px;'>";
          _html += "<div style='padding: 12px 0px;line-height: 35px;text-align: center; box-sizing: border-box'>" + content + "</div>";
      }else{
        if (title!=''&&title!=undefined) {
          _html += "<div style='position:relative; width: 90%; max-width: 400px; height: 190px;margin: 0 auto; top: 50%; -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -webkit-transform: translateY(-50%);transform: translateY(-50%);background-color: #fafafa;text-align: center;font-size: 16px;word-wrap: break-word; word-break:break-all;overflow: hidden;border-radius: 10px;'>";
          _html += "<div style='height:50px; border-bottom: 1px solid #E1E1E1;line-height: 50px; box-sizing: border-box'>" + title + "</div>"
       }else{
        _html += "<div style='position:relative; width: 90%; max-width: 400px; height: 140px;margin: 0 auto; top: 50%; -moz-transform: translateY(-50%); -ms-transform: translateY(-50%); -webkit-transform: translateY(-50%);transform: translateY(-50%);background-color: #fafafa;text-align: center;font-size: 16px;word-wrap: break-word; word-break:break-all;overflow: hidden;border-radius: 10px;'>";
       }
       if (content!=''&&content!=undefined) {
        _html += "<div style='height: 70px;border-bottom: 1px solid #E1E1E1;line-height: 35px;padding: 10px;justify-content: center;align-items: center;display: -webkit-flex;overflow: hidden;border-radius: 10px;'>" + content + "</div>";
       }
      }  
    var button = "<div style='width: 100%; height: 40px;'>";
    switch(type) {
        case "confirm":
            var okButtonText = obj.okButtonText || "确定";
            var cancleButtonText = obj.cancleButtonText || "取消";
            var button = "<span style='display:inline-block; width: 50%;height: 50px;border-right: 1px solid #E1E1E1; box-sizing: border-box;text-align: center;line-height: 50px;font-size: 16px' id='cancle'>" + cancleButtonText + "</span><span style='display:inline-block; width: 50%;height: 50px;text-align: center;line-height: 50px; color: #0e90d2;font-size: 16px' id='confirm'>" + okButtonText + "</span>";
            break;
        case "prompt":
            _html += "<div style='height: 90px; border-bottom: 1px solid #E1E1E1;line-height: 90px; box-sizing: border-box'><input type='text' size='30' id='popup_prompt' class='nm_input nm-prompt-input' /></div>";
            var okButtonText = obj.okButtonText || "确定";
            var cancleButtonText = obj.cancleButtonText || "取消";
            var button = "<span style='display:inline-block; width: 50%;height: 50px;border-right: 1px solid #E1E1E1; box-sizing: border-box;text-align: center;line-height: 50px;font-size: 16px' id='cancle'>" + cancleButtonText + "</span><span style='display:inline-block; width: 50%;height: 50px;text-align: center;line-height: 50px; color: #0e90d2;font-size: 16px' id='confirm'>" + okButtonText + "</span>";
            break;
        case "toast":
            var button=""
            break;
        case "alert":
        default:
            var buttonText = obj.buttonText || "确定";
            var button = "<span style='display:inline-block; width: 100%;line-height: 50px;color: #0e90d2;font-size: 16px' id='alert'>"+ buttonText +"</span>";
            break;
    }
    button += "</div>";
    _html += button;
    _html += "</div>";
    _html +="</div>";
    $("body").append(_html);

    if (type == 'confirm') {
        var okCallback = obj.okCallback || undefined;
        var cancleCallback = obj.cancleCallback || undefined;
        $("#confirm").on("click", function() {
            $("#pop-div").remove();
            if(typeof okCallback == "function") {
                okCallback();
            }
        });
        $("#cancle").on("click", function() {
            $("#pop-div").remove();
            if(typeof cancleCallback == "function") {
                cancleCallback();
            }
        });
    } else if(type == 'alert') {
        var callback = obj.callback || undefined;
        $("#alert").click(function() {
            $("#pop-div").remove();
            if(typeof callback == 'function') {
                callback();
            }
        });
    } else if(type == 'prompt') {
      var okCallback = obj.okCallback || undefined;
        var cancleCallback = obj.cancleCallback || undefined;
        $("#confirm").on("click", function() {
          var val = $("#popup_prompt").val();
            $("#pop-div").remove();
            if(typeof okCallback == "function") {
                okCallback(val);
            }
        });
        $("#cancle").on("click", function() {
            $("#pop-div").remove();
            if(typeof cancleCallback == "function") {
                cancleCallback();
            }
        });
    }else if(type== 'toast'){
      var callback = obj.callback || undefined;
      setTimeout(function(){
        $("#pop-div").remove();
        if(typeof callback == 'function') {
          callback();
      }
    }, duration);
    }
},
  loading_alert_show: function (g) {
    var newDiv = '<div class="hintPage_container" id="LMark">' +
        '<div class="hintPage_content">' +
        '<div><img src="file:///E:/VUE/day01/images/loading.gif"></div>' +
        '<p class="hintPage_text">' + g + '</p>' +
        '</div></div>';
    $('body').append(newDiv);
  },
  loading_alert_hide: function () {
    $('.hintPage_container').remove();
  }
});