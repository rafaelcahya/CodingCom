const particlesConfig = {
    "particles": {
        "number": {
            "value": 50,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": "#3b72ff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            }
            // "image": {
            // "src": "img/github.svg",
            // "width": 100,
            // "height": 100
            // }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#3b72ff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
            }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
            "enable": true,
            "mode": "bubble"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 500,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 500,
            "size": 5,
            "duration": 2,
            "opacity": 8,
            "speed": 10
            },
            "repulse": {
            "distance": 200,
            "duration": 0.4
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": true
};

export default particlesConfig;