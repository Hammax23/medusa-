import { clx } from "@modules/common/components/ui"

type PageHeaderProps = {
  label?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

const PageHeader = ({
  label,
  title,
  description,
  className,
  children,
}: PageHeaderProps) => {
  return (
    <div className={clx("enterprise-page-header", className)}>
      <div className="content-container py-12 small:py-16">
        <div className="flex flex-col small:flex-row small:items-end small:justify-between gap-6">
          <div className="max-w-2xl">
            {label && (
              <p className="enterprise-section-label text-gold-400 mb-3">
                {label}
              </p>
            )}
            <h1 className="font-display text-3xl small:text-4xl font-semibold text-white tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-3 text-whet-300 text-base leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
