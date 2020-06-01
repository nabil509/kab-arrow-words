/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";

export default class LetCell extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onCellClick(this.props.row, this.props.col);
    }

    render() {
        let className = 'cell let';
        const id = 'cell_' + this.props.row + '_' + this.props.col;

        let letter = this.props.content;
        let border = null;

        const pos = this.props.content.indexOf('¤');
        if (pos != -1) {
            letter = this.props.content.substring(0, pos);
            border = this.props.content.substring(pos + 1);
        }

        if (border) {
            for (var i = 0; i < border.length; i++) {
                className += ' border-' + border.charAt(i);
            }
        }

        return (
            <div id={id}
                 className={className}
                 tabIndex={this.props.row + this.props.col}
                 onClick={this.handleClick}>{letter}</div>
        );
    }
}
