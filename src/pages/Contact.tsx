import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our property reports? Need help with your account? 
            We're here to help you make informed property decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elevated p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="input-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="input-primary min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">support@propertypack.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+44 20 7123 4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9am-6pm GMT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      123 Tech Hub<br />
                      London, SW1A 1AA<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">General Inquiries</span>
                  <span className="text-sm font-medium text-primary">24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical Support</span>
                  <span className="text-sm font-medium text-primary">4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sales Questions</span>
                  <span className="text-sm font-medium text-primary">2 hours</span>
                </div>
              </div>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="/generate" 
                  className="block text-sm text-primary hover:underline"
                >
                  Generate a Property Pack
                </a>
                <a 
                  href="/pricing" 
                  className="block text-sm text-primary hover:underline"
                >
                  View Pricing Plans
                </a>
                <a 
                  href="#" 
                  className="block text-sm text-primary hover:underline"
                >
                  Help Center & FAQ
                </a>
                <a 
                  href="#" 
                  className="block text-sm text-primary hover:underline"
                >
                  Sample Reports
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Try generating your first property pack today. No commitment required.
            </p>
            <Button className="btn-hero" onClick={() => window.location.href = '/generate'}>
              Generate Property Pack
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;