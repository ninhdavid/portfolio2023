import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useWindowSize } from '~/hooks';

import 'swiper/scss';
import 'swiper/css/bundle';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import Grid from '~/components/Grid';
import ProductMenu, { ProductItem } from './Menu';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Product() {
	const { width } = useWindowSize();

	const product = [
		{
			src: `${images.product1}`,
			preview: `${images.preview1}`,
			href: 'http://doommad.byethost16.com/',
			source: '',
			name: 'WordPress eCommerce',
			tag: '',
			intro:
				'WordPress giúp tôi tạo và quản lý trang web động. Từ đó tôi có thể tùy chỉnh giao diện , sử dụng các plugin và sử dụng cơ sở dữ liệu và đưa trang web lên hosting.',
			description:
				'WordPress giúp tôi tạo và quản lý trang web động. Từ đó tôi có thể tùy chỉnh giao diện , sử dụng các plugin và sử dụng cơ sở dữ liệu và đưa trang web lên hosting.',
		},
		{
			src: `${images.product2}`,
			preview: `${images.preview2}`,
			href: 'http://ninhdavid.github.io/tiktok-ui/',
			source: 'https://github.com/ninhdavid/tiktok-ui',
			name: 'Tiktok-ui',
			tag: '',
			intro:
				'Trong dự án, tôi đã sử dụng ReactJS, Sass và CSS Module để phát triển trang web động với tính tương tác cao và quản lý dễ dàng hơn. Tôi cũng tích hợp API để tải dữ liệu vào trang web.',
			description:
				'Trong dự án, tôi đã sử dụng ReactJS, Sass và CSS Module để phát triển trang web động với tính tương tác cao và quản lý dễ dàng hơn. Tôi cũng tích hợp API để tải dữ liệu vào trang web.',
		},
		{
			src: '../src/assets/images/userAvatar.jpg',
			preview: `${images.preview3}`,
			href: '',
			source: '',
			name: 'In progress...',
			tag: '',
			intro: '',
			description: '',
		},
	];

	return (
		<>
			<div className={cx('wrapper')}>
				<h1 className={cx('title-container')}>Work</h1>
				<Grid>
					{width >= 768 && width <= 1024 ? (
						<Swiper
							modules={[Navigation]}
							navigation={true}
							pagination={{ clickable: true }}
							spaceBetween={50}
							slidesPerView={1}
							className={cx('product-slider')}
						>
							<ProductMenu>
								{product.map((result, index) => (
									<SwiperSlide key={index}>
										<ProductItem props={result} />
									</SwiperSlide>
								))}
							</ProductMenu>
						</Swiper>
					) : (
						// <ProductMenu>
						// 	{product.map((result, index) => (
						// 		<ProductItem key={index} props={result} />
						// 	))}
						// </ProductMenu>
						<>
							{product.map((result, index) => (
								<ProductMenu key={index}>
									<ProductItem props={result} />
								</ProductMenu>
							))}
						</>
					)}
				</Grid>
			</div>
		</>
	);
}

export default Product;
