const loginBtn = document.getElementById('login-button');
const senha = document.getElementById('senha');
const email = document.getElementById('email');
const getMain = document.getElementById('main');
const getForm = document.getElementById('evaluation-form');
const getFirstName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const getHouse = document.getElementById('house');
const getSubmitButton = document.getElementById('submit-btn');
const dataArray = [];

// Criando a função do HEADER
function entradaLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', entradaLogin);

// FUNÇAO CONTADOR
const textArea = document.getElementById('textarea'); // textbox
const count = document.getElementById('counter'); // charcount
const maxNumOfChars = 500;

const cntCarac = () => {
  const numOfEnteredChars = textArea.value.length;
  const counter = maxNumOfChars - numOfEnteredChars;
  count.textContent = `${counter}/500`;
};

textArea.addEventListener('input', cntCarac);
// FIM CONTADOR

const showSubjectsData = () => {
  const getSubjects = document.querySelectorAll('.subject:checked');
  let mySubjects = '';
  for (let index = 0; index < getSubjects.length; index += 1) {
    if (index !== getSubjects.length - 1) {
      mySubjects += `${getSubjects[index].value}, `;
    } else {
      mySubjects += ` ${getSubjects[index].value}`;
    }
  }
  if (mySubjects) return mySubjects;
};

const transformDataArray = () => {
  const getFamily = document.querySelector('input[name="family"]:checked');
  const getAvaliation = document.querySelector('input[name="rate"]:checked');
  const getObservations = document.querySelector('#textarea');
  dataArray.push(`Nome: ${getFirstName.value} ${getLastName.value}`);
  dataArray.push(`Email: ${getEmail.value}`);
  dataArray.push(`Casa: ${getHouse.value}`);
  dataArray.push(`Família: ${getFamily.value}`);
  dataArray.push(`Matérias: ${showSubjectsData()}`);
  dataArray.push(`Avaliação: ${getAvaliation.value}`);
  dataArray.push(`Observações: ${getObservations.value}`);
};

const createParagraph = (place, text) => {
  const myParagraph = document.createElement('p');
  myParagraph.innerText = text;
  place.appendChild(myParagraph);
};

const createFormData = () => {
  const myForm = document.createElement('form');
  myForm.id = 'form-data';
  getMain.appendChild(myForm);
};

const showData = () => {
  getSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    createFormData();
    const getFormData = document.getElementById('form-data');
    transformDataArray();
    for (let index = 0; index < dataArray.length; index += 1) {
      createParagraph(getFormData, dataArray[index]);
    }
    getForm.style.display = 'none';
    alert('Formulário enviado!');
  });
};

showData();

const checkAgreementButton = () => {
  // desabilita botão de enviar form
  getSubmitButton.disabled = true;
  // valida confirmação de concordância com o uso de dados
  const agreement = document.getElementById('agreement');
  agreement.addEventListener('click', () => {
    if (agreement.checked) {
      getSubmitButton.disabled = false;
    } else {
      alert('É necessário concordar com os termos para o envio do formulário.');
    }
  });
};

checkAgreementButton();
