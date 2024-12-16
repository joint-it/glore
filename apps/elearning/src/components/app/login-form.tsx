import { Flex } from '@/components/layout'
import { Link } from '@/components/typography'
import { Input, Label, Submit } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import { useTranslations } from '@/hooks/use-locale'

export const LoginForm = () => {
  const t = useTranslations('Login')

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">{'Email'}</Label>
        <Input id="email" placeholder="m@example.com" required type="email" />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">{'Password'}</Label>
          <a className="ml-auto text-sm underline-offset-4 hover:underline" href="#">
            {t('forgotPassword')}
          </a>
        </div>
        <Input id="password" required type="password" />
        <Flex>
          <Checkbox id="rememberMe" />
          <Label className="ml-2" htmlFor="rememberMe">
            {/* {t('rememberMe')} */}
          </Label>
        </Flex>
      </div>
      <Submit className="w-full">{t('login')}</Submit>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">{t('dividerMessage')}</span>
      </div>
      <div className="text-center text-sm">
        {t.rich('registerMessage', {
          link: chunks => <Link href="/">{chunks}</Link>,
        })}
      </div>
    </div>
  )
}
