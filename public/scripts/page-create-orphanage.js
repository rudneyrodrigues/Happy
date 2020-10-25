// Create map
const map = L.map("mapid").setView([-9.3899564, -40.5015384], 14);

//Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

//Create and add marker
//

let marker;

//Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //Remove icon
  marker && map.removeLayer(marker);

  //Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});


//Add photo field
function addPhotoField() {
  //Pegar o containeer de fotos #images
  const container = document.querySelector('#images');

  //Pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')

  //Realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  newFieldContainer.style.marginTop = '2.4rem';

  //Verifica se o campo esta vazio
  const input = newFieldContainer.children[0]
  if (input.value == "") {
    return
  } else {
    //Limpar o campo antes de adicionar
    input.value = ""
  }

  //Adicionar o clone ao container de #images
  container.appendChild(newFieldContainer)
}

function removePhotoField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length <= 1) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  //Deletar o campo
  span.parentNode.remove()
}

//Selecionar sim ou não
function toggleSelect(event) {
  //Retirar a classe .active (dos botões)
  document.querySelectorAll('.button-select button')
  .forEach((button) => {
    button.classList.remove('active')
  })

  //Colocar a classe .active no botão clicado
  const button = event.currentTarget
  button.classList.add('active')

  //Atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value
}
