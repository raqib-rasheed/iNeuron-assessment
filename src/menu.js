export const sidebarMenus = {
	userManagement: {
		id: 'userManagement',
		text: 'User Managements',
		path: 'user-management',
		icon: 'People',
		subMenu: {
			user: {
				id: 'userManagementUser',
				text: 'User',
				path: 'user-management/user',
				icon: 'Dot',
			},
		},
	},
};

export const componentsMenu = {
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap',
		icon: 'Extension',
	},
	notification: {
		id: 'notification',
		text: 'Notification',
		path: 'notifications',
		icon: 'NotificationsNone',
	},
	hooks: {
		id: 'hooks',
		text: 'Hooks',
		path: 'hooks',
		icon: 'Anchor',
	},
};

export const productsMenu = {
	companyA: {
		id: 'companyA',
		text: 'Company A',
		path: 'grid-pages/products',
		subMenu: null,
	},
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
