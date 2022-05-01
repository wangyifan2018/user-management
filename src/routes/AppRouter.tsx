import React from 'react';
import { ExpensifyDashboardPage } from '../components/ExpensifyDashboardPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { AddExpensePage } from '../components/AddExpensePage';
import { EditExpensePage } from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ExpensifyDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit" element={<EditExpensePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
