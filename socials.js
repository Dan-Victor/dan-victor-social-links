document.addEventListener("DOMContentLoaded", function(){
    //for  all links
let socialLinks = document.querySelectorAll(".social-link");
socialLinks.forEach((element)=>{
element.addEventListener('mouseover', ()=>{
    element.style.color = "#000"
element.style.backgroundColor = "hsl(75, 94%, 57%)"
})

element.addEventListener('mouseout', ()=>{
    element.style.removeProperty('color')
    element.style.removeProperty('background-color')
    })
})
 //for individual links
 let gitHub = socialLinks[0];
    let linkedIn = socialLinks[1];
    let Instagram = socialLinks[2];
    let Twitter = socialLinks[3];
    let snapChat = socialLinks[4];
    //for gitHub
 gitHub.addEventListener('click' , ()=>{
    window.open('https://www.github.com/dan-victor',"_blank")
 })
 //for linkedIn
 linkedIn.addEventListener('click' , ()=>{
    window.open('https://www.linkedin.com/in/dan-victor-adesola-717bb5299',"_blank")
 })
 //for Instagram
 Instagram.addEventListener('click' , ()=>{
    window.open('https://www.instagram.com/danvictor_ades?igsh=MXVwdGkyMXl1YmlybQ==',"_blank")
 })
 //for Twitter
 Twitter.addEventListener('click' , ()=>{
    window.open('https://x.com/Dn_vico?t=2ktAA8Bb6qyTeslZGH_XSG&S=09',"_blank")
 })
 //for snapChat
 snapChat.addEventListener('click' , ()=>{
    window.open('https://www.snapchat.com/add/vdhan91?share_id=0WoKfzmK0Jk&locale=en-NG',"_blank")
 })
})
