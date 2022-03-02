// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  // UI Constructor
  function UI() {}
  
  // UI Prototype Methods
  UI.prototype.addBookToList = function(book) {
      const list = document.getElementById('book-list');
      //Find the table
      // Create tr element
      // Insert cols
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
      `;
      // Append to table
      list.appendChild(row);
  };
  
  //Show Alert
  UI.prototype.showAlert = function(message, className) {
      //Create div
      const div = document.createElement('div');
      //Add class
      div.className = `alert ${className}`;
      //Add text
      div.appendChild(document.createTextNode(message));
      //Get parent
      const container = document.querySelector('.container');
      //Get form
      const form = document.querySelector('#book-form');
      //Insert alert
      container.insertBefore(div, form);
      //Timeout after 3 seconds
      setTimeout(function() {
          document.querySelector('.alert').remove();
      }, 3000);
  };
  
  // Clear Fields
  UI.prototype.clearFields = function() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
  };
  
  // Event Listeners
  document.getElementById('book-form').addEventListener('submit', (e) => {
      // Get form values
      // Instantiate book
      // Instantiate UI
      // Add book to list
      // Clear fields
      const title = document.getElementById('title'),
              author = document.getElementById('author'),
              isbn = document.getElementById('isbn');
  
      const book = new Book(title.value, author.value, isbn.value);
      const ui = new UI();
  
      // Validate
      if (title.value === '' || author.value === '' || isbn.value === '') {
          ui.showAlert('Please fill in all fields', 'error');
      } else {
          ui.addBookToList(book);
          ui.showAlert('Book Added', 'success');
          ui.clearFields();
      }
      e.preventDefault();
  });