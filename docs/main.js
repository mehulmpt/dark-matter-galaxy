!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=0,r=0;const o=2e3,i=2,c=.0025,d=.02,a=.001,l=window.innerWidth,u=window.innerHeight;let s,f,m=c,g=!1;const p=[];let y=0;window.setup=function(){createCanvas(l,u),(s=createGraphics(l,u)).background(0,0,0,120),s.image(f,0,0,l,u);for(let e=0;e<o;e++)p[e]=noise(e)*Math.PI*6},window.draw=function(){image(s,0,0),stroke(255);let e=.07;for(let t=0;t<o;t++){let i;n=(noise(t)+.001)*u+y+e,g?(point(l/2+cos(p[t])*n,u/2+sin(p[t])*n/2.5),p[t]+=2*m):(i=9*noise(t%10)+r/n,point(l/2+cos(i)*n,u/2+sin(i)*n/2.5)),e+=400/o,y>.1&&(console.log("Resetting radius"),y=0),r+=m}fill(10),stroke(10),ellipse(l/2,u/2,50,50)},window.preload=function(){f=loadImage("/bg.jpg")},document.getElementById("dark-matter").addEventListener("change",function(e){(g=e.target.checked)?v.innerText="Dark Matter Present":v.innerText="Dark Matter Absent"},!1),document.getElementById("fast").addEventListener("click",b,!1),document.getElementById("medium").addEventListener("click",b,!1),document.getElementById("slow").addEventListener("click",b,!1),document.getElementById("stop").addEventListener("click",b,!1),document.getElementById("very-fast").addEventListener("click",b,!1);const v=document.getElementById("status");function b(e){const t=e.target.id;m="very-fast"===t?i:"fast"===t?d:"medium"===t?c:"slow"===t?a:0}}]);