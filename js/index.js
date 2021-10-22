// to clear generated css code
function clearcontent( ) {
    document.getElementById('generatedCss').innerHTML = "";
}
// to change height of the card
function changeHeight(val) {
    document.getElementById('create').style.height = val + 'px';
    localStorage.setItem('height', val);
}
// to change width of the card
function changeWidth(val) {
    document.getElementById('create').style.width = val + 'px';
    localStorage.setItem('width', val);
}
// to get shadow blur value from multi range
function blurValue(){
    return document.getElementById('shadowBlur').value;
}
// to change shadow color of the card
function shadowColor(){
    return document.getElementById('shadowColor').value;
}
// to change shadow value of the card
function changeShadowValue(){
    var shadowValue = document.getElementById('shadow').value;
    shadowValue++;
}
// to get radio button value of the card
function getRadioValue(){
  var radioVal =  document.querySelector('input[name="radioButton"]:checked').value;
  if(radioVal == 'outset'){
    radioVal = '';
    return radioVal;
  }else{
    return radioVal;
  }
}
// to get shadow x & y value
function shadowXYValue(){
  return document.getElementById('shadow').value;
}
// to get shadow spread value
function shadowSpread(){
  return document.getElementById('shadowSpread').value;
}
// to chabge border radius of the card
function changeRadius(val) {
    document.getElementById('create').style.borderRadius  = val + '%' ;
    localStorage.setItem('borderRadius', val);
}
// to change background color of the card
function changeBG(val) {
    document.getElementById('create').style.backgroundColor = val;
    localStorage.setItem('bgColor', val);
}
// to change border color of the card
function changeBorderColor(val) {
    document.getElementById('create').style.borderColor = val;
}
// to get border width of the card
function borderWidth() {
    return document.getElementById('border').value;
}
// to get border color of the card
function borderColor() {
    return document.getElementById('borderColor').value;
}
// to change border width of the card
function changeBorderWidth( ) {
   document.getElementById('create').style.border = borderWidth() +'px' +' solid' + ' '+borderColor();
   console.log(borderWidth() +'px' +' solid' + ' '+borderColor());
}
function changeShadowXY(val) {
    var radioInsetOutset = getRadioValue();
    var boxShadowData  =  document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();

}
function changeShadowSpread(val) {
   var radioInsetOutset = getRadioValue();
   var boxShadowData  =  document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + val + 'px' + ' ' + shadowColor();

}
function changeBlur(val) {
  var radioInsetOutset = getRadioValue();
  document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + val + 'px' + ' '+ shadowSpread() +'px' + ' ' +shadowColor();
 }

const cssBtn = document.getElementById('cssBtn');
cssBtn.addEventListener('click',generateCss);
function generateCss(){
    clearcontent();
    var height = document.getElementById('height').value;
    var width = document.getElementById('width').value;
    var boxShadow = document.getElementById('shadow').value;
    // var boxShadowColor = 'lightgray';
    var borderRadius = document.getElementById('radius').value;
    var boxShadowColor = document.getElementById('shadowColor').value;
    var bgColor = document.getElementById('bgColor').value;
    var borderColor = document.getElementById('borderColor').value;
    var borderWidth = document.getElementById('border').value;
    var boxShadowSpread = document.getElementById('shadowSpread').value;
    var radioButton = document.querySelector('input[name="radioButton"]:checked').value;
    if(radioButton == 'outset'){
      radioButton = ' ';
    }
    var arr = ['height', 'width', 'box-shadow', 'border-radius' ,'background-color','border'];
    var arrValue = [height+'px;', width+'px;', radioButton + ' '+ boxShadow+'px'+' '+boxShadow+'px'+' '+blurValue()+'px'+' '+shadowSpread()+'px'+' '+boxShadowColor+';', borderRadius+'%;' , bgColor+';',borderWidth +'px solid'+' '+borderColor+';'];
    var cont = document.getElementById('generatedCss');
    // create ul element and set the attributes.
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 2rem 1rem ; margin: 0;');
    ul.setAttribute('id', 'list');
    ul.setAttribute('class', 'h-auto');
    for (i = 0; i <= arr.length - 1; i++) {
        var li = document.createElement('li');     // create li element.
        li.innerHTML = arr[i] + ':' + arrValue[i] ;      // assigning text to li using array value.
        li.setAttribute('style', 'display: block;');    // remove the bullets.
        li.setAttribute('class', 'font-monospace');    // remove the bullets.
        ul.appendChild(li);     // append li to ul.
    }
    cont.appendChild(ul);
}
