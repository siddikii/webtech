
document.getElementById('add-btn').addEventListener('click', addStudent);



function addStudent(event) {
    event.preventDefault(); 

    // Get student name from input field
    let studentName = document.getElementById('student-name').value;

    // Validation
    if (studentName === '') {
        alert('Please enter a student name');
        return;
    }

    // Create <li> element
    let li = document.createElement('li');
    li.classList.add('student-item');

    // Create <span> for name text
    let span = document.createElement('span');
    span.textContent = studentName;

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn-edit');

    // On click edit the student
    editButton.addEventListener('click', function () {
        editStudent(span);
    });

  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-delete');

    // On click delete the student
    deleteButton.addEventListener('click', function () {
        deleteStudent(li);
    });

    // Append elements to <li>
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Add <li> to the list
    document.getElementById('student-list').appendChild(li);

    // Clear input
    document.getElementById('student-name').value = '';
}



function deleteStudent(studentElement) {
    studentElement.remove();
}


function editStudent(studentNameElement) {
    let newName = prompt('Enter the new name:', studentNameElement.textContent);

    if (newName !== null && newName !== '') {
        studentNameElement.textContent = newName;
    }
}



function changeListStyle() {
    let students = document.querySelectorAll('.student-item');

    students.forEach(student => {
        student.classList.toggle('highlight');
    });
}


document.getElementById('highlight-btn').addEventListener('click', changeListStyle);
