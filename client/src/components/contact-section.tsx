import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Linkedin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin text-foreground mb-6 relative inline-block">
            Let's Connect
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-pink)] via-[var(--accent-purple)] to-primary rounded-full opacity-60"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-8">
            Have any questions or just want to reach out? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card rounded-2xl shadow-lg p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-card-foreground mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="w-full"
                    data-testid="input-name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-name">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="w-full"
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-email">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-card-foreground mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    placeholder="Tell me about your project or how I can help..."
                    className="w-full resize-none"
                    data-testid="textarea-message"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1" data-testid="error-message">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-6 py-3 rounded-lg text-sm font-medium"
                  data-testid="button-submit-form"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card rounded-2xl shadow-lg p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:abarrios10@utexas.edu"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                    data-testid="link-email"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all" style={{backgroundColor: 'rgba(236, 72, 153, 0.1)'}}>
                      <Mail className="h-5 w-5" style={{color: 'var(--accent-pink)'}} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">abarrios10@utexas.edu</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/andresbarrios10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                    data-testid="link-linkedin"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all" style={{backgroundColor: 'rgba(174, 62, 201, 0.1)'}}>
                      <Linkedin className="h-5 w-5" style={{color: 'var(--accent-purple)'}} />
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">LinkedIn</p>
                      <p className="text-muted-foreground text-sm">Connect professionally</p>
                    </div>
                  </a>
                  
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
