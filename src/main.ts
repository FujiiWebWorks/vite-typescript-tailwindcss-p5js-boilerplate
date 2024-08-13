import p5 from 'p5';
import { themeChange } from 'theme-change'
import './style.css';

themeChange()


new p5((p: p5) => {
  let w = window.innerWidth;
  let h = window.innerHeight;

  p.setup = () => {
    const parentElement = document.getElementById('app');
    if (parentElement) {
      p.createCanvas(w, h, parentElement);
    } else {
      p.createCanvas(w, h);
    }
    p.textFont('Noto Sans JP');
  };

  p.draw = () => {
    p.background(255, 255, 255);
    p.fill(0, 0, 0);
    p.noStroke();
    p.rect(20, 20, w - 40, h - 40);

    p.fill(255, 255, 255)
    p.textSize(12);
    p.textAlign(p.CENTER, p.CENTER);
    p.text('鋭意制作中', w / 2, h / 2);
  };

  window.onresize = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    p.resizeCanvas(w, h);
  };
});
