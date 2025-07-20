// Seleziono l'elemento <ul> dove inserire le email
const emailList = document.getElementById("emailList");
// Seleziono il bottone che rigenera le email
const refreshBtn = document.getElementById("refreshBtn");
// Funzione che carica 10 email casuali dall'API
function loadEmails() {
  // Svuoto la lista prima di inserire nuove voci
  emailList.innerHTML = "";

  // Eseguo 10 chiamate axios in un ciclo
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((resp) => {
        // Estraggo l'email dalla risposta
        const email = resp.data.response;
        // Creo un nuovo <li> con la classe di Bootstrap e l'email
        const listItem = `<li class="list-group-item">${email}</li>`;
        // Lo appendo alla lista
        emailList.innerHTML += listItem;
      });
  }
}
// Al click del bottone, richiamo loadEmails() per rigenerare le email
refreshBtn.addEventListener("click", loadEmails);

// Carico automaticamente le prime 10 email all'avvio della pagina
loadEmails();
