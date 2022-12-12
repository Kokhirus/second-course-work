let user_points_r = sessionStorage.getItem("points_r");
let user_points_br = sessionStorage.getItem("points_br");
let user_points_bl = sessionStorage.getItem("points_bl");

document.querySelector("span.points_r").innerHTML = user_points_r;
document.querySelector("span.points_br").innerHTML = user_points_br;
document.querySelector("span.points_bl").innerHTML = user_points_bl;