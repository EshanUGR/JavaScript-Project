const openModelBtn = document.querySelector(".open-model");

const modelBackground = document.querySelector(".model-background");

const closeIcon = document.querySelector(".close-icon");

const closeBtn=document.querySelector('.close');


openModelBtn.addEventListener("click", () => {
  modelBackground.style.display = "block";
});

closeIcon.addEventListener('click',()=>
{
  modelBackground.style.display="none"
})


window.addEventListener('click',(event)=>
{
if(event.target===modelBackground)
{
modelBackground.style.display="none"
}
})

closeBtn.addEventListener('click',()=>
{
  modelBackground.style.display="none"
})
