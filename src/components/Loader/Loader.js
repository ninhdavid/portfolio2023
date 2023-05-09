import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
	return (
		<>
			<div className={cx('loader-container')}>
				<img src={images.loader} alt="loader"></img>
			</div>
		</>
	);
}

export default Loader;
