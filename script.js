const wrapper = document.querySelector('.slider-wrapper');
const dots = document.querySelectorAll('.dot');

let activeDotNum = 0;

dots.forEach((dot, index) => {
	dot.setAttribute('data-num', index);

	dot.addEventListener('click', (e) => {
		let clickedDotNum = e.target.dataset.num;
		if (clickedDotNum == activeDotNum) return;
		else {
			let displayAreaWidth =
				document.querySelector('.display-area').clientWidth;
			let pixels = -displayAreaWidth * clickedDotNum;
			wrapper.style.transform = 'translateX(' + pixels + 'px)';
			dots[activeDotNum].classList.remove('active');
			dots[clickedDotNum].classList.add('active');
			// //       now set the active dot number to the clicked dot;
			activeDotNum = clickedDotNum;
		}
	});
});
