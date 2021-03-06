var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var can = document.querySelector('canvas')
var renderer = new THREE.WebGLRenderer({canvas: can, antialias: true, physicallyCorrectLights: true})
renderer.setSize(window.innerWidth, window.innerHeight)

var animate = function () {
    requestAnimationFrame( animate );

    animateq1()
    animateq3()
    animateq5()
    animateq6()

    renderer.render( scene, camera );
};

let params = {
    q1: {
        rep: 2
    },
    q2: {
        rep: 2
    },
    q3: {
        amp: 15,
        freq: 60
    },
    q4: {
        rep1: 0,
        rep2: 0
    },
    q5: {
        rep: 1
    },
    q6: {
        rep: 2
    },
    q7: {
        rep: 0
    },
}

let gui = new dat.GUI()
var q1 = gui.addFolder('Question 1')
var q2 = gui.addFolder('Question 2')
var q3 = gui.addFolder('Question 3')
var q4 = gui.addFolder('Question 4')
var q5 = gui.addFolder('Question 5')
var q6 = gui.addFolder('Question 6')
var q7 = gui.addFolder('Question 7')
q1.open()
q2.open()
q3.open()
q4.open()
q5.open()
q6.open()
q7.open()
let controllerq1 = q1.add(params.q1, 'rep', 1, 15).step(1);
let controllerq2 = q2.add(params.q2, 'rep', 2, 15).step(1);
let controllerq31 = q3.add(params.q3, 'amp', 0, 100)
let controllerq32 = q3.add(params.q3, 'freq', 1, 100)
q4.add(params.q4, 'rep1', 0, 10)
q4.add(params.q4, 'rep2', 0, 10)
let controllerq5 = q5.add(params.q5, 'rep', 1, 15)
let controllerq6 = q6.add(params.q6, 'rep', 0, 4).step(1)
q7.add(params.q7, 'rep', 0, 10)

function rand(min, max) {
    min = min;
    max = max;
    return Math.random() * (max - min +1) + min;
  }