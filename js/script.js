document.addEventListener("DOMContentLoaded", () => {
tsParticles.load("tsparticles", {
fullScreen: { enable: false },
background: { color: "#111" },
particles: {
number: { value: 50, density: { enable: true, value_area: 800 } },
color: { value: "#00ffc8" },
shape: { type: "circle" },
opacity: {
    value: 0.8,
    random: true,
    anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
},
size: {
    value: 2,
    random: true,
    anim: { enable: true, speed: 3, size_min: 0.3, sync: false }
},
move: {
    enable: true,
    speed: 0.6,
    direction: "none",
    random: true,
    straight: false,
    outModes: { default: "bounce" }
}
},
interactivity: {
events: {
    onHover: { enable: true, mode: "repulse" },
    onClick: { enable: true, mode: "push" },
    resize: true
},
modes: {
    repulse: { distance: 100, duration: 0.4 },
    push: { quantity: 2 }
}
},
detectRetina: true
});
});
