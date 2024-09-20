const tabContainer = document.querySelector(".container");

const tabButton = document.querySelectorAll(".tab-button");

const tabContent = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (event) => {
  console.log(event.target.dataset);
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });

    event.target.classList.add("active");
  
  tabContent.forEach(content => {
    content.classList.remove("active");
  });

  const currentElement = document.getElementById(currentId);

  currentElement.classList.add("active");
}});
