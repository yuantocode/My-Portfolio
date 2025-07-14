import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta (Coursera)",
    date: "June 2025",
    file: "/certs/fullstack-meta.pdf",
  },
  {
    id: 2,
    title: "WearOS: EmergingTechnology for Internet and Learning of Everything",
    issuer: "freeCodeCamp",
    date: "March 2025",
    file: "/certs/Certificate-Of-Completion_Jimenez.pdf",
  },
  {
    id: 3,
    title: "UI/UX Design Essentials",
    issuer: "Google UX",
    date: "January 2025",
    file: "/certs/uiux-google.pdf",
  },
];

const CertsSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the certifications I’ve earned from various programs
          to validate my skills and development knowledge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 flex items-center justify-center bg-muted">
                <span className="text-lg font-semibold text-muted-foreground">
                  {cert.title}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-foreground mb-1">
                  {cert.issuer}
                </p>


                <div className="flex justify-end">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertsSection;
