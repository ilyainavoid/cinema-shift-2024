import type { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none' {...props}>
    <path
      fill='#141C24'
      fillRule='evenodd'
      d='M16.5 8.612a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M4.5 18.384v2.228h16v-2.228a4 4 0 0 0-2.596-3.745l-.137-.052a15 15 0 0 0-10.534 0l-.137.052A4 4 0 0 0 4.5 18.384m3.26-2.393a13.5 13.5 0 0 1 9.48 0l.138.052A2.5 2.5 0 0 1 19 18.383v.729H6v-.728a2.5 2.5 0 0 1 1.622-2.341z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUser;
