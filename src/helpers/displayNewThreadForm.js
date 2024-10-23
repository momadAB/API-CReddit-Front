function displayNewThreadForm(formId) {
  const form = document.getElementById(formId);
  // form.style.display = "flex";
  if (form.style.display !== "flex") form.style.display = "flex";
  else form.style.display = "none";
}

export default displayNewThreadForm;
