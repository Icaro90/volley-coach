import { describe, expect, test } from 'vitest'
import { homeShortcuts } from '../../src/features/home/data/homeShortcuts'

describe('homeShortcuts', () => {
  test('provides exactly the four essential home destinations', () => {
    expect(homeShortcuts.map((shortcut) => shortcut.path)).toEqual(['/rules', '/training', '/quiz', '/favorites'])
  })

  test('uses unique paths with a title and description for every shortcut', () => {
    expect(new Set(homeShortcuts.map((shortcut) => shortcut.path))).toHaveLength(homeShortcuts.length)

    homeShortcuts.forEach((shortcut) => {
      expect(shortcut.title).not.toHaveLength(0)
      expect(shortcut.description).not.toHaveLength(0)
    })
  })
})
