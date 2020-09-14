

  $(document).ready(function(){
    $(".button").on("click", function(){
        var input= $("input:text").val();
        $("input:text").val("");
        $("ul").append("<li><span>X </span>"+input+ "<p> EDIT</p> </li>");

    });
  });

  $("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});