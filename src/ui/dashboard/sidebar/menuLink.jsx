import Link from 'next/link'
import React from 'react'

export default function MenuLink({item}) {
  return (
    <Link href={item.path}>
    </Link>
  )
}
