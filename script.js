
// === Alternar abas de notícias (Brasil, Europa, Internacional) ===
function showTab(tabName, event) {
  // Esconder todas as seções de notícias
  const sections = document.querySelectorAll('.noticias');
  sections.forEach(sec => sec.style.display = 'none');

  // Remover classe 'active' de todas as abas
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Mostrar apenas a aba selecionada
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.classList.add('active');
}
