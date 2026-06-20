import * as React from "react"
import { cn } from "@/lib/utils"

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
}

export function EmptyState({ className, message = "No data available", children, ...props }: EmptyStateProps) {
  return (
    <div 
      className={cn("flex items-center justify-center py-8 text-center border rounded-lg border-dashed", className)} 
      {...props}
    >
      {children || <p className="text-sm text-muted-foreground">{message}</p>}
    </div>
  )
}
