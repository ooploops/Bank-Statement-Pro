import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Shield, Zap, Download, Tags, CheckCircle, Star, Play, ArrowRight, Github, Mail, Sparkles, Lock, Eye, Database, FileCheck, Layers, Menu, X, Upload } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"
import Contact from "@/pages/Contact"
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'contact'>('home')
  const textRef = useRef<HTMLSpanElement>(null)
  const formats = ["CSV", "Plain English", "XLSX", "Copy & Paste", "JSON", "Simple Data"]
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!textRef.current) return
    
    let currentIndex = 0
    
    const typeWriter = (text: string, isBackspacing = false) => {
      return new Promise<void>((resolve) => {
        if (!textRef.current) return resolve()
        
        if (isBackspacing) {
          // Backspace animation
          const currentText = textRef.current.textContent || ''
          let currentLength = currentText.length
          
          const backspaceInterval = setInterval(() => {
            if (currentLength > 0 && textRef.current) {
              currentLength--
              textRef.current.textContent = currentText.substring(0, currentLength)
            } else {
              clearInterval(backspaceInterval)
              resolve()
            }
          }, 50) // Backspace speed
        } else {
          // Typing animation
          let currentLength = 0
          
          const typeInterval = setInterval(() => {
            if (currentLength < text.length && textRef.current) {
              currentLength++
              textRef.current.textContent = text.substring(0, currentLength)
            } else {
              clearInterval(typeInterval)
              resolve()
            }
          }, 100) // Typing speed
        }
      })
    }
    
    const animateText = async () => {
      if (!textRef.current) return
      
      // Wait a moment, then backspace current word
      await new Promise(resolve => setTimeout(resolve, 1500))
      await typeWriter('', true) // Backspace current text
      
      // Wait a moment, then type new word
      await new Promise(resolve => setTimeout(resolve, 300))
      await typeWriter(formats[currentIndex])
      
      currentIndex = (currentIndex + 1) % formats.length
    }
    
    // Initial setup
    if (textRef.current) {
      // Start with first word typing in
      typeWriter(formats[0]).then(() => {
        currentIndex = 1
      })
    }
    
    // Start animation loop after initial typing
    const interval = setInterval(animateText, 4000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animate headings
    headingRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true
        }
      })
    })
    // Animate sections
    sectionRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true
        }
      })
    })
    // Animate cards
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {currentPage === 'privacy' && (
        <Privacy onBack={() => setCurrentPage('home')} />
      )}
      {currentPage === 'terms' && (
        <Terms onBack={() => setCurrentPage('home')} />
      )}
      {currentPage === 'contact' && (
        <Contact onBack={() => setCurrentPage('home')} />
      )}
      {currentPage === 'home' && (
        <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 sm:px-4 md:px-8">
        <div className="container flex h-16 items-center">
          <div className="mr-2 flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-primary flex-shrink-0">
              <img src="https://res.cloudinary.com/drveridbx/image/upload/v1760684553/Bank_Statement_Pro_App_Icon_ggy8ro.png" alt="Bank Statement Pro Logo" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded" />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-bold truncate">Bank Statement Pro</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-end">
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
                <a 
                  href="#features" 
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 btn-animated"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 btn-animated"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy
                </a>
                <a 
                  href="#pricing" 
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 btn-animated"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </nav>
              <Button size="sm" className="w-full btn-animated" onClick={() => { setMobileMenuOpen(false) }}>
                Download Free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 md:py-12 lg:py-16 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[0] = el}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container relative px-0 max-w-4xl mx-auto">
          <div className="mx-auto text-center">
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1.5 md:px-4 text-xs md:text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-accent/20 transition-all">
                <span className="flex items-center gap-2">
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  AI-powered with complete privacy protection
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 leading-tight" ref={el => headingRefs.current[0] = el}>
              <span className="block mb-1 md:mb-2">Transform Bank</span> <span className="block mb-1 md:mb-2">Statements Into</span>
              <span className="flex justify-center">
                <span 
                  ref={textRef}
                  className="text-green-400 font-bold min-h-[1.2em] inline-block typewriter-cursor"
                >
                  
                </span>
              </span>
            </h1>
            <p className="mt-3 md:mt-4 text-lg md:text-xl leading-7 md:leading-8 text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 md:px-6">
              AI-powered bank statement processing with complete privacy protection. Free to download with 3 free generations to test.
            </p>
            {/* Large image or video spot below paragraph */}
            <div className="mt-8 flex justify-center">
              {/* Video embed: replace src with your video link */}
              <video
                src="https://res.cloudinary.com/drveridbx/video/upload/v1760673677/Bank_Statement_Pro_Demo_hddt35.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="max-w-full rounded-xl shadow-lg"
                type="video/mp4"
              />
            </div>
            {/* Trust signals */}
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground px-2 sm:px-4 md:px-6">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Mac Native</span>
              </div>
            </div>
            {/* CTA & Demo Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-2 sm:px-4 md:px-6">
              <Button size="lg" className="h-12 px-6 md:px-8 w-full sm:w-auto btn-animated border-2 border-white" onClick={() => {}}>
                <Download className="mr-2 h-5 w-5" />
                Download Free on Mac App Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[1] = el}>
        <div className="container px-0 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">10K+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5K+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">24/7 Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with Progress */}
      <section className="py-16 md:py-20 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[2] = el}>
        <div className="container px-0 max-w-4xl mx-auto">
          <div className="mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4" ref={el => headingRefs.current[1] = el}>
              Three Simple Steps to <span className="text-accent">Financial Clarity</span>
            </h2>
          </div>
          <div className="grid gap-8 md:gap-10 md:grid-cols-3">
            <div className="bg-background rounded-2xl shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="text-xl font-bold mb-2">Upload Documents</div>
              <div className="text-base text-muted-foreground mb-2">Drag and drop your bank statements, receipts, or any financial documents</div>
            </div>
            <div className="bg-background rounded-2xl shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-xl font-bold mb-2">AI Processing</div>
              <div className="text-base text-muted-foreground mb-2">Watch in real-time as AI extracts and categorizes your transaction data</div>
            </div>
            <div className="bg-background rounded-2xl shadow-xl border border-primary/20 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <div className="text-xl font-bold mb-2">Export & Analyze</div>
              <div className="text-base text-muted-foreground mb-2">Download clean, organized data ready for your accounting software</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features with Accordion */}
      <section id="features" className="section-mobile py-16 px-6 md:px-12 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Powerful Features, Privacy Protected</h2>
        <p className="text-lg text-center mb-10">Everything you need to transform your financial data</p>

        {/* Shared container for dropdowns and cards */}
        <div className="max-w-2xl mx-auto w-full">
          {/* Dropdowns on top */}
          <div className="mb-10">
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="ai-processing">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    <div className="flex items-center gap-3">
                      <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      Privacy-Protected AI Processing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Complete privacy protection with automatic PII redaction. Your sensitive 
                      information is removed before AI processing, ensuring your personal data 
                      stays private while getting powerful transaction categorization.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="categorization">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    <div className="flex items-center gap-3">
                      <Tags className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      Smart Categorization
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm md:text-base text-muted-foreground">
                      AI automatically categorizes transactions with 99.9% accuracy. 
                      Recognizes merchant patterns, transaction types, and spending categories 
                      to organize your financial data intelligently.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="export">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    <div className="flex items-center gap-3">
                      <Download className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      Multiple Export Formats
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Export to Excel, CSV, PDF, JSON, and QIF formats. 
                      Perfect integration with QuickBooks, Xero, FreshBooks, 
                      and other popular accounting software.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="realtime">
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    <div className="flex items-center gap-3">
                      <Zap className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      Real-time Processing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Watch transactions appear instantly as documents are processed. 
                      Live progress tracking and immediate feedback for optimal 
                      user experience and transparency.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Feature cards: perfectly aligned with dropdowns */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-10 w-full">
            <div className="flex-1 min-w-[0] md:max-w-[48%] mb-8 md:mb-0">
              <div className="card-mobile bg-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-lg">PII Protection</span>
                </div>
                <div className="text-sm text-muted mb-1">Complete privacy safeguards</div>
                <div className="text-base">Automatic removal of personal information before AI processing. Your identity stays completely private and secure.</div>
              </div>
            </div>
            <div className="flex-1 min-w-[0] md:max-w-[48%]">
              <div className="card-mobile bg-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-lg">Batch Processing</span>
                </div>
                <div className="text-sm text-muted mb-1">Handle multiple documents</div>
                <div className="text-base">Process multiple documents simultaneously. Handle months of statements in minutes with intelligent batch processing.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-16 md:py-20 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[4] = el}>
        <div className="container px-0 max-w-4xl mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4" ref={el => headingRefs.current[3] = el}>
              Your Financial <span className="text-accent">Privacy</span> is Our Priority
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Built from the ground up with privacy-first architecture
            </p>
          </div>
          
          <div className="mx-auto mt-12 md:mt-16">
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              <Card className="border-accent/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Lock className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Privacy-First Processing</h3>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        Your personal data is automatically redacted before AI processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Eye className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">PII Auto-Redaction</h3>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        Personal information is automatically removed before any processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-accent/10">
                      <Database className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">No External Servers</h3>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        Zero data storage on external servers. Everything stays local.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-accent/10">
                      <FileCheck className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">No Training Data</h3>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                        Your data is never used to train AI models. Complete data sovereignty.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-muted/30 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[5] = el}>
        <div className="container px-0 max-w-4xl mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4" ref={el => headingRefs.current[4] = el}>
              Free to <span className="text-accent">Download & Try</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Free download with 3 AI generations to test the app, then subscribe for unlimited access
            </p>
          </div>
          
          <div className="mx-auto mt-12 md:mt-16">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
              <Card className="relative card-mobile">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">Free Download</CardTitle>
                  <CardDescription className="text-sm md:text-base">Get started with 3 free generations</CardDescription>
                  <div className="text-3xl md:text-4xl font-bold">$0</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Free download from Mac App Store</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">3 free AI generations for testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Document import and viewing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Privacy-first design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Export processed results</span>
                    </div>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full btn-animated" onClick={() => {}}>
                    Download Free
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-primary card-mobile">
                <div className="absolute badge-popular">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">AI Premium</CardTitle>
                  <CardDescription className="text-sm md:text-base">Full AI-powered experience</CardDescription>
                  <div className="text-3xl md:text-4xl font-bold">
                    $20<span className="text-base md:text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Everything in Free Download</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Unlimited AI-powered processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Advanced categorization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Real-time processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                      <span className="text-xs md:text-sm">Batch processing</span>
                    </div>
                  </div>
                  <Separator />
                  <Button className="w-full btn-animated" onClick={() => {}}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[6] = el}>
        <div className="container px-0 max-w-3xl mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4" ref={el => headingRefs.current[5] = el}>
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>
          
          <div className="mx-auto mt-12 md:mt-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="privacy">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  How does privacy protection work?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base">
                    Bank Statement Pro automatically redacts all personal information (account numbers, names, addresses) 
                    before sending transaction data for AI processing. Your sensitive information stays private, and only 
                    anonymized transaction data is processed to categorize and organize your financial records.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="accuracy">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  How accurate is the AI categorization?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base">
                    Our AI achieves 99.9% accuracy in transaction categorization through advanced machine learning 
                    models trained on millions of financial transactions. The system recognizes merchant patterns, 
                    transaction types, and spending categories with industry-leading precision.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="formats">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  What file formats are supported?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base">
                    Bank Statement Pro supports importing PDF bank statements, CSV files, and image formats (JPEG, PNG). 
                    You can export your processed data in Excel (.xlsx), CSV, PDF, JSON, and QIF formats for 
                    seamless integration with popular accounting software like QuickBooks, Xero, and FreshBooks.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="requirements">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  What are the system requirements?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base">
                    Bank Statement Pro requires macOS 12.0 or later and works on both Intel and Apple Silicon Macs. 
                    The app requires approximately 2GB of free disk space for AI models and processed data storage. 
                    No internet connection is required for processing your documents.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="trial">
                <AccordionTrigger className="text-left text-sm md:text-base">
                  How does the free download work?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base">
                    Bank Statement Pro is free to download from the Mac App Store and includes 3 free AI generations 
                    so you can test the app's capabilities. After your free generations are used, you can subscribe to 
                    AI Premium for unlimited processing. The premium subscription includes a 7-day free trial.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 sm:px-6 md:px-8 section-mobile" ref={el => sectionRefs.current[7] = el}>
        <div className="container px-0 max-w-2xl mx-auto">
          <div className="mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl mb-4" ref={el => headingRefs.current[6] = el}>
              Ready to Organize Your Finances?
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Join thousands of Mac users who have transformed their financial workflow
            </p>
            <div className="mt-6 md:mt-8">
              <Button size="lg" className="h-12 px-6 md:px-8 w-full sm:w-auto btn-animated" onClick={() => {}}>
                <Download className="mr-2 h-5 w-5" />
                Download on Mac App Store
              </Button>
            </div>
            <div className="mt-4 md:mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <span>Free download</span>
              <span>•</span>
              <span>3 free generations</span>
              <span>•</span>
              <span>Requires macOS</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t bg-background px-6 sm:px-6 md:px-8 section-mobile">
        <div className="container py-8 md:py-12 px-0 max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-lg bg-primary">
                  <img src="https://res.cloudinary.com/drveridbx/image/upload/v1760684553/Bank_Statement_Pro_App_Icon_ggy8ro.png" alt="Bank Statement Pro Logo" className="h-5 w-5 md:h-6 md:w-6 rounded" />
                </div>
                <span className="text-base md:text-lg font-bold">Bank Statement Pro</span>
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
                <a href="#features" className="block text-muted-foreground hover:text-foreground footer-link">Features</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-foreground footer-link">Pricing</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground footer-link">Download</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground footer-link">Support</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <div className="mt-3 md:mt-4 space-y-2 text-xs md:text-sm">
                <button 
                  onClick={() => setCurrentPage('privacy')} 
                  className="block text-muted-foreground hover:text-foreground footer-link text-left"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setCurrentPage('terms')} 
                  className="block text-muted-foreground hover:text-foreground footer-link text-left"
                >
                  Terms of Service
                </button>
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
        </>
      )}
    </div>
  )
}

export default App
