import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './style-4.css';


const HeaderRow = () => (
  <Table.HeaderCell className='header-cell'>Header</Table.HeaderCell>
)
const TableCell = () => (
  <Table.Cell className='table-cell'>Cell</Table.Cell>
)
const TableRow = () =>  (
  <Table.Row className='table-row'>
    <Table.Cell className='table-cell first-column'>FirstFixed</Table.Cell>
    {_.times(3, (i) => (
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
      	<div className='container'>
          <div className='inside-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, massa eget dapibus hendrerit, lorem purus congue odio, at consequat leo lacus at felis. Ut imperdiet metus condimentum dignissim suscipit. Donec sapien neque, fringilla et pretium eget, vehicula nec tortor. Sed nec commodo purus. Pellentesque mattis convallis lacus, ac mollis eros finibus sit amet. Sed id massa malesuada, porttitor augue condimentum, tincidunt turpis. Nam suscipit vel arcu ut ornare. Pellentesque consectetur maximus quam, semper malesuada purus vehicula id. Duis condimentum mauris eget arcu lobortis cursus. Proin imperdiet porta auctor. Pellentesque scelerisque semper justo, vitae bibendum nulla dignissim nec. Fusce tortor leo, porta at ex non, tincidunt accumsan nisi. Phasellus iaculis, velit vitae scelerisque vehicula, sapien libero tincidunt diam, eu condimentum enim ligula vitae nunc. Morbi in feugiat enim, sit amet vestibulum lacus.</p>

            <p>In nec magna imperdiet, fermentum dui ac, lobortis velit. Nulla dictum diam nec nibh euismod, quis tincidunt nulla vulputate. Pellentesque rutrum, neque eget dignissim fermentum, est lectus suscipit justo, eu vestibulum nisi sapien eget lacus. Sed libero elit, volutpat id sem id, euismod dictum nibh. Vivamus lectus turpis, venenatis et diam ac, mattis egestas justo. Mauris sed est mollis, condimentum justo quis, molestie nibh. Nulla congue nisi sit amet felis tristique, id euismod sem pharetra. Nam placerat, elit a aliquet efficitur, orci libero consequat felis, ut tincidunt orci libero in urna. Ut suscipit lectus magna, et molestie purus luctus sed. Nulla luctus ante quis sapien tincidunt maximus. Praesent posuere nulla vitae pulvinar iaculis. Donec mollis mattis velit, id euismod mi varius ac. Etiam viverra, risus non ullamcorper interdum, justo justo feugiat sapien, rutrum ultricies tellus quam non magna.</p>

            <p>In nec magna imperdiet, fermentum dui ac, lobortis velit. Nulla dictum diam nec nibh euismod, quis tincidunt nulla vulputate. Pellentesque rutrum, neque eget dignissim fermentum, est lectus suscipit justo, eu vestibulum nisi sapien eget lacus. Sed libero elit, volutpat id sem id, euismod dictum nibh. Vivamus lectus turpis, venenatis et diam ac, mattis egestas justo. Mauris sed est mollis, condimentum justo quis, molestie nibh. Nulla congue nisi sit amet felis tristique, id euismod sem pharetra. Nam placerat, elit a aliquet efficitur, orci libero consequat felis, ut tincidunt orci libero in urna. Ut suscipit lectus magna, et molestie purus luctus sed. Nulla luctus ante quis sapien tincidunt maximus. Praesent posuere nulla vitae pulvinar iaculis. Donec mollis mattis velit, id euismod mi varius ac. Etiam viverra, risus non ullamcorper interdum, justo justo feugiat sapien, rutrum ultricies tellus quam non magna.</p>
          </div>
        </div>
        <div className='container'>
          <div className='inside-container'>
            <Table celled unstackable className='freeze-head-and-col'>
            <Table.Header>
              <Table.Row className='header-row'>
                <Table.HeaderCell className='header-cell'>HeaderFixed</Table.HeaderCell>
                {_.times(1, (i) => (//this fills up the entire div or overflows
                <HeaderRow key={i} />
              ))}
              </Table.Row>
            </Table.Header>        

            {/*<Table.Body>
            {_.times(15, (i) => (
              <TableRow key={i} />
            ))}
            </Table.Body>*/}
          </Table>
          </div>
        </div>
        <div className='container'>
          <div className='inside-container'>
            <Table celled unstackable className='freeze-head-and-col'>
            <Table.Header>
              <Table.Row className='header-row'>
                <Table.HeaderCell className='header-cell'>HeaderFixed</Table.HeaderCell>
                {_.times(10, (i) => (
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
          </div>
        </div>
          
      </React.Fragment>
    )

  }

}


export default TableFreezeHeaderColumn;