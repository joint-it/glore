import app from 'config/app.json'

/**
 * Builds the display name of a component.
 */
export const displayName = (componentName: string) => `${app.name}${componentName}`
