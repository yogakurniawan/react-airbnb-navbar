import React, { Component } from 'react'
import { v4 } from 'node-uuid'

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
        const colValue = row[column.DataName];
        return <td key={v4()} className="text-right truncate pv2 ph3 striped--border-bottom">{colValue}</td>
      });

      let expander = null;
      if (row.expanded) {
        expander = <tr>
          <td colSpan={cols.length + 1}>
            <this.props.expandRenderComponent item={row} />
          </td>
        </tr>;
      }

      return (
        <tbody style={{ border: '2px solid #adadad' }} key={index}>
          <tr onClick={this.changeExpandState.bind(this, index, row.expanded)}>
            {values}
          </tr>
          {expander}
        </tbody>
      );
    });

    return (
      <div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
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