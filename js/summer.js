
let count = 0;

const accessories = document.getElementsByClassName('accessories');
for (element of accessories) {
      element.addEventListener('click', function (e) {

            count = count + 1;
            const listContainer = document.getElementById('list-container');
            const li = document.createElement('li');
            li.innerText = `${count}. ${e.target.children[1].innerText}`;
            li.classList.add('text-2xl');
            li.classList.add('mb-3');
            li.classList.add('font-medium');

            listContainer.appendChild(li);

            const itemPrice = e.target.children[2].innerText;
            const splitPrice = itemPrice.split(' ')[0];
            const price = parseFloat(splitPrice);

            const totalPrice = elementTextValueById('total-price');

            const applyBtn = document.getElementById('apply-btn');
            const newTotalPrice = parseFloat(totalPrice) + price;
            if (newTotalPrice >= 200) {
                  applyBtn.disabled = false;
            }

            updateELementTextById('total-price', newTotalPrice.toFixed(2));
            updateELementTextById('total', newTotalPrice.toFixed(2));

            const purchaseBtn = document.getElementById('purchase-btn');
            purchaseBtn.disabled = false;
      })
}



// Discount part
function applyDiscount() {
      const couponInput = document.getElementById('coupon-input');
      if (couponInput.value === 'SELL200') {

            const totalPrice = elementTextValueById('total-price');
            const discount = totalPrice * (20 / 100);
            const priceAfterDiscount = totalPrice - discount;

            updateELementTextById('discount', discount.toFixed(2))

            updateELementTextById('total', priceAfterDiscount.toFixed(2));
      }
      else {
            return alert('Invalid Coupon')
      }
}

function backToHome() {
      location.reload()
}