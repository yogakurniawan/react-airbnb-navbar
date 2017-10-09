import React, { Component } from 'react';
import ColumnsVisibilitySelector from './columnsVisibilitySelector.jsx';

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      cols: this.props.cols,
      hiddenColumns: this.props.hiddenColumns,
      sortedRows: this.props.rows,
      sortedColName: '',
      sortAsc: true
    }
    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onHiddenColumnsChanged = this.onHiddenColumnsChanged.bind(this);
  }


  onHiddenColumnsChanged(newHiddenColumns) {
    this.setState({ hiddenColumns: newHiddenColumns });
  }

  changeExpandState(index, currentState) {
    this.state.rows[index]._expanded = !currentState;
    //!!!! we can be efficient here, but now, we are not;
    this.forceUpdate();
  }

  filterData(col) {
    let newRows = [];
    if (this.state.sortedColName === col) {
      this.state.sortAsc ? newRows = _.orderBy(this.state.sortedRows, [col], ['desc']) : newRows = _.orderBy(this.state.sortedRows, [col], ['asc']);
      this.setState({ sortedColName: col });
      this.setState({ sortAsc: !this.state.sortAsc });
    }

    else {
      newRows = _.orderBy(this.state.sortedRows, [col], ['asc']);
      this.setState({ sortedColName: col, sortAsc: true });
    }
    this.setState({ rows: newRows });
  }

  render() {
    var columns = this.props.cols.filter(function (c) { return this.props.hiddenColumns.indexOf(c.Name) == -1; }.bind(this));

    var theads = columns.map(function (col, i) {
      return (
        <th className="ttu pv2 ph3 tl striped--border-bottom nowrap" key={col.Name}>
          {col.Name}
          <button className="sort-btn" onClick={this.filterData.bind(this, col.DataName)}></button>
        </th>
      );
    }.bind(this));

    var rows = this.state.rows.map(function (row, index) {
      var values = columns.map(function (column) {
        var colValue = row[column.DataName];
        var tdValue = parseInt(colValue.replace(" ", ''));
        if (isNaN(tdValue)) {
          return <td key={colValue} className="pv2 ph3 striped--border-bottom">{colValue}</td>
        }
        else {
          return <td key={colValue} className="text-right truncate pv2 ph3 striped--border-bottom">{colValue}</td>
        }
      }.bind(this));

      var expander = null;
      if (this.props.expandRenderComponent && row._expanded) {
        expander = <tr><td colSpan={this.props.cols.length + 1 - this.state.hiddenColumns.length}><this.props.expandRenderComponent item={row} /></td></tr>;
      }

      return (
        <tbody key={index}>
          <tr>
            <td onClick={this.changeExpandState.bind(this, index, row._expanded)} className="ph3 striped--border-bottom">
              <button className={row._expanded ? "rotated btn-caret" : "btn-caret"}></button>
            </td>
            {values}
          </tr>
          {expander}
        </tbody>
      );
    }.bind(this));

    return (
      <div>
        <ColumnsVisibilitySelector hiddenColumns={this.props.hiddenColumns} cols={this.props.cols} onHiddenColumnsChanged={this.onHiddenColumnsChanged} />
        <table className="collapse ba br2 b--black-10 pv2 ph3">
          <thead>
            <tr>
              <th className="ph3 striped--border-bottom"></th>
              {theads}
            </tr>
          </thead>
          {rows}
        </table>
      </div>
    );
  }
};

export default Table;