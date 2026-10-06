export type RegisterField = 'name' | 'email' | 'role' | 'teamSize'
export type RegisterErrors = Partial<Record<RegisterField, string>>

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const ROLES = ['ug_pg', 'phd', 'faculty', 'industry']
const TEAM_SIZES = ['3 Members', '4 Members', '5 Members', '3', '4', '5']

export function validateRegistration(values: Record<RegisterField, string>): RegisterErrors {
  const errors: RegisterErrors = {}
  const name = values.name.trim()
  if (name.length < 2) errors.name = 'Tell us your name (at least 2 characters).'
  else if (name.length > 80) errors.name = 'Name must be under 80 characters.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!ROLES.includes(values.role)) errors.role = 'Please select a participant category.'
  if (!TEAM_SIZES.includes(values.teamSize)) errors.teamSize = 'Team size must be between 3 and 5 members.'
  return errors
}
