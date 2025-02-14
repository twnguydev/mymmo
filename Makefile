# Variables
DOCKER_COMPOSE = docker compose
ENV_DEV = NODE_ENV=development
ENV_PROD = NODE_ENV=production
DOCKER_COMPOSE_DEV = $(DOCKER_COMPOSE) -f docker-compose.dev.yml --env-file .env.development
DOCKER_COMPOSE_PROD = $(DOCKER_COMPOSE) -f docker-compose.prod.yml --env-file .env.production

# Commandes de développement
.PHONY: dev
dev: ## Démarrer l'environnement de développement
	$(ENV_DEV) $(DOCKER_COMPOSE_DEV) up --build

.PHONY: dev-d
dev-d: ## Démarrer l'environnement de développement en mode détaché
	$(ENV_DEV) $(DOCKER_COMPOSE_DEV) up --build -d

.PHONY: dev-stop
dev-stop: ## Arrêter l'environnement de développement
	$(ENV_DEV) $(DOCKER_COMPOSE_DEV) down

.PHONY: dev-logs
dev-logs: ## Afficher les logs de développement
	$(ENV_DEV) $(DOCKER_COMPOSE_DEV) logs -f

.PHONY: dev-clean
dev-clean: ## Nettoyer l'environnement de développement
	$(ENV_DEV) $(DOCKER_COMPOSE_DEV) down -v

# Commandes de production
.PHONY: prod
prod: ## Démarrer l'environnement de production
	$(ENV_PROD) $(DOCKER_COMPOSE_PROD) up --build

.PHONY: prod-d
prod-d: ## Démarrer l'environnement de production en mode détaché
	$(ENV_PROD) $(DOCKER_COMPOSE_PROD) up --build -d

.PHONY: prod-stop
prod-stop: ## Arrêter l'environnement de production
	$(ENV_PROD) $(DOCKER_COMPOSE_PROD) down

.PHONY: prod-logs
prod-logs: ## Afficher les logs de production
	$(ENV_PROD) $(DOCKER_COMPOSE_PROD) logs -f

.PHONY: prod-clean
prod-clean: ## Nettoyer l'environnement de production
	$(ENV_PROD) $(DOCKER_COMPOSE_PROD) down -v

# Commandes générales
.PHONY: clean
clean: ## Nettoyer tous les conteneurs et volumes
	$(DOCKER_COMPOSE_DEV) down -v
	$(DOCKER_COMPOSE_PROD) down -v
	docker system prune -f

.PHONY: ps
ps: ## Afficher les conteneurs en cours d'exécution
	docker ps

# Base de données
.PHONY: db-dev-backup
db-dev-backup: ## Sauvegarder la base de données de développement
	mkdir -p ./backups
	docker exec owneo-db-1 mysqldump -u root -p$(shell grep MYSQL_ROOT_PASSWORD .env.development | cut -d '=' -f2) owneo > ./backups/dev-backup-$$(date +%Y%m%d-%H%M%S).sql

.PHONY: db-prod-backup
db-prod-backup: ## Sauvegarder la base de données de production
	mkdir -p ./backups
	docker exec owneo-db-1 mysqldump -u root -p$(shell grep MYSQL_ROOT_PASSWORD .env.production | cut -d '=' -f2) owneo > ./backups/prod-backup-$$(date +%Y%m%d-%H%M%S).sql

# Aide
.PHONY: help
help: ## Afficher l'aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help