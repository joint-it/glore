<div align="center">
  <img src="https://raw.githubusercontent.com/jointorg/glore/refs/heads/main/.github/static/glore.png" alt="" width="90" />
  <h1>GloRe eLearning</h1>
  <a href="https://github.com/jointorg/glore/actions/workflows/code-quality.yml">
    <img src="https://github.com/jointorg/glore/actions/workflows/code-quality.yml/badge.svg" />
  </a>
</div>

[GloRe](https://glorecertificate.net) is an official certificate that verifies volunteering activities.

Visit the website to find out how to sign up to the e-learning platform and get the certificate recognizing your soft skills.

## About

The GloRe eLearning platform is a monorepository including a <a href="https://nextjs.org"><img src="https://raw.githubusercontent.com/jointorg/glore/refs/heads/main/.github/static/next-js.svg" style="height: 12px; margin-right: 2px;">Next.js</a> application backed by <a href="https://supabase.com"><img src="https://raw.githubusercontent.com/jointorg/glore/refs/heads/main/.github/static/supabase.svg" style="height: 12px">Supabase</a> and different utility packages.

The project uses <a href="https://tailwindcss.com"><img src="https://raw.githubusercontent.com/jointorg/glore/refs/heads/main/.github/static/tailwind.svg" style="height: 10px">Tailwind CSS</a> and <a href="https://ui.shadcn.com"><img src="https://raw.githubusercontent.com/jointorg/glore/refs/heads/main/.github/static/shadcn.png" style="height: 12px">shadcn/ui</a> components for building the user interface.

## Contributing

If you want to contribute to the project, follow the instructions below to set up your local development environment.

### Prerequisites

You must download and activate the Node.js version specified [here](https://github.com/francojoint/glore/blob/main/.node-version).

### Installation

Download the project using the GitHub client or Git:

```sh
gh repo clone jointorg/glore
# or
git clone https://github.com/jointorg/glore.git
```

Navigate to the project directory, activate pnpm using Corepack and install the project dependencies:

```sh
cd glore
corepack enable
corepack install
pnpm install
```

### Environment Setup

Switch to the project directory and copy the `.env.example` file to `.env`:

```sh
cd apps/elearning
cp .env.example .env
```

Fill in the environment variables in the file to have access to all services.

### Development

Run the development server with:

```bash
pnpm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser to see the result. Any changes you make to the code will be reflected in real-time.

To develop new features, create a branch starting from `main`:

```sh
git checkout -b feature/my-feature-name
```

Once you are done with your changes, push the branch to the repository and create a pull request.

## Releases

To release new versions of the project, you must copy the `.env.example` file at the root of the project to `.env` and specify the `GITHUB_TOKEN` environment variable.

Then, run the following command to create a new release:

```sh
pnpm run release
```

## License

[MIT](LICENSE)
