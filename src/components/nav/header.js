'use client'
import { Navbar, NavbarBrand, NavbarContent,Dropdown,DropdownItem,DropdownTrigger,DropdownMenu,Button } from "@heroui/react"
import Link from 'next/link'

export default function NavComponent(){

    return(
       <Navbar
            shouldHideOnScroll
            isBordered
            className="bg-gray-900 border-b-4 border-slate-400"
       >

            <NavbarBrand as={Link} href="/" className="text-inherit text-2xl text-white antonfont">
                Event0
            </NavbarBrand>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">

                    <DropdownTrigger>
                        <Button variant="bordered" className="text-white">
                            Menu
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu aria-label="Menu action" variant="flat">
                        <DropdownItem key="dashboard" as={Link} href="/dashboard">
                            Dashboard
                        </DropdownItem>
                        <DropdownItem key="posts" as={Link} href="/posts">
                            Posts
                        </DropdownItem>

                        <DropdownItem key="register" as={Link} href="register">
                            Register
                        </DropdownItem>
                        <DropdownItem key="logout">
                            Logout
                        </DropdownItem>
                    </DropdownMenu>

                </Dropdown>
            </NavbarContent>
       </Navbar>
    )
}