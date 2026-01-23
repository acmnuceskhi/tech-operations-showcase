/**
 * Icon Mapper Utility
 *
 * Resolves React icon components from string identifiers stored in Tina CMS.
 * This allows us to store icon names as strings in JSON and resolve them to
 * actual React components at runtime.
 */

import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

/**
 * Get a React icon component from library and name
 * @param {string} iconLibrary - Icon library ('fa' or 'si')
 * @param {string} iconName - Icon component name (e.g., 'FaReact', 'SiTypescript')
 * @returns {React.Component|null} - Icon component or null if not found
 */
export const getIconComponent = (iconLibrary, iconName) => {
  const libraries = {
    fa: FaIcons,
    si: SiIcons
  }

  const library = libraries[iconLibrary]
  if (!library) {
    console.warn(`Icon library "${iconLibrary}" not found`)
    return null
  }

  const IconComponent = library[iconName]
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in library "${iconLibrary}"`)
    return null
  }

  return IconComponent
}
