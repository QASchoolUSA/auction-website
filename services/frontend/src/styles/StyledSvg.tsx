import React from 'react';

const StyledSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg { ...props } className = {`block h-6 w-6 ${props.className || ''}`} />
);

export default StyledSvg;
