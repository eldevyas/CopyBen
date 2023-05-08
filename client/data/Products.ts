import { Product } from "@/types/Product";
import { randomInt } from "crypto";

// will be used in this file that is accessible for the netire website data
let ImagesDirectory = '/img/products';
let StartCount = 0;
let EndCount = 4;
const products = [
    // Cartes De Visite
    {
        name: "Cartes De Visite",
        description: "Des cartes de visite pour votre entreprise ou utilisation personnelle.",
        get images() {
            let ImagesList: string[] = [];
            let Count = EndCount;
            for (let i = StartCount; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/Products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        unitPrice: 1.56
    },
    // Flyers
    {
        name: "Flyers",
        description: "Des flyers personnalisés pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = EndCount;
            for (let i = StartCount; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/Products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        unitPrice: 0.54
    },
    // Dépliants
    {
        name: "Bloc Note",
        description: "Des Bloc Notes personnalisées pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = EndCount;
            for (let i = StartCount; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/Products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        unitPrice: 1.6
    },
    // Brochures
    {
        name: "Brochures",
        description: "Des brochures personnalisées pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = EndCount;
            for (let i = StartCount; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/Products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        unitPrice: 2.8
    },
];

export default products;


export const getProductByName = (name: string): Product | undefined => {
    return products.find((product) => product.name.toLowerCase().replace(/ /g, "-") === name);
};