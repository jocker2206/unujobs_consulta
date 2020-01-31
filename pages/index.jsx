import React, {Component, Fragment} from 'react';

export default class Index extends Component {


    state = {
        email: "",
        code: "",
        is_verify: false,
        is_send: false
    }

    verify = (e) => {
        e.preventDefault();
        this.setState({is_verify: true});
    }

    send_code = (e) => {
        e.preventDefault();
        this.setState({is_send: true});
    }

    handleCode = (e) => {
        let {name, value} = e.target;
        let regex = /^[0-9]+$/;
        if (regex.test(value)) {
            if (value.length < 7) {
                this.setState({[name]: value});
            }
        } else if (value == "") {
            this.setState({[name]: value});
        }
    }

    render() {
        return (
            <section className="banner-area relative" id="home">
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-end"
                        style={
                            this.props.style
                    }>
                        <div className="banner-content col-lg-7 col-md-12"
                            style={
                                {height: "500px"}
                        }>
                            <h3 className="mt-100">Complete los datos de Seguridad</h3>
                            <form action="#" className="mt-10 row col-md-8">
                                <Fragment>

                                    <div class="input-group-icon mt-10">
                                        <div class="icon">
                                            <i aria-hidden="true" class="fa fa-envelope"></i>
                                        </div>
                                        <input class="single-input" name="email" placeholder="Ingrese su correo" type="email"
                                            onChange={
                                                (e) => this.setState({email: e.target.email})
                                            }
                                            value={
                                                this.state.email
                                            }/>
                                    </div>

                                    <div className="mt-20">
                                        <button className="genric-btn info-border radius">Validar Correo</button>
                                    </div>
                                </Fragment>

                                <Fragment>
                                    <div class="input-group-icon mt-10">
                                        <b class="icon"
                                            style={
                                                {color: "#777"}
                                        }>
                                            U -
                                        </b>
                                        <input class="single-input" name="code" placeholder="Ingrese código de verificación" type="text"
                                            value={
                                                this.state.code
                                            }
                                            onChange={
                                                this.handleCode
                                            }/>
                                    </div>

                                    <div className="mt-20">
                                        <button className="genric-btn info radius">Enviar Código</button>
                                    </div>
                                </Fragment>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
