export const Layout = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <div className="w-screen min-h-screen bg-ice dark:bg-black">
      {children}
    </div>
  )
}
