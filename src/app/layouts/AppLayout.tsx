import type { LayoutProps } from "rwsdk/router";
import { Toast } from "../Toast";

export function AppLayout({ children }: LayoutProps) {
  return (
    <div className="app">
      <main>{children}</main>
      <Toast />
    </div>
  );
}
