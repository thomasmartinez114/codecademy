// function declarations

function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

// calling a function

function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

// parameters and arguments
function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");
