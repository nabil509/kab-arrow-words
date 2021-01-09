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
import Header from "./Component/Header";

import App from "./Component/App";
import DATA from "./data";

import './app.css';

var INDEX = DATA.length; // By default, open the last grid.

var hash = window.location.hash ? window.location.hash.substring(1) : -1;
if ((hash > 0) && (hash <= INDEX)) {
    INDEX = hash; // Load grid passed in hash.
}

INDEX--; // Real array index.

ReactDOM.render(
    <App index={INDEX} data={DATA} />,
    document.getElementById('container')
);

ReactDOM.render(
    <Header index={INDEX} max={DATA.length - 1} />,
    document.getElementById('header')
);
