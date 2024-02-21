import React from 'react'

const BadgeIcon = ({ color = '#0095D5"' }) => {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_369)">
        <path
          d="M48 3.41602H13C10.25 3.41602 8.025 5.66602 8.025 8.41602L8 40.741C8 42.466 8.875 43.991 10.2 44.891L30.5 58.416L50.775 44.891C52.1 43.991 52.975 42.466 52.975 40.741L53 8.41602C53 5.66602 50.75 3.41602 48 3.41602ZM25.5 40.916L13 28.416L16.525 24.891L25.5 33.841L44.475 14.866L48 18.416L25.5 40.916Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_16_369">
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

export default BadgeIcon;