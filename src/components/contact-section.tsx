import { connection } from "next/server";
import { contact, profile } from "@/content/site";
import { ContactForm } from "./contact-form";
import { secondaryButtonClass } from "./styles";

// La configuration SMTP n'existe qu'au démarrage du conteneur : on la lit à la requête.
export async function ContactSection() {
  await connection();
  const configured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

  return (
    <>
      {configured ? (
        <ContactForm />
      ) : (
        <p className="max-w-xl border-t border-accent pt-5 text-lg">{contact.unavailable}</p>
      )}
      <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
        <span className="text-muted">{configured ? "Ou retrouvez-moi sur" : "Retrouvez-moi sur"}</span>
        <a href={profile.links.linkedin} className={secondaryButtonClass}>
          LinkedIn
        </a>
        <a href={profile.links.github} className={secondaryButtonClass}>
          GitHub
        </a>
      </div>
    </>
  );
}
