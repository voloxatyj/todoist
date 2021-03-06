import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { firebase } from '../firebase'
import { useSelectedProjectValue, useProjectsValue } from '../context'

export const InduvidualProject = ({ project }) => {
	const [ showConfirm, setShowConfirm ] = useState(false)
	const { setSelectedProject } = useSelectedProjectValue()
	const { projects, setProjects } = useProjectsValue()

	const deleteProject = docId => {
		firebase
		.firestore()
		.collection('projects')
		.doc(docId)
		.delete()
		.then(() => {
			setProjects([...projects])
			setSelectedProject('INBOX')
		})
	}

	return (
		<>
			<span className="sidebar_dot">⚇</span>
			<span className="sidebar_project-name">{project.name}</span>
			<span
			className="sidebar_project-delete"
			data-testid="delete-project"
			onClick={() => setShowConfirm(!showConfirm)}
			>
			<FaTrashAlt />
			{showConfirm && (
				<div className="project-delete-modal">
					<div className="project-delete-modal_inner">
						<p>Are you sure you want to delete this project?</p>
						<button
							type="button"
							onClick={() => deleteProject(project.docId)}
							onKeyDown={() => deleteProject(project.docId)}
							tabIndex={0}
							role="button"
						>
							Delete
						</button>
						<span
							onClick={() => setShowConfirm(!showConfirm)}
							onKeyDown={() => setShowConfirm(!showConfirm)}
							tabIndex={0}
							role="button"
							aria-label="Cancel adding project, do not delete"
							>
								Cancel
						</span>
					</div>
				</div>
			)}
			</span>
		</>
	)
}

