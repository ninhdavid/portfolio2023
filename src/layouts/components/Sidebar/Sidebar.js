import { Link } from 'react-scroll';
import classNames from 'classnames/bind';
import config from '~/config';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import NavMobile from '../NavMobile';
import SocialIcon from '../SocialIcon/SocialIcon';
import { useWindowSize } from '~/hooks';
// import images from '~/assets/images';

const cx = classNames.bind(styles);
function Sidebar() {
	const { width } = useWindowSize();
	return (
		<>
			{width >= 768 ? (
				<nav className={cx('wrapper')}>
					<Link
						duration={1000}
						smooth={true}
						spy={true}
						activeClass="active"
						className={cx('logo')}
						to={config.routes.home}
					>
						{/* img link font not work */}
						{/* <img src={images.logo} alt="logo" /> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={140}
							height={170}
							viewBox="0 0 140 170"
						>
							<path id="Path_1" data-name="Path 1" d="M0,0H140V170H0Z" />
							<g
								id="Group_1"
								data-name="Group 1"
								transform="translate(-353 -153)"
							>
								<text
									id="N"
									transform="translate(388 262)"
									fill="#db3980"
									stroke="#db3980"
									strokeWidth={1}
									fontSize={103}
									fontFamily="Roboto-Regular, Roboto"
								>
									<tspan x={0} y={0}>
										{'N'}
									</tspan>
								</text>
								<text
									id="N-2"
									data-name="N"
									transform="translate(386 258)"
									fill="#08fdd8"
									stroke="#08fdd8"
									strokeWidth={1}
									fontSize={103}
									fontFamily="Roboto-Regular, Roboto"
								>
									<tspan x={0} y={0}>
										{'N'}
									</tspan>
								</text>
								<text
									id="N-3"
									data-name="N"
									transform="translate(387 260)"
									fill="#f6f6f6"
									stroke="#fff"
									strokeWidth={1}
									fontSize={103}
									fontFamily="Roboto-Regular, Roboto"
								>
									<tspan x={0} y={0}>
										{'N'}
									</tspan>
								</text>
							</g>
							<path
								id="Path_2"
								data-name="Path 2"
								d="M3.066-2.914l.178,1.219.26-1.1L5.332-9.242H6.36L8.144-2.793,8.4-1.676l.2-1.244,1.435-6.322h1.225L9.014,0H7.9L6-6.735l-.146-.7-.146.7L3.732,0H2.622L.387-9.242H1.606ZM15.076.127A3,3,0,0,1,12.8-.79a3.4,3.4,0,0,1-.876-2.453v-.216a4.121,4.121,0,0,1,.39-1.825,3.045,3.045,0,0,1,1.092-1.257A2.745,2.745,0,0,1,14.93-7a2.572,2.572,0,0,1,2.082.882,3.82,3.82,0,0,1,.743,2.526V-3.1H13.1A2.441,2.441,0,0,0,13.7-1.457a1.866,1.866,0,0,0,1.444.625,2.045,2.045,0,0,0,1.054-.254,2.648,2.648,0,0,0,.755-.673l.717.559A2.884,2.884,0,0,1,15.076.127ZM14.93-6.03a1.566,1.566,0,0,0-1.193.517,2.515,2.515,0,0,0-.6,1.45h3.44v-.089A2.237,2.237,0,0,0,16.1-5.538,1.475,1.475,0,0,0,14.93-6.03Zm10,2.672A4.084,4.084,0,0,1,24.2-.828a2.312,2.312,0,0,1-1.942.955,2.394,2.394,0,0,1-2.012-.92L20.192,0H19.113V-9.75h1.174v3.637A2.381,2.381,0,0,1,22.249-7a2.326,2.326,0,0,1,1.965.946,4.206,4.206,0,0,1,.714,2.59Zm-1.174-.133a3.173,3.173,0,0,0-.463-1.854A1.534,1.534,0,0,0,21.957-6a1.724,1.724,0,0,0-1.669,1.079v2.971A1.772,1.772,0,0,0,21.969-.87a1.526,1.526,0,0,0,1.314-.654A3.375,3.375,0,0,0,23.753-3.491ZM29.809,0V-9.242h2.609a4.2,4.2,0,0,1,2.133.533,3.606,3.606,0,0,1,1.431,1.517,4.938,4.938,0,0,1,.511,2.26v.59a4.955,4.955,0,0,1-.5,2.292A3.55,3.55,0,0,1,34.547-.54a4.467,4.467,0,0,1-2.18.54Zm1.219-8.246V-1H32.31A2.79,2.79,0,0,0,34.5-1.873a3.622,3.622,0,0,0,.784-2.5v-.54a3.68,3.68,0,0,0-.74-2.449,2.632,2.632,0,0,0-2.1-.886ZM41,.127A3,3,0,0,1,38.727-.79a3.4,3.4,0,0,1-.876-2.453v-.216a4.121,4.121,0,0,1,.39-1.825,3.045,3.045,0,0,1,1.092-1.257A2.745,2.745,0,0,1,40.854-7a2.572,2.572,0,0,1,2.082.882,3.82,3.82,0,0,1,.743,2.526V-3.1H39.025a2.441,2.441,0,0,0,.594,1.641,1.866,1.866,0,0,0,1.444.625,2.045,2.045,0,0,0,1.054-.254,2.648,2.648,0,0,0,.755-.673l.717.559A2.884,2.884,0,0,1,41,.127ZM40.854-6.03a1.566,1.566,0,0,0-1.193.517,2.515,2.515,0,0,0-.6,1.45H42.5v-.089a2.237,2.237,0,0,0-.482-1.387A1.475,1.475,0,0,0,40.854-6.03ZM47.22-1.593l1.7-5.275h1.2L47.658,0h-.9L44.275-6.868h1.2Zm6.8,1.72A3,3,0,0,1,51.746-.79a3.4,3.4,0,0,1-.876-2.453v-.216a4.121,4.121,0,0,1,.39-1.825,3.045,3.045,0,0,1,1.092-1.257A2.745,2.745,0,0,1,53.873-7a2.572,2.572,0,0,1,2.082.882A3.82,3.82,0,0,1,56.7-3.586V-3.1H52.044a2.441,2.441,0,0,0,.594,1.641,1.866,1.866,0,0,0,1.444.625,2.045,2.045,0,0,0,1.054-.254,2.648,2.648,0,0,0,.755-.673l.717.559A2.884,2.884,0,0,1,54.019.127ZM53.873-6.03a1.566,1.566,0,0,0-1.193.517,2.515,2.515,0,0,0-.6,1.45h3.44v-.089a2.237,2.237,0,0,0-.482-1.387A1.475,1.475,0,0,0,53.873-6.03ZM59.332,0H58.157V-9.75h1.174ZM60.9-3.5a4.057,4.057,0,0,1,.4-1.815,2.96,2.96,0,0,1,1.1-1.244A3.007,3.007,0,0,1,64.016-7a2.9,2.9,0,0,1,2.269.971,3.736,3.736,0,0,1,.866,2.583v.083a4.092,4.092,0,0,1-.384,1.8,2.916,2.916,0,0,1-1.1,1.241,3.041,3.041,0,0,1-1.641.444,2.889,2.889,0,0,1-2.263-.971A3.718,3.718,0,0,1,60.9-3.415Zm1.181.14a2.938,2.938,0,0,0,.53,1.834,1.7,1.7,0,0,0,1.419.692,1.686,1.686,0,0,0,1.422-.7A3.213,3.213,0,0,0,65.978-3.5a2.933,2.933,0,0,0-.536-1.831,1.705,1.705,0,0,0-1.425-.7,1.686,1.686,0,0,0-1.4.692A3.189,3.189,0,0,0,62.08-3.358Zm12.346,0a4.113,4.113,0,0,1-.717,2.526,2.3,2.3,0,0,1-1.942.958A2.519,2.519,0,0,1,69.8-.667V2.641H68.625V-6.868H69.7l.057.762A2.419,2.419,0,0,1,71.748-7a2.342,2.342,0,0,1,1.958.933,4.157,4.157,0,0,1,.72,2.6Zm-1.174-.133a3.035,3.035,0,0,0-.5-1.834A1.6,1.6,0,0,0,71.4-6a1.726,1.726,0,0,0-1.6.946v3.282a1.73,1.73,0,0,0,1.612.939,1.587,1.587,0,0,0,1.343-.67A3.313,3.313,0,0,0,73.252-3.491ZM78.768.127A3,3,0,0,1,76.5-.79a3.4,3.4,0,0,1-.876-2.453v-.216a4.121,4.121,0,0,1,.39-1.825A3.045,3.045,0,0,1,77.1-6.541,2.745,2.745,0,0,1,78.622-7a2.572,2.572,0,0,1,2.082.882,3.82,3.82,0,0,1,.743,2.526V-3.1H76.794a2.441,2.441,0,0,0,.594,1.641,1.866,1.866,0,0,0,1.444.625,2.045,2.045,0,0,0,1.054-.254,2.648,2.648,0,0,0,.755-.673l.717.559A2.884,2.884,0,0,1,78.768.127ZM78.622-6.03a1.566,1.566,0,0,0-1.193.517,2.515,2.515,0,0,0-.6,1.45h3.44v-.089a2.237,2.237,0,0,0-.482-1.387A1.475,1.475,0,0,0,78.622-6.03Zm7.5.216a3.519,3.519,0,0,0-.578-.044,1.547,1.547,0,0,0-1.568.984V0H82.805V-6.868h1.143l.019.793A1.829,1.829,0,0,1,85.6-7a1.2,1.2,0,0,1,.521.089Z"
								transform="translate(27 145)"
								fill="#e2e2e2"
							/>
						</svg>
					</Link>
					<section className={cx('nav-side')}>
						<Menu>
							<MenuItem
								activeClass="active"
								title="Home"
								offset={0}
								to={config.routes.home}
							/>

							<MenuItem
								activeClass="active"
								title="About"
								to={config.routes.about}
							/>
							<MenuItem
								activeClass="active"
								title="Work"
								to={config.routes.work}
							/>
							<MenuItem
								activeClass="active"
								title="Contact"
								to={config.routes.contact}
							/>
							{/* <MenuItem title="Footer" to={config.routes.footer} /> */}
						</Menu>
						<SocialIcon />
					</section>
				</nav>
			) : (
				<nav className={cx('nav-mobile')}>
					<NavMobile />
				</nav>
			)}
		</>
	);
}

export default Sidebar;
