/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

const EXTENDED_ALPHABET = [
    'A', 'Ɛ', 'B', 'C', 'Č', 'D', 'Ḍ', 'E', 'F', 'G', 'Ǧ', 'H',
    'Ḥ', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Ɣ', 'Q', 'R',
    'Ṛ', 'S', 'Ṣ', 'T', 'Ṭ', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ẓ'
];

const MAPPING = {
    E: 'Ɛ',
    C: 'Č',
    D: 'Ḍ',
    G: 'Ǧ',
    H: 'Ḥ',
    Q: 'Ɣ',
    R: 'Ṛ',
    S: 'Ṣ',
    T: 'Ṭ',
    Z: 'Ẓ'
};

export function isLetter(char) {
    return EXTENDED_ALPHABET.includes(toUpper(char));
}

export function toUpper(char) {
    return String.fromCharCode(char).toUpperCase();
}

export function toSpecial(char) {
    if (! char) {
        return null;
    }

    return MAPPING.hasOwnProperty(char) ? MAPPING[char] : null;
}

export function formatTime(seconds) {
    return Math.floor(seconds / 3600) + ':' + lpad(Math.floor((seconds % 3600) / 60), 2) + ':' + lpad(Math.floor(seconds % 3600 % 60), 2);
}

export function formatUserTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 3600 % 60);

    let time = '';

    if (h > 0) {
        time += h + 's, ';
    }

    if (m > 0) {
        time += m + 'd, ';
    }

    time += s + 'n';

    return time;
}

export function lpad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}

export function unselectAllCells() {
    var elts = document.querySelectorAll('.cell.let');
    elts.forEach(function (item) {
        item.classList.remove('selected');
    });
}
