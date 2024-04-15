// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      appendIdToDOM(data.id);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      appendErrorToDOM(error.message);
      return error;
    });
}

function appendIdToDOM(id) {
  const newIdElement = document.createElement("p");
  newIdElement.textContent = `New ID: ${id}`;
  document.body.appendChild(newIdElement);
}

function appendErrorToDOM(errorMessage) {
  const errorElement = document.createElement("p");
  errorElement.textContent = errorMessage;
  document.body.appendChild(errorElement);
}

submitData("Steve", "steve@steve.com");
submitData("Moses", "mutisyamoses722@gmail.com");
