const student_list_card_view = document.querySelector(
  ".student_list_card_view"
);
const student_list_list_view = document.querySelector(
  ".student_list_list_view"
);

const detail_bg = document.querySelector(".detail_bg");
const detail = document.querySelector(".detail");
const student = document.querySelector(".student");

function go_card_view() {
  student_list_list_view.classList.add("d-none");
  student_list_card_view.classList.remove("d-none");
}

function go_list_view() {
  student_list_list_view.classList.remove("d-none");
  student_list_card_view.classList.add("d-none");
}

// const modal_wrap = document.querySelector(".modal_wrap");
// const modal_background = document.querySelector(".modal_background");

// //Show modal
// document.querySelector(".student").addEventListener("click", () => {
//   open();
// });

// //Hide modal
// document.querySelector(".modal_close").addEventListener("click", () => {
//   close();
// });

// //Hide modal
// window.addEventListener("click", (e) => {
//   e.target === modal_background ? close() : false;
// });
// function close() {
//   modal_wrap.classList.remove("show-modal");
//   modal_background.classList.remove("show-modal");
// }
// function open() {
//   modal_wrap.classList.add("show-modal");
//   modal_background.classList.add("show-modal");
// }
