document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // 모든 섹션 선택
    const dots = document.querySelectorAll(".dot"); // 도트 선택

    // 섹션을 스크롤할 때 활성 도트 업데이트
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
            if (current === dot.parentElement.getAttribute("href").substring(1)) {
                dot.classList.add("active");
            }
        });
    });
});

