// const production = 'https://wessammohamed.com/';
const local = 'http://localhost:6100/';


const server = local;

export const loginUTR     = `${server}api/login`;
export const getAdminsURL = `${server}api/admin/get-admins`;
export const createAdminsURL = `${server}api/admin/create-admin`;
export const editAdminsURL = (id:string) => `${server}api/admin/update-admin/${id}`;

export const deleteAdminsURL = (id:string) => `${server}api/admin/delete-admin/${id}`;
export const getStudentsURL = `${server}api/Student/get-Students`;
export const createStudentURL = `${server}api/Student/create-Student`;
export const editStudentURL = (id:string) => `${server}api/Student/update-Student/${id}`;
export const deleteStudentURL = (id:string) => `${server}api/Student/delete-Student/${id}`;



export const getSliderItemsURL = `${server}api/slider/get-sliders`;
export const createSliderItemsURL = `${server}api/slider/add-slider`;
export const editSliderItemsURL = (id:string) => `${server}api/slider/update-slider/${id}`;
export const deleteSliderItemsURL = (id:string) => `${server}api/slider/delete-slider/${id}`;


export const getAboutURL = `${server}api/about/get-about`;
export const createAboutURL = `${server}api/about/create-about`;
export const editAboutURL = (id:string) => `${server}api/about/update-about/${id}`;
export const deleteAboutURL = (id:string) => `${server}api/about/delete-about/${id}`;

export const getStatisticsURL = `${server}api/statistics/get-statistics`;
export const createStatisticURL = `${server}api/statistics/add-statistic`;
export const editStatisticURL = (id:string) => `${server}api/statistics/update-statistic/${id}`;
export const deleteStatisticURL = (id:string) => `${server}api/statistics/delete-statistic/${id}`;



export const getGalleryImagesURL = `${server}api/gallery/get-gallery-images`;
export const createGalleryImageURL = `${server}api/gallery/add-gallery-image`;
export const editGalleryImageURL = (id:string) => `${server}api/gallery/update-gallery-image/${id}`;
export const deleteGalleryImageURL = (id:string) => `${server}api/gallery/delete-gallery-image/${id}`;


export const getProjectsURL = `${server}api/projects/get-projects`;
export const createProjectURL = `${server}api/projects/add-project`;
export const editProjectURL = (id:string) => `${server}api/projects/update-project/${id}`;
export const deleteProjectURL = (id:string) => `${server}api/projects/delete-project/${id}`;




export const getContactsURL = `${server}api/contact/get-contacts`;
export const creatContactURL = `${server}api/contact/create-contact`;
export const deleteContactURL = (id:string) => `${server}api/contact/delete-contact/${id}`;




export const getFeaturesURL = `${server}api/features/get-features`;
export const createFeatureURL = `${server}api/features/add-feature`;
export const editFeatureURL = (id:string) => `${server}api/features/update-feature/${id}`;
export const deleteFeatureURL = (id:string) => `${server}api/features/delete-feature/${id}`;






export const getPagesURL = `${server}api/pages/get-all-pages`;
export const editHighlightsURL = (id:string) => `${server}api/pages/update-highlights-page/${id}`;
export const editFeaturesURL = (id:string) => `${server}api/pages/update-Features-page/${id}`;
export const editBlogURL = (id:string) => `${server}api/pages/update-blog-page/${id}`;
export const editContactURL = (id:string) => `${server}api/pages/update-contact-page/${id}`;
export const editTestimonialURL = (id:string) => `${server}api/pages/update-Statistic-page/${id}`;


export const editInfoURL = (id:string) =>  `${server}api/info/update-info/${id}`;
export const getInfoURL =  `${server}api/info/get-info`;



// export const createFeatureURL = `${server}api/Features/create-Feature`;
// export const editFeatureURL = (id:string) => `${server}api/Features/update-Feature/${id}`;
// export const deleteFeatureURL = (id:string) => `${server}api/Features/delete-Feature/${id}`;
