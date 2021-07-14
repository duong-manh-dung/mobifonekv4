$('.prepaid-pack, .postpaid-pack, .data-pack, .vas-pack, .flexible-pack').hide();

$('.button').click(function() {
  $('.button').removeClass('sub-active');
  const buttonCurrent = $(this).attr('id');
  $('#' + buttonCurrent).addClass('sub-active');
  showPack(buttonCurrent);
});

function showPack(className) {
  $('.hot-pack, .prepaid-pack, .postpaid-pack, .data-pack, .vas-pack, .flexible-pack').hide();
  $('.' + className).show();
}
