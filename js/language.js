const mandarin = document.getElementById("mandarin");
const english = document.getElementById("english");
const language = localStorage.getItem("language");

if (language === "mandarin") {
  mandarin.style.display = "block";
  english.style.display = "none";
} else {
  mandarin.style.display = "none";
  english.style.display = "block";
}

  function changelanguage() {
  const mandarin = document.getElementById("mandarin")
  const english = document.getElementById("english")
  var btnlanguage = document.getElementById("btnlanguage")
  if (mandarin.style.display === "none") {
  mandarin.style.display = "block";
  english.style.display = "none";
  localStorage.setItem("language", "mandarin"); // Save language preference
} else {
  mandarin.style.display = "none";
  english.style.display = "block";
  localStorage.setItem("language", "english"); // Save language preference
}
}