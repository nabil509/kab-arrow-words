/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import { toSpecial, toUpper, isLetter } from "../tools";

export default class LetCell extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick(e) {
        this.props.onCellClick(e.target);
    }

    handleKeyDown(e) {
        const key = e.which || e.keyCode;
        var special = null;

        if (key === 8 || key === 46) {
            this.props.onCellEdit(this.props.row, this.props.col, '');
            e.preventDefault();
        } else if (key === 37) {
            this.triggerClick('cell_' + this.props.row + '_' + (this.props.col - 1));
            e.preventDefault();
        } else if (key === 39) {
            this.triggerClick('cell_' + this.props.row + '_' + (this.props.col + 1));
            e.preventDefault();
        } else if (key === 40) {
            this.triggerClick('cell_' + (this.props.row + 1) + '_' + this.props.col);
            e.preventDefault();
        } else if (key === 38) {
            this.triggerClick('cell_' + (this.props.row - 1) + '_' + this.props.col);
            e.preventDefault();
        } else if ((key === 56) && (special = toSpecial(e.target.innerText))) { // Underscore.
            this.props.onCellEdit(this.props.row, this.props.col, special);
        }
    }

    triggerClick(id) {
        const elt = document.getElementById(id);

        if (elt) {
            elt.click();
        }
    }

    handleKeyPress(e) {
        const key = e.which || e.keyCode;

        if (isLetter(key)) {
            this.props.onCellEdit(this.props.row, this.props.col, toUpper(key));
        }
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
                 onClick={this.handleClick}
                 onKeyDown={this.handleKeyDown}
                 onKeyPress={this.handleKeyPress}>{letter}</div>
        );
    }
}
