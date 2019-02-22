import React from 'react';
import { Link } from 'react-router-dom';
import './search.scss';
import Item from '../shared/item';

const ResultTitle = (props) => {
    return <h4 className="result-title"><strong>{props.found}</strong> Results for searching <strong>{props.searchStr}</strong></h4>
}

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: '',
            isLoading: false,
            found: null,
            searchKey: '',
            items: null
        };
    }

    handleChange = (event) => {
        this.setState({ searchKey: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchKey) {
            this.search(this.state.searchKey)
        }
    }

    search = (searchKey) => {
        if (!searchKey) {
            return;
        }
        this.setState({
            isLoading: true,
            items: null
        })
        // const url = "https://images-api.nasa.gov/search?q=" + searchStr + "&media_type=video";
        const url = "https://images-api.nasa.gov/search?q=" + searchKey;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    if (!!result && !!result.collection) {
                        let items = [];
                        if (result.collection.items) {
                            items = result.collection.items.map(item => {
                                const id = item.data[0].nasa_id;
                                const type = item.data[0].media_type;
                                const title = item.data[0].title;
                                const description = item.data[0].description;
                                const createDate = item.data[0].date_created;
                                const location = item.data[0].location;
                                let source;
                                if (type === 'video') {
                                    source = 'https://images-assets.nasa.gov/video/' + id + '/' + id + '~preview.mp4';
                                } else if(type === 'image'){
                                    source = 'https://images-assets.nasa.gov/image/' + id + '/' + id + '~orig.jpg';
                                } else if(type === 'audio'){
                                    source = 'https://images-assets.nasa.gov/audio/' + id + '/' + id + '~orig.mp3';
                                }
                                // audio type, there is no links
                                let preview;
                                if (!!item.links) {
                                    preview = item.links[0].href;
                                }
                                return {
                                    id, type, title, description, createDate, location, preview, source
                                }
                            })
                        }
                        this.setState({
                            isLoading: false,
                            items,
                            found: result.collection.metadata.total_hits,
                            searchStr: searchKey
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        items: [],
                        found: null,
                        searchStr: ''
                    });
                }
            )
    }
    render() {
        return (
            <div className="search-page">
                <div className="back-section">
                    <Link to='/'>
                        <i className="fa fa-angle-left mr-5"></i>
                        <span>Back to Collection</span>
                    </Link>
                </div>
                <h2 className="search-title">Search from Nasa</h2>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type something..." disabled={this.state.isLoading}
                        className="form-control" value={this.state.searchKey} onChange={this.handleChange}></input>
                    <input type="submit" value="Search" disabled={this.state.isLoading} />
                </form>
                <div className="search-result">
                    {this.state.found !== null ? <ResultTitle found={this.state.found} searchStr={this.state.searchStr} /> : null}
                    <div className="search-result-container">
                        {(!!this.state.items && this.state.items.length > 0) ? this.state.items.map((el, i) => {
                            return <Item item={el} key={i} type="search" />;
                        }) : null}
                        {
                            this.state.isLoading ?
                                <div className="overlay">
                                    <i className="fa fa-spin fa-spinner"></i>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
