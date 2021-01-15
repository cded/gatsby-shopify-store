import React from 'react';
import { SocialIcon as SocialIconComponent } from 'react-social-icons';

const SocialIcon = ({ url, bgColor, fgColor, width }) => {
  return (
    <SocialIconComponent
      url={url}
      style={{
        height: `${width || '30px'}`,
        width: `${width || '30px'}`,
      }}
      sx={{
        marginLeft: [2, 3],
        opacity: 0.8,
        ':hover,:focus,.active': {
          opacity: 1,
        },
      }}
      bgColor={bgColor}
      fgColor={fgColor}
    />
  );
};

export default SocialIcon;
