// added to cart notification
const decreaseNumber = () => {
  var itemval = document.getElementById('textbox');
  var price = document.getElementById('productPrice')
  var totalprice = document.getElementById('totalPrice')
  if (itemval.value <= 1) {
    itemval.value = 1;
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    price.innerHTML = parseInt(price.innerHTML) - 599.00;
    totalprice.innerHTML = price.innerHTML;
  }
};


const increasNumber = () => {
    var itemval = document.getElementById('textbox');var totalprice = document.getElementById('totalPrice')
    var price = document.getElementById('productPrice')
    var totalprice = document.getElementById('totalPrice')
    if (itemval.value >= 5) {
        alert("Max 5 Quantity Allowed")
    } else {
      itemval.value = parseInt(itemval.value) + 1;
      price.innerHTML = parseInt(price.innerHTML) + 599.00;
      totalprice.innerHTML = price.innerHTML;
    }
  };
  