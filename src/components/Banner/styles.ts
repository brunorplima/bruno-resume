import { Style } from "../../types/style"

export const main: Style = {
  className: `flex flex-col lg:flex-row w-full relative h-screen text-xl scroll-m-64 md:scroll-m-16`,
  style: {
    backgroundColor: 'var(--primary-light)',
    minHeight: 840
  }
} 

export const leftParent: Style = {
  className: `order-2 lg:order-1 flex-1 p-5 lg:p-10 z-10 text-gray-200 relative`
}

export const rightParent: Style = {
  className: 'flex-1 p-5 lg:p-10 z-10 order-1 lg:order-2 flex items-center lg:items-end justify-center'
}

export const imageContainer: Style = {
  className: 'flex justify-center'
}

export const image: Style = {
  className: 'absolute bottom-0 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mr-auto ml-auto'
}

export const name: Style = {
  className: 'text-4xl md:text-6xl xl:text-8xl font-extrabold'
}

export const content:Style = {
  className: 'flex flex-col sm:px-20 md:px-32 lg:px-5 lg:pb-20'
}

export const introduction: Style = {
  className: 'text-2xl md:text-4xl',
  style: { color: 'var(--primary)' }
}
