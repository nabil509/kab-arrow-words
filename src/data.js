/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */

const DATA = [
    [
        [ '#TIČUṚANIN TIMELḤANIN¤rb|TAƐEQQAYT¤br', 'T', '#TAYUGA¤rb|XTAṚEN¤bb', 'S', '#ƔERBEL¤rr|SSUFEƔ-D AḌEBSI¤rb', 'S', 'I', 'F' ],
        [ 'T', 'I', 'F', 'I', 'R', 'E', 'S', 'T' ],
        [ '#ṬṬES¤rr|AWI I BAB-IS¤br', 'G', 'E', 'N', '#SKER¤bb', 'K', '#N WAYLA¤tt|SEBDEƐ¤bb', 'I' ],
        [ 'E', 'R', 'R', '#ERR TALABA¤rr|AMAN IGELLEN¤bb', 'E', 'L', 'S', '#NNERNI¤tt|TTAƔEN-TEN-ID¤bb' ],
        [ '#ǦǦANT TAMURT¤rr|TAYUGA N TEƔRA¤bb', 'U', 'N', 'A', 'G', 'E', 'N', 'T' ],
        [ 'I', 'R', 'E', 'D', '#AM TEMẒIT¤ll|AT UNTI¤rr|NGERREZ¤bb', 'S', 'U', 'T' ],
        [ 'I', 'Z', 'N', 'A', 'N', '#AẒAR N YILNI¤rr|GEMT AXMUJ¤bb', 'L', 'N' ],
        [ '#IMAYLEN¤tr|SIWEL¤br', 'A', '#ḌERRU¤rr', 'L', 'E', 'F', 'F', 'U' ],
        [ 'I', 'N', 'I', '#AGUMMU AKIWAN¤rr|GGAMI¤bb', 'L', 'L', 'U', 'Z' ],
        [ '#D AYLA-K¤bb', 'I', '#AMACAHU ...¤rr|YETTAKK ANZI ƔER¤bb', 'A', 'H', 'U', '#TIƔṚA N TEƔZI¤bb', 'U' ],
        [ 'I', 'N', 'A', 'G', 'A', 'M', 'E', 'N¤b' ],
        [ 'K', '#ṚWAN TALA¤tr|AKKEN KAN¤rr', 'M', 'I', '#AMESKAN UNTI¤rr', 'T', 'I', 'D¤t' ]
    ], [
        [ '#CIC! CIC!¤rb|TISURA N WUGUR¤br', 'T', '#I TIBAWT¤rb|KFUMT¤bb', 'U', '#AMESKAN¤rr|ULAMEK ARA YENZ¤bb', 'A', 'T', 'A' ],
        [ 'T', 'I', 'F', 'R', 'A', 'T', 'I', 'N' ],
        [ '#N TEWTILT¤rr|HEDṚEN FELL-AK¤br', 'M', 'A', '#TUQQNA¤bb', 'B', '#N UDRUM¤tt|BƔU¤rr|AḌEN MLIḤ¤bb', 'R', 'I' ],
        [ 'C', 'E', 'K', 'T', 'A', 'N¤r', 'K¤l', '#NADI DEG UQERRU¤tt|UČČIYEN YELHAN¤lb' ],
        [ '#SKUCBUR¤rr|AZAMUL AKIMAN¤bb', 'C', 'K', 'U', 'N', 'Ṭ', 'U', 'Ḍ' ],
        [ 'S', 'Q', 'E', 'R', 'D', 'E', 'C', '#SSERFURI TAḌUṬ¤ll|NEGGUMA¤bb' ],
        [ 'T', 'I', 'M', 'Z', 'U', 'R', 'I', 'N'],
        [ '#TICEKKUḤIN I D-YEƔLIN¤tr|HTUTEK¤rr', 'R', 'T', 'I', '#DDEM UGAR¤rr|NWU¤bb', 'R', 'N', 'U' ],
        [ 'I', 'R', '#AZAMUL N IRIDYUM¤ll|I UFRAN¤bb', 'N', 'Ɣ', '#AẒAR N YINƔI¤ll|ḤESS¤bb', '#CƔEL D¤bb', 'G' ],
        [ 'G', 'E', 'N', '#ḌLEQ¤ll|BU TMEƔRA¤rr|SƐU (YETTI)¤bb', 'I', 'S', 'L', 'I' ],
        [ 'A', 'W', 'E', 'L', 'L', 'E', 'H', '#ASKANAY N UBRID¤ll' ],
        [ '#YEXDEM¤tt|TETTEGRI-RIBEM¤rr', 'T', 'Ɣ', 'E', 'L', 'L', 'I', 'M' ]
    ], [
        [ '#TTEMRIRI-ƔENT¤rb|ARGAZ¤br', 'T', '#TIF-IT TZIZWIT¤rb|DDU AY AƔYUL!¤bb', 'A', '#AKKA I TELLA!?¤rr|MKUL¤rb', 'Y', 'A', 'H' ],
        [ 'A', 'T', 'E', 'R', 'R', 'A', 'S', '#AQUDDIM NNIG¤lb|ČČḤEN ƔEF¤bb' ],
        [ '#QECCEM¤rr|TARBAƐT¤br', 'E', 'R', 'Ẓ', '#AMES (I WAMAN)¤rr|FLAN¤bb', 'L', 'U', 'Ɣ' ],
        [ 'A', 'G', 'R', 'A', 'W', '#SSUREG IMEṬṬI¤rr', 'R', 'U' ],
        [ '#WI ICFAN AYA!¤br', 'R', '#ZIƔEMMA¤rr|SEFḌEN¤bb', 'Z', 'I', 'Ɣ', 'E', 'N' ],
        [ 'Z', 'I', 'K', '#ṬṬMANA TICKI I NETTWALAS¤bb', 'N', '#AẒAR N TEFZA¤rr|TNEQQER¤bb', 'F', 'Z' ],
        [ '#LMANT¤rr|IXMUJEN MEQQREN¤br', 'R', 'K', 'A', 'N', 'T', '#AYEN I D-TEǦǦA TMES¤bb', 'A'],
        [ 'T', 'I', 'S', 'R', 'A', 'F', 'I', 'N' ],
        [ '#WEHMEƔ¤rr|UƔAL D AMAN¤bb', 'B', 'E', 'H', 'T', 'E', 'Ɣ', '#TASƔUNT N TMENTILT¤bb' ],
        [ 'F', 'E', 'N', 'A', '#EǦǦ (YETTI)¤ll|CEṚṚEƐ¤rr|I USIWEL¤bb', 'L', 'D', 'I' ],
        [ 'S', 'N', '#SIN SEG SIN¤ll|AD NXIḌ ABRUƐ (AD)¤rr', 'N', 'A', 'L', 'E', 'M' ],
        [ 'I', 'T', 'T', '#AMQIM UNTI (YETTI)¤ll|INUDA TILKIN¤rr', 'Y', 'U', 'N', 'I' ]
    ]
];

export default DATA;
