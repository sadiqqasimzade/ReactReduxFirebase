import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface ContainerProps { }

export function Container({ children }: PropsWithChildren<ContainerProps>) {

  return (
    <div className='container mx-auto flex'>
      <div className='w-full p-5'>
        {children}
      </div>
    </div>
  );
}
export default Container;
