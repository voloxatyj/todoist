import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { AddTask } from '../AddTask'

export const Header = ({ darkMode, setDarkMode }) => {
	const [shouldShowMain, setShouldShowMain] = useState(false)
	const [showQuickAddTask, setShowQuickAddTask] = useState(false)

	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<img src="/images/logo.png" alt="Todoist" />
				</div>
				<div className="settings">
					<ul>
						<li 
							data-testid="quick-add-task-action"
							className="settings_add"
							onClick={() => {
								setShowQuickAddTask(true)
								setShouldShowMain(true)
							}}
							onKeyDown={() => {
								setShowQuickAddTask(true)
								setShouldShowMain(true)
							}}
							tabIndex={0}
							role="button"
							>+</li>
						<li 
							data-testid="dark-mode-action"
							className="settings_darkmode"
							onClick={() => {
								setDarkMode(!darkMode)
							}}
							onKeyDown={() => {
								setDarkMode(!darkMode)
							}}
							role="button"
							>
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>

			<AddTask 
				showAddTaskMain={false}
				shouldShowMain={shouldShowMain}
				showQuickAddTask={showQuickAddTask}
				setShowQuickAddTask={setShowQuickAddTask}
			/>
		</header>
	)
}