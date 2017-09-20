

ci:
	COMPOSE_FILE=docker-compose.ci.yml \
	PORT=3000 \
		make	clean \
					install \
					lint \
					unit-tests \
					build \
					installProdOnly \
					docker-build \
					staging

clean:
	docker-compose run --rm clean

install:
	docker-compose run --rm install

lint:
	docker-compose run --rm lint

unit-tests:
	docker-compose run --rm unit-tests

build:
	NODE_ENV=production docker-compose run --rm build

installProdOnly:
	docker-compose run --rm npmClean
	docker-compose run --rm installProdOnly

docker-build:
	docker build -t myservice .

staging:
	docker-compose run --rm install
	docker-compose up -d staging-deps && \
  	docker-compose run --rm staging
	docker-compose down
