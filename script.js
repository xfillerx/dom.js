const input1 = document.createElement("input")
const input2 = document.createElement("input")
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const section = document.createElement("section")
section.style.display = "flex"
section.style.justifyContent = "center"
section.style.flexDirection = "column"
section.appendChild(div1)
section.appendChild(div2)
div1.appendChild(input1)
div1.appendChild(input2)
div2.appendChild(button1)
div2.appendChild(button2)
const textbtn1 = document.createTextNode("login")
button1.appendChild(textbtn1)
const textbtn2 = document.createTextNode("sair")
button2.appendChild(textbtn2)
input1.placeholder = "!!!!"
input2.placeholder = "sair"
input1.style.backgroundColor = "aqua"
input1.style.width = "200px"
input2.style.backgroundColor = "aqua"
input2.style.width = "200px"
button1.style.padding = "5px 88px"
button2.style.padding = "5px 90px"
div2.style.display= "flex"
div2.style.justifyContent = "center"
div1.style.marginBottom = "4px"
input1.style.marginRight = "2px"
button1.style.marginRight = "2px"
document.body.style.height = "100vh"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"
document.body.style.display = "flex"
document.body.style.flexDirection = "column"
button1.addEventListener("click", ()=>{
    alert(input1.value)
})
button2.addEventListener("click", ()=>{
    alert(input2.value)
})
document.body.appendChild(section)





