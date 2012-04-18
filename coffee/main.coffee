KAPSHIN_SERVICE = 'http://kapshin.noiseandheat.com/kap'
OLD_SOURCE = ''

generate_kapshin = (style, url, message) ->
    url = encodeURIComponent url
    message = encodeURIComponent message
    kapshin_url = "#{KAPSHIN_SERVICE}/#{style}/#{url}/#{message}.png"
    $("#kapshin-image").attr("src", OLD_SOURCE)
    $("#kapshin-image").attr("src", kapshin_url)

kapshin = =>
    generate_kapshin "lol", $("#image-url").val(), $("#image-message").val()

$(document).ready ->
    OLD_SOURCE = $("#kapshin-image").attr("src")

    $("#image-url").blur -> kapshin()
    $("#image-message").blur -> kapshin()

    $("#image-url").keypress (event) -> kapshin() if event.charCode == 13
    $("#image-message").keypress (event) -> kapshin() if event.charCode == 13

    kapshin()
