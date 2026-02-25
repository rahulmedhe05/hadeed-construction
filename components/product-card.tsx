import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
  categorySlug?: string
}

export function ProductCard({ product, categorySlug }: ProductCardProps) {
  const detailHref = categorySlug
    ? `/equipments/${categorySlug}/${product.slug}`
    : undefined

  return (
    <div className="group bg-[#1a1a2e] border border-[#c8a35a]/15 rounded-2xl overflow-hidden hover:border-[#c8a35a]/40 transition-all">
      {/* Product Image */}
      {detailHref ? (
        <Link href={detailHref} className="block aspect-[4/3] bg-[#141425] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      ) : (
        <div className="aspect-[4/3] bg-[#141425] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        {detailHref ? (
          <Link href={detailHref}>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8a35a] transition-colors">
              {product.name}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8a35a] transition-colors">
            {product.name}
          </h3>
        )}
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={product.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-[#0d0d1a] px-5 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            Get Quote!
          </a>
          {detailHref && (
            <Link
              href={detailHref}
              className="inline-flex items-center gap-2 border border-[#c8a35a]/40 text-[#c8a35a] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#c8a35a]/10 transition-colors"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
