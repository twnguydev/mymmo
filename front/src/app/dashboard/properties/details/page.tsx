import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  FileText,
  History,
  TrendingUp,
  Settings,
  Upload,
  PlusCircle,
  Edit,
  Download,
  Calendar,
  Wrench,
  AlertCircle
} from 'lucide-react';

const PropertyDetails = () => {
  return (
    <>
      {/* En-tête */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Appartement Paris - 75m²</h1>
            <Badge className="bg-green-100 text-green-800">Occupé</Badge>
          </div>
          <p className="text-gray-500">123 rue de Paris, 75001 Paris</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            Modifier
          </Button>
          <Button className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Gérer
          </Button>
        </div>
      </div>

      {/* Contenu principal */}
      <Tabs defaultValue="infos" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full">
          <TabsTrigger value="infos">Informations</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="works">Travaux</TabsTrigger>
          <TabsTrigger value="forecasts">Prévisions</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        {/* Onglet Informations */}
        <TabsContent value="infos">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Informations principales */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Principales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem label="Type" value="Appartement" />
                <InfoItem label="Surface" value="75 m²" />
                <InfoItem label="Étage" value="3ème" />
                <InfoItem label="DPE" value="C" />
                <InfoItem label="Année construction" value="1985" />
                <InfoItem label="Places parking" value="1" />
              </CardContent>
            </Card>

            {/* Informations financières */}
            <Card>
              <CardHeader>
                <CardTitle>Informations Financières</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem label="Prix d'achat" value="350 000 €" />
                <InfoItem label="Loyer actuel" value="1 500 €" />
                <InfoItem label="Charges copro" value="200 €/mois" />
                <InfoItem label="Taxe foncière" value="1 200 €/an" />
                <InfoItem label="Assurance PNO" value="280 €/an" />
                <InfoItem label="Rentabilité brute" value="5.14%" />
              </CardContent>
            </Card>

            {/* Locataire actuel */}
            <Card>
              <CardHeader>
                <CardTitle>Locataire Actuel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem label="Nom" value="Jean Dupont" />
                <InfoItem label="Début bail" value="01/03/2023" />
                <InfoItem label="Fin bail" value="28/02/2026" />
                <InfoItem label="Dépôt garantie" value="1 500 €" />
                <InfoItem label="Contact" value="06 12 34 56 78" />
                <Button variant="outline" className="w-full">Voir profil complet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Documents */}
        <TabsContent value="documents">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Documents du Bien</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DocumentGroup
                    title="Documents d'acquisition"
                    documents={[
                      { name: "Acte de vente", date: "15/01/2022", size: "2.4 MB" },
                      { name: "État des lieux", date: "15/01/2022", size: "1.8 MB" },
                    ]}
                  />
                  <DocumentGroup
                    title="Documents techniques"
                    documents={[
                      { name: "Diagnostic DPE", date: "10/01/2022", size: "3.1 MB" },
                      { name: "Plan appartement", date: "10/01/2022", size: "1.2 MB" },
                    ]}
                  />
                  <Button className="w-full mt-4" variant="outline">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Ajouter un document
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents Locatifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DocumentGroup
                    title="Bail en cours"
                    documents={[
                      { name: "Contrat de bail", date: "01/03/2023", size: "1.5 MB" },
                      { name: "État des lieux", date: "01/03/2023", size: "2.8 MB" },
                    ]}
                  />
                  <DocumentGroup
                    title="Quittances récentes"
                    documents={[
                      { name: "Quittance Janvier 2025", date: "25/01/2025", size: "0.5 MB" },
                      { name: "Quittance Décembre 2024", date: "25/12/2024", size: "0.5 MB" },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Travaux */}
        <TabsContent value="works">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Historique des Travaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <WorkItem
                    title="Rénovation salle de bain"
                    date="15/12/2024"
                    cost="4 500 €"
                    status="completed"
                    description="Remplacement baignoire, meuble vasque et carrelage mural"
                  />
                  <WorkItem
                    title="Remplacement chaudière"
                    date="En cours"
                    cost="3 200 €"
                    status="in-progress"
                    description="Installation nouvelle chaudière à condensation"
                  />
                  <WorkItem
                    title="Peinture salon"
                    date="Planifié - Mars 2025"
                    cost="1 800 €"
                    status="planned"
                    description="Réfection complète des murs et plafonds"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Travaux Prévus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Ajouter des travaux
                  </Button>
                  <div className="pt-4 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Budget travaux 2025</span>
                        <span>7 500 € / 10 000 €</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Prévisions */}
        <TabsContent value="forecasts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Échéances à Venir</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ForecastItem
                    icon={TrendingUp}
                    title="Révision de loyer"
                    date="01/03/2025"
                    description="Augmentation prévue : +2.1% (IRL)"
                    type="info"
                  />
                  <ForecastItem
                    icon={Calendar}
                    title="Assemblée générale"
                    date="15/03/2025"
                    description="Copropriété - Budget travaux"
                    type="warning"
                  />
                  <ForecastItem
                    icon={AlertCircle}
                    title="Fin garantie chaudière"
                    date="20/04/2025"
                    description="Contrat d'entretien à prévoir"
                    type="alert"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prévisions Financières</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Charges prévisionnelles 2025</h3>
                    <div className="space-y-3">
                      <CostForecast
                        label="Charges copropriété"
                        current="200 €"
                        forecast="215 €"
                        change="+7.5%"
                      />
                      <CostForecast
                        label="Taxe foncière"
                        current="1 200 €"
                        forecast="1 260 €"
                        change="+5%"
                      />
                      <CostForecast
                        label="Assurance PNO"
                        current="280 €"
                        forecast="295 €"
                        change="+5.4%"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Historique */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Historique du Bien</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <HistoryItem
                  date="01/02/2025"
                  title="Paiement loyer reçu"
                  description="1 500 € - Février 2025"
                />
                <HistoryItem
                  date="15/01/2025"
                  title="Intervention plombier"
                  description="Réparation fuite sous évier - 180 €"
                />
                <HistoryItem
                  date="01/01/2025"
                  title="Paiement loyer reçu"
                  description="1 500 € - Janvier 2025"
                />
                <HistoryItem
                  date="15/12/2024"
                  title="Fin des travaux salle de bain"
                  description="Rénovation complète - 4 500 €"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }: InfoItemProps) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

interface DocumentGroupProps {
  title: string;
  documents: { name: string; date: string; size: string }[];
}

const DocumentGroup: React.FC<DocumentGroupProps> = ({ title, documents }: DocumentGroupProps) => (
  <div className="space-y-3">
    <h3 className="font-medium text-sm text-gray-600">{title}</h3>
    <div className="space-y-2">
      {documents.map((doc, idx) => (
        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-blue-600" />
            <div>
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-500">
                {doc.date} - {doc.size}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

interface WorkItemProps {
  title: string;
  date: string;
  cost: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, date, cost, status, description }) => (
  <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
    <Wrench className={`w-5 h-5 mt-1 ${
      status === 'completed' ? 'text-green-600' :
      status === 'in-progress' ? 'text-blue-600' :
      'text-yellow-600'
    }`} />
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Badge variant={
          status === 'completed' ? 'destructive' :
          status === 'in-progress' ? 'default' :
          'secondary'
        }>
          {cost}
        </Badge>
      </div>
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </div>
  </div>
);

interface ForecastItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  date: string;
  description: string;
  type: 'info' | 'warning' | 'alert';
}

const ForecastItem: React.FC<ForecastItemProps> = ({ icon: Icon, title, date, description, type }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <div className={`p-2 rounded-full ${
      type === 'info' ? 'bg-blue-100 text-blue-600' :
      type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
      'bg-red-100 text-red-600'
    }`}>
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  </div>
);

interface CostForecastProps {
  label: string;
  current: string;
  forecast: string;
  change: string;
}

const CostForecast: React.FC<CostForecastProps> = ({ label, current, forecast, change }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="font-medium">{label}</p>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm text-gray-500">{current}</span>
        <span className="text-sm">→</span>
        <span className="text-sm font-medium">{forecast}</span>
      </div>
    </div>
    <Badge variant={change.startsWith('+') ? 'destructive' : 'secondary'}>
      {change}
    </Badge>
  </div>
);

interface HistoryItemProps {
  date: string;
  title: string;
  description: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ date, title, description }) => (
  <div className="flex gap-4">
    <div className="w-24 flex-shrink-0">
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <div className="flex-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default PropertyDetails;