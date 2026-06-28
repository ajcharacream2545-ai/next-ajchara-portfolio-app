import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}