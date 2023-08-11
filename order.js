

function showOrderConfirmation() {
  const orderConfirmationModal = document.getElementById('order-confirmation');
  orderConfirmationModal.style.display = 'block';
}

function hideOrderConfirmation() {
  const orderConfirmationModal = document.getElementById('order-confirmation');
  orderConfirmationModal.style.display = 'none';
}






let basketItems = [];
let basketCount = 0;

function incrementQuantity(element) {
  const quantityInput = element.parentNode.querySelector('.quantity');
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
}

function decrementQuantity(button) {
const quantityInput = button.parentNode.querySelector('.quantity');
let quantity = parseInt(quantityInput.value);

if (quantity > 1) {
quantityInput.value = quantity - 1;
} else if (quantity === 1) {
quantityInput.value = 0;
}
}
function addToBasket(element) {
  const cake = element.parentNode;
  const productName = cake.querySelector('.product-name').innerText;
  const productPrice = parseFloat(cake.querySelector('.product-price').innerText);
  const quantity = parseInt(cake.querySelector('.quantity').value);

  const item = {
    name: productName,
    price: productPrice,
    quantity: quantity
  };

  basketItems.push(item);
  basketCount += quantity;

  updateBasket();
}

function updateBasket() {
  const basketCountElement = document.querySelector('.basket-count');
  const basketTotalElement = document.querySelector('#basket-total');
  const basketItemsElement = document.querySelector('#basket-items');

  basketCountElement.innerText = basketCount;

  let basketItemsHTML = '';
  let total = 0;

  basketItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    basketItemsHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>£${item.price.toFixed(2)}</td>
        <td>£${itemTotal.toFixed(2)}</td>
        <td><button onclick="removeItem(this)">Remove</button></td>
      </tr>
    `;
  });

  basketItemsElement.innerHTML = basketItemsHTML;
  basketTotalElement.innerText = `£${total.toFixed(2)}`;
}

function removeItem(button) {
  const index = button.parentNode.parentNode.rowIndex - 1;
  const item = basketItems[index];

  basketCount -= item.quantity;
  basketItems.splice(index, 1);

  updateBasket();
}

function toggleBasket() {
  const basketModal = document.getElementById('basket-modal');
  basketModal.classList.toggle('show');
}

function checkout() {
  

}

function toggleBasket() {
  const basketModal = document.getElementById('basket-modal');
  basketModal.classList.toggle('show');
}
let customer = {
firstName: '',
lastName: '',
address: ''
};

function showCheckoutModal() {
const checkoutModal = document.getElementById('checkout-modal');
checkoutModal.style.display = 'block';
}

function hideCheckoutModal() {
const checkoutModal = document.getElementById('checkout-modal');
checkoutModal.style.display = 'none';
}

function placeOrder() {

}

function updateCustomerInfo() {
customer.firstName = document.getElementById('first-name').value;
customer.lastName = document.getElementById('last-name').value;
customer.address = document.getElementById('address').value;
}



function submitOrder() {
updateCustomerInfo();


if (customer.firstName && customer.lastName && customer.address) {

placeOrder();


hideCheckoutModal();
} else {
alert('Please enter your name and address.');
}
}

function submitOrder() {
updateCustomerInfo();


if (customer.firstName && customer.lastName && customer.address) {

placeOrder();


hideCheckoutModal();


showOrderConfirmation();

basketItems = [];
basketCount = 0;
updateBasket(); 



document.getElementById('first-name').value = '';
document.getElementById('last-name').value = '';
document.getElementById('address').value = '';


} else {
alert('Please enter your name and address.');
}


}