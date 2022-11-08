import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function Seo({ title, description, name, type, url, image }) {
	return (
		<Helmet>
			{/* Standard metadata tags */}
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={url}></link>
			{/* End standard metadata tags */}

			{/* Facebook tags */}
			<meta property='og:locale' content='en_GB' />
			<meta property='og:type' content={type} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={url} />
			<meta property='og:site_name' content={name} />
			{image ? <meta property='og:image' content={image} /> : null}
			{/* End Facebook tags */}

			{/* Twitter tags */}
			<meta name='twitter:creator' content={name} />
			<meta name='twitter:card' content={type} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			{/* End Twitter tags */}
		</Helmet>
	);
}
