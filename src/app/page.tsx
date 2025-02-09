'use client';

import React, { useState } from 'react';
import { Calculator, Target, ChartBar, FileText, Layout, BadgeCheck, Users, BookOpenCheck, ArrowUpRight, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { InvestmentSupportSection } from '@/components/sections/investment';
import { DashboardSection } from '@/components/sections/tenant-dashboard';
import { PricingSection } from '@/components/sections/pricing';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import ComptableDashboardSection from '@/components/sections/comptable-dashboard';
import PropertiesDashboardSection from '@/components/sections/properties-dashboard';
import NotificationsDashboardSection from '@/components/sections/notifications-dashboard';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  color: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, color, Icon, className = "" }) => (
  <div className={`relative rounded-[32px] p-4 sm:p-6 lg:p-8 md:-mr-6 transition-transform hover:scale-105 hover:-rotate-0 lg:hover:-rotate-[10deg] ${className}`}>
    <div className="mb-4 sm:mb-6">
      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${color === 'white' ? 'bg-black' : 'bg-gray-100'}`}>
        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${color === 'white' ? 'text-white' : 'text-black'}`} />
      </div>
    </div>
    <div>
      <h3 className={`text-xl lg:text-3xl font-bold mb-1 ${color === 'white' ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
      <p className={`text-lg lg:text-2xl mb-4 sm:mb-6 ${color === 'white' ? 'text-white/80' : 'text-gray-500'}`}>{subtitle}</p>
      <button className={`text-xs flex items-center ${color === 'white' ? 'text-white/80' : 'text-gray-400'}`}>
        En savoir plus
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
        </svg>
      </button>
    </div>
  </div>
);

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="min-h-screen bg-gray-200 overflow-hidden">
        <div className="relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <Navbar isLoginPage={false} />

          <div className="max-w-6xl mx-auto px-4 pt-4 pb-40 relative">
            {/* Top Bar Alert */}
            {/* <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2 animate-fade-in-down">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Offre de lancement : 3 mois gratuits</span>
              </div>
            </div> */}

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                    <span>Nouveau</span>
                    <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                    <span>Intelligence Artificielle intégrée</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                    La gestion locative{' '}
                    avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Owneo</span>.fr
                  </h1>

                  <p className="text-xl text-gray-600 max-w-xl">
                    De la gestion de vos premiers lots à l'administration de grands portefeuilles, découvrez une nouvelle façon de gérer votre patrimoine.
                  </p>
                </div>

                {/* Target Audience Tags */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-gray-600">Bailleurs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-gray-600">SCI</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm font-medium text-gray-600">Agences immobilières</span>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl group">
                    Démarrer gratuitement
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <button className="bg-gray-100 text-gray-600 px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-2 hover:bg-transparent transition-all duration-300 font-medium group">
                    Voir la démo
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">30+</div>
                      <div className="text-sm text-gray-500">Biens gérés</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-sm text-gray-500">Documents générés</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">10+</div>
                      <div className="text-sm text-gray-500">Utilisateurs actifs</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">15k€+</div>
                      <div className="text-sm text-gray-500">Loyers gérés</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Dashboard Preview */}
              <div className="relative my-28 md:my-0">
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src="/screenshots/realestate-dashboard.png"
                    alt="Interface Owneo"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600 whitespace-nowrap">+5 nouveaux cette semaine</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-20 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-medium">IA Scoring Locataire</span>
                  </div>
                </div>
                <div className="absolute -bottom-24 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <BookOpenCheck className="w-6 h-6 text-blue-500" />
                    <span className="text-sm font-medium">Documents Automatisés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl flex flex-col gap-12 mb-12 mx-auto px-4">
          <PropertiesDashboardSection />
          <DashboardSection />
          <ComptableDashboardSection />
          <NotificationsDashboardSection />
          <InvestmentSupportSection />
          <PricingSection />
        </div>

        <section className="bg-blue-600 py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2),transparent_60%)]" />
          </div>
          <div className="max-w-5xl mx-auto px-6 relative z-50">
            <div className="text-center text-white">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 mr-2" />
                Offre de lancement : 3 mois gratuits
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simplifiez la gestion de votre patrimoine immobilier
              </h2>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 10 000 propriétaires qui font confiance à Owneo pour gérer sereinement leurs biens et optimiser leurs revenus locatifs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 text-left">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gestion simplifiée</h3>
                    <p className="text-sm text-blue-100">Documents, quittances et relances automatisés</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Suivi optimal</h3>
                    <p className="text-sm text-blue-100">Tableau de bord et alertes en temps réel</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Rentabilité optimisée</h3>
                    <p className="text-sm text-blue-100">IA et outils d'analyse pour maximiser vos revenus</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <button className="group px-8 py-4 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl">
                  Démarrer gratuitement
                  <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <p className="text-sm text-blue-100 flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                Plus de 1000 avis positifs sur Trustpilot
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 201" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 200L48 185.7C96 171.3 192 142.7 288 128.5C384 114.3 480 114.3 576 123.8C672 133.3 768 152.3 864 161.8C960 171.3 1056 171.3 1152 166.5C1248 161.7 1344 152.3 1392 147.7L1440 143V201H1392C1344 201 1248 201 1152 201C1056 201 960 201 864 201C768 201 672 201 576 201C480 201 384 201 288 201C192 201 96 201 48 201H0Z"
                fill="#E5E7EB"
              />
            </svg>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}