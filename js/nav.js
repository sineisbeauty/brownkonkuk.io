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
                    <a href="plenary.html" class="nav-link">Speakers</a>
                </li>
                <li class="nav-item">
                    <a href="plenary.html" class="nav-link">Program</a>
                </li>
                <li class="nav-item">
                    <a href="menu2_drop1.html" class="nav-link">Registration</a>
                </li>
                <li class="nav-item">
                    <a href="menu3_drop1.html" class="nav-link">Abstract</a>
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

// 햄버거 메뉴 동작을 위한 JavaScript
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
});