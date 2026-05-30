FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
RUN yarn install --frozen-lockfile

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json yarn.lock /app/
WORKDIR /app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
RUN yarn install --frozen-lockfile --production=true

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
RUN yarn build

FROM node:20-alpine
COPY ./package.json yarn.lock /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
CMD ["yarn", "start"]
