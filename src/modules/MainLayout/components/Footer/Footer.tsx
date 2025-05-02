import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

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
import { FOOTER_LINKS } from '../../../../constants/constants';
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
          {FOOTER_LINKS.map(link => (
            <Link
              key={link.text}
              to={link.href}
              target={link.target}
              style={contactsLinkStyle}
            >
              <Typography variant="subtitle1" color="secondary.dark">
                {link.text}
              </Typography>
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
