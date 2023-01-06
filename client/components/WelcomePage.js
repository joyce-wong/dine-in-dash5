import React, {Component} from 'react';

class WelcomePage extends Component{
    render(){
        return (
            <main>
                <div id="welcome">      
                    <h2>Welcome to My Journal.</h2>
                    <img style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', height: '100vh',}} src="https://ww2.kqed.org/app/uploads/sites/23/2018/01/iStock-911463836-1920x1080.jpg" />    
                </div>
            </main>
        )
    }
}

export default WelcomePage