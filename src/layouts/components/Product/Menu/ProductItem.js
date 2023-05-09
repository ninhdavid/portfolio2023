import React, { useContext, useRef } from 'react';
import { ModalContext } from '~/layouts/DefaultLayout/DefaultLayout';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ProductMenu.module.scss';
import LoadImage from '~/components/Image/LoadImage';

const cx = classNames.bind(styles);

function ProductItem({ props }) {
	const { handleOpenModal } = useContext(ModalContext);

	const ref = useRef();
	const handleOpenPreviewModal = (e, state = props) => {
		if (!props.src) {
			e.preventDefault();
			return false;
		} else {
			handleOpenModal(e, state);
		}
	};
	const handleClick = (e) => {
		if (!props.href) {
			e.preventDefault();
			return false;
		} else {
			handleOpenModal(e);
		}
	};
	return (
		<>
			<div className={cx('product-item')}>
				<div className={cx('image-content')} onClick={handleOpenPreviewModal}>
					<LoadImage
						src={props.src}
						alt={props.href}
						className={cx('image-item')}
						ref={ref}
					/>
				</div>
				<div className={cx('link-section')}>
					<Button
						href={props.href}
						className={cx('link-item')}
						onClick={handleClick}
					>
						{props.name}
					</Button>
				</div>
				<div className={cx('des-section')}>
					<div className={cx('des-content')}>
						<p className={cx('des-description')}>{props.intro}</p>
						{props.source && (
							<div>
								<p className={cx('des-tag')}>Source code:</p>

								<p className={cx('des-link')}>
									<Button
										href={props.source}
										alt={props.source}
										onClick={handleClick}
										className={cx('link-source')}
									>
										<span>{props.source}</span>
									</Button>
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductItem;
