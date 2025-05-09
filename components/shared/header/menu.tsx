import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/cart" className="header-button">
          <UserIcon className="h-8 w-8 m-auto" />
          <span className="font-bold">Entre</span>
        </Link>

        <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="h-8 w-8 m-auto" />
          <span className="font-bold">Carrinho</span>
        </Link>
      </nav>
    </div>
  );
}
