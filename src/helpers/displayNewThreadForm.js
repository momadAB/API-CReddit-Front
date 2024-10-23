function displayNewThreadForm(formId) {
  console.log(formId);
  const form = document.getElementById(formId);
  if (form.style.display === "none") form.style.display = "flex";
  else form.style.display = "none";
}

export default displayNewThreadForm;
