const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const data = document.getElementById('data');
const animated_bgs = document.getElementById('animated_bgs');
const animated_bg_texts = document.getElementById('animated_bg_texts');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =  '<img src="https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet constctetur adipisicing elit. dolore perferendis'
    profile_img.innerHTML = '<img src="https://i.ibb.co/tcrCy4j/Shakib.jpg" alt="">'
    name.innerHTML = 'SH Shakib'
    date.innerHTML = 'June 14, 2021'

    animated_bgs.forEach((bgs) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}