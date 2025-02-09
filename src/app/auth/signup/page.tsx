'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Star, ArrowRight, Check, ChevronRight } from 'lucide-react';

const SignupUI = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex-1 hidden lg:flex items-center justify-center relative">
        <div className="max-w-2xl px-8">
          {/* Value Proposition */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>3 mois offerts aux 500 premiers inscrits</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Commencez à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                optimiser votre patrimoine
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              En 2 minutes, accédez à tous vos outils de gestion locative.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-4 mb-12">
            {[
              "Import facile de vos biens existants",
              "Création automatique des documents",
              "Invitation de vos collaborateurs",
              "Support réactif 6j/7",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Créez votre compte</h2>
              <p className="text-gray-600">Démarrez votre essai gratuit</p>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                {/* Step 1: Basic Info */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    className="bg-white"
                  />
                </div>

                <Button 
                  className="w-full bg-gray-900 hover:bg-blue-600 transition-colors group"
                  onClick={() => setStep(2)}
                >
                  <span>Continuer</span>
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Déjà un compte ?{' '}
                    <a href="/auth" className="text-blue-600 hover:text-blue-800 font-medium">
                      Se connecter
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Step 2: Account Type */}
                <div className="space-y-4">
                  <Label className="text-center block">Je suis...</Label>
                  <Button
                    variant={userType === 'individual' ? 'default' : 'outline'}
                    className="w-full mb-3 h-auto py-4 justify-start"
                    onClick={() => setUserType('individual')}
                  >
                    <div className="flex items-start">
                      <div className="mr-3">🏠</div>
                      <div className="text-left">
                        <div className="font-semibold">Propriétaire individuel</div>
                        <div className="text-sm text-gray-500">Je gère mes biens personnels</div>
                      </div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={userType === 'company' ? 'default' : 'outline'}
                    className="w-full h-auto py-4 justify-start"
                    onClick={() => setUserType('company')}
                  >
                    <div className="flex items-start">
                      <div className="mr-3">🏢</div>
                      <div className="text-left">
                        <div className="font-semibold">Société / SCI</div>
                        <div className="text-sm text-gray-500">Je gère un portefeuille professionnel</div>
                      </div>
                    </div>
                  </Button>
                </div>

                <Button 
                  className="w-full bg-gray-900 hover:bg-blue-600 transition-colors group"
                  onClick={() => console.log('Finalize signup')}
                >
                  <span>Commencer gratuitement</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <button 
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-500 hover:text-gray-700 w-full text-center"
                >
                  Retour
                </button>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                En créant un compte, vous acceptez nos{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Conditions d'utilisation
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupUI;