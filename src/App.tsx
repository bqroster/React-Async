import * as React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// Actions
import * as LoginActions from './store/login/actions';

// types
import { StoreType } from './store/reducers';
import { LoginAuth } from './_types/login';

// App Types
type AppPropsType = { username: string };
type AppDispatchType = { requestLogin: (userLoginData: LoginAuth) => {} };
type AppTypes = AppPropsType & AppDispatchType;

class App extends React.Component<AppTypes> {
  render() {

    let userLoginData: LoginAuth = {
        username: 'Super Mario Bros',
        isLogged: true,
        isToken: ''
    };

    let userAuthenticated;
    if (this.props.username === '') {
      userAuthenticated = (
          <div>
              <button className="btn btn-primary" onClick={() => this.props.requestLogin(userLoginData)}>Login</button>
          </div>
      );
    } else {
      userAuthenticated = (
          <div>
              {this.props.username}
          </div>
      );
    }

    return (
      <div className="App">
          {userAuthenticated}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreType) => {
    return {
        username: state.login.username
    };
};

const mapDispatchToProps = (dispatch: Dispatch<StoreType>) => {
    return {
        requestLogin: (userLoginData: LoginAuth) => dispatch( LoginActions.requestUserLogin( userLoginData ) )
    };
};

export default connect<AppPropsType, AppDispatchType>(mapStateToProps, mapDispatchToProps)(App);