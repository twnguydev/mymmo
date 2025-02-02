'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  TrendingUp,
  Euro,
  FileText,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Printer
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const AccountingDashboard = () => {
  const monthlyData = [
    { month: 'Jan', revenus: 12500, charges: 3200, resultat: 9300 },
    { month: 'Fév', revenus: 12500, charges: 3500, resultat: 9000 },
    { month: 'Mar', revenus: 12800, charges: 3300, resultat: 9500 },
    { month: 'Avr', revenus: 12500, charges: 3400, resultat: 9100 },
    { month: 'Mai', revenus: 12500, charges: 3200, resultat: 9300 },
    { month: 'Juin', revenus: 13000, charges: 3600, resultat: 9400 },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Comptabilité</h1>
          <p className="text-gray-500">SCI Immobilier - Année 2025</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtres
          </Button>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter les données
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Revenus annuels"
          value="156 800 €"
          trend="+8.2%"
          trendUp={true}
          icon={Euro}
        />
        <MetricCard
          title="Charges annuelles"
          value="42 300 €"
          trend="-2.1%"
          trendUp={false}
          icon={ArrowDownRight}
        />
        <MetricCard
          title="Résultat net"
          value="114 500 €"
          trend="+12.3%"
          trendUp={true}
          icon={TrendingUp}
        />
        <MetricCard
          title="TVA à déclarer"
          value="8 450 €"
          dueDate="15/02/2025"
          icon={Calendar}
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="reports">Rapports</TabsTrigger>
          <TabsTrigger value="taxes">Fiscalité</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Évolution mensuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value) => `${value} €`}
                      />
                      <Line type="monotone" dataKey="revenus" stroke="#2563eb" name="Revenus" />
                      <Line type="monotone" dataKey="charges" stroke="#dc2626" name="Charges" />
                      <Line type="monotone" dataKey="resultat" stroke="#059669" name="Résultat" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Transactions récentes</CardTitle>
                  <Button variant="ghost" size="sm">
                    Voir tout
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { desc: "Loyer - Apt. Paris", date: "01/02/2025", amount: "+1 500 €" },
                    { desc: "Taxe Foncière", date: "15/01/2025", amount: "-3 600 €" },
                    { desc: "Charges Copro", date: "10/01/2025", amount: "-800 €" },
                    { desc: "Loyer - Studio Lyon", date: "05/01/2025", amount: "+850 €" },
                  ].map((tx, idx) => (
                    <TransactionItem key={idx} {...tx} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Rapports mensuels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ReportItem 
                    title="Janvier 2025"
                    type="Rapport mensuel"
                    date="01/02/2025"
                  />
                  <ReportItem 
                    title="Décembre 2024"
                    type="Rapport mensuel"
                    date="01/01/2025"
                  />
                  <ReportItem 
                    title="Novembre 2024"
                    type="Rapport mensuel"
                    date="01/12/2024"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bilans annuels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ReportItem 
                    title="Bilan 2024"
                    type="Rapport annuel"
                    status="Validé"
                    date="15/01/2025"
                  />
                  <ReportItem 
                    title="Bilan 2023"
                    type="Rapport annuel"
                    status="Archivé"
                    date="15/01/2024"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents fiscaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ReportItem 
                    title="Déclaration TVA"
                    type="T4 2024"
                    date="15/01/2025"
                  />
                  <ReportItem 
                    title="Déclaration 2072"
                    type="Année 2024"
                    date="15/05/2024"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="taxes">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Échéances fiscales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <TaxItem
                    title="Déclaration TVA - T1 2025"
                    amount="8 450 €"
                    dueDate="15/04/2025"
                    status="À venir"
                  />
                  <TaxItem
                    title="Acompte IS"
                    amount="12 300 €"
                    dueDate="15/03/2025"
                    status="À venir"
                  />
                  <TaxItem
                    title="CFE"
                    amount="2 400 €"
                    dueDate="15/12/2024"
                    status="Payé"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full flex items-center justify-between">
                  <span>Générer déclaration TVA</span>
                  <FileText className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Éditer reçu fiscal</span>
                  <Printer className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Export comptable</span>
                  <Download className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Documents comptables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DocumentItem
                    title="Grand Livre 2024"
                    type="Excel"
                    date="31/12/2024"
                    size="2.4 MB"
                  />
                  <DocumentItem
                    title="Balance Générale"
                    type="Excel"
                    date="31/12/2024"
                    size="1.8 MB"
                  />
                  <DocumentItem
                    title="Journal des Opérations"
                    type="Excel"
                    date="31/12/2024"
                    size="3.2 MB"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Justificatifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DocumentItem
                    title="Factures T4 2024"
                    type="PDF"
                    date="31/12/2024"
                    size="8.4 MB"
                  />
                  <DocumentItem
                    title="Relevés Bancaires 2024"
                    type="PDF"
                    date="31/12/2024"
                    size="5.2 MB"
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
  trend?: string;
  trendUp?: boolean;
  dueDate?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, trendUp, dueDate, icon: Icon }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && (
            <span className={`text-sm font-medium ${
              trendUp ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend}
            </span>
          )}
          {dueDate && (
            <p className="text-sm text-gray-500">Échéance : {dueDate}</p>
          )}
        </div>
        <div className={`p-2 rounded-lg ${
          trendUp ? 'bg-green-100 text-green-600' :
          trend === undefined ? 'bg-blue-100 text-blue-600' :
          'bg-red-100 text-red-600'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </CardContent>
  </Card>
);

interface TransactionItemProps {
  desc: string;
  date: string;
  amount: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ desc, date, amount }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div>
      <p className="font-medium">{desc}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <span className={`font-medium ${
      amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
    }`}>
      {amount}
    </span>
  </div>
);

interface ReportItemProps {
  title: string;
  type: string;
  status?: string;
  date: string;
}

const ReportItem: React.FC<ReportItemProps> = ({ title, type, status, date }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div>
      <p className="font-medium">{title}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">{type}</span>
        {status && (
          <Badge variant={status === 'Validé' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        )}
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">{date}</span>
      <Button variant="ghost" size="icon">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

interface TaxItemProps {
  title: string;
  amount: string;
  dueDate: string;
  status: string;
}

const TaxItem: React.FC<TaxItemProps> = ({ title, amount, dueDate, status }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div className="space-y-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">Échéance : {dueDate}</p>
    </div>
    <div className="text-right">
      <p className="font-bold">{amount}</p>
      <Badge variant={status === 'Payé' ? 'default' : 'secondary'}>
        {status}
      </Badge>
    </div>
  </div>
);

interface DocumentItemProps {
  title: string;
  type: string;
  date: string;
  size: string;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ title, type, date, size }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div className="flex items-center gap-3">
      <FileText className="w-4 h-4 text-blue-600" />
      <div>
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{type}</span>
          <span>•</span>
          <span>{size}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">{date}</span>
      <Button variant="ghost" size="icon">
        <Download className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

export default AccountingDashboard;