const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () {
    if (input.value != '') {
        const myItem = input.value;
        input.value = '';
    }
});

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// li.textContent = input.value;
li.textContent = myItem;
deleteButton.textContent = '❌';
li.append(deleteButton);
li.append('testing 123 cody ');
list.append(li);

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';