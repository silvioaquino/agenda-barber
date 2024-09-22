"use client"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import {
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react"
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Sheet } from "./ui/sheet"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  const { data } = useSession()

  const handleLogoutClick = () => signOut()

  const handleLoginClick = () => signIn("google")

  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="border-secundary border-b border-solid p-5 text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex items-center justify-between px-5 py-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={data.user?.image ?? ""} />
                  </Avatar>
                  <h2 className="font-bold">{data.user.name}</h2>
                </div>

                <Button variant="secondary" size="icon">
                  <LogOutIcon onClick={handleLogoutClick} />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 px-5 py-6">
                <div className="flex items-center gap-2">
                  <UserIcon />
                  <h2 className="font-bold">Faça seu login</h2>
                </div>
                <Button
                  className="w-full justify-start"
                  variant="secondary"
                  onClick={handleLoginClick}
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Inicio
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/profile">
                    <HomeIcon size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
