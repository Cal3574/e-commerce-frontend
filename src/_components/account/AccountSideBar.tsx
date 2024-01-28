"use client";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

interface AccountSideBarProps {}

const AccountSideBar: FC<AccountSideBarProps> = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const { data: session } = useSession();

  // Function to handle window resize events
  const handleResize = () => {
    setOpen(window.innerWidth >= 768);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "just" }}
          className="absolute  w-full md:w-[16rem] bg-[#252525] z-20 h-screen"
          key="sidebar"
        >
          <div className="bg-[#252525] text-white flex flex-col">
            {/* Profile Section */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-gray-600 h-12 w-12 flex items-center justify-center animate-pulse">
                    <Avatar>
                      <AvatarImage src={session?.user?.image || ""} />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-semibold">{session?.user?.name}</p>
                    <p className="text-xs text-gray-400">View Profile</p>
                  </div>
                </div>
                <div
                  className="cursor-pointer md:hidden block"
                  onClick={() => setOpen(false)}
                >
                  {isOpen && <IoIosArrowBack size={32} color="white" />}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            {session ? (
              <div className="flex flex-col text-start p-4  space-y-4">
                <a
                  href="/orders"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  My Orders
                </a>
                <a
                  href="/settings"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Listed Products
                </a>
                <a
                  href="/account/new-product"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Add Product
                </a>

                <a
                  href="/api/auth/signout"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Logout
                </a>
              </div>
            ) : (
              <div className="flex flex-col text-start p-4  space-y-4">
                <a
                  href="/api/auth/signin"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-gray-300 hover:text-white transition duration-200"
                >
                  Register
                </a>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "just" }}
          className="absolute h-screen w-[4rem] bg-[#252525] z-20 "
          key="collapsed-sidebar"
          onClick={() => setOpen(true)}
        >
          <div className="cursor-pointer w-full justify-end flex items-center p-2 ">
            {!isOpen && <IoIosArrowForward color="white" size={32} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountSideBar;
