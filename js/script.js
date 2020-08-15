
/*خاص بزر ال read more*/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
  
  
  
  
  
  
  
  
  
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
}
function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
}
function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "عرض المزيد ";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "عرض اقل";
    moreText.style.display = "inline";
  }
  
  
  
  
  
}


$(function(){
	
	 //featured work shuflle
    $('.gallery ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
	 
	    //console.log($(this).data('class'));
		if($(this).data('class')==='all'){
			$('.shuffle-imgs .col-sm').css('opacity',1);
		}
		else{
		
			$('.shuffle-imgs .col-sm').css('opacity','.09');
			$($(this).data('class')).parent().css('opacity',1);
			
		}
			
		});
			 $(window).scroll(function(){
		 
		 var navbar=$('.navbar');
		 if($(window).scrollTop() >= navbar.height()){
			 
			 navbar.addClass('scrolled');
		 }
		 else{
			 
			 navbar.removeClass('scrolled');
			 
		 }
	 
	 });
	 //show color option onclick gear icon
		$(".gear-check").click(function(){
			$(".color-option").fadeToggle();
			
		});
		//change theme color on click from gear icon
		
		var colorLi=$(".color-option ul li");
		
		colorLi
			.eq(0).css("backgroundColor","#f16930").end()
			.eq(1).css("backgroundColor","#E426D5").end()
			.eq(2).css("backgroundColor","gray").end()
			.eq(3).css("backgroundColor","yellow").end()
			.eq(4).css("backgroundColor","green");

        colorLi.click(function()
        {
	 
	    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
		
		});
	
		
	
});