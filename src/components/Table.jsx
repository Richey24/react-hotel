import React, { Component } from "react";
import "../styles/table.css";

class Table extends Component {
  render() {
    return (
      <div className="table_wrapper">
        <div>
          <p className="title">{this.props.title}</p>
          <p className="subtitle">{this.props.subtitle}</p>
        </div>
        <table>
          <thead>
            <tr>{this.loadHeaders()}</tr>
          </thead>
          <tbody>{this.loadRows()}</tbody>
        </table>
      </div>
    );
  }

  loadHeaders() {
    const { headers } = this.props;

    if (!Array.isArray(headers)) {
      return;
    }
    if (headers.length === 0) {
      return;
    }

    return headers.map((header, index) => {
      return <th key={index}>{header.text}</th>;
    });
  }

  loadRows() {
    const { headers, items } = this.props;

    if (!Array.isArray(headers) || !Array.isArray(items)) {
      return;
    }
    if (headers.length === 0 || items.length === 0) {
      return;
    }

    return items.map((item, itemIndex) => {
      return (
        <tr key={itemIndex}>
          {headers.map((header, headerIndex) => {
              if(header.isJSX) {
                const CustomJSX = header.value
                return <td key={headerIndex + itemIndex}> <CustomJSX id={item._id}/></td>
              } else {
                return <td key={headerIndex + itemIndex}>{`${ item[header.value] || ""}` }</td>
              }
            }
          )}
        </tr>
      );
    });
  }
}

export default Table;
