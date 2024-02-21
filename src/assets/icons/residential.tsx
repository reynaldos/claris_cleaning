import React from 'react'

const ResidentialIcon = ({ color = '#0095D5' }) => {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_228)">
        <path
          d="M25.5 50.916V35.916H35.5V50.916H48V30.916H55.5L30.5 8.41602L5.5 30.916H13V50.916H25.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_16_228">
          <rect
            width="60"
            height="60"
            fill="white"
            transform="translate(0.5 0.916016)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ResidentialIcon;