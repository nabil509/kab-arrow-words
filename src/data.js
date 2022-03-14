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
        [ 'I', 'T', 'T', '#AMQIM UNTI¤ll|INUDA TILKIN¤rr', 'Y', 'U', 'N', 'I' ]
    ], [
        [ '#TAMEƔRA WUCCEN¤rb|LSAS N TUGDUT¤br', 'T', '#QQAR SEG USEMMIḌ¤rb|ṚUḤ ƔER BEṚṚA¤bb', 'G', '#ANNERNI N TMES¤rb|ALAMMA¤bb', 'A', '#SANI I YERRA?¤rb|TIƔRA¤bb', 'A' ],
        [ 'T', 'I', 'F', 'R', 'A', 'N', 'I', 'N' ],
        [ '#NADI I ṬṬLAM¤rr|UR YESƐI IƔES¤br', 'S', 'F', 'E', 'R', 'F', 'E', 'D' ],
        [ 'I', 'L', 'E', 'S', '#TAMA¤bb', 'U', '#ITTEDDU D "ARA"¤bb', 'A¤b' ],
        [ '#AZGEN N YIƔIL¤rr|NETTA ASEMMAD¤br', 'I', 'Ɣ', '#IƐEDDA LḤAL¤rr|TAFRUT¤bb', 'I', 'F', 'U', 'T¤t' ],
        [ 'I', 'T¤b', '#ṢUBB¤rr|TIKWAL YETTAF-D¤bb', 'A', 'D', 'E', 'R', '#TUBBƔA DEG USEQQI¤bb' ],
        [ '#NDEH-D S¤rr|YELLUFḌI¤br', 'N¤tb', 'A', 'J', 'I¤r', 'D¤l', '#AǦEW¤bb', 'A' ],
        [ 'Y', 'U¤t', 'M', 'E', 'S', '#RZU¤rr|TAZELƔA N TNILA¤bb', 'A', 'S' ],
        [ '#TARGELT 3 N TIKKAL¤rr|LMUZIGA¤br', 'N', 'N', 'N', '#AYEFKI YENDAN¤rr|SEFRU-D¤bb', 'I', 'Ɣ', 'I' ],
        [ 'A', 'Ẓ', 'A', 'W', 'A', 'N', '#TAZMILT N UẒAWAN¤bb', 'S' ],
        [ '#DEG YIƔES¤rr|ṬṬERF¤br', 'A', 'D', 'I', 'F¤b', '#UL N YIFERR¤rr', 'F', 'E' ],
        [ 'I', 'R', 'I', '#RZAN ƔER (... ƔEF)¤rr', 'D¤t', 'L', 'A', 'N' ]
    ], [
        [ '#TIZIRI¤rb|TAGGARA N WASS¤br', 'T', '#DEFFIR N DO¤rb|MEƐNA¤bb', 'R', '#D TAWAƔIT MA UZZLEN!¤rr|ƔUNZU¤bb', 'I', '#NNERNI¤rb|QQIM WAR CCƔEL¤bb', 'F' ],
        [ 'T', 'A', 'M', 'E', 'D', 'D', 'I', 'T' ],
        [ '#TAZMILT N UẒAWAN¤rr|TAGLAST, TAGERCALT¤br', 'F', 'A', '#IƔAWEL (YETTI)¤rr|DDREƔ¤bb', 'R', 'A', 'S', 'I' ],
        [ 'T', 'A', 'C', 'L', 'I', 'M', 'T', '#ITTEKKES S TAWANT¤bb' ],
        [ '#YAL UNTI¤rr|AZING DEG TKIMIT¤br', 'T¤b', 'A', 'L', '#KNU¤rr|ERR TALABA¤bb', 'M', 'I', 'L' ],
        [ 'Z', 'N¤tb', '#AḤELLUF-A¤rr|ISEDHUYEN¤bb', 'I', 'L', 'E', 'F¤r', 'A¤l' ],
        [ '#YEWWIN S UDRIM¤rr|UR NELHI¤br', 'Y¤t', 'U', 'Ɣ', 'E', 'N', '#TAFUNAST¤bb', 'Ẓ'],
        [ 'Y', 'I', 'R', '#UL N TAFADA¤bb', 'S', '#AMZUN¤br', 'T', '#WEJDENT TSEGNATIN¤bb' ],
        [ '#AD TAWEḌ ƔER (AD ...)¤rr|DDERYA¤br', 'T', 'A', 'F', '#AMQIM AMESKAN¤bb', 'Z', 'U', 'N' ],
        [ 'A', 'R', 'R', 'A', 'W', '#MELMI¤rr', 'M', 'I' ],
        [ '#TIƔRA N AZEN¤rr|IMESLAYEN¤br', 'A', 'E', '#IBEƐƐAC ITTEZZIN I WAMMUS¤rr', 'I', 'Z', 'A', 'N' ],
        [ 'I', 'N', 'N', 'A', 'N', '#AMQIM UDMAWAN AWṢIL UNTI¤rr', 'T', 'T' ]
    ]
];

export default DATA;
