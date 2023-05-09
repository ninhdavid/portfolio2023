import { Link } from 'react-scroll';
import { HiOutlineHome } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';

import styles from './NavMobile.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NavMobile() {
	return (
		<>
			<div>
				<Link
					to="/"
					spy={true}
					smooth={true}
					duration={800}
					className={cx('nav-m-item')}
				>
					<HiOutlineHome className={cx('m-btn')} />
				</Link>
			</div>

			<div>
				<Link
					to="/about"
					spy={true}
					smooth={true}
					duration={800}
					className={cx('nav-m-item')}
				>
					<BsPerson className={cx('m-btn')} />
				</Link>
			</div>
			<div>
				<Link
					to="/work"
					spy={true}
					smooth={true}
					duration={800}
					className={cx('nav-m-item')}
				>
					<MdWorkOutline className={cx('m-btn')} />
				</Link>
			</div>
			<div>
				<Link
					to="/contact"
					spy={true}
					smooth={true}
					duration={800}
					className={cx('nav-m-item')}
				>
					<BiMailSend className={cx('m-btn')} />
				</Link>
			</div>
		</>
	);
}

export default NavMobile;
