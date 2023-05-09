import React, { createContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '~/pages/Home';
import Work from '~/pages/Work';
import Contact from '~/pages/Contact';
import About from '~/pages/About';
import Modal from '../components/Product/Modal';
import Footer from '../components/Footer';
import ScrollToTop from '~/hooks/ScrollToTop';
import { BsCheckLg } from 'react-icons/bs';
import PreviewModal from '../components/Product/PreviewModal';
import { useWindowSize } from '~/hooks';

const cx = classNames.bind(styles);

export const ModalContext = createContext();

function DefaultLayout({ children }) {
	const { width } = useWindowSize();
	const [showModal, setShowModal] = useState(false);
	const [isPreviewModal, setPreviewModal] = useState(false);
	const [getLink, setGetLink] = useState('');
	const [getSource, setGetSource] = useState('');
	const [getSrc, setGetSrc] = useState('');
	const [info, setInfo] = useState();

	const handleOpenModal = (e, state) => {
		e.preventDefault();
		if (width >= 768) {
			if (!state) {
				if (e.currentTarget.href) {
					const link = e.currentTarget.href;
					setGetLink(link);
					setShowModal(true);
				}
			} else if (state.preview !== 'undefined') {
				setGetSrc(state.preview);
				setPreviewModal(true);
				setGetLink(state.href);
				setGetSource(state.source);
				document.body.style.overflow = 'hidden';
				setInfo(state);
			}
		} else {
			const alt = e.currentTarget.querySelector('img').getAttribute('alt');
			if (alt !== '') {
				setGetLink(alt);
				setShowModal(true);
			}
			return;
		}
	};

	const handleCloseModal = (e) => {
		setPreviewModal(false);
		setShowModal(false);
		e.stopPropagation();
		document.body.style.overflow = 'auto';
	};

	return (
		<ModalContext.Provider
			value={{
				showModal,
				getLink,
				handleOpenModal,
				handleCloseModal,
				getSrc,
				getSource,
				info,
			}}
		>
			<div className={cx('wrapper')}>
				{isPreviewModal && <PreviewModal />}
				{showModal && <Modal />}
				<Home />
				<div className={cx('container')}>
					<Sidebar />
					<About />
					<Work />
					<Contact />
					<Footer />
					<div className={cx('content')}>{children}</div>
				</div>
				<ScrollToTop />
			</div>
		</ModalContext.Provider>
	);
}

export default DefaultLayout;
