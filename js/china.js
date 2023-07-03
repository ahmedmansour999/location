// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const chinaLeft = document.querySelector('#china_left');
const chinaRight = document.querySelector('#china_right');

const text = document.querySelector('#text');
const man = document.querySelector('#man');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    chinaLeft.style.left = `-${value / 0.7}px`;
    chinaRight.style.transform = `translateX(${value / 0.7}px)`;
    text.style.bottom = `-${value}px`;
    man.style.height = `${window.innerHeight - value}px`;
  });
      