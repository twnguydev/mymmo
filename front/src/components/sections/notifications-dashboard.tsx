import React, { useState } from 'react';
import { Bell, ChevronRight, Zap, Settings, Users2, Workflow } from 'lucide-react';

interface FeaturePointProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeaturePoint: React.FC<FeaturePointProps> = ({ title, description, icon: Icon, isHovered }) => (
  <div className="group relative p-6 rounded-2xl transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 bg-blue-100">
          <Icon className="w-6 h-6 transition-colors duration-300 text-blue-600" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export const NotificationsDashboardSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Workflow,
      title: "Automatisations intelligentes",
      description: "Configurez des scénarios automatisés pour les tâches récurrentes : relances, quittances, états des lieux, rappels de travaux..."
    },
    {
      icon: Users2,
      title: "Notifications par profil",
      description: "Personnalisez les notifications selon le rôle : propriétaires, gestionnaires, locataires ou prestataires de services."
    },
    {
      icon: Settings,
      title: "Paramétrage flexible",
      description: "Définissez quand et comment chaque intervenant est notifié. Email, SMS, ou notification push selon l'urgence."
    }
  ];

  const notificationTypes = [
    {
      role: "Collaborateurs",
      examples: ["Validation de documents", "Alertes impayés", "Fin de mandat"]
    },
    {
      role: "Locataires",
      examples: ["Quittances", "Demandes intervention", "Fin de bail"]
    },
    {
      role: "Prestataires",
      examples: ["Nouvelles missions", "Rappels intervention", "Validation devis"]
    }
  ];

  return (
    <div className="bg-white rounded-xl py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-600 mb-4 inline-block">
            Communication & Automatisation
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Des <span className="text-blue-500">notifications</span> pour chaque intervenant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gardez tous les acteurs de votre gestion locative informés automatiquement, au bon moment et avec les bonnes informations.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <div className="relative mb-20">
            <img
              src="/screenshots/notifications-dashboard.png"
              alt="Paramétrage des notifications"
              className="rounded-2xl shadow-xl border border-gray-200 w-full"
            />
            
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
              <div className="flex justify-center gap-4 flex-wrap">
                {notificationTypes.map((type, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200 flex items-center gap-2">
                    <Bell className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{type.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeaturePoint
                key={index}
                {...feature}
                isHovered={hoveredFeature === index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notificationTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold mb-3 text-gray-900">{type.role}</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600">{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 font-medium text-lg shadow-lg group">
              Configurer mes notifications
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDashboardSection;