import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useState } from "react";
import Register from "@/app/register/page";

export default function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar className="border-b py-4" rounded>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className="my-3" href="#" active>
            Home
          </NavbarLink>
          <NavbarLink className="my-3" as={Link} href="#">
            About
          </NavbarLink>
          <NavbarLink className="my-3" href="#">
            Services
          </NavbarLink>
          <NavbarLink className="my-3" href="#">
            Pricing
          </NavbarLink>
          <NavbarLink className="my-3" href="#">
            Contact
          </NavbarLink>
          <NavbarLink className="my-1" as={Link} href="#">
            <button
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setOpenModal(true); // Modal untuk perangkat lg ke atas
                } else {
                  setIsOpen(true); // Drawer untuk perangkat di bawah lg
                }
              }}
              className="rounded-lg border border-green-500 px-3 py-2 text-green-500 duration-200 hover:bg-green-500 hover:text-white"
            >
              Join
            </button>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* Modal hanya untuk lg dan ke atas */}
      <div className="hidden lg:block">
        <Modal
          size="5xl"
          dismissible
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Register />
        </Modal>
      </div>

      {/* Drawer hanya untuk perangkat kecil */}
      <div className="block lg:hidden">
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          position="bottom"
        >
          <DrawerHeader title="Join" />
          <DrawerItems>
            <Register />
          </DrawerItems>
        </Drawer>
      </div>
    </>
  );
}
