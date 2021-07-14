$('.btn-signup').click(function(event) {
  $('.phone').addClass('is-active');
  var packCurrent = $('.is-light').attr('id');
  $('#' + packCurrent).addClass('sub-active');
  $('.' + packCurrent).show();
});

$('.modal-background').click(function(event) {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
});

$('.delete').click(function(event) {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
});

$('.cancel').click(function(event) {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
  var packCurrent = $('.is-light').attr('id');
  $('#' + packCurrent).addClass('sub-active');
  $('.' + packCurrent).show();
});

$('.confirm').click(function(event) {
  $('.phone').removeClass('is-active');
  $('.otp').addClass('is-active');
  var packCurrent = $('.is-light').attr('id');
  $('#' + packCurrent).addClass('sub-active');
  $('.' + packCurrent).show();
});

$('.send').click(function(event) {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').addClass('is-active');
  var packCurrent = $('.is-light').attr('id');
  $('#' + packCurrent).addClass('sub-active');
  $('.' + packCurrent).show();
});
