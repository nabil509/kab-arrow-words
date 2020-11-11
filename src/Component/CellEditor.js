/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import { isLetter, toUpper, toSpecial, triggerClick, offset } from "../tools";

export default class CellEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elt: null,
            letter: '',
            row: -1,
            col: -1
        };

        this.inputElement = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    startEdit(row, col) {
        const elt = document.getElementById('cell_' + row + '_' + col);
        if (! elt) {
            return;
        }

        this.setState({
            elt: elt,
            letter: elt.innerText,
            row: row,
            col: col
        }, () => this.inputElement.current.focus());
    }

    stopEdit() {
        this.setState({
            elt: null,
            letter: '',
            row: -1,
            col: -1
        });
    }

    handleChange(e) {
        let row = this.state.row, col = this.state.col;

        const value = e.target.value;
        const key = value.charAt(value.length - 1);
        var special = null;

        if (isLetter(key)) {
            const letter = toUpper(key);
            this.setState({ letter: letter });
            this.props.onCellEdit(row, col, letter);
        } else if ((key === '_') && (special = toSpecial(this.state.letter))) { // Underscore.
            this.setState({ letter: special });
            this.props.onCellEdit(row, col, special);
        }
    }

    handleKeyDown(e) {
        let row = this.state.row, col = this.state.col;
        const key = e.which || e.keyCode;

        if (key === 8 || key === 46) { // Backspace or Delete.
            e.preventDefault();
            this.setState({ letter: '' });
            this.props.onCellEdit(row, col, '');
        } else if (key === 37) { // Arrow Up.
            e.preventDefault();
            triggerClick('cell_' + row + '_' + (col - 1));
        } else if (key === 39) { // Arrow Down.
            e.preventDefault();
            triggerClick('cell_' + row + '_' + (col + 1));
        } else if (key === 40) { // Arrow Right.
            e.preventDefault();
            triggerClick('cell_' + (row + 1) + '_' + col);
        } else if (key === 38) { // Arrow Left.
            e.preventDefault();
            triggerClick('cell_' + (row - 1) + '_' + col);
        }
    }

    render() {
        // Render nothing if no selected cell.
        if (! this.state.elt) {
            return null;
        }

        // Place cell editor component on focused cell.
        let pos = offset(this.state.elt);
        const editorWrapperStyle = {
            top: pos.top + 'px',
            left: pos.left + 'px'
        };

        return (
            <div style={editorWrapperStyle} className="selected">
                <input type="text"
                       name="editor"
                       autoComplete="off"
                       value={this.state.letter}
                       ref={this.inputElement}
                       onChange={this.handleChange}
                       onKeyDown={this.handleKeyDown} />
            </div>
        );
    }
}
