const tooth_type = [
    {image: "../resources/baby-612.jpg",
    text: "I've hit a baby tooth",
    id: "baby-tooth"},
    {image: "../resources/adult-612.jpg",
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
    {injury: "knocked out", steps: [
        "IMPORTANT: you may have seen recommendations elsewhere to replant teeth if they fall out. This is only true for adult teeth. <strong>Baby teeth are NOT to be replanted.</strong>",
        "Congratulations - the tooth fairy has come early!",
        "Baby teeth are meant to fall out sooner or later (with very rare exceptions!), and usually minimal treatment is required.",
        "Apply firm pressure to the gums with gauze, paper towel, or a clean cloth to stop bleeding, if there is any.",
        "Check the cheeks and gums to make sure there aren't any sharp tooth fragments are lodged into the skin.",
        "We would still recommend a consultation at the dentist to x-ray the area and make sure no fragments were pushed upwards towards the adult teeth."
    ]},
    {injury: "moved/moving", steps: [
        "Apply firm pressure to the gums with gauze to stop bleeding.",
        "If heavily displaced outward, and it's not too sore, you can gently reposition the tooth with light finger pressure. If it's too sore, wait to see a dentist.",
        "If loose, gently bite down on a piece of gauze, handkerchief (or anything that's soft and clean) to stabilise the tooth.",
        "See a dentist as soon as possible for an assessment - baby teeth can potentially be pushed into a developing adult tooth and cause permanent damage."
    ]},
    {injury: "pushed in", steps: [
        "This is where the tooth looks shorter from being pushed into the actual socket, and can be one of the more serious injuries.",
        "Apply firm pressure with gauze to the gums to stop bleeding.",
        "See a dentist as soon as possible for an assessment - baby teeth can potentially be pushed into a developing adult tooth and cause permanent damage, and this is one of the higher risk injuries for such a scenario."
    ]},
    {injury: "broken", steps: [
        "Try and find the piece that's broken off - make sure there aren't any sharp pieces in the gums or cheeks!",
        "Smaller chips and breaks are not urgent, and often will not require any treatment, though we would still recommend a consultation with the dentist for an assessment",
        "Larger fractures should be booked in with a dentist as soon as possible."
    ]},
]

const adult_treatment = [
    {injury: "knocked out", steps: [
        "This only applies to adult teeth. <strong> Baby teeth must not be put back in. </strong>",
        "These instructions are for cases where the <strong>WHOLE</strong> tooth, including the root has been knocked out. For cases where only part of the tooth was knocked out, please see the broken tooth section",
        "Find the tooth and hold it <strong> by the crown</strong>. Avoid touching the root if at all possible.",
        "<strong>Briefly</strong> rinse the tooth, preferably with milk, but you can use water if available. <strong> Do not rinse for more than 1-2 seconds</strong>", 
        "<strong> Do not try to wipe or clean the tooth root!</strong>",
        "Gently reinsert the tooth back into the socket.",
        "Stabilise and minimise movement of the tooth. You can wrap it up with aluminum foil or a similar stiff material if available, like an improvised mouthguard.",
        "Otherwise, if you have nothing on hand to stabilise the tooth, gently bitedown on something soft (cotton roll, tissue paper) and maintain firm pressure on the tooth. The goal is to minimise any kind of movement on the tooth once it's replanted.",
        "If you are not confident about replanting the tooth, keep the tooth in saline, milk, or saliva (NOT WATER), and bring it with you to the dentist. Note that this is not ideal and it would still be much better to replant the tooth at time of injury.",
        "See a dentist immediately for management."
    ]},
    {injury: "moved/or is moving", steps: [
        "Apply firm pressure with gauze to the gums to stop any bleeding.",
        "If it's been moved a large distance, and it's not too sore, you can gently reposition the tooth with light finger pressure. If it's too sore, wait to see a dentist.",
        "If the tooth is loose, try to minimise movement of the tooth, while keeping it in its original position. You can wrap it up with aluminum foil if available, like an improvised mouthguard.",
        "Otherwise, gently bitedown on something soft (cotton roll, tissue paper) and maintain firm pressure on the tooth to keep it in position and minimise movement.",
        "See a dentist as soon as possible."
    ]},
    {injury: "pushed in", steps: [
        "This is where the tooth looks shorter from being pushed into the actual socket.",
        "Apply firm pressure to the gums with gauze to stop bleeding.",
        "See a dentist <strong> as soon as possible</strong> - this is one of the more serious injuries that requires immediate care."
    ]},
    {injury: "broken", steps: [
        "Try and find the piece that's broken off - and make sure there aren't any sharp pieces in the gums or cheeks!",
        "Try and keep the piece, especially if it's a clean fracture. Your dentist may be able to bond the fragment back on.",
        "Keep the fragment in either milk or water to keep it moist",
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
        let image = document.createElement("img")
        image.classList.add("image")
        image.src = image_url
        let header = document.createElement("header")
        header.append(image)
        container.append(header)
    }
    let body = document.createElement("p")
    let h4 = document.createElement("h4")
    h4.innerText = text
    body.append(h4)
    container.append(body)
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
const current_state = document.querySelector("#current-state")

let back_button = document.createElement("button")
back_button.innerHTML = 'Back'
back_button.classList.add("back")



document.querySelector("#first-article").addEventListener("click", ()=>{
    removeArticle("#first-article")
    showArticle("#second-article")
})
document.querySelector("#second-article").addEventListener("click", ()=>{
    removeArticle("#second-article")
    baby_or_adult_tooth()
})

function baby_or_adult_tooth(){
    removeArticles("#main-container")
    const tooth_type_box = document.createElement("div")
    header_h2.innerText = "Is it a baby or an adult tooth?"
    header_h2.classList.remove("none")
    tooth_type_box.classList.add("grid")
    for (let tooth of tooth_type) {
        
        let tooth_card = createCard(tooth.image, tooth.text, tooth.id, "hover")
        tooth_type_box.append(tooth_card)
    } 
    main_container.append(tooth_type_box)
    document.querySelector('#baby-tooth').addEventListener("click", baby_tooth_menu)
    document.querySelector('#adult-tooth').addEventListener("click", adult_tooth_menu)
}

function baby_tooth_menu() {
    header_h2.innerText = "What does the injury look like?"

    removeArticles("#main-container")
    for (let i = 0; i < 4; i++) {
        let injury_card = document.createElement("article")
        injury_card.classList.add("hover")
        injury_card.innerText = tooth_injuries[i].injury
        injury_card.addEventListener("click", ()=>{
            decidi_injury_view(i)
        })
        main_container.append(injury_card)
    }
    new_back_button = back_button.cloneNode(true)
    new_back_button.addEventListener("click", ()=> {
        baby_or_adult_tooth()
    })
    main_container.append(new_back_button)
}

function adult_tooth_menu() {
    header_h2.innerText = "What does the injury look like?"
    removeArticles("#main-container")
    for (let i = 0; i < 4; i++) {
        let injury_card = document.createElement("article")
        injury_card.classList.add("hover")
        injury_card.innerText = tooth_injuries[i].injury
        injury_card.addEventListener("click", ()=>{
            adult_injury_view(i)
        })
        main_container.append(injury_card)
    }
    new_back_button = back_button.cloneNode(true)
    new_back_button.addEventListener("click", ()=> {
        baby_or_adult_tooth()
    })
    main_container.append(new_back_button)
}

function decidi_injury_view(n) {
    removeArticles("#main-container")
    header_h2.innerText = "Recommended actions"
    let injury_steps_container = document.createElement("article")
    let status_broken = document.createElement("h5")
    status_broken.innerHTML = 
    `You've told us that: 
    <br>
    &emsp; ...it's a baby tooth👼 
    <br>
    &emsp; ...which has been ${decidi_treatment[n].injury} 
    <br>
    <br>
    Here's what to do next:`
    injury_steps_container.append(status_broken)
    let injury_steps = document.createElement("ul")
    for (let step of decidi_treatment[n].steps) {
        let list_item = document.createElement("li")
        list_item.innerHTML = step
        injury_steps.append(list_item)
    }
    injury_steps_container.append(injury_steps)
    main_container.append(injury_steps_container)
    new_back_button = back_button.cloneNode(true)
    new_back_button.addEventListener("click", ()=> {
        baby_tooth_menu()
    })
    main_container.append(new_back_button)
}

function adult_injury_view(n) {
    removeArticles("#main-container")
    header_h2.innerText = "Recommended actions"
    let injury_steps_container = document.createElement("article")
    let status_broken = document.createElement("h5")
    status_broken.innerHTML = 
    `You've told us that: 
    <br>
    &emsp; ...it's an adult tooth👨‍💼🦷
    <br>
    &emsp; ...which has been ${decidi_treatment[n].injury} 
    <br>
    <br>
    Here's what to do next:`
    injury_steps_container.append(status_broken)
    let injury_steps = document.createElement("ul")
    for (let step of adult_treatment[n].steps) {
        let list_item = document.createElement("li")
        list_item.innerHTML = step
        injury_steps.append(list_item)
    }
    injury_steps_container.append(injury_steps)
    main_container.append(injury_steps_container)
    new_back_button = back_button.cloneNode(true)
    new_back_button.addEventListener("click", ()=> {
        adult_tooth_menu()
    })
    main_container.append(new_back_button)
}

