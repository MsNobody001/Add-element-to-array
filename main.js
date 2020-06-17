const btn = document.querySelector('button');
const div = document.querySelector('div');
const input = document.querySelector('input');

const names = [];

const addElement = (e) => {
    e.preventDefault();
    if (input.value.length) {
        const newName = input.value;
        for (name of names) {
            if (name === newName) {
                alert('To imię już jest!');
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = '';
    }
}

btn.addEventListener('click', addElement);