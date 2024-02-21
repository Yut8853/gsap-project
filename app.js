import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.to(".box1,.box2", {
    x:400,
    rotation:360,
    background:'yellow',
    duration:3,
    stagger:1,
    repeat:-1,
    yoyo:true,
    ease:"bounce",
  });
  gsap.to(".box3,.box4", {
    x:400,
    rotation:360,
    background:'yellow',
    duration:3,
    stagger:1,
    delay:4
  });