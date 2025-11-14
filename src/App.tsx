import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: `url('https://images.unsplash.com/photo-1677338003679-b422eb979c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGV4dHVyZSUyMHdhcm0lMjBuYXR1cmFsfGVufDF8fHx8MTc2MjY5NzQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral') center/cover fixed`,
        backgroundColor: '#FFEED6',
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 238, 214, 0.3), rgba(255, 238, 214, 0.5))',
        }}
      />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Products />
        </main>
        <Footer />
      </div>
    </div>
  );
}
