"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message: string;
};

const limits = { name: 120, email: 200, company: 200, message: 5000 };

function field(formData: FormData, key: keyof typeof limits) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, limits[key]) : "";
}

// Envoi par le SMTP défini dans l'environnement du conteneur (voir README).
export async function sendContact(_: ContactState, formData: FormData): Promise<ContactState> {
  // Champ piège invisible : un humain le laisse vide.
  if (formData.get("website")) {
    return { status: "sent", message: "Merci, votre message est bien parti." };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const message = field(formData, "message");

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci d'indiquer votre nom, un e-mail valide et votre message." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Formulaire de contact : SMTP non configuré");
    return {
      status: "error",
      message: "L'envoi est momentanément indisponible. Écrivez-moi sur LinkedIn en attendant.",
    };
  }

  // Avec un relais comme Brevo, l'identifiant SMTP n'est pas une adresse d'expédition.
  const sender = SMTP_FROM ?? SMTP_USER;
  const port = Number(SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: `"nicolasrevel.fr" <${sender}>`,
      to: CONTACT_TO ?? sender,
      replyTo: { name, address: email },
      subject: `Contact : ${name}${company ? ` (${company})` : ""}`,
      text: `${message}\n\n${name}\n${email}${company ? `\n${company}` : ""}`,
    });
  } catch (error) {
    console.error("Formulaire de contact : échec de l'envoi", error);
    return {
      status: "error",
      message: "L'envoi a échoué. Réessayez dans un instant ou écrivez-moi sur LinkedIn.",
    };
  }

  return { status: "sent", message: "Merci, votre message est bien parti. Je vous réponds sous 48 h." };
}
