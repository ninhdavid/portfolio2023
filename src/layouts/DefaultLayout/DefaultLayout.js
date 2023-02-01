import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header></Header>
			<div className={cx('container')}>
				<Sidebar className={cx('sidebar')} />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
