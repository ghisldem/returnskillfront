import { NbMenuItem } from '../../../themes/menu/menu.service';


interface MenuItem {
    title : string;
    link : string;
    icon : string;
    children?: MenuItem[];
    parent?: MenuItem;
    }

export const MENU_ITEMS: MenuItem[] = [
    {
        title: 'listes',
        icon: 'test1',
        link: 'test1',
        children: [
            {
                title: 'Buttons',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                link: '/pages/ui-features/grid',
            },
       ],

    },
    {
        title: 'FEATURES',
        icon: '',
        link: '',

    },
    {
        title: 'UI Features',
        icon: 'nb-keypad',
        link: '/pages/ui-features',
        
    },
];
