"use client"
import Spinner from "./Spinner"
import Link from "next/link"
import useStore from "@/store"
import ChangeTheme from "../layout/ChangeTheme"

const Header = () => {
  const store = useStore() // initiate isNavOpen state with false
  return (
    <div className="h-20 mb-1">
      <nav>
        <div className="flex items-center justify-between  border-gray-400">
          <h3 className='logo-wrapper p-0 m-0 inline-block text-2xl font-black hover:scale-[1.02] scale-100 active:scale-100'>
            <Link href='/' className="logo flex"  data-testid="logo">
              overreacted
              <div className="pl-2 bg-ct-blue-600">
              {store.requestLoading && <Spinner color="text-white" />}
              </div>
            </Link>
          </h3>
          <ChangeTheme />
        </div>
      </nav>
      <div className="pt-4 pl-2 bg-ct-blue-600 fixed">
        {store.requestLoading && <Spinner color="text-white" />}
      </div>
    </div>
  );
}

export default Header
