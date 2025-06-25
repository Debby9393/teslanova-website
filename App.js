// Elon Musk TeslaNova Investments - Landing Page

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function TeslaNovaLanding() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-16">
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-white">Elon Musk TeslaNova Investments</h1>
        <p className="text-lg text-gray-300">
          Start with $100. Earn up to 10x returns in 24–72 hours. Tesla rewards for top investors.
        </p>
        <Button className="text-black bg-white hover:bg-gray-200">Get Started</Button>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
      >
        <Card className="bg-gray-900 border-none shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Start with as little as $100</li>
              <li>Earn up to 10x returns within 72 hours</li>
              <li>Tesla giveaways for top clients</li>
              <li>Proof-based marketing and real testimonials</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-none shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us Directly</h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-gray-800 text-white" />
              <Input type="email" placeholder="Your Email" className="bg-gray-800 text-white" />
              <Textarea placeholder="Your Message" className="bg-gray-800 text-white" rows={4} />
              <Button className="bg-white text-black flex items-center gap-2">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} Elon Musk TeslaNova Investments. All rights reserved.
      </motion.div>
    </div>
  );
}
