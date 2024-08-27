import type { FormApi, Validator } from '@tanstack/form-core'

export function createTransform<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
>(
  fn: (formBase: FormApi<any, any>) => FormApi<TFormData, TFormValidator>,
  deps: unknown[],
) {
  return {
    fn,
    deps,
  }
}
