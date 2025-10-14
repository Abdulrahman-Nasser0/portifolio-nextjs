import { cva } from 'class-variance-authority';

export const magneticVariance = cva(
  // Base styles with hover animations
  'relative inline-flex items-center justify-center overflow-hidden cursor-pointer rounded-full font-medium ring-offset-background transition-colors before:absolute before:left-[-10%] before:top-[-10%] before:h-0 before:w-[120%] before:translate-y-3/4 before:scale-0 before:rounded-full before:pb-[120%] before:content-[""] after:absolute after:inset-0 after:h-full after:w-full after:-translate-y-full after:rounded-full after:transition-transform after:duration-300 after:ease-in-expo after:content-[""] hover:before:translate-y-0 hover:before:scale-100 hover:before:transition-transform hover:before:duration-300 hover:before:ease-in-expo hover:after:translate-y-0 hover:after:transition-transform hover:after:delay-300 hover:after:duration-75 hover:after:ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent before:bg-transparent after:bg-transparent',
        primary: 'bg-blue-600 text-white before:bg-blue-700 after:bg-blue-700',
        destructive: 'bg-white text-red-600 before:bg-red-600 after:bg-red-600',
        secondary: 'bg-white text-gray-600 before:bg-gray-200 after:bg-gray-200',
        ghost: 'bg-gray-900 text-white before:bg-blue-600 after:bg-blue-600',
        outline: 'border border-solid before:bg-[#1C1D20] after:bg-[#1C1D20]',
      },
      size: {
        default: 'p-2 text-sm',
        md: 'px-8 py-10 text-base',
        lg: 'px-8 py-16 text-lg lg:px-12 lg:py-20',
        xl: 'px-10 py-16 text-lg lg:px-14 lg:py-20',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);