'use client'
import Navbar from './components/Navbar';
import './globals.css';
import { Providers } from './providers';
import { AuthContextProvider } from './context/AuthContext';
import CartContext from './context/CartContext';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AuthContextProvider>
          <Providers>
            <CartContext>
            <Navbar />
            {children}
            </CartContext>
          </Providers>
        </AuthContextProvider>
      </body>
    </html>
  )
}
