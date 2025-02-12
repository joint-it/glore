import { ExternalLink } from '@/components/ui/link'

export default () => (
  <div>
    <div>
      <small>
        <strong>{' Note:'}</strong> {'Emails are rate limited. Enable Custom SMTP to'}
        {'increase the rate limit.'}
      </small>
      <div>
        <ExternalLink href="https://supabase.com/docs/guides/auth/auth-smtp" target="_blank">
          {'Learn more '}
        </ExternalLink>
      </div>
    </div>
  </div>
)
