import React from 'react';

import './Sidebar.scss';
import photo from '../../assets/images/photo.png';

const Sidebar = () => (
	<div className="Sidebar">
		<img src={photo} className="Sidebar__photo" alt="Anita Kovalchuk" />
		<div className="Sidebar__desc">
			<section className="main">
				<h1>Anita Kovalchuk</h1>
				<p>Front-end developer</p>
			</section>

			<section className="contacts">
				<h2>Contacts</h2>
				<p>
					<b>Mobile:</b> +38 (097) 79-44-131 (Viber)
				</p>
				<p>
					<b>E-mail:</b>{' '}
					<a href="mailto:nita.kovalchuk@gmail.com">
						nita.kovalchuk@gmail.com
					</a>
				</p>
				<p>
					<b>Skype:</b>{' '}
					<a href="skype:live:.cid.300a62ef089d86df?chat">
						live:.cid.300a62ef089d86df
					</a>
				</p>
				<p>
					<b>LinkedIn:</b>{' '}
					<a href="linkedin.com/in/anstarky/">
						linkedin.com/in/anstarky/
					</a>
				</p>
				<p>
					<b>GitHub:</b>{' '}
					<a href="github.com/anstarky">github.com/anstarky</a>
				</p>
				<p>
					<b>Residence:</b> Ukraine, Kyiv
				</p>
			</section>

			<section className="pers__info">
				<h2>Personal information</h2>
				<p>
					<b>Date of birth:</b> June 13
				</p>
				<p>
					<b>Languages:</b>
				</p>
				<ul>
					<li>Russian (native)</li>
					<li>Ukrainian (native)</li>
					<li>English (intermediate)</li>
				</ul>
			</section>
		</div>
	</div>
);

export default Sidebar;
