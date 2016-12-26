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

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>'full'</td>
      <td>'full', 'reduced', or 'minor'</td>
    </tr>
    <tr>
      <td>page</td>
      <td>Number</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td>pageLength</td>
      <td>Number</td>
      <td>10</td>
      <td></td>
    </tr>
    <tr>
      <td>pageLengthMenu</td>
      <td>Array</td>
      <td>[10, 25, 50, 100]</td>
      <td></td>
    </tr>
    <tr>
      <td>totalRecords</td>
      <td>Number</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <td>onPageChange</td>
      <td>Function</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>prevPageRenderer</td>
      <td>Function</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>nextPageRenderer</td>
      <td>Function</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>pageRecordsRenderer</td>
      <td>Function({ totalRecords, from, to })</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>pageLengthRenderer</td>
      <td>Function({ pageLength })</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
