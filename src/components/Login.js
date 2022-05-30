// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { Stage, Layer, Rect } from 'react-konva';
// import { Html } from 'react-konva-utils';

// class Login extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			email: '',
// 			password: ''
// 		};

// 		this.update = this.update.bind(this);

// 		this.displayLogin = this.displayLogin.bind(this);
// 	}

// 	update(e) {
// 		let name = e.target.name;
// 		let value = e.target.value;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	displayLogin(e) {
// 		e.preventDefault();
// 		console.log('You are logged in');
// 		console.log(this.state);
// 		this.setState({
// 			email: '',
// 			password: ''
// 		});
// 	}

	
// 		render() {
//             return (
//               <Stage width={window.innerWidth} height={window.innerHeight}>
//                 <Layer>
//                   <Html
//                     divProps={{
//                       style: {
//                         position: 'absolute',
//                         top: 10,
//                         left: 10,
//                       },
//                     }}
//                   >
//                     <input placeholder="DOM input from Konva nodes" />
//                   </Html>
//                 </Layer>
//             </Stage>
//             );
// 	}
// }

// export default Login;


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { Html } from 'react-konva-utils';

class Login extends Component {
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
            <input placeholder="Name" className="username" value={this.state.email}
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
          </Html>
          
        </Layer>
      </Stage>
    );
  }
}

export default Login;
