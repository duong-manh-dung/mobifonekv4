//click nút đăng kí ở gói trả trước
$('.btn-hot').click(function() {
  $('.phone').addClass('is-active');
  $('#hot').addClass('sub-active');
  $('.hot').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    $('#hot').addClass('sub-active');
    $('.hot').show();
    $('.otp-text').hide();
    $('.check-empty').hide();
    $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#hot').addClass('sub-active');
    $('.hot').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn chúc mừng
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#hot').addClass('sub-active');
      $('.hot').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click nút đăng kí ở gói trả trước
$('.btn-prepaid').click(function() {
  $('.phone').addClass('is-active');
  $('#prepaid').addClass('sub-active');
  $('.prepaid').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.otp-text').hide();
    $('.phone').removeClass('is-active');
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
    $('.check-empty').hide();
    $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
    $('.otp-text').hide();
    $('.check-empty').hide();

    // Nhấn nút huỷ tại màn chúc mừng
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#prepaid').addClass('sub-active');
      $('.hoprepaidt').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click nút đăng kí ở gói trả sau
$('.btn-postpaid').click(function() {
  $('.phone').addClass('is-active');
  $('#postpaid').addClass('sub-active');
  $('.postpaid').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    $('.otp-text').hide();
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
    $('.check-empty').hide();
    $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
    $('.otp-text').hide();
    $('.check-empty').hide();

    // Nhấn nút huỷ tại màn chúc mừng
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#postpaid').addClass('sub-active');
      $('.postpaid').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click nút đăng kí ở gói data
$('.btn-data').click(function() {
  $('.phone').addClass('is-active');
  $('#data').addClass('sub-active');
  $('.data').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    $('.otp-text').hide();
    $('#data').addClass('sub-active');
    $('.data').show();
    $('.check-empty').hide();
    $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#data').addClass('sub-active');
    $('.data').show();
    $('.otp-text').hide();
    $('.check-empty').hide();

    // Nhấn nút huỷ tại màn chúc mừng
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#data').addClass('sub-active');
      $('.data').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click nút đăng kí ở gói cam kết
$('.btn-vas').click(function() {
  $('.phone').addClass('is-active');
  $('#vas').addClass('sub-active');
  $('.vas').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    $('.otp-text').hide();
    $('#vas').addClass('sub-active');
    $('.vas').show();
    $('.check-empty').hide();
    $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#vas').addClass('sub-active');
    $('.vas').show();
    $('.otp-text').hide();
    $('.check-empty').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#vas').addClass('sub-active');
      $('.vas').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click nút đăng kí ở gói subsidy
$('.btn-subsidy').click(function() {
  $('.phone').addClass('is-active');
  $('#subsidy').addClass('sub-active');
  $('.subsidy').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    $('.otp-text').hide();
    $('#subsidy').addClass('sub-active');
    $('.subsidy').show();
    $('.check-empty').hide();
    $('.otp-notie').html('Nhập số điện thoại để nhận mã OTP đăng ký');
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#subsidy').addClass('sub-active');
    $('.subsidy').show();
    $('.otp-text').hide();
    $('.check-empty').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      $('#subsidy').addClass('sub-active');
      $('.subsidy').show();
      $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
    });
  });
});

//click vào màn hình bên ngoài popup
$('.modal-background').click(function() {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
  $('.otp-text').hide();
  $('.check-empty').hide();
  $('.otp-noti').html('Nhập số điện thoại để nhận mã OTP đăng ký');
});

//click vào nút x trên popup
$('.delete').click(function() {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
  $('.otp-text').hide();
  $('.check-empty').hide();
  $('.otp-notie').html('Nhập số điện thoại để nhận mã OTP đăng ký');
});
