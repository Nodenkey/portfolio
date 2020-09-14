import {gsap, ScrollTrigger, Power3} from "gsap/all";

export const animateTitle = (element) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '100% bottom'
        },
        y: 100,
        opacity: 0,
        duration: 2,
        ease: Power3.easeOut
    })
}
