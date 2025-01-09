// const cards = document.querySelectorAll('.customers-container .customers-cards .customer-card');
// const sliderLine = document.querySelector('.customers-cards');
// let count = 0;
// let width;
// let wrapWidth;

// function init() {
// 	console.log('resize window');
// 	wrapWidth = document.querySelector('.cards-wrapper').offsetWidth;
// 	if (wrapWidth >= 425 && wrapWidth <= 768) {
// 		width = wrapWidth / 2 + 8;
// 	} else if (wrapWidth >= 768  && wrapWidth <= 1024) {
// 		width = wrapWidth / 3 - 25;
// 	} else if (wrapWidth >= 1024  && wrapWidth <= 1440) {
// 		width = wrapWidth / 3 - 50;
// 	} else {
// 		width = wrapWidth;
// 	}
	
// 	sliderLine.style.width = width * cards.length + 'px';
// 	console.log(sliderLine.style.width);
// 	cards.forEach(item => {
// 		if (wrapWidth > 425) {
// 			item.style.width = width - 16 + 'px';
// 		} else {
// 			item.style.width = width + 'px';
// 		}
// 		item.style.height = 'auto';
// 	});
// 	rollSlider();	
// }

// init();
// window.addEventListener('resize', init)

// document.querySelector("[slider-btn-prev]").addEventListener('click', function () {
// 	if (wrapWidth > 425 && wrapWidth < 768) {
// 		count -= 1;
// 	} else if (wrapWidth > 768) {
// 		count -= 1;
// 	} else {
// 		count--;
// 	}
// 	if (count < 0) {
//     count = cards.length - 1;
//   }
// 	rollSlider();
// });

// document.querySelector("[slider-btn-next]").addEventListener('click', function () {
// 	if (wrapWidth > 425 && wrapWidth < 768) {
// 		count += 1;
// 	} else if (wrapWidth > 768) {
// 		count += 1;
// 	} else {
// 		count++;
// 	}
// 	if (count >= cards.length) {
//     count = 0;
//   }
// 	rollSlider();
// });

// function rollSlider() {
// 	sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// 	console.log('rolling');
// 	console.log(count);
// 	blurOutOfViewCards();
// }

// function blurOutOfViewCards() {
// 	const visibleStart = count * width;
// 	if (wrapWidth <= 1024){
// 		const visibleEnd = visibleStart + wrapWidth - 100;
// 	} else if (wrapWidth <= 1440) {
// 		const visibleEnd = visibleStart + wrapWidth - 200;
// 	}
// 	console.log(`visibleStart - ${visibleStart}`, `visibleEnd - ${visibleEnd}`);
	

//     cards.forEach((card, index) => {
//         const cardStart = index * width;
//         const cardEnd = cardStart + width;
// console.log(`cardStart - ${cardStart}`, `cardEnd - ${cardEnd}`);

//         if (cardEnd <= visibleStart || cardStart >= visibleEnd) {
// 					card.style.filter = 'blur(4px)';
// 					console.log('blur');
					
//         } else {
//             card.style.filter = 'none';
//         }
//     });
// }