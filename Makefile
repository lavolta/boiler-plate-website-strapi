# Makefile

# Variables par défaut (optionnel mais propre)
COMPOSE_BASE := docker-compose.yml

# ==============================================================================
# 🚀 Commandes de Démarrage
# ==============================================================================

# Commande pour démarrer l'environnement de DÉVELOPPEMENT
# Utilise la base + la surcharge pour le dev
# (Nécessite d'avoir docker-compose.dev.yml)
dev:
	@echo "Démarrage de l'environnement de DÉVELOPPEMENT..."
	docker compose --env-file .env.dev -f $(COMPOSE_BASE) -f docker-compose.dev.yml up  -d --build

prod:
	@echo "Démarrage de l'environnement de PRODUCTION..."
	docker compose --env-file .env -f $(COMPOSE_BASE)  up -d --build
# ==============================================================================
# 🧹 Commandes Utiles
# ==============================================================================

# Arrête et supprime tous les conteneurs et les réseaux
down:
	@echo "Arrêt et suppression de tous les conteneurs..."
	docker compose down

# Affiche les logs en temps réel
logs:
	@echo "Affichage des logs..."
	docker compose logs -f

# ==============================================================================
# 🧹 Commandes Utiles
# ==============================================================================

# ... (down et logs existent déjà)

# Arrête et supprime les conteneurs et les VOLUMES du projet (ATTENTION aux données)
down-volumes:
	@echo "Arrêt et suppression des conteneurs, réseaux et VOLUMES du projet..."
	docker compose down -v

# Nettoyage complet (DANGER : Supprime tout ce qui n'est pas utilisé sur le système)
prune: down
	@echo "--- Nettoyage global du système Docker (Conteneurs, Images, Cache) ---"
	# Supprime tous les conteneurs arrêtés, les images non utilisées et le cache de build
	docker system prune -a --volumes --force
	@echo "Nettoyage terminé. L'espace disque a été libéré."
