import _ from 'lodash';
import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';


const HeaderRow = () => <Table.HeaderCell>Header</Table.HeaderCell>
const TableCell = () => <Table.Cell>Cell</Table.Cell>
const TableRow = () =>  <Table.Row>
                          <Table.Cell>FirstFixed</Table.Cell>
                          {_.times(20, (i) => (
                                  <TableCell key={i} />
                                ))}
                        </Table.Row>


const TableExamplePagination = () => (
  <Table celled>
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
)

export default TableExamplePagination;