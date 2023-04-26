require('dotenv').config();

const sgMail = require('@sendgrid/mail');
const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} =process.env;
sgMail.setApiKey(SG_API_KEY);
console.log("in contact")
export default async function handler (req, res){
  console.log("in handler")
  console.log(req.body)
  const {name, email, taille, quantite, papier, impression} = req.body;
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: `Commander par ${name}`,
    html: `
      <h1> <b>Un Nouveau Commande</b> </h1>
      <p>Nom et Prénom : ${name}</p>
      <p>Email : ${email}</p>
      <p>Taille : ${taille}</p>
      <p>Taille : ${quantite}</p>
      <p>Taille : ${papier}</p>
      <p>Taille : ${impression}</p>
    `
  }
  await sgMail.send(msg);
  res.json({success: true});
}






