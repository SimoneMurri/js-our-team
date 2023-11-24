//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: './img/angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: './img/walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: './img/angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: './img/scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Grapich Designer',
        foto: './img/barbara-ramos-graphic-designer.jpg'
    },
]

team.forEach( member => {
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
})

const listTeam = document.getElementById ('team-member');

team.forEach(member => {
    const memberInfo = document.createElement('div');
    memberInfo.innerHTML = `
      <p>Nome: ${member.nome}</p>
      <p>Ruolo: ${member.ruolo}</p>
      <img src="${member.foto}" alt="${member.nome}">
    `;
    listTeam.appendChild(memberInfo);
  });
