import React from 'react';
import './modal.scss';
import { addNewItem, editItem } from '../redux/actions';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Modal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: this.props.item.title,
            description: this.props.item.description,
            type: this.props.item.type,
            source: this.props.item.source,
            preview: this.props.item.preview
        }
    }

    titleChage = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    descriptionChage = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    typeChage = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    sourceChage = (event) => {
        this.setState({
            source: event.target.value
        })
    }
    previewChage = (event) => {
        this.setState({
            preview: event.target.value
        })
    }
    handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        const newObject = Object.assign(this.props.item, this.state);
        if (this.props.mode === 'add') {
            this.props.addItem(newObject);
            this.close();
            this.props.history.push('/');
        } else {
            this.props.editItem(newObject)
            this.close();
        }
    }

    close = () => {
        this.props.hide();
    }

    render() {
        return (
            <div id="dialog">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal">
                            <div className="modal-header">
                                <span>
                                    {
                                        this.props.mode === 'edit' ?
                                            'Edit'
                                            : 'Add'
                                    }
                                </span>
                                <i className="fa fa-times" onClick={this.close}></i>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" value={this.state.title} onChange={this.titleChage} />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea value={this.state.description} onChange={this.descriptionChage}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select value={this.state.type} onChange={this.typeChage} >
                                        <option value="image">Image</option>
                                        <option value="video">Video</option>
                                        <option value="audio">Audio</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Link preview image url</label>
                                    <input type="text" value={this.state.preview} onChange={this.previewChage} />
                                </div>
                                <div className="form-group">
                                    <label>Link file image url</label>
                                    <input type="text" value={this.state.source} onChange={this.sourceChage} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                {
                                    this.props.mode === 'edit' ?
                                        <input type="submit" value="Save" />
                                        : <input type="submit" value="Add to Collection" />
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addNewItem(item)),
        editItem: item => dispatch(editItem(item))
    };
}

export default withRouter(
    connect(null, mapDispatchToProps)(Modal)
)