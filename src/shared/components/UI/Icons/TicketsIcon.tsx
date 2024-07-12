import type { SVGProps } from 'react';

const TicketsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none' {...props}>
    <path
      fill='#141C24'
      d='M12.5 17.612a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13.5 12.612a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12.5 9.612a1 1 0 1 0 0-2 1 1 0 0 0 0 2'
    />
    <path
      fill='#141C24'
      fillRule='evenodd'
      d='M2.5 14.612v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 1 1 0-4v-4a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4m18.5 4a.5.5 0 0 1-.5.5h-16a.5.5 0 0 1-.5-.5v-2.837a3.5 3.5 0 0 0 0-6.326V6.612a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v2.837a3.5 3.5 0 0 0 0 6.326z'
      clipRule='evenodd'
    />
  </svg>
);
export default TicketsIcon;
