const btn_a = document.getElementById("A")
const btn_s = document.getElementById("S")
const btn_d = document.getElementById("D")
const btn_f = document.getElementById("F")
const btn_g = document.getElementById("G")
const btn_h = document.getElementById("H")
const btn_j = document.getElementById("J")
const btn_k = document.getElementById("K")
const btn_l = document.getElementById("L")
const audio1 = document.getElementById("1")
const audio2 = document.getElementById("2")
const audio3 = document.getElementById("3")
const audio4 = document.getElementById("4")
const audio5 = document.getElementById("5")
const audio6 = document.getElementById("6")
const audio7 = document.getElementById("7")
const audio8 = document.getElementById("8")
const audio9 = document.getElementById("9")

document.addEventListener("keypress", (event) =>{
    if(event.key == "a"){
        audio2.play();
    }
    else if(event.key == "s"){
        audio3.play();
    }
    else if(event.key == "d"){
        audio4.play();
    }
    else if(event.key == "f"){
        audio5.play();
    }
    else if(event.key == "g"){
        audio1.play();
    }
    else if(event.key == "h"){
        audio6.play();
    }
    else if(event.key == "j"){
        audio7.play();
    }
    else if(event.key == "k"){
        audio9.play();
    }
    else if(event.key == "l"){
        audio8.play();
    }

})

btn_a.addEventListener("click", ()=>{
    audio2.play();
})
btn_s.addEventListener("click", ()=>{
    audio3.play();
})
btn_d.addEventListener("click", ()=>{
    audio4.play();
})
btn_f.addEventListener("click", ()=>{
    audio5.play();
})
btn_g.addEventListener("click", ()=>{
    audio1.play();
})
btn_h.addEventListener("click", ()=>{
    audio6.play();
})
btn_j.addEventListener("click", ()=>{
    audio7.play();
})
btn_k.addEventListener("click", ()=>{
    audio9.play();
})
btn_l.addEventListener("click", ()=>{
    audio8.play();
})






