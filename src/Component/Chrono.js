/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

import React from "react";
import { formatTime } from "../tools";

export default class Chrono extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
      this.setState({ time: this.state.time + 1 });
  }

  reset() {
      this.componentWillUnmount();
      this.setState({ time: 0 });
      this.componentDidMount();
  }

  stop() {
      this.componentWillUnmount();
  }

  render() {
    return (
      <div className="chrono">
        <span className="icon time">{formatTime(this.state.time)}</span>
      </div>
    );
  }
}
