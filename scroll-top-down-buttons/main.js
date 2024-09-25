
const userList = document.querySelector(".users-list");

const loader = document.querySelector(".loader");
const scrolToTop = document.querySelector(".scroll-to-Top");
const scrolToBottom = document.querySelector(".scroll-to_Bottom");
function showLoader()
{
loader.classList.add('show-loader')
userList.classList.add("hide-users-list")
}

function removeLoader()
{
loader.classList.remove("show-loader");
userList.classList.remove("hide-users-list");
}
async function fetchUserList()
{
  showLoader();

  const response = await fetch("https://dummyjson.com/users?limit=100",{
    method:'GET'
  });
const result=await response.json();

if(result && result.users)displayUserList(result.users)




  removeLoader();
}

function displayUserList(getUsers)
{
console.log(getUsers)

userList.innerHTML=getUsers.map(userItem=>
`
<li>
${userItem.firstName}
${userItem.lastName}</p>

</li>
`
).join(" ")

}

fetchUserList();

scrolToTop.addEventListener('click',()=>{
window.scrollTo({
top:0,
behavior:'smooth'
});

})

scrolToBottom.addEventListener('click',()=>
{
  console.log(document.body.scrollHeight)

  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:'smooth'
  })
})