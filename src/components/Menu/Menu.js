import React, { Component } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import './Menu.scss';

const menuItems = {
	TechSkills: 'Technical skills',
	PastKnowledge: 'Past knowledge',
	Career: 'Career',
	Education: 'Education',
	SoftSkills: 'Soft skills',
};

class Menu extends Component {
	static propTypes = {
		currentName: PropTypes.string.isRequired,
		setEventName: PropTypes.func.isRequired,
	};

	handleClick = e => {
		const currentItem = e.currentTarget.getAttribute('data-value');
		const { currentName } = this.props;

		if (currentItem !== currentName) {
			document.getElementById('slide').classList.remove('slideEnter');
			document.getElementById('slide').classList.add('slideExit');

			setTimeout(() => {
				this.props.setEventName(currentItem);
			}, 2000);
		}
	};

	render() {
		const { currentName } = this.props;
		return (
			<div className="menu">
				<ul className="menu__list">
					<li
						className={clsx(
							'menu__item',
							currentName === Object.keys(menuItems)[0] &&
								'active',
						)}
						data-value={Object.keys(menuItems)[0]}
						onClick={this.handleClick}
						role="presentation"
					>
						{Object.values(menuItems)[0]}
					</li>

					<li
						className={clsx(
							'menu__item',
							currentName === Object.keys(menuItems)[1] &&
								'active',
						)}
						data-value={Object.keys(menuItems)[1]}
						onClick={this.handleClick}
						role="presentation"
					>
						{Object.values(menuItems)[1]}
					</li>

					<li
						className={clsx(
							'menu__item',
							currentName === Object.keys(menuItems)[2] &&
								'active',
						)}
						data-value={Object.keys(menuItems)[2]}
						onClick={this.handleClick}
						role="presentation"
					>
						{Object.values(menuItems)[2]}
					</li>

					<li
						className={clsx(
							'menu__item',
							currentName === Object.keys(menuItems)[3] &&
								'active',
						)}
						data-value={Object.keys(menuItems)[3]}
						onClick={this.handleClick}
						role="presentation"
					>
						{Object.values(menuItems)[3]}
					</li>

					<li
						className={clsx(
							'menu__item',
							currentName === Object.keys(menuItems)[4] &&
								'active',
						)}
						data-value={Object.keys(menuItems)[4]}
						onClick={this.handleClick}
						role="presentation"
					>
						{Object.values(menuItems)[4]}
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
