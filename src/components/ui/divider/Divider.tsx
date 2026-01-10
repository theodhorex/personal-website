import React from "react"

type DividerProps = {
  children?: React.ReactNode
  className?: string
  lineClassName?: string
}

export default function Divider({
  children,
  className = "",
  lineClassName = "",
}: DividerProps) {
  return (
    <div className={`flex items-center w-full gap-4 ${className}`}>
      <div className={`flex-1 h-px bg-black/20 ${lineClassName}`} />
      
      {children && (
        <div className="flex items-center gap-4 text-sm font-semibold text-black">
          {children}
        </div>
      )}
      
      <div className={`flex-1 h-px bg-black/20 ${lineClassName}`} />
    </div>
  )
}
