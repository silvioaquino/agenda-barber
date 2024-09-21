import { db } from "@/app/_lib/prisma"

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

  if (barbershop) {
    //ToDo: redirecionar para home page
    return null
  }

  return <h1>{barbershop.name}</h1>
}

export default BarbershopDetailPage
