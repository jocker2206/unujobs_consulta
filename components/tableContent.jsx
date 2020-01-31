import React, {Component, Fragment} from 'react';

export default class TableContent extends Component {


    state = {
        year: ""
    }

    componentDidMount = () => {
        this.setState({year: new Date().getFullYear()})
    }

    render() {
        return (
            <Fragment>
                <h3 className="mb-30">Lista de Boletas de Pago</h3>
                <div className="mt-10">
                    <div className="row">
                        <div className="col-md-8">
                            <input className="single-input" type="number"
                                onChange={
                                    (e) => this.setState({year: e.target.value})
                                }
                                value={
                                    this.state.year
                                }/>
                        </div>
                        <div className="col-xs">
                            <a class="genric-btn info " href="#">Buscar</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 offered-left mt-10">
                    <div className="offer-wrap flex-row d-flex row">
                        <div class="col-md-4">
                            <div class="single-offer mb-30">
                                <a href="#">DICIEMBRE</a>
                                <br/>
                                <small>ADICIONAL 1</small>
                                <br/>
                                <img alt="imagen-reeferencia-boleta" class="img-fluid" src="img/o4.png"/>
                                <a className="genric-btn info circle mt-2" href="https://unujobs.com/api/v1/historial/97/boleta" rel="noopener noreferrer" target="__blank">
                                    CAS
                                </a>
                                <b className="genric-btn danger circle mt-2">
                                    <i className="fa fa-download"></i>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}
