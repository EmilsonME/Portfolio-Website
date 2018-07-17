$(".navbar-nav .nav-link").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).addClass("active");
});


$(function(){

	var myForm = $('#myForm');
	var formMessage = $('#formMessage');

	$(myForm).submit(function(event){
		event.preventDefault();

		var formData = $(myForm).serialize();

		$.ajax({
			type: 'POST',
			url: $(myForm).attr('action'),
			data: formData
		})
		.done(function(response){
			$(formMessage).text(response);
			$(formMessage).removeClass('error');
			$(formMessage).addClass('success');


			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data){
			$(formMessage).removeClass('success');
			$(formMessage).addClass('error');

			if(data.responseText !== ''){
				$(formMessage).text(data.responseText);
			}else{
				$(formMessage).text("Ooops! Something went wrong");
			}
		});
	});

	if(name  === "" || namePattern.test(name)){
		document.getElementById('nameError').display = "inline-block";
		document.getElementById('nameError').innerHtml = "Invalid name";
		valid = false;
	}

});



