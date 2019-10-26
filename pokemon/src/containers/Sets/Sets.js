import React, { Component } from 'react'
import Loader from '../../components/Loader'
import ErrorMsg from '../../components/ErrorMsg';
import styles from "./Sets.module.scss"
import SetCard from "../../components/SetCard/SetCard";

class Sets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: [],
            isLoading: true,
            isError: false
        };
    }

    fetchData() {
        fetch('https://api.pokemontcg.io/v1/sets')
        .then(async response => {
            const data = await response.json();
            return response.ok ?
                this.setState({ sets: [...data.sets], isLoading: false }) : Promise.reject(data);
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
        const { sets, isLoading, isError } = this.state;

        if (isError)
            return <ErrorMsg/>;

        if (isLoading)
            return <Loader/>;

        const setsContainer = sets.map(set => (
            <SetCard {...set}/>
        ));

        return (
            <div className={styles.sets}>
                {setsContainer}
            </div>
         );
    }
}

export default Sets;
