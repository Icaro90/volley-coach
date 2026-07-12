import type { RotationFormation } from '../data/rotation'

export function getServer(formation: RotationFormation) {
  return formation[1]
}
