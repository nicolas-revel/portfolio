"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "mt-1 w-full rounded-[3px] border border-border bg-surface px-3 py-2.5 text-foreground outline-none focus:border-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  if (state.status === "sent") {
    return (
      <p role="status" className="max-w-xl border-t border-accent pt-5 text-lg">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="grid max-w-2xl gap-5 sm:grid-cols-2">
      <label className="text-sm">
        Nom
        <input name="name" autoComplete="name" required maxLength={120} className={inputClass} />
      </label>
      <label className="text-sm">
        E-mail
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
          className={inputClass}
        />
      </label>
      <label className="text-sm sm:col-span-2">
        Entreprise <span className="text-muted">(facultatif)</span>
        <input name="company" autoComplete="organization" maxLength={200} className={inputClass} />
      </label>
      <label className="text-sm sm:col-span-2">
        Votre projet
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Ce que vous voulez construire, vos délais, votre équipe…"
          className={`${inputClass} placeholder:text-muted`}
        />
      </label>
      <label aria-hidden className="hidden">
        Site web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-11 items-center rounded-[3px] bg-accent px-5 text-sm font-medium text-background hover:opacity-90 disabled:opacity-60"
        >
          {pending ? "Envoi…" : "Envoyer"}
        </button>
        {state.status === "error" && (
          <p role="alert" className="text-sm text-accent">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
