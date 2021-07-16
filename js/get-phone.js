$('.confirm').click(function() {
  var phoneNumber = $('#phone').val();
  $('.success').html('Chúc mừng số điện thoại ' + '<strong>+' + phoneNumber + '</strong>' + ' đã đăng kí thành công');
})
