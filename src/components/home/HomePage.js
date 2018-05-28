import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className = "jumbotron">
                <h1>Admin Page</h1>
                <p>React redux ann router for web apps.</p>
                <Link to = "about" className = "btn btn-primary btn-lg"> More...</Link>   
            </div >
        );
    }
}

export default HomePage;
