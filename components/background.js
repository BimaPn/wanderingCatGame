import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty
  } from "./updateCustomProperties.js"

const SPEED_BG1 = 0.006;
const SPEED_BG2 = 0.02;
const SPEED_BG3 = 0.03;

const backGroundElement1 = document.querySelectorAll("[data-background1]");
const backGroundElement2 = document.querySelectorAll("[data-background2]");
const backGroundElement3 = document.querySelectorAll("[data-background3]");

export const setupBackGround = () => {
  for(let i = 0;i < 2;i++) {
    setCustomProperty(backGroundElement1[i],"--left",i*100);
    setCustomProperty(backGroundElement2[i],"--left",i*100);
    setCustomProperty(backGroundElement3[i],"--left",i*100);
  }
}

export const updateBackGround = (delta, speedScale) => {
  backGroundElement1.forEach(backGround => {
    incrementCustomProperty(backGround,"--left",delta * speedScale * SPEED_BG1 * -1);
    if(getCustomProperty(backGround,"--left") <= -100) {
      incrementCustomProperty(backGround,"--left",200);
    }
  });
  backGroundElement2.forEach(backGround => {
    incrementCustomProperty(backGround,"--left",delta * speedScale * SPEED_BG2 * -1);
    if(getCustomProperty(backGround,"--left") <= -100) {
      incrementCustomProperty(backGround,"--left",200);
    }
  });
  backGroundElement3.forEach(backGround => {
    incrementCustomProperty(backGround,"--left",delta * speedScale * SPEED_BG3 * -1);
    if(getCustomProperty(backGround,"--left") <= -100) {
      incrementCustomProperty(backGround,"--left",200);
    }
  })
}

