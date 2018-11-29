import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

let obj = {
	a: 123,
	b: 234,
};

const IndexPage = () => (
	<Layout>
		<h1>Hi people</h1>
		<p>Hi there</p>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
);

export default IndexPage;
