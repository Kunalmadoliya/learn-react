import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  CreditCard,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    name: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    id: "users",
    label: "Users",
    name: "User Management",
    icon: Users,
    href: "/dashboard/users",
  },
  {
    id: "analytics",
    label: "Analytics",
    name: "Performance insights",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    id: "documents",
    label: "Documents",
    name: "Manage your files",
    icon: FileText,
    href: "/dashboard/documents",
  },
  {
    id: "billing",
    label: "Billing",
    name: "Payments and plans",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    id: "notifications",
    label: "Notifications",
    name: "Recent activity",
    icon: Bell,
    href: "/dashboard/notifications",
  },
  {
    id: "settings",
    label: "Settings",
    name: "Preferences",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    id: "help",
    label: "Help",
    name: "Help and support",
    icon: HelpCircle,
    href: "/dashboard/help",
  },
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
            className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            <Icon size={20} className="shrink-0 text-neutral-600" />
            <span className="text-sm font-medium text-neutral-800">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}




export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white px-6 py-5">
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
          <p className="mb-6 text-sm text-neutral-500">
            Explore your workspace and React components.
          </p>
          <Navigation />
        </section>

        <section className="space-y-6">
          <h2 className="border-b border-neutral-200 pb-4 text-2xl font-semibold">
            React Examples
          </h2>

          <div className="space-y-6">
            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <BasicProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <ChildrenProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <ComplexProps />
            </section>

            <section className="w-full rounded-xl border border-neutral-200 bg-white p-6">
              <RefProps />
            </section>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white px-6 py-5 text-center text-sm text-neutral-500">
        React Learning Workspace
      </footer>
    </div>
  );
}
