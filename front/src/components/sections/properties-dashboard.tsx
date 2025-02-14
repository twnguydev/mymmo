import React, { useState } from 'react';
import { Building2, ChevronRight, FolderTree, BarChart3, Users2 } from 'lucide-react';

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

export const PropertiesDashboardSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: FolderTree,
      title: "Organisation flexible",
      description: "Structurez vos biens par portefeuille, par région ou par type. Filtrez et retrouvez rapidement les informations essentielles."
    },
    {
      icon: BarChart3,
      title: "Vue d'ensemble performante",
      description: "Visualisez en un coup d'œil l'état de vos biens : taux d'occupation, loyers, rentabilité globale et alertes importantes."
    },
    {
      icon: Users2,
      title: "Accès spécifiques",
      description: "Définissez qui peut voir et gérer quels biens. Idéal pour les copropriétaires, gestionnaires et comptables."
    }
  ];

  return (
    <div className="bg-white rounded-xl py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-blue-600 mb-4 inline-block">
            Gestion Multi-Patrimoines
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Une <span className="text-blue-500">vue globale</span> de tous vos biens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Du studio à la résidence complète, gérez l'ensemble de votre patrimoine immobilier depuis une interface unique et partagée.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <div className="relative mb-16">
            <img
              src="/screenshots/realestate-dashboard.png"
              alt="Liste des biens immobiliers"
              className="rounded-2xl shadow-xl border border-gray-200 w-full"
            />
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex gap-8">
              <div className="bg-white whitespace-nowrap text-gray-600 px-6 py-3 rounded-full text-sm font-medium border border-gray-200 shadow-sm">
                2 lots gérés gratuitement
              </div>
              <div className="bg-blue-50 whitespace-nowrap text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-100 shadow-sm">
                10 lots et plus dans l'offre Pro
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

        <div className="text-center">
          <div className="inline-flex items-center gap-8 mb-8 text-gray-600 bg-gray-50 px-8 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <span>Starter : 2 lots</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <span>Pro : 10 lots</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <span>Business : illimité</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 font-medium text-lg shadow-lg group">
            Je gère mon patrimoine
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDashboardSection;