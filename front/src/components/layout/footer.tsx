import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield, Award, Building2, ArrowRight } from 'lucide-react';
import { Logo } from './navbar';

export const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-6xl mx-auto px-8 md:px-4">

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-4">
                <Logo />
              </h3>
              <p className="text-gray-600 text-sm">
                Votre solution tout-en-un pour gérer et optimiser vos biens immobiliers. Plus de 10 000 propriétaires nous font confiance.
              </p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:contact@owneo.fr" className="flex items-center text-sm text-gray-600 hover:text-blue-500">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@owneo.fr
                </a>
                <a href="tel:+33123456789" className="flex items-center text-sm text-gray-600 hover:text-blue-500">
                  <Phone className="w-4 h-4 mr-2" />
                  01 23 45 67 89
                </a>
                <span className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Paris, France
                </span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Produit</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/features" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Démo
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Ressources</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/blog" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog Immobilier
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Guides Pratiques
                  </Link>
                </li>
                <li>
                  <Link href="/academy" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Owneo Academy
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Centre d'aide
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Communauté
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Sécurité
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    CGU
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="group flex items-center text-gray-600 hover:text-blue-500">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Données sécurisées</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Award className="w-5 h-5" />
              <span className="text-sm">4.9/5 sur Trustpilot</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Building2 className="w-5 h-5" />
              <span className="text-sm">+10 000 biens gérés</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Owneo. Tous droits réservés. Owneo est une marque déposée.
          </p>
        </div>
      </div>
    </footer>
  );
};