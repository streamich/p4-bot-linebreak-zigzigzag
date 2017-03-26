"use strict";
var P4CompLinebreakZigzigzag = require('p4-comp-linebreak-zigzigzag').P4CompLinebreakZigzigzag;
exports.bot = function (_a) {
    var view = _a.view, manifest = _a.manifest;
    manifest({
        name: 'Zigzigzag Linebreak Bot',
        version: '0.0.1',
        icon: {
            '48': 'http://192.168.1.10:8888/img/zigzigzag-bot-48x48.png',
        },
    });
    view('hr', P4CompLinebreakZigzigzag);
};
