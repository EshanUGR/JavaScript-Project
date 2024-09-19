const slider=document.querySelector('.slider');

const dotsContainer = document.querySelector(".dots-container");

const data=[
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
];

// async function fetchListofImages()
// {
//   try{
//     const response = await fetch(
//       "https://picsum.photos/v2/list?page=1&limit=5",
//       {
//         method: "GET"
//       }
//     );
// const imagesList=await response.json();
// if(imagesList && imagesList.length >0)displayImages(imagesList)
// console.log(data)
//   }

//   catch(error)
//   {

//   }
// }


function displayImages()

{
slider.innerHTML=data.map(item=>
{`
  <div class="slider>
  
  <img src=${item.download_url} alt=${item.id}/>
  
  
  </div>
  `

}
).join(" ");
dotsContainer.innerHTML=data.map((item,index)=>
{
  `
  <span class="dot" data-slide=${index}>
  
  </span>
  `
})

}

displayImages()