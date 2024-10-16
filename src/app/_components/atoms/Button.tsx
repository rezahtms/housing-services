import { FC, ReactElement, ReactNode } from "react";


interface ButtonsProps{
  filter:string,
  handleFilter:(filter:string)=>void,
  activeFilter:string,
  children:ReactElement|ReactNode
}
export const  Button:FC<ButtonsProps>=({ filter, handleFilter, activeFilter, children })=> {
  return (
    <button
      className={`px-5 py-2 capitalize hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50 outline-none" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}