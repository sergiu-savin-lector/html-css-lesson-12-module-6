const formElement = document.querySelector(".example-form");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const entires = formData.entries();

  for (var input of entires) {
    console.log(input[0] + ": " + input[1]);
  }
});
