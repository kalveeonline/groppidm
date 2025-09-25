import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, User, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Footer } from "@/components/Footer";

export const AppointmentPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    requirement: '',
    contactTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.requirement) {
      toast({
        title: t('appointment.error'),
        description: t('appointment.errorMessage'),
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: t('appointment.success'),
      description: t('appointment.successMessage'),
    });
    
    // Reset form
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      requirement: '',
      contactTime: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-subtle">
      <div className="container px-4 py-12">
        {/* Language Selector */}
        <div className="absolute top-24 right-6 z-10">
          <LanguageSelector variant="outline" />
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('appointment.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('appointment.description')}
            </p>
          </div>

          {/* Appointment Form */}
          <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                {t('appointment.formTitle')}
              </CardTitle>
              <CardDescription>
                {t('appointment.formDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {t('appointment.name')}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('appointment.namePlaceholder')}
                    required
                  />
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {t('appointment.address')}
                  </Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder={t('appointment.addressPlaceholder')}
                    rows={3}
                  />
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {t('appointment.phone')}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder={t('appointment.phonePlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {t('appointment.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={t('appointment.emailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Requirement Field */}
                <div className="space-y-2">
                  <Label htmlFor="requirement">
                    {t('appointment.requirement')}
                  </Label>
                  <Textarea
                    id="requirement"
                    value={formData.requirement}
                    onChange={(e) => handleInputChange('requirement', e.target.value)}
                    placeholder={t('appointment.requirementPlaceholder')}
                    rows={4}
                    required
                  />
                </div>

                {/* Contact Time */}
                <div className="space-y-2">
                  <Label htmlFor="contactTime" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {t('appointment.contactTime')}
                  </Label>
                  <Select value={formData.contactTime} onValueChange={(value) => handleInputChange('contactTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('appointment.contactTimePlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">{t('appointment.morning')}</SelectItem>
                      <SelectItem value="afternoon">{t('appointment.afternoon')}</SelectItem>
                      <SelectItem value="evening">{t('appointment.evening')}</SelectItem>
                      <SelectItem value="anytime">{t('appointment.anytime')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero transition-all duration-300 hover:shadow-lg hover:scale-105"
                  size="lg"
                >
                  {t('appointment.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              {t('appointment.contactInfo')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://wa.me/32495633832', '_blank')}
              >
                {t('appointment.whatsapp')}
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = 'tel:+32495633832'}
              >
                {t('appointment.call')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};