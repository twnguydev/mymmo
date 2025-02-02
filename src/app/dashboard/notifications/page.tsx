import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BellRing, Mail, AlertCircle, Calendar, RefreshCcw, 
  FileCheck, Users, UserCog, Clock, Building 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const NotificationsDashboard = () => {
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Automatisations et notifications</h1>
          <p className="text-gray-500">Gérez les communications automatiques et les alertes du système</p>
        </div>
        <Button className="flex items-center gap-2">
          <RefreshCcw className="w-4 h-4" />
          Vérifier les automatisations
        </Button>
      </div>

      {/* Dernières activités */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Dernières activités
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: FileCheck, title: "Quittances envoyées", description: "Les quittances de loyer du mois de Février ont été envoyées aux locataires", time: "Il y a 2 heures", type: "success", target: "locataires" },
              { icon: AlertCircle, title: "Retard de paiement", description: "Le loyer de l'appartement de Paris n'a pas été reçu", time: "Il y a 1 jour", type: "error", target: "proprio" },
              { icon: Calendar, title: "Renouvellement de bail", description: "Le bail du Studio Lyon arrive à échéance dans 2 mois", time: "Il y a 2 jours", type: "warning", target: "proprio" },
            ].map((notification, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' ? 'bg-green-100 text-green-600' :
                  notification.type === 'error' ? 'bg-red-100 text-red-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{notification.title}</h3>
                      <Badge variant={notification.target === 'locataires' ? 'secondary' : 'outline'}>
                        {notification.target === 'locataires' ? 'Locataires' : 'Personnel'}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-600">{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automatisations par onglets */}
      <Tabs defaultValue="tenants" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tenants" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Communications Locataires
          </TabsTrigger>
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <UserCog className="w-4 h-4" />
            Alertes Personnelles
          </TabsTrigger>
        </TabsList>

        {/* Onglet Communications Locataires */}
        <TabsContent value="tenants">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Emails Automatiques Locataires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AutomationItem
                    title="Envoi des quittances"
                    description="Envoi automatique des quittances le 25 de chaque mois"
                    badge="Mensuel"
                    lastRun="25/01/2025"
                    recipients="Tous les locataires"
                  />
                  <AutomationItem
                    title="Relance impayés"
                    description="Relance après 5 jours de retard de paiement"
                    badge="Si nécessaire"
                    lastRun="15/01/2025"
                    recipients="Locataires en retard"
                  />
                  <AutomationItem
                    title="Régularisation charges"
                    description="Envoi du décompte de charges annuel"
                    badge="Annuel"
                    lastRun="01/01/2025"
                    recipients="Tous les locataires"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Communications Bâtiment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AutomationItem
                    title="Travaux prévus"
                    description="Information sur les travaux à venir"
                    badge="Si nécessaire"
                    lastRun="05/01/2025"
                    recipients="Locataires concernés"
                  />
                  <AutomationItem
                    title="Renouvellement assurance"
                    description="Rappel de renouvellement d'attestation"
                    badge="1 mois avant"
                    lastRun="01/02/2025"
                    recipients="Locataires concernés"
                  />
                  <AutomationItem
                    title="Information importante"
                    description="Communications exceptionnelles"
                    badge="Ponctuel"
                    lastRun="20/12/2024"
                    recipients="Selon besoin"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Alertes Personnelles */}
        <TabsContent value="personal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Alertes Gestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AutomationItem
                    title="Retards de paiement"
                    description="Alerte dès le premier jour de retard"
                    badge="Automatique"
                    lastRun="02/02/2025"
                    recipients="Propriétaire uniquement"
                  />
                  <AutomationItem
                    title="Fin de bail"
                    description="Notification 3 mois avant échéance"
                    badge="Trimestriel"
                    lastRun="01/02/2025"
                    recipients="Propriétaire uniquement"
                  />
                  <AutomationItem
                    title="Révision des loyers"
                    description="Calcul des révisions à effectuer"
                    badge="Annuel"
                    lastRun="01/01/2025"
                    recipients="Propriétaire uniquement"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BellRing className="w-5 h-5" />
                  Rapports et Analyses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AutomationItem
                    title="Rapport mensuel"
                    description="Synthèse des loyers et incidents"
                    badge="Mensuel"
                    lastRun="01/02/2025"
                    recipients="Propriétaire uniquement"
                  />
                  <AutomationItem
                    title="Analyse financière"
                    description="Performance du patrimoine"
                    badge="Trimestriel"
                    lastRun="01/01/2025"
                    recipients="Propriétaire uniquement"
                  />
                  <AutomationItem
                    title="Prévisions travaux"
                    description="Planning et budget prévisionnels"
                    badge="Annuel"
                    lastRun="01/01/2025"
                    recipients="Propriétaire uniquement"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Paramètres généraux */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Paramètres de notification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <NotificationSetting
              title="Notifications par email"
              description="Recevoir les notifications importantes par email"
            />
            <NotificationSetting
              title="Notifications quotidiennes"
              description="Résumé quotidien de l'activité"
            />
            <NotificationSetting
              title="Alertes critiques"
              description="Notifications pour les événements urgents"
              defaultChecked
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

interface AutomationItemProps {
  title: string;
  description: string;
  badge: string;
  lastRun: string;
  recipients: string;
}

const AutomationItem = ({ title, description, badge, lastRun, recipients }: AutomationItemProps) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h3 className="font-medium">{title}</h3>
        <Badge variant="secondary">{badge}</Badge>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span>Dernière exécution : {lastRun}</span>
        <span>Destinataires : {recipients}</span>
      </div>
    </div>
    <Switch />
  </div>
);

interface NotificationSettingProps {
  title: string;
  description: string;
  defaultChecked?: boolean;
}

const NotificationSetting = ({ title, description, defaultChecked }: NotificationSettingProps) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <Switch defaultChecked={defaultChecked} />
  </div>
);

export default NotificationsDashboard;