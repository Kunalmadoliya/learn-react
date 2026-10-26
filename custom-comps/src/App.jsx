import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  CreditCard,
  HelpCircle,
} from "lucide-react";

import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";

import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  { id: "users", label: "Users", icon: Users, href: "/dashboard/users" },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    id: "documents",
    label: "Documents",
    icon: FileText,
    href: "/dashboard/documents",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  { id: "help", label: "Help", icon: HelpCircle, href: "/dashboard/help" },
];

function Navigation() {
  return (
    <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700"
          >
            <Icon size={20} className="shrink-0 text-neutral-600 dark:text-neutral-400" />
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function Workspace() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <header className="border-b border-neutral-200 bg-white px-6 py-5 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Workspace</h1>
          <ThemeToggler />
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
        <section>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight">
            Components
          </h2>
          <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
            Explore your workspace and React components.
          </p>
          <Navigation />
        </section>

        <section className="space-y-6">
          <h2 className="border-b border-neutral-200 pb-4 text-2xl font-semibold dark:border-neutral-800">
            React Examples
          </h2>

          <div className="space-y-6">
            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <BasicProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <ChildrenProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <ComplexProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <RefProps />
            </section>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white px-6 py-5 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        React Learning Workspace
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Workspace />
    </ThemeProvider>
  );
}
