"use client";

import { useActionState } from "react";

import { testRedirect } from "./functions/test-redirect";

export const RedirectTestPage = () => {
  const [state, formAction, isPending] = useActionState(testRedirect, null);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Server Action Redirect Issue</h1>
      <p>
        I'm trying to redirect by throwing a 302 Response from a Server Action
        (called via <code>useActionState</code>), but it doesn't seem to work as
        expected.
      </p>

      <form action={formAction}>
        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: isPending ? "not-allowed" : "pointer",
            opacity: isPending ? 0.6 : 1,
          }}
        >
          {isPending ? "Processing..." : "Click to test redirect"}
        </button>
      </form>

      {state?.dummy && (
        <div
          style={{ marginTop: "1rem", padding: "1rem", background: "#fffacd" }}
        >
          <strong>State returned:</strong>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}

      <div
        style={{ marginTop: "2rem", padding: "1rem", background: "#f5f5f5" }}
      >
        <h2>What I expected:</h2>
        <p>
          Clicking the button should navigate to <code>/success</code>.
        </p>

        <h2>What actually happens:</h2>
        <p>The current page just reloads instead.</p>
      </div>
    </div>
  );
};
