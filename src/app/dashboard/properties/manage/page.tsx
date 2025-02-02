'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FileText, CalendarDays } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TenantForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    property: '',
    startDate: '',
    endDate: '',
    deposit: '',
    monthlyRent: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <CardTitle>Ajouter un Locataire</CardTitle>
              <p className="text-sm text-gray-500">Renseignez les informations du locataire</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="personal">Informations Personnelles</TabsTrigger>
              <TabsTrigger value="lease">Bail</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jean"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="lease">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="property">Bien loué</Label>
                    <Select name="property" onValueChange={(value) => setFormData(prev => ({ ...prev, property: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le bien" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paris">Appartement Paris</SelectItem>
                        <SelectItem value="lyon">Studio Lyon</SelectItem>
                        <SelectItem value="bordeaux">T3 Bordeaux</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyRent">Loyer mensuel (€)</Label>
                    <Input
                      type="number"
                      name="monthlyRent"
                      value={formData.monthlyRent}
                      onChange={handleInputChange}
                      placeholder="1200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Date de début</Label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">Date de fin</Label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deposit">Dépôt de garantie (€)</Label>
                    <Input
                      type="number"
                      name="deposit"
                      value={formData.deposit}
                      onChange={handleInputChange}
                      placeholder="2400"
                    />
                  </div>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="documents">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DocumentUpload title="Pièce d'identité" icon={FileText} />
                  <DocumentUpload title="Justificatif de domicile" icon={FileText} />
                  <DocumentUpload title="Attestation d'assurance" icon={FileText} />
                  <DocumentUpload title="Bulletins de salaire" icon={FileText} />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-4 mt-8">
            <Button variant="outline">Annuler</Button>
            <Button>Enregistrer le locataire</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface DocumentUploadProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ title, icon: Icon }) => (
  <div className="border-2 border-dashed rounded-lg p-4 text-center space-y-2">
    <Icon className="w-8 h-8 mx-auto text-gray-400" />
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-gray-500">Glissez ou cliquez pour télécharger</p>
    <Button variant="outline" size="sm" className="w-full">Parcourir</Button>
  </div>
);

export default TenantForm;