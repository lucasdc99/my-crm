import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 border-b p-4">
      <Link href="/" aria-label="Home">
        <Image src="/next.svg" width={100} height={20} alt="Logo" />
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/" aria-label="Home" className="hover:underline">
          Home
        </Link>
        <Link href="/contacts" aria-label="Contacts" className="hover:underline">
          Contacts
        </Link>
        <Link href="/settings" aria-label="Settings" className="hover:underline">
          Settings
        </Link>
      </div>
    </header>
  );
}
