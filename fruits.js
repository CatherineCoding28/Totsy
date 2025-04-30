function fun_fruits(name,pic,sound){
    document.getElementById("fruits_pic").src=pic;
    document.getElementById("fruits_name").innerHTML=name;
    document.getElementById("sound_fruits").src=sound;
    document.getElementById("sound_fruits").play();
}

function back(){
    window.location = "index.html";
}
