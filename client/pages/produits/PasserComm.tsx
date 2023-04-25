import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function PasserComm() {
  return (
    
        <div >
            <div >
            <h1>Passer Commande</h1>
            <p>ENVOYER FICHIER EN LIGNE OU PLUS TARD PAR MAIL ICI (SUPER PROMO - FLYER A4)</p>
            </div>
            <br /><br />
            <div>
             <label>Taille : </label>
             <select >
                <option >1</option>
                <option >2</option>
                <option >3</option>
             </select>
             <button className="lol">Transférer un fichier superieur à 150</button>
             </div>
             <br /><br />
             <div>
             <p>mecri de telecharge uniquement des fichiers jgp .jpeg </p>
             <label >Nom du fichier </label> <input type="text" />
             <br /><br />
             <p>Telecharger votre Recto ici </p>
             <input type="file" />

             </div>
            
            
        </div>
        

        

  )
}
