import config from '~/config';
//Layouts
// import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Work from '~/pages/Work';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

//Public routes
const publicRoutes = [
	{ path: config.routes.home, name: Home, component: Home },
	{ path: config.routes.work, name: Work, component: Work },
	{ path: config.routes.about, name: About, component: About },
	{ path: config.routes.contact, name: Contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
