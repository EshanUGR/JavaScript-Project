const changeThemeBtn = document.querySelector(".change-theme-btn");

const body=document.querySelector('body');

changeThemeBtn.addEventListener('click',()=>
{
  if(body.classList.contains('light'))
  {
    body.classList.remove('light')
    body.classList.add('dark');
    
  }
  else{
    body.classList.add("light");
    body.classList.remove("dark");
  }
  if(changeThemeBtn.classList.contains('light'))
  {
    changeThemeBtn.classList.remove('light')
    changeThemeBtn.classList.add('dark');

  }
  else{
    changeThemeBtn.classList.add("light");
    changeThemeBtn.classList.remove("dark");
  }
})

changeThemeBtn.addEventListener('click',()=>
{

  if(body.getAttribute('data-theme')==='dark')
  {
body.setAttribute("data-theme","blue");
  }
  else{

body.setAttribute("data-theme","dark");
  }
  
  // changeThemeBtn.setAttribute('data-theme','dark');

   

})