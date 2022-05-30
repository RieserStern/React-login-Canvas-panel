import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { Html } from 'react-konva-utils';

export default class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} x={600} y={100}>
        <Layer>
          <Html
            divProps={{
              style: {
                position: 'absolute',
                top: 10,
                left: 10,
              },
            }}
          >
            <input placeholder="Email"  value={this.state.email}
							onChange={this.update}
							name="email"/>
            <br />
            <input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
            <br />
            <input type="submit" value="Login" />
            <br />
            {/* <Link to="/register">Add a new Account</Link> */}
            Create a new Account?
            <br />
            <input placeholder="Name"/>
            <br />
            <input placeholder="email" />
            <br />
            <input placeholder="password" type="password" />
            <br />
            <input placeholder="confirm-password" type="password" />
            <br />
            <button>Register</button>
          </Html>
          
        </Layer>
      </Stage>
      
    );
  }
}


// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Route exact path="/" component={Login} />
//         <Route path="/register" component={Register} />
//       </div>
//     );
//   }
// }

// export default App;
