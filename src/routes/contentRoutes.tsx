import React, { lazy } from 'react';
import { sidebarMenus } from '../menu';

const APP = {
	USER_MANAGEMENT: {
		USER: lazy(() => import('../pages/presentation/user-management/User')),
		CLIENT: lazy(() => import('../pages/presentation/user-management/clients/Client')),
	},
};

const presentation = [
	// App > User management
	{
		path: '/',
		element: <APP.USER_MANAGEMENT.USER />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.user.path,
		element: <APP.USER_MANAGEMENT.USER />,
		exact: true,
	},
];

const contents = [...presentation];

export default contents;
