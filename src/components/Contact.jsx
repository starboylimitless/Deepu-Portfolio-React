export default function Contact() {
  const contacts = [
    { label: "Email", value: "deepu85198@gmail.com", href: "mailto:deepu85198@gmail.com" },
    { label: "GitHub", value: "github.com/starboylimitless", href: "https://github.com/starboylimitless" },
    { label: "LinkedIn", value: "linkedin.com/in/deepakkumarboddu", href: "https://linkedin.com/in/deepakkumarboddu" },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h3 className="text-3xl font-bold text-white mb-8">Contact</h3>
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl">
        {contacts.map((contact) => (
          <p key={contact.label} className="text-gray-300 mt-2 first:mt-0">
            {contact.label}:{" "}
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 hover:underline transition"
            >
              {contact.value}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}
