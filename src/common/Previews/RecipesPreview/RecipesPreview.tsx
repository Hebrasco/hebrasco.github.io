import React from 'react'
import PreviewImage from 'models/PreviewImageModel'
import IpadImage from 'assets/images/previews/recipes/ipad.png'
import IphoneImage from 'assets/images/previews/recipes/iphone.png'
import IphoneSEImage from 'assets/images/previews/recipes/iphoneSE.png'
import { Image } from 'react-bootstrap'

import './RecipesPreview.css'

export default function RecipesPreview(): JSX.Element {
  const images: PreviewImage[] = [
    new PreviewImage(
      'preview-recipes-iphoneSE',
      IphoneSEImage,
      'preview-recipes-iphoneSE'
    ),
    new PreviewImage(
      'preview-recipes-iphone',
      IphoneImage,
      'preview-recipes-iphone'
    ),
    new PreviewImage('preview-recipes-ipad', IpadImage, 'preview-recipes-ipad'),
  ]

  return (
    <div className="d-flex align-items-end justify-content-end">
      {images.map(({ id, source, className }) => (
        <Image
          key={id}
          src={source}
          className={`position-relative ${className}`}
        />
      ))}
    </div>
  )
}
