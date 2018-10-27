import React from 'react';

const NEGATIVE_COLOR = '#FF6A67';
const POSITIVE_COLOR = '#8BC34A';

export const SearchesBadge = ({positive = true} = {}) =>
  <svg width="48" height="122" viewBox="0 0 48 122" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#2196F3"/>
    <path d="M31.8719 16.597C31.6836 16.2287 31.3178 16 30.9156 16H17.0828C16.6814 16 16.3148 16.2287 16.1265 16.597C15.9367 16.969 15.9621 17.4145 16.1919 17.7602L21.7527 26.1453C21.7948 26.209 21.8174 26.2825 21.8174 26.359V32.8757C21.8174 33.496 22.3068 34 22.9083 34C23.1039 34 23.2967 33.9445 23.4676 33.8388L25.653 32.4865C25.9788 32.284 26.181 31.915 26.181 31.5235V26.359C26.181 26.2825 26.2036 26.209 26.2465 26.1445L31.8065 17.761C32.0363 17.4153 32.0618 16.969 31.8719 16.597Z" fill="white"/>
    <path d="M40 14C43.3137 14 46 11.3137 46 8C46 4.68629 43.3137 2 40 2C36.6863 2 34 4.68629 34 8C34 11.3137 36.6863 14 40 14Z" fill={positive ? POSITIVE_COLOR : NEGATIVE_COLOR} stroke="white" strokeWidth="2"/>
    <path opacity="0.220392" fillRule="evenodd" clipRule="evenodd" d="M28.2458 53.1704C27.0191 53.3259 25.7689 53.406 24.5 53.406C22.8287 53.406 21.1899 53.267 19.5945 53L22.8461 116.406H19L23.5 121.406L28 116.406H24.1923L28.2458 53.1704Z" fill="url(#paint0_linear)"/>
    <defs>
    <linearGradient id="paint0_linear" x1="28.2459" y1="121.406" x2="28.2459" y2="53" gradientUnits="userSpaceOnUse">
    <stop stopColor="#2196F3"/>
    <stop offset="1" stopColor="#A9D9FF"/>
    </linearGradient>
    </defs>
  </svg>

export const ClicksBadge = ({positive = true} = {}) =>
  <svg width="48" height="100" viewBox="0 0 48 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.220392" fillRule="evenodd" clipRule="evenodd" d="M28.2458 31.1704C27.0191 31.3259 25.7689 31.406 24.5 31.406C22.8287 31.406 21.1899 31.267 19.5945 31L22.8461 94.406H19L23.5 99.406L28 94.406H24.1923L28.2458 31.1704Z" fill="url(#paint0_linear)" />
    <path fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#2196F3" />
    <path d="M40 14C43.3137 14 46 11.3137 46 8C46 4.68629 43.3137 2 40 2C36.6863 2 34 4.68629 34 8C34 11.3137 36.6863 14 40 14Z" fill={positive ? POSITIVE_COLOR : NEGATIVE_COLOR} stroke="white" strokeWidth="2" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="12" y="11" width="24" height="24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 11H36V35H12V11Z" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.25 18.5V22.24C20.04 21.43 19.25 20.06 19.25 18.5C19.25 16.01 21.26 14 23.75 14C26.24 14 28.25 16.01 28.25 18.5C28.25 20.06 27.46 21.43 26.25 22.24V18.5C26.25 17.12 25.13 16 23.75 16C22.37 16 21.25 17.12 21.25 18.5ZM26.55 24.61L31.09 26.87C31.62 27.09 32 27.63 32 28.25C32 28.31 31.99 28.38 31.98 28.45L31.23 33.72C31.12 34.45 30.54 35 29.79 35H23C22.59 35 22.21 34.83 21.94 34.56L17 29.62L17.79 28.82C17.99 28.62 18.27 28.49 18.58 28.49C18.64 28.49 18.6912 28.4989 18.7423 28.5078C18.7678 28.5122 18.7933 28.5167 18.82 28.52L22.25 29.24V18.5C22.25 17.67 22.92 17 23.75 17C24.58 17 25.25 17.67 25.25 18.5V24.5H26.01C26.2 24.5 26.38 24.54 26.55 24.61Z" fill="white" />
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="28.2459" y1="99.406" x2="28.2459" y2="31" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2196F3" />
        <stop offset="1" stopColor="#A9D9FF" />
      </linearGradient>
    </defs>
  </svg>

export const BookingsBadge = ({positive = true} = {}) =>
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#2196F3" />
    <path d="M40 14C43.3137 14 46 11.3137 46 8C46 4.68629 43.3137 2 40 2C36.6863 2 34 4.68629 34 8C34 11.3137 36.6863 14 40 14Z" fill={positive ? POSITIVE_COLOR : NEGATIVE_COLOR} stroke="white" strokeWidth="2" />
    <path fillRule="evenodd" clipRule="evenodd" d="M13 14V16H15L18.595 23.585L17.245 26.035C17.09 26.325 17 26.65 17 27C17 28.105 17.895 29 19 29H31V27H19.425C19.285 27 19.175 26.89 19.175 26.75C19.175 26.705 19.185 26.665 19.205 26.63L20.1 25H27.55C28.3 25 28.955 24.585 29.3 23.97L32.875 17.48C32.955 17.34 33 17.175 33 17C33 16.445 32.55 16 32 16H17.215L16.265 14H13ZM19 30C17.895 30 17.01 30.895 17.01 32C17.01 33.105 17.895 34 19 34C20.105 34 21 33.105 21 32C21 30.895 20.105 30 19 30ZM27.01 32C27.01 30.895 27.895 30 29 30C30.105 30 31 30.895 31 32C31 33.105 30.105 34 29 34C27.895 34 27.01 33.105 27.01 32Z" fill="white" />
  </svg>

export {
  SearchesBadge as Searches,
  ClicksBadge as Clicks,
  BookingsBadge as Bookings,
};
