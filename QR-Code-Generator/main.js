
const qrContainer = document.querySelector(".qr-container");


const qrtTextInput=document.querySelector('.qr-text');

const generateQrBtn = document.querySelector(".generate-qr-code-btn");

const errorMessageText = document.querySelector(".error-message-text");

generateQrBtn.addEventListener('click',()=>
{
  ValidateInputField();

})

function ValidateInputField()

{
if(qrtTextInput.value.trim().length>0){
  generateQrCode();
}
else{
errorMessageText.textContent="Enter text and use some URL to generate QR code";
}

}


function generateQrCode()
{

  qrContainer.innerHTML="";
  new QRCode(qrContainer,{
text:qrtTextInput.value,
height:400,
width:400,
colorLight:'#fff',
colorDark:'#000'  });

qrtTextInput.value='';
errorMessageText.textContent='';
}

