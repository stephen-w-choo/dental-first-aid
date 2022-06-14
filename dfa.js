const tooth_type = [
    {image: "resources/babytooth.jpg",
    text: "I've hit a baby tooth",
    id: "baby-tooth"},
    {image: "resources/adult_stock.jpg",
    text: "I've hit an adult tooth",
    id: "adult-tooth"}
]

const tooth_injuries = [
    {injury: "It's been knocked out!",
    perm_search: "permanent incisor avulsion",
    decidi_search: "deciduous incisor avulsion"},
    {injury: "It's been moved backwards/forwards, or it's currently moving/loose",
    perm_search: "permanent incisor lateral luxation",
    decidi_search: "deciduous incisor luxation"},
    {injury: "It's been pushed in",
    perm_search: "permanent incisor intrusion"},
    {injury: "A piece has broken off",
    perm_seach: "incisal fracture"}
]

const decidi_treatment = [
    {injury: "Knocked out", steps: [
        "Congratulations - the tooth fairy has come early!",
        "Apply firm pressure with gauze to stop bleeding, if there is any.",
        "Check the cheeks and gums to make sure no sharp fragments are lodged into the skin",
        "Baby teeth are meant to fall out, and usually minimal treatment is required.",
        "IMPORTANT: you may have seen recommendations elsewhere to replant teeth if they fall out. This is only true for adult teeth. Baby teeth are NOT to be replanted.",
        "We would still recommend a consultation at the dentist to x-ray the area and make sure no fragments were pushed upwards towards the adult teeth."
    ]},
    {injury: "Moved/moving", steps: [
        "Apply firm pressure with gauze to stop bleeding.",
        "If heavily displaced outward, and it's not too sore, you can gently reposition the tooth with light finger pressure. If it's too sore, wait to see a dentist.",
        "If loose, gently bite down on a piece of gauze, handkerchief, or similar to stabilise the tooth.",
        "See a dentist as soon as possible for an assessment - baby teeth can potentially be pushed into a developing adult tooth and cause permanent damage."
    ]},
    {injury: "Pushed", steps: [
        "This is where the tooth looks shorter from being pushed into the actual socket, and can be one of the more serious injuries.",
        "Apply firm pressure with gauze to stop bleeding.",
        "See a dentist as soon as possible for an assessment - baby teeth can potentially be pushed into a developing adult tooth and cause permanent damage, and this is one of the higher risk injuries for such a scenario."
    ]},
    {injury: "Broken", steps: [
        "Try and find the piece that's broken off - make sure there aren't any sharp pieces in the gums or cheeks!",
        "Smaller chips and breaks are not urgent, and often will not require any treatment, though we would still recommend a consultation with the dentist for an assessment",
        "Larger fractures should be booked in with a dentist as soon as possible."
    ]},
]

const adult_treatment = [
    {injury: "Knocked out", steps: [
        "This only applies to adult teeth. <strong> Baby teeth must not be put back in. </strong>",
        "These instructions are for cases where the <strong>WHOLE</strong> tooth, including the root has been knocked out - for cases where once part of the tooth was knocked out, please see the broken tooth section",
        "Find the tooth and hold it <strong> by the crown </strong>, avoid touching the root if at all possible.",
        "Gently rinse the tooth. <strong> Do not wipe the root!</strong>",
        "Gently reposition the tooth back into the socket",
        "Stabilise and minimise movement of the tooth. You can wrap it up with aluminum foil if available, like an improvised mouthguard.",
        "Otherwise, gently bitedown on something soft (cotton roll, tissue paper) and maintain firm pressure on the tooth.",
        "See a dentist immediately for management."
    ]},
    {injury: "Moved/moving", steps: [
        "Apply firm pressure with gauze to stop bleeding.",
        "If it's been moved a large distance, and it's not too sore, you can gently reposition the tooth with light finger pressure. If it's too sore, wait to see a dentist.",
        "If loose, try to minimise movement of the tooth, while keeping it in its original position. You can wrap it up with aluminum foil if available, like an improvised mouthguard.",
        "Otherwise, gently bitedown on something soft (cotton roll, tissue paper) and maintain firm pressure on the tooth.",
        "See a dentist as soon as possible."
    ]},
    {injury: "Pushed", steps: [
        "This is where the tooth looks shorter from being pushed into the actual socket.",
        "Apply firm pressure with gauze to stop bleeding.",
        "See a dentist <strong> as soon as possible</strong> - this is one of the more serious injuries that requires immediate care"
    ]},
    {injury: "Broken", steps: [
        "Try and find the piece that's broken off - and make sure there aren't any sharp pieces in the gums or cheeks!",
        "Try and keep the piece, especially if it's a clean fracture. Your dentist may be able to bond the fragment back on. If the fragment is found, try and keep it moist in some form of liquid",
        "Smaller fractures are not usually urgent, though we would still booking to see a dentist sooner rather than later",
        "Larger fractures should be booked in with a dentist as soon as possible to avoid potential dental infections."
    ]},
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

function removeArticles(container_id){
    const article_container = document.querySelectorAll(`${container_id}>*`)
    for (let element of article_container) {
        element.remove()
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
    baby_or_adult_tooth()
})

function baby_or_adult_tooth(){
    const tooth_type_box = document.createElement("div")
    header_h2.innerText = "What kind of tooth was injured?"
    header_h2.classList.remove("none")
    tooth_type_box.classList.add("grid")
    for (let tooth of tooth_type) {
        
        tooth_card = createCard(tooth.image, tooth.text, tooth.id, "card")
        tooth_type_box.append(tooth_card)
    } 
    main_container.append(tooth_type_box)
    baby_tooth_menu()
    adult_tooth_menu()
}

function baby_tooth_menu() {
    document.querySelector('#baby-tooth').addEventListener("click", ()=>{
        removeArticles("#main-container")
        for (let i = 0; i < 4; i++) {
            injury_card = document.createElement("article")
            injury_card.innerText = tooth_injuries[i].injury
            injury_card.addEventListener("click", ()=>{
                decidi_injury_view(i)
            })
            main_container.append(injury_card)
        }
    })
}

function adult_tooth_menu() {
    document.querySelector('#adult-tooth').addEventListener("click", ()=>{
        removeArticles("#main-container")
        for (let i = 0; i < 4; i++) {
            injury_card = document.createElement("article")
            injury_card.innerText = tooth_injuries[i].injury
            injury_card.addEventListener("click", ()=>{
                adult_injury_view(i)
            })
            main_container.append(injury_card)
        }
    })
}

function decidi_injury_view(n) {
    removeArticles("#main-container")
    let injury_steps_container = document.createElement("article")
    let injury_steps = document.createElement("ul")
    for (step of decidi_treatment[n].steps) {
        let list_item = document.createElement("li")
        list_item.innerText = step
        injury_steps.append(list_item)
    }
    injury_steps_container.append(injury_steps)
    main_container.append(injury_steps_container)
}

function adult_injury_view(n) {
    removeArticles("#main-container")
    let injury_steps_container = document.createElement("article")
    let injury_steps = document.createElement("ul")
    for (step of adult_treatment[n].steps) {
        let list_item = document.createElement("li")
        list_item.innerHTML = step
        injury_steps.append(list_item)
    }
    injury_steps_container.append(injury_steps)
    main_container.append(injury_steps_container)
}

const adult_tooth_card = document.querySelector('#adult-tooth')

