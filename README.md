# react-paginations [![build status](https://travis-ci.org/trendmicro-frontend/react-paginations.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-paginations) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-paginations/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-paginations?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-paginations.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-paginations/)

React Paginations

Demo: https://trendmicro-frontend.github.io/react-paginations

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-paginations](https://github.com/trendmicro-frontend/react-paginations):

  ```
  npm install --save react @trendmicro/react-paginations
  ```

2. At this point you can import `@trendmicro/react-paginations` and its styles in your application as follows:

  ```js
  import { TablePagination } from '@trendmicro/react-paginations';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-paginations/dist/react-paginations.css';
  ```

## Usage

#### TablePagination

```js
<TablePagination
    type="full"
    page={this.state.page}
    pageLength={this.state.pageLength}
    totalRecords={this.state.totalRecords}
    onPageChange={({ page, pageLength }) => {
        this.setState({ page, pageLength })
    }}
    prevPageRenderer={() => <i className="fa fa-angle-left" />}
    nextPageRenderer={() => <i className="fa fa-angle-right" />}
/>
```

## API

### Properties

#### TablePagination

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
type | String | 'full' | 'full', 'reduced', or 'minor'
page | Number | 1 |
pageLength | Number | 10 |
pageLengthMenu | Array | [10, 25, 50, 100] |
dropup | Boolean | false | The menu will open above the dropdown toggle, instead of below it.
totalRecords | Number | 0 |
onPageChange | Function | |
prevPageRenderer | Function | |
nextPageRenderer | Function | |
pageRecordsRenderer | Function({ totalRecords, from, to }) | |
pageLengthRenderer | Function({ pageLength }) |

## License

MIT
