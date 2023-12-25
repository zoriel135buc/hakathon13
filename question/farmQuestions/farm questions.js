document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Enter" (key code 13)
  if (event.code === "enter") {
    // Toggle the visibility of the accordion content
    var accordionContent = document.getElementById("accordion-content");
    accordionContent.style.display =
      accordionContent.style.display === "none" ? "block" : "none";
  }
});
