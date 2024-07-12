import type { SVGProps } from 'react';

const SvgExit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none' {...props}>
    <path
      fill='#141C24'
      d='M14.97 20.937a.675.675 0 0 0-.674-.675H5.324a.5.5 0 0 1-.5-.5v-14.3a.5.5 0 0 1 .5-.5h8.972a.675.675 0 1 0 0-1.35H5.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.796a.675.675 0 0 0 .675-.675m-1.575-8.685a.63.63 0 0 0 0 1.26h5.546l-2.171 2.215a.693.693 0 0 0 .99.97l3.054-3.115a1 1 0 0 0 0-1.4L17.76 9.067a.693.693 0 1 0-.99.97l2.171 2.215z'
    />
  </svg>
);
export default SvgExit;
