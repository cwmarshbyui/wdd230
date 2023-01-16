const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', () => {
    if (input.value != '') {
        const myItem = input.value;
        li.textContent = input.value;
        li.textContent = myItem;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        console.log(list)
        input.value = '';
        input.focus();
    }
});

const li = document.createElement('li');
const deleteButton = document.createElement('button');

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

li.textContent = myItem;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
input.focus();
input.value = '';