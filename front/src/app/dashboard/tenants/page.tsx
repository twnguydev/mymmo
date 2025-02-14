import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  PlusCircle,
  Download,
  MoreVertical,
  Mail,
  FileText,
  Phone,
  Clock,
  Ban,
  CheckCircle2
} from 'lucide-react';

const TenantsDashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Locataires</h1>
          <p className="text-gray-500">Gestion des locataires et suivi des contrats</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Ajouter un locataire
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total locataires"
          value="24"
          trend="+2 ce mois"
          icon={Users}
        />
        <MetricCard
          title="Taux de paiement"
          value="96%"
          trend="+1.2% vs dernier mois"
          icon={CheckCircle2}
        />
        <MetricCard
          title="Loyers en retard"
          value="2"
          trend="1 500 €"
          icon={Clock}
          alert
        />
        <MetricCard
          title="Baux à renouveler"
          value="3"
          trend="Dans les 3 mois"
          icon={FileText}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des locataires</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Locataire</TableHead>
                <TableHead>Logement</TableHead>
                <TableHead>Statut paiement</TableHead>
                <TableHead>Fin de bail</TableHead>
                <TableHead>Dépôt de garantie</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tenant.name}</div>
                      <div className="text-sm text-gray-500">{tenant.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tenant.property}</div>
                      <div className="text-sm text-gray-500">Loyer: {tenant.rent}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      tenant.paymentStatus === 'Payé' ? 'bg-green-100 text-green-800' :
                      tenant.paymentStatus === 'En retard' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }>
                      {tenant.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tenant.leaseEnd}</div>
                      <div className="text-sm text-gray-500">{tenant.timeLeft}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`font-medium ${
                      tenant.deposit === 'Complet' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {tenant.deposit}
                    </div>
                  </TableCell>
                  <TableCell>
                    <TenantActions />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  alert?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon: Icon, alert = false }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-sm font-medium ${
            alert ? 'text-red-600' : 'text-gray-500'
          }`}>{trend}</p>
        </div>
        <div className={`p-3 rounded-lg ${
          alert ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const TenantActions = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreVertical className="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem className="flex items-center gap-2">
        <FileText className="w-4 h-4" />
        Voir le dossier
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        Envoyer un email
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        Appeler
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Ban className="w-4 h-4 text-red-600" />
        <span className="text-red-600">Signaler un incident</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const tenants = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    property: 'Apt. Paris - 75m²',
    rent: '1 500 €',
    paymentStatus: 'Payé',
    leaseEnd: '31/12/2025',
    timeLeft: '11 mois',
    deposit: 'Complet',
  },
  {
    id: 2,
    name: 'Marie Martin',
    email: 'marie.martin@email.com',
    property: 'Studio Lyon',
    rent: '680 €',
    paymentStatus: 'En attente',
    leaseEnd: '30/06/2025',
    timeLeft: '5 mois',
    deposit: 'Complet',
  },
  {
    id: 3,
    name: 'Pierre Durand',
    email: 'pierre.durand@email.com',
    property: 'T3 Bordeaux',
    rent: '950 €',
    paymentStatus: 'En retard',
    leaseEnd: '31/03/2026',
    timeLeft: '14 mois',
    deposit: 'Partiel',
  },
  {
    id: 4,
    name: 'Sophie Bernard',
    email: 'sophie.bernard@email.com',
    property: 'Local Commercial',
    rent: '2 800 €',
    paymentStatus: 'Payé',
    leaseEnd: '31/12/2027',
    timeLeft: '35 mois',
    deposit: 'Complet',
  }
];

export default TenantsDashboard;