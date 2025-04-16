"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ProposalPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [answer, setAnswer] = useState<string | null>(null)

  const handleYesClick = () => {
    setAnswer("yes")
    setShowConfetti(true)
    // Play celebration sound or animation
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 dark:from-rose-950 dark:to-pink-900">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* This would be where confetti animation plays */}
        </div>
      )}

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500 dark:text-rose-300" />
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 dark:text-rose-200 mb-4">To My Dearest</h1>
          <p className="text-xl text-rose-600 dark:text-rose-300 italic">A journey of love and forever</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-rose-200 dark:border-rose-800">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-rose-700 dark:text-rose-300 mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  From the moment we first met, I knew there was something special between us. Every moment with you has
                  been a blessing, and I cherish all the memories we've created together.
                </p>
                <p>
                  You've brought so much joy, laughter, and love into my life. Your smile brightens my darkest days, and
                  your love inspires me to be a better person.
                </p>
                <p>
                  I can't imagine my life without you, and I don't want to. You are my best friend, my confidant, and my
                  soulmate.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-rose-200 dark:border-rose-800">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-rose-700 dark:text-rose-300 mb-4">Why I Love You</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Your kindness and compassion toward everyone you meet
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    The way your eyes light up when you're excited about something
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Your incredible strength and resilience through challenges
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    The way you make me feel safe and loved every single day
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">Your infectious laugh that can brighten any room</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    The dreams we share and the future we're building together
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-rose-700 dark:text-rose-300 mb-6">
              {answer === "yes" ? "You said YES! 💍" : "Will you be my girl?"}
            </h2>

            {answer === null ? (
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  I promise to love you, cherish you, and stand by your side through all of life's adventures. You are
                  my everything, and I want to spend the rest of my life with you.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg"
                    onClick={handleYesClick}
                  >
                    Yes, I will! 💍
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg"
                      >
                        Let me think...
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          Take all the time you need, but know that my heart is yours forever.
                        </p>
                        <div className="mt-4">
                          <Button className="w-full bg-rose-600 hover:bg-rose-700" onClick={handleYesClick}>
                            Yes, I will be your girl! 💍
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  You've made me the happiest person alive! I can't wait to start our forever together.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Engagement ring"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
