import config from '~/config';
//Layouts
// import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Work from '~/pages/Work';
import Info from '~/pages/Info';
import Search from '~/pages/Contact';

//Public routes
const publicRoutes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.work, component: Work },
	{ path: config.routes.info, component: Info },
	{ path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
