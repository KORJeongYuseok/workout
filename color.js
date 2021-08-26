var Body = {
  setColor: function bodySetColor(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color', color)
  },
  setBackgroundColor: function bodySetBackgroundColor(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color)
  }
}

var Links = {
  setColor: function linksSetColor(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //  alist[i].style.color=color;
    //  i = i+ 1
    // }
    $('a').css('color', color)
  }

}

function nightDayHandler(self){
var target = document.querySelector('body')
if(self.value === 'night') {
  Body.setBackgroundColor('black')
  Body.setColor('white');
  self.value='day'
  Links.setColor('white')
} else {
  Body.setBackgroundColor('white')
  Body.setColor('black')
  self.value='night'
  Links.setColor('black')
}
}

function hideShowDiv(part){
  // var target = document.querySelector(part)
  // if(target.style.display === 'none'){
  // target.style.display='block'
  // } else {
  // target.style.display='none'
  // }
  $(part).toggle()
}
