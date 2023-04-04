"use client";

import Link from "next/link";
import React from "react";

const AsideWA = ({ abbigliamento, acc, donna, uomo }) => {
  return (
    <aside className="md:block hidden mt-[8rem] min-w-[300px] w-[300px] ">
      <Link href="/view-all">Categorie</Link>
      <ul className="ml-3">
        <li className="mt-3">
          <Link href="/abbigliamento" style={{ color: abbigliamento }}>
            Abbigliamento
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/donna" style={{ color: donna }}>
            Donna
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/uomo" style={{ color: uomo }}>
            Uomo
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/accessori" style={{ color: acc }}>
            Accessori
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideWA;