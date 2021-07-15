var Linkset = {
  setALink:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i+1;
    }
  }
}

var Bodyset = {
  setColor:function (color){
    document.querySelector('body').style.color=color;
  },
  setBackColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}

function nighthandle(tmp){
  if(tmp.value === '주간모드'){
    tmp.value = '야간모드';
    Bodyset.setColor('white');
    Bodyset.setBackColor('black');
    Linkset.setALink('red');
  }
  else{
    Bodyset.setColor('black');
    Bodyset.setBackColor('white');
    tmp.value = '주간모드';
    Linkset.setALink('black');
  }
}
