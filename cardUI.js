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

function open_modal() {
  open();
}

function close_modal() {
  close();
}

function open() {
  document.querySelector(".hide").classList.add("modal");
}

function close() {
  document.querySelector(".hide").classList.remove("modal");
}
