import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Zenplanner, ScriptZenplanner } from '../iframes/zenPlannerIframe.js';

const panes = [
  { menuItem: 'Adult <br/>Kung Fu', pane: 'Tab 1 Content this is bamboo kung fu' },
  { menuItem: 'Children Kung Fu', pane:  '{<div>< Zenplanner /></div>}' },
  { menuItem: 'Personal Training', pane: 'Tab 3 Content' },
  { menuItem: 'Spar ITA', pane: 'Tab 1 Content' },
  { menuItem: 'Events', pane: 'Tab 2 Content' },
  { menuItem: 'Tuina', pane: 'Tab 3 Content' },
  { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
  { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
  { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
]

const TabNav = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabNav