"use client";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Gallery1() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="/public/img/img1.jpg">
                    <img alt="img1" src="/public/img/thumb1.jpg" />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src="/public/img/thumb2.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}