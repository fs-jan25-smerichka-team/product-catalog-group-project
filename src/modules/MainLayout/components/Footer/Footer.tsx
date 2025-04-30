import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';

import {
  backToTopStyle,
  backToTopTextStyle,
  boxStyle,
  contactsLinkStyle,
  contactsStyle,
  flexBoxStyle,
  iconButtonStyle,
  logoBoxStyle,
} from './FooterStyle';
import upIcon from '../../../../assets/icons/arrow-up.svg';
import { footerLinks } from '../../../../utils/Types';
import { AppIcon } from '../../../shared/components/AppIcon';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={flexBoxStyle}>
        {/* Logo */}
        <Box sx={logoBoxStyle}>
          <AppIcon />
        </Box>

        {/* Contacts */}
        <Box sx={contactsStyle}>
          {footerLinks.map(link => (
            <Link
              key={link.text}
              href={link.href}
              underline="none"
              target="_blank"
              sx={contactsLinkStyle}
            >
              <Typography variant="subtitle1">{link.text}</Typography>
            </Link>
          ))}
        </Box>

        {/* Back to top */}
        <Box sx={backToTopStyle}>
          <Typography variant="body2" sx={backToTopTextStyle}>
            Back to top
          </Typography>
          <IconButton onClick={handleBackToTop} sx={iconButtonStyle}>
            <img src={upIcon} alt="favoriteIcon" width={16} height={16} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
