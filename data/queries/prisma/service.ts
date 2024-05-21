import prisma from "@/lib/prisma";
import {TCategoryWithServicesAndPrices} from "../../model/prisma/service";

const categoriesWithServicesAndPrices = async (): Promise<TCategoryWithServicesAndPrices[]> => await prisma.category.findMany({
  where: {
    services: {
      some: {}
    }
  },
  include: {
    services: {
      include: {
        prices: true
      }
    }
  }
});

export {
  categoriesWithServicesAndPrices
};