//import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
//import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
//import Image from "next/image"
import BarbershopInfo from "./_components/barbershop-info"

interface BarbershopDetailPageProps {
  params: {
    id: string
  }
}

const BarbershopDetailPage = async ({ params }: BarbershopDetailPageProps) => {
  if (!params.id) {
    //ToDo: redirecionar para home page
    return null
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    //ToDo: redirecionar para home page
    return null
  }

  return <BarbershopInfo barbershop={barbershop} />
}

export default BarbershopDetailPage
