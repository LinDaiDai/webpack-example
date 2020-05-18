function createElement () {
  const element = document.createElement('div')
  element.innerHTML = '孔子曰：中午不睡，下午崩溃!孟子曰：孔子说的对!';
  // element.classList.add('color_red')
  // element.classList.add('color_blue')
  return element;
}
document.body.appendChild(createElement())
