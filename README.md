# Estate

Requires NodeJS v18 + Yarn

Usage: `yarn install`, `yarn start:client`, `yarn start:server`

Useful links:

- [Client design](https://www.figma.com/file/uWuQ3fr0YRUbhubnpFY28l)
- [Admin design](https://www.figma.com/file/QAkkVQcJVtOStJmhd1SkKm/estate_admin_dashboard?node-id=6%3A49&t=AexcRAkfzQWv6BrG-1)

<br/>

## Create db, migrate and seed (development)

1. `yarn db:prestart` or `yarn db:migrate`
2. `yarn db:seed`

<br/>

## Containerize an app using Docker (production)

### Run Docker Compose:

`docker-compose up`

### Database seeding:

Go to estate container terminal and type:
`yarn db:seed`
