let imgs = [];
for (let i = 0; i < 37; i++){
    imgs.push("card"+i.toString()+".jpg");
}
console.log(imgs);
function random_img(){
    const index = Math.floor(Math.random() * imgs.length)+1;

    const box = document.getElementById("card_holder");
    box.innerHTML = "";

    const img = document.createElement("img");
    img.src = "./src/card"+index.toString()+".jpg";
    img.width = "320";
    img.height = "320";
    img.className = "card";

    box.appendChild(img);
    console.log("OK");
}