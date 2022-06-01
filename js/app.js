// Definisco un array di oggetti che rappresentano i membri del team 

const membriTeam = [
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        imgSrc: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        imgSrc: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        imgSrc: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        imgSrc: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        imgSrc: "barbara-ramos-graphic-designer.jpg"
    },

];

console.table(membriTeam);

// Seleziono il div dentro cui stampare i dati inseriti

const membriHtml = document.querySelector(".team-container");

// Creo un ciclo all'interno dell'array creato prima e stampo l'html con valori dinamici

for (let i = 0; i < membriTeam.length; i++) {
    membriHtml.innerHTML += `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${membriTeam[i].imgSrc}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${membriTeam[i].nome}  </h3>
      <p> ${membriTeam[i].ruolo} </p>
    </div>
  </div>`

}