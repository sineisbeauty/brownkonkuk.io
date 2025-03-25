document.getElementById('nav').innerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <!-- 로고 -->
            <a href="index.html" class="logo">
                <img src="../imgs/bnk.png">
                Brown-Konkuk <br> Workshop
            </a>

            <button class="menu-toggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>


            <!-- 메인 메뉴 -->
            <ul class="nav-menu">
                <!-- About 메뉴 아이템 -->
                <li class="nav-item">
                    <a href="Speakers.html" class="nav-link">Speakers</a>
                </li>
                <li class="nav-item">
                    <a href="Program.html" class="nav-link">Program</a>
                    <div class="dropdown">
                        <a href="Program.html" class="dropdown-item"> Program </a>
                        <a href="Participants.html" class="dropdown-item"> Participants </a>
                        <a href="Poster.html" class="dropdown-item"> Poster Session </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="Registration.html" class="nav-link">Registration</a>
                </li>
                <li class="nav-item">
                    <a href="Abstract.html" class="nav-link">Abstract</a>
                </li>
                <li class="nav-item">
                    <a href="../html/Travel.html" class="nav-link">Travel</a>
                </li>
                <li class="nav-item">
                    <a href="../html/Venue.html" class="nav-link">Venue</a>
                </li>
                <li class="nav-item">
                    <a href="../html/contact.html" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
`;

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 메뉴 항목 클릭시 메뉴 닫기
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 모바일에서 드롭다운 메뉴 처리
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        // 드롭다운이 있는 항목만 처리
        if (item.querySelector('.dropdown')) {
            // 터치/클릭 이벤트 (모바일용)
            item.addEventListener('click', function(e) {
                // 768px 이하인 경우에만 작동
                if (window.innerWidth <= 768) {
                    // 드롭다운 링크가 아닌 경우에만 기본 동작 방지
                    if (!e.target.classList.contains('dropdown-item')) {
                        e.preventDefault();
                        
                        // 다른 열린 드롭다운 닫기
                        navItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                            }
                        });
                        
                        // 현재 항목 토글
                        item.classList.toggle('active');
                    }
                }
            });
        }
    });
    
    // 화면 크기가 변경될 때 모바일 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            if (menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});