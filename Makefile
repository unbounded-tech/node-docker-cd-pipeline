

ci:
	COMPOSE_FILE=docker-compose.ci.yml \
		make	clean \
					devDeps \
					lint \
					unit-tests \
					build \
					prodDeps \
					docker-build \
					staging

clean:
	docker-compose run --rm clean

devDeps:
	docker-compose run --rm devDeps

lint:
	docker-compose run --rm lint

unit-tests:
	docker-compose run --rm unit-tests

build:
	NODE_ENV=production docker-compose run --rm build

prodDeps:
	docker-compose run --rm prodDeps

docker-build:
	docker build -t myservice .

staging:
	docker-compose run --rm devDeps
	docker-compose up -d staging-deps && \
  	docker-compose run --rm staging