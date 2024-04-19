//bai 1
const p=document.getElementById("text")
p.innerHTML="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
p.style.color="#777"
p.style.fontSize="2rem"
//bai 2
const li=document.querySelectorAll("li")
for(let i=0;i<li.length;i++){
    li[i].style.color="blue"
}
// bai 3
//1
const li8=document.createElement("li8")
li8.textContent="Item8"
document.body.append(li8)
//2
const li1=document.querySelectorAll("li")
for(let i=0;i<li.length;i++){
    li1[0].style.color="red"
}