

const hexBtn = document.querySelector(".hex-btn");
const hexColorContainer = document.querySelector(".hex-color-container");

const hexValue = document.querySelector(".hex-color-value");
const rgbValue=document.querySelector(".rgb-color-value");
hexBtn.addEventListener('click',()=>
{

  let charatcterSet='0123456789ABCDEF';
let hexColotOutput='';

for(let i=0,charatcerLength=charatcterSet.length;i<6;++i)
{
hexColotOutput+=charatcterSet.charAt(Math.floor(Math.random()*charatcerLength))
}

hexValue.innerHTML=`#${hexColotOutput}`
hexColorContainer.style.backgroundColor=`#${hexColotOutput}`;

hexBtn.style.backgroundColor=`#${hexColotOutput}`

});



//rgb color generator
const rgbBtn=document.querySelector('#rgb-btn');

const getRedInputRange=document.querySelector('#red');
const getGreenInputRange=document.querySelector('#green');
const getBlueInputRange=document.querySelector('#blue');

const rgbColorContainer = document.querySelector(".rgb-color-container");



const hexCopyBtn = document.querySelector(".hex-copy-color");

const rgbCopyBtn=document.querySelector('.rgb-copy-color')












rgbBtn.addEventListener('click',()=>
{
  let extractRedValue=getRedInputRange.value;

  let extractBlueValue=getBlueInputRange.value;

  let extractGreenValue=getGreenInputRange.value;


rgbValue.textContent = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;


  rgbColorContainer.style.backgroundColor=`rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;

  
})


function copyHexToClipBoard()
{
navigator.clipboard.writeText(hexValue.textContent);
alert('Hex Color is copied to clipboard');
}


rgbCopyBtn.addEventListener('click',copyRgbToClipBoard)


hexCopyBtn.addEventListener("click", copyHexToClipBoard);
function copyRgbToClipBoard() {

navigator.clipboard.writeText(rgbValue.textContent)
alert("Rgb Color is copied to clipboard");
navigator.clipboard.writeText(rgbValue.textContent)
}