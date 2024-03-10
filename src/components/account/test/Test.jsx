import {Link} from "react-router-dom";
import heart_img from '../../../imgs/test/heart.png'
import './test.css';

export default function Test({ id, name, author, crated_at, likes, watched }) {

	return (
		<Link to={ `/test/${id}` }>
			<div className="test">
				<div className="test__name">{ name }</div>
				<div className="test__info">
					<div className="test__info__author__created_at">
						{ (crated_at == null) ? '': `${crated_at}.` }{ author }
					</div>
					<div className="test__info__nums">
						<div className="test__info__nums__likes">
							<img src={ heart_img } alt=""/>
							{ likes }
						</div>
						<div className="test__info__nums__watched">
							{ watched }
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}