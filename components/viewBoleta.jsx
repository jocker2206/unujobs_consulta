import React, {Component} from 'react';


export default class ViewBoleta extends Component {

    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoadSuccess = ({numPages}) => {
        this.setState({numPages});
    }

    render() {
        const {pageNumber, numPages} = this.state;

        return (
            <div>
                <Document file="http://unujobs.com/api/v1/historial/97/boleta"
                    onLoadSuccess={
                        this.onDocumentLoadSuccess
                }>
                    <Page pageNumber={pageNumber}/>
                </Document>
                <p>Page {pageNumber}
                    of {numPages}</p>
            </div>
        );
    }

}
