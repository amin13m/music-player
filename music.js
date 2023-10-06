let list = [

    {
        name: 'mokhtabad',
        imge: "images/th (1).jpg",
        audio: new Audio("musics/abdolhossein_mokhtabad_tamanaye_vesal 128.mp3")

    },

    {
        name: 'music2',
        imge: "images/th (2).jpg",
        audio: new Audio("musics/MohammadReza Shajarian - Tasnife Del Bordi.mp3")

    },

    {
        name: 'music3',
        imge: "images/th (3).jpg",
        audio: new Audio("musics/molaqat ba dozakhian.mp3")

    }

]

let rang = document.querySelector("input")
let img = document.querySelector("img")
let text = document.querySelector("h1")
let play = document.querySelector(".fa-play")
let pause = document.querySelector(".fa-pause")
let back = document.querySelector(".fa-backward")
let next = document.querySelector(".fa-forward")

let curnt = 0

let audio = list[curnt].audio
img.src = list[curnt].imge
text.innerText = list[curnt].name



console.log(list[curnt])

audio.addEventListener("canplay", (e) => {
    rang.max = audio.duration
})

audio.addEventListener("timeupdate", () => {
    rang.value = audio.currentTime
})


rang.addEventListener("input", () => {
    audio.currentTime = rang.value
})

function pl() {
    audio.play()
    img.style.animationPlayState = "running"
    play.classList.replace("fa-play", "fa-pause")
}

function pa() {
    audio.pause()
    play.classList.replace("fa-pause", "fa-play")
    img.style.animationPlayState = "paused"
}

play.addEventListener("click", () => {
    if (audio.paused) {
        pl()
    } else {
        pa()
    }
})


window.addEventListener("keypress", (e) => {
    console.log()

    if (e.code == 'Space') {
        if (audio.paused) {
            pl()
        } else {
            pa()
        }
    }


})


next.addEventListener("click", (e) => {
    if (curnt < list.length - 1) {
        pa()
        curnt++
    } else {
        pa()
        curnt = 0
    }
    audio = list[curnt].audio
    img.src = list[curnt].imge
    text.innerText = list[curnt].name
})


back.addEventListener("click", (e) => {
    if (curnt > 0) {
        pa()
        curnt--
    } else {
        pa()
        curnt = list.length - 1
    }
    console.log(list[curnt])

    audio = list[curnt].audio
    img.src = list[curnt].imge
    text.innerText = list[curnt].name

})


/*

let add = {
    name: "difalt",
    imge: "images/بلبل4.jpg",
    audio:"musics/MohammadReza Shajarian - Tasnife Del Bordi.mp3",
}







let plus = document.querySelector(".fa-plus-square")
let botten = document.querySelector("#add")
let nn = document.querySelector(".name")
let ni = document.querySelector(".img")
let nm = document.querySelector(".audio")
let h = document.querySelector(".h")

botten.addEventListener("click", (e) => {
    
    if (botten.className == "fa fa-plus-square") {
        nn.style.display = "block"
        ni.style.display = "block"
        nm.style.display = "block"

        botten.className= " fa fa-upload"
    }else{
        botten.className="fa fa-plus-square" 
        nn.style.display = "none"
        ni.style.display = "none"
        nm.style.display = "none"


        add.name = nn.value
        add.imge = ni.value
        add.audio = nm.value

    console.log(add.audio)

        if(nn.value && ni.value && nm.value)list.push(add)

        
    }

})

botten.addEventListener("click", (e) => {
    
    
})


*/
















