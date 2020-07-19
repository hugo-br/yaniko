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
var tabDistributrices = [
  {
    code: "G00610",
    nom: "La Gourmet",
    categorie: "Café",
    image: "cafe/la_gourmet.jpg",
    description: [
      "La <strong><em>Gourmet</strong></em> est dotée d'une technologie d'infusion inégalée et d'un moulin à grains intégré. Elle offre facilité et flexibilité tout en comblant plus que jamais les goûts des consommateurs les plus avertis, et ce, tasse après tasse",
    ],
    Caractéristiques: [
      "<ul><li>Dispositif permettant de fouetter à la perfection vos brevages ce qui leur donnera une mousse octueuse</li><li>Offre un choix de :  3 sortes de café en grain, 50/50, vanille française, café vanille, vanille moka, chocolat chaud, mokaccino, café vanille moka, énergie shot café, hot shot blend café, expresso allongé, café latté, capuccino et eau chaude</li><li>2 formats</li><li>2 forces</li><li>Déchets biodégradables à 100%</li><li>Permet la programmation des produits : formats de verre et forces d'infusion</li><li>Assure une fraîcheur incomparable</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Ensemble de chute</li><li>Distributeur à verres et à condiments</li><li>Pompe à eau(pour l'eau embouteillée)</li><li>Monnayeur et lecteur de cartes</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Contenants à grains 1",
        Produits: "Café Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Contenants à grains 2",
        Produits: "Décaféiné",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Tasses",
      },
      {
        Contenants: "Contenants à grains 3",
        Produits: "Café Mi-Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Contenants à grains 4",
        Produits: "Chocolat Chaud",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Tasses",
      },
      {
        Contenants: "Contenants à grains 5",
        Produits: "Vanille Française",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Tasses",
      },
      {
        Contenants: "Contenants à grains 6",
        Produits: "Lait en Poudre",
        Capacité: "1.4 lbs.",
        "250ml(8oz.)": "24 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "112cm (44 pouces)",
        Profondeur: "63.5cm (25 pouces)",
        Largeur: "47cm (18 1/2 pouces).",
        Poids: "64 Kg (141 lbs.)",
        Électricité: "110 Volts, 15 amps, 60 HZ",
        "Papier Filtre": "Capacité de 1800 cafés (approx.)",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "GA0609",
    nom: "La Galleria",
    categorie: "Café",
    image: "cafe/galleria.jpg",
    description: [
      "<strong><em>La Galleria</strong></em> est une cafétière tasse par tasse qui comprend un choix de brevages chauds préférés de tous. <strong><em>La Galleria</strong></em> est agrémentée d'une interface facile à utiliser qui guide l'utilisateur vers une sélection de cafés et boissons chaudes, adaptée à une multitude de paramètres et offrant la commodité d'une fraîcheur garantie, une tassse à la fois, à tout moment ",
    ],
    Caractéristiques: [
      "<ul><li>Dispositif permettant de fouetter à la perfection vos brevages ce qui leur donnera une mousse octueuse</li><li>Offre un choix de :  3 sortes de café en grain, expresso allongé, chocolat chaud, vanille française, mokaccino, café vanille et eau chaude</li><li>2 formats</li><li>2 forces</li><li>Déchets biodégradables à 100%</li><li>Permet la programmation des produits : formats de verre et forces d'infusion</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Ensemble de chute</li><li>Distributeur à verres et à condiments</li><li>Pompe à eau(pour l'eau embouteillée)</li><li>Monnayeur et lecteur de cartes</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Contenants à grains 1",
        Produits: "Café Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Contenants à grains 2",
        Produits: "Décaféiné",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Tasses",
      },
      {
        Contenants: "Contenants à grains 3",
        Produits: "Café Mi-Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Contenants à soluble 1",
        Produits: "Chocolat Chaud",
        Capacité: "9 lbs.",
        "250ml(8oz.)": "208 Tasses",
      },
      {
        Contenants: "Contenants à soluble 2",
        Produits: "Vanille Française",
        Capacité: "6 lbs.",
        "250ml(8oz.)": "138 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "112cm (44 pouces)",
        Profondeur: "66cm (26 pouces)",
        Largeur: "47cm (18 1/2 pouces).",
        Poids: "62 Kg (136 lbs.)",
        Électricité: "110 Volts, 15 amps, 60 HZ",
        "Papier Filtre": "Capacité de 1800 cafés (approx.)",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "AL1104",
    nom: "L'Alternative",
    categorie: "Café",
    image: "cafe/lalternative.jpg",
    description: [
      "Lorsque vous recherchez avant tout un excellent café, <strong><em>L'Alternative</strong></em> est la solution idéale. Élégante et compacte, elle convient parfaitement aux bureaux de 5 à 35 personnes. <strong><em>L'Alternative</strong></em> vous garantie un café fraîchement infusé disponible 24/7",
    ],
    Caractéristiques: [
      "<ul><li>2 sélections de café moulu</li><li>2 formats de tasse ( 8 et 10 oz.)</li><li>Force de café ajustable</li><li>Eau chaude pour thé</li><li>Une technologie de pointe éprouvée</li><li>Déchets biodégradables à 100%</li><li>Utilisation possible de votre propre logo d'entreprise</li><li>Un café à la température parfaite pour une saveur maximale</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Ensemble de chute</li><li>Pompe à eau(pour l'eau embouteillée)</li><li>Ensemble de pattes allongées</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Contenant 1",
        Produits: "Café moulu - Corsé",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "44 Tasses",
      },
      {
        Contenants: "Contenant 2",
        Produits: "Café moulu - Décaféiné",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "44 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "58cm (23 pouces)",
        Profondeur: "50.8cm (20 pouces)",
        Largeur: "26.7cm (10 1/2 pouces).",
        Poids: "16.3 Kg (36 lbs.)",
        "Espace requis (largeur)": "40.6 cm (16 pouces)",
        Électricité: "120 Volts, 15 amps, 60 HZ",
        "Papier Filtre": "Capacité de 1600 cafés (approx.)",
        "Espace pour tasse": "10.2 cm (4 pouces)",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "PE0803-X",
    nom: "La Petite X",
    categorie: "Café",
    image: "cafe/cafe_petitex.jpg",
    description: [
      "La <strong><em>Petite X</strong></em> est la cafétière parfaite pour apprécier un bon café frais. Dotée d'une technologie d'infusion inégalée et d'un moulin à grains intégré, la <strong><em>Petite X</strong></em> offre facilité et flexibilité tout en comblant les goûts des consommateurs les plus avertis et ce, tasse après tasse!",
    ],
    Caractéristiques: [
      "<ul><li>Sélection de 3 cafés en grains, espresso allongé, chocolat chaud, café latte, mokaccino et eau chaude pour le thé</li><li>2 formats</li><li>2 forces d'infusions</li><li>Déchets biodégradables</li><li>Permet la programmation des produits : formats de verre et force d'infusion</li><li>Compacte, elle s'installe partout</li><li>Assure une fraîcheur incomparable</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Ensemble de pattes allongées</li><li>Ensemble tiroir</li><li>Distributeur à verres et à condiments</li><li>Pompe à eau ( pour l'eau embouteillé )</li><li>Monnayeur et lecteurs de cartes</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Cont. à grains 1",
        Produits: "Café en grains - Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Cont. à grains 2",
        Produits: "Café en grains - Décaféiné",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Tasses",
      },
      {
        Contenants: "Cont. à grains 3",
        Produits: "Café en grains - Mi-Noir",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Cont. à soluble 1",
        Produits: "Soluble- Chocolat chaud",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "57 Tasses",
      },
      {
        Contenants: "Cont. à soluble 2",
        Produits: "Soluble - Lait en poudre ou Vanille Française",
        Capacité: "0.7 lbs.",
        "250ml(8oz.)": "32 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "101cm (39 1/4 pouces)",
        Profondeur: "58cm (23 pouces)",
        Largeur: "29cm (11 1/2 pouces).",
        Poids: "41 Kg (90 lbs.)",
        Électricité: "110 Volts, 15 amps, 60 HZ",
        "Papier Filtre": "Capacité de 1800 cafés (approx.)",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "T111104",
    nom: "La Total 1",
    categorie: "Café",
    image: "cafe/cafe_latotal1.jpg",
    description: [
      "Goûter la saveur du grain de café directement versée dans votre tasse!  <strong><em>La Total 1</strong></em> assure un accès 24/7 à un café fraîchement infusé. La Total 1 est équipée de 3 contenants à grains, de 3 contenants à soluble, d'un écran tactile interactif et l'option d'un module intégré de production de reçus codés et détaillés. Avec la Total 1 vous obtiendrez un brevage parfait à chaque infusion",
    ],
    Caractéristiques: [
      "<ul><li>3 formats - Entre 5 et 20 oz.</li><li>3 forces</li><li>3 sélection de grains de cafés</li><li>Offre un choix de : 3 sortes de grains de café, 50/50, vanille française, café vanille, vanille moka, chocolat chaud, mokaccino, café vanille moka, énergie shot café, hot shot blend café, expresso allongé, café latte, cappucino et eau chaude</li><li>Équipée d'un fouetteur pour créer des mousses octueuses</li><li>Déchets biodégradable</li><li>Une technologie de pointe éprouvée</li><li>Débit de déversement ajustable</li><li>Conçue et fabriquée pour moudre la grain de café pour une fraîcheur optimale</li><li>Un café infusé à la température parfaite pour une saveur maximale</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Module intégré d'impression des reçus</li><li>Méthode de paiement :  Boîte à monnaie, Accepteur de billets, Lecteur de carte de crédit</li><li>Distributeur à verres et à condiments</li><li>Pompe à eau</li><li>Distributeur à verres et condiments</li><li>Ensemble de chute à déchets</li><li>Écran tactile de 10.4 pouces</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Cont. à grains 1",
        Produits: "Grains de café - Corsé",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Cont. à grains 2",
        Produits: "Grains de café - Décaféiné",
        Capacité: "2 lbs.",
        "250ml(8oz.)": "87 Tasses",
      },
      {
        Contenants: "Cont. à grains 3",
        Produits: "Grains de café - Velouté",
        Capacité: "4 lbs.",
        "250ml(8oz.)": "173 Tasses",
      },
      {
        Contenants: "Cont. à soluble 1",
        Produits: "Soluble- Chocolat chaud",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Tasses",
      },
      {
        Contenants: "Cont. à soluble 2",
        Produits: "Soluble - Vanille Française",
        Capacité: "5.5 lbs.",
        "250ml(8oz.)": "127 Tasses",
      },
      {
        Contenants: "Cont. à soluble 2",
        Produits: "Soluble - Lait en poudre",
        Capacité: "1.4 lbs.",
        "250ml(8oz.)": "24 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "111.7cm (44 pouces)",
        Profondeur: "63.5cm (25 pouces)",
        Largeur: "46cm (18 1/2 pouces).",
        Poids: "65.7 Kg (145 lbs.)",
        Électricité:
          "120 Volts, 15 amps, 60hz - 240 V, 30amp, 60hz (disponible)",
        "Papier Filtre": "Capacité de 1600 cafés (approx.)",
        "Espace pour tasse": "19cm (7 1/2 pouces) ",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "PE0803-R",
    nom: "La Petite R",
    categorie: "Café",
    image: "cafe/cafe_petite_r.jpg",
    description: [
      "Une cafétière au look chic inspiré de l'inox, La <strong><em>Petite R</strong></em> est la cafétière parfaite pour apprécier un bon café frais. Dotée d'une technologie d'infusion inégalée et d'un moulin à grains intégré, la Petite R offre facilité et flexibilité tout en comblant les goûts des consommateurs les plus avertis et ce, tasse après tasse",
    ],
    Caractéristiques: [
      "<ul><li>Sélection de 2 cafés moulus, chocolat chaud, mokaccino, vanille française, café vanille et eau chaude pour le thé</li><li>2 formats</li><li>2 forces</li><li>Déchets biodégradables</li><li>Permet la programmation des produits : formats de verre et force d'infusion</li><li>Compacte, elle s'installe partout</li></ul>",
    ],
    Options: [
      "<ul><li>Cabinet</li><li>Ensemble de pattes allongées</li><li>Ensemble tiroir</li><li>Distributeur à verres et à condiments</li><li>Pompe à eau ( pour l'eau embouteillé )</li><li>Monnayeur et lecteurs de cartes</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Contenant 1",
        Produits: "Café moulu - Noir",
        Capacité: "1.25 lbs.",
        "250ml(8oz.)": "54 Tasses",
      },
      {
        Contenants: "Contenant 2",
        Produits: "Café moulu- Décaféiné",
        Capacité: "1.25 lbs.",
        "250ml(8oz.)": "54 Tasses",
      },
      {
        Contenants: "Contenant 3",
        Produits: "Soluble - Chocolat chaud",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "Entre 46-57 Tasses",
      },
      {
        Contenants: "Contenant 4",
        Produits: "Soluble- Vanille Française",
        Capacité: "2.5 lbs.",
        "250ml(8oz.)": "Entre 46-57 Tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "101cm (39 1/4 pouces)",
        Profondeur: "58cm (23 pouces)",
        Largeur: "29cm (11 1/2 pouces)",
        Poids: "41 Kg (90 lbs.)",
        Électricité: "110 Volts, 15 amps, 60 HZ",
        "Papier Filtre": "Capacité de 1800 cafés (approx.)",
        "Service d'eau": "Aqueduc ou embouteillé",
        "Capacité du réservoir": "3 litres (0.8 Gal.)",
      },
    ],
  },

  {
    code: "Ecc-Exp",
    nom: "Eccelenza Express",
    categorie: "Café",
    image: "cafe/Eccelenza_Express.jpg",
    description: [
      "L'<strong><em>Eccellenza Express</strong></em> sert un nombre impressionnant de sélections de boissons variant de café gourmet pour breuvages de spécialité comme latte, cappuccino, espresso, mochaccino, café latte, café moka et chocolat chaud.  Il vous offre une grande variété de boissons de spécialité et aussi la tasse de café la plus fraîche possible – avec trois forces d’infusion et trois formats de tasses.  Chaque tasse est fraîchement moulue et infusée à la perfection en moins de 45 secondes",
    ],
    Caractéristiques: [
      "<ul><li>Mode d'économie d'énergie</li><li>Utilise l’infuseur Zuma - pas de papier filtre nécessaire</li><li>Fournit jusqu'à 100 boissons avant que le remplissage soit nécessaire</li><li>Écran ACL à touche convivial</li><li>Compatible en payante (avec périphérique en option)</li><li>Entretien rapide et facile</li></ul>",
    ],
    Options: [
      "<ul><li>Boitier pour monnayeur</li><li>Boitier pour monnayeur et validateur d’espèces</li><li>Boitier pour imprimante de codes barres</li><li>Boitier pour lecteur de cartes de crédit</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Contenant 1",
        Produits: "Grains de Café",
        Capacité: "1.3 lbs.",
        "250ml(8oz.)": "non disponible",
      },
      {
        Contenants: "Contenant 2",
        Produits: "Soluble",
        Capacité: "1 lbs.",
        "250ml(8oz.)": "non disponible",
      },
    ],

    Spécification: [
      {
        Hauteur: "82.9cm",
        Profondeur: "65.4cm",
        Largeur: "39.4cm",
        Poids: "34.5 kg",
        Électricité: "120 Volts AC 60 HZ",
        "Source d'eau": "Aqueduc ou embouteillé",
        "Écran d'affichage": "Hauteur:7.62 cm, Largeur:12.7cm",
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
      "Thermos pour café. Le modèle CWTF est idéal pour toutes compagnies, restaurants ou cafétérias qui désirent fournir un café de qualité supérieur en peu de temps. Capacité d'environ 60 tasses.     ",
    ],
    Caractéristiques: [
      "<ul><li>Capacité de 60 tasses de café par service </li><li>Facile à installer et ranger</li><li>Durable</li><li>Fabriqué à partir d'acier inoxydable</li><li>Entretien rapide et facile</li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "17.9 pouces",
        Profondeur: "18,5 pouces",
        Largeur: "9 pouces",
        Poids: "28 livres",
        Électricité: "120 Volts, 15 amp",
      },
    ],
  },

  {
    code: "Ecc-Caf",
    nom: "Eccelenza Café",
    categorie: "Café",
    image: "cafe/cafe_eccelenza.jpg",
    description: [
      "L'<strong><em>Eccellenza Café</strong></em> sert un nombre impressionnant de 68 sélections de boissons variant de café gourmet pour boissons de spécialité comme Latte, Cappuccino, Espresso, Mochaccino, etc.  Il offre à vos clients une grande variété de boissons de spécialité ainsi que la tasse de café la plus fraîche possible – avec trois forces d’infusion et trois formats de tasses.  Chaque tasse est fraîchement moulue et infusée à la perfection en moins de 45 secondes. Pour les clients qui veulent encore plus de variété, il est possible d’ajouter une touche de saveur à leur boisson à partir de l'un des distributeurs de saveur intégré à l’<strong><em>Eccellenza Café</strong></em>.",
    ],
    Caractéristiques: [
      "<ul><li>Mode d'économie d'énergie</li><li>Utilise l’infuseur Zuma - pas de papier filtre nécessaire ... jamais!</li><li>Fournit jusqu'à 300 boissons avant que le remplissage soit nécessaire</li><li>Écran ACL convivial</li><li>Compatible en payante (avec périphérique en option)</li><li>Entretien rapide et facile</li></ul>",
    ],
    Options: [
      "<ul><li>Boitier pour monnayeur</li><li>Boitier pour monnayeur et validateur d’espèces</li><li>Boitier pour imprimante de codes barres</li><li>Boitier pour lecteur de cartes de crédit</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Grains de café",
        Produits: "Grains de Café",
        Capacité: "1360 grammes chaque",
        "250ml(8oz.)": "300 tasses",
      },
      {
        Contenants: "Grains de café",
        Produits: "Grains de Café",
        Capacité: "908 grammes chaque",
        "250ml(8oz.)": "300 tasses",
      },
      {
        Contenants: "Distributeur de Poudre",
        Produits: "Soluble",
        Capacité: "908 grammes chaque",
        "250ml(8oz.)": "300 tasses",
      },
      {
        Contenants: "Bouteilles de sirop aromatisé",
        Produits: "Soluble",
        Capacité: "250 ml chaque",
        "250ml(8oz.)": "300 tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "122cm",
        Profondeur: "76cm",
        Largeur: "57cm",
        Poids: "54.5 kg",
        Électricité: "120 Volts AC 60 HZ",
        "Format de Tasses": "235 ml - 355 ml",
        "Source d'eau":
          "Boyaux ordinaire ayant connexion 3/4 de pouces ou eau embouteillée",
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
      "<strong><em> L'Eccellenza Pod </strong></em> sert un nombre impressionnant de sélections de boissons variant de café gourmet pour boissons de spécialité comme Latte, Cappuccino, Espresso, Mochaccino, etc. Il offre à vos clients une grande variété de breuvages de spécialité et aussi la tasse de café la plus fraîche possible – avec deux forces d’infusion et trois formats de tasses.  Chaque tasse est fraîchement moulue et infusée à la perfection en quelque secondes!<br><small><em>**Disponible en noir et en argent</em></small>",
    ],
    Caractéristiques: [
      "<ul><li>Café frais en moins de 60 secondes!</li><li>Mode d'économie d'énergie</li><li>Utilise un infuseur pod – utilise les formats pod 56 et 61 mm</li><li>Fournit jusqu'à 50 brevages avant que le remplissage soit nécessaire</li><li>Ècran ACL convivial avec panneau à touche tactile</li><li>Compatible en payante (avec périphérique en option)</li><li>Entretien rapide et facile</li><li>Eau chaude disponible pour les thés, soupes et thés aux herbes</li></ul>",
    ],
    Options: [
      "<ul><li>Boitier pour monnayeur</li><li>Boitier pour monnayeur et validateur d’espèces</li><li>Boitier pour imprimante de codes barres</li><li>Boitier pour lecteur de cartes de crédit</li></ul>",
    ],
    "Volume/Capacité": [
      {
        Contenants: "Distributeur de Poudre",
        Produits: "Soluble",
        Capacité: "454 grammes chaque",
        "250ml(8oz.)": "50 tasses",
      },
    ],

    Spécification: [
      {
        Hauteur: "45.5cm",
        Profondeur: "61cm",
        Largeur: "38cm",
        Poids: "25 kg",
        Électricité: "120 Volts AC 60 HZ",
        "Format de Tasses": "175 ml - 355 ml",
        "Source d'eau": "Aqueduc ou embouteillé",
        Interface: "Panneau de sélection tactile capacitif et écran ACL",
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
      "<strong><em> La Merchant 4 </strong></em> peut être configuré pour contenir de 5 à 7 tiroirs afin de vendre vos collation préférées. Contient un écran DEL pour faciliter la sélection des articles et en option un boîtier pour les billets ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration de 5 à 7 tiroirs</li><li>Écran DEL</li><li>SureVend - Oeil Magique </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "183cm",
        Profondeur: "81.3cm",
        Largeur: "89.5cm",
        Poids: "247 kg",
        Électricité: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "Merc-7",
    nom: "Merchant 7 Tray",
    categorie: "Distributeur",
    image: "distributeur/Merchant7Tray.jpg",
    description: [
      "<strong><em> La Merchant 7</strong></em> peut être configuré pour contenir de 5 à 7 tiroirs afin de vendre vos collation préférées. Contient un écran DEL pour faciliter la sélection des articles et en option un boîtier pour les billets  ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration de 5 à 7 tiroirs</li><li>Écran DEL</li><li>SureVend - Oeil Magique </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "183cm",
        Profondeur: "81.3cm",
        Largeur: "89.5cm",
        Poids: "247 kg",
        Électricité: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "ap-rev",
    nom: "AP Revolution",
    categorie: "Distributeur",
    image: "distributeur/AP_Revolution_Shopper_Plat.jpg",
    description: [
      "<strong><em> La AP Revolution </strong></em> vous sert vos collations et vos sandwichs préférées dans une machine au design compacte qui se place bien n'importe où . Elle saura assurément satisfaire votre appétit ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration de 9 tiroirs, 115 sélections</li><li>Sert des plats 'prêt-à-manger' </li><li>Grande visibilité des produits</li><li>Accepte les assiettes de 9 pouces</li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "72 pouces",
        Profondeur: "30,75 pouces",
        Largeur: "38,13 pouces",
        Poids: "710 livres",
        Électricité: "1115 Volts,60 HZ, 12 amp",
      },
    ],
  },

  {
    code: "bev-4",
    nom: "BevMax 4",
    categorie: "Distributeur",
    image: "distributeur/Bev4.jpg",
    description: [
      "Seule la <strong><em>BevMax4</strong></em> a été désignée pour améliorer l'expérience des consommateurs et pour améliorer le rendement opérationnel de la distributrice.",
    ],
    Caractéristiques: [
      "<ul><li>Écran Tactile</li><li>Système de réfrigération haute performance</li><li>Hauteur des rangées verticales augmenté </li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "72 pouces",
        Profondeur: "32 pouces",
        Largeur: "47 pouces",
        Poids: "764 livres",
        Électricité: "112 Volts, 60 HZ, 12 amp",
      },
    ],
  },

  {
    code: "Merc-6",
    nom: "Merchant 6",
    categorie: "Distributeur",
    image: "distributeur/Merchant6.jpg",
    description: [
      "La <strong><em>Merchant 6</strong></em> peut être configuré pour contenir de 5 à 7 tiroirs afin de vendre vos collation préférées. Contient un écran DEL pour faciliter la sélection des articles et en option un boîtier pour les billets  ",
    ],
    Caractéristiques: [
      "<ul><li>Configuration de 5 à 7 tiroirs</li><li>Écran DEL</li><li>SureVend - Oeil Magique </li><li>Port DEX</li></ul>",
    ],
    Spécification: [
      {
        Hauteur: "183cm",
        Profondeur: "81.3cm",
        Largeur: "89.5cm",
        Poids: "247 kg",
        Électricité: "120 Volts AC 60 HZ",
      },
    ],
  },

  {
    code: "Cafforia",
    nom: "Cafforia",
    categorie: "Café",
    image: "cafe/hotdrink_platium.jpg",
    description: [
      "La <strong><em>Cafforia</strong></em> offre une large variété de cafés comparable à celle qu'on retrouve chez les baristas. Son design est conçu pour les connaisseurs de café avec des caractéristiques étonnantes qui vont très bien dans les cafétérias des entreprises, les dépanneurs et les station-service. <small><em>**Disponible en noir ou argent</em></small>",
    ],
    Caractéristiques: [
      "<ul><li>Système de pré-infusion innovatif pour une saveur constamment riche</li><li>Panneau illuminé pour attirer l'attention des clients</li><li>Offre une sélection de 12 boissons chaudes tel que café régulier, mi-noir, décaféiné, cafés spécialisés, mélanges gourmands, et chocolat chaud – plus certains compléments</li><li>Sélection de 2 grandeurs de café</li></ul>",
    ],
    Options: ["<ul><li>Carte de fidélité disponible</li></ul>"],
    "Volume/Capacité": [
      {
        Contenants: "Contenant 1",
        Produits: "12 sélections",
        Capacité: "12 oz.",
        "250ml(8oz.)": "N/D",
      },
      {
        Contenants: "Contenant 2",
        Produits: "12 sélections",
        Capacité: "14 oz.",
        "250ml(8oz.)": "N/D",
      },
      {
        Contenants: "Contenant 3",
        Produits: "12 sélections",
        Capacité: "16 oz.",
        "250ml(8oz.)": "N/D",
      },
      {
        Contenants: "Contenant 4",
        Produits: "12 sélections",
        Capacité: "18 oz.",
        "250ml(8oz.)": "N/D",
      },
    ],
    Spécification: [
      {
        Hauteur: "72 pouces",
        Profondeur: "33.75 pouces",
        Largeur: "38.13 pouces",
        Poids: "570 lbs.",
        Électricité: "115 Volts, 60HZ, 16A",
        Certifications: "NAMA, UI, FCC",
      },
    ],
  },
]; //FIN TABLEAU JSON MACHINES

/* ---------------TABLEAU JSON POUR LES PRODUITS ------------

PRODUITS  ==  Tout les produits pour remplir les machines (chips, chocolats, café, sacs bruns, etc.)


CANEVAS POUR UN PRODUIT : 
{ "categorie": "Sanitaire", "nom": "Essuie Tout",  "image": "",    

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
    nom: "Barres de Chocolat",
    Produits: [
      { Nom: "Oh Henry!" },
      { Nom: "Mars" },
      { Nom: "M&M" },
      { Nom: "Reese" },
      { Nom: "M&M" },
      { Nom: "Glosette" },
      { Nom: "Plusieurs autres..." },
    ],
  },

  {
    categorie: "Chips",
    nom: "Chips",
    Produits: [
      { Nom: "Lays - Original" },
      { Nom: "Lays - BBQ" },
      { Nom: "Lays - Sel et Vinaigre" },
      { Nom: "Lays - Ketchup" },
      { Nom: "Lays - Légèrement Salées" },
      { Nom: "Cheetos" },
      { Nom: "Doritos - Original" },
      { Nom: "Tostitos- Chip Tortilla" },
      { Nom: "Plusieurs autres..." },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Papier Hygiénique",
    Produits: [
      { Nom: "Snow Owl, 48 rouleaux, 2 plis, 420 feuilles" },
      { Nom: "Snow Owl, 48 rouleaux, 2 plis, 500 feuilles" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Papier à Mains",
    Produits: [
      { Nom: "Classic brun, 24 rouleaux, 205'" },
      { Nom: "Classic blanc, 24 rouleaux, 205'" },
      { Nom: "Acclaim brun , 1 pli" },
      { Nom: "Décor blanc 1" },
      { Nom: "Sec Natur brun pli multiple" },
      { Nom: "Coronet, blanc, pli multiple" },
      { Nom: "White Swan blanc, pli multiple" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Essuie Tout",
    Produits: [
      { Nom: "Spect, 15 rouleaux, 2 plis, 168 feuilles" },
      { Nom: "Atlantic, 30 rouleaux, 2 plis, 80 feuilles" },
      { Nom: "White Swan 1870, 24 rouleaux, 2 plis, 80 feuilles" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Sac à déchets",
    Produits: [
      { Nom: "Blanc 20x22 (500)" },
      { Nom: "Noir 20x22 (500)" },
      { Nom: "Noir 22x24 (500)" },
      { Nom: "Reg 26x36 (250)" },
      { Nom: "Fort 26x36 (200)" },
      { Nom: "Super Fort 26x36 (125)" },
      { Nom: "Reg. 30x38 (250)" },
      { Nom: "Fort 30x38 (200)" },
      { Nom: "Super Fort 35x50 (100)" },
      { Nom: "Fort 42x48 (100)" },
      { Nom: "Super Fort 42x48 (100)" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Papier Mouchoirs",
    Produits: [{ Nom: "White Swan 36/100" }, { Nom: "Cornet 30/100s" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Verres",
    Produits: [{ Nom: "Conique 5000" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Nettoyants",
    Produits: [
      { Nom: "Windex 3.78L" },
      { Nom: "Détergeants/neutralisants odeurs 4L" },
      { Nom: "Nettoyant Essence Pin, 4L" },
      { Nom: "Nettoyant Tout Usage, 4L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Savon à Mains",
    Produits: [
      { Nom: "Blanc Antibactériens, 4L" },
      { Nom: "Savon antibactériens velour rose, 4L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Nettoyeur à Plancher",
    Produits: [
      { Nom: "Caprice Neutralisant Calcium, 4L" },
      { Nom: "Savon à plancher Sol-Lav, 4L" },
      { Nom: "Savon à plancher Sol-Lav, 20L" },
    ],
  },

  {
    categorie: "Sanitaire",
    nom: "Liquide à Vaisselle",
    Produits: [{ Nom: "Palmolive 4L" }],
  },

  {
    categorie: "Sanitaire",
    nom: "Autres - Sanitaire",
    Produits: [
      { Nom: "Tête de vadrouille 24oz Synth" },
      { Nom: "Protège Siège de Toilette" },
      { Nom: "Nettoyeur à Cuvette" },
      { Nom: "Mitaine Epoussetage Swiffer" },
      { Nom: "Oxy-Gel" },
    ],
  },

  {
    categorie: "Café",
    nom: "Café en Grains",
    Produits: [
      { Nom: "Amazone" },
      { Nom: "Colombien" },
      { Nom: "Mélange Maison" },
    ],
  },

  {
    categorie: "Café",
    nom: "Boissons Chaudes Spécialisées",
    Produits: [
      { Nom: "Vanille Française" },
      { Nom: "Capuccino" },
      { Nom: "Expresso" },
      { Nom: "Chocolat Chaud" },
      { Nom: "Mocaccino" },
      { Nom: "Moka" },
    ],
  },

  {
    categorie: "Café",
    nom: "Café Moulu",
    Produits: [{ Nom: "Café Noir" }, { Nom: "Décaféiné" }],
  },

  {
    categorie: "Boissons",
    nom: "Jus",
    Produits: [
      { Nom: "Jus de Pommes" },
      { Nom: "Jus d'Orange" },
      { Nom: "Pommes et Raisins" },
      { Nom: "Aux Légumes" },
      { Nom: "Punch aux Fruits" },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Boisson Gazeuses",
    Produits: [
      { Nom: "Pepsi" },
      { Nom: "Pepsi-Diète" },
      { Nom: "Pepsi Max" },
      { Nom: "7 Up" },
      { Nom: "7-Up Diète" },
      { Nom: "Crush Orange" },
      { Nom: "Mountain Dew" },
      { Nom: "Brisk Thé Glacé" },
      { Nom: "Brisk Limonade" },
      { Nom: "Coke" },
      { Nom: "Coke-Diète" },
      { Nom: "Coke Zéro" },
      { Nom: "Sprite" },
      { Nom: "Nestea" },
      { Nom: "Fruitopia" },
      { Nom: "Déli Cinq" },
      { Nom: "Fresca" },
      { Nom: "Plusieurs autres..." },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Boisson Énergissantes",
    Produits: [
      { Nom: "Red Bull" },
      { Nom: "Red Bull Sans Sucre" },
      { Nom: "Gatorade" },
      { Nom: "Gatorade - G2" },
      { Nom: "Powerade" },
      { Nom: "Monster" },
      { Nom: "Rock Star" },
    ],
  },

  {
    categorie: "Boissons",
    nom: "Lait",
    Produits: [
      { Nom: "Lait 2%" },
      { Nom: "Lait 1%" },
      { Nom: "Lait au Chocolat" },
    ],
  },
]; //////	FIN TABLEAU PRODUIT //////

// ------ SLIDER ------------- //
var sliderImage = new Array(); // variable globale (sliderImage) CHEMIN DE LA PHOTO a partir page index
sliderImage[0] = "images/slider/entreprise-yaniko-a-propos-fr.png";
sliderImage[1] = "images/slider/yaniko-service-pause-cafe-collations.gif"; // premiere photo du slider doit etre celle de l'accueil
sliderImage[2] = "images/slider/service_rapide_pause_cafe.gif";
sliderImage[3] = "images/slider/image_247_fr.gif";
sliderImage[4] = "images/slider/remplissage-de-cafetieres.png";
sliderImage[5] = "images/slider/remplissage-de-distributrices.png";

var sliderDesc = new Array(); // variable globale (sliderDesc) DESCRIPTION DE LA PHOTO; ajouter <span class="textedescriptionSlider" > avant le texte pour le styliser, ensuite le bouton
sliderDesc[0] =
  '<span class="textedescriptionSlider"> Services disponibles pour entreprise et institution  </span> <button class="sliderBouton" onclick="AproposYaniko()">À propos de Yaniko</button>';
sliderDesc[1] =
  '<span class="textedescriptionSlider" >Découvrez nos services offerts </span> <button class="sliderBouton" onclick="nosServices()">En savoir plus...</button>';
sliderDesc[2] =
  '<span class="textedescriptionSlider" >Café toujours frais et à prix compétitif </span><button class="sliderBouton" onclick="ContacterYaniko()">Nous contacter pour une commande</button>';
sliderDesc[3] =
  '<span class="textedescriptionSlider" >Ouvert 24 heures par jour, 7 jours semaines</span>';
sliderDesc[4] =
  '<span class="textedescriptionSlider" >Plusieurs modèles de cafétières en vente ou en location </span><button class="sliderBouton" onclick="nosMachines(tabDistributrices)"> Voir les Cafétières </button>';
sliderDesc[5] =
  '<span class="textedescriptionSlider" >Distributrices automatiques en vente ou en location</span><button class="sliderBouton" onclick="nosMachines(tabDistributrices)"> Voir les Distributrices </button>';

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
    image.style.transitionTimingFunction = "ease";
    //	image.style.transition="background 2s";
  } else {
    SliderImageCnt++; //on augment de 1
    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") center center no-repeat ";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt];
    image.style.transitionTimingFunction = "ease";
    //	image.style.transition="background 2s";
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
    desc.innerHTML = sliderDesc[SliderImageCnt]; // le texte
    image.style.transitionTimingFunction = "ease";
    image.style.transition = "background 2s";
  } else {
    SliderImageCnt--; //on augment de 1

    image.style.background =
      "url(" + sliderImage[SliderImageCnt] + ") center no-repeat";
    image.style.backgroundSize = "100% 100%";
    desc.innerHTML = sliderDesc[SliderImageCnt]; //le texte
    image.style.transitionTimingFunction = "ease";
    image.style.transition = "background 2s";
  }
}

function SliderAutomatic() {
  //ajouter dans body onload=""
  nextSliderImage(); //appel de la fonction pour avancer

  setTimeout(function () {
    SliderAutomatic();
  }, 12000); //en millisecondes 12 secondes
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
            "<div class='cafetiere' > <img class='imageCafe' src='images/" +
            element[titre] +
            "' alt='" +
            element[titre] +
            "'/></div> ";
        } else {
          letableau +=
            "<div class='cafetiere2' > <img class='imageCafe' src='images/" +
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
            titre +
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
            titre +
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
            titre +
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
            titre +
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
            titre +
            "</div>";
          letableau += '<div id="' + idVolume + "\" class='descOption'>";

          letableau += "<table class='tabCafevolume'>";
          letableau +=
            "<tr><td class='tableVolCapacite'>Contenants</td><td class='tableVolCapacite'>Produits Suggérés</td><td class='tableVolCapacite'>Capacité</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

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
            titre +
            "</div>";
          letableau += '<div id="' + idVolume + "\" class='descOption2'>";

          letableau += "<table class='tabCafevolume'>";
          letableau +=
            "<tr><td class='tableVolCapacite'>Contenants</td><td class='tableVolCapacite'>Produits Suggérés</td><td class='tableVolCapacite'>Capacité</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

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
                  " <img class='imageProduit' src='images/" +
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
              "<div class='cafetiere' > <img class='imageCafe' src='images/" +
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
              titre +
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
              titre +
              "</div>";
            var p;

            table += '<div id="' + idVolume + "\" class='descOption'>";

            table += "<table class='tabCafevolume'>";
            table +=
              "<tr><td class='tableVolCapacite'>Contenants</td><td class='tableVolCapacite'>Produits Suggérés</td><td class='tableVolCapacite'>Capacité</td><td class='tableVolCapacite'>250 ml (8 oz.)</td></tr>";

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
              titre +
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
    //document.getElementById(ouafficher).innerHTML =   "<span class='msgMachineChoix'>" + message  + "&nbsp;"+ choix + "</span><br>" + table + "<br>";  //liberer les resultats avec les sous titres
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

// Chaque section contient //
// fil de Navigation, utilisez par exemple <h6 class=\"filNavigation\"><a href=\"index.html\" title=\"Retour Accueil\">Accueil</a> pour revenir a la page d'accueil
// Apres TITRE , utilisez <h3 class=\"titreSection\"> </h3>
// Ensuite, une intro a la section , utilisez <p class=\"sousSectionIntro\"></p>
// Par la suite, chaque page est construite de facon unique, utilisez les margin-left et right de 5%

function nosServices() {
  //Onglet Nos Services
  // Fonction qui affiche les produits de la compagnie (chips, liqueurs, sanitaires, etc).
  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Retour Accueil">Accueil</a> >> Nos Services </h6>';
  donnees += "<h3 class='titreSection'>Services Principaux</h3>";
  donnees +=
    "<p class=\"sousSectionIntro\"> Remplissage de distributrices, solutions personnalisées, approvisionnement pour cafétières, service de cantine, n'est qu'un bref aperçu de l'étendu des services que Yaniko offre avec efficacité et courtoisie à tous ces partenaires. </p>";

  donnees +=
    "<p class=\"ParagServices\"> Chez Yaniko, nous comprenons l'essence même d'un service bien rendu. Grâce à nos services et nos solutions personnalisées, Yaniko représente le <b>partenaire idéal</b> pour aider les entreprises de toute taille à combler leurs besoins en matière d'approvisionnement. Jettez un coup d'oeil aux services que Yaniko propose à tous ces partenaires.</p>";
  donnees +=
    "<div class='divNumeroServices'><h6>Contacter</h6><h3>911.911.9111</h3><h6>Pour Nos Services</h6></div><br><br>";

  donnees +=
    "<div class='ServiceYaniko'><h3>Tout en 1</h3><p>Pourquoi plusieurs différents fournisseurs quand Yaniko vous propose le service Tout en Un ? Avec ce service, vous n'aurez besoin que d'<b>un seul fournisseur</b>, pour l'approvisionnement de vos collations, de vos produits sanitaires et même de vos articles de bureau. Fini les multiples appels téléphoniques, les différentes factures et les recherches de fournisseurs fiables, Yaniko se fera un grand plaisir de vous dénicher et de vous livrer tous ces produits en <strong>un seul service rapide</strong></p></div><div class='photoServices'><img src='images/services/service-tout-en-Un-1.png' alt='Service Tout En Un'/></div><br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Approvisionnement</h3><ul><li>Remplissage de vos machines distributrices et vos cafétières avec des produits frais en tout temps</li><li>Service alimentaire</li><li>Pause Café</li><li>Service sanitaire disponible</li></ul></div><div class='photoServices'><img src='images/services/approvisionnement-machine-cafe.png' alt='Approvisionnement pour cafétière'/></div><br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3> Solutions et Service-Conseil</h3><ul><li>Évaluer la fréquence des visites requises selon vos besoins</li><li>Déterminer le meilleur moment pour l'approvisionnement des produits</li><li>Conseiller sur le choix idéal de machines distributrices et de cafétières à acheter ou à louer selon la taille de votre entreprise et le nombre d'employés</li><li>Estimer vos besoins en matières de collations, de consommation de café et de produits sanitaires pour un approvisionnement des plus efficace</li><li>Proposer des améliorations adéquates concernant vos aires de repos</li></ul></div><div class='photoServices'><img src='images/services/nous-avons-la-solution.png' alt='Solutions Alimentaires'/></div> <br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Vente et Location</h3><ul><li>Plusieurs modèles disponibles pour les cafétières, les distributrices de collations et les thermos</li><li>Nous vous proposons la machine parfaite selon vos besoins et votre budget </li><li>Consulter la section Équipement pour voir les modèles offerts</li></ul></div><div class='photoServices'><img src='images/services/machines-distributrices-haute-qualite.png'/></div> <br>  ";
  donnees +=
    "<div class='ServiceYaniko'><h3>Services Techniques</h3><ul><li>Entretient et maintenance des distributrices</li><li>Réparation de machines automatiques</li><li>Technicien disponible en tout temps sur appel</li></ul></div><div class='photoServices'><img src='images/services/services-techniques-yaniko.png' alt='Solutions Alimentaires'/></div> <br><br><br><br>  ";

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
    '<h6 class="filNavigation"><a href="index.html" title="Retour Accueil">Accueil</a> >> <a href="#" onclick="nosMachines(tabDistributrices)">Équipement</a> </h6>';
  donnees += '<h3 class="titreSection">Notre Équipement</h3>'; //titre
  donnees +=
    "<p class=\"sousSectionIntro\"> Équipement haut de gamme à la fine pointe de la technologie en location ou en vente pour les cafétérias ou aires de repos. Notre service d'approvisionnement est disponible pour n'importe quelle sorte de distributrices, de cafétières ou de thermos.</p>"; //intro

  donnees +=
    '<p class="ParagmachineDistributrices"> Nous offrons une grande variété de machines distributrices automatiques qui comblera assurément vos besoins. Nous sommes constamment à la recherche des meilleures machines sur le marché afin de pouvoir vous les offrir. Nous faisons toujours affaire avec de fiables distributeurs offrant les marques les plus prisés avec les meilleurs ratios qualité/prix du secteur. Toutes nos distributrices vendues ou louées viennent en option avec un service de remplissage et de réparation.';
  donnees +=
    " Si vous êtes hésitant dans votre choix, soyez rassuré, un de nos représentants sera répondre à tous vos interrogations à tout moment. </p> "; //description
  donnees +=
    '<p class="ParagmachineDistributrices"> Que se soit pour : </br><ul id="listeFleche"><li><i> une <strong>location</strong></i></li><li><i> un <strong>achat</strong></i></li><li><i> connaître nos <strong>prix</strong></i></li><li><i>  répondre à vos <strong>interrogations</strong></i></li></ul></p><p class="ParagmachineDistributrices"> N\'hésiter surtout pas à nous contacter :</p>';
  donnees +=
    "<img class='phoneContact' src='images/yaniko-numero1.png' alt='Numero Yaniko' title='Par téléphone' /><img class='phoneContact' src='images/email-yaniko.png' alt='Courriel Yaniko' title='Par Courriel' /><span style=\"color:	#C93A3A; position:relative; top:-30px; left:-5px; font-size:1.1em;\"<a href=\"mailto:email@gmail.com\" title=\"Par Courriel\">email@gmail.com</a></span><hr><br>";

  donnees += '<form id="choixCategorie" action="" >';

  donnees +=
    "<label class='labelForm' for='machineDistributricesChoix'> Catégories : </label> "; //formulaire pour choisir une catégorie de distributrices
  donnees +=
    "<select id=\"machineDistributricesChoix\" class='selectForm' onchange=\"afficherChampTableau(this, tabDistributrices, 'categorie', 'affichage2', 'Catégorie : ')\"     >"; //évènement onchange qui appelle la fonction afficherChampTableau qui correspond a afficher d'information avec la catégorie sélectionnée
  donnees +=
    '<option selected="selected" value="tous"> Toutes ...      </option>';
  donnees += '<option value="Distributeur"> Distributrices </option>'; //Catégorie : DISTRIBUTRICE
  donnees += '<option value="Café"> Café </option>'; //Catégorie : CAFE
  donnees += '<option value="Thermos"> Thermos </option>'; //Catégorie : CAFE
  donnees += "</select>";

  donnees += "<span class='labelForm'>&nbsp;</span>";
  donnees +=
    "<label class='labelForm' for=\"machineCategorieSelect\"> Nom : </label>";
  donnees +=
    "<select id=\"machineCategorieSelect\" class='selectForm' onchange=\"afficherChampTableau(this, tabDistributrices, 'nom', 'affichage2', 'Nom : ')\"  >";
  donnees +=
    '<option selected="selected" value="tous"> Toutes ...        </option>';
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
    '<h6 class="filNavigation"><a href="index.html" title="Retour Accueil">Accueil</a> >> À Propos </h6>';
  donnees += '<h3 class="titreSection">À Propos de Yaniko inc. </h3>';
  donnees +=
    '<p class="sousSectionIntro">Entreprise dynamique, efficace et axée sur la satisfaction de la clientèle. Services disponibles pour les régions de Montréal, Laval et Rive-Sud </p>';

  donnees += '<div id="apropos1">';
  donnees +=
    "<p> Yaniko inc. est une entreprise québécoise oeuvrant dans l'approvisionnement, la vente et la location de machines de café, distributrices automatiques de friandises, boissons rafraîchissantes, collations, sandwichs, etc. Nous couvrons la grande région de Montréal au complet et nous désservons tout type d'entreprises ou d'installations sportives ou culturelles. Notre équipe qui allie la vougue de la jeunesse à la rigueur de l'expérience vous promet un service courtois, rapide et professionel.</p>";
  donnees +=
    "<p>Avec Yaniko comme fournisseur, vous n'aurez plus à vous souciez de trouvez multiples distributeurs pour vos café, chocolats, chips, crayons, produits sanitaires, etc.  Notre service tout en un, permet de vos donnez plus de temps tout en réduisant vos soucis.</p>";
  donnees +=
    "<p>Chez Yaniko, nous nous faisons comme <span style='color:rgb(1, 84, 163);'><strong><em>mission</em></strong></span> d'offrir à tous nos clients un service irréprochable et ce 24 heures par jour, 7 jours semaines. Certes, cette mission est demandante, mais assurez vous que nous mettons tous les efforts et la passion nécessaire pour y parvenir. </p>";
  donnees += "</div>";

  donnees += '<div id="apropos2"><h3>Nos Valeurs</h3><br>';
  donnees += "<ul><li>Satisfaction de la Clientèle </li><br>";
  donnees += "<li>Respect et courtoisie en tout temps</li><br>";
  donnees += "<li>Fiabilité</li></ul>";
  donnees += "</div><br>";

  donnees += '<div class="apropos3"><h3>Notre Clientèle</h3>';
  donnees +=
    "<p>Yaniko est fier de compter parmi ces clients ce type d'entreprises ou d'institutions  : </p>";
  donnees +=
    "<ul><li>Institutions financières, Caisses Populaires, Banques</li><li>Centre de santé CLSC, Hôpitaux, Centre de santé longue durée, etc.</li><li>Hôtels</li><li>Hôtels de Ville</li><li>Centre de détention</li><li>Usines</li><li>PME</li><li>Sièges Sociaux</li><li>Entreprises gouvernementales</li><li>Écoles, Collèges, Université, etc. </li><li>Résidences pour gens du bel âge</li><li>Et autres</li></ul>";
  donnees += "</div></br>";

  donnees += '<div class="apropos3"><h3>Notre Objectif</h3>';
  donnees +=
    "<p><strong>Fort Simple</strong> C'est notre devoir de faire en sorte que vos pauses cafés se fasse dans l'harmonie, la joie et dans le plus grand des plaisirs tout en dégustant des produits frais de haute qualité. C'est pour cela que Yaniko représente un partenaire de choix pour les entreprises de toute taille.</p>";
  donnees += "</div>";

  zoneAffichage.innerHTML = donnees; //libérer les donnees
}

function ContacterYaniko() {
  //Onglet Nous Contacter
  // Fonction qui affiche les coordonnées de la cie. Utilisation de Google Map. Simple texte html qu'on transmet dans le innerHTML du div sélectionné

  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";
  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Retour Accueil">Accueil</a> >> Nous Contacter </h6>';
  donnees += "<h3 class='titreSection'>Contacter Nous</h3>";
  donnees +=
    '<p class="sousSectionIntro"> Pour une commande, remplir une distributrice, obtenir des informations sur notre entreprise, acheter ou louer une cafétière, etc. N\'hésitez surtout pas à nous contacter</p><br>';

  donnees +=
    '<div id="contact1"> <strong>Nos bureaux</strong></br>ADRESSE </br> VILLE (Québec)<em>A3B 3A2</em></br></br><strong>Notre entrepôt</strong></br> ADRESSE, VILLE (Québec), <em>A2B 3C4</em></br></br> <strong>Téléphone : </strong> (412) 911-9111 </br> <strong>Courriel : </strong><a href="mailto:email@gmail.com">email@gmail.com</a></br></br></br><strong>Contact : </strong>  CONTACT -  <em>Représentant</em></br> </br><strong>Heures d\'ouverture :</strong><br> 7 jours semaine / 24 heures par jour    </div>';
  donnees += '<div id="contact2">';
  donnees +=
    '<iframe width="400" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.ca/maps?f=q&amp;source=s_q&amp;hl=fr&amp;geocode=&amp;q=Institut+de+recherche+dHydro-Québec,+Boucherville,+QC&amp;aq=&amp;sll=45.468348,-73.545247&amp;sspn=0.01079,0.026157&amp;ie=UTF8&amp;hq=&amp;hnear=38+Place+du+Commerce,+Verdun,+Montr%C3%A9al,+Qu%C3%A9bec&amp;t=m&amp;ll=45.471989,-73.547459&amp;spn=0.021066,0.034332&amp;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.ca/maps?f=q&amp;source=embed&amp;hl=fr&amp;geocode=&amp;q=Institut+de+recherche+dHydro-Québec,+Boucherville,+QC&amp;aq=&amp;sll=45.468348,-73.545247&amp;sspn=0.01079,0.026157&amp;ie=UTF8&amp;hq=&amp;hnear=38+Place+du+Commerce,+Verdun,+Montr%C3%A9al,+Qu%C3%A9bec&amp;t=m&amp;ll=45.471989,-73.547459&amp;spn=0.021066,0.034332&amp;z=14" style="color:#0000FF;text-align:left">Agrandir le plan</a></small>';
  donnees += "</div>";

  zoneAffichage.innerHTML = donnees; //libérer les donnees
}

function NosProduits() {
  //Onglet Produits
  var zoneAffichage = document.getElementById("affichage"); //ou afficher les donnees
  var donnees = "";

  donnees +=
    '<h6 class="filNavigation"><a href="index.html" title="Retour Accueil"> Accueil</a> >> <a href="#" onclick="NosProduits()"> Nos Produits </a> </h6>';
  donnees += "<h3 class='titreSection'>Nos Produits</h3>";
  donnees +=
    '<p class="sousSectionIntro"> Yaniko vous offre une grande variété de produits frais pour l\'approvisionnement de vos machines distributrices. Chocolat, chips, café, boissons gazeuses, produits sanitaires et plusieurs autres.  </p>';

  donnees +=
    "<ul class='listeArgProduits'><li>Pour le remplissage de machines distributices, de cafétières, de thermos ou autres</li><li>Frais en tout temps</li><li>Prix compétitifs</li><li>Livraison rapide</li><li>Grande variété de produits de qualité</li><li>Plusieurs catégories de produits dont sanitaire, café, chocolat, chips, rafraîchissements.</li></ul></br>";
  donnees +=
    "<p class='produitFrais'>Consultez la liste ci-dessous pour avoir un aperçu de nos produits offerts. Si le produit que vous désirez n'est pas dans cette liste, il nous fera un grand plaisir de le dénicher pour vous. </br> Pour plus de renseignements, contacter le <span style='color:#C93A3A; font-weight:bold;'>(450)-441-2111</span>.</br></br><small><em>**Notez qu'il s'agit d'une liste exhaustive et nous détenons plusieurs autres produits en inventaire</em></small></p><hr></br>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('images/produits/categorie/barre-chocolat-yaniko.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Chocolat','affichage2')\"><h4>Chocolat</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('images/produits/categorie/produit-cafe.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Café','affichage2')\"><h4>Café</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('images/produits/categorie/chips-produit.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Chips','affichage2')\"><h4>Chips</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('images/produits/categorie/produit-boissons.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Boissons','affichage2')\"><h4>Boissons</h4></div>";
  donnees +=
    "<div class='categoriesDiv' style=\"background-image:url('images/produits/categorie/produit-sanitaire.jpg');\" onclick=\"affProdChoix(tabProduits,'categorie','Sanitaire','affichage2')\"><h4>Sanitaire</h4></div></br>";

  donnees += '<form id="produitsCategorieForm" action="">';

  donnees +=
    "<label class='labelForm' for=\"produitsCategorieForm\"> Catégorie : </label>";
  donnees +=
    "<select id=\"produitsCategorieSelect\" class='selectForm' onchange=\" ChoixFormProd(this,'categorie', 'affichage2')\" >";
  donnees +=
    '<option selected="selected" value="tous">Toutes Catégories...</option>';
  donnees += '<option  value="Sanitaire">Sanitaire</option>'; //les valeur doivent être celles des categories du tableau JSON sur les produits
  donnees += '<option  value="Café">Café</option>'; //CAFE
  donnees += '<option  value="Chocolat">Chocolat</option>'; //CHOCOLAT
  donnees += '<option  value="Chips">Chips</option>'; //CHOCOLAT
  donnees += "</select> ";

  donnees +=
    "<label class='labelForm' for=\"produitsNomSelect\"> Nom Produit : </label>";
  donnees +=
    "<select id=\"produitsNomSelect\" class='selectForm' onchange=\" ChoixFormProd(this,'nom', 'affichage2')\">";
  donnees +=
    '<option selected="selected" value="tous">Tous les produits</option>';
  donnees += "</select></form>";

  donnees += '<div id="affichage2"> '; //div qui affichera toutes les machines
  donnees += "</div> "; //on ferme le div affichage 2

  zoneAffichage.innerHTML = donnees; //libérer les donnees
  afficherProduits(tabProduits, "affichage2");
  remplirListeProduit(produitsNomSelect, tabProduits, "nom");
}
