import React from 'react'

export const ItemFooter = ({icon: Icon, link}) => {
  return (
   <li><a href={link} target="_blank" rel="noopener noreferrer"><Icon /></a></li>
  )
}
