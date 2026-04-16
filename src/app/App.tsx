import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <div className="dark w-full h-screen bg-[#1a1a1d] flex items-center justify-center overflow-hidden">
      {/* Mobile Frame Container */}
      <div className="relative w-full max-w-[400px] h-full max-h-[844px] bg-[#1a1a1d] shadow-2xl overflow-hidden">
        {/* Main Content */}
        <div className="h-full">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}
