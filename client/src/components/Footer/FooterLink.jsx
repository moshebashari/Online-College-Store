import React from 'react'
import {Link} from 'react-router-dom';


export default function FooterLink(props) {
  return (
     <li
    className="group relative flex items-center hover:text-primary-500">
    <i
      className="bi bi-circle-fill invisible absolute -left-4 flex text-[6px] text-primary-500 group-hover:visible"></i>
    <Link
      to={props.to || '#'}
      className="transition-all duration-300 group-hover:text-white">
      {props.title}
    </Link>
  </li>
  )
}
