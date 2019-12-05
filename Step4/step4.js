window.onload = () => {
 
    const titre = document.querySelector("h1");
    
    titre.onmouseover = () => {
     titre.innerHTML = text1 + " " + text2 + " (" + (int1+int2) + ")";
    };

   };