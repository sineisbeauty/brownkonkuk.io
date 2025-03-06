let lastScrollY = window.scrollY;
let isScrollingDown = false;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
        // 스크롤 내리는 중
        isScrollingDown = true;
    } else {
        // 스크롤 올리는 중
        isScrollingDown = false;
    }

    requestAnimationFrame(() => {
        if (isScrollingDown) {
            navbar.classList.add('hidden'); // 위로 숨김
        } else {
            navbar.classList.remove('hidden'); // 아래로 나타남
        }
    });

    lastScrollY = currentScrollY;
});