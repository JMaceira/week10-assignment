// let btnAdd = document.querySelector('button');
// let table = document.querySelector('hobbytable');

// let firstNameInput = document.querySelector('#FirstName');
// let lastNameInput = document.querySelector('#LastName');
// let hobbyInput = document.querySelector('#Hobby');

// btnAdd.addEventListener('click', () => {
//     let firstName = firstNameInput.value;
//     let lastName = lastNameInput.value;
//     let hobby = hobbyInput.value; 

//     let template = `
    
//             <tr>
//             <td>${firstName}<td>
//             <td>${lastName}<td>
//             <td>${hobby}<td>
//             <tr>`;

//             table.innerHTML += template;
// })


// function addRow(table) {
//     // Get a reference to the table
//     let tableRef = document.getElementById(table);
  
//     // Insert a row at the end of the table
//     let newRow = tableRef.insertRow(-1);
  
//     // Insert a cell in the row at index 0
//     let newCell = newRow.insertCell(0);
  
//     // Append a text node to the cell
//     let newText = document.createTextNode("New bottom row");
//     newCell.appendChild(newText);
//   }
  
//   // Call addRow() with the table's ID
//   addRow("hobbytable");

// function onClick(id, action) {
//     let element = document.getElementById(id);
//     element.addEventListener('click', action);
//     return element;
// }

// onClick('submitbutton', () => {
//    return firstName.value;
// })

// const table = document.getElementById('hobbytable-body')
// const submitButton = document.getElementById('submitbutton')
// document.body.append(submitButton)

// submitButton.addEventListener("click", () => {
//     return firstName
// })
// console.log(submitButton)

document.getElementById('submitbutton').addEventListener('click', () => {
    let parent = document.getElementsByClassName('form-group');
    let newElement = document.createElement('tr');
    newElement.innerHTML = document.getElementById('FirstName').value;
    parent.appendChild(newElement);
})