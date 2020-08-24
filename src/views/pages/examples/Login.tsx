
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { useFormik  } from 'formik';

// core components
import AuthHeader from "../../../components/Headers/AuthHeader";
// import { login } from "../../../React-Redux/Actions/login-action";
import { useDispatch } from "react-redux";
import { login } from "../../../React-Redux/Actions/login-action";

const Login:React.FC = (props) => {

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const dispatch = useDispatch();
    const formik = useFormik({
      initialValues: {
        password: '',
        email: '',
      },
      onSubmit: values => {
        console.log(values);
        dispatch(login({password:values.password , email:values.email}));
      },
    });
    return (
      <>
        <AuthHeader
          title="Welcome!"
          lead="Use these awesome forms to login or create new account in your project for free."
        />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
              
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small> 
                  </div>
                  <Form role="form" onSubmit={formik.handleSubmit}>
                    <FormGroup
                      className={classnames("mb-3")}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          placeholder="Email"
                          type="email"
                          // onFocus={() => this.setState({ focusedEmail: true })}
                          // onBlur={() => this.setState({ focusedEmail: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      // className={classnames({
                      //   focused: this.state.focusedPassword
                      // })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="Password"
                          type="password"
                          // onFocus={() =>
                          //   this.setState({ focusedPassword: true })
                          // }
                          // onBlur={() =>
                          //   this.setState({ focusedPassword: false })
                          // }
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="info" type="submit">
                        Sign in
                      </Button>
                    </div>
                  </Form>
              
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <small>Create new account</small>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  

}

export default Login;

