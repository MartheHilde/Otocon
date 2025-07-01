function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
// HEADER SNIPPET
fetch('snippets/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('main-header').innerHTML = data;
  });
