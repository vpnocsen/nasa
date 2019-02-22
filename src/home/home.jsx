import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './home.scss';
import Item from '../shared/item';
import { getData } from '../shared/indexDB';
import { loadItems } from '../redux/actions';

class Home extends Component {
    componentDidMount = () => {
        if (!this.props.items || this.props.items.length === 0) {
            getData((data) => {
                console.log(data);
                this.props.reloadItems(data);
            });
        }
    }

    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <h1 className="name">NASA Collection</h1>
                    <div className="add-link">
                        <Link to='/search'>
                            <i className="fa fa-plus mr-5"></i>Add new item</Link>
                    </div>
                </div>
                <div className="collection">
                    <div className="collection-container">
                        {(!!this.props.items && this.props.items.length > 0) ? this.props.items.map((el, i) => {
                            return <Item item={el} key={i} type="edit" />;
                        }) : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reloadItems: data => dispatch(loadItems(data)),
    };
}

const mapStateToProps = state => {
    return { items: [...state.items] };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
