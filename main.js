function revealFunction() {
    // first we need to initialize our scroll reveal

    window.sr = ScrollReveal({ duration: 1350, distance: '250px', easing: 'ease-out' });

    sr.reveal(".reveal-left", {origin: "left", reset: true });
    sr.reveal('.choppy', { easing: 'cubic-bezier(.96,0,.69,.98)' });

    sr.reveal(".reveal-top", {origin: "top", reset: false});
    sr.reveal(".reveal-bottom", {origin: "bottom", reset: false});
    sr.reveal(".reveal-right", {origin: "right", reset: false});

    sr.reveal(".reveal-reset-true", {origin: "bottom", reset: true});
    sr.reveal(".reveal-rotate", {origin: "bottom", rotate: {x:1000, z:1000}, reset: true });

}


window.addEventListener('load', () => {
    revealFunction()
})