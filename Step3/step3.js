
window.onload = () => {
    const liste = document.getElementById("todoList");
    const bouton = document.getElementsByTagName("button");

    bouton[0].onclick = function() {
        let newLi = document.createElement("li");
        newLi.innerText = "Nouvel item";
        liste.appendChild(newLi);
       };

   }