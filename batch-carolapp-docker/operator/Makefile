IMAGE = carolapp_sample_docker
APP = sample
OPERATOR ?= api.operator.carol.ai
ENVIRONMENT ?= labs-app-mdm-production

TOKEN ?=
USER ?=
ID ?=
GHTOKEN ?=

.PHONY: spec
spec:
	@APP=$(USER) IMAGE=$(IMAGE) ENVIRONMENT=$(ENVIRONMENT) envsubst < spec.json > spec.json_tmp

.PHONY: build
build: spec
	@curl -sXPOST -H "x-auth-token:$(TOKEN)" \
		"https://$(OPERATOR)/api/builds" -d@./spec.json_tmp

.PHONY: get
get:
	@curl -sXGET -H "x-auth-token:$(TOKEN)" \
		"https://$(OPERATOR)/api/builds/build/$(APP)/$(ID)"

.PHONY: delete
delete:
	@curl -sXDELETE -H "x-auth-token:$(TOKEN)" \
		"https://$(OPERATOR)/api/builds/build/$(APP)/$(ID)"
