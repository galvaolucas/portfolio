'use client';
import ProtectedLayout from '@/app/layouts/protectedLayout';
import { SidebarContext } from '../contexts/sidebarContext';
import { Sidebar } from '../features/sidebar/sidebar';
import { useState } from 'react';
import { ISidebarAreaOptions } from '@/global/types';
import { Container } from '../components/container/container';

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [area, setArea] = useState<ISidebarAreaOptions>('personalData')
  return (
    <ProtectedLayout>
      <SidebarContext.Provider value={{ area, setArea }}>
        <div className="w-full h-full text-light flex flex-row">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <Container className="w-5/6 p-4 text-light">
            {children}
          </Container>
        </div>
      </SidebarContext.Provider>
    </ProtectedLayout>
  );
}

export default RootLayout;