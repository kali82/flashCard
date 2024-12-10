// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log('XD3');
//   const popup = document.createElement('div');
//   popup.style.position = 'absolute';
//   popup.style.background = 'white';
//   popup.style.border = '1px solid black';
//   popup.style.padding = '10px';
//   popup.innerText = request.text;
//   document.body.appendChild(popup);

//   const selection = window.getSelection();
//   const range = selection?.getRangeAt(0);
//   const rect = range?.getBoundingClientRect();
//   if (rect) {
//     popup.style.top = `${rect.top + window.scrollY}px`;
//     popup.style.left = `${rect.left + window.scrollX}px`;
//   } else {
//     popup.style.top = 100 + 'px';
//     popup.style.left = 100 + 'px';
//   }
// });
console.log('Content script loaded');
document.addEventListener('mouseup', (event) => {
  console.log('XD33');
  const selectedText = window?.getSelection()?.toString().trim();
  if (selectedText && selectedText.length > 0) {
    // Wyświetl ikonę
    const icon = document.createElement('div');
    icon.id = 'my-extension-icon';
    icon.style.position = 'absolute';
    icon.style.top = `${event.pageY}px`;
    icon.style.left = `${event.pageX}px`;
    icon.style.width = '32px';
    icon.style.height = '32px';
    icon.style.zIndex = '1000';
    document.body.appendChild(icon);
  }
});

document.addEventListener('click', (event) => {
  console.log('XD44');
  const icon = document.getElementById('my-extension-icon');
  if (icon && event.target === icon) {
    // Wykonaj akcję po kliknięciu na ikonę
    alert('Ikona została kliknięta!');
    document.body.removeChild(icon);
  }
});
