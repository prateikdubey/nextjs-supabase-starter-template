'use client';

import { createTheme, MantineColorsTuple, MantineRadiusValues } from '@mantine/core';

const lightBlue: MantineColorsTuple = [
  '#e0fbff',
  '#cbf2ff',
  '#9ae2ff',
  '#64d2ff',
  '#3cc5fe',
  '#23bcfe',
  '#09b8ff',
  '#00a1e4',
  '#0090cd',
  '#007cb5'
];

const radius: MantineRadiusValues = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
}

export const theme = createTheme({
  primaryColor: 'lightBlue',
  colors: {
    lightBlue,
  },
  radius
});
