"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Kumar Baibhav",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5635AQEE9mjKEFUWbQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713077973142?e=1730883600&v=beta&t=UIHH28T1FEzz0UkJmQwRV1udIJ1K7KAIJduA0aF9PrQ",
    text: "Collaborating on this project was a game changer. The technical expertise and meticulous attention to detail transformed our vision into an outstanding product that truly exceeded expectations.",
  },
  {
    name: "Aanand Dubey",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHsYYj9gfSvCA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673103137184?e=1735776000&v=beta&t=LOtaNAX3As2Z-bw7pksT7GZ-iBYToUfO451oZvmW13c",
    text: "One of the most talented developers I've had the privilege to work alongside. The ability to dissect complex requirements and deliver elegant, user-friendly solutions is simply remarkable.",
  },
  {
    name: "Abhishek Rathore",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHsmT7NXDZPYw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698392709407?e=1735776000&v=beta&t=ovzl2bq-S7vYoVW98fbwSAL2pHENRA3vDD_y4gcwdLY",
    text: "Bringing together technical excellence and creative insight elevates every project. A true professional who consistently delivers outstanding results.",
  },
  {
    name: "Pankaj Kumar",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFS0d-UazmrTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1677255935018?e=1735776000&v=beta&t=P4lJJQxJhmljubrE7CQenOT7h1g3mcGJnImL_59oTVQ",
    text: "Working together was an absolute pleasure. Exceptional technical skills and unwavering attention to detail resulted in a product that surpassed all expectations.",
  },
  {
    name: "Piyush Singh",
    role: "Backend Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQET42pxBF9zPA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670591772642?e=1735776000&v=beta&t=ikFSekWYVe7c5A28Ief30cNn41QiEXOBI-TXpJiXk0Y",
    text: "The experience was remarkable. Technical proficiency and keen attention to detail led to a product that not only met but exceeded expectations.",
  },
];



export function TestimonialsSection() {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <MessageSquare className="mr-2" /> Testimonials
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic flex-grow">{testimonial.text}</p>
              <div className="mt-4 text-blue-500">★★★★★</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
