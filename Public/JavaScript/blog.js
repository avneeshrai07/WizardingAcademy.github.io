let editorContent; // Declare editorContent at the global scope

function saveContent(content) {
  // Log the content to ensure it is correct
  console.log('Content to be sent:', content);
  
  // Make a POST request to the server
  fetch('/save-content', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: editorContent,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error saving content');
      }
      return response.text();
    })
    .then(data => {
      console.log(data);
      // Handle success as needed
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error as needed
    });
}

// Usage example
function getContent() {
  editorContent = document.getElementById('editor').innerHTML;
  console.log('Editor Content:', editorContent);

  // Send content to the server
  saveContent(editorContent);
}
