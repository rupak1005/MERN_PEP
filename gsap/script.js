t1=gsap.timeline();

t1.to("#div1",{
    x:700,
    duration:2,
    rotate:360,
    backgroundColor:"red",
    delay:1,
})
t1.to("#div2",{
    x:700,
    duration:2,
    rotate:360,
    backgroundColor:"purple",
    delay:1,
})