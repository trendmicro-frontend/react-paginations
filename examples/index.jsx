import '@trendmicro/react-buttons/dist/react-buttons.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TablePagination } from '../src';

class App extends Component {
    state = {
        full: {
            page: 1,
            pageLength: 10,
            totalRecords: 100000
        },
        reduced: {
            page: 1,
            pageLength: 25,
            totalRecords: 250
        },
        minor: {
            page: 1,
            pageLength: 25,
            totalRecords: 250
        }
    };

    actions = {
        full: {
            onPageChange: ({ page, pageLength }) => {
                this.setState({
                    full: {
                        ...this.state.full,
                        page,
                        pageLength
                    }
                });
            }
        },
        reduced: {
            onPageChange: ({ page, pageLength }) => {
                this.setState({
                    reduced: {
                        ...this.state.reduced,
                        page,
                        pageLength
                    }
                });
            }
        },
        minor: {
            onPageChange: ({ page, pageLength }) => {
                this.setState({
                    minor: {
                        ...this.state.minor,
                        page,
                        pageLength
                    }
                });
            }
        }
    };

    render() {
        const state = { ...this.state };
        const actions = { ...this.actions };

        return (
            <div className="container-fluid text-left">
                <h2>Table Pagination</h2>
                <p>Always put page number and navigation on the bottom right of the table.</p>
                <p>Consider your needs, data type, and layout of the content to determine which components to include:</p>
                <ul>
                    <li>Prev/Next page navigation</li>
                    <li>Page switch</li>
                    <li>Maximum number of entries</li>
                    <li>Total number of entries</li>
                </ul>
                <h3>Examples</h3>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Full</h4>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="full"
                                            page={state.full.page}
                                            pageLength={state.full.pageLength}
                                            totalRecords={state.full.totalRecords}
                                            onPageChange={actions.full.onPageChange}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="full"
                                            page={1}
                                            pageLength={state.full.pageLength}
                                            totalRecords={0}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12">
                        <h4>Reduced</h4>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="reduced"
                                            page={state.reduced.page}
                                            pageLength={state.reduced.pageLength}
                                            totalRecords={state.reduced.totalRecords}
                                            onPageChange={actions.reduced.onPageChange}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="reduced"
                                            page={1}
                                            pageLength={state.reduced.pageLength}
                                            totalRecords={0}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-12" style={{ marginBottom: 20 }}>
                        <h4>Minor</h4>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="minor"
                                            page={state.minor.page}
                                            pageLength={state.minor.pageLength}
                                            totalRecords={state.minor.totalRecords}
                                            onPageChange={actions.minor.onPageChange}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                    <td style={{ width: '50%' }}>
                                        <TablePagination
                                            type="minor"
                                            page={1}
                                            pageLength={state.minor.pageLength}
                                            totalRecords={0}
                                            prevPageText={<i className="fa fa-angle-left" aria-hidden />}
                                            nextPageText={<i className="fa fa-angle-right" aria-hidden />}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
