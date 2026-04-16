import { createBrowserRouter, Navigate } from 'react-router';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { DigitalIDPage } from './components/DigitalIDPage';
import { SafeRoutePage } from './components/SafeRoutePage';
import { FamilyHubPage } from './components/FamilyHubPage';
import { EmergencyAlertPage } from './components/EmergencyAlertPage';
import { MainLayout } from './components/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/emergency-alert',
    element: <EmergencyAlertPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'digital-id',
        element: <DigitalIDPage />,
      },
      {
        path: 'safe-route',
        element: <SafeRoutePage />,
      },
      {
        path: 'family-hub',
        element: <FamilyHubPage />,
      },
    ],
  },
]);
