let student_list_card_view = document.querySelector(".student_list_card_view");
let student_list_list_view = document.querySelector(".student_list_list_view");
let student_text = document.querySelector(".student_text");

function go_card_view() {    
    student_list_list_view.classList.add("d-none");
    student_list_card_view.classList.remove("d-none");
}

function go_list_view() {
    student_list_list_view.classList.remove("d-none");
    student_list_card_view.classList.add("d-none");
}