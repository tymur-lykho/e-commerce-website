const colorOptions = document.querySelectorAll('.color-btn');
const sizeOptions = document.querySelectorAll('.size-btn');
const quantityInput = document.getElementById('quantity');
const avalibleProductQuantity = 10;
	
document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.product-big-photo');
  const thumbnails = document.querySelectorAll('.preview-item-btn');

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      const imageUrl = thumbnail.getAttribute('data-image');

      mainImage.style.backgroundImage = `url(${imageUrl})`;
      thumbnails.forEach((thumb) => thumb.classList.remove('active'));
      thumbnail.classList.add('active');
    });
  });
});


colorOptions.forEach(option => {
  option.addEventListener('click', function () {
    // // Змінюємо зображення
    // mainImage.src = this.dataset.image;

    // Видаляємо активний клас у всіх кольорів
    colorOptions.forEach(color => color.classList.remove('active'));

    // Додаємо активний клас до вибраного кольору
    this.classList.add('active');
  });
});

sizeOptions.forEach(option => {
	option.addEventListener('click', function () {
		sizeOptions.forEach(size => size.classList.remove('active'));
		this.classList.add('active');
	});
});

document.querySelector('.quantity-decrease').addEventListener('click', () => {
  if (quantityInput.value > 1) {
    quantityInput.value--;
  }
});

document.querySelector('.quantity-increase').addEventListener('click', () => {
	if (quantityInput.value < avalibleProductQuantity) {
		quantityInput.value++;
	}
});

// Додавання до кошика
document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
  const selectedColor = document.querySelector('.color-btn.active').dataset.color;
  const selectedSize = document.querySelector('.size-btn.active').dataset.size;
	const selectedQuantity = quantityInput.value;
	const selectedProduct = document.querySelector('.product-title').textContent;

	console.log({
		product: selectedProduct,
    color: selectedColor,
    size: selectedSize,
    quantity: selectedQuantity,
	});
});