'use strict';

import p5 from 'p5'

let r = 0
let t = 0
const particles = 2000

const width = window.innerWidth
const height = window.innerHeight

function setup() {
	createCanvas(width, height)
}

function draw() {
	clear()
	background(0, 0, 0)
	
	stroke(255)//, 0, 0)
	for (let i = 0; i < particles; i++) {
		let angle = noise(i % 64) * 9 + t / r
		point(width/2 + cos(angle) * r, height/2 + sin(angle) * r /2.5)
		r = noise(i+.1) * Math.min(width, height)
		t += 0.001
	}

	// black hole
	fill(10)
	stroke(10)
	const rad = 50
	ellipse(width/2, height/2, rad, rad)
}

window.setup = setup
window.draw = draw