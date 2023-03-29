# Kardasz.Dev

## T3-Stack:

    - [Next.js](https://nextjs.org)
    - [Tailwind CSS](https://tailwindcss.com)
    - [tRPC](https://trpc.io)

## Learn More

    To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:
    - [Documentation](https://create.t3.gg/)
    - [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials
    You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

    Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

## CMD:

    ```
    docker build -t kardasz-dev --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
    docker run -p 3000:3000 -e DATABASE_URL="database_url_goes_here" ct3a-docker
    ```
    ```
    docker compose up
    ```

npm
