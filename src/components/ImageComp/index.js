import {Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

const ImageComp = ({image, height, width}) => {
  return (
    <Image
      source={image}
      style={{width: scale(width), height: verticalScale(height)}}
    />
  );
};

export default ImageComp;
