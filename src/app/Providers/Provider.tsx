'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

export function Provider({children}:{children?:ReactNode | ReactNode[]}) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}