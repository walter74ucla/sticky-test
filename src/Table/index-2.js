import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './style-2.css';


const HeaderRow = () => (
  <Table.HeaderCell className='header-cell'>Header</Table.HeaderCell>
)
const TableCell = () => (
  <Table.Cell className='table-cell'>Cell</Table.Cell>
)
const TableRow = () =>  (
  <Table.Row className='table-row'>
    <Table.Cell className='table-cell first-column'>FirstFixed</Table.Cell>
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
 	let vh = window.innerHeight;
 	let vw = window.innerWidth;
 	console.log(vh + ' x '+ vw);

    return(
      <React.Fragment>
      	<div className='test'>TEST</div>
          <Table celled unstackable className='freeze-head-and-col'>        
            <Table.Header>
              <Table.Row className='header-row'>
                <Table.HeaderCell className='header-cell'>HeaderFixed</Table.HeaderCell>
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