const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer: "Accordion components are user interface elements...",
  },
  {
    id: "2",
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "3",
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language used in web development.",
  },
];

// Select the accordion wrapper
const accordionWrapper = document.querySelector(".accordion");

// Function to dynamically generate the accordion items from the data
function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (item) => `
    <div class="accordion_item">
      <div class="accordion_title">
        <h3>${item.question}</h3>
        <i class="fa-solid fa-arrow-up"></i>
      </div>
      <div class="accordion_content">
        <p class="word">${item.answer}</p>
      </div>
    </div>
  `
    )
    .join(""); // Ensure to join the array of strings properly
}
createAccordionData();

// Select all accordion titles and the words (answers)
const getAccodiontitle = document.querySelectorAll(".accordion_title");
const selectWord = document.querySelectorAll(".word");

// Toggle the accordion titles when clicked
getAccodiontitle.forEach((current) => {
  current.addEventListener("click", () => {
    if (current.classList.contains("active")) {
      current.classList.remove("active");
      current.nextElementSibling.style.display = "none"; // Hide content when inactive
    } else {
      // Remove active class from all accordion titles
      document
        .querySelectorAll(".accordion_title.active")
        .forEach((activeItem) => {
          activeItem.classList.remove("active");
          activeItem.nextElementSibling.style.display = "none"; // Hide content
        });
      // Add active class to the clicked title
      current.classList.add("active");
      current.nextElementSibling.style.display = "block"; // Show content for active title
    }
  });
});

// Toggle the word content (though it may not be necessary if handled above)
selectWord.forEach((word) => {
  word.addEventListener("click", () => {
    if (word.classList.contains("acti")) {
      word.classList.remove("acti");
    } else {
      document.querySelectorAll(".word.acti").forEach((activeWord) => {
        activeWord.classList.remove("acti");
      });
      word.classList.add("acti");
    }
  });
});
