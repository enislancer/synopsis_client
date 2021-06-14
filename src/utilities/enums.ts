export enum Routes {
	ABOUT = '/about',
	LOGIN = '/login',
	REGISTER = '/register',
	SETTINGS = '/settings',
	PASSWORD_RESET = '/reset-password',
	SCRIPT = '/:id/script',
	SCRIPTS = ['/:id/script', '/:id/script/:pageActive'],
	BUDGETS = ["/:id/budget", '/:id/budget/:pageActive'],
	BUDGET ="/:id/budget",
	SUB_BUDGET ='/:id/budget/:pageActive',
	ACTORS = '/:id/actors',
	SHOOTING_DAYS = '/:id/shooting-days',
	TASKS = '/:id/tasks',
	SUPPLIERS = '/:id/suppliers',
	FILES = '/:id/files',
	OVERVIEW = '/:id/overview',
	PERMISSIONS = '/:id/permissions',
	PROJECTS = '/',
	PLANNING = '/:id/planning',
	BREAKDOWN = ':id/breakdown',
	NOT_FOUND = '/not-found',
	PROFILE = ['/:id/profile', '/profile', ]
}
