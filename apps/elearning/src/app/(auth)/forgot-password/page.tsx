import { resetPasswordAction } from '@/app/actions'
import { Stack } from '@/components/layout'
import { Link, Text } from '@/components/typography'
import { Button, Card, Field, FormMessage, Input, type Message } from '@/components/ui'

export default async function ForgotPassword(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>{'Reset password'}</Card.Title>
        <Card.Description>{'Enter your email to reset your password'}</Card.Description>
        <Text textStyle="xs">
          {`Already have an account?`}{' '}
          <Link href="/sign-in" className="text-primary underline">
            {'Sign in'}
          </Link>
        </Text>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="Email">
            <Input type="email" placeholder="you@example.com" required />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="end">
        <Button variant="outline">{'Cancel'}</Button>
        <Button type="submit" variant="solid" formAction={resetPasswordAction}>
          {'Reset password'}
        </Button>
        <FormMessage message={searchParams} />
      </Card.Footer>
    </Card.Root>
  )
}
