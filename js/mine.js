function thankyou_message() {
    var form = document.querySelector('.gform');
    var thankyouMessage = document.querySelector('.thankyou_message');

    if (form && form.value.trim() !== "") {
        thankyouMessage.style.display = "block";
    } else {
        thankyouMessage.style.display = "none";
    }
}
