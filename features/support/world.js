// @flow

import firebaseFactory from '../../'

// Till the di and config service is not ready
import InMemoryFirebase from '../../implementations/memory'
import realFactory from '../../implementations/real'
const mockDi = {
  get: () => ({firebase: 'memory'}),
  getImplementaion: () => new InMemoryFirebase(),
  // getImplementaion: () => realFactory(),
}

class World {
  container: any
  context: any

  constructor() {
    this.context = {}

    const instances = {
      firebase: firebaseFactory(mockDi)
    }

    this.container = {
      get: (name) => instances[name]
    }
  }
}

export default function(): void {
  this.World = World
}
