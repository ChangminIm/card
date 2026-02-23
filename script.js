document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const contactLinks = document.querySelectorAll('.contact-link');

    // 카드 마우스 움직임에 따른 3D 틸트 효과
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * 8;
        const tiltY = (x - 0.5) * -8;
        
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
        card.style.boxShadow = '0 12px 40px rgba(45, 90, 74, 0.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        card.style.boxShadow = '0 4px 20px rgba(45, 90, 74, 0.08)';
    });

    // 연락처 링크 클릭 시 부드러운 피드백
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            link.style.transform = 'scale(0.98)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });
});
