//click nút đăng kí ở gói trả trước
$('.btn-hot').click(function() {
  $('.phone').addClass('is-active');
  $('#hot').addClass('sub-active');
  $('.hot').show();

  // Nhấn nút huỷ tại màn nhập số điện thoại
  $('.cancel').click(function() {
    $('.phone').removeClass('is-active');
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#hot').addClass('sub-active');
    $('.hot').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#hot').addClass('sub-active');
    $('.hot').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#hot').addClass('sub-active');
      $('.hot').show();
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
    $('.phone').removeClass('is-active');
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#prepaid').addClass('sub-active');
      $('.hoprepaidt').show();
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
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#postpaid').addClass('sub-active');
      $('.postpaid').show();
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
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#data').addClass('sub-active');
    $('.data').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#data').addClass('sub-active');
    $('.data').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#data').addClass('sub-active');
      $('.data').show();
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
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#vas').addClass('sub-active');
    $('.vas').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#vas').addClass('sub-active');
    $('.vas').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#vas').addClass('sub-active');
      $('.vas').show();
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
    // $('.otp').removeClass('is-active');
    // $('.noti').removeClass('is-active');
    $('#subsidy').addClass('sub-active');
    $('.subsidy').show();
  });

  // Nhấn nút xác nhận tại màn nhập số điện thoại
  $('.confirm').click(function() {
    $('.phone').removeClass('is-active');
    $('.noti').addClass('is-active');
    $('#subsidy').addClass('sub-active');
    $('.subsidy').show();
    $('.otp-text').hide();

    // Nhấn nút huỷ tại màn nhập OTP
    $('.cancel').click(function() {
      $('.noti').removeClass('is-active');
      // $('.otp').removeClass('is-active');
      // $('.noti').removeClass('is-active');
      $('#subsidy').addClass('sub-active');
      $('.subsidy').show();
    });
  });
});

$('.modal-background').click(function() {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
});

$('.delete').click(function() {
  $('.phone').removeClass('is-active');
  $('.otp').removeClass('is-active');
  $('.noti').removeClass('is-active');
});
