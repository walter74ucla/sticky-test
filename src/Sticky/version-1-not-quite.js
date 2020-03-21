// source: https://react.semantic-ui.com/modules/sticky/#types-adjacent-context

import _ from 'lodash';
import React, { Component, createRef } from 'react';
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react';

const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

export default class StickyExampleAdjacentContext extends Component {
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment>
              {_.times(20, (i) => (
                <Placeholder key={i} />
              ))}

            {/*Left side paragraph and image are cut-off on responsive*/}
              <Rail position='left'>
                {_.times(5, (i) => (
                  <Placeholder key={i} />
                ))}

                <Sticky context={this.contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Sticky>
              </Rail>

              <Rail position='right'>
                <Sticky context={this.contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
  }
}