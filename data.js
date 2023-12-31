const data ={
    "varieties": [
        {
          "code": "SIZE",
          "description": "Izmērs",
          "options": [
            {"code": "S", "description": "Small"},
            {"code": "M", "description": "Medium"},
            {"code": "L", "description": "Large"}
          ]
        },
        {
          "code": "COLOR",
          "description": "Krāsa",
          "options": [
            {"code": "RED", "description": "Sarkans"},
            {"code": "BLU", "description": "Zils"},
            {"code": "WHI", "description": "Balts"}
          ]
        },
        {
          "code": "SHOE-SIZE",
          "description": "Apavu izmērs",
          "options": [
            {"code": "37", "description": "37"},
            {"code": "38", "description": "38"},
            {"code": "39", "description": "39"},
            {"code": "40", "description": "40"},
            {"code": "41", "description": "41"},
            {"code": "42", "description": "42"},
            {"code": "43", "description": "43"},
            {"code": "44", "description": "44"}
          ]
        }
      ],
      "items": [
        {
          "code": "0001", 
          "description": "T-krekls Rīga",
          "varieties": [ "COLOR", "SIZE" ]
        },
        {
          "code": "0002", 
          "description": "T-krekls ar saules attēlu",
          "varieties": [ "SIZE" ]
        },
        {
          "code": "1001", 
          "description": "Zābaki 'Great stuff'",
          "varieties": [ "SHOE-SIZE" ]
        },
        {
          "code": "1002", 
          "description": "Čības ar puķītēm",
          "varieties": [ "COLOR", "SHOE-SIZE" ]
        },
        {
          "code": "2001", 
          "description": "lodīšu pildspalva",
          "varieties": ["COLOR"]
        }
      ]
}