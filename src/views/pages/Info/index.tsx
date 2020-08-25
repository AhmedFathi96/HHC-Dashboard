
import React, { useState } from "react";
import * as styles from './styles.module.css';
// reactstrap components
import {
  Card,
  CardHeader,

  Table,
  Container,
  Row,
  Button,
  Modal,
  Form,
  FormGroup,
  Input,
  Col,
  CardBody,
  CardTitle,
  Alert
} from "reactstrap";
import SimpleHeader from "../../../components/Headers/SimpleHeader";
import { useDispatch } from "react-redux";
import { IInfo } from "../../../lib";
import { getInfo, editInfo } from "../../../React-Redux/Actions/info-action";
import { useSelect } from "../../../helper";
import Loader  from 'react-loader-spinner';
import ReactNotification from 'react-notifications-component';

const Info: React.FC = () => {

  const [modal , setModel] = useState(false)
  const [notification_modal , setNotificationModel] = useState(false)
  const [massage_modal , setMessageModel] = useState(false)

  const [is_editing , setEditing] = useState(false)
  const [obj , setObj] = useState<IInfo>({
    _id: '',
    about_header:'',
    address:'',
    footer_copyrights:'',
    contact_header:'',
    email:'',
    facebook_url:'',
    features_header:'',
    gallery_header:'',
    instagram_url:"",
    map_url:'',
    phone:'',
    projects_header:"",
    statistics_header:'',
    twitter_url:'',
    whatsapp_number:'',
    youtube_url:'',
    submitting_message:''
    
  })

  const {Info,info_is_loading} = useSelect(state=> state.infoReducer)

  React.useEffect(() => {
    dispatch(getInfo())
  } , [])
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModel(pt => !pt);
  };

  const handleSubmit = (e:any) =>{

    e.preventDefault();
    const data = {
      about_header:e.target.about_header.value ,
      address:e.target.address.value ,
      footer_copyrights:e.target.footer_copyrights.value ,
      contact_header:e.target.contact_header.value ,
      email:e.target.email.value ,
      facebook_url:e.target.facebook_url.value ,
      features_header:e.target.features_header.value ,
      gallery_header:e.target.gallery_header.value ,
      instagram_url:e.target.instagram_url.value ,
      map_url:e.target.map_url.value ,
      phone:e.target.phone.value ,
      projects_header:e.target.projects_header.value ,
      statistics_header:e.target.statistics_header.value ,
      twitter_url:e.target.twitter_url.value ,
      whatsapp_number:e.target.whatsapp_number.value ,
      youtube_url:e.target.youtube_url.value ,
      submitting_message:e.target.submitting_message.value 
  }
    dispatch(editInfo({data:data , id:obj._id}));
    toggleModal();
    
  }
  
    return (
      <>
        <div>
            <ReactNotification className={styles.default.notification}  />
        </div>

        <Modal
          className="modal-dialog-centered"
          isOpen={modal}
          toggle={() =>toggleModal()}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {obj.about_header === ''? 'Create Contact': 'Edit Contact'}
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={toggleModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
          <Form role="form"onSubmit={(event) => handleSubmit(event)}>
            <Row className="mb-4">
              <Col lg="4">
                <Alert className="alert-default">
                SOCIAL MEDIA LINKS
                </Alert>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Facebook url</label>
                  <Input id="facebook_url" name="facebook_url" defaultValue={obj.facebook_url} placeholder="URL is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Twitter url</label>
                  <Input id="twitter_url" name="twitter_url" defaultValue={obj.twitter_url} placeholder="URL is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Youtube url</label>
                  <Input id="youtube_url" name="youtube_url" defaultValue={obj.youtube_url} placeholder="URL is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Instagram url</label>
                  <Input id="instagram_url" name="instagram_url" defaultValue={obj.instagram_url} placeholder="URL is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Whatsapp Number</label>
                  <Input id="whatsapp_number" name="whatsapp_number" defaultValue={obj.whatsapp_number} placeholder="Whatsapp Number is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Google Maps URL</label>
                  <Input id="map_url" name="map_url" defaultValue={obj.map_url} placeholder="Whatsapp Number is  ..." type="text" />
                </FormGroup>
              </Col>

              <Col lg="4">
                <Alert className="alert-default">
                  CONTACTS INFO
                </Alert>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Address</label>
                  <Input id="address" name="address" defaultValue={obj.address} placeholder="Address  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Phone</label>
                  <Input id="phone" name="phone" defaultValue={obj.phone} placeholder="phone  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Email</label>
                  <Input id="email" name="email" defaultValue={obj.email} placeholder="Email is  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Footer Copyrights</label>
                  <Input id="footer_copyrights" name="footer_copyrights" defaultValue={obj.footer_copyrights} placeholder="Footer Copyrights  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Contacts submitting message</label>
                  <Input id="submitting_message" name="submitting_message" defaultValue={obj.submitting_message} placeholder="Whatsapp Number is  ..." type="text" />
                </FormGroup>
              </Col>

              <Col lg="4">
                <Alert className="alert-default">
                WEBSITE HEADERS
                </Alert>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >About Header</label>
                  <Input id="about_header" name="about_header" defaultValue={obj.about_header} placeholder="About Header  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Gallery Header</label>
                  <Input id="gallery_header" name="gallery_header" defaultValue={obj.gallery_header} placeholder="Gallery Header  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Features Header</label>
                  <Input id="features_header" name="features_header" defaultValue={obj.features_header} placeholder="Features Header  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Contacts Header</label>
                  <Input id="contact_header" name="contact_header" defaultValue={obj.contact_header} placeholder="Contacts Header  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Projects Header</label>
                  <Input id="projects_header" name="projects_header" defaultValue={obj.projects_header} placeholder="Projects Header  ..." type="text" />
                </FormGroup>
                <FormGroup>
                  <label className="form-control-label"htmlFor="example-text-input" >Statistics Header</label>
                  <Input id="statistics_header" name="statistics_header" defaultValue={obj.statistics_header} placeholder="Statistics Header  ..." type="text" />
                </FormGroup>
              </Col>
            </Row>
          
            
  
            <div className="modal-footer">
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={toggleModal}
              >
                Close
              </Button>
              <Button color="primary" type="submit">
                Save changes
              </Button>
            </div>        
          </Form>
              

          </div>
  
        </Modal>
      
        {
          info_is_loading?
            <>
              <SimpleHeader name="Info" parentName="Contact" />
              <Container className="mt--6" fluid>
              <Row>
                  <div className="col">
                    <Card>
                      <CardHeader className="border-0">
                        <div style={{display:'flex' , alignItems:'center', justifyContent:'space-between'}}>
                          <h3 className="mb-0">Info table</h3>
                          
                          <Button onClick={()=>{
                            toggleModal();
                            setEditing(true);
                            setObj({
                              _id: Info._id,
                              about_header: Info.about_header,
                              address:Info.address,
                              footer_copyrights:Info.footer_copyrights,
                              contact_header:Info.contact_header,
                              email:Info.email,
                              facebook_url:Info.facebook_url,
                              features_header:Info.features_header,
                              gallery_header:Info.gallery_header,
                              instagram_url:Info.instagram_url,
                              map_url:Info.map_url,
                              phone:Info.phone,
                              projects_header:Info.projects_header,
                              statistics_header:Info.statistics_header,
                              twitter_url:Info.twitter_url,
                              whatsapp_number:Info.whatsapp_number,
                              youtube_url:Info.youtube_url,
                              submitting_message:Info.submitting_message
                          })  
                          
                          }} className="btn-icon btn-2" color="default" type="button">
                              <span className="btn-inner--text">Edit Website Info</span>
                              <span className="btn-inner--icon">
                                <i className="ni ni-fat-add"></i>
                              </span>
                              
                          </Button>
                        </div>
                        
                      </CardHeader>

                      <Table className="align-items-center table-flush" responsive>
                      
                        {
                          info_is_loading?
                          <Row className="mb-4">
                          <Col lg="4">
                            <Card className="card-stats">
                
                              <CardBody>
                                <Row>
                                  <div className="col">
                                    <CardTitle className="text-uppercase text-muted mb-0">
                                      Social Media Links
                                    </CardTitle>
                                  </div>
                                  <Col className="col-auto">
                                    <div className="icon icon-shape bg-red text-white rounded-circle shadow">
                                      <i className="ni ni-active-40" />
                                    
                                    </div>
                                  </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    <i className="fab fa-facebook-f" style={{padding:'0.2rem'}}></i>
                                    FaceBook
                                  </span>
                                  <span className="text-nowrap">URL : {Info.facebook_url}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                  <i className="fab fa-twitter" style={{padding:'0.2rem'}}></i>
                                    Twitter
                                  </span>
                                  <span className="text-nowrap">URL : {Info.twitter_url}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                  <i className="fab fa-youtube" style={{padding:'0.2rem'}}></i>
                                    Youtube
                                  </span>
                                  <span className="text-nowrap">URL : {Info.youtube_url}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                  <i className="fab fa-instagram" style={{padding:'0.2rem'}}></i>
                                    Instagram
                                  </span>
                                  <span className="text-nowrap">URL : {Info.instagram_url}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    <i className="fab fa-whatsapp" style={{padding:'0.2rem'}}></i>
                                    Whatsapp
                                  </span>
                                  <span className="text-nowrap">URL : {Info.whatsapp_number}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    <i className="fa fa-map-marker" style={{padding:'0.2rem'}}></i>
                                    Google Maps
                                  </span>
                                  <span className="text-nowrap">URL : {Info.map_url}</span>
                                </p>

                                
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="5">
                            <Card className="card-stats">
                
                              <CardBody>
                                <Row>
                                  <div className="col">
                                    <CardTitle className="text-uppercase text-muted mb-0">
                                      Contacts Info
                                    </CardTitle>
                                  </div>
                                  <Col className="col-auto">
                                    <div className="icon icon-shape bg-orange text-white rounded-circle shadow">
                                      <i className="ni ni-chart-pie-35" />
                                    </div>
                                  </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Address
                                  </span>
                                  <span className="text-nowrap">{Info.address}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Phone
                                  </span>
                                  <span className="text-nowrap">{Info.phone}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Email
                                  </span>
                                  <span className="text-nowrap">{Info.email}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Copyrights
                                  </span>
                                  <span className="text-nowrap">{Info.footer_copyrights}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Submitting Message
                                  </span>
                                  <span className="text-nowrap">{Info.submitting_message}</span>
                                </p>
                              </CardBody>
                            </Card>
                          </Col>
                          <Col lg="3">
                            <Card className="card-stats">
                
                              <CardBody>
                                <Row>
                                  <div className="col">
                                    <CardTitle className="text-uppercase text-muted mb-0">
                                      Website Headers
                                    </CardTitle>
                                  </div>
                                  <Col className="col-auto">
                                    <div className="icon icon-shape bg-dark text-dark rounded-circle shadow">
                                      <i className="ni ni-atom" style={{color: '#fff'}} />
                                    </div>
                                  </Col>
                                </Row>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    About Header
                                  </span>
                                  <span className="text-nowrap">{Info.about_header}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Gallery Header
                                  </span>
                                  <span className="text-nowrap">{Info.gallery_header}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Features Header
                                  </span>
                                  <span className="text-nowrap">{Info.features_header}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Contact Header
                                  </span>
                                  <span className="text-nowrap">{Info.contact_header}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Statistics Header
                                  </span>
                                  <span className="text-nowrap">{Info.statistics_header}</span>
                                </p>
                                <p className="mt-3 mb-0 text-sm">
                                  <span className="text-danger mr-2">
                                    Projects Header
                                  </span>
                                  <span className="text-nowrap">{Info.projects_header}</span>
                                </p>
                              </CardBody>
                            </Card>
                          </Col>
                      
                        </Row>
                        :
                        ''

                        }
                    
                      </Table>

                    </Card>
                  </div>
                </Row>
              </Container>
            </>
          :
            <div style={{margin: '25% 40%'}}>
              <Loader
                  type="Puff"
                  color="#B09E80"
                  height={150}
                  width={150}
              />
            </div>
        }
        
      </>
    );
  
}

export default Info;
