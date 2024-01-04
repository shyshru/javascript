const buttons = document.querySelector('.button')
//console.log(buttons)
const body = document.querySelector('body')
var buttonsArray = Array.from(buttons);
buttonsArray.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='grey'){
        body.style.backgroundColor = e.target.id;
    }

  })

})
