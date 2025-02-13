let lastScrollY = window.scrollY;
let navbar = document.querySelector('.navbar');
let isScrollingDown = false; // 현재 스크롤 방향을 저장하는 변수

window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // 아래로 스크롤하면 네비게이션 바 숨기기 (중복 실행 방지)
        if (!isScrollingDown) {
            isScrollingDown = true;
            requestAnimationFrame(() => {
                navbar.classList.add('hidden');
            });
        }
    } else {
        // 위로 스크롤하면 네비게이션 바 다시 보이기 (중복 실행 방지)
        if (isScrollingDown) {
            isScrollingDown = false;
            requestAnimationFrame(() => {
                navbar.classList.remove('hidden');
            });
        }
    }

    lastScrollY = currentScrollY; // 현재 스크롤 위치 업데이트
});