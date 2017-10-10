import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import Tbody from './Tbody'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows.map(row => {
        row.expanded = false
        return row
      }),
      cols: this.props.cols
    }
  }

  changeExpandState(index, currentState) {
    const rows = this.state.rows.splice(0)
    this.setState({
      rows: rows.map((row, thisIndex) => {
        if (index === thisIndex) {
          row.expanded = !currentState
        } else {
          row.expanded = false
        }
        return row
      })
    })
  }

  render() {
    const { cols, rows } = this.props;

    const theads = cols.map((col, i) => {
      return (
        <th style={{ fontWeight: 'normal', textAlign: 'left' }} key={col.Name}>
          {col.Name}
        </th>
      );
    });

    const thisRows = rows.map((row, index) => {
      const values = cols.map((column) => {
        let colValue;
        if (column.DataName === 'changelist') {
          colValue = <a href="#">{row[column.DataName]}</a>;          
        } else {
          colValue = row[column.DataName];
        }
        return <td key={v4()}>{colValue}</td>
      });

      let expander = null;
      if (row.expanded) {
        expander = <tr>
          <td colSpan={cols.length}>
            <this.props.expandRenderComponent item={row} />
          </td>
        </tr>;
      }

      return (
        <Tbody status={row.state} key={index}>
          <tr onClick={this.changeExpandState.bind(this, index, row.expanded)}>
            {values}
          </tr>
          {expander}
        </Tbody>
      );
    });

    return (
      <div>
        <table style={{
          background: 'linear-gradient(to right, rgba(240,240,240,0.94) 0%, rgba(247,247,247,0.96) 29%, rgba(255,255,255,1) 100%)',
          borderCollapse: 'collapse',
          width: '80%'
        }}>
          <thead>
            <tr>
              {theads}
            </tr>
          </thead>
          {thisRows}
        </table>
      </div>
    );
  }
};

export default Table;