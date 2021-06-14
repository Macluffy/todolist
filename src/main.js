let div1 = document.createElement("div")
let div2 = document.createElement("div")
let div3 = document.createElement("div")
let div4 = document.createElement("div")
let div5 = document.createElement("div")
let div = document.createElement("div")
div.appendChild(div1)
div.appendChild(div2)
div.appendChild(div3)
div.appendChild(div4)
div.appendChild(div5)
div1.setAttribute("class", "divinterieur")
div2.setAttribute("class", "divinterieur")
div3.setAttribute("class", "divinterieur")
div4.setAttribute("class", "divinterieur4")
div5.setAttribute("class", "divinterieur")
document.body.appendChild(div)
div.setAttribute("class", "divstyle")
let input = document.createElement("input")
div1.appendChild(input)



let add = document.createElement("button")
div1.appendChild(add)
add.innerText = "+Add"
add.setAttribute("class", "addstyle")

let h3 = document.createElement("h3")
div2.appendChild(h3)
h3.setAttribute("class", "h3style")
h3.innerText = "Ma Todo List"

let Do = document.createElement("button")
div3.appendChild(Do)
Do.innerText = "Do"
Do.setAttribute("class", "btnstyle")

let todo = document.createElement("button")
div3.appendChild(todo)
todo.innerText = "Todo"
todo.setAttribute("class", "btnstyle")

let all = document.createElement("button")
div3.appendChild(all)
all.innerText = "All"
all.setAttribute("class", "btnstyle")

let clearlist = document.createElement("button")
div5.appendChild(clearlist)
clearlist.innerText = "Clear List"
clearlist.setAttribute("class", "clearlistestyle")

let valueinput
let divtache
let ptache
let divbtn
let btntache1
let btntache2
let btntache3



add.addEventListener("click", () => {
    valueinput = input.value;

    let i1 = document.createElement("i")
    i1.setAttribute("class", "fas fa-check-double")
    let i2 = document.createElement("i")
    i2.setAttribute("class", "far fa-edit")
    let i3 = document.createElement("i")
    i3.setAttribute("class", "fas fa-trash-alt")
    divtache = document.createElement("div")

    divtache.setAttribute("class", "divtache")
    div4.appendChild(divtache)
    ptache = document.createElement("input")
    ptache.setAttribute("class", "ptache")
    ptache.setAttribute("disabled", "disabled")
    divtache.appendChild(ptache)
    ptache.value = valueinput
    divbtn = document.createElement("div")
    divtache.appendChild(divbtn)
    btntache1 = document.createElement("button")
    btntache1.setAttribute("class", "btntache1")
    btntache1.setAttribute("id", "btnstyle1")
    btntache1.appendChild(i1)

    btntache2 = document.createElement("button")
    btntache2.setAttribute("class", "btntache2")
    btntache2.setAttribute("id", "btnstyle2")
    btntache2.appendChild(i2)
    btntache3 = document.createElement("button")
    btntache3.setAttribute("class", "btntache3")
    btntache3.setAttribute("id", "btnstyle3")
    btntache3.appendChild(i3)
    divbtn.appendChild(btntache1)
    divbtn.appendChild(btntache2)
    divbtn.appendChild(btntache3)

    document.body.addEventListener("click", (e) => {

        if (e.target.className == "btntache1") {
            if (e.target.parentElement.parentElement.style.backgroundColor == "blue") {
                e.target.parentElement.parentElement.style.backgroundColor = "white"
            } else {
                e.target.parentElement.parentElement.style.backgroundColor = "blue"
            }

        }
        else if (e.target.className == "fas fa-check-double") {

            if (e.target.parentElement.parentElement.parentElement.style.backgroundColor == "blue") {
                e.target.parentElement.parentElement.parentElement.style.backgroundColor = "white"
            } else {

                e.target.parentElement.parentElement.parentElement.style.backgroundColor = "blue"
            }

        } else if (e.target.className == "btntache2") {
            e.target.parentElement.previousElementSibling.removeAttribute("disabled");
        } else if (e.target.className == "btntache3") {
            e.target.parentElement.parentElement.remove()
        } else if (e.target == Do) {
            let none = document.getElementsByClassName("divtache")
            Array.from(none).forEach(element => {
                if (element.style.backgroundColor != "blue") {
                    element.style.display = "none"
                }
            });
        } else if (e.target == todo) {
            let none = document.getElementsByClassName("divtache")
            Array.from(none).forEach(element => {
                if (element.style.backgroundColor == "blue") {
                    element.style.display = "none"
                }
            });
        }
        else if (e.target == all) {
            let none = document.getElementsByClassName("divtache")
            Array.from(none).forEach(element => {

                element.style.display = "flex"

            });
        }


    });

})



clearlist.addEventListener("click", () => {
    Array.from(div4.children).forEach(element => {
        element.remove()
    });

})
document.body.addEventListener("keyup", (event) => {
    let name = event.key;
    if (name === 'Enter') {
        
        valueinput = input.value;

    let i1 = document.createElement("i")
    i1.setAttribute("class", "fas fa-check-double")
    let i2 = document.createElement("i")
    i2.setAttribute("class", "far fa-edit")
    let i3 = document.createElement("i")
    i3.setAttribute("class", "fas fa-trash-alt")
    divtache = document.createElement("div")

    divtache.setAttribute("class", "divtache")
    div4.appendChild(divtache)
    ptache = document.createElement("input")
    ptache.setAttribute("class", "ptache")
    ptache.setAttribute("disabled", "disabled")
    divtache.appendChild(ptache)
    ptache.value = valueinput
    divbtn = document.createElement("div")
    divtache.appendChild(divbtn)
    btntache1 = document.createElement("button")
    btntache1.setAttribute("class", "btntache1")
    btntache1.setAttribute("id", "btnstyle1")
    btntache1.appendChild(i1)

    btntache2 = document.createElement("button")
    btntache2.setAttribute("class", "btntache2")
    btntache2.setAttribute("id", "btnstyle2")
    btntache2.appendChild(i2)
    btntache3 = document.createElement("button")
    btntache3.setAttribute("class", "btntache3")
    btntache3.setAttribute("id", "btnstyle3")
    btntache3.appendChild(i3)
    divbtn.appendChild(btntache1)
    divbtn.appendChild(btntache2)
    divbtn.appendChild(btntache3)

    }
});




