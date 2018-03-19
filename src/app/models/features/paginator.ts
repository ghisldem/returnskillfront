
/** action model */
export class PaginatorBack {


    last?: boolean =  false;
    totalPages: number;
    totalElements: number;
    size?: number;
    number?: number;
    sort?: String;
    numberOfElements: number;
    first?: boolean;


    constructor() {

    }
}


/**example use actions table */
const paginatorBack: PaginatorBack = {
    
    "last": false, //est-ce la dernière page?
    "totalPages": 3, //nombre de pages
    'totalElements': 26, //nombre d'élements dans la liste
    'size': 10, //taille de la page
    'number': 0, //numéro page à afficher
    'numberOfElements': 10, //nombre d'élements sur la page
    'first': true,//est-ce la première page?
}
