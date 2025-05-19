import Link from "next/link";
import CartButton from "./cart-button";
import { UserIcon } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button">
          <UserIcon className="h-8 w-8 m-auto" />
          <span className="font-bold">Entre</span>
        </Link>

        <CartButton />
      </nav>
    </div>
  );
}
