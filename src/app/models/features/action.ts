
/** action model */
export class Action {

    tag: string;
    icon?: string;
    control?: (...args) => void;

    constructor(tag, icon, control?) {

    }
}


/**example use actions table */
const ACTIONS: Action[] = [
    {
        tag: 'search',
        icon: 'search', // icon of fontawesome
        control: function () { console.log('display search bar'); },
    },
    {
        tag: 'edit',
        icon: 'pencil',
        control: function (user) { console.log('edit : ' + user); },
    },
    {
        tag: 'delete',
    },
    {
        tag: 'add',
        icon: 'plus-square'
    },
    {
        tag: 'add',
        icon: 'plus-square'
    },

];
