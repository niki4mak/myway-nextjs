import {Category, Service, ServicePrice} from "@prisma/client";

type TServiceWithPrices = Service & { prices: ServicePrice[] };

type TCategoryWithServicesAndPrices = Category & { services: TServiceWithPrices[] };

interface IWithCategoriesWithServicesAndPrices {
  categoriesWithServices?: TCategoryWithServicesAndPrices[];
}

export type {
  TServiceWithPrices,
  TCategoryWithServicesAndPrices,
  IWithCategoriesWithServicesAndPrices
};