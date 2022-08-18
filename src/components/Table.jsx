import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="min-w-[60rem] p-8 rounded-md bg-white shadow-primary-100 shadow-md">
        <div>
          <p className="text-xl font-normal text-primary-500">{this.props.title}</p>
          <p className="font-light pt-2 pb-10 text-primary-500">{this.props.subtitle}</p>
        </div>
        <table className="w-full border-collapse border-spacing-4 text-primary-500 mb-6 text-left">
          <thead>
            <tr>{this.loadHeaders()}</tr>
          </thead>
          <tbody>{this.loadRows()}</tbody>
        </table>
      </div>
    );
  }

  /**
   * 
   * @returns The JSX representation of the headers for the table to use
   */
  loadHeaders() {
    const { headers } = this.props;
    //checks if the headers in the prop is a type of array this is to ensure the program doesn't throw an error and returns properly
    if (!Array.isArray(headers)) {return;}

    //checks if the header contains information
    if (headers.length === 0) {return;}
    
    //returns a mapped JSX representation of the information sent by the headers object
    return headers.map((header, index) => {
      return <th className="border-y border-primary-100 py-4 pl-3 text-base text-primary-500" key={index}>{header.text}</th>;
    });
  }

  /**
   * 
   * @returns The JSX representation of the rows inside the table with the data inside
   */
  loadRows() {
    const { headers, items } = this.props;
    
    //Checks if the headers prop is a type of array
    if (!Array.isArray(headers) || !Array.isArray(items)) { return; }
    //Checks if the headers array contains any header information
    if (headers.length === 0 || items.length === 0) { return;}

    /**
     * loops through the items sent for the table to display 
     * and maps the data to a proper JSX representation of a table row
     * */
    return items.map((item, itemIndex) => {
      return (
        <tr key={itemIndex}>

          {/*loops through all the headers and map the corresponding data to the correct header and returns the JSX representation of a row cell*/}
          {headers.map((header, headerIndex) => {

              //checks if the header value is a JSX object or just a primitive value type
              if(header.isJSX) {
                const CustomJSX = header.value;
                return <td className="border-y border-primary-100 py-4 pl-3 text-base text-primary-500" key={headerIndex + itemIndex}> <CustomJSX id={item._id}/></td>
              } else {
                return <td className="border-y border-primary-100 py-4 pl-3 text-base text-primary-500" key={headerIndex + itemIndex}> {`${ item[header.value] || ""}` }</td>
              }
            })
          }
        </tr>
      );
    });
  }
}

export default Table;
