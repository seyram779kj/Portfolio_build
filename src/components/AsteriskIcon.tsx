import React from 'react';

interface AsteriskIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AsteriskIcon: React.FC<AsteriskIconProps> = ({
  className = 'w-4 h-4',
  size,
  color = '#ff4d2e',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size ? `${size}px` : undefined,
        height: size ? `${size}px` : undefined,
      }}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 12-spoke rounded geometric starburst asterisk matching template */}
      <g transform="translate(50,50)">
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <rect
            key={i}
            x="-7"
            y="-46"
            width="14"
            height="92"
            rx="7"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  );
};
