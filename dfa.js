const tooth_type = [
    {image: "resources/babytooth.jpg",
    text: "I've hit a baby tooth",
    id: "baby-tooth"},
    {image: "resources/adulttooth.jpg",
    text: "I've hit an adult tooth",
    id: "adult-tooth"}
]

const tooth_injury = [
    {injury: "It's been knocked out!",
    perm_search: "permanent incisor avulsion",
    decidi_search: "deciduous incisor avulsion"},
    {injury: "It's been pushed forward/backward or it feels loose",
    perm_search: "permanent incisor lateral luxation",
    decidi_search: "deciduous incisor luxation"},
    {injury: "It's been pushed in",
    perm_search: "permanent incisor intrusion"},
    {injury: "A piece has broken off",
    perm_seach: "incisal fracture"}
]

const decidi_treatment = [
    {steps: [
        "Congratulations - the tooth fairy has come early!",
        "Baby teeth are meant to fall out, and usually minimal treatment is required",
        "We would still recommend a consultation at the dentist to x-ray the area and make sure no fragments were pushed upwards towards the adult teeth",
        "Additional note: you may have seen recommendations elsewhere to replant teeth if they fall out. This is only true for adult teeth. Baby teeth are NOT to be replanted."
    ]},
    {steps: [
        
    ]}
]


function createCard(image_url, text, id=null, classes=null){
    let container = document.createElement("article")
    container.classList.add("card")
    if (id) {
        container.id = id
    }
    if (classes) {
        container.classList.add(classes)
    }
    if (image_url) {
        image = document.createElement("img")
        image.classList.add("image")
        image.src = image_url
    }
    body = document.createElement("h4")
    body.innerText = text
    container.append(image, body)
    return(container)
}

function removeArticle(element_id) {
    const article = document.querySelector(element_id)
    article.remove()
}

function hideArticles(container_id){
    const article_container = document.querySelectorAll(`${container_id}>*`)
    for (let element of article_container) {
        element.classList.add("none")
    }
}

function showArticle(element_id) {
    const article = document.querySelector(element_id)
    article.classList.remove("none")
}


const main_container = document.querySelector("#main-container")
const header_h2 = document.querySelector("#header")

document.querySelector("#first-article").addEventListener("click", ()=>{
    removeArticle("#first-article")
    showArticle("#second-article")
})
document.querySelector("#second-article").addEventListener("click", ()=>{
    removeArticle("#second-article")
    const tooth_type_box = document.createElement("div")
    header_h2.innerText = "What kind of tooth was injured?"
    header_h2.classList.remove("none")
    tooth_type_box.classList.add("grid")
    for (let tooth of tooth_type) {
        
        tooth_card = createCard(tooth.image, tooth.text, tooth.id, "card")
        tooth_type_box.append(tooth_card)
    } 
    main_container.append(tooth_type_box)
    baby_tooth_link()
})

function baby_tooth_link() {
    document.querySelector('#baby-tooth').addEventListener("click", ()=>{
        hideArticles("#main-container")
        for (injury of tooth_injury) {        
            injury_card = document.createElement("article")
            injury_card.innerText = injury.injury
            main_container.append(injury_card)
        }
    })
}
const adult_tooth_card = document.querySelector('#adult-tooth')

