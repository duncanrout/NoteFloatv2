import React from "react";
import styled from 'styled-components';

const Box = styled.form`
  padding-top: 200px;
  padding-right: 200px;
  padding-bottom: 50px;
  padding-left: 200px;
  position: relative;
`;

const Title = styled.h1`
  padding-bottom: 50px;
`;

export const LoginPage = (props) => (

    <Box>
        <Title>Log in</Title>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </Box>
)