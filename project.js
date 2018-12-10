$(document).ready(() => {

  $(window).scroll(function() {
	if ($(document).scrollTop() > 10) {
      $('#header').addClass('myHeader');
      $('#myNav').addClass('myNavBar');
    } else {
      $('#header').removeClass('myHeader');
      $('#myNav').removeClass('myNavBar');
    }
  });


  $('#bookTable').on('click', () => {
    $('#divNumber').show();
    $('#resNumber').text(parseInt($('#resNumber').text()) + 1);
  });

  









});
