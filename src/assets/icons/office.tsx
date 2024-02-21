import React from 'react'

const OfficeIcon = ({ color = '#0095D5' }) => {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8L5.5 18V53H30.5H55.5V18L43 8L30.5 18L18 8ZM15.5 43H10.5V48H15.5V43ZM20.5 43H25.5V48H20.5V43ZM15.5 33H10.5V38H15.5V33ZM20.5 33H25.5V38H20.5V33ZM15.5 23H10.5V28H15.5V23ZM20.5 23H25.5V28H20.5V23ZM40.5 43H35.5V48H40.5V43ZM45.5 43H50.5V48H45.5V43ZM40.5 33H35.5V38H40.5V33ZM45.5 33H50.5V38H45.5V33ZM40.5 23H35.5V28H40.5V23ZM45.5 23H50.5V28H45.5V23Z"
        fill={color}
      />
    </svg>
  );
};

export default OfficeIcon;