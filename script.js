function openLogin() {
    document.getElementById("loginBox").style.display = "block";
}

function closeLogin() {
    document.getElementById("loginBox").style.display = "none";
}
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

