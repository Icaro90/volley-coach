import type { RotationFormation } from '../data/rotation'

export function rotateFormation(formation: RotationFormation): RotationFormation {
  return {
    1: formation[2],
    2: formation[3],
    3: formation[4],
    4: formation[5],
    5: formation[6],
    6: formation[1],
  }
}
