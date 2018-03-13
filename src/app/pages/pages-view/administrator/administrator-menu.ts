

import { MenuItem } from '../../../themes/menu/menu.component';

export const MENU_ADMINISTRATOR: MenuItem[] = [
    {
        text: 'Tableau de bord',
        link : '#/administrator',
    },
    {
        text: 'Listes',
        icon :'list-ul',
        children : [
            {
                text: 'Tout',
                link : '#/administrator'

            },
            {
                text: 'Utilisateurs',
                icon : 'users',
                link : '#/administrator/users'

            },
            {
                text: 'Compétences',
                icon : 'cogs',
                link : '#/administrator/skills'
            },

        ]
    }
]
