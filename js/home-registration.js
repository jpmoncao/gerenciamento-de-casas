function getDataHome() {
    let numberHome = document.getElementById("number").value
    let neighborhoodHome = document.getElementById("neighborhood").value
    let cityHome = document.getElementById("city").value
    let areaHome = document.getElementById("area").value

    return [numberHome, neighborhoodHome, cityHome, areaHome]
}

function createNewHomeElement(number = 000, neighborhood = "Bairro não informado", city = "Cidade não informada", area = 0) {
    const homeHTMLTemplate = `<div class="home-list-children">
                                <p>Número: ${number}</p>
                                <p>Bairro: ${neighborhood}</p>
                                <p>Cidade: ${city}</p>
                                <p>Área da casa: ${area}²</p>
                                <div class="home-list-children-buttons">
                                    <button onclick="removeHomeToList(this)">Remover</button>
                                </div>  
                            </div>`
    return homeHTMLTemplate
}

function cadasterHome() {
    const dataHome = getDataHome()
    const homeList = document.querySelector("div.home-list")

    let newHome = createNewHomeElement(dataHome[0], dataHome[1], dataHome[2], dataHome[3])
    homeList.innerHTML += newHome

    let lastNumberHouse
    for(let c = 0; c <= localStorage.length; c++) {
        localStorage.key(c)
        lastNumberHouse = c
    }
    console.log(lastNumberHouse)
    localStorage.setItem(`casa${lastNumberHouse+1}`, newHome)
}

function removeHomeToList(button) {
    let houseToRemove = (button.parentNode).parentNode
    houseToRemove.classList.add("toRemove")
    let houseList = document.querySelector("div.home-list")

    if (houseList.hasChildNodes) {
        let children = houseList.childNodes
        console.log(children)
        for (let c = 1; c < children.length; c++) {
            console.log(children[c])
            if(children[c].classList.contains("toRemove")) {
                console.log(`Para remover nº: ${c}`)
                let toRemove = localStorage.key(c-1)
                console.log(toRemove)
                localStorage.removeItem(toRemove)
            }
        }
        houseList.removeChild(houseToRemove)
    }
    
    
    
    //TERMINAR LÓGICA DE REMOÇÃO DO LOCAL STORAGE
}

function reloadList() {
    let houseList = document.querySelector("div.home-list")
    for (let c = 0; c < localStorage.length; c++) {
        let toAdd = localStorage.key(c)
        if(toAdd != null) {
            houseList.innerHTML += localStorage.getItem(toAdd)
        }
    }
}