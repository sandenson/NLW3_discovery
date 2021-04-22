const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

var map = L.map('mapid', options).setView([lat, lng], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'    ).addTo(map);
    
const icon = L.icon({
    iconUrl: "/images/map-marker.svg", iconSize: [58,68], iconAnchor: [29,68], popupAnchor: [170,2]
});
    
L.marker([lat, lng], { icon }).addTo(map);

function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {button.classList.remove("active")})

    // selecionar a img clicada
    const img = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container de img
    imageContainer.src = img.src;

    //adicionar a classe .active para este botao
    button.classList.add("active");
}