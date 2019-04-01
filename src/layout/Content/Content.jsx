import * as React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import MainPage from '../../pages/MainPage/MainPage'
import ROUTES from '../../constants/routes'


const Content = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path={ROUTES.main}
            component={MainPage}
          />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default Content
