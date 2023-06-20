import * as React from 'react';

interface Props {
    title : string;
    onClick : ()=> void;
}

export const SidebarComps: React.FunctionComponent<Props> = ({title, onClick}) => {
    const handleClick = ()=>{
        onClick();
    }
  return (
    <>
    <div>
    <h1 onClick={handleClick} style={{cursor:"pointer"}}>{title}</h1>
    </div>
    </>
  );
};

