export interface IAdminUser{
    _id?:string;
    name:string;
    email:string;
    phone:string;
    password:string;
    role:string;
}


export interface IStudent{
    _id:string;
    name:string;
    email:string;
    parent_name:string;
    grade:string;
    student_phone:string;
    parent_phone:string;
    address:string;
    course:string;
    status:string;
}

export interface ISliderItem{
    _id:string;
    slider_img?:File;
    english_header: string;
    arabic_header: string;
    desktop_header_font_size: string;
    desktop_header_font_wight: string;
    desktop_header_font_color: string;
    mobile_header_font_size: string;
    mobile_header_font_wight: string;
    mobile_header_font_color: string;
    english_sub_header:string;
    arabic_sub_header: string;
    desktop_sub_header_font_size: string;
    desktop_sub_header_font_wight: string;
    desktop_sub_header_font_color: string;
    mobile_sub_header_font_size: string;
    mobile_sub_header_font_wight: string;
    mobile_sub_header_font_color: string;
    order:string;
}


export interface IProject{
    _id:string;
    project_image?:File;
    english_header: string;
    arabic_header: string;
    desktop_header_font_size: string;
    desktop_header_font_wight: string;
    desktop_header_font_color: string;
    mobile_header_font_size: string;
    mobile_header_font_wight: string;
    mobile_header_font_color: string;
    english_sub_header:string;
    arabic_sub_header: string;
    desktop_sub_header_font_size: string;
    desktop_sub_header_font_wight: string;
    desktop_sub_header_font_color: string;
    mobile_sub_header_font_size: string;
    mobile_sub_header_font_wight: string;
    mobile_sub_header_font_color: string;
    order:string;
}

export interface IAboutSection{
    _id:string;
    about_img:File;
    header:string;
    content:string;
    order:number;
}


export interface ITestimonialSection{
    _id:string;
    testimonial_img:File;
    content:string;
    author:string;
    about_author:string;
    order:string;
}


export interface IGalleryImage{
    _id:string;
    gallery_img?:File;
    english_header: string;
    arabic_header: string;
    desktop_header_font_size: string;
    desktop_header_font_wight: string;
    desktop_header_font_color: string;
    mobile_header_font_size: string;
    mobile_header_font_wight: string;
    mobile_header_font_color: string;
    order:string;
}

export interface IBlogPost{
    _id:string;
    blog_cover_img:string;
    blog_post_img:string;
    post_content:string;
    header:string;
    content_body:string;
    createdAt?:string;
}

export interface IContactMessage{
    _id?:string;
    name:string;
    email:string;
    phone:string;
    message:string;
    createdAt?:string;
}

export interface IFeature{
    _id?:string;
    feature_img?:File;
    english_header: string;
    arabic_header: string;
    desktop_header_font_size: string;
    desktop_header_font_wight: string;
    desktop_header_font_color: string;
    mobile_header_font_size: string;
    mobile_header_font_wight: string;
    mobile_header_font_color: string;
    english_sub_header:string;
    arabic_sub_header: string;
    desktop_sub_header_font_size: string;
    desktop_sub_header_font_wight: string;
    desktop_sub_header_font_color: string;
    mobile_sub_header_font_size: string;
    mobile_sub_header_font_wight: string;
    mobile_sub_header_font_color: string;
    order:string
}

export interface IGenericHeader{
    header_image:string;
    header:string;
    text:string;
}

export interface IPageHeaders{
    _id:string;
    highlights_header:string;
    highlights_text:string;
    courses_header:string;
    courses_text:string;
    blog_header:string;
    blog_text:string;
    contact_header:string;
    contact_text:string;
    testimonial_header:string;
    testimonial_text:string;
}

export interface IInfo{
    _id:string;
    about_header:string;
    gallery_header:string;
    projects_header:string;
    features_header:string;
    statistics_header:string;
    contact_header:string;
    address:string;
    email:string;
    phone:string;
    map_url:string;
    facebook_url:string;
    twitter_url:string;
    instagram_url:string;
    whatsapp_number:string;
    footer_copyrights: string;
    submitting_message:string;
    youtube_url:string;
}



export interface IStatistic{
    _id?:string;
    statistic_img?:File;
    header: string;
    desktop_header_font_size: string;
    desktop_header_font_wight: string;
    desktop_header_font_color: string;
    mobile_header_font_size: string;
    mobile_header_font_wight: string;
    mobile_header_font_color: string;
    english_sub_header:string;
    arabic_sub_header:string;
    desktop_sub_header_font_size: string;
    desktop_sub_header_font_wight: string;
    desktop_sub_header_font_color: string;
    mobile_sub_header_font_size: string;
    mobile_sub_header_font_wight: string;
    mobile_sub_header_font_color: string;
    order:string
}