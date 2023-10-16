const flipControl = () => {
  const changePhone = document.querySelector("#change-front");
  const changeBack = document.querySelector("#change-back");
  const card = document.querySelector("#card");

  changePhone.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
  changeBack.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
};

const sidebarControl = () => {
  const hamburger = document.querySelector("#hamburger");
  const close = document.querySelector("#close-icon");
  const sidebar = document.querySelector("#sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    console.log(getComputedStyle(sidebar).right);
  });
  close.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
};

sidebarControl();
flipControl();
