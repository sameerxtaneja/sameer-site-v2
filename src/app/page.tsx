export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Sameer Taneja (Sam)
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl">
        showing up, building things, not settling.
      </p>
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <a href="https://insta.openinapp.co/308hv" className="px-4 py-2 border rounded" target="_blank">Instagram</a>
        <a href="https://twtr.openinapp.co/z8ltg" className="px-4 py-2 border rounded" target="_blank">X</a>
        <a href="https://linkedin.openinapp.co/0opyb" className="px-4 py-2 border rounded" target="_blank">LinkedIn</a>
        <a href="https://yt.openinapp.co/cy0lk" className="px-4 py-2 border rounded" target="_blank">YouTube</a>
        <a href="https://openinapp.link/sdqvx" className="px-4 py-2 border rounded" target="_blank">GitHub</a>
      </div>

        {/* Now Section */}
        <section className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-2">What I’m doing now</h2>
        <p className="text-gray-700 text-lg">
          Building <strong>SuperTeacher</strong> — India’s first AI grading tool for schools and tutors.
          <br />Living in Gurgaon, working out of my apartment, talking to teachers every day, and shipping product weekly.
        </p>
      </section>

      <section className="mt-16 max-w-2xl text-center">
  <h2 className="text-2xl font-semibold mb-4">Things I’ve Built</h2>
  
  <div className="space-y-8">
    <div className="border rounded p-4 text-left shadow-sm">
      <h3 className="text-xl font-bold">SuperTeacher</h3>
      <p className="text-gray-700">
        India’s first AI grading tool for teachers. Upload scanned answer sheets,
        get instant grading based on CBSE rubrics. <br />
        <span className="text-sm text-gray-500">Founder · 2025</span>
      </p>
    </div>

    <div className="border rounded p-4 text-left shadow-sm">
      <h3 className="text-xl font-bold">Ripen</h3>
      <p className="text-gray-700">
        Community-led feedback platform for startups. YC W24 interview stage. <br />
        <span className="text-sm text-gray-500">Co-founder · 2023</span>
      </p>
    </div>

    <div className="border rounded p-4 text-left shadow-sm">
      <h3 className="text-xl font-bold">Longevity Club</h3>
      <p className="text-gray-700">
        A private community for health-obsessed founders to track bloodwork and performance. <br />
        <span className="text-sm text-gray-500">Founder · 2023</span>
      </p>
    </div>
  </div>
</section>
    </main>
  );
}