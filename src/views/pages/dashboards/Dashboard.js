
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index
    });
  };
  render() {
    return (
      <>
        {/* <CardsHeader name="Default" parentName="Dashboards" /> */}
        <SimpleHeader name="Admins" parentName="Admin" />
        <Container className="mt--6" fluid>
        <Row>
            <div className="col">
              <Card>
                <CardHeader className="border-0">
                  <h3 className="mb-0">Admins table</h3>
                </CardHeader>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="name" scope="col">
                        Project
                      </th>
                      <th className="sort" data-sort="budget" scope="col">
                        Budget
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Status
                      </th>
                      <th scope="col">Users</th>
                      <th className="sort" data-sort="completion" scope="col">
                        Completion
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/bootstrap.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="name mb-0 text-sm">
                              Argon Design System
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td className="budget">$2500 USD</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          <span className="status">pending</span>
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            id="tooltip160923422"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-1.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip160923422"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            id="tooltip514211229"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-2.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip514211229"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            id="tooltip726857513"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-3.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip726857513"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            id="tooltip469193676"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/team-4.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip469193676"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="completion mr-2">60%</span>
                          <div>
                            <Progress max="100" value="60" color="warning" />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            color=""
                            role="button"
                            size="sm"
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>

                  </tbody>
                </Table>

              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
