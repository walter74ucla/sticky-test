import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Visibility, Table, Segment } from 'semantic-ui-react';


const Paragraph = () => (
  	<p>
  		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim purus, imperdiet et lectus a, luctus viverra tellus. Sed nec nisl ipsum. Fusce sed posuere lectus. Proin at bibendum eros, vel porta justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus facilisis est vitae ultrices dapibus. Vestibulum tempor laoreet felis, sed faucibus est mattis eu. Curabitur consequat turpis lectus. Praesent orci felis, laoreet vel dapibus in, accumsan quis est. Morbi vitae purus congue, aliquam eros nec, varius dolor. Curabitur ullamcorper mollis sapien.
  	</p>
)

class TableInDiv extends Component {
  constructor() {
    super();
    this.state = {
      	calculations: {
			direction: 'none',
			height: 0,
			width: 0,
			topPassed: false,
			bottomPassed: false,
			pixelsPassed: 0,
			percentagePassed: 0,
			topVisible: false,
			bottomVisible: false,
			fits: false,
			passing: false,
			onScreen: false,
			offScreen: false,
	    },
    }
  }
  contextRef = createRef();

  handleUpdate = (e, { calculations }) => {
  	// console.log(e);
  	this.setState({ calculations })
  }


  render() {
  	const { calculations } = this.state;
  	// let element = this.contextRef;
  	let pixelsPassed = calculations.pixelsPassed.toFixed();
  	if (pixelsPassed > 0) {
  		let element = this.contextRef;
  		console.log('element: ', element, 'pixelsPassed: ', pixelsPassed, "px");
  	} else {
  		let element = null;
  		console.log('element: ', element, 'pixelsPassed: ', pixelsPassed, "px");
  	}
  	// console.log('element: ', element, 'pixelsPassed: ', pixelsPassed, "px");
  	//gotta figure out a way to link the ref to the correct div so I can tell which
  	//div the pixelPassed belongs to.

  	return(
  		<React.Fragment>
	  		<div className='table-test' ref={this.contextRef}>
	  			<Visibility onUpdate={this.handleUpdate}>
				    <Table unstackable attached='top'>
					    <Table.Header>
					      	<Table.Row>
						        <Table.HeaderCell>First Header Cell-1</Table.HeaderCell>
						        <Table.HeaderCell>Header Cell-1</Table.HeaderCell>
						        <Table.HeaderCell>Header Cell-1</Table.HeaderCell>
					      	</Table.Row>
					    </Table.Header>
					    <Table.Body>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    		</Table.Row>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    		</Table.Row>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    			<Table.Cell>Row Cell-1</Table.Cell>
				    		</Table.Row>
					    </Table.Body>
					    <Table.Footer>
					      	<Table.Row>
						        <Table.HeaderCell>First Footer Cell-1</Table.HeaderCell>
						        <Table.HeaderCell>Footer Cell-1</Table.HeaderCell>
						        <Table.HeaderCell>Footer Cell-1</Table.HeaderCell>
					      	</Table.Row>
					    </Table.Footer>
					</Table>
				</Visibility>	
			</div>
			<div className='segment-test' ref={this.contextRef}>
				<Visibility onUpdate={this.handleUpdate}>
					<Segment attached='bottom'>
						{_.times(20, (i) => (
				    		<Paragraph key={i} />
				    	))}	
					</Segment>
				</Visibility>
			</div>
    	</React.Fragment>
  	)
  }

}


export default TableInDiv;