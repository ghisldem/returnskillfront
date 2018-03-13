

import { MenuItem } from '../../../themes/menu/menu.component';

export const MENU_CONSULTING: MenuItem[] = [
    {
        text: 'Tableau de bord',
        link : '#/consulting',
    },
    {
        text: 'Dossier de compétences',
        icon :'folder-open',
        children : [
            {
                text: 'Tout',
                link : '#/consulting/all'

            },

            {
                text: 'Formations',
                icon : 'graduation-cap',
                link : '#/consulting/training'
            },
            {
                text: 'Expériences',
                icon : 'wrench',
                link : '#/consulting/experience'

            },
            {
                text: 'Langues',
                icon : 'globe',
                link : '#/consulting/language'
            },
            {
                text: 'Compétences',
                icon : 'cogs',
                link : '#/consulting/skills'
            },

        ]
    }
]
