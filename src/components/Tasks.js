import React, { useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants'
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useSelectedProjectValue, useProjectsValue } from '../context'

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectValue()
	const { tasks } = useTasks(selectedProject)
	const { projects } = useProjectsValue()
	
	let projectName = ''

	if (projects && selectedProject && !collatedTasksExist(selectedProject)){
		projectName = getTitle(projects, selectedProject).name
	}

	if (selectedProject && collatedTasksExist(selectedProject)){
		projectName = getCollatedTitle(collatedTasks, selectedProject).name
	}

	useEffect(() => {
		document.title = `${projectName}: Todoist`
	})

	return (
		<div className="tasks" data-testid="tasks">
			<h2 data-testid="project-name">{projectName}</h2>

			<ul className="tasks_list">
				{tasks.map(task => (
					<li key={`${task.id}`}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	)
}