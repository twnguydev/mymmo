import React from 'react';
import PropertyFormModal from '@/components/modales/new-property';

const DashboardHome = () => {
  return (
    <>
      <Header />
      <Overview />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <LatestTransactions />
        <OccupancyStatus />
      </div>
    </>
  );
};

const Header = () => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
    <div>
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Tableau de bord</h2>
      <p className="text-gray-600">Bienvenue sur votre dashboard de gestion immobilière</p>
    </div>
    <PropertyFormModal />
  </div>
);

const Overview = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
    <StatCard 
      title="Revenus mensuels" 
      value="12 500 €" 
      trend="+8.2%" 
      trendUp={true}
    />
    <StatCard 
      title="Taux d'occupation" 
      value="95%" 
      trend="+2.1%" 
      trendUp={true}
    />
    <StatCard 
      title="Charges mensuelles" 
      value="3 200 €" 
      trend="-3.1%" 
      trendUp={false}
    />
    <StatCard 
      title="Rentabilité nette" 
      value="7.2%" 
      trend="+0.5%" 
      trendUp={true}
    />
  </div>
);

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

const StatCard = ({ title, value, trend, trendUp }: StatCardProps) => (
  <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
    <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
    <div className="flex items-baseline mt-4">
      <span className="text-xl lg:text-2xl font-bold text-gray-900">{value}</span>
      <span className={`ml-2 text-sm font-medium ${
        trendUp ? 'text-green-600' : 'text-red-600'
      }`}>
        {trend}
      </span>
    </div>
  </div>
);

const LatestTransactions = () => (
  <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Dernières transactions</h3>
    <div className="space-y-4">
      {[
        { desc: "Loyer - Apt. Paris", amount: "+1 200 €", date: "28 Jan 2025" },
        { desc: "Charges - Copro Lyon", amount: "-350 €", date: "26 Jan 2025" },
        { desc: "Loyer - Studio Lyon", amount: "+680 €", date: "25 Jan 2025" },
      ].map((transaction, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-medium text-gray-900">{transaction.desc}</p>
            <p className="text-sm text-gray-500">{transaction.date}</p>
          </div>
          <span className={`font-medium ${
            transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const OccupancyStatus = () => (
  <div className="bg-white p-4 lg:p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium text-gray-900 mb-4">État d'occupation</h3>
    <div className="space-y-4">
      {[
        { address: "Apt. Paris - 75m²", status: "Occupé", endDate: "Dec 2025" },
        { address: "Studio Lyon - 30m²", status: "Occupé", endDate: "Mars 2025" },
        { address: "T3 Bordeaux - 65m²", status: "Vacant", endDate: "-" },
      ].map((property, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-medium text-gray-900">{property.address}</p>
            <p className="text-sm text-gray-500">Fin de bail : {property.endDate}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
            property.status === 'Occupé' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {property.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardHome;