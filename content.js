
const insertText = (text) => {
    // Check if the page has a textarea.
    const textarea = document.querySelector('textarea');
    if (textarea) {
      const startPosition = textarea.selectionStart; // The position of the cursor at the beginning of the selected text.
      const endPosition = textarea.selectionEnd; // The position of the cursor at the end of the selected text.
      const originalText = textarea.value; // The original text in the textarea.
      const newText = originalText.slice(0, startPosition) + text + originalText.slice(endPosition); // The new text in the textarea.
      
      textarea.value = newText; // Insert the new text into the textarea.
      textarea.focus(); // Focus on the textarea.
      textarea.selectionEnd = startPosition + text.length; // Set the cursor position at the end of the inserted text.
      textarea.selectionStart = startPosition + text.length; // Set the cursor position at the beginning of the inserted text.
    }
  };
  
  // Create a button.
  const addButton = (title,text) => {
    const button = document.createElement('button'); // Create a button.
    button.textContent = `${title}`; // Set the button text.
    button.addEventListener('click', (event) => {
        event.preventDefault();
        insertText(text); // Insert text into the textarea.
      });
    return button;
  };
  
  // Add buttons to the page.
  const init = () => {
    // Check if the page has a textarea.
    const textarea = document.querySelector('textarea').parentElement;
    if (textarea && !document.querySelector('.textarea-buttons')) {
      // Create a container for the buttons.
      const container = document.createElement('div');
      container.className = 'textarea-buttons';
      container.style.display = 'flex';
      container.style.gap = '5px';
      container.style.marginTop = '5px';
      // Add buttons to the container.
      container.appendChild(addButton('Summarize','Summarize the following text in English: '));
      container.appendChild(addButton('Translate','If the following text is in English, translate it into Italian, and if in Italian, then into English: '));
      container.appendChild(addButton('Poem','Create a poem based on the following text: '));
      container.appendChild(addButton('Response','My name is Ilya, think of what to answer me in this dialogue: '));
      // Add the container below the textarea.
      textarea.parentNode.insertBefore(container, textarea.nextSibling);
    }
  };
  
  init();
  
  // If the page uses dynamic elements, periodically check and add buttons if necessary.
  setInterval(init, 1000);
  