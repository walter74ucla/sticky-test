import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './style-2.css';


const HeaderRow = () => (
  <Table.HeaderCell>Header</Table.HeaderCell>
)
const TableCell = () => (
  <Table.Cell>Cell</Table.Cell>
)
const TableRow = () =>  (
  <Table.Row>
    <Table.Cell>FirstFixed</Table.Cell>
    {_.times(20, (i) => (
            <TableCell key={i} />
          ))}
  </Table.Row>
)


class TableFreezeHeaderColumn extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  render() {
 
    return(
      <React.Fragment>
          <Table celled unstackable>        
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>HeaderFixed</Table.HeaderCell>
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
      </React.Fragment>
    )

  }

}


export default TableFreezeHeaderColumn;