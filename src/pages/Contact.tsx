import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import { useEffect } from "react"

interface ContactProps {
  onBack: () => void
}

export default function Contact({ onBack }: ContactProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about Bank Statement Pro? We'd love to hear from you.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <a 
                href="mailto:hi@speedysite.co?subject=Bank Statement Pro - Inquiry"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                hi@speedysite.co
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond within 24 hours
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 text-sm">
              <div>
                <h4 className="font-semibold mb-2">General Support</h4>
                <p className="text-muted-foreground">Questions about features, billing, or getting started</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Issues</h4>
                <p className="text-muted-foreground">Bug reports, performance issues, or troubleshooting</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Feature Requests</h4>
                <p className="text-muted-foreground">Ideas for new features or improvements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
