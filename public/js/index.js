(function() {
  var KAPSHIN_SERVICE, generate_kapshin;

  KAPSHIN_SERVICE = 'http://kapshin.noiseandheat.com/kap';

  generate_kapshin = function(style, url, message) {
    var kapshin_url;
    url = encodeURIComponent(url);
    message = encodeURIComponent(message);
    kapshin_url = "" + KAPSHIN_SERVICE + "/" + style + "/" + url + "/" + message + ".png";
    return $("#kapshin-image").attr("src", kapshin_url);
  };

  $(document).ready(function() {
    return generate_kapshin("lol", $("#image-url").val(), $("#image-message").val());
  });

}).call(this);
