$('.menu_btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
	$('.poloska1').toggleClass('poloska_active');
	$('.poloska2').toggleClass('poloska_active');
	$('.poloska3').toggleClass('poloska_active');
});
$('.menu_link_btn').on('click', function(e){
	e.preventDefault;
	$('.planet_list').toggleClass('planet_list_active');
	$('.arrow').toggleClass('arrow_active');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
});


   function countdown(dateEnd) {
      var timer, days, hours, minutes, seconds; // определение функции отсчета
    
      dateEnd = new Date(dateEnd); // присваивание значения 
      dateEnd = dateEnd.getTime();
    
      if (isNaN(dateEnd)) {
        return;
      }
    
      timer = setInterval(calculate, 1000); // повтор через 1 с
    
      function calculate() {  
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
          dateStart.getUTCMonth(),
          dateStart.getUTCDate(),
          dateStart.getUTCHours(),
          dateStart.getUTCMinutes(),
          dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
    
        if (timeRemaining >= 0) { // вывод
          days = parseInt(timeRemaining / 86400);
          timeRemaining = (timeRemaining % 86400);
          hours = parseInt(timeRemaining / 3600);
          timeRemaining = (timeRemaining % 3600);
          minutes = parseInt(timeRemaining / 60);
          timeRemaining = (timeRemaining % 60);
          seconds = parseInt(timeRemaining);
    
    
          document.getElementById("days").innerHTML = parseInt(days, 10);
          document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
          document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
          document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
          return;
        }
      }
    
      function display(days, hours, minutes, seconds) {}
    }
    
    var today = new Date();
    var weekday = today.getUTCDay(); // присваивание переменной weekday значение сегодняшнего дня (0-вск, и тд)

    if (weekday==5) { 
      countdown (''); // отсчет на 3 дня (???)
    }

    
    
   