import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);
function Grid({ children }) {
	return (
		<>
			<div className={cx('container')}>
				<div className={cx('content')}>{children}</div>
			</div>
		</>
	);
}

export default Grid;
