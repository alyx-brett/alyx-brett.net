function highlightLinks(){
    $("a").each(function(){$(this).toggleClass(
	'activeLink', $(this).attr("href") == window.location.pathname
    );});
}

function setupHeaderScrolling(){
  $('header').animate({top: '0'},300);
  $('#content>*').scroll(function(e){
    var header = $('header');
    var body = $('#content>*');
    var offset = body.scrollTop();
    var top = Math.min(offset, $('header h1').outerHeight(true));
    header.css('top', -top);
  });
}

function setupLinks(){
    $(".expanded:not(.noShrink)").removeClass("expanded");

    $(".blog-post").off("click").click(function(e){
        if(!$(e.target).is(".expander")) $(this).addClass("expanded");
    });

    $(".expander").off("click").click(function(e){
        $(this).parent().toggleClass("expanded");
    });

    $("a.internal:not(.activeLink)").off("click").click(function(e){
        var href = $(this).attr('href');
        navigateToLink(href, function(){history.pushState(null, null, href)});
        e.preventDefault();
    });

    $("a.activeLink").off("click").click(function(e){
        e.preventDefault();
    });
}
