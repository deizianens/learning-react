import React, { Component } from 'react';
import Intro from '../../components/intro'
import SeriesList from '../../components/serieslist';
import Loader from '../../components/loader'

class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }
    
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({ series: json, isFetching: false }))
    }

    render(){
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of your most loved series"/>
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} value={seriesName} />
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter a series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV Series have been found! Try again.</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <seriesList list={this.state.series}/>
                }
                <SeriesList list={this.state.series}/>
            </div>
        )
    }
}

export default Series;