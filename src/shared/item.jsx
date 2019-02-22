import React from 'react';
import './item.scss';
import { addNewItem, likeItem, removeItem } from '../redux/actions';
import { connect } from "react-redux";
import Modal from './modal';

const VideoEl = (props) => {
    return <video controls src={props.item.source}>
    </video>
}
const ImageEl = (props) => {
    return <div className="image-item-container">
        <img src={props.item.preview} alt={props.item.title} />
    </div>
}
const FormattedDate = (props) => {
    if (!props.date) {
        return null;
    }
    const date = new Date(props.date);
    return new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(date)
}
const IMAGE = 'image';
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShownDialog: false
        }
    }
    addToList = () => {
        this.props.addItem(this.props.item)
    }
    like = () => {
        this.props.likeItem(this.props.item)
    }
    remove = () => {
        const key = this.props.item.id;
        this.props.removeItem(key);
    }

    edit = () => {
        this.setState({
            isShownDialog: true,
            mode: 'edit'
        })
    }
    add = () => {
        this.setState({
            isShownDialog: true,
            mode: 'add'
        })
    }
    hideDialog = () => {
        this.setState({
            isShownDialog: false
        })
    }
    render() {
        let actions = null;
        if (this.props.type === 'search') {
            actions = <div className="control">
                <button className="btn-add" onClick={this.add}>
                    <i className="fa fa-plus"></i>
                    <span>Add to NASA collection</span>
                </button>
            </div>
        } else {
            const isLiked = this.props.item.liked;
            actions = <div className="control">
                <div className="control-item like" onClick={this.like}>
                    {
                        !!isLiked ? <i className="fa fa-heart"></i> :
                            <i className="fa fa-heart-o"></i>
                    }
                </div>
                <div className="control-item" onClick={this.remove}>
                    <i className="fa fa-trash-o"></i>
                </div>
                <div className="control-item" onClick={this.edit}>
                    <i className="fa fa-pencil"></i>
                </div>
            </div>
        }
        return (
            <div>
                <div className="item">
                    <div>
                        {
                            this.props.item.type === IMAGE ?
                                <ImageEl item={this.props.item} />
                                : <VideoEl item={this.props.item} />
                        }
                    </div>
                    <div className="time-section">
                        <span>{this.props.item.location}</span>
                        <span className="ml-auto">
                            <FormattedDate date={this.props.item.createDate} />
                        </span>
                    </div>
                    <h2 className="title">{this.props.item.title}</h2>
                    <div className="description">
                        {this.props.item.description}
                    </div>
                    {actions}
                </div>
                {
                    this.state.isShownDialog ?
                        <Modal item={this.props.item} mode={this.state.mode} hide={this.hideDialog} />
                        : null
                }

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addNewItem(item)),
        likeItem: item => dispatch(likeItem(item)),
        removeItem: key => dispatch(removeItem(key))
    };
}

export default connect(null, mapDispatchToProps)(Item);