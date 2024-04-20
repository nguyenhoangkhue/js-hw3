//bai 1
const p=document.getElementById("text")
p.innerHTML="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
p.style.color="#777"
p.style.fontSize="2rem"
//bai 2
const li=document.querySelectorAll("li")
for(let i=0;i<3;i++){
    li[i].style.color="blue"
}
// bai 3
//1
const ul2=document.getElementById("list")
ul2.innerHTML=ul2.innerHTML+"<li> Item 8</li>";
ul2.innerHTML=ul2.innerHTML+"<li> Item 9</li>";
ul2.innerHTML=ul2.innerHTML+"<li> Item 10</li>";
//2
const li1=ul2.querySelector("li:nth-child(1)")
li1.style.color="red"
//3
const li3=ul2.querySelector("li:nth-child(3)")
li3.style.backgroundColor="blue"
//4
const li4 = ul2.querySelector("li:nth-child(4)");
li4.remove();
//5
const newli4=document.createElement("li")
newli4.textContent="new li4"
const previousElement=ul2.querySelector("li:nth-child(4)")
ul2.insertBefore(newli4,previousElement)