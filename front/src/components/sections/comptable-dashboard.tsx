import React, { useState } from 'react';
import { FileText, Users, ChevronRight, Building, PieChart, Bell, Shield, Clock } from 'lucide-react';

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

export const ComptableDashboardSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: "Gestion des accès simplifiée",
      description: "Attribuez des droits personnalisés à votre comptable, vos gestionnaires et collaborateurs en quelques clics."
    },
    {
      icon: PieChart,
      title: "Vision comptable unifiée",
      description: "Centralisation des données financières et comptables accessible à tous les intervenants selon leurs rôles."
    },
    {
      icon: Shield,
      title: "Collaboration sécurisée",
      description: "Historique des actions, traçabilité complète et partage sécurisé des documents sensibles entre utilisateurs."
    }
  ];

  return (
    <div className="bg-white rounded-xl py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-600 mb-4 inline-block">
            Multi-utilisateurs & Collaboration
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Un <span className="text-blue-500">espace collaboratif</span> pour toute votre équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Propriétaires, gestionnaires, comptables : travaillez ensemble efficacement avec des accès personnalisés pour chaque intervenant.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <div className="relative mb-16">
            <img
              src="/screenshots/comptable-dashboard.png"
              alt="Interface de gestion collaborative"
              className="rounded-2xl shadow-xl border border-gray-200 w-full"
            />
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-100">
              Interface partagée en temps réel
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

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Jusqu'à 3 utilisateurs inclus dans l'offre Professional
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 font-medium text-lg shadow-lg group">
            Configurer mes accès collaborateurs
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComptableDashboardSection;