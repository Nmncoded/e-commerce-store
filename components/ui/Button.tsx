import { cn } from '@/lib/utils'
import {forwardRef} from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, className, disabled, type = 'button', ...props}, ref) => {
  return (
    <button ref={ref} disabled={disabled} className={cn(`w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition`,className)} {...props} >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
