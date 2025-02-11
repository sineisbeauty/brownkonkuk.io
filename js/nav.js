document.getElementById('nav').innerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <!-- 로고 -->
            <a href="index.html" class="logo"><img src="../imgs/brown_and_konkuk.png">
            &nbsp; Brown-Konkuk <br> Workshop  </a>

            <!-- 메인 메뉴 -->
            <ul class="nav-menu">
                <!-- About 메뉴 아이템 -->
                <li class="nav-item">
                    <a href="plenary.html" class="nav-link">Plenary</a>
                </li>
                <li class="nav-item">
                    <!-- 메뉴 2를 누르면 drop1이 기본으로 뜨도록 하기  -->
                    <a href="menu2_drop1.html" class="nav-link">Registration</a>
                    <!-- 여기서는 드롭다운인데요. 지금은 안써서 주석처리. -->
                    <!-- <div class="dropdown">
                        <a href="menu2_drop1.html" class="dropdown-item">드롭1</a>
                        <a href="menu2_drop2.html" class="dropdown-item">드롭2</a>
                        <a href="menu2_drop3.html" class="dropdown-item">드롭3</a>
                    </div> -->
                </li>
                <li class="nav-item">
                    <a href="menu3_drop1.html" class="nav-link">Abstract</a>
                    <!-- <div class="dropdown">
                        <a href="menu3_drop1.html" class="dropdown-item">드롭1</a>
                        <a href="menu3_drop2.html" class="dropdown-item">드롭2</a>
                        <a href="menu3_drop3.html" class="dropdown-item">드롭3</a>
                    </div> -->
                </li>
                <li class="nav-item">
                    <a href="../html/contact.html" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
`;
