
import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Icon, Label, Menu, Table, Visibility } from 'semantic-ui-react';


const overlayStyleHeaderRow = { // for the Header Row
  display: 'none', // Hidden by default
}

const fixedOverlayStyleHeaderRow = { // for the Header Row, initial style
  ...overlayStyleHeaderRow,
  position: '-webkit-sticky', 
  position: 'sticky', // position sticky works on <th>
  top: 0,
  zIndex: 1,
  whiteSpace: 'nowrap',
  border: '3px solid blue',
  display: 'block', // Show it
}

const overlayHeaderRowStyle = { 
  display: 'none', // Hidden by default
}

const fixedOverlayHeaderRowStyle = { // updates style
  ...overlayHeaderRowStyle,
  display: 'inline-block', // Show it
  border: '1px solid red',
  backgroundColor: 'purple',
  color: 'white',
}

const overlayStyleFirstColumn = { // for the First Column
  display: 'none', // Hidden by default
}

const fixedOverlayStyleFirstColumn = { // for the First Column, initial style
  ...overlayStyleFirstColumn,
  // position: '-webkit-sticky',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 2,
  border: '3px solid black',
  display: 'block', // Show it
}

const overlayFirstColumnStyle = { 
  display: 'none', // Hidden by default
}

const fixedOverlayFirstColumnStyle = { // updates style
  ...overlayFirstColumnStyle,
  display: 'inline-block', // Show it
  border: '1px solid gold',
  backgroundColor: 'pink',
  color: 'white',
}

const TableCell = () => (
  <Table.Cell className='table-cell'>Cell</Table.Cell>
)

const TableRow = () =>  (
  <Table.Row className='table-row'>
    <Table.Cell className='table-cell'>FirstFixed</Table.Cell>
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
      overlayFixedHeader: false,
      overlayFixedFirstColumn: false,
      prevScrollPos: window.pageXOffset,// starting position for detect horizontal scroll
    }
  }
  // contextRef = createRef()

  stickOverlayTableHeader = () => this.setState({ overlayFixedHeader: true })
  unStickOverlayTableHeader = () => this.setState({ overlayFixedHeader: false })
  
  // Hide or show the column overlay based on horizontal scroll
  detectHorizontalScroll = () => { // https://dev.to/guimg/hide-menu-when-scrolling-in-reactjs-47bj
    // if the viewport moves left or right and does not move up or down, then that is a horizontal scroll
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageXOffset;
    const overlayFixedFirstColumn = 
      // (currentScrollPos - prevScrollPos !== 0) ? true : false; // fixed column disappeared when scrolling up and down
      currentScrollPos !== 0 ? true : false;

    this.setState({
      prevScrollPos: currentScrollPos,
      overlayFixedFirstColumn
    })
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.detectHorizontalScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectHorizontalScroll);
  }

  // stickOverlayFirstColumn = () => this.setState({ 
  //   overlayFixedFirstColumn: visibile == true ? true : undefined 
  //   })
  // unStickOverlayFirstColumn = () => this.setState({ 
  //   overlayFixedFirstColumn: visible === false ? false : undefined
  //   })


  render() {
    
    const { overlayFixedHeader, overlayFixedFirstColumn } = this.state
    console.log('overlayFixedHeader: ', overlayFixedHeader);
    console.log('overlayFixedFirstColumn: ', overlayFixedFirstColumn); 
    // overlayFixedHeader was static false in mobile due to layout/virtual viewport versus visual viewport
    // https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
    

    const HeaderRow = () => (
      <Table.HeaderCell
        className='header-cell'
        >Header
      </Table.HeaderCell>
    )

    const HeaderRowOverlay = () => (
      <Table.HeaderCell
        className='header-cell-overlay'
        style={overlayFixedHeader ? fixedOverlayHeaderRowStyle : overlayHeaderRowStyle}
        >Header
      </Table.HeaderCell>
    )    

    const FirstColumnOverlay = () => (
      <Table.Row className='table-row'>
        <Table.Cell 
          className='first-column-cell'
          style={overlayFixedFirstColumn ? fixedOverlayFirstColumnStyle : overlayFirstColumnStyle }
          >FirstFixed
        </Table.Cell>
      </Table.Row>
    )


    return(
      <React.Fragment>
        {/*It seems like the default body is overflow-x: hidden;*/}
        <style>
          {`
            body {
              overflow: visible;
            }
          `}
        </style>
        
            <div 
              style={overlayFixedHeader ? fixedOverlayStyleHeaderRow : overlayStyleHeaderRow}
            >
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row className='table-header-row'>
                    <Table.HeaderCell
                      className='header-cell-overlay'
                      style={overlayFixedHeader ? fixedOverlayHeaderRowStyle : overlayHeaderRowStyle}
                      >HeaderFixed
                    </Table.HeaderCell>
                    {_.times(20, (i) => (
                      <HeaderRowOverlay key={i} />
                    ))}
                  </Table.Row>
                </Table.Header>
              </Table>
            </div>

            <div
              style={overlayFixedFirstColumn ? fixedOverlayStyleFirstColumn : overlayStyleFirstColumn}
            >
              <Table celled unstackable>
                <Table.Body>
                  {_.times(25, (i) => (
                      <FirstColumnOverlay key={i} />
                  ))} 
                </Table.Body>
              </Table>
            </div>

            
            <Visibility
              // offset={0}
              onTopPassed={this.stickOverlayTableHeader}
              onTopVisible={this.unStickOverlayTableHeader}
              once={false}
              // onPassing={this.stickOverlayFirstColumn}
              // onOffScreen={this.unStickOverlayFirstColumn}
            >
            
              <Table celled unstackable>        
                
                <Table.Header>
                  <Table.Row className='table-header-row'>
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
            </Visibility>
            
            
            
      </React.Fragment>
    )

  }

}


export default TableFreezeHeaderColumn;
// export {TableExamplePagination}; // https://www.geeksforgeeks.org/reactjs-importing-exporting/
