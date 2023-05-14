import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { Link } from 'react-scroll';

const cx = classNames.bind(styles);

const about =
	'Tôi là Ninh, một lập trình viên web frontend.\nTôi thích tạo ra những trang web đẹp, tương tác và tối ưu hóa trải nghiệm người dùng. Ngoài ra, tôi cũng có kiến thức cơ bản về back end và có thể làm việc với ngôn ngữ, framework như Nodejs.\nKhởi điểm là một fresher nhưng tôi đã tự học và thực hành để nắm vững các nguyên tắc và kỹ thuật quan trọng. Tôi cũng tự mình phát triển một số dự án cá nhân để rèn kỹ năng và hiểu rõ hơn về quy trình phát triển.\nTôi mong muốn được làm việc trong một môi trường chuyên nghiệp, nơi tôi có thể áp dụng kiến thức của mình và học hỏi từ những người đồng nghiệp giàu kinh nghiệm.\nNgoài công việc, tôi thích khám phá các công nghệ mới và theo dõi xu hướng phát triển trong lĩnh vực này.';
const skills = [
	'Html, Css',
	'TailwindCss',
	'Javascript',
	'TypeScript',
	'ReactJs',
	'NextJs',
	'NodeJs',
	'Framer motion',
];
function Information() {
	return (
		<div className={cx('content-wrapper')}>
			<section className={cx('first-content')}>
				<h1 className={cx('text-color')}>My, Myself &I</h1>
				<p>{about}</p>
				<Link to='/contact'>
					<p className={cx('p-link')}>Hãy cùng làm một cái gì đó đặc biệt.</p>
				</Link>
			</section>
			<section className={cx('second-content')}>
				<div>
					<h1 className={cx('text-color')}>Skills</h1>
				</div>
				<div className={cx('skill-content')}>
					{skills.map((skill, i) => {
						return (
							<div key={i}>
								<p>{skill}</p>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Information;
