# Makefile

# Variables
API_DIR = ./api
CLIENT_DIR = ./client

# Run the API
run-api:
	@echo "Starting the API..."
	@cd $(API_DIR) && npm start

# Run the frontend
run-client:
	@echo "Starting the frontend..."
	@cd $(CLIENT_DIR) && npm start

# Install dependencies for both API and frontend
install:
	@echo "Installing dependencies for API..."
	@cd $(API_DIR) && npm install
	@echo "Installing dependencies for frontend..."
	@cd $(CLIENT_DIR) && npm install

.PHONY: run-api run-client run-all install
