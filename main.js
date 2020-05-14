$(document).ready(() => {
  const charLimit = parseInt($(".characters").text());
  // count the remaining characters
  $(".postText").on("keyup", function(){
    let charInPost = $(this).val().length;
    let charCount = charLimit - charInPost;

    $(".characters").text(charCount);
    if(charCount < 0){
      $(".wordcount").css("color", "red");
    } else {
      $(".wordcount").css("color", "#9B9B9B");
    }
  })

  // click WORD COUNT or POST
  $(".button-holder").on("click", function(event){
    event.preventDefault();
    // text in textarea is blank
    $(".postText").val(""); 
    // reset characters remaining and color
    $(".characters").text(charLimit);
    $(".wordcount").css("color", "#9B9B9B");
  })

  // change background color when hover and release button +1
  $(".btn").on("mouseenter", function(){
  $(this).css("background-color", "rgba(117,255,66,0.2)");
  })

  $(".btn").on("mouseleave", function(){
  $(this).css("background-color", "transparent");
  })
});

