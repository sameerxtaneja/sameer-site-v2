'use client';

import { motion } from 'framer-motion';

export default function BeliefsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-20 max-w-3xl mx-auto font-canela bg-white dark:bg-black text-black dark:text-white overflow-y-auto"
    >
      <h1 className="text-4xl font-bold mb-8">beliefs</h1>

      <div className="space-y-10 text-lg leading-relaxed">
        <Section title="Mindset" bullets={[
          "being young is a mindset, not age.",
          "happiness is a choice.",
          "discipline + consistency = growth.",
          "the first step towards behavior change is awareness.",
          "equanimity is the answer to regulate emotions & be free.",
          "the world moves as fast as you breathe.",
          "the best hack to avoid procrastination is to close the gap between thought & action.",
          "it is okay to make mistakes - never go against yourself; you are your biggest asset.",
        ]} />

        <Section title="Entrepreneurship" bullets={[
          "a personal brand never dies.",
          "be prepared to get your hands dirty - growth requires being hands-on at every level.",
          "no to impulse decisions & cigarette rush ideas - explore until you truly believe.",
          "hiring at an early stage is tough; mission, discipline, and commitment matter more than skill.",
          "business requires either money (performance marketing) or distribution - it’s always a people’s game.",
          "your value is defined by the environment you are in - change it if needed.",
        ]} />

        <Section title="Peak Performance" bullets={[
          "life is a series of sprints - push hard, rest, recharge, repeat.",
          "the only way to be good at something is to strengthen the neural pathways - consistency is key.",
          "good habits & routines are the foundation of a disciplined & focused life.",
          "there must be a balance between pain & pleasure to perform sustainably.",
          "to function at full potential, balance the 4 pillars - emotional, spiritual, physical, and mental.",
          "there is pain on both sides of the spectrum - you choose your pain every day.",
        ]} />

        <Section title="Decision-Making & GUT" bullets={[
          "it’s a sign of strength to ask for help - never let ego stop you.",
          "the only way to train your gut feeling is to listen to it & do hard things repeatedly.",
        ]} />

        <Section title="Curiosity" bullets={[
          "ultimately, curiosity is the driver of human life.",
          "humans crave freedom, exploration, and experiences - live fully.",
          "mixing and matching things that don’t belong together leads to innovation.",
        ]} />
      </div>
    </motion.main>
  );
}

function Section({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="space-y-1">
        {bullets.map((point, idx) => (
          <p key={idx}>• {point}</p>
        ))}
      </div>
    </div>
  );
}
