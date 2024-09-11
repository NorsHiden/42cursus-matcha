import React from 'react';

interface IconProps {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
  className?: string;
}

const ChatIcon: React.FC<IconProps> = ({
  width = 20,
  height = 21,
  stroke = 'white',
  fill = 'none',
  className = '',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.51074 18.0734C6.83223 18.8394 8.3655 19.2776 10.0006 19.2776C14.9712 19.2776 19.001 15.2279 19.001 10.2322C19.001 5.23655 14.9715 1.18677 10.001 1.18677C5.03041 1.18677 1.00098 5.23655 1.00098 10.2322C1.00098 11.8756 1.43702 13.4166 2.19917 14.7448L2.20212 14.7499C2.27545 14.8777 2.31244 14.9421 2.32918 15.003C2.34498 15.0605 2.3494 15.1121 2.34535 15.1716C2.341 15.2355 2.31958 15.3017 2.27566 15.4341L1.50684 17.7523L1.50587 17.7553C1.34365 18.2444 1.26255 18.489 1.32036 18.6519C1.37077 18.794 1.48266 18.9061 1.62402 18.9568C1.78579 19.0148 2.02802 18.9336 2.51252 18.7713L2.51855 18.769L4.82502 17.9963C4.95635 17.9523 5.02311 17.93 5.08657 17.9257C5.14573 17.9216 5.19675 17.927 5.25391 17.9428C5.31466 17.9597 5.37881 17.9969 5.50661 18.071L5.51074 18.0734Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChatIcon;
