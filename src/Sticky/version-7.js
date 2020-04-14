import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Sticky, Table, Segment } from 'semantic-ui-react';


// Table-1 sticks to top, but does not move when pushed by Table-2 below.
// Table-2 eventually gets stuck on top


const Paragraph = () => (
  	<p>
  		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim purus, imperdiet et lectus a, luctus viverra tellus. Sed nec nisl ipsum. Fusce sed posuere lectus. Proin at bibendum eros, vel porta justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus facilisis est vitae ultrices dapibus. Vestibulum tempor laoreet felis, sed faucibus est mattis eu. Curabitur consequat turpis lectus. Praesent orci felis, laoreet vel dapibus in, accumsan quis est. Morbi vitae purus congue, aliquam eros nec, varius dolor. Curabitur ullamcorper mollis sapien.
  	</p>
)

class TableInDiv extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  contextRef = createRef();

  render() {
  	return(
  		<React.Fragment>
	  		<div ref={this.contextRef}>
	  			<Sticky context={this.contextRef}>
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
				</Sticky>
				<Segment attached='bottom'>
				{_.times(20, (i) => (
		    		<Paragraph key={i} />
		    	))}	
				</Segment>
			</div>
			<div ref={this.contextRef}>
	  			<Sticky context={this.contextRef}>
				    <Table unstackable attached='top'>
					    <Table.Header>
					      	<Table.Row>
						        <Table.HeaderCell>First Header Cell-2</Table.HeaderCell>
						        <Table.HeaderCell>Header Cell-2</Table.HeaderCell>
						        <Table.HeaderCell>Header Cell-2</Table.HeaderCell>
					      	</Table.Row>
					    </Table.Header>
					    <Table.Body>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    		</Table.Row>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    		</Table.Row>
				    		<Table.Row>
				    			<Table.Cell>First Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    			<Table.Cell>Row Cell-2</Table.Cell>
				    		</Table.Row>
					    </Table.Body>
					    <Table.Footer>
					      	<Table.Row>
						        <Table.HeaderCell>First Footer Cell-2</Table.HeaderCell>
						        <Table.HeaderCell>Footer Cell-2</Table.HeaderCell>
						        <Table.HeaderCell>Footer Cell-2</Table.HeaderCell>
					      	</Table.Row>
					    </Table.Footer>
					</Table>
				</Sticky>
				<Segment attached='bottom'>
				{_.times(20, (i) => (
		    		<Paragraph key={i} />
		    	))}	
				</Segment>
			</div>
    	</React.Fragment>
  	)
  }



}


export default TableInDiv;