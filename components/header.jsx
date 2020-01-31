import React, {Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <header id="header" id="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between d-flex"
                        style={
                            {minHeight: "50px"}
                    }>
                        <div id="logo">
                            <a href="/"><img alt="" src="img/logo.png" title=""/></a>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="button-group-area mt-40">
                                    <a className="genric-btn danger-border medium circle arrow" href="#">
                                        Cerrar Consulta
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }

}
