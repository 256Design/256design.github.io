$(document).ready(function(){
  window.filters = {}

  window.coolness_slider_change = function (event) {
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

  window.refilter = function () {
    $('article').each(function () {
      if(parseInt($(this).attr('coolness')) < window.coolness_value ||
        filters[$(this).attr('type')] === false)
        $(this).hide()
      else
        $(this).show()
    })
  }

  $('article').click(function (event) {
    if(!$(this).attr('open')) {
      event.stopPropagation()
      event.preventDefault()
      $('article').removeAttr('open')
      $(this).attr('open','')
      location.hash = "portfolio"
    }
    else
      location.hash = $(this).find('a').attr('href')
  })

  $(".fancybox").fancybox({
    afterLoad : function() {
      _gaq.push(['_trackEvent', 'portfolio', 'show', this.href])
    },
    afterClose : function() {
      if(!window.justStarting)
        location.hash = "portfolio"
    }
  })

  $('input[type="checkbox"]').change(function (event) {
    window.filters[$(this).attr("value")] = $(this).attr("checked") == "checked"
    refilter()
  })

  // reopen project on refresh or redirect
  if(window.location.hash) {
    var toOpen = location.hash
    window.justStarting = true
    $("a[href='"+toOpen+"']").click()
    $("a[href='"+toOpen+"']").click()
    delete justStarting
  }

  $('.email_me').click(function () {
    window.location = "mailto:so" + "berstadt" + "@gm" + "ail.com"
  })
})