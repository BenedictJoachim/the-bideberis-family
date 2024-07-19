import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div>
            <Link to="/">The Bideberis</Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/photography">Photography</Link>
            <Link to="/fitness">Fitness</Link>
            <Link to="/arts">Arts</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 The Bideberis. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
