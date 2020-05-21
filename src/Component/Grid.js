/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import Row from "./Row";
import { unselectAllCells } from "../tools";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            model: this.emptyData(props.data),
            status: props.status
        };

        this.handleCellEdit = this.handleCellEdit.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
    }

    emptyData(data) {
        return data.map(row =>
            row.map(cell => cell.startsWith('#') ? cell : cell.substring(1))
        );
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
        });
    }

    handleCellClick(cell) {
        if (this.state.status === GridSatuses.solved) {
            return;
        }

        unselectAllCells();

        cell.focus();
        cell.classList.add('selected');
    }

    check() {
        if (JSON.stringify(this.state.model) === JSON.stringify(this.props.data)) {
            this.setState({ status: GridSatuses.solved });
            return true;
        }

        return false;
    }

    reset() {
        this.setState({
            status: GridSatuses.initial,
            model: this.emptyData(this.props.data)
        });

        unselectAllCells();
    }

    solve() {
        this.setState({
            status: GridSatuses.solved,
            model: this.emptyData(this.props.data)
        });

        unselectAllCells();
    }

    render() {
        const model = this.state.status === GridSatuses.solved ? this.props.data : this.state.model;
        const rows = model.map((row, index) =>
            <Row content={row} onCellEdit={this.handleCellEdit} onCellClick={this.handleCellClick} row={index} key={index} />
        );

        return (
            <div className="grid">
                {rows}
            </div>
        );
    }
}

export const GridSatuses = {
    initial: 1,
    playing: 2,
    solved: 3
};
