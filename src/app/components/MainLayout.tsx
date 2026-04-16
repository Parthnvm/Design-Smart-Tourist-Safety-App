import { Outlet } from 'react-router';
import { BottomNav } from './BottomNav';

export function MainLayout() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
