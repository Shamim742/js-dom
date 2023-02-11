console.log('second js')

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic litem';
secondList.appendChild(li)