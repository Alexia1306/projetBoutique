$(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var i = GET_PARAM("article_id");
    var myProduct = catalog[i];

    $("#H3").html(catalog[i].name);
    $("#P").html(catalog[i].description);
    $("#Price").html(catalog[i].price + "€");
    $("#IMG").attr("src", catalog[i].pictures[1]);
})
