

import { MenuItem } from '../../../themes/menu/menu.component';

export const MENU_MANAGER: MenuItem[] = [
    {
        text: 'Tableau de bord',
        link : '#/manager',
    },
    {
        text: 'Recherches',
        icon :'search',
        children : [
            {
                text: 'Tout critère',
                link : '#/manager/search_all'

            },
            {
                text: 'Compétences',
                icon : 'cogs',
                link : '#/manager/search_skills'
            },

        ]
    }
]
