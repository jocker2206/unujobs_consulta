import React, {Component} from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Nosotros</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Contáctanos</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
                                </p>
                                <p className="number">
                                    012-6532-568-9746
                                    <br/>
                                    012-6532-569-9748
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4 className="text-white">Boletín</h4>
                                <p></p>
                                <div className="d-flex flex-row" id="mc_embed_signup">


                                    <form action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" className="navbar-form" method="get" novalidate="true">
                                        <div className="input-group add-on">
                                            <input className="form-control" name="EMAIL" onblur="this.placeholder = 'Email address'" onfocus="this.placeholder = ''" placeholder="Email address" required="" type="email"/>
                                            <div style={
                                                {
                                                    position: "absolute",
                                                    left: "-5000px"
                                                }
                                            }>
                                                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" type="text" value=""/></div>
                                            <div className="input-group-btn">
                                                <button className="genric-btn">
                                                    <span className="lnr lnr-arrow-right"></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="info mt-20"></div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                        <p className="footer-text m-0">
                            Copyright &copy; Todos Los derechos reservados | This template is made with
                            <i aria-hidden="true" className="fa fa-heart-o ml-1 mr-1"></i>
                            by
                            <a className="ml-1" href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                        </p>
                        <div className="footer-social d-flex align-items-center">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}
