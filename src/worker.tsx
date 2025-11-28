import { render, route } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { RedirectTestPage } from "@/app/pages/redirect-test/redirect-test-page";
import { SuccessPage } from "@/app/pages/success/success-page";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    route("/", RedirectTestPage),
    route("/success", SuccessPage),
  ]),
]);
