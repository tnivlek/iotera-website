"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Innovative Solutions</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">Transform your business operations.</p>
      <Button
        variant="outline"
        className="rounded-full px-8 py-6 bg-gray-200 hover:bg-gray-300 text-gray-700 border-0"
      >
        Learn more
      </Button>
    </section>
  )
} 