window.onload = function() {
    calculation($('.count'), 2.5, '≈ %s BYN'); 
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function calculation(item, number, templateString) {
    item.animate({
                counter: number
            }, {
                duration: 4000,
                step: function (step) {
        
                    $(this).text(templateString.replace('%s', parseFloat(step).toFixed(2)));
                }
    });
}
