/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";

export default class DefCell extends React.Component {
    constructor(props) {
        super(props);
    }

    convertArrow(a) {
        const arrows = {
            r: '\u25BA',
            l: '\u25C4',
            t: '\u25B2',
            b: '\u25BC'
        };

        return arrows[a];
    }

    render() {
        let parts = this.props.content.substring(1).split('|'); // Split defs after '#' first char.

        const defs = parts.map((part, index) => {
            let textClass = 'text text-1-' + parts.length; // For element height.
            textClass += (index + 1 === parts.length) ? ' last' : ' regular';

            const def = part.substring(0, part.indexOf('¤'));

            const dirInfo = part.substring(part.indexOf('¤') + 1);
            const pos = dirInfo.charAt(0); // Where to put arrow?
            const dir = dirInfo.charAt(1); // What arrow to display?

            const dirClass = 'dir dir-' + pos;

            return (<div className={textClass} key={index}>{def}<div className={dirClass}>{this.convertArrow(dir)}</div></div>);
        });

        return (
            <div className="cell def">{defs}</div>
        );
    }
}
