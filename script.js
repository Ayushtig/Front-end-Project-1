
function init() {
  gsap.registerPlugin(ScrollTrigger);
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init()


document.addEventListener("mousemove",function(dets){
  document.querySelector("#cursor").style.left=`${dets.x + 38}px`
  document.querySelector("#cursor").style.top=`${dets.y + 20}px`
})
var all = document.querySelectorAll(".box")
all.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    document.querySelector("#cursor img").style.display="initial";
    document.querySelector("#cursor").style.scale = 3
    document.querySelector("#cursor").style.backgroundColor = "#151414"
 })
  e.addEventListener("mouseleave",function(){
    document.querySelector("#cursor img").style.display="none";
    document.querySelector("#cursor").style.scale = 0
    document.querySelector("#cursor").style.backgroundColor = "transparent"
  })
})

var loader=gsap.timeline();
loader.to("#loader #img1",{
  opacity:1,
  duration:0.001
})
.to("#loader #img1",{
  opacity:0
})
.to("#loader #img2",{
  opacity:1,
  duration:0.001
})
.to("#loader #img2",{
  opacity:0,
})
.to("#loader #img3",{
  opacity:1,
  duration:0.001
})
.to("#loader #img3",{
  opacity:0,
})
.to("#loader #img4",{
  opacity:1,
  duration:0.001
})
.to("#loader #img4",{
  opacity:0,
})
.to("#loader #img5",{
  opacity:1,
  duration:0.001
})
.to("#loader #img5",{
  opacity:0,
})
.to("#loader #img6",{
  opacity:1,
  duration:0.001
})
.to("#loader #img6",{
  opacity:0,
})
.to("#loader #img7",{
  opacity:1,
  duration:0.001
})
.to("#loader #img7",{
  opacity:0,
})
.to("#loader #img8",{
  opacity:1,
  duration:0.001
})
.to("#loader #img8",{
  opacity:0,
})
.to("#loader #img9",{
  opacity:1,
  duration:0.001
})
.to("#loader #img9",{
  opacity:0,
})
.to("#loader #img10",{
  opacity:1,
  duration:0.001
})
.to("#loader #img10",{
  opacity:0,
})
.to("#loader #img11",{
  opacity:1,
  duration:0.001
})
.to("#loader #img11",{
  opacity:0,
})
.to("#loader #img1",{
  opacity:1,
  duration:0.001
})
.to("#loader #img1",{
  opacity:0,
})
.to("#main",{
  y:745
})
.to("#loader",{
  y:-745,
  duration:1.5
})
.to("#main",{
  y:0,
  delay:-1.5,
  duration:1.5
})
.from("#page1 h1",{
  opacity:0,
  y:50,
  delay:-1,
  duration:0.5,
  stagger:0.2
})
gsap.to("#video",{
  width:"120%",
  height:"120%",
  scrollTrigger:{
    trigger:"#video",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top -30%",
    scrub:1
  }
})
gsap.from("#page3 h1",{
  opacity:0,
  y:200,
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 10%",
    scrub:true,
    stagger:1
  }
})
var page5tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    scrub:1,
    // markers:true,
    start:"top 0",
    end:"top -400%",
    pin:true
  }
})
page5tl.to("#page5 h1",{
  x:-3000
})
gsap.to("#page5 #img1",{
  x:-3000,
  scrollTrigger:{
    trigger:"#page5 #img1",
    scroller:"#main",
    // markers:true,
    start:"top 55%",
    end:"top -400%",
    scrub:1
  }
})
gsap.to("#page5 #img2",{
  x:-3000,
  scrollTrigger:{
    trigger:"#page5 #img1",
    scroller:"#main",
    // markers:true,
    start:"top 55%",
    end:"top -400%",
    scrub:1
  }
})
gsap.to("#page5 #img3",{
  x:-3000,
  scrollTrigger:{
    trigger:"#page5 #img1",
    scroller:"#main",
    // markers:true,
    start:"top 55%",
    end:"top -400%",
    scrub:1
  }
})
