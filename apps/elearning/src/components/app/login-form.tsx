import { Box, Flex, Grid } from '@/components/layout'
import { Link } from '@/components/typography'
import { Checkbox, Input, Label, Submit } from '@/components/ui'
import { getTranslations } from '@/services/i18n'

export const LoginForm = async () => {
  // const db = await getDB()
  const t = await getTranslations('Login')

  return (
    <Grid className="gap-6">
      <Grid className="gap-2">
        <Label htmlFor="email">{'Email'}</Label>
        <Input id="email" placeholder="me@example.com" required type="email" variant="secondary" />
      </Grid>
      <Grid className="gap-2">
        <Flex align="center">
          <Label htmlFor="password">{'Password'}</Label>
          <Link className="ml-auto text-sm" href="#">
            {t('forgotPassword')}
          </Link>
        </Flex>
        <Input id="password" required type="password" variant="secondary" />
        <Flex>
          <Checkbox id="rememberMe" />
          <Label className="ml-2" htmlFor="rememberMe">
            {t('rememberMe')}
          </Label>
        </Flex>
      </Grid>
      <Submit fullWidth variant="gradient">
        {t('login')}
      </Submit>
      <Box className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">{t('dividerMessage')}</span>
      </Box>
      <Box className="text-center text-sm">
        {t.rich('registerMessage', {
          link: chunks => <Link href="/">{chunks}</Link>,
        })}
      </Box>
    </Grid>
  )
}
