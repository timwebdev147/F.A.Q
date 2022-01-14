$(document).ready(function(){
    let toggle = $(".faq-toggle");
    let parent = toggle.parent()
    toggle.each(function(){
        let parent = $(this).parent()
        $(this).click(function(){
            parent.toggleClass('active')
        })
    });
  




})