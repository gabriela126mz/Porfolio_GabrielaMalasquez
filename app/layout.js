import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Application</title>
      </head>
      <body className={inter.className}>
        <div className="container">
          <div className="layout">
            <nav className="sidebar">
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/applications/proyectos">Proyectos</Link>
                </li>
                <li>
                  <Link href="/applications/about">Sobre mí</Link>
                </li>
              </ul>
            </nav>
            <main className="content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
