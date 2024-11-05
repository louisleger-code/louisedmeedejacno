const $menu = document.getElementById("dropdownMenu");
const $menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
	$menu.style.display = $menu.style.display === "block" ? "none" : "block";
}

function hideMenu() {
	$menu.style.display = "none";
}

(function() {
	document.addEventListener("click", function(event) {
		if(!$menuIcon.contains(event.target) && !$menu.contains(event.target)) {
			hideMenu();
		}
	});
})();
