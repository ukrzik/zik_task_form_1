function validateComments(input) {
    if (input.value.length < 20) {
        input.setCustomValidity("Дайте більш розширену відповідь.");
    }
    else {
        // Длина комментария отвечает требованию,
        // поэтому очищаем сообщение об ошибке
        input.setCustomValidity("");
    }
}
// function outputUpdate(vol) {
//     document.querySelector('#Вік').value = vol;
// }