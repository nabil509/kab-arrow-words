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
            model: this.emptyData(props.data),
            status: props.status
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

        let border = '';
        const pos = model[i][j].indexOf('¤');
        if (pos != -1) {
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
