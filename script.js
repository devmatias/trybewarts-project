const loginBtn = document.getElementById("login-button");
const senha = document.getElementById("senha");
const email = document.getElementById("email");
const getMain = document.getElementById("main");
const getForm = document.getElementById("evaluation-form");
const getFirstName = document.getElementById("input-name");
const getLastName = document.getElementById("input-lastname");
const getEmail = document.getElementById("input-email");
const getHouse = document.getElementById("house");
const getSubmitButton = document.getElementById("submit-btn");
const getFirstNameError = document.getElementById("first-name-error");
const getLastNameError = document.getElementById("last-name-error");
const getEmailError = document.getElementById("email-error");
const getHouseError = document.getElementById("house-error");
const getFamilyError = document.getElementById("family-error");
const getSubjectsError = document.getElementById("subjects-error");
const getAvaliationError = document.getElementById("avaliation-error");
const getObservationError = document.getElementById("observation-error");
const getAgreementError = document.getElementById("agreement-error");
let validationArray = [];
let dataArray = [];

// Criando a função do HEADER
function entradaLogin() {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

loginBtn.addEventListener("click", entradaLogin);

// FUNÇAO CONTADOR
const textArea = document.getElementById("textarea"); // textbox
const count = document.getElementById("counter"); // charcount
const maxNumOfChars = 500;

const cntCarac = () => {
  const numOfEnteredChars = textArea.value.length;
  const counter = maxNumOfChars - numOfEnteredChars;
  count.textContent = `${counter}/500`;
};

textArea.addEventListener("input", cntCarac);
// FIM CONTADOR

const showSubjectsData = () => {
  const getSubjects = document.querySelectorAll(".subject:checked");
  let mySubjects = "";
  for (let index = 0; index < getSubjects.length; index += 1) {
    if (index !== getSubjects.length - 1) {
      mySubjects += `${getSubjects[index].value}, `;
    } else {
      mySubjects += ` ${getSubjects[index].value}`;
    }
  }
  return mySubjects;
};

const transformDataArray = () => {
  const getFamily = document.querySelector('input[name="family"]:checked');
  const getAvaliation = document.querySelector('input[name="rate"]:checked');
  const getObservations = document.querySelector("#textarea");
  dataArray.push(`Nome: ${getFirstName.value} ${getLastName.value}`);
  dataArray.push(`Email: ${getEmail.value}`);
  dataArray.push(`Casa: ${getHouse.value}`);
  dataArray.push(`Família: ${getFamily.value}`);
  dataArray.push(`Matérias: ${showSubjectsData()}`);
  dataArray.push(`Avaliação: ${getAvaliation.value}`);
  dataArray.push(`Observações: ${getObservations.value}`);
};

const createParagraph = (place, text) => {
  const myParagraph = document.createElement("p");
  myParagraph.innerText = text;
  place.appendChild(myParagraph);
};

const createFormData = () => {
  const myForm = document.createElement("form");
  myForm.id = "form-data";
  getMain.appendChild(myForm);
};

const showData = () => {
  getSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateAllInputs();
    for (let validation of validationArray) {
      if (!validation) {
        validationArray = [];
        return;
      }
    }
    createFormData();
    const getFormData = document.getElementById("form-data");
    transformDataArray();
    for (let index = 0; index < dataArray.length; index += 1) {
      createParagraph(getFormData, dataArray[index]);
    }
    getForm.style.display = "none";
    alert("Formulário enviado!");
  });
};

showData();

const checkAgreementButton = () => {
  // desabilita botão de enviar form
  getSubmitButton.disabled = true;
  getSubmitButton.style.background = "gray";
  // valida confirmação de concordância com o uso de dados
  const agreement = document.getElementById("agreement");
  agreement.addEventListener("click", () => {
    if (agreement.checked) {
      getSubmitButton.disabled = false;
      getSubmitButton.style.background = "purple";
    } else {
      getSubmitButton.style.background = "gray";
      getSubmitButton.disabled = true;
    }
  });
};

checkAgreementButton();


function validate(input, error) {
  let valid = true;
  if (!input.value) {
    error.classList.add("visible");
    error.classList.remove("hidden-error");
    valid = false;
  } else {
    error.classList.remove("visible");
    error.classList.add("hidden-error");
  }
  return valid;
}

const filterCheckbox = () => {
  const checkboxArray = []
  const getSubjects = document.querySelectorAll(".subject");
  for (let subject of getSubjects) {
    if (subject.checked) {
      return subject;
    } else {
      checkboxArray.push('')
    }
  }
  console.log(checkboxArray)
  return checkboxArray[0];
  
}

const validateAllInputs = () => {
  const getFamily = document.querySelector('input[name="family"]:checked');
  const getAvaliation = document.querySelector('input[name="rate"]:checked');
  const getObservations = document.querySelector("#textarea");
  validationArray.push(validate(getFirstName, getFirstNameError));
  validationArray.push(validate(getLastName, getLastNameError));
  validationArray.push(validate(getEmail, getEmailError));
  validationArray.push(validate(getHouse, getHouseError));
  validationArray.push(validate(getFamily, getFamilyError));
  validationArray.push(validate(filterCheckbox(), getSubjectsError));
  validationArray.push(validate(getAvaliation, getAvaliationError));
  validationArray.push(validate(getObservations, getObservationError));
  console.log(validationArray);
};
