import React from "react";

interface ResetIconProps {
  size: number;
}

const RemoveIcon = ({ size }: ResetIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#FFFF"
    viewBox="0 0 256 256"
  >
    <path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>
  </svg>
);

export default RemoveIcon;
