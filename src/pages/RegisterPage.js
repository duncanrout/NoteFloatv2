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

export const RegisterPage = (props) => (

        <Box>
                <Title>Register</Title>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Let's Go!</button>
            
        </Box>
    )

