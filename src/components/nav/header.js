'use client'
import { Navbar, NavbarBrand, NavbarContent,Dropdown,DropdownItem,DropdownTrigger,DropdownMenu,Button,DropdownSection } from "@heroui/react"
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

export default function NavComponent(){
    const { data: session } = useSession();

    const logoutUser = () => {
        signOut({
            callbackUrl:'/'
        })
    }

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
                        <DropdownSection>
                            { !session ?
                                <DropdownItem key="register" as={Link} href="register">
                                    Register/Login
                                </DropdownItem>
                            :
                                <DropdownItem key="logout" onPress={logoutUser}>
                                    Logout
                                </DropdownItem>
                            }
                        </DropdownSection>




                        {session ?
                            <DropdownSection title="Admin actions">
                                <DropdownItem key="dashboard" as={Link} href="/dashboard">
                                    Dashboard
                                </DropdownItem>
                                <DropdownItem key="addevent" as={Link} href="/dashboard/add_event">
                                    Add Event
                                </DropdownItem>
                                <DropdownItem key="addvenue" as={Link} href="/dashboard/add_venue">
                                    Add Venue
                                </DropdownItem>
                            </DropdownSection>
                        :
                            null
                        }
                    </DropdownMenu>

                </Dropdown>
            </NavbarContent>
       </Navbar>
    )
}