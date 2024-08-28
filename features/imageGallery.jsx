import React from 'react';
import b1 from '@/app/assets/images/b1.jpg';
import b4 from '@/app/assets/images/b4.jpg';
import b5 from '@/app/assets/images/b5.jpg';
import a5 from '@/app/assets/images/a5.jpg';
import Image from 'next/image';

const ImageGallery = () => {
    const images = [b1, b4, b5, a5]; // Array of images

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {images.map((src, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card">
                            <Image 
                                src={src} 
                                width={200} 
                                height={200} 
                                className="card-img-top" 
                                alt={`Gallery image ${index + 1}`} 
                                layout="responsive"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
