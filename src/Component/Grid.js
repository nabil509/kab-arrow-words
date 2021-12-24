/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import Row from "./Row";
import CellEditor from "./CellEditor";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            model: this.emptyData(this.props.data),
            status: this.props.status
        };

        this.editorElement = React.createRef();

        this.handleCellClick = this.handleCellClick.bind(this);
        this.handleCellEdit = this.handleCellEdit.bind(this);
    }

    emptyData(data) {
        return data.map(row =>
            row.map(cell => cell.startsWith('#') ? cell : cell.substring(1))
        );
    }

    markWrongData() {
        let model = this.state.model;

        model.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.startsWith('#')) {
                    // Def cell, do nothing.
                    return;
                }

                // Unmark error.
                if (cell.indexOf('¤w') !== -1) {
                    model[i][j] = cell = cell.replace('¤w', '');
                }

                if (!cell || (cell.indexOf('¤') === 0)) {
                    // Empty cell, do nothing.
                    return;
                }

                if (cell.substring(0, 1) !== this.props.data[i][j].substring(0, 1)) {
                    model[i][j] += '¤w';
                }
            });
        });

        this.setState({ model: model });
    }

    handleCellClick(row, col) {
        if (this.state.status === GridSatuses.solved) {
            return;
        }

        this.editorElement.current.startEdit(row, col);
    }

    handleCellEdit(i, j, letter) {
        if (this.state.status === GridSatuses.solved) {
            return;
        }

        let model = this.state.model;

        if (model[i][j].indexOf('¤w') !== -1) {
            model[i][j] = model[i][j].replace('¤w', '');
        }

        let border = '';
        const pos = model[i][j].indexOf('¤');
        if (pos !== -1) {
            border = model[i][j].substring(pos);
        }

        model[i][j] = letter + border;

        this.setState({
            model: model,
            status: GridSatuses.playing
        }, () => this.props.onStartPlaying());
    }

    check() {
        if (JSON.stringify(this.state.model) === JSON.stringify(this.props.data)) {
            this.setState({ status: GridSatuses.solved });
            this.editorElement.current.stopEdit();
            return true;
        }

        this.markWrongData();
        return false;
    }

    reset() {
        this.setState({
            status: GridSatuses.initial,
            model: this.emptyData(this.props.data)
        });

        this.editorElement.current.stopEdit();
    }

    solve() {
        this.setState({
            status: GridSatuses.solved,
            model: this.emptyData(this.props.data)
        });

        this.editorElement.current.stopEdit();
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) {
            this.reset();
        }
    }

    render() {
        const model = this.state.status === GridSatuses.solved ? this.props.data : this.state.model;
        const rows = model.map((row, index) =>
            <Row content={row} onCellEdit={this.handleCellEdit} onCellClick={this.handleCellClick} row={index} key={index} />
        );

        return (
            <div>
                <CellEditor ref={this.editorElement} onCellEdit={this.handleCellEdit} />

                <div className="grid">
                    {rows}
                </div>
            </div>
        );
    }
}

export const GridSatuses = {
    initial: 1,
    playing: 2,
    solved: 3
};
