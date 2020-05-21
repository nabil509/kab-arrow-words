/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

'use strict';

import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import DATA from "./data";

const INDEX = Math.floor(Math.random() * DATA.length);

ReactDOM.render(
    <App data={DATA[INDEX]} index={INDEX} />,
    document.getElementById('main_app_container')
);
