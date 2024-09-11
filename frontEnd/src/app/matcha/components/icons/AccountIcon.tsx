import React from 'react';

interface IconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
  className?: string;
}

const AccountIcon: React.FC<IconProps> = ({
  width = 20,
  height = 19,
  stroke = 'white',
  fill = 'none',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19.001 17.4242C19.001 14.9572 14.9715 12.9573 10.001 12.9573C5.03041 12.9573 1.00098 14.9572 1.00098 17.4242M10.001 10.2772C6.89437 10.2772 4.37598 8.27727 4.37598 5.81028C4.37598 3.34328 6.89437 1.34338 10.001 1.34338C13.1076 1.34338 15.626 3.34328 15.626 5.81028C15.626 8.27727 13.1076 10.2772 10.001 10.2772Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AccountIcon;
