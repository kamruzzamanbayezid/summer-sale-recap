function elementTextValueById(id) {
      const element = document.getElementById(id);
      return parseFloat(element.innerText).toFixed(2);
}

function updateELementTextById(id, value) {
      const element = document.getElementById(id);
      element.innerText = value;
}