gsap.to("body",{
    backgroundColor:"black"
})
gsap.from("img",{
    y:40,
    opacity:0,
    duration:6,
    delay:5,
    stagger:1,
})
gsap.from("#btm-left",{
    y:20,
    opacity:0,
    duration:5,
    delay:9,
    stagger:1,
})
gsap.from(" body",{
    y:20,
    opacity:0,
    duration:2,
    delay:1,
    x:100,
    // rotate:100,
    borderRadius:"50%"

})
gsap.from("#stag",{
    y:20,
    opacity:0,
    duration:3,
    delay:2,
    stagger:1,
})
