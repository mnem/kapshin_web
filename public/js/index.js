(function() {
  var KAPSHIN_SERVICE, OLD_SOURCE, generate_kapshin, kapshin,
    _this = this;

  KAPSHIN_SERVICE = 'http://kapshin.noiseandheat.com/kap';

  OLD_SOURCE = '';

  generate_kapshin = function(style, url, message) {
    var kapshin_url;
    url = encodeURIComponent(url);
    message = encodeURIComponent(message);
    kapshin_url = "" + KAPSHIN_SERVICE + "/" + style + "/" + url + "/" + message + ".png";
    $("#kapshin-image").attr("src", OLD_SOURCE);
    return $("#kapshin-image").attr("src", kapshin_url);
  };

  kapshin = function() {
    return generate_kapshin("lol", $("#image-url").val(), $("#image-message").val());
  };

  $(document).ready(function() {
    OLD_SOURCE = $("#kapshin-image").attr("src");
    $("#image-url").blur(function() {
      return kapshin();
    });
    $("#image-message").blur(function() {
      return kapshin();
    });
    $("#image-url").keypress(function(event) {
      if (event.charCode === 13) return kapshin();
    });
    $("#image-message").keypress(function(event) {
      if (event.charCode === 13) return kapshin();
    });
    return kapshin();
  });

}).call(this);
