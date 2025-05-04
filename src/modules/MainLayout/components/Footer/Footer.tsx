import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

import {
  backToTopStyle,
  backToTopTextStyle,
  boxStyle,
  contactsLinkStyle,
  contactsLinkTextStyle,
  contactsStyle,
  flexBoxStyle,
  iconButtonStyle,
  logoBoxStyle,
} from './FooterStyle';
import upIcon from '../../../../assets/icons/arrow-up.svg';
import { FOOTER_LINKS } from '../../../../constants/constants';
import { AppIcon } from '../../../shared/components/AppIcon';
import { ThemeSwitcher } from '../../../../themes/ThemeSwitcher';

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
            <NavLink
              key={link.text}
              to={link.href}
              target={link.target}
              className={({ isActive }) =>
                isActive ? 'footer-link active' : 'footer-link'
              }
              style={contactsLinkStyle}
            >
              <Typography variant="subtitle1" sx={contactsLinkTextStyle}>
                {link.text}
              </Typography>
            </NavLink>
          ))}
        </Box>

        {/* Back to top */}
        <Stack direction="row" gap="8px" alignItems="center" width="240px">
          <Box sx={backToTopStyle} onClick={handleBackToTop} role="button">
            <Typography
              variant="body2"
              className="back-to-top-text"
              sx={backToTopTextStyle}
            >
              Back to top
            </Typography>

            <IconButton className="back-to-top-button" sx={iconButtonStyle}>
              <img src={upIcon} alt="up arrow" width={16} height={16} />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            className="back-to-top-text"
            sx={backToTopTextStyle}
          >
            Theme:
          </Typography>

          <Box sx={{ width: '64px' }}>
            <ThemeSwitcher />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
