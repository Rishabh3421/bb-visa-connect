import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface EnquiryFormProps {
  className?: string;
  compact?: boolean;
}

const EnquiryForm = ({ className, compact = false }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const visaTypes = [
    "Student Visa",
    "Work Visa", 
    "Tourist/Visitor Visa",
    "PR & Immigration",
    "Business/Investor Visa",
    "Family/Dependent Visa"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.visaType) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      setLoading(false);
      return;
    }

    // Create WhatsApp message
    const message = `
🌟 NEW ENQUIRY - Bridge for Borders Immigration 🌟

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🎯 Visa Type: ${formData.visaType}

Please provide a free assessment for my immigration needs.
    `.trim();

    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/918396000445?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Enquiry Sent Successfully!",
        description: "Your details have been sent to our WhatsApp. We'll contact you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        visaType: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send enquiry. Please try again.",
      });
    }

    setLoading(false);
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
          <Select value={formData.visaType} onValueChange={(value) => handleInputChange("visaType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Visa Type" />
            </SelectTrigger>
            <SelectContent>
              {visaTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full gradient-gold text-white font-semibold py-3 transition-smooth hover:shadow-gold"
        >
          {loading ? "Sending..." : "Get Free Assessment"}
        </Button>
      </form>
    );
  }

  return (
    <Card className={`gradient-card shadow-card ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gradient-gold">
          Get Your Free Assessment
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Fill out the form below and our expert will contact you within 24 hours
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="visaType">Visa Type *</Label>
            <Select value={formData.visaType} onValueChange={(value) => handleInputChange("visaType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select the type of visa you're interested in" />
              </SelectTrigger>
              <SelectContent>
                {visaTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full gradient-gold text-white font-semibold py-3 text-lg transition-smooth hover:shadow-gold"
          >
            {loading ? "Sending Enquiry..." : "Get Free Assessment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnquiryForm;