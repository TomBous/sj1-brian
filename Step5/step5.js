window.onload = () => {
 
    const items = document.getElementsByClassName("red-background");
    console.log(items.length);
    for(i=0 ; i < items.length; i++) {
        if (!(i % 2 === 0)) {
            items[i].style.backgroundColor = "green";
        }
    }

   };