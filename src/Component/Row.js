/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import DefCell from "./DefCell";
import LetCell from "./LetCell";

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const row = this.props.content.map((cell, index) =>
            cell.startsWith('#') ?
                <DefCell content={cell} key={index} /> :
                <LetCell content={cell}
                         onCellEdit={this.props.onCellEdit}
                         onCellClick={this.props.onCellClick}
                         row={this.props.row}
                         col={index}
                         key={index} />
        );

        return (
            <div className="row">{row}</div>
        );
    }
}
