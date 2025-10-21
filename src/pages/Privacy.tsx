import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Menu, X, Github, Mail } from "lucide-react"
import { useEffect, useState } from "react"

interface PrivacyProps {
  onBack: () => void
}

export default function Privacy({ onBack }: PrivacyProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 sm:px-4 md:px-8">
        <div className="container flex h-16 items-center">
          <div className="mr-2 flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <button 
              onClick={onBack}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-primary flex-shrink-0 hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <img src="https://res.cloudinary.com/drveridbx/image/upload/v1760684553/Bank_Statement_Pro_App_Icon_ggy8ro.png" alt="Bank Statement Pro Logo" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded" />
            </button>
            <button 
              onClick={onBack}
              className="text-sm sm:text-base md:text-lg font-bold truncate hover:text-primary transition-colors cursor-pointer text-left"
            >
              Bank Statement Pro
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="btn-animated"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="ml-2">Menu</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex justify-end md:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="">
            <div className="container py-4 space-y-4">
              <nav className="mobile-menu-centered flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  onClick={onBack}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 btn-animated text-left justify-start"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </nav>
              <Button size="sm" className="w-full btn-animated" onClick={() => { setMobileMenuOpen(false) }}>
                Download Free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Bank Statement Pro - Privacy Policy</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> October 16, 2025<br />
            <strong>Last Updated:</strong> October 16, 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
          <p className="mb-6">
            Bank Statement Pro is committed to protecting your privacy and financial data. This Privacy Policy explains how we collect, use, and protect your information when using our free download app with 3 free AI generations and subscription-based unlimited AI processing features.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection and Usage</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">What We Collect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Document Content:</strong> Text extracted from bank statements, receipts, and financial documents you choose to process</li>
            <li><strong>Processing Metadata:</strong> File names, processing dates, and document types (stored locally only)</li>
            <li><strong>Full Document Text:</strong> Complete extracted text (after automatic PII redaction) sent to our secure AI service for processing (subscription required)</li>
            <li><strong>Subscription Information:</strong> Payment processing is handled by Apple - we do not store payment details</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">What We DON'T Collect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Identifying Information:</strong> Account numbers, SSNs, addresses, phone numbers are automatically redacted before processing</li>
            <li><strong>Original Files:</strong> We never send PDF files, images, or other binary documents - only extracted text</li>
            <li><strong>Payment Information:</strong> All subscription billing is handled securely by Apple</li>
            <li><strong>Usage Analytics:</strong> We do not track how you use the app</li>
            <li><strong>Device Information:</strong> No device fingerprinting or tracking</li>
            <li><strong>Location Data:</strong> We never access your location</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Processing</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">AI-Powered Processing (3 Free Generations + Subscription)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Document text is extracted locally on your Mac using standard macOS APIs</li>
            <li>Personal information is automatically redacted before any data leaves your device</li>
            <li><strong>Complete document text</strong> (after PII redaction) is sent to our secure AI service for comprehensive analysis</li>
            <li><strong>3 free generations included</strong> for testing the app's capabilities</li>
            <li><strong>Unlimited processing requires active subscription</strong> after free generations are used</li>
            <li><strong>No personal information</strong> (account numbers, names, addresses) is included in requests due to automatic redaction</li>
            <li>AI processing happens via encrypted HTTPS connections to secure cloud servers</li>
            <li>Original binary files (PDFs, images) never leave your device - only extracted and redacted text</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage and Retention</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Local Storage:</strong> Processed documents are stored locally on your Mac only</li>
            <li><strong>No External Storage:</strong> We do not store your documents or personal data on external servers</li>
            <li><strong>No Data Retention:</strong> Document text sent for AI processing is immediately deleted after processing</li>
            <li><strong>No Training Data:</strong> Your data is never used to train or improve AI models</li>
            <li><strong>Text-Only Processing:</strong> Only extracted text (not original files) is sent for processing</li>
            <li>You can delete all local data at any time through the app settings</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Supabase & OpenAI</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Used for secure AI-powered transaction categorization and data cleaning</li>
            <li>Processes complete document text (after automatic PII redaction)</li>
            <li><strong>Does not store your data</strong> - immediate deletion after processing</li>
            <li><strong>Does not use your data for training</strong> AI models or any other purposes</li>
            <li>All communications use HTTPS encryption</li>
            <li>Only extracted and redacted text is processed - never original binary files</li>
            <li>Subject to respective privacy policies with data processing agreements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Free Download:</strong> The app is free to download with 3 free AI generations for testing</li>
            <li><strong>Subscription Control:</strong> Cancel your subscription at any time through your Apple ID settings</li>
            <li><strong>Data Access:</strong> View all processed documents in the app</li>
            <li><strong>Data Deletion:</strong> Delete individual documents or all data through app settings</li>
            <li><strong>AI Control:</strong> Unlimited AI processing features require an active subscription after free generations</li>
            <li><strong>Data Export:</strong> Export your data in multiple formats (CSV, Excel, PDF)</li>
            <li><strong>Privacy Control:</strong> All personal information is automatically redacted before any cloud processing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>All network communications use HTTPS encryption</li>
            <li>Local data is protected by macOS security features</li>
            <li>No passwords or account credentials are stored in the app</li>
            <li>PII redaction happens automatically before any network requests</li>
            <li>Subscription management is handled securely by Apple's payment system</li>
            <li>Internet connection required for AI processing features</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p className="mb-6">
            Bank Statement Pro is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Changes will be posted in the app and on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="mb-6">
            For privacy questions or concerns:<br />
            • Email: privacy@bankstatementpro.com<br />
            • Create an issue on our GitHub repository
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance</h2>
          <p className="mb-6">This app complies with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Apple App Store Guidelines</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>General Data Protection Regulation (GDPR) principles</li>
            <li>Financial data protection best practices</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Subscription and Billing</h2>
          <p className="mb-4">Bank Statement Pro operates on a freemium model:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Free Download</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Download and basic app functionality are completely free</li>
            <li>3 free AI generations included for testing</li>
            <li>Document importing and viewing capabilities</li>
            <li>Export functionality for processed documents</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Premium Subscription Features</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Unlimited AI-powered transaction extraction and categorization</li>
            <li>Advanced data cleaning and merchant identification</li>
            <li>Real-time streaming processing</li>
            <li>Monthly subscription required for unlimited AI features</li>
            <li>Billing handled securely through Apple's App Store</li>
            <li>Cancel anytime through your Apple ID account settings</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Payment Processing</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>All payments are processed by Apple</li>
            <li>We do not store or have access to your payment information</li>
            <li>Subscription management handled through Apple's secure systems</li>
            <li>Refunds and billing issues should be directed to Apple Support</li>
          </ul>

          <div className="border-t border-border pt-8 mt-12">
            <p className="text-center text-muted-foreground italic">
              Bank Statement Pro - Your financial privacy is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background px-6 sm:px-6 md:px-8 section-mobile">
        <div className="container py-8 md:py-12 px-0 max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={onBack}
                  className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <img src="https://res.cloudinary.com/drveridbx/image/upload/v1760684553/Bank_Statement_Pro_App_Icon_ggy8ro.png" alt="Bank Statement Pro Logo" className="h-5 w-5 md:h-6 md:w-6 rounded" />
                </button>
                <button 
                  onClick={onBack}
                  className="text-base md:text-lg font-bold hover:text-primary transition-colors cursor-pointer"
                >
                  Bank Statement Pro
                </button>
              </div>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">
                Transform messy bank statements into organized financial data with AI-powered processing and complete privacy protection.
              </p>
              <div className="mt-4 md:mt-6 flex space-x-4">
                <Button variant="ghost" size="sm" className="btn-animated">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="btn-animated">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <div className="mt-3 md:mt-4 space-y-2 text-xs md:text-sm">
                <button onClick={onBack} className="block text-muted-foreground hover:text-foreground footer-link text-left">Features</button>
                <button onClick={onBack} className="block text-muted-foreground hover:text-foreground footer-link text-left">Pricing</button>
                <a href="#" className="block text-muted-foreground hover:text-foreground footer-link">Download</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground footer-link">Support</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <div className="mt-3 md:mt-4 space-y-2 text-xs md:text-sm">
                <span className="block text-primary text-xs md:text-sm font-medium">Privacy Policy</span>
                <button onClick={onBack} className="block text-muted-foreground hover:text-foreground footer-link text-left">Terms of Service</button>
                <a 
                  href="mailto:hi@speedysite.co?subject=Bank%20Statement%20Pro%20-%20Inquiry" 
                  className="block text-muted-foreground hover:text-foreground footer-link cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 md:my-8" />
          
          <div className="text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 Bank Statement Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
