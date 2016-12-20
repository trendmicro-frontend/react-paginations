/* eslimt react/no-set-state: 0 */
import Anchor from '@trendmicro/react-anchor';
import { ButtonDropdown } from '@trendmicro/react-buttons';
import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import AutosizeInput from 'react-input-autosize';
import styles from './index.styl';

// Normalize the value by bringing it within the range.
// If value is greater than max, max will be returned.
// If value is less than min, min will be returned.
// Otherwise, value is returned unaltered. Both ends of this range are inclusive.
const limit = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};

class TablePagination extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['full', 'reduced', 'minor']),
        lengthMenu: PropTypes.array,
        page: PropTypes.number,
        pageLength: PropTypes.number,
        totalRecords: PropTypes.number,
        onPageChange: PropTypes.func,
        prevPageRenderer: PropTypes.func,
        nextPageRenderer: PropTypes.func,
        pageRecordsRenderer: PropTypes.func,
        pageLengthRenderer: PropTypes.func
    };
    static defaultProps = {
        type: 'full',
        lengthMenu: [10, 25, 50, 100],
        page: 1,
        pageLength: 10,
        totalRecords: 0,
        onPageChange: () => {},
        prevPageRenderer: () => {
            return '‹';
        },
        nextPageRenderer: () => {
            return '›';
        },
        pageRecordsRenderer: ({ totalRecords, from, to }) => {
            if (totalRecords > 0) {
                return `Records: ${from} - ${to} / ${totalRecords}`;
            }

            return `Records: ${totalRecords}`;
        },
        pageLengthRenderer: ({ pageLength }) => {
            return `${pageLength} per page`;
        }
    };

    state = {
        page: this.props.page
    };
    actions = {
        handlePageChange: (options) => {
            const {
                page = this.props.page,
                pageLength = this.props.pageLength,
                totalRecords = this.props.totalRecords
            } = { ...options };

            const currentPage = (page > Math.ceil(totalRecords / pageLength)) ? Math.ceil(totalRecords / pageLength) : page;
            this.props.onPageChange({ page: currentPage, pageLength });
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.page !== this.state.page) {
            this.setState({ page: Number(nextProps.page) });
        }
    }
    render() {
        const {
            type,
            totalRecords = 0,
            lengthMenu,
            prevPageRenderer,
            nextPageRenderer,
            pageRecordsRenderer,
            pageLengthRenderer
        } = this.props;
        const pageLength = this.props.pageLength || lengthMenu[0] || 10;
        const totalPages = totalRecords > 0 ? Math.ceil(totalRecords / pageLength) : 1;
        const page = limit(this.props.page, 1, totalPages);
        const from = limit((page - 1) * pageLength + 1, 1, totalRecords);
        const to = limit((page - 1) * pageLength + pageLength, 1, totalRecords);
        const prevPageDisabled = (page <= 1);
        const nextPageDisabled = (page >= totalPages);

        return (
            <div className={styles.tablePagination}>
                <div className={styles.tablePaginationBlock}>
                    <div className={styles.paginationRecords}>
                        {pageRecordsRenderer({ totalRecords, from, to })}
                    </div>
                    {(type !== 'minor') &&
                    <ButtonDropdown
                        dropdownStyle="text"
                        options={lengthMenu.map(length => {
                            return {
                                label: length,
                                value: length
                            };
                        })}
                        value={pageLength}
                        customValueRenderer={option => pageLengthRenderer({ pageLength: option.value })}
                    >
                        {pageLengthRenderer({ pageLength })}
                    </ButtonDropdown>
                    }
                    {(type !== 'reduced' && type !== 'minor') &&
                        <div className={styles.paginationInput}>
                            <AutosizeInput
                                value={this.state.page}
                                onChange={(event) => {
                                    const page = Number(event.target.value);
                                    if (isNaN(page)) {
                                        return;
                                    }
                                    this.setState({ page: limit(page, 1, totalPages) });
                                }}
                                onKeyPress={(event) => {
                                    if (event.key !== 'Enter') {
                                        return;
                                    }

                                    let { page } = this.state;
                                    page = limit(page, 1, totalPages);

                                    if (page !== this.state.page) {
                                        this.setState({ page: page });
                                    }

                                    this.actions.handlePageChange({ page: page });
                                }}
                            />
                            &nbsp;
                            /
                            &nbsp;
                            {totalPages}
                        </div>
                    }
                    <div>
                        <ul className={styles.pagination}>
                            <li
                                className={classNames({
                                    [styles.disabled]: prevPageDisabled
                                })}
                            >
                                <Anchor
                                    disabled={prevPageDisabled}
                                    onClick={(event) => {
                                        const prevPage = page > 1 ? page - 1 : page;

                                        if (prevPage !== this.state.page) {
                                            this.setState({ page: prevPage });
                                        }

                                        this.actions.handlePageChange({ page: prevPage });
                                    }}
                                >
                                    {prevPageRenderer()}
                                </Anchor>
                            </li>
                            <li
                                className={classNames({
                                    [styles.disabled]: nextPageDisabled
                                })}
                            >
                                <Anchor
                                    disabled={nextPageDisabled}
                                    onClick={(event) => {
                                        const nextPage = page < totalPages ? page + 1 : page;

                                        if (nextPage !== this.state.page) {
                                            this.setState({ page: nextPage });
                                        }

                                        this.actions.handlePageChange({ page: nextPage });
                                    }}
                                >
                                    {nextPageRenderer()}
                                </Anchor>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TablePagination;
