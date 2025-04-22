
// // Simplyfying DOM with j.query
// for(let i = 0; i<=("button").length; i++){
// document.querySelectorAll("button")[i].addEventListener("click",function() {
//     document.querySelector("h1").style.color="blue"
// });
// }

// $(document).keypress(function(event) {
//     $("h1").html(event.key)
// });


// // Changing css propertird using j.query
// $("h1").click(function() {
//     $("button").css("color", "red")    
// })


// //Adding event listener using j.Query
// $(document).keypress(function(event){

//     $("h1").text(event.key)

// });



// //Another method of adding event listener j.Query
// $("h1").on("dblclick", function() {
//     $("h1").css("color", "purple")
// });


// //Removing class using j.Query
// $("h1").removeClass("margin-50")


// //Before, after, append and prepend methods in javaScript
// $("ul").before("Hello world!")
// $("p").after("<p>New Button</p>")
// $("h1").append("<button>New click Me app</button>")
// $("h1").prepend("<button>New click Me pre</button>")
// $("button").remove()


// $("h1").click(function() {
//     $("button").hide()   
// })

$("button").on("click", function() {
   $("h1").slideUp().slideDown().animate({opacity:0.5}); 
});