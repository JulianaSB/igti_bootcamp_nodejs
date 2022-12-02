export const swaggerDocument = {
    "swagger": "2.0",
    "info": {
      "description": "My bank app description.",
      "version": "1.0.0",
      "title": "My bank app description."
    },
    "host": "localhost:8080",
    "tags": [
      {
        "name": "account",
        "description": "Account Management"
      }
    ],
    "paths": {
      "/account": {
        "get": {
          "tags": [
            "account"
          ],
          "summary": "Get existing accounts",
          "description": "Get existing accounts description",
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "sucess",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Account"
                }
              }
            },
            "400": {
              "description": "error"
            }
          }
        },
        "post": {
          "tags": [
            "account"
          ],
          "summary": "Create a new account",
          "description": "Create a new account with the parameters",
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Account objects",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Account"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Account created"
            },
            "400": {
              "description": "error"
            }
          }
        }
      }
    },
    "definitions": {
      "Account": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "balance": {
            "type": "integer"
          }
        }
      }
    }
  };