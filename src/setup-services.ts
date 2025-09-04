import { LocalVariablesService, LocalSecretService } from '@pikku/core/services'
import {
  createConfig,
  createSingletonServices,
} from './services.js'

export const setupServices = async (
  env: Record<string, string | undefined>
) => {
  const localVariables = new LocalVariablesService(env)
  const config = await createConfig(localVariables)
  const localSecrets = new LocalSecretService(localVariables)
  return await createSingletonServices(config, {
    variables: localVariables,
    secrets: localSecrets,
  })
}
