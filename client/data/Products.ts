import { Product } from "@/types/Product";
import { randomInt } from "crypto";

// will be used in this file that is accessible for the netire website data
let ImagesDirectory = '/img/products'
const products = [
    // Cartes De Visite
    {
        name: "Cartes De Visite",
        description: "Des cartes de visite pour votre entreprise ou utilisation personnelle.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(100);
        }
    },
    // Flyers
    {
        name: "Flyers",
        description: "Des flyers personnalisés pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(100);
        }
    },
    // Dépliants
    {
        name: "Dépliants",
        description: "Des brochures personnalisées pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(100);
        }
    },
    // Brochures
    {
        name: "Brochures",
        description: "Des brochures personnalisées pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(100);
        }
    },
    // Affiches
    {
        name: "Affiches",
        description: "Des affiches personnalisées pour votre entreprise ou événement.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(100);
        }
    },
    // Chemises
    {
        name: "Chemises",
        description: "Custom folders for your business or event.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(150);
        }
    },
    // Chemise à Rabat
    {
        name: "Chemise à Rabat",
        description: "Custom folders with flaps for your business or event.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(200);
        }
    },
    // Bloc Note
    {
        name: "Bloc Note",
        description: "Custom notepads for your business or personal use.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(50);
        }
    },
    // Calendrier
    {
        name: "Calendrier",
        description: "Custom calendars for your business or personal use.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i <= Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(80);
        }
    },
    // Lettres à en tete
    {
        name: "Lettres à en tete",
        description: "Custom letterheads for your business or personal use.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(70);
        }
    },
    // Enveloppe
    {
        name: "Enveloppe",
        description: "Custom envelopes for your business or personal use.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(30);
        }
    },
    // Carnet de tickets
    {
        name: "Carnet de tickets",
        description: "Custom tickets books for your events or raffles.",
        get images() {
            let ImagesList: string[] = [];
            let Count = 4;
            for (let i = 0; i < Count; i++) {
                ImagesList.push(`${ImagesDirectory}/${this.name.toLowerCase().replace(/ /g, "-")}/${i + 1}.jpg`);
            }
            return ImagesList;
        },
        get url() {
            return `/products/${this.name.toLowerCase().replace(/ /g, "-")}`;
        },
        get unitPrice() {
            return randomInt(40);
        }
    }
];

export default products;


export const getProductByName = (name: string): Product | undefined => {
    return products.find((product) => product.name.toLowerCase().replace(/ /g, "-") === name);
};