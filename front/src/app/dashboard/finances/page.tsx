'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';

const FinancialDashboard = () => {
  // Données pour les graphiques
  const monthlyData = [
    { month: 'Jan', revenus: 12500, charges: 3200, cashflow: 9300 },
    { month: 'Fév', revenus: 12500, charges: 3500, cashflow: 9000 },
    { month: 'Mar', revenus: 12800, charges: 3300, cashflow: 9500 },
    { month: 'Avr', revenus: 12500, charges: 3400, cashflow: 9100 },
    { month: 'Mai', revenus: 12500, charges: 3200, cashflow: 9300 },
    { month: 'Juin', revenus: 13000, charges: 3600, cashflow: 9400 },
  ];

  const propertyRevenue = [
    { name: 'Apt. Paris', value: 1500, color: '#2563eb' },
    { name: 'Studio Lyon', value: 680, color: '#7c3aed' },
    { name: 'T3 Bordeaux', value: 950, color: '#db2777' },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold">Finances</h1>
      <p className="text-gray-500 mb-6">Analysez vos performances financières</p>

      <Tabs defaultValue="physical" className="space-y-6">
        <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 mb-4">
          <TabsTrigger value="physical">Métriques Physiques</TabsTrigger>
          <TabsTrigger value="real-estate">Métriques Immobilières</TabsTrigger>
          <TabsTrigger value="business">Métriques Business</TabsTrigger>
        </TabsList>

        {/* Métriques Physiques */}
        <TabsContent value="physical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard
              title="Taux d'Occupation"
              value="95%"
              trend="+2.5%"
              positive={true}
              description="Sur l'ensemble du parc"
            />
            <MetricCard
              title="Délai Moyen de Paiement"
              value="3.2 jours"
              trend="-0.5 jours"
              positive={true}
              description="Par rapport au terme"
            />
            <MetricCard
              title="Taux d'Impayés"
              value="1.2%"
              trend="+0.3%"
              positive={false}
              description="Des loyers du mois"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>État des Logements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <StatusCard
                    title="Occupés"
                    value="18"
                    total="20"
                    color="bg-green-500"
                  />
                  <StatusCard
                    title="Vacants"
                    value="2"
                    total="20"
                    color="bg-red-500"
                  />
                  <StatusCard
                    title="En Préavis"
                    value="1"
                    total="20"
                    color="bg-yellow-500"
                  />
                  <StatusCard
                    title="En Travaux"
                    value="1"
                    total="20"
                    color="bg-blue-600"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Suivi des Échéances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DeadlineItem
                    title="Renouvellements de bail"
                    value="3"
                    date="Dans les 3 prochains mois"
                    status="warning"
                  />
                  <DeadlineItem
                    title="Révisions de loyer"
                    value="5"
                    date="À effectuer ce trimestre"
                    status="info"
                  />
                  <DeadlineItem
                    title="Régularisations de charges"
                    value="2"
                    date="En retard"
                    status="error"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Métriques Immobilières */}
        <TabsContent value="real-estate">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard
              title="Valeur du Patrimoine"
              value="2.8 M€"
              trend="+12.5%"
              positive={true}
              description="Sur 12 mois"
            />
            <MetricCard
              title="Prix Moyen au m²"
              value="4 250 €"
              trend="+8.2%"
              positive={true}
              description="Zone géographique"
            />
            <MetricCard
              title="Surface Totale"
              value="850 m²"
              trend="+120 m²"
              positive={true}
              description="Dernier trimestre"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Répartition du Patrimoine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={propertyRevenue}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        label={(entry) => `${entry.name}`}
                      >
                        {propertyRevenue.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>État du Bâti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <PropertyStatusItem
                    title="DPE Moyen"
                    value="C"
                    description="73% du parc en B ou C"
                  />
                  <PropertyStatusItem
                    title="Âge Moyen"
                    value="15 ans"
                    description="Dernière rénovation"
                  />
                  <PropertyStatusItem
                    title="Conformité"
                    value="98%"
                    description="Normes en vigueur"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Métriques Business */}
        <TabsContent value="business">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard
              title="Rentabilité Brute"
              value="7.2%"
              trend="+0.5%"
              positive={true}
              description="Moyenne du parc"
            />
            <MetricCard
              title="Cash-Flow Mensuel"
              value="9 450 €"
              trend="+850 €"
              positive={true}
              description="Après charges"
            />
            <MetricCard
              title="ROI Moyen"
              value="11.3%"
              trend="+1.2%"
              positive={true}
              description="Sur 5 ans"
            />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Évolution Mensuelle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value: number) => new Intl.NumberFormat('fr-FR', {
                        style: 'currency',
                        currency: 'EUR'
                      }).format(value)}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenus"
                      stroke="#2563eb"
                      name="Revenus"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="charges"
                      stroke="#dc2626"
                      name="Charges"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="cashflow"
                      stroke="#059669"
                      name="Cash-flow"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ratios Financiers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <RatioItem
                    title="Taux d'Endettement"
                    value="32%"
                    target="Max 40%"
                    status="success"
                  />
                  <RatioItem
                    title="Ratio Charges/Loyers"
                    value="28%"
                    target="Obj. 25%"
                    status="warning"
                  />
                  <RatioItem
                    title="Couverture de la Dette"
                    value="2.8x"
                    target="Min 2.0x"
                    status="success"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Objectifs Annuels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ObjectiveItem
                    title="Croissance du Patrimoine"
                    value="75%"
                    target="1M€"
                    current="750k€"
                  />
                  <ObjectiveItem
                    title="Réduction des Charges"
                    value="60%"
                    target="-10%"
                    current="-6%"
                  />
                  <ObjectiveItem
                    title="Amélioration DPE"
                    value="40%"
                    target="4 logements"
                    current="2 réalisés"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  positive: boolean;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, positive, description }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="text-sm font-medium text-gray-500">{title}</div>
      <div className="flex items-baseline mt-4">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={`ml-2 text-sm font-medium ${positive ? 'text-green-600' : 'text-red-600'
          }`}>
          {trend}
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-2">{description}</div>
    </CardContent>
  </Card>
);

interface StatusCardProps {
  title: string;
  value: string;
  total: string;
  color: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, value, total, color }) => (
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-sm text-gray-500">{value}/{total}</span>
    </div>
    <div className="text-sm font-medium">{title}</div>
  </div>
);

interface DeadlineItemProps {
  title: string;
  value: string;
  date: string;
  status: 'warning' | 'error' | 'info';
}

const DeadlineItem: React.FC<DeadlineItemProps> = ({ title, value, date, status }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
    <div className={`px-3 py-1 rounded-full text-sm font-medium ${status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
        status === 'error' ? 'bg-red-100 text-red-800' :
          'bg-blue-100 text-blue-800'
      }`}>
      {value}
    </div>
  </div>
);

interface PropertyStatusItemProps {
  title: string;
  value: string;
  description: string;
}

const PropertyStatusItem: React.FC<PropertyStatusItemProps> = ({ title, value, description }) => (
  <div className="flex items-center justify-between">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);

interface RatioItemProps {
  title: string;
  value: string;
  target: string;
  status: 'success' | 'warning' | 'error';
}

const RatioItem: React.FC<RatioItemProps> = ({ title, value, target, status }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{target}</div>
    </div>
    <div className={`text-lg font-bold ${status === 'success' ? 'text-green-600' :
        status === 'warning' ? 'text-yellow-600' :
          'text-red-600'
      }`}>
      {value}
    </div>
  </div>
);

interface ObjectiveItemProps {
  title: string;
  value: string;
  target: string;
  current: string;
}

const ObjectiveItem: React.FC<ObjectiveItemProps> = ({ title, value, target, current }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">
        {current} / {target}
      </div>
    </div>
    <div className="relative pt-1">
      <div className="flex h-2 overflow-hidden rounded bg-gray-100">
        <div
          className="bg-blue-600 transition-all duration-300"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  </div>
);

export default FinancialDashboard;