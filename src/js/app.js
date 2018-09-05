/************************************DOM*********************************************/

let containerBigPizza = document.querySelector('.container-bigpizza');
let containerFamilyPizza = document.querySelector('.container-familypizza');
let radioBtnSize = document.querySelector('#radiotipo');


const init = () => {
  hideSection(containerFamilyPizza);
}

const hideSection = (element) => {
  element.classList.add('pizza--hide');
}

const showSection = (element) => {
  element.classList.remove('pizza--hide');
}


const getValueRadio = (name) => {
  let size = document.querySelector(`input[name="${name}"]:checked`).value;
  return size;
}


const viewSizeContainerPizzas = () => {
  let valueSelection = getValueRadio('tipo');
  if (valueSelection === 'Grande') {
    hideSection(containerFamilyPizza);
    showSection(containerBigPizza);
  }
  if (valueSelection === 'Familiar') {
    hideSection(containerBigPizza);
    showSection(containerFamilyPizza);
  }
}



// Execute
// Function initial load
init();

// Eventos

radioBtnSize.addEventListener('change', viewSizeContainerPizzas);
