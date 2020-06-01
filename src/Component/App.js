/**
 * This file is part of Kabyle Arrow Words Game. See COPYING.md for license details.
 *
 * @author    Nabil S. <nabil509 at gmail dot com>
 * @copyright nabil509
 * @license   http://www.gnu.org/licenses/gpl.html GNU General Public License (GPL v3)
 */
import React from "react";
import Grid, { GridSatuses } from "./Grid";
import Chrono from "./Chrono";
import Dialog from "./Dialog";

import { formatUserTime } from "../tools";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHelp: false,
            confirmReset: false,
            confirmSolve: false,
            showResult: false,
            status: GridSatuses.initial
        };

        this.gridElement = React.createRef();
        this.chronoElement = React.createRef();

        this.handleCheckClick = this.handleCheckClick.bind(this);
        this.handleSolveClick = this.handleSolveClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.startPlaying = this.startPlaying.bind(this);
    }

    handleCheckClick() {
        if (this.gridElement.current.check()) {
            this.setState({ status: GridSatuses.solved });
            this.chronoElement.current.stop();
        }

        this.setState({ showResult: true });
    }

    handleSolveClick() {
        this.gridElement.current.solve();
        this.chronoElement.current.stop();

        this.setState({ confirmSolve: false, status: GridSatuses.solved });
    }

    handleResetClick() {
        this.gridElement.current.reset();

        if (this.gridElement.current.state.status === GridSatuses.solved) {
            this.chronoElement.current.reset();
        }

        this.setState({ confirmReset: false, status: GridSatuses.initial });
    }

    startPlaying() {
        this.setState({ status: GridSatuses.playing });
    }

    render() {
        const helpButtons = [{
            label: 'Mdel',
            iconCls: 'cross',
            handler: () => this.setState({ showHelp: false })
        }];

        const checkButtons = [{
            label: 'Mdel',
            iconCls: 'cross',
            handler: () => this.setState({ showResult: false })
        }];

        const solveButtons = [{
            label: 'Ih',
            iconCls: 'tick',
            handler: this.handleSolveClick
        }, {
            label: 'Ala',
            iconCls: 'cross',
            handler: () => this.setState({ confirmSolve: false })
        }];

        const resetButtons = [{
            label: 'Ih',
            iconCls: 'tick',
            handler: this.handleResetClick
        }, {
            label: 'Ala',
            iconCls: 'cross',
            handler: () => this.setState({ confirmReset: false })
        }];

        return (
            <div className="app">
                <h2 className="title">AWALEN S YINECCABEN Ṭ° {this.props.index + 1}</h2>

                <div className="actions">
                    <button className="general" onClick={ () => this.setState({ showHelp: true }) }>
                        <span className="icon help">Ilugan</span>
                    </button>
                    <Dialog show={this.state.showHelp}
                            title="Ilugan"
                            buttons={helpButtons}
                            onClose={ () => this.setState({ showHelp: false }) }>
                        <p>Tibuda n wawalen ara d-tafeḍ deg wurar-a, ttunefkent-d deg texxamin yesɛan ineccaben.
                        Awalen ilaq ad ttwarun seg uzelmaḍ ar uyeffus neɣ seg usawen ar ukessar ɣas ma yella
                        uneccab-nsen iwehha ɣer tama tanmeglant.</p>
                        <ul>
                            <li>Tekki ɣef texxamin tilmawin akken ad taruḍ asekkil i tebɣiḍ. Tzemreḍ ad tselḥuḍ ger texxamin s teqfilin n tnila n unasiw. Sseqdec tiqfilin "←" d "Suppr" ma tebɣiḍ ad tsefḍeḍ isekkilen.</li>
                            <li>Mi tfukkeḍ urar, tekki ɣef "Senqed" ad twaliḍ ma tufiḍ-d akk awalen.</li>
                            <li>Tzemreḍ ad twaliḍ tifrat melmi i tebɣiḍ s teqfilt "Tifrat" (dacu kan eǧǧ-it i taggara mi ara yebdu yettfuṛu wallaɣ).</li>
                            <li>Tzemreḍ ad talseḍ i wurar melmi i tebɣiḍ s teqfilt "Ales-as". Ɣur-k, ayen akk i turiḍ ad iṛuḥ!</li>
                            <li>Ma ixuṣṣ-ik unasiw, aru akka: e_ = ɛ | c_ = č | d_ = ḍ | g_ = ǧ | h_ = ḥ | q_ = ɣ | r_ = ṛ | s_ = ṣ | z_ = ẓ. Urar kan!</li>
                            <li>Inegzumen n wakud i nesseqdec: "s" d isragen neɣ d tisaɛtin, "d" d tisdidin neɣ ddqayeq, "n" d tasinin neɣ d isugunden.</li>
                        </ul>
                        <p>Ma temlaleḍ-d kra n tuccḍa neɣ tebɣiḍ ad aɣ-d-tazneḍ isumar, aru-yaɣ-d tamawt deg GitHub seg yiccer <a href="https://github.com/nabil509/kab-arrow-words/issues" target="_blank">Issues</a> n usenfaṛ neɣ aru-yaɣ-d ɣer "nabil509 at gmail dot com". Atan wurar ɣur-k!</p>
                    </Dialog>

                    <Chrono ref={this.chronoElement} />

                    <button className="general"
                            onClick={this.handleCheckClick}
                            disabled={this.state.status === GridSatuses.solved}>
                        <span className="icon tick">Senqed</span>
                    </button>
                    <Dialog show={this.state.showResult}
                            title="Asenqed"
                            buttons={checkButtons}
                            onClose={ () => this.setState({ showResult: false }) }>
                        <p>
                            {
                                this.state.status === GridSatuses.solved ?
                                "Tufiḍ-d kullec, igerrez! Tefriḍ-tt deg " + formatUserTime(this.chronoElement.current.state.time) + "." :
                                "Mazal ur d-tufiḍ ara kullec. Aha rnu kra uxemmem, afud!"
                            }
                        </p>
                    </Dialog>

                    <button className="general"
                            onClick={ () => this.setState({ confirmSolve: true }) }
                            disabled={this.state.status === GridSatuses.solved}>
                        <span className="icon wand">Tifrat</span>
                    </button>
                    <Dialog show={this.state.confirmSolve}
                            title="Tifrat"
                            buttons={solveButtons}
                            onClose={() => this.setState({ confirmSolve: false })}>
                        Dayen yakan tebɣiḍ ad twaliḍ tifrat?
                    </Dialog>

                    <button className="general"
                            onClick={() => this.setState({ confirmReset: true })}
                            disabled={this.state.status === GridSatuses.initial}>
                        <span className="icon arrow-undo">Sfeḍ</span>
                    </button>
                    <Dialog show={this.state.confirmReset}
                            title="Asfaḍ"
                            buttons={resetButtons}
                            onClose={() => this.setState({ confirmReset: false })}>
                        D tidet tebɣiḍ ad tsefḍeḍ akk ayen i turiḍ?
                    </Dialog>
                </div>

                <Grid data={this.props.data}
                      status={GridSatuses.initial}
                      ref={this.gridElement}
                      onStartPlaying={this.startPlaying} />
            </div>
        );
    }
}

export default App;
