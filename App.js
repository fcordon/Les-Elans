import React, { Component } from 'react';import NavBar from './components/NavBar';export default class App extends Component {    render() {        return (            <div className="container-fluid">                <div className="row">                    <div className="col-xs-12">                        <NavBar />                    </div>                </div>                {this.props.children}            </div>        );    }}