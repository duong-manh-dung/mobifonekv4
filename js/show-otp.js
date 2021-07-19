$('.otp-text').hide();
$('.check-empty').hide();
$('.otp-btn').click(function() {
  if($('#phone').val() === "") {
    $('.otp-text').hide();
    $('.check-empty').html('Bạn cần nhập số điện thoại để nhận mã OTP').show().css('color', '#F54748');;
  }
  else {
    $('.check-empty').hide();
    $('.otp-text').show();
    $('.otp-noti').html('Mã OTP đã gửi xuống SĐT của bạn. Nhập mã để tiếp tục đăng ký');
  }
});
