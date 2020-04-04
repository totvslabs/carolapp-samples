ifeq ($(OS),Windows_NT)
	OPEN := start
else
	UNAME := $(shell uname -s)
	ifeq ($(UNAME),Linux)
		OPEN := xdg-open
	endif
	ifeq ($(UNAME),Darwin)
		OPEN := open
	endif
endif

.PHONY: help

help: ## Show this help message
	@echo "web_carolapp Makefile help.\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all project dependencies
	npm install -g @angular/cli && npm install

datamodels: ## Updates all data models from your Carol Environment (requires Carol User and Password)
	npm run update-model

clean: ## Clean this project
	@echo "Clean dist folder"
	@rm -Rf dist/*

build: ## Build Carol Web App
	@ng build --prod

test: ## Test current project. Runs all unit and end to end tests
	@ng test && ng e2e

run: ## Starts a dev webserver at http://localhost:3000/
	@npm start

lint: ## Check the project source code for good practicies
	@ng lint
