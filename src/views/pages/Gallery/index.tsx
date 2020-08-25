
import React, { useState } from "react";
import * as styles from './styles.module.css';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Container,
  Row,
  Button,
  Modal,
  Collapse,
  Form,
  FormGroup,
  Input,
  Alert
} from "reactstrap";
import SimpleHeader from "../../../components/Headers/SimpleHeader";
import { useDispatch } from "react-redux";
import {  IGalleryImage } from "../../../lib";
import { useSelect } from "../../../helper";
import Loader  from 'react-loader-spinner';
import ReactNotification from 'react-notifications-component';
import { getGalleryImage, editGalleryImage, createGalleryImage, deleteGalleryImage } from "../../../React-Redux/Actions/gallery-action";

const GalleryImage: React.FC = () => {

  const [modal , setModel] = useState(false)
  const [notification_modal , setNotificationModel] = useState(false)
  const [is_editing , setEditing] = useState(false)
  const [obj , setObj] = useState<IGalleryImage>({
    _id:'',
    arabic_header:'',
    desktop_header_font_color:'',
    desktop_header_font_size:'',
    desktop_header_font_wight:'',
    english_header:'',
    mobile_header_font_color:'',
    mobile_header_font_size:'',
    mobile_header_font_wight:'',
    order: '',
  })

  const {GalleryImages,gallery_is_loading} = useSelect(state=> state.galleryImagesReducer)


  const [openedCollapsesArr , setOpenedCollapses] = useState([`collapse`])

  const collapsesToggle = (collapse:any) => {
    let openedCollapses:any = openedCollapsesArr;
    if (openedCollapses.includes(collapse)) {
      setOpenedCollapses([])
    } else {
      setOpenedCollapses([collapse])
    }
  };

  React.useEffect(() => {
    dispatch(getGalleryImage())
  } , [])
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModel(pt => !pt);
  };

  const toggleNotificationModal = () => {
    setNotificationModel(pt => !pt);
  };

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    console.log('Event' , e.target.value);
    let data = new FormData();
    data.append('arabic_header', e.target.arabic_header.value);
    data.append('desktop_header_font_color', e.target.desktop_header_font_color.value);
    data.append('desktop_header_font_size', e.target.desktop_header_font_size.value);
    data.append('desktop_header_font_wight', e.target.desktop_header_font_wight.value);
  
    data.append('english_header', e.target.english_header.value);
  
    data.append('mobile_header_font_color', e.target.mobile_header_font_color.value);
    data.append('mobile_header_font_size', e.target.mobile_header_font_size.value);
    data.append('mobile_header_font_wight', e.target.mobile_header_font_wight.value);
    data.append('order', e.target.order.value);
    data.append('gallery_img', e.target.gallery_img.files[0]);

    console.log('Obj =====>' , obj);

    if(is_editing){
      dispatch(editGalleryImage({data:data , id:obj._id === undefined? '':obj._id}));
      toggleModal();
    }else{
      dispatch(createGalleryImage(data));
      toggleModal();
    }
  }
  
    return (
      <>
        <div>
            <ReactNotification className={styles.default.notification}  />
        </div>
        <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={notification_modal}
              toggle={toggleNotificationModal}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Your attention is required
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggleNotificationModal}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <p>
                    Do you want to remove {obj.english_header} from GalleryImage ? to confirm please press delete otherwise close
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"  onClick={()=>{dispatch(deleteGalleryImage(obj._id !== undefined? obj._id: '')); toggleNotificationModal()}}>
                  Delete
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggleNotificationModal}
                >
                  Close
                </Button>
              </div>
            </Modal>
        <Modal
          className="modal-dialog-centered"
          isOpen={modal}
          toggle={() =>toggleModal()}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {obj?.arabic_header === ''? 'Create Gallery': 'Edit Gallery'}
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
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Image Order</label>
              <Input id="order" name="order" defaultValue={obj.order} placeholder="Ex: 1 ..." type="text" />
            </FormGroup>
            <Alert className="alert-default">
              <strong>Header Main Info</strong>
            </Alert>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">English Header</label>
              <Input id="english_header" name="english_header" defaultValue={obj.english_header} placeholder="English Header ..." type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Arabic Header</label>
              <Input id="arabic_header" name="arabic_header" defaultValue={obj.arabic_header} placeholder="Arabic Header ..." type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Desktop Header Font-Size</label>
              <Input id="desktop_header_font_size" name="desktop_header_font_size" defaultValue={obj.desktop_header_font_size} placeholder="Ex: 25px or 2rem" type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Desktop Header Font-Wight</label>
              <Input id="desktop_header_font_wight" name="desktop_header_font_wight" defaultValue={obj.desktop_header_font_wight} placeholder="Ex: 600" type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Desktop Header Font-Color</label>
              <Input id="desktop_header_font_color" name="desktop_header_font_color" defaultValue={obj.desktop_header_font_color} placeholder="Ex: #FFF or red or rgb(255,255,255)" type="color" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Mobile Header Font-Size</label>
              <Input id="mobile_header_font_size" name="mobile_header_font_size" defaultValue={obj.mobile_header_font_size} placeholder="Ex: 25px or 2rem" type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Mobile Header Font-Wight</label>
              <Input id="mobile_header_font_wight" name="mobile_header_font_wight" defaultValue={obj.mobile_header_font_wight} placeholder="Ex: 600" type="text" />
            </FormGroup>
            <FormGroup>
              <label className="form-control-label" htmlFor="example-text-input">Mobile Header Font-Color</label>
              <Input id="mobile_header_font_color" name="mobile_header_font_color" defaultValue={obj.mobile_header_font_color} placeholder="Ex: #FFF or red or rgb(255,255,255)" type="color" />
            </FormGroup>

            
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="gallery_img"
                name="gallery_img"
                lang="en"
                type="file"
              />
              <label className="custom-file-label" htmlFor="customFileLang">
                Select Image
              </label>
            </div>
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
          gallery_is_loading?
            <>
              <SimpleHeader name="GalleryImage" parentName="GalleryImage" />
              <Container className="mt--6" fluid>
              <Row>
                  <div className="col">
                    <Card className={styles.default.cardContainer}>
                      <CardHeader className="border-0">
                        <div style={{display:'flex' , alignItems:'center', justifyContent:'space-between'}}>
                          <h3 className="mb-0">GalleryImage table</h3>
                          
                          <Button onClick={()=>{
                            toggleModal();
                            setEditing(false);
                            setObj(
                              { _id:'',
                              arabic_header:'',
                              desktop_header_font_color:'',
                              desktop_header_font_size:'',
                              desktop_header_font_wight:'',
                              english_header:'',
                              mobile_header_font_color:'',
                              mobile_header_font_size:'',
                              mobile_header_font_wight:'',
                              order: ''
                            }
                            )
                          
                          }} className="btn-icon btn-2" color="default" type="button">
                              <span className="btn-inner--text">Create new gallery image</span>
                              <span className="btn-inner--icon">
                                <i className="ni ni-fat-add"></i>
                              </span>
                              
                          </Button>
                        </div>
                        
                      </CardHeader>

                        <div className={styles.default.cardsWrapper}>
                          {
                            GalleryImages.length > 0?
                            GalleryImages.map(item =>
                              
                              <Card className={styles.default.card}>
                              <CardImg
                                alt="..."
                                className={styles.default.img}
                                src={`http://localhost:6100/api/gallery/get-gallery-image/${item._id}/view`}
                                top 
                              />
                              <CardBody>
                                <CardTitle>
                                <div style={{display:'flex' , alignItems:'center', justifyContent:'space-between'}}>
                                  <h3 className="mb-0">Card Order : {item.order}</h3>
                                  
                                  <div style={{display:'flex'}}>
                                          <Button className="btn-icon btn-2" color="success" type="button" onClick={()=>{
                                            setObj({
                                                _id: item._id,
                                                arabic_header:item.arabic_header,
                                                desktop_header_font_color: item.desktop_header_font_color,
                                                desktop_header_font_size:item.desktop_header_font_size,
                                                desktop_header_font_wight: item.desktop_header_font_wight,
                                                english_header:item.english_header,
                                                mobile_header_font_color:item.mobile_header_font_color,
                                                mobile_header_font_size: item.mobile_header_font_size,
                                                mobile_header_font_wight: item.mobile_header_font_wight,
                                                order: item.order,

                                            })
                                            setEditing(true);
                                            toggleModal()
                                          
                                          }}>
                                            <span className="btn-inner--icon">
                                              <i className="ni ni-ungroup" />
                                            </span>
                                          </Button>
                                          <Button className="btn-icon btn-2" color="danger" type="button"
                                            onClick={()=>{
                                              toggleNotificationModal()
                                              setObj({
                                                _id: item._id,
                                                arabic_header:item.arabic_header,
                                                desktop_header_font_color: item.desktop_header_font_color,
                                                desktop_header_font_size:item.desktop_header_font_size,
                                                desktop_header_font_wight: item.desktop_header_font_wight,
                                                english_header:item.english_header,
                                                mobile_header_font_color:item.mobile_header_font_color,
                                                mobile_header_font_size: item.mobile_header_font_size,
                                                mobile_header_font_wight: item.mobile_header_font_wight,
  
                                                order: item.order,

                                            })
                                            }}
                                          >
                                            <span className="btn-inner--icon">
                                            <i className="ni ni-fat-remove"></i>
                                            </span>
                                          </Button>
                                        </div>
                                </div>
                              
                                </CardTitle>
                                <CardText>
                                <div className="accordion">
                                <Card className="card-plain">
                                    <CardHeader
                                      role="tab"
                                      onClick={() => collapsesToggle(`collapse${item._id}`)}
                                      aria-expanded={openedCollapsesArr.includes(
                                        `collapse${item._id}`
                                      )}
                                    >
                                      <h5 className="mb-0"> {item.english_header} Header</h5>
                                    </CardHeader>
                                    <Collapse
                                      role="tabpanel"
                                      isOpen={openedCollapsesArr.includes(`collapse${item._id}`)}
                                    >
                                      <CardBody>
                                          <div className={styles.default.infoWrapper}>
                                            <span>English Text: {item.english_header}</span>
                                            <span>Arabic Text: {item.arabic_header}</span>
                                            <span>Desktop Font-Size: {item.desktop_header_font_size}</span>
                                            <span>Desktop Font-Wight: {item.desktop_header_font_wight}</span>
                                            <span>Desktop Font-Color: {item.desktop_header_font_color}</span>
                                            <span>Mobile Font-Size: {item.mobile_header_font_size}</span>
                                            <span>Mobile Font-Wight: {item.mobile_header_font_wight}</span>
                                            <span>Mobile Font-Color: {item.mobile_header_font_color}</span>
                                          </div>
                                        
                                      </CardBody>
                                    </Collapse>
                                  </Card>
                          
                                </div>
  
                                
                                </CardText>
                                
                              </CardBody>
                            
                            </Card>
                            
                            )
                            :
                            <Alert className={`alert-default ${styles.default.alert}`}>
                              <strong>Attention!</strong> There are no GalleryImage to show, please Create new one from the button in the top right corner
                            </Alert>
                          }

                        </div>
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

export default GalleryImage;
