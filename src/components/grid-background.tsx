import React from 'react'
import { cn } from '@/lib/utils'

export function GridBackgound({
	children,
	className,
	ref,
	...props
}: {
	children: React.ReactNode
	className?: string
	ref?: React.ForwardedRef<HTMLDivElement>
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent)]',
				className
			)}
			ref={ref}
			{...props}>
			{children}
		</div>
	)
}
