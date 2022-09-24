/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import Dialog from "./Dialog";
import Events from "../events";

import previousIcon from "../img/previous.png";
import nextIcon from "../img/next.png";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: this.props.index,
            selected: -1,
            confirmMove: false
        };

        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleMoveClick = this.handleMoveClick.bind(this);
        this.handleHashChange = this.handleHashChange.bind(this);
    }

    handleMoveClick(e) {
        const selected = this.state.selected;

        if ((selected < 0) || (selected > this.props.max)) {
            console.log('Selected index is out of bounds.');
            return;
        }

        window.location.hash = '#' + (selected + 1);

        this.setState({ current: selected, selected: -1, confirmMove: false });
        Events.trigger('move', selected);
    }

    move(index) {
        if (this.state.current === index) {
            console.log('Index to move to is the same as current index.');
            return;
        }

        this.setState({ confirmMove: true, selected: index });
    }

    handlePreviousClick(e) {
        const index = Math.max(this.state.current - 1, 0);
        this.move(index);
    }

    handleNextClick(e) {
        const index = Math.min(this.state.current + 1, this.props.max);
        this.move(index);
    }

    handleHashChange(e) {
        var hash = window.location.hash ? window.location.hash.substring(1) : -1;

        if ((hash > 0) && (hash <= this.props.max + 1) && (hash != this.state.current + 1)) {
            this.move(hash - 1);
        } else if (hash != this.state.current + 1) {
            window.location.hash = '#' + (this.state.current + 1);
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.handleHashChange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.handleHashChange);
    }

    render() {
        const moveButtons = [{
            label: 'Ih',
            iconCls: 'tick',
            handler: this.handleMoveClick
        }, {
            label: 'Ala',
            iconCls: 'cross',
            handler: () => this.setState({ confirmMove: false })
        }];

        const disableNextClassName = this.state.current >= this.props.max ? 'disabled' : '';
        const disablePreviousClassName = this.state.current <= 0 ? 'disabled' : '';

        return (
            <span>
                <a title="Ar deffir" onClick={this.handlePreviousClick}><img src={previousIcon} className={disablePreviousClassName} /></a>
                <h3>AWALEN S TNECCABIN Ṭ° {this.state.current + 1}</h3>
                <a title="Ar zdat" onClick={this.handleNextClick}><img src={nextIcon} className={disableNextClassName} /></a>

                <Dialog style={{ width: 400 }}
                        show={this.state.confirmMove}
                        title="Beddel urar"
                        buttons={moveButtons}
                        onClose={() => this.setState({ confirmMove: false })}>
                    D tidet tebɣiḍ ad tḥebseḍ urar-a akken ad tebduḍ wayeḍ?
                </Dialog>
            </span>
        );
    }
}
