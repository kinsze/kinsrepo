import React from 'react';
import { Tab } from 'semantic-ui-react';
import Zenplanner from '../iframes/zenPlannerIframe.js';
import AdultKungfu from '../information/adultKungFu.js';
import PersonalTraining from '../information/personalTraining.js';
import SparITA from '../information/sparITA.js';
import Events from '../information/events.js';

const panes = [
  { menuItem: 'Adult Kung Fu', render: () => <Tab.Pane><AdultKungfu /></Tab.Pane> },
  { menuItem: 'Children Kung Fu', render: () => <Tab.Pane><Zenplanner /></Tab.Pane> },
  { menuItem: 'Personal Training', render: () => <Tab.Pane> <PersonalTraining /> </Tab.Pane> },
  { menuItem: 'Spar ITA', render: () => <Tab.Pane><SparITA /> </Tab.Pane> },
  { menuItem: 'Events', render: () => <Tab.Pane><Events /></Tab.Pane> },
  { menuItem: 'Tuina', render: () => <Tab.Pane>'Tuina Content inside tab' </Tab.Pane> },
  ]

const TabNav = () => (
  <Tab panes={panes} />
)

export default TabNav