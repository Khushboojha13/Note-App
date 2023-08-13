let create= document.querySelector(".createnote");
let main=document.querySelector(".main");

function createnotes(){
    let elem=document.createElement("textarea");
    elem.classList.add("creates");
    console.log(elem);
    document.body.appendChild(elem);
    elem.style.width="30%";
    elem.style.height="20vh";
    elem.style.backgroundColor="white";
    elem.style.marginBlock="2vh";
    elem.style.marginInline="30vw";
    elem.style.fontSize="1.2vmax";
    elem.style.fontWeight="500";
    
    let img=document.createElement("img");
    img.src="bin.png";
    img.classList.add("image");
    document.body.appendChild(img);
    img.style.width="3%";
    img.style.height="4vh";
    img.style.marginInline="56vw";

    //deleting the note 
    img.addEventListener("click",()=>{
        elem.style.display="none";
        img.style.display="none";
        img1.style.display="none";
    });


    let img1=document.createElement("img");
    img1.src="icons8-copy-64.png";
    img1.classList.add("image");
    document.body.appendChild(img1);
    img1.style.width="3%";
    img1.style.height="4vh";
    img1.style.marginInline="56vw";
    img1.style.marginTop="1.4vh";

    img1.addEventListener("click",()=>{
     //copying the text written in textarea
        elem.select();
        document.execCommand("copy");
    });
}

