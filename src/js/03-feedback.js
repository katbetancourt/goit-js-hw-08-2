import throttle from "lodash.throttle";


const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');


function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}


function loadFormState() {
  const storedState = localStorage.getItem("feedback-form-state");
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
}


const saveFormStateThrottled = throttle(saveFormState, 500);


loadFormState();


emailInput.addEventListener("input", saveFormStateThrottled);
messageTextarea.addEventListener("input", saveFormStateThrottled);


feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault(); 


  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };


  localStorage.removeItem("feedback-form-state");


  console.log(formState);

  emailInput.value = "";
  messageTextarea.value = "";
});
