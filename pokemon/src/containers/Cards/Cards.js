import React, {Component} from 'react'
import Loader from '../../components/Loader'
import ErrorMsg from '../../components/ErrorMsg'
import styles from './Cards.module.scss'

class Cards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			isLoading: true,
			isError: false,
			code: window.location.search
		}
	}

	fetchData() {
		fetch(`https://api.pokemontcg.io/v1/cards${this.state.code}`)
		.then(async response => {
			const data = await response.json();
			return response.ok ?
				this.setState({cards: [...data.cards], isLoading: false}) : Promise.reject(data)
		})
		.catch(error => {
			this.setState({isError: true});
			console.error(error);
		});
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const {cards, isLoading, isError} = this.state;

		if (isError)
			return <ErrorMsg/>;

		if (isLoading)
			return <Loader/>;

		const cardsJsx = cards.map(card => (
			<img key={card.id} src={card.imageUrl} alt='' className={styles.card}/>
		) );

		return cardsJsx;

	}
}

export default Cards;
