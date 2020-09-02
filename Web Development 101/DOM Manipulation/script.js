const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text content';

let paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = 'Hi I\'m red!'

let hThree = document.createElement('h3');
hThree.style.color = 'blue';
hThree.textContent = 'I\'m a blue h3!';

let div = document.createElement('div');
div.classList.add('newDiv');
div.style.cssText = "border: black solid 1px; background-color: pink;";

let hOne = document.createElement('h1');
hOne.textContent = 'I\'m in a div';

let secondP = document.createElement('p');
secondP.textContent = 'ME TOO!';

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(hThree);
container.appendChild(div);

div.appendChild(hOne);
div.appendChild(secondP);