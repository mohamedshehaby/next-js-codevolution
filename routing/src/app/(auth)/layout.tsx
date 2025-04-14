"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/forget-password",
    label: "Forget Password",
  },
];

export default function AuthLayout() {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            className={isActive ? "text-green-300 font-bold mr-4 " : ""}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
