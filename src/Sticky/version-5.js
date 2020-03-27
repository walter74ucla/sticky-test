import _ from 'lodash';
import React, { Component, createRef } from 'react';
import { Icon, Label, Menu, Table, Visibility } from 'semantic-ui-react';


const overlayStyle = { // for the Header Row
  display: 'none', // Hidden by default
}

const fixedOverlayStyle = { // for the Header Row, initial style
  ...overlayStyle,
  position: '-webkit-sticky', 
  position: 'sticky',
  top: 0,
  // border: '3px solid blue',
  display: 'block', // Show it
}

const overlayHeaderRowStyle = { 
  display: 'none', // Hidden by default
}

const fixedOverlayHeaderRowStyle = { // updates style
  ...overlayHeaderRowStyle,
  display: 'inline', // Show it
  // border: '1px solid red',
  backgroundColor: 'purple',
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
      overlayFixed: false,
    }
  }
  // contextRef = createRef()

  stickOverlayTableHeader = () => this.setState({ overlayFixed: true })
  unStickOverlayTableHeader = () => this.setState({ overlayFixed: false })


  render() {
    
    const { overlayFixed } = this.state
    console.log(overlayFixed); // this is a static false in mobile due to layout/virtual viewport versus visual viewport
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
        style={overlayFixed ? fixedOverlayHeaderRowStyle : overlayHeaderRowStyle}
      >Header
      </Table.HeaderCell>
    )    

    return(
      <React.Fragment>
      <title>{`Test`}</title>
        {/*<Ref innerRef={this.contextRef}>*/}
            <div 
              // ref={this.contextRef}
              style={overlayFixed ? fixedOverlayStyle : overlayStyle}
            >
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row className='table-header-row'>
                    <Table.HeaderCell
                      className='header-cell-overlay'
                      style={overlayFixed ? fixedOverlayHeaderRowStyle : overlayHeaderRowStyle}
                    >HeaderFixed
                    </Table.HeaderCell>
                    {_.times(20, (i) => (
                      <HeaderRowOverlay key={i} />
                    ))}
                  </Table.Row>
                </Table.Header>
              </Table>
            </div>

            <div>
            <Visibility
              // offset={0}
              onTopPassed={this.stickOverlayTableHeader}
              onTopVisible={this.unStickOverlayTableHeader}
              once={false}
            >
            
              <Table celled unstackable>        
                
                <Table.Header>
                  <Table.Row className='table-header-row'>
                    <Table.HeaderCell
                      className='header-cell'
                      >HeaderFixed
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
            </div>
            
            
        {/*</Ref>*/}
      </React.Fragment>
    )

  }

}


export default TableFreezeHeaderColumn;
// export {TableExamplePagination}; // https://www.geeksforgeeks.org/reactjs-importing-exporting/
