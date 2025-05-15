'use client';

import { motion } from 'framer-motion';

export default function LifeStory() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-20 max-w-3xl mx-auto font-canela bg-white dark:bg-black text-black dark:text-white"
    >
      <h1 className="text-4xl font-bold mb-10">life story</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>🌍 -18 ~ born, brought up in Ludhiana, Punjab ~ growing up, school, party, fun, yada yada ~ honestly I don't remember much & I think it's for the best, hehe.</p>
        <p>started my career journey at 19.</p>
        <p>went to Vancouver to study business, but 4 months in, i realised ~ i learn by doing, i finished my degree fast & jumped into the real world.</p>
        <p>since then, it’s been all hands-on experiments (fail-fast mentality) - some worked, most didn’t. each one taught me something meaningful, and brought more clarity to what I want to build.</p>

        <h2 className="text-2xl font-bold mt-10">Entrepreneurship Attempts</h2>
        <div className="space-y-2">
          <p><strong>Kyra Cosmetics</strong> ~ bootstrapped D2C brand. hit breakeven, then lost money on ads, shut it. learned to take risks & build solo.</p>
          <p><strong>Pineapple Kitchen</strong> ~ built a premium cookware brand. learned most indians don’t cook (they have help), and those who do rarely pay for premium.</p>
          <p><strong>FTW Club</strong> ~ longevity club for startup founders. got 4 paying users, but behavior change is a tough business.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10">Jobs</h2>
        <div className="space-y-2">
          <p><strong>Poker Dealer</strong> ~ saw how people wear greed on their face.</p>
          <p><strong>Door-to-door Sales</strong> ~ rejection every day. built thick skin.</p>
          <p><strong>Founding Team, Auto Startup</strong> ~ built a car sales platform. took it to $50K profit in 10 mos.</p>
          <p><strong>Sales ~ GM</strong> ~ closed contracts with big names ~ Translink.</p>
          <p><strong>Founding Team, Ripen</strong> ~ led GTM, community, partnerships. raised $550K but shut down. learned ~ solve one real problem at a time.</p>
          <p><strong>Founding Team ~ AI Startup</strong> ~ built & marketed influencer automation platform, learned how to build & sell AI software.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10">Projects led by curiosity</h2>
        <div className="space-y-2">
          <p><strong>What’s Cooking?</strong> ~ loved cooking, built a yt channel in COVID - learned video, editing, growth.</p>
          <p><strong>CEO of My Health</strong> ~ built a full-stack health protocol, tracked everything, dropped to 5% fat, gained 35kg muscle, hit peak performance.</p>
          <p><strong>Always Young Media</strong> ~ played with GenAI: cloned my avatar, launched a podcast, hit 7M+ views. got deep into content, repurposing & distribution.</p>
        </div>

        <p className="mt-10">every phase has helped me understand people, systems, & what it really takes to build.</p>
        <p>the dots will connect someday. <br />~ until then, i’ll keep showing up, building, & never settling.</p>
      </div>
    </motion.main>
  );
}
