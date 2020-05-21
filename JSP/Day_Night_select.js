Day_img = document.querySelector('#img_backcolor');
Night_img = document.querySelector('#img_backcolor_2');
function Night_select(){
    Day_img.style.display = 'none';
    Night_img.style.display = 'block';
}
function Day_select(){
    Day_img.style.display = 'block';
    Night_img.style.display = 'none';
}