import React, {Component} from 'react';
import TableContent from '../components/tableContent';
import ViewBoleta from '../components/viewBoleta';

export default class Auth extends Component {

    render() {
        return (
            <div className="whole-wrap">
                <div className="container">
                    <div className="section-top-border">
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="mt-10">
                                    <label htmlFor="">Nombre Completo</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>
                                <div className="mt-10">
                                    <label htmlFor="">Profesión</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>
                                <div className="mt-10">
                                    <label htmlFor="">Tip. Documento</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>
                                <div className="mt-10">
                                    <label htmlFor="">N° Documento</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>

                                <div className="mt-10">
                                    <label htmlFor="">Dirección</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>

                                <div className="mt-10">
                                    <label htmlFor="">Teléfono/Celular</label>
                                    <input className="single-input"
                                        disabled={true}
                                        type="text"
                                        value=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <TableContent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
