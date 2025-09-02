fetch('http://localhost:3000/env')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));