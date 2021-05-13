import React from 'react';
import './TechSkills.scss';

const TechSkills = () => (
	<section className="slideEnter" id="slide">
		<h2>Technical Skills</h2>
		<div className="tech_skills">
			<h3>
				<i> &#10004;</i>HTML, CSS
			</h3>
			<code>
				HTML5, BEM, SASS/SCSS, Flexbox, CSS Grid, Bootstrap 4, Git
			</code>

			<h3>
				<i> &#10004;</i>JAVASCRIPT
			</h3>
			<code>
				ES 7 - ES 9, Promise API, JSON, AJAX, XHR, Fetch API, Cookies,
				Web Storage, IndexedDB, Webpack
			</code>

			<h3>
				<i> &#10004;</i>REACT.JS
			</h3>
			<code>
				Starter Kit, React-Router, Redux, REST API, CSS preprocessors
			</code>

			<h3>
				<i> &#10004;</i>NODE.JS
			</h3>
			<code>Express.js, MongoDB</code>

			<h3>
				<i> &#10004;</i>WORDPRESS
			</h3>
			<code>
				Templates, Custom Fields, Taxonomy, Widgets, Multisite, WP
				Plugins, WP Themes, Woocommerce
			</code>
		</div>
	</section>
);

export default TechSkills;
