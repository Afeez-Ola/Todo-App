"use strict";

var form = document.querySelector('form');
var subTask = document.querySelector('#addtask');
var input = document.querySelector('#task');
var taskCard = document.querySelector('ul.collection');
var task = document.querySelector('li.collection-item');
form.addEventListener('submit', addTask);
input.value = '';

function addTask(e) {
  // Creating a delete icon with the DOM
  var delBtn = document.createElement('a');
  delBtn.classList = 'delete-item secondary-content';
  delBtn.innerHTML = '<i class="fa fa-remove"></i>';
  delBtn.style.cursor = 'pointer'; // Creating a new task element and adding the delete icon to the task

  var newTask = document.createElement('li');
  newTask.className = 'collection-item';
  newTask.textContent = input.value;
  newTask.appendChild(delBtn); // Adding the new Task into the Task collection

  taskCard.appendChild(newTask);
  e.preventDefault();
} // document.querySelector('form').addEventListener('submit', storage);
// function storage(e) {
//     const task = document.querySelector('#task').value;
//     let tasks;
//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('Successfully Saved!');
//     // e.preventDefault();
//     e.preventDefault();
// }
// let tasks = localStorage.getItem('tasks');
// tasks = JSON.parse(tasks);
// tasks.forEach(function(task) {
//     console.log(task);
// });