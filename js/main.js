window.filters = {}

$('article').click(function (event) {
  if(!$(this).attr('open')) {
    event.stopPropagation()
    $('article').removeAttr('open')
    $(this).attr('open','')
  }
})

$(document).ready(function(){
  $(".fancybox").fancybox({
      width: 500
  })

  $('input[type="checkbox"]').change(function (event) {
    window.filters[$(this).attr("value")] = $(this).attr("checked") == "checked"
    refilter()
  })
})

function coolness_slider_change (event) {
  var output = window.coolness_value = event.target.value
  if(coolness_value == 1)
    output = "Any"
  else if (coolness_value == 10)
    output = "== 10"
  else
    output = "> " + coolness_value
  $('#coolness_slider_value').html(output)

  refilter()
}

function refilter () {
  $('article').each(function () {
  	if(parseInt($(this).attr('coolness')) < window.coolness_value ||
      filters[$(this).attr('type')] === false)
      $(this).hide()
    else
      $(this).show()
  })
}