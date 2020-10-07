document.addEventListener("DOMContentLoaded", () => {
  // your code here
  makeTask();
});

function makeTask() {
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', makeList);
}

function makeList(event) {
  event.preventDefault();
  // console.log(event.target);
  let descrption = document.getElementById('new-task-description').value
  let ul = document.getElementById('tasks');
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = descrption
  // let li = document.createElement('li');
  // let rule = document.createTextNode(x);
  // li.appendChild(rule)
}
