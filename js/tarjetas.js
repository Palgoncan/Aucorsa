const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const innerCard = card.querySelector(".flip-card-inner");

    innerCard.classList.toggle("rotate");
  });
});
