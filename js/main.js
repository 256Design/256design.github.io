$('article').click(function () {
  if($(this).attr('open')) {
  	// open big version
  }
  else {
    $('article').removeAttr('open')
    $(this).attr('open','')
  }
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
  	if(parseInt($(this).attr('coolness')) < window.coolness_value)
      $(this).hide()
    else
      $(this).show()
  })
}