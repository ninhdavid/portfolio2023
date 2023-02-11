import { useEffect, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/GlobalStyles';
import useWindowSize from './useWindowSize';

const cx = classNames.bind(styles);

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const { width } = useWindowSize();

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (!isVisible && window.pageYOffset > 600) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<>
			{width >= 768 && (
				<button
					className={cx('scroll-top')}
					onClick={handleScrollToTop}
					style={{ height: 50, display: isVisible ? 'flex' : 'none' }}
				>
					<FontAwesomeIcon icon={faArrowUp} />
				</button>
			)}
		</>
	);
}
