"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"
import { useLanguage } from "@lib/context/language-context"


const getSideMenuItems = (t: (key: string) => string): { name: string; href: string }[] => [
  { name: t("side.home"), href: "/" },
  { name: t("side.allPlants"), href: "/store" },
  { name: t("side.indoorPlants"), href: "/categories/indoor-plants" },
  { name: t("side.outdoorPlants"), href: "/categories/outdoor-plants" },
  { name: t("side.succulents"), href: "/categories/succulents" },
  { name: t("side.supplies"), href: "/categories/supplies" },
  { name: t("side.offers"), href: "/collections/offers" },
  { name: t("side.myAccount"), href: "/account" },
  { name: t("side.cart"), href: "/cart" },
]

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()
  const { t, language } = useLanguage()
  const SideMenuItems = getSideMenuItems(t)

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center text-plant-700 hover:text-plant-500 transition-colors focus:outline-none p-2 rounded-lg hover:bg-plant-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/0 pointer-events-auto"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-[51] inset-x-0 text-sm m-2">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-white border border-plant-200 rounded-xl shadow-2xl justify-between p-6"
                  >
                    <div className="flex justify-between items-center mb-6" id="xmark">
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="p-2 hover:bg-plant-50 rounded-lg transition-colors"
                      >
                        <XMark className="text-plant-600" />
                      </button>
                      <h2 className="text-lg font-bold text-plant-800">{t("nav.menu")}</h2>
                    </div>
                    <ul className={`flex flex-col gap-2 items-stretch justify-start flex-1 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                      {SideMenuItems.map((item) => {
                        return (
                          <li key={item.name}>
                            <LocalizedClientLink
                              href={item.href}
                              className="block px-4 py-3 text-lg text-plant-700 hover:text-plant-600 hover:bg-plant-50 rounded-lg transition-all"
                              onClick={close}
                              data-testid={`${item.name.toLowerCase()}-link`}
                            >
                              {item.name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-4 pt-6 border-t border-plant-100">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between items-center p-3 bg-plant-50 rounded-lg"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150 text-plant-500",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                        </div>
                      )}
                      <div
                        className="flex justify-between items-center p-3 bg-plant-50 rounded-lg"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-plant-500",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                      </div>
                      <Text className="flex justify-center text-plant-400 text-xs">
                        © {new Date().getFullYear()} {t("footer.copyright")}
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
