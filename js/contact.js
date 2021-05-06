var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if(status.classList.contains('error')){
        status.classList.remove('error');
        status.classList.add('success');
    }
    status.classList.add('success');
    status.innerHTML = "Your message has been submitted Successfully";
    form.reset();
  }).catch(error => {
    if(status.classList.contains('success')){
        status.classList.remove('success');
        status.classList.add('error');
    }
    status.classList.add('error');
    status.innerHTML = "Oops! Something went wrong in your submittion";
  });
}
form.addEventListener("submit", handleSubmit);