const addDoctor = document.getElementById('add_doc');
const docPage = document.querySelector('.doc-num');
const deactivate = document.querySelector(".deactivate");
const deactivateButtons = document.querySelectorAll(".deactivate");



// function for adding doctor by its id (only Frontend)

addDoctor.addEventListener('click', function () {
    const newDoc = document.createElement('div');
    newDoc.placeholder= "Enter ID"
    newDoc.className = 'add_doc';
    docPage.append(newDoc);

    const idInput = document.createElement('input');
    idInput.placeholder= "Enter ID"
    idInput.className = 'idInput';
    newDoc.append(idInput);

    const enter = document.createElement('button');
    enter.textContent = "Enter"
    enter.className = 'enter';
    newDoc.append(enter);

    addDoctor.remove()


    enter.addEventListener('click', function () {
        newDoc.remove()
        docPage.append(addDoctor);
    });
});



// A Function for activating and deactivating on the dashboard table

deactivateButtons.forEach(deactivate => {
  deactivate.addEventListener('click', () =>  {
    if (deactivate.textContent === 'Deactivate') {
      deactivate.textContent = 'Activate';
    }
    else {
      deactivate.textContent = 'Deactivate';
    }
  });
});

