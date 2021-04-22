const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   //inserir dados na tabela
   // await saveOrphanage(db, {
   //    lat: "-9.7538554",
   //    lng: "-36.6618892",
   //    name: "Laslováquia",
   //    about: "Presta assistência a crianças de 06 a 15 anos que se encontrem e situação de risco e/ou vulnerabilidade social.",
   //    whatsapp: "912345678",
   //    images: [
   //       "https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
   //       "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
   //    ].toString(),
   //    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
   //    opening_hours: "Horário de visitas<br>Das 8h até as 18h",
   //    open_on_weekends: "1"
   // });

   //consultar dados da tabela
   const selectedOrphanages = await db.all(`SELECT * FROM orphanages;`);
   console.log(selectedOrphanages);
})