import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Zenplanner, ScriptZenplanner } from '../iframes/zenPlannerIframe.js';

const panes = [
  { menuItem: 'Adult <br/>Kung Fu', pane: 'Tab 1 Content this is bamboo kung fu' },
  { menuItem: 'Children Kung Fu', pane:  '{< Zenplanner />' },
  { menuItem: 'Personal Training', pane: 'Tab 3 Content' },
  { menuItem: 'Spar ITA', pane: 'Tab 1 Spar ITA Content' },
  { menuItem: 'Events', pane: 'Tab Events content' },
  { menuItem: 'Tuina', pane: 'Tuina Content inside tab' },
  ]

const TabNav = () => (
  <Tab panes={panes} renderActiveOnly={false} />
)

export default TabNav