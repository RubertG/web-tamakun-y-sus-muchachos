import { CircleCheckBig } from 'lucide-react'
import { Toaster as ToasterSonner } from 'sonner'

export const Toaster = () => {
  return (
    <ToasterSonner
      toastOptions={{
        unstyled: true,
        className:
          'w-full py-2 px-4 rounded-[10px] min-h-12 flex items-center gap-2 [&_svg]:size-5',
        classNames: {
          success: 'text-text-primary bg-accent-200 border border-accent-300'
        }
      }}
      icons={{
        success: <CircleCheckBig />
      }}
    />
  )
}
