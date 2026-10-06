'use server'

import { EMAIL_PATTERN, validateRegistration, type RegisterErrors } from '@/lib/validation'

export type RegisterState = {
  status: 'idle' | 'error' | 'success'
  errors?: RegisterErrors
  name?: string
}

export async function registerAction(_prev: RegisterState, formData: FormData): Promise<RegisterState> {
  const values = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    role: String(formData.get('role') ?? ''),
    teamSize: String(formData.get('teamSize') ?? ''),
  }
  const errors = validateRegistration(values)
  if (Object.keys(errors).length > 0) return { status: 'error', errors }

  await new Promise((resolve) => setTimeout(resolve, 600))
  return { status: 'success', name: values.name.trim().split(' ')[0] }
}

export type SubscribeState = { status: 'idle' | 'error' | 'success'; message?: string }

export async function subscribeAction(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get('email') ?? '').trim()
  if (!EMAIL_PATTERN.test(email)) return { status: 'error', message: 'Enter a valid email address.' }
  await new Promise((resolve) => setTimeout(resolve, 400))
  return { status: 'success', message: 'You are on the list. Fresh updates incoming.' }
}
