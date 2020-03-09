import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa'

export const Sidebar = () => (
	<div className="sidebar">
		<ul className="generic_sidebar">
			<li>
				<span>
					<FaInbox />
				</span>
				<span>Inbox</span>
			</li>
			<li>
				<span>
					<FaRegCalendar />
				</span>
				<span>Today</span>
			</li>
			<li>
				<span>
					<FaRegCalendarAlt />
				</span>
				<span>Next 7 days</span>
			</li>
		</ul>

		<div className="sidebar_middle">
			<span>
				<FaChevronDown />
			</span>
			<h2>Projects</h2>
		</div>

		<ul className="sidebar_projects">
			<p>Projects will be here!</p>
		</ul>
		Add Project
	</div>
)