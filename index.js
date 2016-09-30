// @flow

interface Di {
  get(name: string): ImplementationConfig,
  getImplementaion(name: string, implementation: string): any
}

interface ImplementationConfig {
  firebase: string
}

export default function (di: Di) {
  const implementation: string = di.get('config').firebase
  return di.getImplementaion('firebase', implementation);
}
