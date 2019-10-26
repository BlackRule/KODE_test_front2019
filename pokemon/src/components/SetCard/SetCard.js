import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./SetCard.module.scss"

const SetCard = (props) => (
	<Link className={styles.card} to={`/cards?setCode=${props.code}`} key={`set-${props.code}`}>
		<div className={styles.image}><img src={props.logoUrl} alt=''/></div>
		<div className={styles.info}>
			<div  className={styles.logo}>
				<img src={props.symbolUrl} alt=''/>
			</div>
			<div className={styles.info2}>
				<div>{props.name}</div>
				<div>Released {props.releaseDate}</div>
			</div>
		</div>
			<ul className={styles.types}>
				{props.standardLegal && <li>Standard Legal</li>}
				{props.expandedLegal && <li>Expanded Legal</li>}
			</ul>

	</Link>
);

export default SetCard;
