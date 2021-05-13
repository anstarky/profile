import React, { Component } from 'react';

import Menu from '../Menu';
import TechSkills from '../TechSkills/TechSkills';
import PastKnowledge from '../PastKnowledge';
import Career from '../Career';
import Education from '../Education';
import SoftSkills from '../SoftSkills';

import './Content.scss';

class Content extends Component {
	state = {
		currentName: 'TechSkills',
	};

	handleEventName = eventName => {
		this.setState({ currentName: eventName });
	};

	render() {
		const { currentName } = this.state;

		return (
			<div className="content">
				<Menu
					setEventName={this.handleEventName}
					currentName={currentName}
				/>

				{currentName === 'TechSkills' && (
					<TechSkills currentName={currentName} />
				)}
				{currentName === 'PastKnowledge' && (
					<PastKnowledge currentName={currentName} />
				)}
				{currentName === 'Career' && (
					<Career currentName={currentName} />
				)}
				{currentName === 'Education' && (
					<Education currentName={currentName} />
				)}
				{currentName === 'SoftSkills' && (
					<SoftSkills currentName={currentName} />
				)}
			</div>
		);
	}
}

export default Content;
