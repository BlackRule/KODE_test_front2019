import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Sets from './containers/Sets'
import Cards from './containers/Cards'

const App = () => {
  return (
      <Fragment>
        <Route exact path="/" component={Sets}/>
        <Route path="/cards" component={Cards}/>
      </Fragment>
  )
};

export default App
