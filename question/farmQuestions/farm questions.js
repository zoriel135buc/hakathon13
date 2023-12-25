<<<<<<< HEAD
function toggleAccordion(accordionId) {
  // Toggle the visibility of the accordion content
  var accordionContent = document.getElementById(
    "accordion-content" + accordionId.slice(-1)
  );
  accordionContent.style.display =
    accordionContent.style.display === "none" ? "block" : "none";
}
=======
<<<<<<< HEAD

=======
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "Enter" (key code 13)
  if (event.code === "enter") {
    // Toggle the visibility of the accordion content
    var accordionContent = document.getElementById("accordion-content");
    accordionContent.style.display =
      accordionContent.style.display === "none" ? "block" : "none";
  }
});
>>>>>>> 1a150cd4db4bcca5fd8dafbf507edfdfd3cbdf75
>>>>>>> fb343d89f2ae7f3b84a37fe8dc9f7a97d751155c
