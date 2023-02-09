import React from 'react';
import { Route, Routes } from 'react-router-dom';
import contents from '../../routes/contentRoutes';

const ContentRoutes = () => {
	return (
		<Routes>
			{contents.map((page) => {
				// eslint-disable-next-line react/jsx-props-no-spreading
				return <Route key={page.path} {...page} />;
			})}
			<Route path='*' element={<div>Oops! Wrong route</div>} />
		</Routes>
	);
};

export default ContentRoutes;
