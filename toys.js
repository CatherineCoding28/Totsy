function fun_toys(name,pic,sound){
    document.getElementById("toys_pic").src=pic;
    document.getElementById("toys_name").innerHTML=name;
    document.getElementById("sound_toys").src=sound;
    document.getElementById("sound_toys").play();
}