import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Section from './Section';
import { TablePagination } from '../src';
import styles from './index.styl';

class App extends Component {
    state = {
        full: {
            page: 1,
            pageLength: 10,
            totalRecords: 1000 * 1000
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
        const name = 'React Paginations';
        const url = 'https://github.com/trendmicro-frontend/react-paginations';
        const state = { ...this.state };
        const actions = { ...this.actions };

        return (
            <div>
                <Nav name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-8">
                                <h3>Table Pagination</h3>
                                <div className={styles.sectionGroup}>
                                    <h5>Full</h5>
                                    <table className={classNames(styles.table, styles.tableBordered)}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f8f8' }}>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Total records: {state.full.totalRecords}
                                                </th>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Empty records
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="full"
                                                        page={state.full.page}
                                                        pageLength={state.full.pageLength}
                                                        totalRecords={state.full.totalRecords}
                                                        onPageChange={actions.full.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="full"
                                                        page={1}
                                                        pageLength={state.full.pageLength}
                                                        totalRecords={0}
                                                        onPageChange={actions.full.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles.sectionGroup}>
                                    <h5>Reduced</h5>
                                    <table className={classNames(styles.table, styles.tableBordered)}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f8f8' }}>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Total records: {state.reduced.totalRecords}
                                                </th>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Empty records
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="reduced"
                                                        page={state.reduced.page}
                                                        pageLength={state.reduced.pageLength}
                                                        totalRecords={state.reduced.totalRecords}
                                                        onPageChange={actions.reduced.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="reduced"
                                                        page={1}
                                                        pageLength={state.reduced.pageLength}
                                                        totalRecords={0}
                                                        onPageChange={actions.reduced.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles.sectionGroup}>
                                    <h5>Minor</h5>
                                    <table className={classNames(styles.table, styles.tableBordered)}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#f8f8f8' }}>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Total records: {state.minor.totalRecords}
                                                </th>
                                                <th style={{ paddingLeft: 16 }}>
                                                    Empty records
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="minor"
                                                        page={state.minor.page}
                                                        pageLength={state.minor.pageLength}
                                                        totalRecords={state.minor.totalRecords}
                                                        onPageChange={actions.minor.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                                <td style={{ width: '50%', padding: 0 }}>
                                                    <TablePagination
                                                        type="minor"
                                                        page={1}
                                                        pageLength={state.minor.pageLength}
                                                        totalRecords={0}
                                                        onPageChange={actions.minor.onPageChange}
                                                        prevPageRenderer={() => <i className="fa fa-angle-left" />}
                                                        nextPageRenderer={() => <i className="fa fa-angle-right" />}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Section>
                        </div>
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
