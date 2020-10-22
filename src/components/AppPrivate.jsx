import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import Dashboard from './user/Dashboard'
// import Settings from './user/Settings'
// import Logout from './auth/Logout'

function Dashboard (props) {
    return (
        <div>
            <p>Dashboard</p>
        </div>
    )
}

export default class AppPrivate extends Component {
	render() {
		document.title = 'Notex app'
		return (
			<Switch>
				<Route exact path="/" component={Dashboard} />
			</Switch>
		)
	}
}
