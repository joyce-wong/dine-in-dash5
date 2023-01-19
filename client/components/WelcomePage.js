import React, {Component} from 'react';

class WelcomePage extends Component{
    render(){
        return (
            <main>
                <div id="welcome">      
                    <h2>Welcome to My Journal.</h2>
                    <img style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', height: '100vh',}} src="assets/images/welcome.jpg" />    
                </div>
            </main>
        )
    }
}

export default WelcomePage