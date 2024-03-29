document.addEventListener("DOMContentLoaded", function() {
  // Simulate loading time
  setTimeout(function() {
    // Hide loader
    document.querySelector(".loader-container").style.display = "none";
    // Show content
    document.querySelector(".content").classList.remove("hidden");
  }, 1500); // 1500 milliseconds = 1.5 seconds
});
