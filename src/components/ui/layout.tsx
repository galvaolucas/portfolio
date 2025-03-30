export const Layout = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  return (
    <div className="w-screen h-screen py-8 px-16">
      {children}
    </div>
  )
}