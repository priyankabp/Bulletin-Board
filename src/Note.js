import React, { Component } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import * as FontAwesome from 'react-icons/fa'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }
    edit() {
        this.setState({
            editing: true
        })
    }

    remove() {
        alert('removing note');
    }

    save(e) {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            editing: false
        })
    }

    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} />
                    <button id="save"><FaSave /></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
        // if (this.state.editing) {
        //     return this.renderForm();
        // }
        // else {
        //     return this.renderDisplay();
        // }
    }
}

export default Note