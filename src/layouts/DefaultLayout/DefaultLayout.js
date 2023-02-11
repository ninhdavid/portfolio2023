import React, { createContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '~/pages/Home';
import Work from '~/pages/Work';
import Contact from '~/pages/Contact';
import Me from '~/pages/Me';
import Modal from '../components/Product/Modal';
import Footer from '../components/Footer';
import ScrollToTop from '~/hooks/ScrollToTop';

const cx = classNames.bind(styles);

export const ModalContext = createContext();

function DefaultLayout({ children }) {
	const [showModal, setShowModal] = useState(false);
	const [getLink, setGetLink] = useState('');

	const handleOpenModal = (e) => {
		setShowModal(true);
		e.preventDefault();
		const link = e.currentTarget.href;
		setGetLink(link);
	};

	const handleCloseModal = (e) => {
		setShowModal(false);
		e.stopPropagation();
	};

	return (
		<ModalContext.Provider
			value={{ showModal, getLink, handleOpenModal, handleCloseModal }}
		>
			<div className={cx('wrapper')}>
				{showModal && <Modal />}
				<Home />
				<div className={cx('container')}>
					<Sidebar />
					<Me />
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
