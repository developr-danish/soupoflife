const decreaseNumber = () => {
  var itemval = document.getElementById('textbox');
  if (itemval.value <= 1) {
    itemval.value = 1;
  } else {
    itemval.value = parseInt(itemval.value) - 1;
  }
};


const increasNumber = () => {
    var itemval = document.getElementById('textbox');
    if (itemval.value >= 5) {
        alert("Max 5 Quantity Allowed")
    } else {
      itemval.value = parseInt(itemval.value) + 1;
    }
  };
  