import React , { useState } from 'react'
import { generatePushId } from '../helpers'
import { firebase } from '../firebase'
import { useProjectsValue } from '../context'

export const AddProject = ({ shouldShow = false }) => {
	const [show, setShow] = useState(shouldShow)
	const [projectName, setProjectName] = useState('')

	const projectId = generatePushId()
	const { setProjects } = useProjectsValue()

	const addProject = () => 
		projectName && firebase
			.firestore()
			.collection('projects')
			.add({
				projectId,
				name: projectName,
				userId: 'FUGdKa1g2bYb2'
			})
			.then(() => {
				setProjects([])
				setProjectName('')
				setShow(false)
			})
		return (
			<div className="add-project" data-testid="add-project">
				{show && (
					<div className="add-project_input">
						<input 
							value={projectName}
							onChange={e => setProjectName(e.target.value)}
							type="text"
							className="project-name"
							data-testid="project-name"
							placeholder="Name your project"
							/>
							<button 
								className="add-project_submit"
								type="button"
								onClick={() => addProject()}
								data-testid="add-project-submit"
							>
								Add Project 
							</button>
							<span
								data-testid="hide-project-overlay"
								className="add-project_cancel"
								onClick={() => setShow(false)}
							>
								Cancel
							</span>
					</div>
				)}
					<span className="add-project_plus">+</span>
					<span
						data-testid="add-project-action"
						className="add-project_text"
						onClick={() => setShow(!show)}
						>
							Add Project
						</span>
			</div>	
		)
}