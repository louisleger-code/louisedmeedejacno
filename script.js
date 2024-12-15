const $menu = document.getElementById("dropdownMenu");
const $menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
	$menu.style.display = $menu.style.display === "block" ? "none" : "block";
}

function hideMenu() {
	$menu.style.display = "none";
}

(function() {
	document.addEventListener('DOMContentLoaded', function() {
    // Get all videos on the page
    const videos = document.getElementsByTagName('video');
    
    // Force play on each video
    for(let video of videos) {
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
    }
});

	document.addEventListener("click", function(event) {
		if(!$menuIcon.contains(event.target) && !$menu.contains(event.target)) {
			hideMenu();
		}
	});
	
	document.addEventListener('DOMContentLoaded', function() {
		const modal = document.getElementById('imageModal');
		const modalImg = document.getElementById('modalImage');
		const closeBtn = document.querySelector('.modal-close');
		let isFullResolution = false;
		
		if (modalImg) {
			document.querySelectorAll('.mosaic').forEach(item => {
				item.addEventListener('click', function(e) {
					e.preventDefault();
					const img = this.querySelector('img');
					
					modalImg.src = img.src;
					modal.classList.add('show');
					document.body.style.overflow = 'hidden';
					isFullResolution = true;
				});
			});
			
			modalImg.addEventListener('click', function(e) {
				e.stopPropagation();
				
				if (isFullResolution) {
					modalImg.classList.add('imageModal--full');
				} else {
					modalImg.classList.remove('imageModal--full');
				}
				
				isFullResolution = !isFullResolution;
			});
		}
		
		// Close modal when clicking the close button or outside the image
		function closeModal() {
			modal.classList.remove('show');
			document.body.style.overflow = '';
			isFullResolution = false;
		}
		
		closeBtn.onclick = closeModal;
		modal.onclick = function(e) {
			if (e.target === modal) {
				closeModal();
			}
		};
		
		// Close on escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && modal.classList.contains('show')) {
				closeModal();
			}
		});
	});
})();