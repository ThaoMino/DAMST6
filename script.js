document.addEventListener("DOMContentLoaded", function() {
    const scrollAmount = 300; // Đây là khoảng cách mà bạn muốn cuộn mỗi lần nhấn nút

    const prevButton = document.querySelector('.scroll-button.prev');
    const nextButton = document.querySelector('.scroll-button.next');
    const container = document.querySelector('.pro-container');

    

    // Lắng nghe sự kiện click cho dropdown menu
    function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    }

    // Lắng nghe sự kiện click cho nút hotline
    function toggleHotline() {
        var hotline = document.getElementById("hotlineOptions");
        hotline.classList.toggle("show");
    }

    // Thêm sự kiện click vào window để ẩn các nội dung khi click ra ngoài
    window.onclick = function(event) {
        // Nếu click không phải là trên nút dropdown hoặc hotline
        if (!event.target.matches('.dropbtn') && !event.target.matches('#hotlineButton')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }

            var hotline = document.getElementById("hotlineOptions");
            if (hotline.classList.contains('show')) {
                hotline.classList.remove('show');
            }
        }
    };
    document.querySelector('.scroll-button.prev').addEventListener('click', function() {
        document.querySelector('.pro-container').scrollBy({ left: -300, behavior: 'smooth' });
    });

    document.querySelector('.scroll-button.next').addEventListener('click', function() {
        document.querySelector('.pro-container').scrollBy({ left: 300, behavior: 'smooth' });
    });
    
});
