/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import PropTypes from "prop-types";

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleBackdropClick = this.handleBackdropClick.bind(this);
    }

    handleBackdropClick(e) {
        if (e.target.classList.contains('backdrop')) {
            this.props.onClose();
        }
    }

    render() {
        // Render nothing if the "show" prop is false.
        if (! this.props.show) {
            return null;
        }

        return (
            <div className="backdrop" onClick={this.handleBackdropClick}>
                <div className="modal">
                    {this.props.title  &&
                        <div className="modal-header">
                            {this.props.title}
                            <span className="modal-header-close"
                                  onClick={this.props.onClose}>&times;</span>
                        </div>
                    }

                    <div className="modal-content">
                        {this.props.children}
                    </div>

                    <div className="modal-footer">
                        {this.props.buttons.map((btn, index) =>
                            <button className="general" onClick={btn.handler} key={index}>
                                <span className={btn.iconCls ? ('icon ' + btn.iconCls) : ''}>{btn.label}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            iconCls: PropTypes.string,
            handler: PropTypes.func.isRequired
        })
    ),
    children: PropTypes.node
};
