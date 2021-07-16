define({ "api": [
  {
    "type": "post",
    "url": "/examples",
    "title": "Create example",
    "name": "Create",
    "group": "Example",
    "parameter": {
      "fields": {
        "Request body JSON": [
          {
            "group": "Request body JSON",
            "type": "String",
            "optional": false,
            "field": "item_1",
            "description": "<p>Item 1 example</p>"
          },
          {
            "group": "Request body JSON",
            "type": "String",
            "optional": false,
            "field": "item_2",
            "description": "<p>Item 2 example</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message after result.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/example.js",
    "groupTitle": "Example"
  },
  {
    "type": "post",
    "url": "/examples",
    "title": "Create example",
    "name": "Create",
    "group": "Example",
    "parameter": {
      "fields": {
        "Request body JSON": [
          {
            "group": "Request body JSON",
            "type": "String",
            "optional": false,
            "field": "item_1",
            "description": "<p>Item 1 example</p>"
          },
          {
            "group": "Request body JSON",
            "type": "String",
            "optional": false,
            "field": "item_2",
            "description": "<p>Item 2 example</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message after result.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "Example"
  },
  {
    "type": "get",
    "url": "/examples",
    "title": "Request example information",
    "name": "GetAll",
    "group": "Example",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_1",
            "description": "<p>First description of Example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_2",
            "description": "<p>Second description of Example.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/example.js",
    "groupTitle": "Example"
  },
  {
    "type": "get",
    "url": "/barcode/:barcode",
    "title": "Request example information",
    "name": "GetByBarcode",
    "group": "ProductSearch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_1",
            "description": "<p>First description of Example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_2",
            "description": "<p>Second description of Example.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "ProductSearch"
  },
  {
    "type": "get",
    "url": "/barcode/:barcode",
    "title": "Request example information",
    "name": "GetByProductName",
    "group": "ProductSearch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_1",
            "description": "<p>First description of Example.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_2",
            "description": "<p>Second description of Example.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "ProductSearch"
  }
] });
