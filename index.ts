import {TComp} from 'p4-comp';


export const P4CompLinebreakZigzigzag: TComp<{}, {}> = function P4CompLinebreakZigzigzag() {
    return () => ['div', {style: {width:100, margin:'40px auto'}},
        ['svg', {width: 100, height: 40},
            ['path', {
                d: 'M0 32 L35 20 L20 32 L55 20 L40 32 L75 20 L60 32 L95 20',
                style: {
                    fill: 'none',
                    stroke: '#aaa',
                    strokeWidth: '5px',
                }
            }]
        ]
    ];
};


export const bot = ({view, manifest}) => {

    manifest({
        name: 'Zigzigzag Linebreak Bot',
        version: '0.0.2',
        icon: {
            '48': 'http://192.168.1.10:8888/img/zigzigzag-bot-48x48.png',
        },
    });

    view('hr', P4CompLinebreakZigzigzag);
};
