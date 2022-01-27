import axios from "axios";
import InputField from "components/InputField";
import React from "react";
import { login, logout } from "services/auth";
import { Api } from "utils/requests";

class Autenticarusuario extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          errors: {},
        };
      }

      getCurrentAccountState = () => ({
        email: this.state.email,
        password: this.state.password,
      });
    
    onSubmit  = async (event) => {
        
    event.preventDefault();
    
    const account = this.getCurrentAccountState();
    const senha= account.password;
    const email= account.email;
        try {
            await axios.post(`${Api}/Login`, { email, senha})
            .then((response) => {
                login (response.data);
               // localStorage.setItem("token",  response.data);
                window.location.href = '/Home';
            }).catch((error) => {
                logout();
                //localStorage.setItem("token",  null);
                window.alert("E-mail ou senha inválido, tente novamente.");
            })  
        } catch (error) {
            this.setState({
              errors: { form: "E-mail ou senha inválido, tente novamente."},
            });
          }
    };

    handleChangeFor = (fieldName) => (event) => {
        this.setState({ [fieldName]: event.target.value });
      };
    
      handleBlurFor = (fieldName) => (event) => {
        this.setState({
          errors: {
            ...this.state.errors,
          },
        });
      };

      render() {
        return ( 
        <div className="container d-flex justify-content-center">
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <h1>Login</h1>
                    
                            <InputField
                            label="E-mail: "
                            changeHandler={this.handleChangeFor('email')}
                            blurHandler={this.handleBlurFor('email')}
                            error={this.state.errors.email}
                            />
                        </div>
                        <div className="form-group">
                            <InputField
                            label="Senha: "
                            type="password"
                            changeHandler={this.handleChangeFor('password')}
                            blurHandler={this.handleBlurFor('password')}
                            error={this.state.errors.password}
                            />
                        </div>
                        
                        <br></br>
                    
                        <input type="submit"className="btn btn-primary"  value="Login" />
                        <span className="input-error">{this.state.errors.form}</span>
                    </form>
                </div>
            </div>
        </div>
        );
      }
}

export default Autenticarusuario;


