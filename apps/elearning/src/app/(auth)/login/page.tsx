import { LoginForm } from '@/components/blocks/login-form'
import { getTranslations } from '@/services/i18n'

export default async () => {
  const t = await getTranslations('Auth')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t('loginTitle')}</h1>
        <p className="text-sm text-balance text-muted-foreground">{t('loginSubtitle')}</p>
      </div>
      <LoginForm />
    </div>
  )
}
