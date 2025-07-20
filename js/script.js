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
        // Estraggo l'e-mail
        const email = resp.data.response;
        // Controllo quanti <li> ci sono già; se sono meno di 10, appendo
        if (emailList.children.length < 10) {
          const listItem = `<li class="list-group-item">${email}</li>`;
          emailList.innerHTML += listItem;
        }
      });
  }
}

// Con click del bottone, richiamo loadEmails() per ri-generare le e-mail
refreshBtn.addEventListener("click", loadEmails);

// Carico automaticamente le prime 10 email all'avvio della pagina
loadEmails();