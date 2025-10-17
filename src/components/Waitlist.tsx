import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Waitlist({ onBack }: { onBack: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", useCase: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-background rounded-xl shadow-2xl border p-8" style={{ background: "rgba(20, 20, 20, 0.98)" }}>
        <h2 className="text-2xl font-bold mb-2 text-center">You're a little early to the party🎉</h2>
        <p className="text-center text-muted-foreground mb-6">
          The app is nearly finished but isn’t on the Mac App Store yet. Join the waitlist and we will tell you the minute it launches!
        </p>
        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
            <p className="mb-4">You’re on the waitlist. We’ll notify you as soon as the app is available.</p>
            <Button onClick={onBack} className="w-full">Back to Site</Button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-muted/20 focus:outline-none text-foreground"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-muted/20 focus:outline-none text-foreground"
              />
            </div>
            <div>
              <label htmlFor="useCase" className="block text-sm font-medium mb-1">For work or for personal use?</label>
              <textarea
                id="useCase"
                name="useCase"
                required
                rows={3}
                value={form.useCase}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-muted/20 focus:outline-none text-foreground"
              />
            </div>
            <Button type="submit" className="w-full">Join Waitlist</Button>
            <Button type="button" variant="ghost" className="w-full mt-2" onClick={onBack}>Back to Site</Button>
          </form>
        )}
      </div>
    </div>
  )
}
