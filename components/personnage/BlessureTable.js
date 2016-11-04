import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Wolfgang from '../../data/Wolfgang.json';


export default class FortuneTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blessure: Wolfgang.pointBlessure,
            maxBlessure: Wolfgang.maxPointBlessure
        };

        this.decrementBlessure = this.decrementBlessure.bind(this);
        this.incrementBlessure = this.incrementBlessure.bind(this);

    };

    decrementBlessure(e) {
        e.preventDefault();
        (this.state.blessure - 1 >= 0 &&
            this.setState({
                blessure: this.state.blessure - 1
            })
        );
    }

    incrementBlessure(e) {
        e.preventDefault();
        (this.state.blessure + 1 <= this.state.maxBlessure &&
                this.setState({
                    blessure: this.state.blessure + 1
                })
        );
    }

    render() {

        return (
            <div className="col-xs-12">
                <Table striped condensed hover className="text-center">
                    <tbody>
                        <tr>
                            <td>Bléssures : <strong>{this.state.blessure} points</strong> sur {this.state.maxBlessure}</td>
                            <td><Button bsStyle="primary" onClick={this.decrementBlessure}>-</Button></td>
                            <td><Button bsStyle="primary" onClick={this.incrementBlessure}>+</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}