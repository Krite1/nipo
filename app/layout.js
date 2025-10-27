import './globals.css'

export const metadata = {
  title: 'Nipo — Blog Kimia',
  description: 'blog kimia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white text-gray-900">
        <header className="border-b">
          <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Nipo</h1>
            <nav className="space-x-4">
              <a href="/" className="text-sm">Home</a>
              <a href="/about" className="text-sm">About</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="border-t mt-12">
          <div className="max-w-4xl mx-auto p-4 text-sm text-gray-600">© Nipo · Blog Kimia</div>
        </footer>
      </body>
    </html>
  )
}
