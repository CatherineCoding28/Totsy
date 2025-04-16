function fun_colors(name,pic,sound){
    document.getElementById("colors_pic").src=pic;
    document.getElementById("colors_name").innerHTML=name;
    document.getElementById("sound_colors").src=sound;
    document.getElementById("sound_colors").play();
}