function scrollTopTop(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",(function(){document.querySelector(".up").classList.toggle("activity",window.scrollY>500)})),$(document).ready((function(){$("#toup").on("click","a",(function(o){o.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},500)}))}));
//# sourceMappingURL=index.4b5846db.js.map