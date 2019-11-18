import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'
import { action, decorate, withActions, configureActions } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs/react';

configureActions({
  depth: 20,
  // Limit the number of items logged into the actions panel
  limit: 10,
})

export default { title: 'Button' };

export const WithText = () => <Button>Hello Button</Button>;

export const WithEmoji = () => (
  <Button ><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
)

storiesOf('Button', module)
.addDecorator(withActions('mouseover', 'click .btn'))
.addDecorator(withKnobs)
.add('Default Actions', () => 
  <div task={object('task', {a: 'AA', b: 'BBB', state: 'TASK_PINNED'})}>
    Clicks on this button will be logged: <button className="btn" type="button">Button</button>
  </div>
)
