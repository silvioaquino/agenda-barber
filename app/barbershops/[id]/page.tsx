//import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
//import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
//import Image from "next/image"
import BarbershopInfo from "./_components/barbershop-info"
import ServiceItem from "./_components/service-item"

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
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    //ToDo: redirecionar para home page
    return null
  }

  return (
    <div className="flex flex-col gap-4 py-6">
      <BarbershopInfo barbershop={barbershop} />

      {barbershop.services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  )
}

export default BarbershopDetailPage
