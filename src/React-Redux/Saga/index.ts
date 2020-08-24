import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./login-saga";
import { watchGetAdminsSaga } from "./get-admins-saga";
import { watchCreateAdminSaga } from "./create-admin-saga";
import { watchEditAdminSaga } from './edit-admin-saga';
import { watchDeleteAdminSaga } from "./delete-admins-saga";
import { watchCreateStudentSaga } from "./create-student-saga";
import { watchDeleteStudentSaga } from "./delete-student-saga";
import { watchEditStudentSaga } from "./edit-student-saga";
import { watchGetStudentsSaga } from "./get-students-saga";
import { watchCreateSliderItemSaga } from "./create-slider-item-saga";
import { watchEditSliderItemSaga } from "./edit-slider-item-saga";
import { watchDeleteSliderItemSaga } from "./delete-slider-item-saga";
import { watchGetSliderItemsSaga } from "./get-slider-items-saga";
import { watchCreateAboutSaga } from "./create-about-saga";
import { watchDeleteAboutSaga } from "./delete-about-saga";
import { watchEditAboutSaga } from "./edit-about-saga";
import { watchGetAboutSaga } from "./get-about-saga";
import { watchCreateStatisticSaga } from "./create-statistic-saga";
import { watchEditStatisticSaga } from "./edit-statistics-saga";
import { watchDeleteStatisticSaga } from "./delete-statistic-saga";
import { watchGetStatisticsSaga } from "./get-statistics-saga";
import { watchDeleteGalleryImageSaga } from "./delete-gallery-image-saga";
import { watchCreateGalleryImageSaga } from "./create-gallery-image-saga";
import { watchEditGalleryImageSaga } from "./edit-gallery-image-saga";
import { watchGetGalleryImageSaga } from "./get-gallery-images-saga";
import { watchCreateBlogPostSaga } from "./create-blog-post-saga";
import { watchDeleteBlogPostSaga } from "./delete-blog-post-saga";
import { watchGetBlogPostsSaga } from "./get-blog-posts-saga";
import { watchEditBlogPostSaga } from "./edit-blog-post-saga";
import { watchCreateContactSaga } from "./create-contact-saga";
import { watchDeleteContactSaga } from "./delete-contact-saga";
import { watchGetContactsSaga } from "./get-contacts-saga";
import { watchCreateFeatureSaga } from "./create-feature-saga";
import { watchDeleteFeatureSaga } from "./delete-feature-saga ";
import { watchEditFeatureSaga } from "./edit-feature-saga";
import { watchGetFeaturesSaga } from "./get-features-saga";
import { watchGetPagesHeadersSaga } from "./get-pages-header-saga";
import { watchEditHighlightsSaga } from "./edit-highlights-saga";
// import { watchEditFeaturesSaga } from "./edit-feature-saga";
import { watchEditBlogSaga } from "./edit-blog-saga";
import { watchEditContactsSaga } from "./edit-contacts-saga";
import { watchEditInfoSaga } from "./edit-info-saga";
import { watchGetInfoSaga } from "./get-info-saga";


export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchGetAdminsSaga(),
        watchCreateAdminSaga(),
        watchEditAdminSaga(),
        watchDeleteAdminSaga(),
        watchCreateStudentSaga(),
        watchDeleteStudentSaga(),
        watchEditStudentSaga(),
        watchGetStudentsSaga(),
        watchCreateSliderItemSaga(),
        watchEditSliderItemSaga(),
        watchDeleteSliderItemSaga(),
        watchGetSliderItemsSaga(),
        watchCreateAboutSaga(),
        watchDeleteAboutSaga(),
        watchEditAboutSaga(),
        watchGetAboutSaga(),
        watchCreateStatisticSaga(),
        watchEditStatisticSaga(),
        watchDeleteStatisticSaga(),
        watchGetStatisticsSaga(),
        watchCreateGalleryImageSaga(),
        watchEditGalleryImageSaga(),
        watchDeleteGalleryImageSaga(),
        watchGetGalleryImageSaga(),
        watchEditBlogPostSaga(),
        watchDeleteBlogPostSaga(),
        watchCreateBlogPostSaga(),
        watchGetBlogPostsSaga(),
        watchCreateContactSaga(),
        watchDeleteContactSaga(),
        watchGetContactsSaga(),
        watchCreateFeatureSaga(),
        watchDeleteFeatureSaga(),
        watchEditFeatureSaga(),
        watchGetFeaturesSaga(),
        watchGetPagesHeadersSaga(),
        watchEditHighlightsSaga(),
        watchEditBlogSaga(),
        watchEditContactsSaga(),
        watchGetAdminsSaga(),
        watchGetInfoSaga(),
        watchEditInfoSaga()
    ]);
}
