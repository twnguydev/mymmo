'use client';

import { useState } from 'react';
import { BarChart3, Home, Users, BellRing, Settings, PieChart, Menu, X, ReceiptEuro, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DashboardLayout = (props: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  const navItems = [
    { icon: <PieChart size={20} />, label: 'Vue Générale', uri: '/dashboard' },
    { icon: <Home size={20} />, label: 'Biens Immobiliers', uri: '/dashboard/properties' },
    { icon: <Users size={20} />, label: 'Locataires', uri: '/dashboard/tenants' },
    { icon: <BarChart3 size={20} />, label: 'Finances', uri: '/dashboard/finances' },
    { icon: <ReceiptEuro size={20} />, label: 'Comptabilité', uri: '/dashboard/accountant' },
    { icon: <BellRing size={20} />, label: 'Notifications', uri: '/dashboard/notifications' },
    { icon: <Settings size={20} />, label: 'Paramètres', uri: '/dashboard/settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-800">SCI Dashboard</h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="p-6">
        <div className="lg:flex gap-6">
          {/* Sidebar wrapper for sticky positioning */}
          <div className="hidden lg:block flex-none">
            <div style={{ width: isCollapsed ? '5rem' : '16rem' }} className="transition-all duration-300">
              {/* Sticky sidebar */}
              <div className={`fixed h-[calc(100vh-3rem)] bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300
                ${isCollapsed ? 'w-20' : 'w-64'}`}>
                <div className="flex items-center justify-center h-16 px-4 border-b border-gray-100">
                    <Building2 />
                </div>
                <nav className="mt-6">
                  <div className="px-3 space-y-2">
                    <TooltipProvider>
                      {navItems.map((item, index) => (
                        <NavItem
                          key={index}
                          icon={item.icon}
                          label={item.label}
                          uri={item.uri}
                          active={pathname === item.uri}
                          collapsed={isCollapsed}
                        />
                      ))}
                    </TooltipProvider>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div className={`fixed lg:hidden h-full bg-white shadow-lg transition-all duration-300 z-30
            rounded-r-xl border border-gray-100 w-64
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <nav className="mt-6">
              <div className="px-3 space-y-2">
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    uri={item.uri}
                    active={pathname === item.uri}
                    collapsed={false}
                  />
                ))}
              </div>
            </nav>
          </div>

          {/* Overlay for mobile menu */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={toggleMobileMenu}
            />
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 min-h-[calc(100vh-6rem)] shadow-sm">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  uri: string;
  active?: boolean;
  collapsed?: boolean;
}

const NavItem = ({ icon, label, uri, active = false, collapsed = false }: NavItemProps) => {
  const content = (
    <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors
      ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}
      ${collapsed ? 'justify-center' : ''}`}>
      {icon}
      <span className={`ml-3 font-medium transition-opacity duration-300
        ${collapsed ? 'lg:hidden' : ''}`}>
        {label}
      </span>
    </div>
  );

  return collapsed ? (
    <Link href={uri} className="block">
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    </Link>
  ) : (
    <Link href={uri} className="block">
      {content}
    </Link>
  );
};

export default DashboardLayout;