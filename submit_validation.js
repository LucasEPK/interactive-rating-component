function submit_validation(button_pressed) {
    // button pressed is document.querySelector('input[name="rating"]:checked');

    event.preventDefault()

    if (button_pressed != null) {
        //code for when a rating was pressed
        document.querySelector('.rating_card').style.display = "none";
        document.querySelector('.thank_u_card').style.display = "flex";
        document.querySelector('.orange_txt').innerHTML = "You selected "+button_pressed.value+" out of 5";
    } else {
        //code for when a rating wasn't pressed
        alert('No rating pressed');
    }
}