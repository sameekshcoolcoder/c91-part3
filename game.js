
function addUser()
{
    n1=document.getElementById("player1_name_input").value;
    n2=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1", n1);
    localStorage.setItem("player2", n2);

    window.location = "game_page.html";
}