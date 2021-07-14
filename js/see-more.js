$('.see-more').hide();
$('#up').hide();

//get id of button is active now
const buttonCurrent = $('.sub-active').attr('id');

//show hot see more content
$('#down').click(function() {
  $('#' + buttonCurrent).addClass('sub-active');
  $('.' + buttonCurrent).show();
  $('.see-more').show();
  $('#down').hide();
  $('#up').show();
});

//hide hot see more content
$('#up').click(function() {
  $('#' + buttonCurrent).addClass('sub-active');
  $('.' + buttonCurrent).show();
  $('.see-more').hide();
  $('#down').show();
  $('#up').hide();
})

// =================================

//click prepaid package
$('#prepaid').click(function() {
  $('.prepaid-see-more').hide();
  $('#prepaid-up').hide();

  //show prepaid see more content
  $('#prepaid-down').click(function() {
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
    $('.prepaid-see-more').show();
    $('#prepaid-down').hide();
    $('#prepaid-up').show();
  });

  //hide prepaid see more content
  $('#prepaid-up').click(function() {
    $('#prepaid').addClass('sub-active');
    $('.prepaid').show();
    $('.prepaid-see-more').hide();
    $('#prepaid-down').show();
    $('#prepaid-up').hide();
  })
});

// =================================

//click postpaid package
$('#postpaid').click(function() {
  $('.postpaid-see-more').hide();
  $('#postpaid-up').hide();

  //show prepaid see more content
  $('#postpaid-down').click(function() {
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
    $('.postpaid-see-more').show();
    $('#postpaid-down').hide();
    $('#postpaid-up').show();
  });

  //hide prepaid see more content
  $('#postpaid-up').click(function() {
    $('#postpaid').addClass('sub-active');
    $('.postpaid').show();
    $('.postpaid-see-more').hide();
    $('#postpaid-down').show();
    $('#postpaid-up').hide();
  })
});

// =================================

//click vas package
$('#vas').click(function() {
  $('.vas-see-more').hide();
  $('#vas-up').hide();

  //show prepaid see more content
  $('#vas-down').click(function() {
    $('#vas').addClass('sub-active');
    $('.vas').show();
    $('.vas-see-more').show();
    $('#vas-down').hide();
    $('#vas-up').show();
  });

  //hide prepaid see more content
  $('#vas-up').click(function() {
    $('#vas').addClass('sub-active');
    $('.vas').show();
    $('.vas-see-more').hide();
    $('#vas-down').show();
    $('#vas-up').hide();
  })
});
