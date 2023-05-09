import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

import Loader from './components/Loader';

const App = lazy(() => {
	return Promise.all([
		import('./App'),
		new Promise((resolve) => setTimeout(resolve, 2000)),
	]).then(([App]) => App);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename="/">
			<GlobalStyles>
				<Suspense fallback={<Loader />}>
					<App />
				</Suspense>
			</GlobalStyles>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
