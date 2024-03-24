import { RuleConfigSeverity, UserConfig } from "@commitlint/types"

const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['web', 'api', 'repo', 'eslint-config', 'typescript-config'],
    ],
    "scope-empty": [RuleConfigSeverity.Error, 'never']
  }
} satisfies UserConfig

export default config
