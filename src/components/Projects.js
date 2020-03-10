import React, { useState } from 'react'
import { useSelectedProjectValue, useProjectsValue } from '../context'
import { InduvidualProject } from './InduvidualProject'


export const Projects = ({ activeValue = null }) => {

	const [ active, setActive ] = useState(activeValue)
	const { setSelectedProject } = useSelectedProjectValue()
	const { projects } = useProjectsValue()

	return (
		projects && projects.map(project => (
		<li
		key={project.projectId}
		data-doc-id={project.docId}
		data-testid="project-action"
		className={
			active === project.projectId ?
			'sidebar_project active' : 'sidebar_project'
		}
		onClick={() => {
			setActive(project.projectId)
			setSelectedProject(project.projectId)
		}}
		onKeyDown={() => {
			setActive(project.projectId)
			setSelectedProject(project.projectId)
		}}
		>
			<InduvidualProject project={project} />
		</li>
		))
	)
}
