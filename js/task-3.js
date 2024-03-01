function getElementWidth(content, padding, border) {
  const contentNumber = parseFloat(content.replace('px', ''));
  const paddingLeftRightNumber = parseFloat(padding.slice(0, -1)) * 2;
  const borderLeftRightNumber = parseFloat(border.slice(0, -1)) * 2;
  return contentNumber + paddingLeftRightNumber + borderLeftRightNumber;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
