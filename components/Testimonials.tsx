export function Testimonials() {
  const quotes = [
    { text: 'Finally an app that plans my week, not just my to-do list.', author: 'Alex, Developer' },
    { text: 'The weekly review card is genuinely motivating.', author: 'Sam, Student' },
    { text: 'Routines + calendar in one calm place.', author: 'Jordan, Freelancer' },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Loved by planners</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.author} className="glass rounded-2xl p-6">
              <p className="text-zinc-300">&ldquo;{q.text}&rdquo;</p>
              <p className="mt-4 text-sm text-zinc-500">{q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
