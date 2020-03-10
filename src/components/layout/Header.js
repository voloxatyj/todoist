import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => {
	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<img src="/images/logo.png" alt="Todoist" />
				</div>
				<div className="settings">
					<ul>
						<li data-testid="quick-add-task-action" className="settings_add">+</li>
						<li data-testid="dark-mode-action" className="settings_darkmode">
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}