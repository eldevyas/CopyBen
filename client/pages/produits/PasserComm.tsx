import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";


export default function PasserComm() {
  return (

    <div className="PasserComm__main">
      <div className="lol">
        <h1>Passer Commande</h1>
        <p className="para1">ENVOYER FICHIER EN LIGNE OU PLUS TARD PAR MAIL ICI (SUPER PROMO - FLYER A4)</p>
      </div>

      <div className="taille_info">
        <label>Taille : </label>
        <select >
          <option >1</option>
          <option >2</option>
          <option >3</option>
        </select>
        <button>Transférer un fichier superieur à 150</button>
      </div>


      <div>
        <p>mecri de telecharge uniquement des fichiers jgp .jpeg </p>
        <label >Nom du fichier </label> <input type="text" />
        <p>Telecharger votre Recto ici </p>
        <input type="file" />
      </div>

    </div>
  )
}
