import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterText = styled(Typography)({
  color: 'var(--Text-Color-3, #FFF)',
  textAlign: 'center',
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: 'Helvetica Neue, sans-serif',
  fontSize: '14px',
  marginTop: '23px',
  marginLeft: '153px',
  '@media (max-width: 991px)': {
    marginLeft: '10px',
  },
});

function Footer() {
  return <FooterText>Navigate towards higher-salary jobs.</FooterText>;
}

export default Footer;