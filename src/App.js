import React from 'react';
import { Cards, Charts, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';
import NavBar from './Components/Navbar.js';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fatchedData = await fetchData();

        this.setState({ data: fatchedData });
    }
    handleCountryChange = async (country) => {
        const fatchedData = await fetchData(country);

        this.setState({ data: fatchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container} >
            <NavBar/>
               
                <br />
                <br />
                <Cards data={data} />
                <br />
                <br />

                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>

            </div>
        );
    }
}

export default App;