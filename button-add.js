var inp = document.getElementById('inp-number');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.addEventListener('click',function(){
  if(inp.value.match(/^[0-9]+$/) != null){
    inp.value = +inp.value + 1
  }
  else{
    alert("input number")
    inp.value = 1
  }
})

inp.onkeyup = function(){
  if(inp.value.match(/^[0-9]+$/) == null){
    alert("input number")
    inp.value = 1
  }
  else {

  }
}

minus.addEventListener('click',function(){
  if(inp.value > 1){
    inp.value = +inp.value - 1
  }
  else{
    // alert("input number")
    inp.value = 1
  }
})
