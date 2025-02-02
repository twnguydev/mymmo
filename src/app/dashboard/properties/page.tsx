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
  Home,
  PlusCircle,
  Download,
  MoreVertical,
  TrendingUp,
  Building,
  Euro,
  Users
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PropertyFormModal from '@/components/modales/new-property';

const PropertiesDashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Biens immobiliers</h1>
          <p className="text-gray-500">Gérez votre portfolio immobilier</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exporter
          </Button>
          <PropertyFormModal />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Valeur du portfolio"
          value="1 250 000 €"
          trend="+12.3%"
          icon={Building}
        />
        <MetricCard
          title="Revenus locatifs"
          value="8 500 €/mois"
          trend="+5.2%"
          icon={Euro}
        />
        <MetricCard
          title="Rentabilité moyenne"
          value="5.8%"
          trend="+0.4%"
          icon={TrendingUp}
        />
        <MetricCard
          title="Taux d'occupation"
          value="95%"
          trend="+2.1%"
          icon={Users}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des biens</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bien</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Loyer</TableHead>
                <TableHead>Rentabilité</TableHead>
                <TableHead>Prochain paiement</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.name}</div>
                      <div className="text-sm text-gray-500">{property.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      property.status === 'Occupé' ? 'bg-green-100 text-green-800' :
                        property.status === 'Vacant' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                    }>
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.rent}</div>
                      <div className="text-sm text-gray-500">dont {property.charges} de charges</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {property.yield}
                      <TrendingUp className={`w-4 h-4 ${parseFloat(property.yield) > 5 ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{property.nextPayment}</div>
                      <div className="text-sm text-gray-500">{property.paymentStatus}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <PropertyActions />
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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, icon: Icon }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm font-medium text-green-600">{trend}</p>
        </div>
        <div className="bg-blue-50 flex items-center p-3 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </CardContent>
  </Card>
);

const PropertyActions = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreVertical className="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        Voir détails
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        Gérer locataires
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Euro className="w-4 h-4" />
        Suivi financier
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const properties = [
  {
    id: 1,
    name: 'Appartement Paris',
    address: '123 rue de Paris, 75001 Paris',
    status: 'Occupé',
    rent: '1 500 €',
    charges: '200 €',
    yield: '5.8%',
    nextPayment: '05/02/2025',
    paymentStatus: 'En attente'
  },
  {
    id: 2,
    name: 'Studio Lyon',
    address: '45 rue de Lyon, 69001 Lyon',
    status: 'Occupé',
    rent: '680 €',
    charges: '80 €',
    yield: '6.2%',
    nextPayment: '05/02/2025',
    paymentStatus: 'Payé'
  },
  {
    id: 3,
    name: 'T3 Bordeaux',
    address: '78 cours Victor Hugo, 33000 Bordeaux',
    status: 'Vacant',
    rent: '950 €',
    charges: '120 €',
    yield: '4.9%',
    nextPayment: '-',
    paymentStatus: 'Vacant'
  },
  {
    id: 4,
    name: 'Local Commercial',
    address: '12 avenue des Champs-Élysées, 75008 Paris',
    status: 'Occupé',
    rent: '2 800 €',
    charges: '350 €',
    yield: '7.1%',
    nextPayment: '01/02/2025',
    paymentStatus: 'En retard'
  }
];

export default PropertiesDashboard;