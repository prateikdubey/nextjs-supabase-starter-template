'use client';

import { createTheme, MantineColorsTuple, MantineRadiusValues } from '@mantine/core';
import { Dosis, Noto_Sans, Nunito, Quicksand, Raleway, Roboto, Rubik } from 'next/font/google';

//#region fonts
const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
  // display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  // display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['300', '400', '800']
  // display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  // display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  // display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  // display: 'swap',
})

const roboto_mono = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['100', '400', '700'],
  display: 'swap',
})

//#endregion

//#region colors
const orange: MantineColorsTuple = [
  '#fff8e1',
  '#ffefcc',
  '#ffdd9b',
  '#ffca64',
  '#ffba38',
  '#ffb01b',
  '#ffab09',
  '#e39500',
  '#ca8500',
  '#af7100'
];
const blue: MantineColorsTuple = [
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
const green: MantineColorsTuple = [
  '#f0fdf2',
  '#ddfbe2',
  '#bdf5c7',
  '#8aeb9c',
  '#4fd969',
  '#29c748',
  '#1b9e34',
  '#197c2d',
  '#196228',
  '#165123',
];
//#endregion

const radius: MantineRadiusValues = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
}

export const theme = createTheme({
  primaryColor: 'orange',
  fontFamily: nunito.style.fontFamily,
  colors: {
    orange,
  },
  radius
});