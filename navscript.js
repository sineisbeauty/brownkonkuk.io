        // 마지막 스크롤 위치를 저장할 변수
        let lastScrollY = window.scrollY;

        // navbar 요소를 선택
        const navbar = document.querySelector('.navbar');

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', () => {
            // 현재 스크롤 위치 저장
            const currentScrollY = window.scrollY;

            // 스크롤 방향 확인
            if (currentScrollY > lastScrollY) {
                // 아래로 스크롤할 때: navbar에 'hidden' 클래스 추가
                navbar.classList.add('hidden');
            } else {
                // 위로 스크롤할 때: navbar에서 'hidden' 클래스 제거
                navbar.classList.remove('hidden');
            }

            // 마지막 스크롤 위치 업데이트
            lastScrollY = currentScrollY;
        });
