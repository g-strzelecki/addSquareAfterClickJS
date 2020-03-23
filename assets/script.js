const btn = document.querySelector('button');
const wrapper = document.querySelector('.wrapper');
let counter = 0;
const addElement = () => {
  counter++;
  const div = document.createElement('div');
  div.classList.add('square');
  div.textContent = counter;
  if (counter % 5 == 0) {
    div.classList.add('circle');
  }
  wrapper.appendChild(div);
}
btn.addEventListener("click", addElement);
