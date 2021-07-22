define({ "api": [
  {
    "type": "get",
    "url": "/v1/check/barcode/:barcode",
    "title": "Check Barcode Exists in Database",
    "name": "CheckBarcodeExists",
    "group": "BarcodeUtilities",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Result statement (FAILED, SUCCESS).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Confirm that product exists.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "BarcodeUtilities"
  },
  {
    "type": "post",
    "url": "/v1/barcode/generate",
    "title": "Create barcode",
    "name": "GenerateBarcode",
    "group": "BarcodeUtilities",
    "parameter": {
      "fields": {
        "Request body JSON": [
          {
            "group": "Request body JSON",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content Input string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "SVG",
            "optional": false,
            "field": "Image",
            "description": "<p>result in SVG format.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "BarcodeUtilities"
  },
  {
    "type": "get",
    "url": "/v1/search/barcode/:barcode",
    "title": "Get product by barcode",
    "name": "GetByBarcode",
    "group": "ProductSearch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Barcode string of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Type/category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit_of_measure",
            "description": "<p>UoM for the product</p>"
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
    "url": "/v1/search/name/:name",
    "title": "Get barcode by product name",
    "name": "GetByProductName",
    "group": "ProductSearch",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Barcode string of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_name",
            "description": "<p>Name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Type/category of product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit_of_measure",
            "description": "<p>UoM for the product</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/products.js",
    "groupTitle": "ProductSearch"
  }
] });
