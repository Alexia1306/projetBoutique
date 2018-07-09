$(function() {

    function article() {
        for (var i = 0; i < catalog.length; i++) {
            var divRandom = $("<div>");
            var articleRandom = $("<article>");
            var h3Random = $("<h3>");
            var imgRandom = $("<img>");
            var pRandom = $("<p>");
            var buttonRandom = $("<button>");
            var iRandom = $("<i>");
            var spanRandom = $("<span>");
            var linkRandom = $("<a>");

            linkRandom.attr("href", "article.html?article_id="+i);
            linkRandom.html("voir article");
            h3Random.html(catalog[i].name);
            pRandom.html(catalog[i].description);
            spanRandom.html(catalog[i].price + "€");
            imgRandom.attr("src", catalog[i].pictures[1]);

            divRandom.addClass("col-lg-4");
            articleRandom.addClass("article");
            buttonRandom.addClass("toCart");
            iRandom.addClass("fas fa-shopping-cart");
            spanRandom.attr("id", "prix");
            linkRandom.attr("id", "Link");

            buttonRandom.append(iRandom);

            articleRandom.append(h3Random);
            articleRandom.append(imgRandom);
            articleRandom.append(pRandom);
            articleRandom.append(buttonRandom);
            articleRandom.append(spanRandom);

            divRandom.append(articleRandom);
            articleRandom.append(linkRandom);
            $("#cataRow").append(divRandom);

            buttonRandom.attr("id", i);

            // var catalogJson = JSON.stringify(catalog[i]);
            // sessionStorage.setItem("article" + [i], catalogJson);

        }
    }

    article();

    var objetToCart = {};
    $(".toCart").click(toJson);

    function toJson(){

        var i = this.id;
        var catalogJson = JSON.stringify(catalog[i]);
        sessionStorage.setItem("article" + [i], catalogJson);

        console.log(sessionStorage.getItem("article" + [i]));

    }

})
