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

var INDEX = Math.floor(Math.random() * DATA.length);
ReactDOM.render(
    <App index={INDEX} data={DATA} />,
    document.getElementById('container')
);

ReactDOM.render(
    <Header index={INDEX} max={DATA.length - 1}></Header>,
    document.getElementById('header')
);
