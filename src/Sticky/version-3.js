import _ from 'lodash';
import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Visibility } from 'semantic-ui-react';


const headerCellStyle = {
  backgroundColor: 'purple',
  color: 'white',
}

const fixedHeaderCellStyle = {
  ...headerCellStyle,
  position: '-webkit-sticky', 
  position: 'sticky',
  top: 0,
  zIndex: 2,
}


const TableCell = () => (
  <Table.Cell>Cell</Table.Cell>
)
const TableRow = () =>  (
  <Table.Row >
    <Table.Cell>FirstFixed</Table.Cell>
    {_.times(20, (i) => (
            <TableCell key={i} />
          ))}
  </Table.Row>
)

// https://www.geeksforgeeks.org/reactjs-importing-exporting/
// const TableExamplePagination = () => (
//   <Table celled>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>HeaderFixed</Table.HeaderCell>
//         {_.times(20, (i) => (
//                 <HeaderRow key={i} />
//               ))}
//       </Table.Row>
//     </Table.Header>

//     <Table.Body>
//       {_.times(25, (i) => (
//                 <TableRow key={i} />
//               ))}
//     </Table.Body>

//   </Table>
// )



class TableFreezeHeaderColumn extends Component {
  constructor() {
    super();
    this.state = {
      headerFixed: false,
    }
  }

  stickTableHeader = () => this.setState({ headerFixed: true })
  unStickTableHeader = () => this.setState({ headerFixed: false })


  render() {
    
    const { headerFixed } = this.state
    console.log(headerFixed); // this is a static false in mobile

    const HeaderRow = () => (
      <Table.HeaderCell 
        style={headerFixed ? fixedHeaderCellStyle : headerCellStyle}>Header
      </Table.HeaderCell>
    )

    return(
      <React.Fragment>
        <Visibility
            onTopPassed={this.stickTableHeader}
            onTopVisible={this.unStickTableHeader}
            once={false}
        >
          <Table celled unstackable>        
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  style={headerFixed ? fixedHeaderCellStyle : headerCellStyle}>HeaderFixed
                </Table.HeaderCell>
                {_.times(20, (i) => (
                        <HeaderRow key={i} />
                      ))}
              </Table.Row>
            </Table.Header>        

            <Table.Body>
              {_.times(25, (i) => (
                        <TableRow key={i} />
                      ))}
            </Table.Body>
          
          </Table>
        </Visibility>
      </React.Fragment>
    )

  }

}


export default TableFreezeHeaderColumn;
// export {TableExamplePagination}; // https://www.geeksforgeeks.org/reactjs-importing-exporting/
