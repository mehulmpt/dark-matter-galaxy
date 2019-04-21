'use strict';

import p5 from 'p5'

let r = 0
let t = 0
const particles = 2000

const VERY_FAST = 2
const MEDIUM_SPEED = 0.0025
const FAST_SPEED = 0.02
const SLOW_SPEED = 0.001

const width = window.innerWidth
const height = window.innerHeight

let tAmount = MEDIUM_SPEED
let pg
let img

let darkMatter = false

function preload() {
	img = loadImage(`/bg.jpg`);
} 

function setup() {
	createCanvas(width, height)
	pg = createGraphics(width, height)
	pg.background(0,0,0,120)
	pg.image(img, 0, 0, width, height)

	for(let i=0;i<particles;i++) {
		angles[i] = noise(i) * Math.PI * 6
	}
}

const angles = []
let radiusInc = 0

function draw() {
	//clear()
	image(pg, 0, 0)
	//background(0, 0, 0)
	
	stroke(255)//, 0, 0)

	let delta = 0.07

	for (let i = 0; i < particles; i++) {
		let angle
		r = (noise(i) + 0.001) * height + radiusInc + delta //noise(i+.1) * Math.min(width, height)

		if(darkMatter) {
			point(width/2 + cos(angles[i]) * r, height/2 + sin(angles[i]) * r /2.5)
			angles[i] += tAmount*2
		} else {
			angle = noise(i % 10) * 9 + t / r
			point(width/2 + cos(angle) * r, height/2 + sin(angle) * r /2.5)
		}

		//radiusInc += 0.00001
		delta += 400/particles

		if(radiusInc > 0.1) {
			console.log(`Resetting radius`)
			radiusInc = 0
		}
		t += tAmount
	}

	// black hole
	fill(10)
	stroke(10)
	const rad = 50
	ellipse(width/2, height/2, rad, rad)
}


window.setup = setup
window.draw = draw
window.preload = preload

document.getElementById('dark-matter').addEventListener('change', setDM, false)
document.getElementById('fast').addEventListener('click', setSpeed, false)
document.getElementById('medium').addEventListener('click', setSpeed, false)
document.getElementById('slow').addEventListener('click', setSpeed, false)
document.getElementById('stop').addEventListener('click', setSpeed, false)
document.getElementById('very-fast').addEventListener('click', setSpeed, false)

const status = document.getElementById('status')

function setDM(e) {
	darkMatter = e.target.checked
	if(darkMatter) {
		status.innerText = 'Dark Matter Present'
	} else {
		status.innerText = 'Dark Matter Absent'
	}
}

function setSpeed(e) {
	const id = e.target.id
	if(id === 'very-fast') {
		tAmount = VERY_FAST
	} else if(id === 'fast') {
		tAmount = FAST_SPEED
	} else if(id === 'medium') {
		tAmount = MEDIUM_SPEED
	} else if(id === 'slow') {
		tAmount = SLOW_SPEED
	} else {
		tAmount = 0
	}
}