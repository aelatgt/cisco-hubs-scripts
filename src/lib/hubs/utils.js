/**
 * Modifies an existing component's dependencies array.
 * This allows a new component to appear alongside a built-in Hubs component
 *
 * @param {string} baseComponent Name of the component whose dependencies should be modified
 * @param {string} dependentComponent Name of the component to inject in baseComponent's dependencies
 */
export function injectDependency(baseComponent, dependentComponent) {
  AFRAME.components[baseComponent].dependencies ??= []
  AFRAME.components[baseComponent].dependencies.push(dependentComponent)
}
