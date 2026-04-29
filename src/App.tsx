/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/layout/MainLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Members } from './pages/Members';
import { Subscriptions } from './pages/Subscriptions';
import { Attendance } from './pages/Attendance';
import { Trainers } from './pages/Trainers';
import { Branches } from './pages/Branches';
import { Reports } from './pages/Reports';
import { Workouts } from './pages/Workouts';
import { WorkoutsAI } from './pages/WorkoutsAI';
import { Payments } from './pages/Payments';
import { Settings } from './pages/Settings';
import { Schedule } from './pages/Schedule';
import { Inventory } from './pages/Inventory';
import { Messages } from './pages/Messages';
import { Employees } from './pages/Employees';
import { Campaigns } from './pages/Campaigns';
import { DietPlans } from './pages/DietPlans';
import { Maintenance } from './pages/Maintenance';
import { FeedbackPage } from './pages/Feedback';
import { Leads } from './pages/Leads';
import { POS } from './pages/POS';
import { Challenges } from './pages/Challenges';
import { Community } from './pages/Community';
import { Transformations } from './pages/Transformations';
import { Expenses } from './pages/Expenses';
import { Suppliers } from './pages/Suppliers';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="subscriptions" element={<Subscriptions />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="trainers" element={<Trainers />} />
              <Route path="branches" element={<Branches />} />
              <Route path="workouts" element={<Workouts />} />
              <Route path="workouts-ai" element={<WorkoutsAI />} />
              <Route path="diet-plans" element={<DietPlans />} />
              <Route path="maintenance" element={<Maintenance />} />
              <Route path="feedback" element={<FeedbackPage />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="messages" element={<Messages />} />
              <Route path="community" element={<Community />} />
              <Route path="leads" element={<Leads />} />
              <Route path="pos" element={<POS />} />
              <Route path="challenges" element={<Challenges />} />
              <Route path="transformations" element={<Transformations />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="suppliers" element={<Suppliers />} />
              <Route path="employees" element={<Employees />} />
              <Route path="campaigns" element={<Campaigns />} />
              <Route path="payments" element={<Payments />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

