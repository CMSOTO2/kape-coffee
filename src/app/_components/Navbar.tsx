"use client"

import Image from 'next/image';
import React from 'react'

interface ContentType {
    logo: {
        filename: string,
        alt: string
    },
    navList: string[]
}

export default function Navbar({ content }: { content: ContentType }) {
    const { logo, navList } = content;

    return (
        <div>
            <Image src={logo.filename} alt={logo.alt} width={100} height={100} priority className='h-auto' />
            <ul>
                {navList.map((listItem: string) => {
                    return (
                        <li key={listItem}>{listItem}</li>
                    )
                })}
            </ul>
        </div>
    )
}