let btnFlipp = document.getElementsByClassName('btn-flip-card');

for (let i = 0; i < btnFlipp.length; i++){
    let element = btnFlipp[i];
    element.addEventListener("click", function(elem){
        let parent = elem.target.closest(".flip-box")
        parent.classList.toggle("active")
    })
}


function TournPage() {
    // document.getElementsByClassName("flip-box")[0].classList.toggle("active");
    // document.getElementById("flip-box-front").style.transform.style = "preserve-3d";

    // document.getElementById("flip-box-back").style.transform = "rotateY(0deg)";
    // document.getElementById("flip-box-back").style.transform.style = "preserve-3d";

    }

//   .flip-box:hover .flip-box-front {
//     transform: rotateY(-180deg);
//     transform-style: preserve-3d;
//   }

//   .flip-box:hover .flip-box-back {
//     transform: rotateY(0deg);
//     transform-style: preserve-3d;
//   }