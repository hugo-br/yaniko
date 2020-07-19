/* TABLEAU JSON DES MACHINES DISTRIBUTRICES. 
 - NE PAS OUBLIER LES VIRGULES APRÈS CHAQUE ÉLEMENT DU TABLEAU
 - CATÉGORIES DOIVENT ÊTRE BIEN INSCRITE COMME TEL : "Café" ; "Distributeur"
 - NOTEZ QUE LES DONNÉES VARIENT SELON LES CATEGORIES (copiez/colle pour creer une nouvelle)
 - METTRE LE NOM DU FICHIER DANS IMAGE
 - TOUJOURS AJOUTER UN CODE AUX MACHINES (IMPORTANT)

CANEVAS POUR MACHINES CAFÉ :
		{ "nom": "xyz", "categorie": "Café",  "image": "image.jpg",
		"description": ["blabla"], 
		"caracteristiques": ["<ol><li>LISTE DES CARACTÉRISTIQUES</li></ol>"],
		"options": ["<ul><li>LISTES DES OPTIONS</li></ul>"],
		"Volume" : [{"contenants": "Contenants à grains 1", "Produits": "Café Noir",  "Capacité": "4 lbs." , "250ml(8oz.)":"173 Tasses" },  {2,3,etc...}  ], 
		"Spécification" : [ {"contenants": "Contenants à grains 1", "Produits": "Café Noir",  "Capacité": "4 lbs." , "250ml(8oz.)":"173 Tasses" } ],
		},
		
CANEVAS POUR DISTRIBUTEUR :		
		{"code": "Merc-4", "nom": "Merchant 4", "categorie": "Distributeur", "image": "distributeur/Merchant4.jpg",    
			"description": ["<b> La Merchant 4 </b> "],
			"Caractéristiques": ["<ul><li>Configuration de 5 à 7 tiroirs</li><li>Écran DEL</li><li>SureVend - Oeil Magique </li><li>Port DEX</li></ul>"],
			"Spécification" : [{"Hauteur": "183cm", "Profondeur": "81.3cm",  "Largeur": "89.5cm" , "Poids":"247 kg", "Électricité":"120 Volts AC 60 HZ",  },]
		},
		
		
*/

/* ---------------TABLEAU JSON POUR MACHINE DISTRIBUTRICE ------------*/
/* ---------------TRADUCTION ------------
		- NE PAS CHANGER code, nom, categorie, image, description, caracteristiques, Options, volume/capacite et Spécification des donnees json
		- SEULEMENT TRADUIRE les titres de deuxieme niveau de Specification (hauteur, profondeur, etc.)
*/

var tabDistributrices = [
  {
    code: "G00610",
    nom: "Gourmet",
    categorie: "Café",
    image: "cafe/la_gourmet.jpg",
    description: [
      "The <strong><em>Avalon Gourmet</strong></em> advanced Whole Bean Coffee brewing technology provides convenient, affordable and flexible solutions to meet the coffee needs of today’s increasingly savvy consumers.",
    ],
    Caractéristiques: [
      "<ul><li>Equipped with a «Whipper Chamber», for the best froth for your Cappuccino, Long Espresso or Hot Shot Blend</li><li>Selection of 3 Whole Bean Coffees, 50/50, French Vanilla, Vanilla Moka, Hot Chocolate, Vanilla Coffee, Vanilla Moka, Coffee, Mokaccino, Energy Shot Coffee, Hot Shot Blend Coffee, , Long Espresso, Cafe Latte, Cappuccino, and Hot Water for tea</li><li>Two cup sizes</li><li>Two brew strengths</li><li>Environmentally friendly</li><li>Programmable options: cup sizes, brew strengths and product settings</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Chute kit</li><li>Condiment and cup dispenser</li><li>Water pump</li><li>Vending options: coin mechanism (interior mount), bill acceptor, cashless</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Dark Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Decaf",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Cups",
      },
      {
        Containers: "Hooper 3",
        Products: "Light Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Hooper 4",
        Products: "Hot Chocolate",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Cups",
      },
      {
        Containers: "Hooper 5",
        Products: "French Vanilla",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Cups",
      },
      {
        Containers: "Hooper 6",
        Products: "Powder Milk",
        Capacité: "1.4 lbs.",
        "250ml(8oz.)": "24 Cups",
      },
    ],

    Spécification: [
      {
        Height: "112cm (44 inches)",
        Depth: "63.5cm (25 inches)",
        Width: "47cm (18 1/2 inches).",
        Weight: "64 Kg (141 lbs.)",
        Electricity: "110 Volts, 15 amps, 60 HZ",
        "Filter Paper": "1800 coffee capacity (approx.)",
        "Water Services": "Plumbed or bottle",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "GA0609",
    nom: "Galleria",
    categorie: "Café",
    image: "cafe/galleria.jpg",
    description: [
      "<strong><em>Avalon Galleria</strong></em> is a single cup coffee brewer that includes the nation's favorite hot beverages. <strong><em>The Galleria</strong></em> is enhanced with an easy use interface that welcomes the user to a selection of coffees and hot beverages, suitable for a multitude of settings and the convenience of providing guaranteed freshness one cup at a time, anytime.",
    ],
    Caractéristiques: [
      "<ul><li>Equipped with a « Whipper Chamber » to froth your coffee</li><li>Selection of 3 Whole Bean Coffees, Long Espresso, Hot Chocolate, French Vanilla, Mokaccino, Vanilla Coffee and Hot Water for tea</li><li>Two cup sizes</li><li>Two brew strengths</li><li>Environmentally friendly</li><li>Programmable options: cup sizes, brew strengths and product settings</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Condiment and cup dispenser</li><li>Vending options : coin kit, bill acceptor, cashless</li><li>Water pump</li><li>Chute kit</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Dark Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Decaf",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Cups",
      },
      {
        Containers: "Hooper 3",
        Products: "Light Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Canister 1",
        Products: "Hot Chocolate",
        Capacité: "9 lbs.",
        "250ml(8oz.)": "208 Cups",
      },
      {
        Containers: "Canister 2",
        Products: "French Vanilla",
        Capacité: "6 lbs.",
        "250ml(8oz.)": "138 Cups",
      },
    ],

    Spécification: [
      {
        Height: "112cm (44 inches)",
        Depth: "66cm (26 inches)",
        Width: "47cm (18 1/2 inches).",
        Weight: "62 Kg (136 lbs.)",
        Electricity: "110 Volts, 15 amps, 60 HZ",
        "Filter Paper": "1800 coffee capacity (approx.)",
        "Water Services": "Plumbed or bottle",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "AL1104",
    nom: "Alternative",
    categorie: "Café",
    image: "cafe/lalternative.jpg",
    description: [
      " When all you really need is a perfect coffee, the <strong><em>Alternative</strong></em>  is the ideal solution. Its sleek compact brewer design is ideal for accounts ranging from 5 to 35 people. The <strong><em>Alternative</strong></em> a freshly brewed coffee available 24/7!",
    ],
    Caractéristiques: [
      "<ul><li>2 coffee selections</li><li>2 cup sizes ( 8 and 10 oz.)</li><li>Adjustable brew strengths </li><li>Hot water for tea</li><li>Proven Technology</li><li>Environmentally friendly</li><li>LCD screen</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Chute kit</li><li>Water pump(for bottle water)</li><li>Set of elongated legs</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Ground - Dark Roast",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "44 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Ground - Decaf",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "44 Cups",
      },
    ],

    Spécification: [
      {
        Height: "58cm (23 inches)",
        Depth: "50.8cm (20 inches)",
        Width: "26.7cm (10 1/2 inches).",
        Weight: "16.3 Kg (36 lbs.)",
        "Space required (width)": "40.6 cm (16 inches)",
        Electricity: "120 Volts, 15 amps, 60 HZ",
        "Filter Paper": "1600 coffee capacity (approx.)",
        "Water services": "plumbed or bottled",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "PE0803-X",
    nom: "Petite X",
    categorie: "Café",
    image: "cafe/cafe_petitex.jpg",
    description: [
      "The <strong><em>Avalon Petite X</strong></em> is the ultimate bean to cup experience, one cup at a time. With the advanced Whole Bean Coffee brewing technology, the <strong><em>Petite X</strong></em> provides convenient, affordable and flexible solutions to meet the coffee needs of today’s increasingly savvy consumers.",
    ],
    Caractéristiques: [
      "<ul><li>Selection of 3 Whole Bean Coffees, Long Espresso, Hot Chocolate, Café Latté, Mokaccino, Hot Water for your favorite tea </li><li>Two cup sizes</li><li>Two brew strengths</li><li>Environmentally Friendly</li><li>Programmable options: cup sizes, brew strengths and product settings</li><li>Sleek & compact for minimum space requirement</li><li>Delivers incomparable freshness</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Condiment and cup dispenser</li><li>Water pump</li><li>Vending options: coin mechanism, bill acceptor (U.S.), cashless</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Whole Beans - Medium Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Whole Beans - Decaf",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Cups",
      },
      {
        Containers: "Hooper 3",
        Products: "Whole Beans - Dark Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Canister 1",
        Products: "Soluble- Hot Chocolate",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "57 Cups",
      },
      {
        Containers: "Canister 2",
        Products: "Soluble - Powder Milk or French Vanilla",
        Capacité: "0.7 lbs.",
        "250ml(8oz.)": "32 Cups",
      },
    ],

    Spécification: [
      {
        Height: "101cm (39 1/4 inches)",
        Depth: "58cm (23 inches)",
        Width: "29cm (11 1/2 inches).",
        Weight: "41 Kg (90 lbs.)",
        Electricity: "110 Volts, 15 amps, 60 HZ",
        "Filter Paper": "1800 coffee capacity (approx.)",
        "Water services": "plumbed or bottled",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "T111104",
    nom: "Total 1",
    categorie: "Café",
    image: "cafe/cafe_latotal1.jpg",
    description: [
      "A hybrid Bean to Cup Solution! The <strong><em>Total 1</strong></em> guaranteeing freshly brewed coffee available 24/7. The Total 1 has 3 whole bean hoppers, 3 soluble canisters, an interactive screen and an optional built in receipt module. With the Total 1 brewer, you get a perfect cup each time!",
    ],
    Caractéristiques: [
      "<ul><li>3 Cup sizes - Between 5 to 20oz</li><li>3 Brew strengths</li><li>Selection of 3 Whole Bean Coffees, 50/50, French Vanilla, Vanilla Moka, Hot Chocolate, Vanilla Coffee, Vanilla Moka Coffee, Mokaccino, Energy Shot Coffee, Hot Shot Blend Coffee, Long Espresso, Cafe Latte, Cappuccino, and Hot Water for tea.</li><li>• Equipped with a “Whipper” to froth all your beverages</li><li>Environmentally friendly</li><li>Proven technology</li><li>Adjustable gram throw</li><li>Designed and engineered to expertly grind a bean</li><li>Brewed and steeped at the perfect temperature</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Receipt /printer</li><li>Vending Methods: Coin mechanism, Bill acceptor, Credit card</li><li>Condiment and cup dispenser</li><li>Water pump</li><li>Chute kit</li><li>A 10.4 inches Touchscreen</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Whole Beans - Dark Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Whole Beans - Decaf",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Cups",
      },
      {
        Containers: "Hooper 3",
        Products: "Whole Beans - Light Roast",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Cups",
      },
      {
        Containers: "Canister 1",
        Products: "Soluble- Hot Chocolate",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Cups",
      },
      {
        Containers: "Canister 2",
        Products: "Soluble - French Vanilla",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Cups",
      },
      {
        Containers: "Canister 2",
        Products: "Soluble - Powder Milk",
        Capacité: "1.4 lbs.",
        "250ml(8oz.)": "24 Cups",
      },
    ],

    Spécification: [
      {
        Height: "111.7cm (44 inches)",
        Depth: "63.5cm (25 inches)",
        Width: "46cm (18 1/2 inches).",
        Weight: "65.7 Kg (145 lbs.)",
        Electricity:
          "120 Volts, 15 amps, 60hz - 240 V, 30amp, 60hz (available)",
        "Filter Paper": "1600 coffee capacity (approx.)",
        "Cup Clearance": "19cm (7 1/2 inches) ",
        "Water Services": "plumbed or bottled",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "PE0803-R",
    nom: "Petite R",
    categorie: "Café",
    image: "cafe/cafe_petite_r.jpg",
    description: [
      "With its new trendy stainless finish, The <strong><em>Petite R</strong></em> is the perfect single-cup brewer for your coffee enjoyment. A single cup coffee brewer for ground coffee that provides convenient, affordable and flexible solutions to meet today's increasingly savvy consumers.",
    ],
    Caractéristiques: [
      "<ul><li>Selection of 2 Ground Coffees, Hot Chocolate, Mokaccino, French Vanilla, Vanilla Coffee, Hot Water for your favorite tea</li><li>Two cup sizes</li><li>Two brew strengths</li><li>Environmentally Friendly</li><li>Programmable options: cup sizes, brew strengths and product settings</li><li>Sleek & compact for minimum space requirement</li></ul>",
    ],
    Options: [
      "<ul><li>Base cabinet</li><li>Condiment and cup dispenser</li><li>Condiment and cup dispenser</li><li>Vending options: coin mechanism, bill acceptor (U.S.), cashless</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "Ground - Medium Roast",
        Capacité: "1.25 lbs.",
        "250ml(8oz.)": "54 Cups",
      },
      {
        Containers: "Hooper 2",
        Products: "Ground - Decaf",
        Capacité: "1.25 lbs.",
        "250ml(8oz.)": "54 Cups",
      },
      {
        Containers: "Hooper 3",
        Products: "Soluble - Hot Chocolate",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "Varies 46-57 Cups",
      },
      {
        Containers: "Hooper 4",
        Products: "Soluble- French Vanilla",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "Varies 46-57 Cups",
      },
    ],

    Spécification: [
      {
        Height: "101cm (39 1/4 inches)",
        Depth: "58cm (23 inches)",
        Width: "29cm (11 1/2 inches)",
        Weight: "41 Kg (90 lbs.)",
        Electricity: "110 Volts, 15 amps, 60 HZ",
        "Filter Paper": "1800 coffee capacity (approx.)",
        "Water Services": "plumbed or bottled",
        "Tank Capacity": "3 liters (0.8 Gal.)",
      },
    ],
  },

  {
    code: "Ecc-Exp",
    nom: "Eccelenza Express",
    categorie: "Café",
    image: "cafe/Eccelenza_Express.jpg",
    description: [
      "The <strong><em>VKI - Eccellenza Express</strong></em> offers an impressive variety of beverage selections ranging from gourmet coffee to specialty beverages such as cappuccino, latte, espresso, mochaccino, etc. It offers your customers a wide variety of specialty beverages and also the freshest cup of coffee possible - in three brewing strengths and three cup sizes. Every cup is freshly ground and brewed to perfection in under 45 seconds! ",
    ],
    Caractéristiques: [
      "<ul><li>Power-Saving Mode</li><li>Uses the Zuma Paperless Brewer - no filter paper required</li><li>Delivers up to 100 beverages before refilling is required</li><li>User-friendly LCD touch screen</li><li>Vending mode compatible</li><li>Quick and easy maintenance</li></ul>",
    ],
    Options: [
      "<ul><li>Coin Acceptor Housing</li><li>Bill Validator & Coin Acceptor Housing</li><li>Bar Code Reader and Housing</li><li>Credit Card Reader Housing</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Coffee Beans Dispenser",
        Products: "Coffee Beans",
        Capacité: "1.3 lbs.",
        "250ml(8oz.)": "not available",
      },
      {
        Containers: "Powder Dispenser",
        Products: "Soluble",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "not available",
      },
    ],

    Spécification: [
      {
        Height: "82.9cm",
        Depth: "65.4cm",
        Width: "39.4cm",
        Weight: "34.5 kg",
        Electricity: "120 Volts AC 60 HZ",
        "Water Services":
          "Plumbed 3/4'' STD hose connection or pump and bottle water system",
        "Touch Screen": "Height:7.62 cm, Width:12.7cm",
        Certifications: "cCSAUS, NSF, NAMA",
      },
    ],
  },

  {
    code: "therm-1",
    nom: "Thermos - CWTF",
    categorie: "Thermos",
    image: "thermos/thermos-cwtf.jpg",
    description: [
      "Thermos for coffee. Bunn CTWT is the ideal thermos for any restaurants or cafeterias who want to provide a superior quality coffee in a short time. Capacity of about 60 cups.     ",
    ],
    Caractéristiques: [
      "<ul><li>Capacity of 60 cups </li><li>Easy to install</li><li>Durable</li><li>Made of stainless</li><li>Easy maintenance</li></ul>",
    ],
    Spécification: [
      {
        Height: "17.9 inches",
        Depth: "18,5 inches",
        Width: "9 inches",
        Weight: "28 pounds",
        Electricity: "120 Volts, 15 amp",
      },
    ],
  },

  {
    code: "Ecc-Caf",
    nom: "Eccelenza Café",
    categorie: "Café",
    image: "cafe/cafe_eccelenza.jpg",
    description: [
      "The <strong><em>VKI - Eccellenza Café</strong></em> offers an impressive 68 beverage selections ranging from gourmet coffee to specialty beverages such as cappuccino, latte, espresso, mochaccino, etc. It offers your customers a wide variety of specialty beverages and also the freshest cup of coffee possible - in three brewing strengths and three cup sizes. Every cup is freshly ground and brewed to perfection in under 45 seconds",
    ],
    Caractéristiques: [
      "<ul><li>Power-Saving Mode</li><li>Uses the Zuma Paperless Brewer - no filter paper required</li><li>Delivers up to 300 beverages before refilling is required</li><li>User-friendly LCD screen</li><li>Vending mode compatible</li><li>Quick and easy maintenance</li></ul>",
    ],
    Options: [
      "<ul><li>Coin Acceptor Housing</li><li>Bill Validator and Coin Acceptor Housing</li><li>Bar Code Reader and Housing</li><li>Credit Card Reader Housing</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Coffee Beans Dispenser",
        Products: "Coffee Beans",
        Capacité: "3 lbs. each",
        "250ml(8oz.)": "300 Cups",
      },
      {
        Containers: "Coffee Beans Dispenser",
        Products: "Coffee Beans",
        Capacité: "2 lbs. each",
        "250ml(8oz.)": "300 Cups",
      },
      {
        Containers: "Powder Dispenser",
        Products: "Soluble",
        Capacité: "2 lbs. each",
        "250ml(8oz.)": "300 Cups",
      },
      {
        Containers: "Flavor bottle dispenser",
        Products: "Soluble",
        Capacité: "250 ml. each",
        "250ml(8oz.)": "300 Cups",
      },
    ],

    Spécification: [
      {
        Height: "122cm",
        Depth: "76cm",
        Width: "57cm",
        Weight: "54.5 kg",
        Electricity: "120 Volts AC 60 HZ",
        "Cup Sizes": "235 ml - 355 ml",
        "Water Services":
          "Plumbed 3/4'' STD hose connection or pump and bottle water system",
        Certifications: "cETLus, NSF, NAMA",
      },
    ],
  },

  {
    code: "EccPod",
    nom: "Eccelenza Pod",
    categorie: "Café",
    image: "cafe/Ecclenzaport.jpg",
    description: [
      "The <strong><em> VKI - Eccellenza Pod </strong></em> offers an impressive variety of beverage selections ranging from gourmet coffee to specialty beverages such as latte, cappuccino, espresso, mochaccino, etc. It offers your customers a wide variety of specialty beverages and also the freshest cup of coffee possible - in two brewing strengths and three cup sizes. Every cup is freshly ground and brewed to perfection in just seconds!<br><small><em>**Available in black or silver</em></small>",
    ],
    Caractéristiques: [
      "<ul><li>Fresh coffee in less than a minute!</li><li>Power-Saving Mode</li><li>Uses a coffee pod brewer - 56mm and 61mm units available</li><li>Delivers up to 50 beverages before refilling is required</li><li>User-friendly LCD screen and touch selection panel</li><li>Vending mode compatible</li><li>Quick and easy maintenance</li></ul>",
    ],
    Options: [
      "<ul><li>Coin Acceptor Housing</li><li>Bill Validator and Coin Acceptor Housing</li><li>Bar Code Reader and Housing</li><li>Credit Card Reader Housing</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Powder Dispenser",
        Products: "Soluble",
        Capacité: "454 grams each",
        "250ml(8oz.)": "50 Cups",
      },
    ],

    Spécification: [
      {
        Height: "45.5cm",
        Depth: "61cm",
        Width: "38cm",
        Weight: "25 kg",
        Electricity: "120 Volts AC 60 HZ",
        "Cup Sizes": "175 ml - 355 ml",
        "Water Services":
          "Plumbed 3/4'' STD hose connection or pump and bottle water system",
        Interface: "Capacitive Touch and LCD",
        Certifications: "cCSAUS, NSF, NAMA",
      },
    ],
  },

  {
    code: "Merc-4",
    nom: "Merchant 4",
    categorie: "Distributeur",
    image: "distributeur/Merchant4.jpg",
    description: [
      "<strong><em>Merchant 4 </strong></em> can be configured to contain 5 to 7 trays for the sale of your favourite snacks. DEL screen to facilitate the selection and in option a bill validator  ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration : 5 to 7 trays</li><li>DEL screen</li><li>SureVend - Magic Eye </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Height: "183cm",
        Depth: "81.3cm",
        Width: "89.5cm",
        Weight: "247 kg",
        Electricity: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "Merc-7",
    nom: "Merchant 7 Tray",
    categorie: "Distributeur",
    image: "distributeur/Merchant7Tray.jpg",
    description: [
      "<strong><em>Merchant 7 </strong></em> can be configured to contain 5 to 7 trays for the sale of your favourite snacks. DEL screen to facilitate the selection and in option a bill validator  ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration : 5 to 7 trays</li><li>DEL screen</li><li>SureVend - Magic Eye </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Height: "183cm",
        Depth: "81.3cm",
        Width: "89.5cm",
        Weight: "247 kg",
        Electricity: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "ap-rev",
    nom: "AP Revolution",
    categorie: "Distributeur",
    image: "distributeur/AP_Revolution_Shopper_Plat.jpg",
    description: [
      "Now serving fresh deli fare, favorite entrees, and break-time bites for convenient dining at facilities everywhere. <strong><em> AP Revolution </strong></em> dishes you up the best in high-volume foodservice, satisfying big appetite - in one sleek design. ",
    ],
    Caractéristiques: [
      "<ul><li>9 trays, 115 selections</li><li>Serve a 'full meal deal' </li><li>Large turret-forward viewing window showcases product</li><li>9” platter capability keeps items flat – no shifting or spilling</li></ul>",
    ],
    Spécification: [
      {
        Height: "72 inches",
        Depth: "30,75 inches",
        Width: "38,13 inches",
        Weight: "710 lbs.",
        Electricity: "115 Volts, 60 HZ, 12 amp",
      },
    ],
  },

  {
    code: "bev-4",
    nom: "BevMax 4",
    categorie: "Distributeur",
    image: "distributeur/Bev4.jpg",
    description: [
      "Only <strong><em>BevMax4</strong></em> has been designed to enhance the consumer experience and meet the operational needs of bottlers and vending operators. ",
    ],
    Caractéristiques: [
      "<ul><li>Tactile KeyPad</li><li>High Performance Refrigeration System</li><li>Increased vertical shelf height</li></ul>",
    ],
    Spécification: [
      {
        Height: "72 inches",
        Depth: "32 inches",
        Width: "47 inches",
        Weight: "764 lbs.",
        Electricity: "112 Volts, 60 HZ, 12 amp",
      },
    ],
  },

  {
    code: "Merc-6",
    nom: "Merchant 6",
    categorie: "Distributeur",
    image: "distributeur/Merchant6.jpg",
    description: [
      "<strong><em>Merchant 6</strong></em> can be configured to contain 5 to 7 trays for the sale of your favourite snacks. DEL screen to facilitate the selection and in option a bill validator ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration de 5 à 7 tiroirs</li><li>DEL Screen</li><li>SureVend - Oeil Magique </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Heigh: "183cm",
        Depth: "81.3cm",
        Width: "89.5cm",
        Weight: "247 kg",
        Electricity: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "Cafforia",
    nom: "Cafforia",
    categorie: "Café",
    image: "cafe/hotdrink_platium.jpg",
    description: [
      "<strong><em>Cafforia </strong></em> offers around-the-clock coffeehouse variety. And it’s designed for today’s hot beverage connoisseur, with features that emulate local coffeehouses, service carts, and convenience stores.<br><small><em>**Available in black or silver</em></small>",
    ],
    Caractéristiques: [
      "<ul><li>Innovative pre-infusion brew system for consistently rich flavor</li><li>Illuminated artwork and lit menu panel attract customers</li><li>Offer up to twelve beverages including regular, dark roast, decaf, specialty drinks, gourmet blends, and hot cocoa – plus complements</li><li>Two Cups Sizes</li></ul>",
    ],
    Options: [
      "<ul><li>Features “Free-vend” for special events and employee rewards</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Containers: "Hooper 1",
        Products: "12 selections",
        Capacité: "12 oz.",
        "250ml(8oz.)": "N/A",
      },
      {
        Containers: "Hooper 2",
        Products: "12 selections",
        Capacité: "14 oz.",
        "250ml(8oz.)": "N/A",
      },
      {
        Containers: "Hooper 3",
        Products: "12 selections",
        Capacité: "16 oz.",
        "250ml(8oz.)": "N/A",
      },
      {
        Containers: "Hooper 4",
        Products: "12 selections",
        Capacité: "18 oz.",
        "250ml(8oz.)": "N/A",
      },
    ],

    Spécification: [
      {
        Height: "72 inches",
        Depth: "33.75 inches",
        Width: "38.13 inches",
        Weight: "570 lbs.",
        Electricity: "115 Volts, 60HZ, 16A",
        Certifications: "NAMA, UI, FCC",
      },
    ],
  },
]; //FIN TABLEAU JSON MACHINES

/* ---------------TABLEAU JSON POUR LES PRODUITS ------------

PRODUITS  ==  Tout les produits pour remplir les machines (chips, chocolats, café, sacs bruns, etc.)
TRADUCTION : Ne Changer QUE le NOM des produits, absolument ne PAS changer nom catégorie 

CANEVAS POUR UN PRODUIT : 
{ "categorie": "Sanitaire", "nom": "Essuie Tout",  "image": ""(pas necessaire),    

"Produits" : [
{"Nom": "Spect, 15 rouleaux, 2 plis, 168 feuilles",  },
{"Nom": "Atlantic, 30 rouleaux, 2 plis, 80 feuilles", },
{ "image": "chemin de l'image a partir du dossier images", "Nom": "White Swan 1870, 24 rouleaux, 2 plis, 80 feuilles", },
 ],
},
*/

var tabProduits = [
  {
    categorie: "Chocolat",
    nom: "Chocolate Bars",
    Produits: [
      { Nom: "Oh Henry!" },
      { Nom: "Mars" },
      { Nom: "M&M" },
      { Nom: "Reese" },
      { Nom: "M&M" },
      { Nom: "Glosette" },
      { Nom: "Many More..." },
    ],
  },

  {
    categorie: "Chips",
    nom: "Chips",
    Produits: [
      { Nom: "Lays - Original" },
      { Nom: "Lays - BBQ" },
      { Nom: "Lays - Salt and Vinegar" },
      { Nom: "Lays - Ketchup" },
      { Nom: "Lays - Lightly Salted" },
      { Nom: "Cheetos" },
      { Nom: "Doritos - Original" },
      { Nom: "Tostitos- Chip Tortilla" },
      { Nom: "Many More..." },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Toilet Paper",
    Produits: [
      { Nom: "Snow Owl, 48 rolls, 2 ply, 420 sheets" },
      { Nom: "Snow Owl, 48 rolls, 2 ply, 500 sheets" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Hands Paper",
    Produits: [
      { Nom: "Classic brown, 24 rolls, 205'" },
      { Nom: "Classic white, 24 rolls, 205'" },
      { Nom: "Acclaim brown, 1 ply" },
      { Nom: "Decor white 1 ply" },
      { Nom: "Sec Natur brown multiple ply" },
      { Nom: "Coronet, white, multiple ply" },
      { Nom: "White Swan white, multiple ply" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Kitchen Roll",
    Produits: [
      { Nom: "Spect, 15 rolls, 2 ply, 168 sheets" },
      { Nom: "Atlantic, 30 rolls, 2 ply, 80 sheets" },
      { Nom: "White Swan 1870, 24 rolls, 2 ply, 80 sheets" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Garbage Bags",
    Produits: [
      { Nom: "White 20x22 (500)" },
      { Nom: "Black 20x22 (500)" },
      { Nom: "Black 22x24 (500)" },
      { Nom: "Reg 26x36 (250)" },
      { Nom: "Strong 26x36 (200)" },
      { Nom: "Super Strong 26x36 (125)" },
      { Nom: "Reg. 30x38 (250)" },
      { Nom: "Strong 30x38 (200)" },
      { Nom: "Super Strong 35x50 (100)" },
      { Nom: "Strong 42x48 (100)" },
      { Nom: "Super Strong 42x48 (100)" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Handkerchief",
    Produits: [{ Nom: "White Swan 36/100" }, { Nom: "Cornet 30/100s" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Tumbler",
    Produits: [{ Nom: "Conical 5000" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Cleaners",
    Produits: [
      { Nom: "Windex 3.78L" },
      { Nom: "Detergents 4L" },
      { Nom: "Essence Pin, 4L" },
      { Nom: "All Use, 4L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Hand Soap",
    Produits: [
      { Nom: "White Antibacterial, 4L" },
      { Nom: "Antibacterial pink Soap, 4L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Floor Cleaner",
    Produits: [
      { Nom: "Caprice neutralizing Calcium, 4L" },
      { Nom: "Floor Cleaner Sol-Lav, 4L" },
      { Nom: "Floor Cleaner Sol-Lav, 20L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Dishwashing Liquid",
    Produits: [{ Nom: "Palmolive 4L" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Others - Sanitary",
    Produits: [
      { Nom: "Mop head 24oz Synth" },
      { Nom: "Toilet Seat Protection" },
      { Nom: "Cleaner Bowl" },
      { Nom: "Swiffer Dusting mitt" },
      { Nom: "Oxy-Gel" },
    ],
  },

  {
    categorie: "Café",
    nom: "Coffee Beans",
    Produits: [
      { Nom: "Amazone" },
      { Nom: "Colombian" },
      { Nom: "House Blend" },
    ],
  },

  {
    categorie: "Café",
    nom: "Speciality Coffee",
    Produits: [
      { Nom: "French Vanilla" },
      { Nom: "Capuccino" },
      { Nom: "Expresso" },
      { Nom: "Hot Chocolate" },
      { Nom: "Mocaccino" },
      { Nom: "Moka" },
    ],
  },

  {
    categorie: "Café",
    nom: "Ground Coffee",
    Produits: [
      { Nom: "Black" },
      { Nom: "Decaffeinated" },
      { Nom: "French Vanilla" },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Juice",
    Produits: [
      { Nom: "Apple Juice" },
      { Nom: "Orange Juice" },
      { Nom: "Apple and Grape Juice" },
      { Nom: "Vegetable Juice" },
      { Nom: "Fruit Punch" },
      { Nom: "Many More..." },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Soft Drinks",
    Produits: [
      { Nom: "Pepsi" },
      { Nom: "Diet Pepsi" },
      { Nom: "Pepsi Max" },
      { Nom: "7 Up" },
      { Nom: "7-Up Diète" },
      { Nom: "Crush Orange" },
      { Nom: "Mountain Dew" },
      { Nom: "Brisk Ice Tea" },
      { Nom: "Brisk Limonade" },
      { Nom: "Coke" },
      { Nom: "Diet Coke" },
      { Nom: "Coke Zero" },
      { Nom: "Sprite" },
      { Nom: "Nestea" },
      { Nom: "Fruitopia" },
      { Nom: "Déli Cinq" },
      { Nom: "Fresca" },
      { Nom: "Many More..." },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Energy Drink",
    Produits: [
      { Nom: "Red Bull" },
      { Nom: "Red Bull Sugar Free" },
      { Nom: "Gatorade" },
      { Nom: "Gatorade - G2" },
      { Nom: "Powerade" },
      { Nom: "Monster" },
      { Nom: "Rock Star" },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Milk",
    Produits: [
      { Nom: "2% Milk" },
      { Nom: "1% Milk" },
      { Nom: "Chocolate Milk" },
    ],
  },
]; //////	FIN TABLEAU PRODUIT //////

// ------ SLIDER ------------- //
var sliderImage = new Array(); // variable globale (sliderImage) CHEMIN DE LA PHOTO a partir page index
//
sliderImage[0] = "slider_eng/services_compagny.png"; // derniere image
sliderImage[1] = "slider_eng/yaniko-coffee-break-food-service.gif"; // premiere photo du slider doit etre celle de l'accueil
sliderImage[2] = "slider_eng/coffee_break_service.gif";
sliderImage[3] = "slider_eng/image_247_anglais.gif";
sliderImage[4] = "slider_eng/yaniko-sale-rental-coffeemaker.png";
sliderImage[5] = "slider_eng/yaniko-vending-machine-sale-rental.png";

var sliderDesc = new Array(); // variable globale (sliderDesc) DESCRIPTION DE LA PHOTO; ajouter <span class="textedescriptionSlider" > avant le texte pour le styliser, ensuite le bouton
sliderDesc[0] =
  '<span class="textedescriptionSlider"> Supplying services available for all companies  </span><button class="sliderBouton" onclick="AproposYaniko()">About Yaniko</button>';
sliderDesc[1] =
  '<span class="textedescriptionSlider" >Find out all of our available services </span> <button class="sliderBouton" onclick="nosServices()">Learn More...</button>';
sliderDesc[2] =
  '<span class="textedescriptionSlider" >Fresh Coffee at a very competitive price</span><button class="sliderBouton" onclick="ContacterYaniko()">Contact Us for an order</button>';
sliderDesc[3] = '<span class="textedescriptionSlider" >Open 24 / 7 </span>';
sliderDesc[4] =
  '<span class="textedescriptionSlider" >Several models of coffee makers for sale or rent</span><button class="sliderBouton" onclick="nosMachines(tabDistributrices)"> See the Coffee Machines </button>';
sliderDesc[5] =
  '<span class="textedescriptionSlider" >Vending Machines for sale or rent</span><button class="sliderBouton" onclick="nosMachines(tabDistributrices)"> See the Vending Machines </button>';

var SliderImageCnt = 0; // variable globale (SliderImageCnt) pour changer les photos et les descriptions

function nextSliderImage() {
  var image = document.getElementById("slider"); //recupere le div Slider
  var desc = document.getElementById("descriptionSlider"); //pour ecrire la description

  if (SliderImageCnt == 5) {
    SliderImageCnt = 0; //pour faire la boucle
    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") center center no-repeat ";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt];
    //   image.style.transitionTimingFunction="ease" ;
    //  image.style.transition="background 1s";
    //  image.style.transitionDelay="0.5s";
  } else {
    SliderImageCnt++; //on augment de 1
    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") center center no-repeat ";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt];
    //  image.style.transitionTimingFunction="ease" ;
    //  image.style.transition="background 1s";
    //  image.style.transitionDelay="0.5s";
  }
}

function previousSliderImage() {
  var image = document.getElementById("slider"); //recupere le div Slider
  var desc = document.getElementById("descriptionSlider");

  if (SliderImageCnt == 0) {
    SliderImageCnt = 5; //pour faire la boucle

    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") top center no-repeat ";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt];
    //  image.style.transitionTimingFunction="ease" ;
    //  image.style.transition="background 1s";
    //  image.style.transitionDelay="0.5s";
  } else {
    SliderImageCnt--; //on augment de 1

    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") center no-repeat";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt];
    //	  image.style.transitionTimingFunction="ease" ;
    //  image.style.transition="background 1s";
    //  image.style.transitionDelay="0.5s";
  }
}

function SliderAutomatic() {
  //fonction pour changer les images du slider automatiquement

  //ajouter dans body onload=""

  nextSliderImage(); //appel de la fonction pour avancer

  setTimeout(function () {
    SliderAutomatic();
  }, 15500); //en millisecondes
}

function toogle(lediv1) {
  // FONCTION POUR APPARAITRE / DISPARAITRE UN DIV

  var x = document.getElementById(lediv1); //le div a faire apparaitre
  var visibiliter = x.style.visibility; //pour voir determiner la visibilite du div

  if (visibiliter == "hidden") {
    x.style.display = "block";
    x.style.visibility = "visible";
  } else {
    x.style.display = "none";
    x.style.visibility = "hidden";
  }
}

function apparaitre(elementAparaitre) {
  var x = document.getElementById(elementAparaitre);
  x.style.transition = "visibility 1s ease";
  x.style.visibility = "visible";
}

function disparaitre(elementDisparaitre) {
  var x = document.getElementById(elementDisparaitre);
  x.style.transition = "visibility 1s ease";
  x.style.visibility = "hidden";
}

///// FONCTION POUR AFFICHER LES MACHINES ET PRODUITS //////

function afficher(tab, ouafficher) {
  //fonction pour afficher TOUS les éléments du tableau des Machines JSON

  var i, titre, element, titre2, j; //variables pour les boucles(i), le titre est le titre(ex: nom, prenom) et l'element est le contenu a afficher
  var letableau = ""; // variable pour ecrire le tableau
  var n = 0;

  for (i in tab) {
    element = tab[i]; //pour chaque machine
    n++;
    letableau += "<div class='divmachine'>"; //ecrire une ligne pour chaque element

    for (titre in element) {
      //pour chaque element dans chaque machine

      if (titre == "code") {
        //pour creer des DIVs uniques pour chaque element, il faut creer des variables avec le code de chaque machine et on leur rajoute un bout de texte

        var idCarac = "caract" + element[titre];
        var idOption = "opt" + element[titre];
        var idVolume = "volume" + element[titre];
        var idSpec = "spec" + element[titre];
      } else if (titre == "nom") {
        // si le titre du tableau JSON est l'image
        letableau += "<h3 class='nomMachine'>" + element[titre] + "</h3>";
      } else if (titre == "image") {
        // si le titre du tableau JSON est une l'image, ajouter le chemin de l'image a partir du fichier images
        if (n % 2 == 1) {
          letableau +=
            "<div class='cafetiere' > <img class='imageCafe' src='../images/" +
            element[titre] +
            "' alt='" +
            element[titre] +
            "'/></div> ";
        } else {
          letableau +=
            "<div class='cafetiere2' > <img class='imageCafe' src='../images/" +
            element[titre] +
            "' alt='" +
            element[titre] +
            "'/></div>";
        }
      } else if (titre == "description") {
        if (n % 2 == 1) {
          letableau += "<div class='descProduit'>" + element[titre] + "</div>";
        } else {
          letableau += "<div class='descProduit2'>" + element[titre] + "</div>";
        }
      } else if (titre == "Options") {
        if (n % 2 == 1) {
          letableau +=
            "<div  class='titreProduit2'><div class='boutonToogle'><a onclick=\"toogle('" +
            idOption +
            "')\">+</a></div>" +
            titre +
            "</div>";
          letableau +=
            '<div id="' +
            idOption +
            "\" class='descOption'>" +
            element[titre] +
            "</div>";
        } else {
          letableau +=
            "<div  class='titreProduit22'><div class='boutonToogle'><a onclick=\"toogle('" +
            idOption +
            "')\">+</a></div>" +
            titre +
            "</div>";
          letableau +=
            '<div id="' +
            idOption +
            "\" class='descOption2'>" +
            element[titre] +
            "</div>";
        }
      } else if (titre == "Caractéristiques") {
        if (n % 2 == 1) {
          letableau +=
            "<div  class='titreProduit1' ><div class='boutonToogle'><a onclick=\"toogle('" +
            idCarac +
            "')\">+</a></div>" +
            "Characteristics" +
            "</div>";
          letableau +=
            '<div id="' +
            idCarac +
            "\" class='descOption'>" +
            element[titre] +
            "</div>";
        } else {
          letableau +=
            "<div  class='titreProduit12' ><div class='boutonToogle'><a onclick=\"toogle('" +
            idCarac +
            "')\">+</a></div>" +
            "Characteristics" +
            "</div>";
          letableau +=
            '<div id="' +
            idCarac +
            "\" class='descOption2'>" +
            element[titre] +
            "</div>";
        }
      } else if (titre == "Spécification") {
        //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE

        if (n % 2 == 1) {
          letableau +=
            "<div class='titreProduit2' ><div class='boutonToogle'><a onclick=\"toogle('" +
            idSpec +
            "')\">+</a></div>" +
            "Specifications" +
            "</div>";

          for (j in element[titre]) {
            letableau += '<div id="' + idSpec + "\" class='descOption'><p>";

            var texte = element[titre][j];

            for (titre2 in texte) {
              // exemple : TITRE2 = nom : , texte[titre2} = Paul;
              letableau +=
                "&nbsp;<b>" +
                titre2 +
                "</b>  : &nbsp;" +
                texte[titre2] +
                "</br>";
            }

            letableau += "</p></div>";
          }
        } else {
          letableau +=
            "<div class='titreProduit22' ><div class='boutonToogle'><a onclick=\"toogle('" +
            idSpec +
            "')\">+</a></div>" +
            "Specifications" +
            "</div>";

          for (j in element[titre]) {
            letableau += '<div id="' + idSpec + "\" class='descOption2'><p>";

            var texte = element[titre][j];

            for (titre2 in texte) {
              // exemple : TITRE2 = nom : , texte[titre2} = Paul;
              letableau +=
                "<b>" + titre2 + "</b>  : &nbsp;" + texte[titre2] + "</br>";
            }

            letableau += "</p></div>";
          }
        }
      } // FIN SPECIFICATION
      else if (titre == "Volume/Capacité") {
        //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE
        if (n % 2 == 1) {
          letableau +=
            "<div class='titreProduit1'><div class='boutonToogle'><a onclick=\"toogle('" +
            idVolume +
            "')\">+</a></div>" +
            "Volume/Capacity" +
            "</div>";
          letableau += '<div id="' + idVolume + "\" class='descOption'>";

          letableau += "<table class='tabCafevolume'>";
          letableau +=
            "<tr><td class='tableVolCapacite'>Container</td><td class='tableVolCapacite'>Products</td><td class='tableVolCapacite'>Capacity</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

          for (j in element[titre]) {
            letableau += "<tr>";
            var texte = element[titre][j];

            for (titre2 in texte) {
              // exemple : TITRE2 = nom : , texte[titre2} = Paul;
              letableau +=
                "<td class='coltableVolCapacite'>" + texte[titre2] + "</td>";
            }

            letableau += "</tr>";
          }

          letableau += "</table></div>";
        } else {
          letableau +=
            "<div class='titreProduit12'><div class='boutonToogle'><a onclick=\"toogle('" +
            idVolume +
            "')\">+</a></div>" +
            "Volume/Capacity" +
            "</div>";
          letableau += '<div id="' + idVolume + "\" class='descOption2'>";

          letableau += "<table class='tabCafevolume'>";
          letableau +=
            "<tr><td class='tableVolCapacite'>Container</td><td class='tableVolCapacite'>Products</td><td class='tableVolCapacite'>Capacity</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

          for (j in element[titre]) {
            letableau += "<tr>";
            var texte = element[titre][j];

            for (titre2 in texte) {
              // exemple : TITRE2 = nom : , texte[titre2} = Paul;
              letableau +=
                "<td class='coltableVolCapacite'>" + texte[titre2] + "</td>";
            }

            letableau += "</tr>";
          }

          letableau += "</table></div>";
        }
      } // FIN SPECIFICATION
    } // FIN DE CHAQUE PRODUIT

    //letableau += "<div style=\"width:100%; display:block;\"><h6>Pour Commander: 514-999-0923</div>";
    letableau += "</div>";
  } // FIN BOUCLE ENTIERE

  document.getElementById(ouafficher).innerHTML = letableau; //implenter le tableau dans le div pour l'affichage
}

function afficherProduits(tab, ouafficher) {
  //fonction pour afficher TOUS les PRODUITS

  var i, titre, element, titre2, j; //variables pour les boucles(i), le titre est le titre(ex: nom, prenom) et l'element est le contenu a afficher
  var donnes = ""; // variable pour ecrire le tableau
  var n = 0;

  for (i in tab) {
    element = tab[i]; //pour chaque machine
    n++;

    donnes += '<div class="prodDiv">';

    for (titre in element) {
      //pour chaque element dans chaque machine

      //	donnes += titre +element[titre] +"<br><br>" ;
      if (titre == "nom") {
        donnes += "<h4 class='ProdTitres'>" + element[titre] + "</h4>";
      } else if (titre == "Produits") {
        //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE

        //	donnes +=  titre; //Afficher le titre de la donnee JSOM

        for (j in element[titre]) {
          var texte = element[titre][j];

          for (titre2 in texte) {
            // exemple : TITRE2 = nom : , texte[titre2} = Paul;
            if (titre2 == "Nom") {
              donnes +=
                '<span class="toutProdNoms">' + texte[titre2] + "</span>";
            }
          }

          donnes += "</br>";
        }
      } //fin if Produits
    } //fin titre in element

    donnes += "</div>";
  } //fin boucle complète

  document.getElementById(ouafficher).innerHTML = donnes; //implenter le tableau dans le div pour l'affichage
}

function affProdChoix(tab, categorie, choix, ouafficher) {
  //fonction pour afficher un PRODUIT selon un choix (categorie == "categorie" dans Tableau JSON && choix est le ce qu<on recherche (exemple:cafe))

  var i, ligne, element, titre, j, titre2, texte;
  var donnes = "";

  for (i in tab) {
    // on parcourt tout le tableau selectionne
    element = tab[i][categorie]; // elementTab == le titre du tableau JSON sur lequel on fait la recherche ex : "categorie" ; "code"
    ligne = tab[i];

    if (element == choix) {
      //si le choix se retrouve dans l'objet du tableau JSON, on va l'afficher

      donnes += '<div class="prodDiv">';

      for (titre in ligne) {
        if (titre == "nom") {
          donnes += "<h4 class='ProdTitres'>" + ligne[titre] + "</h4>";
        } else if (titre == "Produits") {
          //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE

          //	donnes +=  titre; //Afficher le titre de la donnee JSON

          for (j in ligne[titre]) {
            texte = ligne[titre][j]; //variable pour parcourir le tableau JSON dans le tableau JSON
            donnes += "<div class='nomProduit'>";

            for (titre2 in texte) {
              // exemple : TITRE2 = nom : , texte[titre2} = Paul;
              if (titre2 == "image") {
                donnes +=
                  " <img class='imageProduit' src='../images/" +
                  texte[titre2] +
                  "' alt='" +
                  texte[titre2] +
                  "'/>";
              } else if (titre2 == "Nom") {
                donnes += "<span class='nomProd2'>" + texte[titre2] + "</span>";
              }
            }

            donnes += "</div>";
          }
        } //fin if Produits
      } //fin titre in element
      donnes += "</div>";
    }
  } //fin for (i in tab)

  document.getElementById(ouafficher).innerHTML = donnes; //liberer les resultats
}

function ChoixFormProd(liste, Valeur, ouafficher) {
  //fonction qui a partir d'un formulaire affiche le choix du PRODUIT a l'ecran

  var x = liste.selectedIndex; // VALEUR CHOISI
  var y = liste.options; // NOMBRE D'OPTIONS
  var lechoix = y[x].value; // CHOIX DE L'OPTION (LA VALEUR ex: <option value="1">; valeur sera 1)

  if (lechoix == "tous") {
    afficherProduits(tabProduits, ouafficher);
  } else {
    affProdChoix(tabProduits, Valeur, lechoix, ouafficher);
  }
}

function afficherChampTableau(liste, tab, elementTab, ouafficher, message) {
  //afficher une MACHINE a partir d'un choix

  var x = liste.selectedIndex; // VALEUR CHOISI
  var y = liste.options; // NOMBRE D'OPTIONS
  var choix = y[x].value; // CHOIX DE L'OPTION (LA VALEUR ex: <option value="1">; valeur sera 1)
  var tableau = tab; // TABLEAU CHOISI

  var i, j, element, ligne, contenu, titre2;
  var titre, ligneTitre;

  var table = ""; // LES DONNEES

  if (choix == "tous") {
    afficher(tabDistributrices, ouafficher);
  } else {
    for (i in tableau) {
      element = tableau[i][elementTab]; // elementTab == le titre du tableau JSON sur lequel on fait la recherche ex : "categorie" ; "code"
      ligne = tableau[i];

      if (element == choix) {
        // si l'element dans le tableau equivaut au choix (valeur de l'option)

        table += "<div class='divmachine'>"; //ecrire une ligne pour chaque element

        for (titre in ligne) {
          if (titre == "code") {
            //pour creer des DIVs uniques pour chaque element, il faut creer des variables avec le code de chaque machine et on leur rajoute un bout de texte
            var idCarac = "caract" + ligne[titre];
            var idOption = "opt" + ligne[titre];
            var idVolume = "volume" + ligne[titre];
            var idSpec = "spec" + ligne[titre];
          } else if (titre == "nom") {
            // si le titre du tableau JSON est l'image
            table += "<h3 class='nomMachine'>" + ligne[titre] + "</h3>";
          } else if (titre == "image") {
            // si le titre du tableau JSON est une l'image, ajouter le chemin de l'image a partir du fichier images
            table +=
              "<div class='cafetiere' > <img class='imageCafe' src='../images/" +
              ligne[titre] +
              "' alt='" +
              ligne[titre] +
              "'/></div> ";
          } else if (titre == "description") {
            table += "<div class='descProduit'>" + ligne[titre] + "</div>";
          } else if (titre == "Caractéristiques") {
            table +=
              "<div  class='titreProduit1' ><div class='boutonToogle'><a onclick=\"toogle('" +
              idCarac +
              "')\">+</a></div>" +
              "Characteristics" +
              "</div>";
            table +=
              '<div id="' +
              idCarac +
              "\" class='descOption'>" +
              ligne[titre] +
              "</div>";
          } else if (titre == "Options") {
            table +=
              "<div  class='titreProduit2'><div class='boutonToogle'><a onclick=\"toogle('" +
              idOption +
              "')\">+</a></div>" +
              titre +
              "</div>";
            table +=
              '<div id="' +
              idOption +
              "\" class='descOption'>" +
              ligne[titre] +
              "</div>";
          } else if (titre == "Volume/Capacité") {
            //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE
            table +=
              "<div class='titreProduit1'><div class='boutonToogle'><a onclick=\"toogle('" +
              idVolume +
              "')\">+</a></div>" +
              "Volume/Capacity" +
              "</div>";
            var p;

            table += '<div id="' + idVolume + "\" class='descOption'>";

            table += "<table class='tabCafevolume'>";
            table +=
              "<tr><td class='tableVolCapacite'>Containers</td><td class='tableVolCapacite'>Products</td><td class='tableVolCapacite'>Capacity</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

            for (p in ligne[titre]) {
              table += "<tr>";
              var texte = ligne[titre][p];

              for (titre2 in texte) {
                // exemple : TITRE2 = nom : , texte[titre2} = Paul;
                table +=
                  "<td class='coltableVolCapacite'>" + texte[titre2] + "</td>";
              }
              table += "</tr>";
            }

            table += "</table>";
            table += "</div>";
          } // FIN VOLUME
          else if (titre == "Spécification") {
            //BOUCLE POUR LES DOUBLES TABLEAU (TABLEAU DANS LE JSON) SPÉCIFIER LE TITRE DE LA DONNÉE

            table +=
              "<div class='titreProduit2' ><div class='boutonToogle'><a onclick=\"toogle('" +
              idSpec +
              "')\">+</a></div>" +
              "Specifications" +
              "</div>";

            for (j in ligne[titre]) {
              table += '<div id="' + idSpec + "\" class='descOption'><p>";

              var texte = ligne[titre][j];

              for (titre2 in texte) {
                // exemple : TITRE2 = nom : , texte[titre2} = Paul;
                table +=
                  "<b>" + titre2 + "</b>  : &nbsp;" + texte[titre2] + "</br>";
              }

              table += "</p></div>";
            }
          } // FIN SPECIFICATION
        } // FIN DE CHAQUE PRODUIT

        table += "</div>";
      } // FIN BOUCLE ENTIERE
    } //on ferme la table

    document.getElementById(ouafficher).innerHTML = "<br>" + table + "<br>"; //liberer les resultats sans sous-titres
    // document.getElementById(ouafficher).innerHTML =   "<span class='msgMachineChoix'>" + message  + "&nbsp;"+ choix + "</span><br>" + table + "<br>";  //liberer les resultats
  } // fin du else (autre résultats que tous)
}

function remplirListeProduit(liste, tab, categorie) {
  //remplir une liste deroulante (un select) a partir d'un tableau JSON

  var i, element, titre;
  for (i in tab) {
    element = tab[i];
    for (titre in element) {
      if (titre == categorie) {
        liste.options[liste.options.length] = new Option(
          element[titre],
          element[titre]
        );
      }
    }
  }
}

////// SECTIONS DU SITE /////////

function nosServices() {
  //Onglet Nos Services
  // Fonction qui affiche les produits de la compagnie (chips, liqueurs, sanitaires, etc).
  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Back Home">Home</a> >> Our Services </h6>';
  donnees += "<h3 class='titreSection'>Main Services</h3>";
  donnees +=
    '<p class="sousSectionIntro"> Filling of vending machines, personalized solutions, supply for coffee machines and food services are a brief overview of the services that Yaniko offers with effectiveness and courteousness to all of its partners   </p>';

  donnees +=
    '<p class="ParagServices"> As a service B2B company, we truly understand the importance of putting the customer first. Through our services and our personalized solutions, Yaniko represents an ideal partner for helping companies of all sizes maximize this meaningful moment of the day. Ultimately, increasing the well-being of workers as much as their productivity. You may look below to see all the services yaniko provides  </p>';
  donnees +=
    "<div class='divNumeroServices'><h6>Contact</h6><h3>450.441.2111</h3><h6>For Our Services</h6></div><br><br>";

  donnees +=
    "<div class='ServiceYaniko'><h3>All in One</h3><p>Why so many differents suppliers when Yaniko offers the All in One Service? With this service, you will only need <b>one supplier</b> for snacks, coffee, sanitary products, and even office supplies. No more multiple phone calls, various bills and research for reliable providers, Yaniko will be greatly honoured to supply all theses products in one fast service thanks to its purchasing power </p></div><div class='photoServices'><img src='../images/services/service-tout-en-Un-1.png' alt='All in One Service'/></div><br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Supplying</h3><ul><li>Filling of coffee and vending machines with fresh products</li><li>Food services</li><li>Coffee Break</li><li>Sanitary services</li></ul></div><div class='photoServices'><img src='../images/services/approvisionnement-machine-cafe.png' alt='Approvisionnement pour cafétière'/></div><br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3> Solutions and Consulting</h3><ul><li>Evaluate the frequency of required visits for supplying according to your needs</li><li>Determinate the best moment of the day for supplying</li><li>Advise on the ideal choice of coffee or vending machine to purchase or to rent  </li><li>Estimate your needs of snacks, coffee, sanitary products, etc. for a more efficient supply</li><li>Propose improvements for your rest area</li></ul></div><div class='photoServices'><img src='../images/services/nous-avons-la-solution.png' alt='Supplying'/></div> <br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Sale and Rental</h3><ul><li>Multiple models of coffee makers and vending machines available </li><li>We always propose the ideal machine according to your company size </li><li>Consult the Equipement section to see some of our available machines</li></ul></div><div class='photoServices'><img src='../images/services/machines-distributrices-haute-qualite.png'/></div> <br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Technicals Services </h3><ul><li>Maintenance included</li><li>Repair of automatic machines</li><li>Technician available any time</li></ul></div><div class='photoServices'><img src='../images/services/services-techniques-yaniko.png' alt='Solutions Alimentaires'/></div> <br><br><br><br>  ";

  zoneAffichage.innerHTML = donnees; //liberer les donnees
}

function nosMachines(tab) {
  //Onglet Equipement
  // Fonction qui affiche les machines distributrices de la compagnie. Tout d'abord, il y a un texte explicatif. Ensuite, un formulaire qui permet de choisir la catégories de machines
  // Lors du Choix par l'utilisateur, la fonction afficherChampTableau(); est appellée. Fonction qui fait apparaître toutes les machines de la catégore afficher.
  // Pour ce faire, il faut creer un div affichage 2 à l'intérieur de div affichage principal

  var zoneAffichage = document.getElementById("affichage"); //on affiche dans le div principal (id="affichage")

  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Back Home">Home</a> >> <a href="#" onclick="nosMachines(tabDistributrices)">Equipment</a> </h6>';
  donnees += '<h3 class="titreSection">Our Equipment</h3>'; //titre
  donnees +=
    '<p class="sousSectionIntro"> Top of the range equipment at the cutting edge of technology on sale or rental for cafeterias or rest areas. Our supplying service is available for all vending machines, coffee machines or thermos machines.  </p>'; //intro

  donnees +=
    '<p class="ParagmachineDistributrices"> We offer a wide variety of vending machines and coffee makers that will certainly meet your needs. We are constantly looking for the best machine on the market in order to offer them to you. We always do business with reliable distributors offering the most popular brands with the best <strong>quality/price</strong> ratio in the sector. All of our rented or sold machines come in option with a supplying and maintenance services.';
  donnees +=
    " If you hesitate on a machine or you want to know more about it, please don't worry, one of our representative will answer all of your questions </p> "; //description
  donnees +=
    '<p class="ParagmachineDistributrices"> Whether is for : </br><ul id="listeFleche"><li><em><strong>rental</strong></em></li><li><em><strong>purchase</strong></em></li><li><em><strong>prices</strong></em></li><li><em> answer your <strong>questions</strong></em></li></ul></p><p class="ParagmachineDistributrices"> Please do not hesitate to contact us :</p>';
  donnees +=
    "<img class='phoneContact' src='../images/yaniko-numero1.png' alt='Numero Yaniko' title='Par téléphone' /><img class='phoneContact' src='../images/email-yaniko.png' alt='Courriel Yaniko' title='Par Courriel' /><span style=\"color:	#C93A3A; position:relative; top:-30px; left:-5px; font-size:1.1em;\"<a href=\"mailto:email@gmail.com\" title=\"Par Courriel\">email@gmail.com</a></span><hr><br>";

  donnees += '<form id="choixCategorie" action="" >'; //pas d'appel au serveur, seulement Javascript ( ID :choixCategorie )

  donnees +=
    "<label class='labelForm' for='machineDistributricesChoix'> Category : </label> "; //formulaire pour choisir une catégorie de distributrices
  donnees +=
    "<select id=\"machineDistributricesChoix\" class='selectForm' onchange=\"afficherChampTableau(this, tabDistributrices, 'categorie', 'affichage2', 'Catégorie : ')\"     >"; //évènement onchange qui appelle la fonction afficherChampTableau qui correspond a afficher d'information avec la catégorie sélectionnée
  donnees +=
    '<option selected="selected" value="tous"> All Categories... </option>';
  donnees += '<option value="Distributeur"> Vending Machines </option>'; //Catégorie : DISTRIBUTRICE
  donnees += '<option value="Café"> Coffee Makers </option>'; //Catégorie : CAFE
  donnees += '<option value="Thermos"> Thermos </option>'; //Catégorie : Thermos
  donnees += "</select>";

  donnees += "<span class='labelForm'>&nbsp;</span>";
  donnees +=
    "<label class='labelForm' for=\"machineCategorieSelect\"> Name : </label>";
  donnees +=
    "<select id=\"machineCategorieSelect\" class='selectForm' onchange=\"afficherChampTableau(this, tabDistributrices, 'nom', 'affichage2', 'Nom : ')\"  >";
  donnees +=
    '<option selected="selected" value="tous"> All Machines...&nbsp;&nbsp; </option>';
  donnees += "</select>";

  donnees += "</form><br>"; //Fin du formulaire

  donnees += '<div id="affichage2"> '; //div qui affichera toutes les machines
  donnees += "</div> "; //on ferme le div affichage 2

  zoneAffichage.innerHTML = donnees; //liberer les donnees
  afficher(tabDistributrices, "affichage2");
  remplirListeProduit(machineCategorieSelect, tab, "nom");
}

function AproposYaniko() {
  //Onglet A Propos
  // Fonction qui affiche les informations générales de la compagnie. Simple texte html qu'on transmet dans le innerHTML du div sélectionné

  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Back Home">Home</a> >> About Us </h6>';
  donnees += '<h3 class="titreSection">About Yaniko inc. </h3>';
  donnees +=
    '<p class="sousSectionIntro">Yaniko is a dynamic and efficient business drawn towards customer satisfaction. Services are available for the greater Montreal area, Laval and the South Shore </p>';

  donnees += '<div id="apropos1">';
  donnees +=
    "<p> Yaniko is a Montréal based company engaged in the supply, sale and rental of coffee makers, vending machines and office supplies. We cover the greater Montréal area and serve any type of business or institution. Our team that combines strength of youth and experienced professionals promises to offer a courteous service.</p>";
  donnees +=
    "<p>With Yaniko as your supplier, you won't have to worry any more to find multiple suppliers for coffee, chocolates, chips, pencils, sanitary products, etc.  Our service All in One will give you more time and less worries.     </p>";
  donnees +=
    "<p>At Yaniko, <span style='color:rgb(1, 84, 163);'><strong><em>our mission</em></strong></span> is to provide to all of ours customers an irreproachable 24 hours a day, 7 days a week service. Of course, it's not an easy task, but be sure that we will put all the necessary efforts and passion to achieve this mission. </p>";
  donnees += "</div>";

  donnees += '<div id="apropos2"><h3>Our Values</h3><br>';
  donnees += "<ul><li>Customer Satisfaction </li><br>";
  donnees += "<li>Respect and courtesy at all time</li><br>";
  donnees += "<li>Reliability</li></ul>";
  donnees += "</div><br>";

  donnees += '<div class="apropos3"><h3>&nbsp;Our Clients</h3>';
  donnees += "<p>Yaniko is proud to have theses types of clients : </p>";
  donnees +=
    "<ul><li>Financial institutions, Banks</li><li>Care centers CLSC, Hospitals, Long-term care centers, etc.</li><li>Hotels</li><li>City Hotels</li><li>Detention Centers</li><li>Factories</li><li>Small businesses</li><li>Headquarters</li><li>Government Business Enterprises</li><li>Schools, Colleges, Universities, etc. </li><li>Residences for elderly people</li><li>And more</li></ul>";
  donnees += "</div></br>";

  donnees += '<div class="apropos3"><h3>&nbsp; Our Goal</h3>';
  donnees +=
    "<p><strong>Simple</strong> is to provide the best service possible to all of our customers without any exception. It is our duty to ensure that your coffee breaks, this tender moment of the day cherished by many, is done in harmony, joy and in the greatest pleasure while enjoying fresh products of high quality provided by us. This is why Yaniko is a partner <b>of choice</b> for companies of all sizes.</p>";
  donnees += "</div>";

  zoneAffichage.innerHTML = donnees; //libérer les donnees
}

function ContacterYaniko() {
  //Onglet Nous Contacter
  // Fonction qui affiche les coordonnées de la cie. Utilisation de Google Map. Simple texte html qu'on transmet dans le innerHTML du div sélectionné

  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Back Home">Home</a> >> Contact Us </h6>';
  donnees += "<h3 class='titreSection'>Contact Yaniko</h3><br>";
  donnees +=
    '<p class="sousSectionIntro"> For an order,  supplying services, informations about our company or to buy or rent a coffee maker, do not hesitate to contact us</p><br>';

  donnees +=
    '<div id="contact1"><strong>Head Office</strong></br> Adress </br> Ville (Québec), <em>A1B 1A2</em> </br></br><strong>Warehouse</strong></br>Adress, </br>Ville (Québec), <em>A1B 1A2</em></br></br> <strong>Phone : </strong> (123) 911-9111 </br> <strong>E-Mail : </strong><a href="mailto:email@gmail.com">email@gmail.com</a></br></br></br><strong>Contact : </strong>  Your favorite Saler -  <em>Sales Representative</em></br> </br><strong>Business hours :</strong><br> 7 days a week / 24 hours a day </div>';
  donnees += '<div id="contact2">';
  donnees +=
    '<iframe width="400" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.ca/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Institut+de+recherche+dHydro-Québec+(IREQ)&amp;sll=45.605943,-73.709509&amp;sspn=0.344424,0.837021&amp;ie=UTF8&amp;hq=&amp;hnear=38+Place+du+Commerce,+Verdun,+Communaut%C3%A9-Urbaine-de-Montr%C3%A9al,+Qu%C3%A9bec&amp;t=m&amp;ll=45.468017,-73.541794&amp;spn=0.021068,0.034332&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.ca/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Institut+de+recherche+dHydro-Québec+(IREQ),+QC&amp;aq=0&amp;oq=38+place+du+co&amp;sll=45.605943,-73.709509&amp;sspn=0.344424,0.837021&amp;ie=UTF8&amp;hq=&amp;hnear=38+Place+du+Commerce,+Verdun,+Communaut%C3%A9-Urbaine-de-Montr%C3%A9al,+Qu%C3%A9bec&amp;t=m&amp;ll=45.468017,-73.541794&amp;spn=0.021068,0.034332&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
  donnees += "</div>";

  zoneAffichage.innerHTML = donnees; //libérer les donnees
}

function NosProduits() {
  //Onglet Produits
  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";

  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Back Home"> Home</a> >> <a href="#" onclick="NosProduits()"> Products </a> </h6>';
  donnees += "<h3 class='titreSection'>Our Products</h3>";
  donnees +=
    '<p class="sousSectionIntro"> Yaniko offers a large variety of fresh products to supply vending machines, coffee makers and thermos machines. Chocolates, chips, coffee, soft drinks, sanitary products and many more  </p>';

  donnees +=
    "<ul class='listeArgProduits'><li>For filling vending machines, coffee makers or thermos</li><li>Always Fresh</li><li>Very competitive prices</li><li>Fast Delivery</li><li>Large variety of quality products</li><li>Many categories of products including sanitary, coffee, chips, etc.</li></ul></br>";
  donnees +=
    "<p class='produitFrais'>Please consult the list below for an overview of some of our available products. If the product you want for your office is not in this list, it will be a true pleasure to find it for you. </br> For more informations, please contact us at <span style='color:#C93A3A; font-weight:bold;'>(123)-911-9111</span>.</br></br><small><em>**Please note that it is an exhaustive list and we have a lot more products in stock to offer</em></small></p><hr>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('../images/produits/categorie/barre-chocolat-yaniko.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Chocolat','affichage2')\"><h4>Chocolate</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('../images/produits/categorie/produit-cafe.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Café','affichage2')\"><h4>Coffee</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('../images/produits/categorie/chips-produit.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Chips','affichage2')\"><h4>Chips</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('../images/produits/categorie/produit-boissons.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Boissons','affichage2')\"><h4>Drinks</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('../images/produits/categorie/produit-sanitaire.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Sanitaire','affichage2')\"><h4>Sanitary</h4></div></br>";

  donnees += '<form id="produitsCategorieForm" action="">';

  donnees +=
    "<label class='labelForm' for=\"produitsCategorieForm\"> Category : </label>";
  donnees +=
    "<select id=\"produitsCategorieSelect\" class='selectForm' onchange=\" ChoixFormProd(this,'categorie', 'affichage2')\" >";
  donnees +=
    '<option selected="selected" value="tous">All Categories...</option>';
  donnees += '<option  value="Sanitaire">Sanitary</option>'; //les valeur doivent être celles des categories du tableau JSON sur les produits
  donnees += '<option  value="Café">Coffee</option>'; //CAFE
  donnees += '<option  value="Chocolat">Chocolate</option>'; //CHOCOLAT
  donnees += '<option  value="Chips">Chips</option>'; //CHOCOLAT
  donnees += "</select> ";

  donnees +=
    "<label class='labelForm' for=\"produitsNomSelect\"> Product Name : </label>";
  donnees +=
    "<select id=\"produitsNomSelect\" class='selectForm' onchange=\" ChoixFormProd(this,'nom', 'affichage2')\">";
  donnees +=
    '<option selected="selected" value="tous">All Products ...</option>';
  donnees += "</select></form>";

  donnees += '<div id="affichage2"> '; //div qui affichera toutes les machines
  donnees += "</div> "; //on ferme le div affichage 2

  zoneAffichage.innerHTML = donnees; //libérer les donnees
  afficherProduits(tabProduits, "affichage2");
  remplirListeProduit(produitsNomSelect, tabProduits, "nom");
}
