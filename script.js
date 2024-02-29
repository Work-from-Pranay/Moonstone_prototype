const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,

  });

  Shery.makeMagnet("#navContent h5" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

// var tl = gsap.timeline()

// tl.to("#page1",{
//     y:"100vh",
//     scale:0.6,
//     duration:0
// })
// tl.to("#page1",{
//     y:"30vh",
//     duration:1,
//     delay:1
// })
// tl.to("#page1",{
//     y:"0vh",
//     rotate:360,
//     scale:1,
//     duration:0.7
// })