import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
//import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  return (
    <Card>
      <CardContent className="itens-center flex flex-row justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>

        {/*
        const {data} = useSession();
        const handleLoginClick = async () => {
        await signIn('google');
        }
        {data?.user ? 
          <div>
            <Button onClick={() => signOut()}>Logout</Button>
            <h1>{data.user.name}</h1>
          </div>
         : (
          <Button onClick={handleLoginClick}>Login</Button>
        )}*/}
      </CardContent>
    </Card>
  )
}

export default Header
