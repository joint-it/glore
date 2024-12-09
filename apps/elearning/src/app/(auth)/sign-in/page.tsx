import { signInAction } from '@/app/actions'
import { Stack } from '@/components/layout'
import { Link, Text } from '@/components/typography'
import { Button, Card, Field, FormMessage, Input, type Message } from '@/components/ui'

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>{'Sign in'}</Card.Title>
        <Card.Description>{'Fill in the form below to sign in'}</Card.Description>
        <Text textStyle="xs">
          {`Don't have an account?`}{' '}
          <Link href="/sign-up" className="text-primary underline">
            {'Sign up'}
          </Link>
        </Text>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="Email">
            <Input type="email" placeholder="you@example.com" required />
          </Field>
          <Field label="Password">
            <Input type="password" required minLength={8} />
            <Text textStyle="xs">
              <Link href="/forgot-password" className="text-primary underline">
                {'Forgot Password?'}
              </Link>
            </Text>
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="end">
        <Button variant="outline">{'Cancel'}</Button>
        <Button type="submit" variant="solid" loadingText="Signing ip..." formAction={signInAction}>
          {'Sign in'}
        </Button>
        <FormMessage message={searchParams} />
      </Card.Footer>
    </Card.Root>
  )
}
