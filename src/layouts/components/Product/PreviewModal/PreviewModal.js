import { useContext, useState, useEffect } from 'react';
import { ModalContext } from '~/layouts/DefaultLayout/DefaultLayout';

import classNames from 'classnames/bind';
import styles from './PreviewModal.module.scss';
import Button from '~/components/Button';
import {
	faCancel,
	faChevronCircleDown,
	faChevronCircleRight,
	faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '~/hooks';

const cx = classNames.bind(styles);

function PreviewModal() {
	const { width } = useWindowSize();
	const { handleCloseModal, getLink, getSrc, getSource, info } = useContext(ModalContext);
	const [isDescView, setIsDescView] = useState(false);
	const [isMoveInClass, setMoveInClass] = useState(false);
	const [isIframe, setIsIframe] = useState(false);
	// const handleOpenLink = (e) => {
	// 	window.open(getLink);
	// };
	const handleIsDescView = (e) => {
		if (isDescView) {
			setMoveInClass(false);
			setTimeout(() => {
				setIsDescView(false);
			}, 800);
		} else if (!isDescView) {
			setMoveInClass(true);
			setIsDescView(true);
		}
	};
	useEffect(() => {
		function handleEsc(event) {
			if (event.keyCode === 27) {
				handleCloseModal(event);
			}
		}
		document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, []);
	useEffect(() => {
		if (getSrc.includes('drive.google')) {
			setIsIframe(true);
		} else {
			setIsIframe(false);
		}
	}, []);
	return (
		<>
			{width >= 768 && (
				<div className={cx('wrapper')}>
					<div className={cx('modal-wrapper')}>
						<section className={cx('modal-section')}>
							<div className={cx('modal-content')}>
								<div className={cx('img-section')}>
									{getSrc &&
										(isIframe ? (
											<video title='google-iframe' src={getSrc} controls />
										) : (
											<img
												src={getSrc}
												alt={getSrc}
												className={cx('img-content')}
											/>
										))}
								</div>

								{!isDescView && (
									<div className={cx('navigate')} onClick={handleIsDescView}>
										<div className={cx('navigate-icon')}></div>
									</div>
								)}
								{isDescView && (
									<div
										className={cx(
											'prop-section',
											isMoveInClass ? 'moveIn' : 'moveOut'
										)}
										// className={cx('prop-section', {
										// 	moveIn: isMoveInClass,
										// 	moveOut: !isMoveInClass,
										// })}
									>
										<div className={cx('prop-content')}>
											<button onClick={handleIsDescView}>
												{width > 1024 ? (
													<FontAwesomeIcon
														icon={faChevronCircleRight}
														className={cx('back-btn')}
													/>
												) : (
													<FontAwesomeIcon
														icon={faChevronCircleDown}
														className={cx('back-btn')}
													/>
												)}
											</button>

											<div className={cx('prop-header')}>{info.name}</div>
											<div className={cx('prop-desc')}>
												<p>{info.description}</p>
											</div>
											<div className={cx('prop-link')}>
												<div className={cx('btn-section')}>
													<Button
														href={info.href}
														target='_blank'
														wrapper
														className={cx('btn')}
														disabled={!info.href}
													>
														Live Demo
													</Button>
													<Button
														href={info.source}
														target='_blank'
														wrapper
														className={cx('btn')}
														disabled={!info.source}
													>
														Source Code
													</Button>
												</div>
											</div>
										</div>
									</div>
								)}

								<button onClick={handleCloseModal} className={cx('btn-cancel')}>
									<FontAwesomeIcon icon={faClose} />
								</button>
							</div>
						</section>
					</div>
				</div>
			)}
		</>
	);
}

export default PreviewModal;
