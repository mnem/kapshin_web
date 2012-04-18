KAPSHIN_SERVICE = 'http://kapshin.noiseandheat.com/kap'

generate_kapshin = (style, url, message) ->
    url = encodeURIComponent url
    message = encodeURIComponent message
    kapshin_url = "#{KAPSHIN_SERVICE}/#{style}/#{url}/#{message}.png"
    $("#kapshin-image").attr("src", kapshin_url)

$(document).ready ->
    generate_kapshin "lol", $("#image-url").val(), $("#image-message").val()
