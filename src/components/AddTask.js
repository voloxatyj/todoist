import React, { useState } from 'react'
import { firebase } from '../firebase'
import { ProjectOverlay } from './ProjectOverlay'
import moment from 'moment'
import { FaRegListAlt , FaRegCalendarAlt } from 'react-icons/fa'
import { useSelectedProjectValue } from '../context'

export const AddTask = ({ 
	showAddTaskMain=true,
	shouldShowMain=false,
	showQuickAddTask,
	setShowQuickAddTask
}) => {
	const [task, setTask] = useState('')
	const [taskDate, setTaskDate] = useState('')
	const [project, setProject] = useState('')
	const [showMain, setShowMain] = useState(shouldShowMain)
	const [showProjectOverlay, setShowProjectOverlay] = useState(false)
	const [showTaskDate, setShowTaskDate] = useState(false)

	const { selectedProject } = useSelectedProjectValue()

	const addTask = () => {
		const projectId = project || selectedProject
		let collatedDate = ''

		if(projectId === 'TODAY') {
			collatedDate = moment().format('DD/MM/YYYY')
		} else if (projectId === 'NEXT_7') {
			collatedDate = moment()
			.add(7, 'days')
			.format('DD/MM/YYYY')
		}

		return (
			task &&
			projectId &&
			firebase
				.firestore()
				.collection('tasks')
				.add({
					archived: false,
					projectId,
					task,
					date: collatedDate || taskDate,
					userId: 'FUGdKa1g2bYb2'
				})
			.then(() => {
				setTask('')
				setProject('')
				setShowMain('')
				setShowProjectOverlay(false)
			})
		)
	}

	return (
		<div
			className={showQuickAddTask ? 'add-task add-task_overlay' : 'add-task'}
			data-testid="add-task-comp"
		>
			{showAddTaskMain && (
				<div
					className="add-task_shallow"
					data-testid="show-main-action"
					onClick={() => setShowMain(!showMain)}
				>
					<span className="add-task_plus">+</span>
					<span className="add-task_text">Add Task</span>
				</div>
			)}

			{(showMain || showQuickAddTask) && (
				<div className="add-task_main" data-testid="add-task-main">
					{showQuickAddTask && (
						<>
							<div data-testid="quick-add-task">
								<h2 className="header">Quick Add Task</h2>
								<span
									className="add-task_cancel-x"
									data-testid="add-task-quick-cancel"
									onClick={() => {
										setShowMain(false)
										setShowProjectOverlay(false)
										setShowQuickAddTask(false)
									}}
								>
									X
								</span>
							</div>
						</>
					)}
					<ProjectOverlay 
						setProject={setProject}
						showProjectOverlay={showProjectOverlay}
						setShowProjectOverlay={setShowProjectOverlay}
					/>
					<p>TaskDate here</p>
					<input 
						className="add-task_content"
						data-testid="add-task-content"
						type="text"
						value={task}
						onChange={e => setTask(e.target.value)}
					/>
					<button
						type="button"
						className="add-task_submit"
						onClick={() => addTask()}
					>
						Add Task
					</button>
					{!showQuickAddTask && (
						<span
							className="add-task_cancel"
							data-testid="add-task-main-cancel"
							onClick={() => {
								setShowMain(false)
								setShowProjectOverlay(false)
							}}
							onKeyDown={() => {
								setShowMain(false)
								setShowProjectOverlay(false)
							}}
						>
							Cancel
						</span>
					)}
					<span
						className="add-task_project"
						data-testid="show-project-overlay"
						onClick={() => setShowProjectOverlay(!showProjectOverlay)}
						onKeyDown={() => setShowProjectOverlay(!showProjectOverlay)}
						tabIndex={0}
						role="button"
					>
						<FaRegListAlt />
					</span>
					<span
						className="add-task_date"
						data-testid="show-task-date-overlay"
						onClick={() => setShowTaskDate(!showTaskDate)}
						onKeyDown={() => setShowTaskDate(!showTaskDate)}
            tabIndex={0}
            role="button"
					>
						<FaRegCalendarAlt />
					</span>
				</div>
			)}
		</div>
	)
}