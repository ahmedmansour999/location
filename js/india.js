// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const gateLeft = document.querySelector('#gate_left');
const gateRight = document.querySelector('#gate_right');
const cloud1 = document.querySelector('#clouds_1');
const cloud2 = document.querySelector('#clouds_2');
const text = document.querySelector('#text');
const man = document.querySelector('#man');

window.addEventListener('scroll',()=>{
    let value = scrollY;
    gateLeft.style.left = `-${value/.7}px`
    cloud2.style.left = `-${value*2}px`
    gateRight.style.transform = `translateX(${value / 0.7}px)`;
    cloud1.style.left = `${value*2}px`
    text.style.bottom = `-${value}px`;
    man.style.height = `${window.innerHeight - value}px`
})