import { type Config } from 'release-it'

export default {
  hooks: {
    'after:init': 'pnpm run build && pnpm run check',
    'after:release': 'echo Successfully released ${name}@${version}.',
  },
  git: {
    push: true,
    commitMessage: 'chore: release v${version}',
    pushArgs: ['--follow-tags', '--no-verify'],
    tagName: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    autoGenerate: true,
  },
  npm: {
    publish: false,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
      header: '# Changelog',
      infile: 'CHANGELOG.md',
    },
  },
} satisfies Config
