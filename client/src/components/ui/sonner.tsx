import { useTheme } from "@/contexts/ThemeContext"

type ToasterProps = React.HTMLAttributes<HTMLDivElement>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()

  return (
    <div
      className={`toaster group ${theme === 'dark' ? 'dark' : ''}`}
      {...props}
    />
  )
}

const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.error('Error:', message),
  info: (message: string) => console.info('Info:', message),
}

export { Toaster, toast }
