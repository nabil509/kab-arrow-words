/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

'use strict';

class Events {
    constructor() {
        this.callbacks = {};
    }

    trigger(eventName, data = null) {
        if (this.callbacks[eventName]) {
            Object.keys(this.callbacks[eventName]).forEach((id) => {
                this.callbacks[eventName][id](data);
            });
        }
    }

    listen(eventName, id, callback) {
        if (!this.callbacks[eventName]) {
            this.callbacks[eventName] = {};
        }

        this.callbacks[eventName][id] = callback;
    }

    unlisten(eventName, id) {
        delete this.callbacks[eventName][id];
    }
}

export default new Events();
