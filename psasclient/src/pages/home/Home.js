import React, { Component } from 'react';

// import "./home.css";


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    getValues = () => {

    };

    render() {
        return (
            <div>
                <Content />
            </div>
        );
    }
}



const Content = () => {
    return (

        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto">
                        <div className="card border-none">
                            <div className="card-body">
                                <div className="mt-2 text-center">
                                    <h2>Create Your Account</h2>
                                </div>
                                <p className="mt-4 text-white lead text-center">
                                    Sign up to get started with Prep Shop & Save!
                                </p>
                                <div className="mt-4">
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" value="" placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" value="" placeholder="Enter password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="confirm-password" value="" placeholder="Confirm password" />
                                        </div>
                                        <button type="submit" className="btn btn-warning btn-block">Create Account</button>
                                    </form>
                                    <div className="clearfix"></div>
                                    <p className="content-divider center mt-4">
                                        <span>or</span>
                                    </p>
                                </div>

                                <p className="text-center">
                                    Already have an account?
                                    <a href="index.html">Login Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-sm-12 mt-5 footer">
                        <p className="text-white small text-center">
                            &copy; 2018 Prep Shop & Save &nbsp &nbsp | &nbsp &nbsp
                            <a href="team.html"> Meet the Team </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;