
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>My To-Do List</title>
      <body>{children}</body>
    </html>
  )
}
