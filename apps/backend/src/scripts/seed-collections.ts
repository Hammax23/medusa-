import { MedusaContainer } from "@medusajs/framework/types"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import {
  createCollectionsWorkflow,
  updateProductsWorkflow,
} from "@medusajs/medusa/core-flows"

export default async function seedCollections({
  container,
}: {
  container: MedusaContainer
}) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const { data: existingCollections } = await query.graph({
    entity: "product_collection",
    fields: ["id"],
  })

  if (existingCollections?.length) {
    logger.info("Collections already exist — skipping seed.")
    return
  }

  logger.info("Seeding product collections...")

  const { result: collections } = await createCollectionsWorkflow(
    container
  ).run({
    input: {
      collections: [
        {
          title: "Apparel",
          handle: "apparel",
        },
        {
          title: "Essentials",
          handle: "essentials",
        },
      ],
    },
  })

  const apparel = collections.find((c) => c.handle === "apparel")
  const essentials = collections.find((c) => c.handle === "essentials")

  if (!apparel || !essentials) {
    throw new Error("Failed to create collections")
  }

  const { data: products } = await query.graph({
    entity: "product",
    fields: ["id", "handle"],
  })

  const apparelHandles = new Set(["t-shirt", "sweatshirt"])

  await updateProductsWorkflow(container).run({
    input: {
      products: products.map((product: { id: string; handle: string }) => ({
        id: product.id,
        collection_id: apparelHandles.has(product.handle)
          ? apparel.id
          : essentials.id,
      })),
    },
  })

  logger.info(
    `Seeded ${collections.length} collections and linked ${products.length} products.`
  )
}
