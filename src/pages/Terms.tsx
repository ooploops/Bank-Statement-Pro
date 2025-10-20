import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

interface TermsProps {
  onBack: () => void
}

export default function Terms({ onBack }: TermsProps) {
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
          <h1 className="text-4xl font-bold mb-4">Bank Statement Pro - Terms of Service</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> October 19, 2025<br />
            <strong>Last Updated:</strong> October 19, 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
          <p className="mb-6">
            By downloading, installing, or using Bank Statement Pro ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Description of Service</h2>
          <p className="mb-6">
            Bank Statement Pro is a macOS application that processes financial documents with privacy-protected AI processing and offers 3 free generations for testing, with unlimited AI-powered features available through a subscription service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Free Download</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Download and install the App at no cost from the Mac App Store</li>
            <li>Import and view financial documents</li>
            <li>3 free AI generations for testing the app's capabilities</li>
            <li>Export processed data in multiple formats</li>
            <li>No account required for download</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Premium Subscription Features</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Unlimited AI-powered transaction categorization and data cleaning</li>
            <li>Advanced merchant identification and description enhancement</li>
            <li>Real-time streaming processing capabilities</li>
            <li>Enhanced accuracy through GPT-4 processing</li>
            <li>Requires active monthly subscription ($20/month)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">User Account and Subscription</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Subscription Management</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Subscriptions are managed through your Apple ID</li>
            <li>Billing is handled securely by Apple's App Store</li>
            <li>You may cancel your subscription at any time through Apple ID settings</li>
            <li>Subscription features require an active internet connection</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatic Renewal</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Subscriptions automatically renew unless cancelled at least 24 hours before the current period ends</li>
            <li>Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period</li>
            <li>You can manage and cancel subscriptions in your Apple ID account settings</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptable Use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Permitted Uses</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Process your own financial documents and data</li>
            <li>Use the App for legitimate financial record-keeping and analysis</li>
            <li>Export and share processed data as needed for business or personal use</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Prohibited Uses</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Upload documents that do not belong to you without proper authorization</li>
            <li>Use the App for illegal activities or fraud</li>
            <li>Attempt to reverse engineer, modify, or distribute the App</li>
            <li>Share your subscription access with unauthorized users</li>
            <li>Process documents containing illegal content</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data and Privacy</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Your Data Rights</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You retain full ownership of your financial documents and data</li>
            <li>All processing happens locally on your Mac when possible</li>
            <li>AI features process only redacted text (no personal identifiers)</li>
            <li>You can delete all data at any time through the App</li>
            <li>No data is stored on external servers after processing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Security</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We implement industry-standard security measures</li>
            <li>All network communications use HTTPS encryption</li>
            <li>Personal information is automatically redacted before cloud processing</li>
            <li>Your subscription is managed securely through Apple's systems</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">App Ownership</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Bank Statement Pro and all related intellectual property are owned by us</li>
            <li>You are granted a limited, non-exclusive license to use the App</li>
            <li>This license does not grant you ownership rights to the App</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Content</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You retain all rights to your financial documents and processed data</li>
            <li>You grant us a limited license to process your data solely to provide the service</li>
            <li>We do not claim ownership of your financial information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Service Availability</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Uptime and Maintenance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We strive to maintain high service availability for AI features</li>
            <li>Scheduled maintenance may temporarily limit AI processing capabilities</li>
            <li>Service interruptions do not extend subscription periods</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Service</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We may modify, update, or discontinue features with reasonable notice</li>
            <li>Critical security updates may be implemented immediately</li>
            <li>Subscription pricing may change with 30 days advance notice for existing users</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Service Limitations</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The App is provided "as is" without warranties of any kind</li>
            <li>We do not guarantee perfect accuracy in data processing</li>
            <li>Users should verify processed data before making financial decisions</li>
            <li>We are not liable for financial losses resulting from data processing errors</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Damages Limitation</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Our liability is limited to the amount paid for subscription services in the past 12 months</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>Some jurisdictions do not allow these limitations, so they may not apply to you</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">User Termination</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You may stop using the App and cancel your subscription at any time</li>
            <li>Cancellation takes effect at the end of your current billing period</li>
            <li>You may delete all local data through the App settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Service Termination</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We may terminate or suspend access for violations of these Terms</li>
            <li>We may discontinue the service with 30 days notice</li>
            <li>Upon termination, your right to use AI features ends immediately</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Dispute Resolution</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Governing Law</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>These Terms are governed by the laws of [Your State/Country]</li>
            <li>Disputes will be resolved in the courts of [Your Jurisdiction]</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Contact for Issues</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>For technical support: support@bankstatementpro.com</li>
            <li>For billing issues: Contact Apple Support (for subscription matters)</li>
            <li>For legal matters: legal@bankstatementpro.com</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>We may update these Terms from time to time</li>
            <li>Changes will be posted in the App and on our website</li>
            <li>Continued use of the App constitutes acceptance of updated Terms</li>
            <li>Material changes will be communicated with 30 days advance notice</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance and Regulations</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Financial Regulations</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Users are responsible for compliance with applicable financial regulations</li>
            <li>The App is a tool for data processing, not financial or legal advice</li>
            <li>Consult qualified professionals for financial and legal guidance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Export Controls</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The App may be subject to export control laws</li>
            <li>Users are responsible for compliance with applicable export regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Miscellaneous</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Entire Agreement</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>These Terms, together with our Privacy Policy, constitute the entire agreement</li>
            <li>No other agreements or understandings apply unless in writing</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Severability</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>If any part of these Terms is found unenforceable, the remainder remains in effect</li>
            <li>Invalid provisions will be replaced with enforceable terms of similar effect</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Assignment</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You may not assign your rights under these Terms</li>
            <li>We may assign our rights and obligations with reasonable notice</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p className="mb-6">
            For questions about these Terms of Service:<br />
            • <strong>Email:</strong> legal@bankstatementpro.com<br />
            • <strong>Support:</strong> support@bankstatementpro.com<br />
            • <strong>Privacy Questions:</strong> privacy@bankstatementpro.com
          </p>

          <div className="border-t border-border pt-8 mt-12">
            <p className="text-center text-muted-foreground italic mb-4">
              By using Bank Statement Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
