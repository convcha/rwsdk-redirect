import {
  initClient,
  initClientNavigation,
  navigate,
  fetchTransport,
} from "rwsdk/client";
import { toast } from "sonner";

const { handleResponse } = initClientNavigation();

// Custom transport that intercepts server function results and handles redirects
const redirectTransport = (
  transportContext: Parameters<typeof fetchTransport>[0]
) => {
  const callServer = fetchTransport(transportContext);

  return async (id: string, args: unknown) => {
    const result = await callServer(id, args);

    if (result?.flashMessage) {
      console.log({ flashMessage: result.flashMessage });
      toast.success(result.flashMessage);
    }

    if (result?.redirectTo) {
      navigate(result.redirectTo);
      return undefined;
    }

    return result;
  };
};

initClient({ transport: redirectTransport, handleResponse });
