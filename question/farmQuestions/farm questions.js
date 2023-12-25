function toggleAccordion(accordionId) {
  // Toggle the visibility of the accordion content
  var accordionContent = document.getElementById(
    "accordion-content" + accordionId.slice(-1)
  );
  accordionContent.style.display =
    accordionContent.style.display === "none" ? "block" : "none";
}
