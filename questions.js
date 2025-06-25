const quizDataFromFile = [
  {
    "question": "die Abbildung, -en",
    "correct": "Illustration",
    "choices": [
      "admission, entrance",
      "dustbin",
      "half",
      "Illustration"
    ]
  },
  {
    "question": "der Abfall, -\"e",
    "correct": "waste, rubbish, garbage",
    "choices": [
      "orange",
      "community office",
      "waste, rubbish, garbage",
      "freetime"
    ]
  },
  {
    "question": "das Abgas, -e",
    "correct": "exhaust, waste gas",
    "choices": [
      "star",
      "class",
      "exhaust, waste gas",
      "sign"
    ]
  },
  {
    "question": "das Abitur (Sg.)",
    "correct": "school graduation exam",
    "choices": [
      "examination, investigation, inquiry",
      "pot",
      "explanation, declaration",
      "school graduation exam"
    ]
  },
  {
    "question": "das Abonnement, -s",
    "correct": "subscription",
    "choices": [
      "sun",
      "subscription",
      "wood",
      "stadium"
    ]
  },
  {
    "question": "der Abschluss, -\"sse",
    "correct": "school graduation or result",
    "choices": [
      "title",
      "school graduation or result",
      "end of the working day",
      "nanny"
    ]
  },
  {
    "question": "der Absender, -",
    "correct": "sender",
    "choices": [
      "stove",
      "win, victory",
      "snake",
      "sender"
    ]
  },
  {
    "question": "die Absicht, -en",
    "correct": "intention",
    "choices": [
      "intention",
      "stop",
      "leaf, sheet",
      "motorway"
    ]
  },
  {
    "question": "die Abteilung, -en",
    "correct": "Department",
    "choices": [
      "capital city",
      "spice",
      "tomato",
      "Department"
    ]
  },
  {
    "question": "die Achtung (Sg.)",
    "correct": "Danger, Attention",
    "choices": [
      "internet",
      "camera",
      "Danger, Attention",
      "apple"
    ]
  },
  {
    "question": "die Adresse, -n",
    "correct": "address",
    "choices": [
      "rucksack",
      "address",
      "hobby",
      "clothers"
    ]
  },
  {
    "question": "die Agentur, -en",
    "correct": "Agency",
    "choices": [
      "granddad",
      "Agency",
      "quark, curd cheese",
      "rubbish, trash"
    ]
  },
  {
    "question": "die Ahnung, -en",
    "correct": "idea, suspicion",
    "choices": [
      "guide, lead, tour",
      "table",
      "idea, suspicion",
      "employer"
    ]
  },
  {
    "question": "die Aktion, -en",
    "correct": "action",
    "choices": [
      "horse",
      "action",
      "Danger, Attention",
      "water"
    ]
  },
  {
    "question": "die Aktivität, -en",
    "correct": "activity",
    "choices": [
      "art",
      "medicine",
      "receipt, documentary evidence",
      "activity"
    ]
  },
  {
    "question": "der Alarm, -e",
    "correct": "alarm",
    "choices": [
      "plan, map",
      "exercise book",
      "flower",
      "alarm"
    ]
  },
  {
    "question": "der Alkohol, -e",
    "correct": "alcohol",
    "choices": [
      "manufacturer",
      "alcohol",
      "idea",
      "maiden name"
    ]
  },
  {
    "question": "der Alltag, -e",
    "correct": "daily routine",
    "choices": [
      "quark, curd cheese",
      "management",
      "daily routine",
      "return"
    ]
  },
  {
    "question": "das Alphabet, -e",
    "correct": "alphabet",
    "choices": [
      "ointment",
      "alphabet",
      "building site",
      "pocket, handbag"
    ]
  },
  {
    "question": "das Alter, -",
    "correct": "age",
    "choices": [
      "toilet (short for Wasserklossett)",
      "age",
      "mathematics",
      "television"
    ]
  },
  {
    "question": "das Altenheim, -e",
    "correct": "old people's home, retirement home",
    "choices": [
      "annual pass",
      "old people's home, retirement home",
      "dead",
      "surprise"
    ]
  },
  {
    "question": "das Altersheim, -e",
    "correct": "old people's home, retirement home",
    "choices": [
      "demand",
      "leaflet, brochure",
      "old people's home, retirement home",
      "connection (TV, internet)"
    ]
  },
  {
    "question": "die Ampel, -n",
    "correct": "traffic light",
    "choices": [
      "cold",
      "traffic light",
      "carpet",
      "stomach"
    ]
  },
  {
    "question": "das Amt, -\"er",
    "correct": "office",
    "choices": [
      "part-time",
      "jam",
      "knife",
      "office"
    ]
  },
  {
    "question": "das Angebot, -e",
    "correct": "offer",
    "choices": [
      "offer",
      "adult",
      "human being, person",
      "youth welfare office"
    ]
  },
  {
    "question": "die Änderung, -en",
    "correct": "modification, change",
    "choices": [
      "announcement (radio)",
      "nose",
      "modification, change",
      "goods"
    ]
  },
  {
    "question": "der Anfang, -\"e",
    "correct": "beginning",
    "choices": [
      "oven",
      "upstairs, upper floor",
      "beginning",
      "opera"
    ]
  },
  {
    "question": "die Angabe,-n",
    "correct": "information, specification",
    "choices": [
      "type",
      "river",
      "information, specification",
      "proof"
    ]
  },
  {
    "question": "der Angehörige, -n",
    "correct": "relative (cousin, etc)",
    "choices": [
      "relative (cousin, etc)",
      "burglar",
      "nerve",
      "animal"
    ]
  },
  {
    "question": "die Angst, -\"e",
    "correct": "fear",
    "choices": [
      "moment",
      "fear",
      "secret",
      "case"
    ]
  },
  {
    "question": "die Ankunft, \"-e",
    "correct": "arrival",
    "choices": [
      "certificate, report, reference",
      "the cough",
      "apprentice, trainee",
      "arrival"
    ]
  },
  {
    "question": "die Anlage, -n",
    "correct": "music system, attachment, investment",
    "choices": [
      "support",
      "bank",
      "world",
      "music system, attachment, investment"
    ]
  },
  {
    "question": "die Anmeldung, -en",
    "correct": "appointment, announcement",
    "choices": [
      "eye",
      "appointment, announcement",
      "control",
      "exhaust, waste gas"
    ]
  },
  {
    "question": "die Anrede, -n",
    "correct": "form of address",
    "choices": [
      "form of address",
      "congratulations, best wishes",
      "reaction",
      "ticket"
    ]
  },
  {
    "question": "der Anruf, -e",
    "correct": "call",
    "choices": [
      "door bell",
      "explanation, declaration",
      "food",
      "call"
    ]
  },
  {
    "question": "der Anrufbeantworter, -",
    "correct": "answering machine",
    "choices": [
      "marital status",
      "information, specification",
      "celebration, festival, party",
      "answering machine"
    ]
  },
  {
    "question": "die Ansage, -n",
    "correct": "announcement",
    "choices": [
      "risk",
      "announcement",
      "motorbike",
      "cupboard"
    ]
  },
  {
    "question": "der Anschluss, -\"e",
    "correct": "connection (TV, internet)",
    "choices": [
      "connection (TV, internet)",
      "accident",
      "migration",
      "paper"
    ]
  },
  {
    "question": "der Anspruch, - \"e",
    "correct": "claim",
    "choices": [
      "parent council",
      "claim",
      "light",
      "way"
    ]
  },
  {
    "question": "der Angestellte, -n",
    "correct": "employee",
    "choices": [
      "employee",
      "layer",
      "lesson",
      "party"
    ]
  },
  {
    "question": "der Antrag, -\"e",
    "correct": "application, proposal, motion",
    "choices": [
      "application, proposal, motion",
      "health insurance",
      "pain",
      "opnion"
    ]
  },
  {
    "question": "die Antwort, -en",
    "correct": "answer",
    "choices": [
      "reduction",
      "internet cafe",
      "consumer",
      "answer"
    ]
  },
  {
    "question": "der Anwalt, -\"e",
    "correct": "lawyer",
    "choices": [
      "novel",
      "club, association",
      "artist",
      "lawyer"
    ]
  },
  {
    "question": "die Anzeige, -n",
    "correct": "advertisement, announcement",
    "choices": [
      "storey",
      "walk, trek",
      "copy",
      "advertisement, announcement"
    ]
  },
  {
    "question": "der Anzug, -\"e",
    "correct": "suit",
    "choices": [
      "thing, affair",
      "representation, advocacy",
      "trust",
      "suit"
    ]
  },
  {
    "question": "das Apartment, -s",
    "correct": "apartment",
    "choices": [
      "experience",
      "cleaning",
      "apartment",
      "population"
    ]
  },
  {
    "question": "der Apfel, -\"",
    "correct": "apple",
    "choices": [
      "sleep",
      "apple",
      "phantasy",
      "parents evening"
    ]
  },
  {
    "question": "die Apotheke, -n",
    "correct": "pharmacy",
    "choices": [
      "test",
      "signature",
      "back",
      "pharmacy"
    ]
  },
  {
    "question": "der Apparat, -e",
    "correct": "piece of apparatus",
    "choices": [
      "piece of apparatus",
      "annual pass",
      "valley",
      "bicycle"
    ]
  },
  {
    "question": "der Appetit, (Sg.)",
    "correct": "appetite",
    "choices": [
      "ski",
      "circle",
      "spoon",
      "appetite"
    ]
  },
  {
    "question": "die Aprikose, -n",
    "correct": "apricot",
    "choices": [
      "apricot",
      "home",
      "grill",
      "daily routine"
    ]
  },
  {
    "question": "die Arbeit, -en",
    "correct": "work",
    "choices": [
      "activity",
      "work",
      "cloakroom",
      "tip"
    ]
  },
  {
    "question": "der Arbeiter, -",
    "correct": "worker",
    "choices": [
      "estate agents",
      "worker",
      "steak",
      "entertainment, amusement"
    ]
  },
  {
    "question": "der Arbeitgeber, -",
    "correct": "employer",
    "choices": [
      "effort",
      "salary",
      "trainer, coach",
      "employer"
    ]
  },
  {
    "question": "der Arbeitnehmer, -",
    "correct": "employee",
    "choices": [
      "wound",
      "unemployment",
      "busicuits",
      "employee"
    ]
  },
  {
    "question": "die Arbeitserlaubnis, -se",
    "correct": "work permit",
    "choices": [
      "chance",
      "fun",
      "work permit",
      "rice"
    ]
  },
  {
    "question": "die Arbeitslosigkeit, -en",
    "correct": "unemployment",
    "choices": [
      "unemployment",
      "orange",
      "return journey",
      "area"
    ]
  },
  {
    "question": "der Arbeitsplatz, -\"e",
    "correct": "workplace, job, place of work",
    "choices": [
      "club, association",
      "qualification",
      "key",
      "workplace, job, place of work"
    ]
  },
  {
    "question": "die Arbeitsstelle, -n",
    "correct": "workplace, job, place of work",
    "choices": [
      "perfume",
      "workplace, job, place of work",
      "work",
      "tariff"
    ]
  },
  {
    "question": "der Ärger (Sg.)",
    "correct": "annoyance",
    "choices": [
      "annoyance",
      "special offer",
      "thriller, crime film or TV programme",
      "mathematics"
    ]
  },
  {
    "question": "der Arm, -e",
    "correct": "arm",
    "choices": [
      "identification",
      "agriculture",
      "injury",
      "arm"
    ]
  },
  {
    "question": "die Art, -en",
    "correct": "type",
    "choices": [
      "busicuits",
      "birth",
      "pedestrian",
      "type"
    ]
  },
  {
    "question": "der Artikel, -",
    "correct": "article",
    "choices": [
      "bottle",
      "article",
      "cupboard",
      "secretary"
    ]
  },
  {
    "question": "der Arzt, -\"e",
    "correct": "doctor",
    "choices": [
      "doctor",
      "near, proximity, vicinity",
      "paper",
      "area, district"
    ]
  },
  {
    "question": "das Asyl, -e",
    "correct": "asylum",
    "choices": [
      "asylum",
      "interview",
      "communication",
      "male nurse"
    ]
  },
  {
    "question": "der Aufenthalt, -e",
    "correct": "stay, delay, stop",
    "choices": [
      "tooth",
      "living room",
      "stay, delay, stop",
      "fear"
    ]
  },
  {
    "question": "die Aufforderung, -en",
    "correct": "order, invitation",
    "choices": [
      "order, invitation",
      "qualification",
      "steak",
      "ceiling, blanket"
    ]
  },
  {
    "question": "die Aufgabe, -n",
    "correct": "task, exercise",
    "choices": [
      "lawyer",
      "task, exercise",
      "increase",
      "conversation, discussion"
    ]
  },
  {
    "question": "die Aufnahme, -n",
    "correct": "picture, recording, admission",
    "choices": [
      "mother tongue",
      "building site",
      "picture, recording, admission",
      "notice"
    ]
  },
  {
    "question": "der Auftrag, -\"e",
    "correct": "order, commission, mission",
    "choices": [
      "car",
      "team",
      "order, commission, mission",
      "value"
    ]
  },
  {
    "question": "der Aufzug, -\"e",
    "correct": "lift",
    "choices": [
      "gate, goal",
      "nerve",
      "letter, communication",
      "lift"
    ]
  },
  {
    "question": "das Auge, -n",
    "correct": "eye",
    "choices": [
      "lost property office",
      "coin",
      "trial, case, process",
      "eye"
    ]
  },
  {
    "question": "der Augenblick, -e",
    "correct": "moment",
    "choices": [
      "reason, justification",
      "distress, need",
      "moment",
      "fair, show"
    ]
  },
  {
    "question": "die Ausbildung, -en",
    "correct": "education, training, instruction",
    "choices": [
      "cloud",
      "education, training, instruction",
      "commune, shared flat",
      "photo"
    ]
  },
  {
    "question": "der Ausbildungsplatz, -\"e",
    "correct": "training place, apprenticeship",
    "choices": [
      "potato",
      "spice",
      "annoyance",
      "training place, apprenticeship"
    ]
  },
  {
    "question": "der Ausdruck, -\"e",
    "correct": "expression, printout",
    "choices": [
      "people",
      "nourishment",
      "shoulder",
      "expression, printout"
    ]
  },
  {
    "question": "die Ausfahrt, -en",
    "correct": "exit",
    "choices": [
      "exit",
      "dessert",
      "connection, relationship",
      "film"
    ]
  },
  {
    "question": "der Ausflug, -\"e",
    "correct": "excursion, trip",
    "choices": [
      "excursion, trip",
      "annoyance",
      "lemonade",
      "call"
    ]
  },
  {
    "question": "die Ausgabe, -n",
    "correct": "expenses, output, distribution",
    "choices": [
      "buy",
      "nonsense",
      "expenses, output, distribution",
      "area"
    ]
  },
  {
    "question": "der Ausgang, -\"e",
    "correct": "exit",
    "choices": [
      "exit",
      "crossroad",
      "engineer",
      "domicile"
    ]
  },
  {
    "question": "die Aushilfe, -n",
    "correct": "assistant, temporary help",
    "choices": [
      "househusband",
      "throat",
      "hair",
      "assistant, temporary help"
    ]
  },
  {
    "question": "die Auskunft, -\"e",
    "correct": "information, information desk",
    "choices": [
      "information, information desk",
      "difference",
      "listener",
      "subscription"
    ]
  },
  {
    "question": "das Ausland (Sg.)",
    "correct": "foreign countries, abroad",
    "choices": [
      "illness",
      "foreign countries, abroad",
      "traffic light",
      "support"
    ]
  },
  {
    "question": "der Ausländer, -",
    "correct": "foreigner",
    "choices": [
      "appetite",
      "fog",
      "problem",
      "foreigner"
    ]
  },
  {
    "question": "die Ausnahme, -n",
    "correct": "exception",
    "choices": [
      "cause",
      "artist",
      "preparation",
      "exception"
    ]
  },
  {
    "question": "die Aussicht, -en",
    "correct": "view, perspective",
    "choices": [
      "coat, jacket",
      "view, perspective",
      "vitamin",
      "packet, parcel"
    ]
  },
  {
    "question": "die Aussprache (Sg.)",
    "correct": "pronunciation",
    "choices": [
      "application, proposal, motion",
      "receipt, documentary evidence",
      "pronunciation",
      "scissors"
    ]
  },
  {
    "question": "die Ausstellung, -en",
    "correct": "exhibition",
    "choices": [
      "immigrant background",
      "exhibition",
      "advice, consultation",
      "back"
    ]
  },
  {
    "question": "der Ausweis, -e",
    "correct": "identification",
    "choices": [
      "food",
      "certificate, report, reference",
      "identification",
      "farm"
    ]
  },
  {
    "question": "der Auszubildende, -n",
    "correct": "trainee",
    "choices": [
      "ship",
      "trainee",
      "living room",
      "translator"
    ]
  },
  {
    "question": "das Auto, -s",
    "correct": "car",
    "choices": [
      "car",
      "ski",
      "control",
      "beginning"
    ]
  },
  {
    "question": "die Autobahn, -en",
    "correct": "motorway",
    "choices": [
      "motorway",
      "Nursery school",
      "Biro",
      "nerve"
    ]
  },
  {
    "question": "der Automat, -en",
    "correct": "dispensing machine",
    "choices": [
      "forehead",
      "protest",
      "dispensing machine",
      "emergency"
    ]
  },
  {
    "question": "das Baby, -s",
    "correct": "baby",
    "choices": [
      "department store, shopping center",
      "move, removal",
      "baby",
      "advice, consultation"
    ]
  },
  {
    "question": "der Babysitter, -",
    "correct": "baby sitter",
    "choices": [
      "firm",
      "tourism",
      "stuff, gear",
      "baby sitter"
    ]
  },
  {
    "question": "die Bäckerei, -en",
    "correct": "bakery",
    "choices": [
      "vegetables",
      "towel",
      "bakery",
      "fax"
    ]
  },
  {
    "question": "das Bad, -\"er",
    "correct": "bath",
    "choices": [
      "conditions, terms",
      "misunderstanding",
      "artist",
      "bath"
    ]
  },
  {
    "question": "die Badewanne, -n",
    "correct": "bathtub",
    "choices": [
      "visit",
      "bathtub",
      "tariff",
      "walk, trek"
    ]
  },
  {
    "question": "die Bahn, -en",
    "correct": "train",
    "choices": [
      "visa",
      "train",
      "taxi",
      "memory"
    ]
  },
  {
    "question": "die S-Bahn, -en",
    "correct": "city (overground) train",
    "choices": [
      "city (overground) train",
      "way",
      "laboratory",
      "ice cream"
    ]
  },
  {
    "question": "die Straßenbahn, -en",
    "correct": "tram",
    "choices": [
      "wind",
      "tram",
      "noise",
      "notice"
    ]
  },
  {
    "question": "die U-Bahn, -en",
    "correct": "underground train",
    "choices": [
      "habour",
      "sportsman",
      "underground train",
      "sauce"
    ]
  },
  {
    "question": "der Bahnhof, -\"e",
    "correct": "railway station",
    "choices": [
      "railway station",
      "couple",
      "formular",
      "stain, patch"
    ]
  },
  {
    "question": "der Bahnsteig, -e",
    "correct": "platform",
    "choices": [
      "culture",
      "platform",
      "artist",
      "hour"
    ]
  },
  {
    "question": "der Balkon, -e",
    "correct": "balcony",
    "choices": [
      "firm, concern, plant, operation",
      "timetable",
      "balcony",
      "father"
    ]
  },
  {
    "question": "der Ball, -\"e",
    "correct": "ball",
    "choices": [
      "ball",
      "song",
      "cook",
      "victim"
    ]
  },
  {
    "question": "die Banane, -n",
    "correct": "banana",
    "choices": [
      "banana",
      "break in",
      "photo",
      "course leader"
    ]
  },
  {
    "question": "die Bank, -\"e/die Bank, -en",
    "correct": "bank",
    "choices": [
      "living room",
      "model",
      "bank",
      "landlord"
    ]
  },
  {
    "question": "die Bankleitzahl, -en",
    "correct": "bank code number",
    "choices": [
      "cake",
      "argument",
      "step",
      "bank code number"
    ]
  },
  {
    "question": "das Bargeld, -er",
    "correct": "cash",
    "choices": [
      "mistake",
      "back",
      "cash",
      "plate"
    ]
  },
  {
    "question": "der Bart, -\"e",
    "correct": "beard",
    "choices": [
      "admission, entrance",
      "beard",
      "foreign countries, abroad",
      "pillow"
    ]
  },
  {
    "question": "die Batterie, -n",
    "correct": "battery",
    "choices": [
      "t-shirt",
      "life",
      "experts",
      "battery"
    ]
  },
  {
    "question": "der Bauch, -\"e",
    "correct": "stomach",
    "choices": [
      "alarm",
      "receipt, documentary evidence",
      "stomach",
      "driving school"
    ]
  },
  {
    "question": "der Bau, -ten",
    "correct": "building",
    "choices": [
      "movement",
      "''jui''''ce",
      "motor",
      "building"
    ]
  },
  {
    "question": "die Baustelle, -n",
    "correct": "building site",
    "choices": [
      "team",
      "social security office",
      "building site",
      "firm, concern, plant, operation"
    ]
  },
  {
    "question": "der Bauer, -n",
    "correct": "farmer",
    "choices": [
      "practical training, internship",
      "flu",
      "work",
      "farmer"
    ]
  },
  {
    "question": "der Baum, -\"e",
    "correct": "tree",
    "choices": [
      "performance, achievement",
      "daily routine",
      "tree",
      "fee"
    ]
  },
  {
    "question": "der Beamte, -n",
    "correct": "official",
    "choices": [
      "official",
      "curve, arch, bow",
      "costume, suit",
      "shopping"
    ]
  },
  {
    "question": "die Bedienungsanleitung, -en",
    "correct": "operating instructions",
    "choices": [
      "police",
      "tree",
      "hour, time, watch",
      "operating instructions"
    ]
  },
  {
    "question": "die Bedingung, -en",
    "correct": "conditions, terms",
    "choices": [
      "camp",
      "street sign",
      "conditions, terms",
      "project"
    ]
  },
  {
    "question": "der Beginn (Sg.)",
    "correct": "beginning",
    "choices": [
      "pension",
      "chocolate",
      "beginning",
      "pronunciation"
    ]
  },
  {
    "question": "die Begründung, -en",
    "correct": "reason, justification",
    "choices": [
      "appointment, announcement",
      "dead",
      "lemonade",
      "reason, justification"
    ]
  },
  {
    "question": "die Behörde, -n",
    "correct": "authorities",
    "choices": [
      "authorities",
      "nanny",
      "title",
      "competition"
    ]
  },
  {
    "question": "das Bein, -e",
    "correct": "leg",
    "choices": [
      "business, shop",
      "permission",
      "right of way",
      "leg"
    ]
  },
  {
    "question": "das Beispiel, -e",
    "correct": "example",
    "choices": [
      "pepper",
      "employee",
      "unemployment",
      "example"
    ]
  },
  {
    "question": "der Beitrag, -\"e",
    "correct": "contribution, fee, subscription, premium",
    "choices": [
      "special care",
      "contribution, fee, subscription, premium",
      "can",
      "tools"
    ]
  },
  {
    "question": "der Bekannte, -n",
    "correct": "acquaintance, known person",
    "choices": [
      "acquaintance, known person",
      "mushroom",
      "driving school",
      "alphabet"
    ]
  },
  {
    "question": "der Beleg, -e",
    "correct": "receipt, documentary evidence",
    "choices": [
      "receipt, documentary evidence",
      "granddad",
      "credit card",
      "party"
    ]
  },
  {
    "question": "das Benzin (Sg.)",
    "correct": "petrol (uk), gas (us)",
    "choices": [
      "petrol (uk), gas (us)",
      "mouse",
      "friend",
      "trial, case, process"
    ]
  },
  {
    "question": "die Beratung, -en",
    "correct": "advice, consultation",
    "choices": [
      "management, administration",
      "advice, consultation",
      "speed",
      "joe"
    ]
  },
  {
    "question": "der Bereich, -e",
    "correct": "area",
    "choices": [
      "ice cream",
      "area",
      "public",
      "cosmetics"
    ]
  },
  {
    "question": "der Berg, -e",
    "correct": "mountain",
    "choices": [
      "room",
      "mountain",
      "picture",
      "honor"
    ]
  },
  {
    "question": "der Bericht, -e",
    "correct": "report",
    "choices": [
      "report",
      "witness",
      "landing",
      "sock"
    ]
  },
  {
    "question": "der Beruf, -e",
    "correct": "profession",
    "choices": [
      "profession",
      "stroller",
      "catastrophe",
      "fan (sport, etc.)"
    ]
  },
  {
    "question": "die Beschäftigung, -en",
    "correct": "employment, occupation",
    "choices": [
      "energy",
      "park",
      "employment, occupation",
      "understanding"
    ]
  },
  {
    "question": "der Bescheid, -e",
    "correct": "information, directions",
    "choices": [
      "dead",
      "meeting, discussion",
      "information, directions",
      "meat"
    ]
  },
  {
    "question": "die Bescheinigung, -en",
    "correct": "certificate",
    "choices": [
      "certificate",
      "recipe",
      "flat, apartment",
      "land, country, state"
    ]
  },
  {
    "question": "die Beschreibung, -en",
    "correct": "description",
    "choices": [
      "description",
      "politics",
      "repair",
      "vinegar"
    ]
  },
  {
    "question": "die Besprechung, -en",
    "correct": "meeting, discussion",
    "choices": [
      "handwriting",
      "meeting, discussion",
      "competition",
      "guest"
    ]
  },
  {
    "question": "die Besserung (Sg.)",
    "correct": "recovery",
    "choices": [
      "attempt, experiment",
      "internet connection",
      "rest, peace, quiet",
      "recovery"
    ]
  },
  {
    "question": "die Bestätigung, -en",
    "correct": "confirmation",
    "choices": [
      "confirmation",
      "discussion",
      "coast",
      "mirror"
    ]
  },
  {
    "question": "der Besuch, -e",
    "correct": "visit",
    "choices": [
      "police",
      "curve, arch, bow",
      "visit",
      "connection (TV, internet)"
    ]
  },
  {
    "question": "der Betrag, -\"e",
    "correct": "amount, sum",
    "choices": [
      "amount, sum",
      "vehicle",
      "energy",
      "button"
    ]
  },
  {
    "question": "die Betreuung (Sg.)",
    "correct": "care",
    "choices": [
      "fault",
      "portion",
      "care",
      "fitness"
    ]
  },
  {
    "question": "der Betrieb, -e",
    "correct": "firm, concern, plant, operation",
    "choices": [
      "firm, concern, plant, operation",
      "envelope",
      "fluid",
      "restaurant"
    ]
  },
  {
    "question": "der Betriebsrat, -\"e",
    "correct": "workers' council",
    "choices": [
      "shirt",
      "workers' council",
      "mathematics",
      "club"
    ]
  },
  {
    "question": "das Bett, -en",
    "correct": "bed",
    "choices": [
      "meat",
      "connection (TV, internet)",
      "sun",
      "bed"
    ]
  },
  {
    "question": "die Bevölkerung, -en",
    "correct": "population",
    "choices": [
      "conversation, discussion",
      "taxi",
      "tourism",
      "population"
    ]
  },
  {
    "question": "die Bewegung, -en",
    "correct": "movement",
    "choices": [
      "lady",
      "burglar",
      "lorry, truck",
      "movement"
    ]
  },
  {
    "question": "der Beweis, -e",
    "correct": "proof",
    "choices": [
      "orange",
      "corner",
      "proof",
      "grill"
    ]
  },
  {
    "question": "die Bewerbung, -en",
    "correct": "application",
    "choices": [
      "main railway station",
      "application",
      "first name",
      "shop"
    ]
  },
  {
    "question": "der Bewohner, -",
    "correct": "inhabitant",
    "choices": [
      "salary",
      "inhabitant",
      "memory",
      "spectator"
    ]
  },
  {
    "question": "die Beziehung, -en",
    "correct": "connection, relationship",
    "choices": [
      "fuel station",
      "part",
      "woman",
      "connection, relationship"
    ]
  },
  {
    "question": "die Bibliothek, -en",
    "correct": "library",
    "choices": [
      "opnion",
      "colleague",
      "experience",
      "library"
    ]
  },
  {
    "question": "das Bier, -e",
    "correct": "beer",
    "choices": [
      "journalist",
      "beer",
      "thunderstorm",
      "dust"
    ]
  },
  {
    "question": "der Biergarten, -\"",
    "correct": "beer garden",
    "choices": [
      "reform",
      "beer garden",
      "shirt",
      "casualty department"
    ]
  },
  {
    "question": "das Bild, -er",
    "correct": "picture",
    "choices": [
      "internet",
      "cupboard",
      "announcement, report",
      "picture"
    ]
  },
  {
    "question": "der Bildschirm, -e",
    "correct": "screen",
    "choices": [
      "uncle",
      "bread",
      "screen",
      "thriller, crime film or TV programme"
    ]
  },
  {
    "question": "die Birne, -n",
    "correct": "pear",
    "choices": [
      "ball",
      "text",
      "pear",
      "flu"
    ]
  },
  {
    "question": "die Bitte, -n",
    "correct": "request",
    "choices": [
      "birth",
      "class",
      "nanny",
      "request"
    ]
  },
  {
    "question": "das Blatt, -\"er",
    "correct": "leaf, sheet",
    "choices": [
      "home place",
      "dress",
      "leaf, sheet",
      "can"
    ]
  },
  {
    "question": "der Bleistift, -e",
    "correct": "pencil",
    "choices": [
      "operation",
      "fear",
      "pencil",
      "man, gentleman"
    ]
  },
  {
    "question": "der Blick, -e",
    "correct": "view",
    "choices": [
      "pharmacy",
      "view",
      "coin",
      "wonder"
    ]
  },
  {
    "question": "der Blitz, -e",
    "correct": "lightning",
    "choices": [
      "playground",
      "symbol",
      "difference",
      "lightning"
    ]
  },
  {
    "question": "die Blume, -n",
    "correct": "flower",
    "choices": [
      "professor",
      "flower",
      "burglar",
      "human being, person"
    ]
  },
  {
    "question": "die Bluse, -n",
    "correct": "blouse",
    "choices": [
      "fear",
      "memory",
      "full time",
      "blouse"
    ]
  },
  {
    "question": "das Blut (Sg.)",
    "correct": "blood",
    "choices": [
      "family",
      "blood",
      "end of the working day",
      "half"
    ]
  },
  {
    "question": "der Boden, -\"",
    "correct": "floor",
    "choices": [
      "big city",
      "cola",
      "butcher's shop",
      "floor"
    ]
  },
  {
    "question": "der Bogen, -\"",
    "correct": "curve, arch, bow",
    "choices": [
      "curve, arch, bow",
      "dog",
      "bean",
      "lift"
    ]
  },
  {
    "question": "die Bohne, -n",
    "correct": "bean",
    "choices": [
      "risk",
      "bean",
      "ambulance",
      "security"
    ]
  },
  {
    "question": "das Bonbon, -s",
    "correct": "sweet",
    "choices": [
      "consultation (hour), surgery",
      "opportunity",
      "bean",
      "sweet"
    ]
  },
  {
    "question": "das Boot, -e",
    "correct": "boat",
    "choices": [
      "row",
      "dessert",
      "ball",
      "boat"
    ]
  },
  {
    "question": "die Botschaft, -en",
    "correct": "embassy",
    "choices": [
      "embassy",
      "conviction",
      "breast, chest",
      "moon"
    ]
  },
  {
    "question": "der Braten, -",
    "correct": "roast, joint",
    "choices": [
      "return",
      "roast, joint",
      "travel agency",
      "apartment"
    ]
  },
  {
    "question": "die Breite, -n",
    "correct": "width",
    "choices": [
      "disadvantage",
      "right",
      "tea",
      "width"
    ]
  },
  {
    "question": "die Bremse, -n",
    "correct": "brake",
    "choices": [
      "kiss",
      "brake",
      "ox, cow, beef",
      "birth"
    ]
  },
  {
    "question": "der Brief, -e",
    "correct": "letter",
    "choices": [
      "school",
      "participant",
      "zone",
      "letter"
    ]
  },
  {
    "question": "der Briefkasten, \"",
    "correct": "letter box",
    "choices": [
      "proof",
      "movement",
      "CD",
      "letter box"
    ]
  },
  {
    "question": "die Briefmarke, -n",
    "correct": "stamp",
    "choices": [
      "mood",
      "journalist",
      "stamp",
      "Department"
    ]
  },
  {
    "question": "der Briefträger, -",
    "correct": "postman",
    "choices": [
      "point in time",
      "return journey",
      "stretch, distance",
      "postman"
    ]
  },
  {
    "question": "der Briefumschlag, -\"e",
    "correct": "envelope",
    "choices": [
      "pronunciation",
      "circle",
      "envelope",
      "courage"
    ]
  },
  {
    "question": "die Brille, -n",
    "correct": "glasses",
    "choices": [
      "glasses",
      "warning, reminder",
      "pressure",
      "tradition"
    ]
  },
  {
    "question": "die Broschüre, -n",
    "correct": "brochure",
    "choices": [
      "ticket (parking)",
      "brochure",
      "number",
      "heart"
    ]
  },
  {
    "question": "das Brot, -e",
    "correct": "bread",
    "choices": [
      "bread",
      "death",
      "customer",
      "buyer"
    ]
  },
  {
    "question": "das Brötchen, -",
    "correct": "bread roll",
    "choices": [
      "domicile",
      "bread roll",
      "birth",
      "professional"
    ]
  },
  {
    "question": "die Brücke, -n",
    "correct": "bridge",
    "choices": [
      "bridge",
      "sock",
      "lemonade",
      "tomato"
    ]
  },
  {
    "question": "der Bruder, -\"",
    "correct": "brother",
    "choices": [
      "brother",
      "laboratory",
      "scissors",
      "visa"
    ]
  },
  {
    "question": "die Brust, die Brüste",
    "correct": "breast, chest",
    "choices": [
      "breast, chest",
      "ship",
      "suitcase",
      "steak"
    ]
  },
  {
    "question": "das Buch, -\"er",
    "correct": "book",
    "choices": [
      "import",
      "letter",
      "book",
      "stress"
    ]
  },
  {
    "question": "die Buchhandlung, -en",
    "correct": "bookshop",
    "choices": [
      "dance",
      "mood",
      "bookshop",
      "warmth"
    ]
  },
  {
    "question": "die Bücherei, -en",
    "correct": "library",
    "choices": [
      "sign",
      "library",
      "stone",
      "compartment, field of expertise, subject"
    ]
  },
  {
    "question": "der Buchstabe, -n",
    "correct": "letter (of the alphabet)",
    "choices": [
      "seat",
      "phantasy",
      "motorway",
      "letter (of the alphabet)"
    ]
  },
  {
    "question": "der Bürger, -",
    "correct": "citizen",
    "choices": [
      "social security office",
      "citizen",
      "passport",
      "camp"
    ]
  },
  {
    "question": "das Bürgerbüro, -s",
    "correct": "community office",
    "choices": [
      "community office",
      "bag",
      "poison",
      "ear"
    ]
  },
  {
    "question": "der Bürgersteig, -e",
    "correct": "sidewalk",
    "choices": [
      "sidewalk",
      "expression, printout",
      "cream",
      "wine"
    ]
  },
  {
    "question": "das Büro, -s",
    "correct": "office",
    "choices": [
      "practice",
      "office",
      "risk",
      "coincidence"
    ]
  },
  {
    "question": "die Bürste, -n",
    "correct": "brush",
    "choices": [
      "order, tidiness",
      "fan (sport, etc.)",
      "painter",
      "brush"
    ]
  },
  {
    "question": "die Zahnbürste, -n",
    "correct": "toothbrush",
    "choices": [
      "original",
      "toothbrush",
      "door bell",
      "diet"
    ]
  },
  {
    "question": "der Bus, -se",
    "correct": "bus",
    "choices": [
      "application, proposal, motion",
      "calculator",
      "machine",
      "bus"
    ]
  },
  {
    "question": "die Butter (Sg.)",
    "correct": "butter",
    "choices": [
      "butter",
      "perpetrator, culprit",
      "revenue, takings, income",
      "time"
    ]
  },
  {
    "question": "das Café, -s",
    "correct": "cafe",
    "choices": [
      "order, invitation",
      "danger",
      "cafe",
      "photography"
    ]
  },
  {
    "question": "das Camping (Sg.)",
    "correct": "camping",
    "choices": [
      "camping",
      "fog",
      "fruit",
      "immigrant background"
    ]
  },
  {
    "question": "die CD, -s",
    "correct": "CD",
    "choices": [
      "travel agency",
      "notice",
      "CD",
      "pharmacy"
    ]
  },
  {
    "question": "die CD-ROM, -s",
    "correct": "CD-ROM",
    "choices": [
      "ton",
      "air conditioner",
      "energy",
      "CD-ROM"
    ]
  },
  {
    "question": "die Chance, -n",
    "correct": "chance",
    "choices": [
      "certificate, report, reference",
      "bread",
      "chance",
      "picture"
    ]
  },
  {
    "question": "der Chef, -s",
    "correct": "head, boss",
    "choices": [
      "head, boss",
      "immigrant",
      "stand point",
      "stove"
    ]
  },
  {
    "question": "die Chemie (Sg.)",
    "correct": "chemistry",
    "choices": [
      "chemistry",
      "envelope",
      "reception",
      "track, trace"
    ]
  },
  {
    "question": "der Club, -s",
    "correct": "club",
    "choices": [
      "distress, need",
      "cat",
      "humor",
      "club"
    ]
  },
  {
    "question": "das Cola, -s",
    "correct": "cola",
    "choices": [
      "state",
      "device",
      "cola",
      "strike"
    ]
  },
  {
    "question": "die Couch, -s",
    "correct": "couch",
    "choices": [
      "journalist",
      "flower",
      "nanny",
      "couch"
    ]
  },
  {
    "question": "der Cousin, -s / die Cousine, -n",
    "correct": "cousin",
    "choices": [
      "trashcan, waste basket",
      "import",
      "cousin",
      "butcher's shop"
    ]
  },
  {
    "question": "der Computer",
    "correct": "computer",
    "choices": [
      "computer",
      "dream",
      "current (electricity)",
      "border"
    ]
  },
  {
    "question": "die Creme, -s",
    "correct": "cream",
    "choices": [
      "dance",
      "cream",
      "cross",
      "information, specification"
    ]
  },
  {
    "question": "das Dach, -\"er",
    "correct": "roof",
    "choices": [
      "policeman",
      "leaflet, brochure",
      "roof",
      "guitar"
    ]
  },
  {
    "question": "die Dame, -n",
    "correct": "lady",
    "choices": [
      "passenger",
      "population",
      "lady",
      "book"
    ]
  },
  {
    "question": "der Dank (Sg.)",
    "correct": "thanks (noun)",
    "choices": [
      "incidence, idea",
      "thanks (noun)",
      "amount, sum",
      "first name"
    ]
  },
  {
    "question": "die Datei, -en",
    "correct": "data folder",
    "choices": [
      "information",
      "cover, replacement",
      "course leader",
      "data folder"
    ]
  },
  {
    "question": "das Datum, die Daten",
    "correct": "date(s)",
    "choices": [
      "bakery",
      "date(s)",
      "parents evening",
      "question"
    ]
  },
  {
    "question": "die Decke, -n",
    "correct": "ceiling, blanket",
    "choices": [
      "sack",
      "ceiling, blanket",
      "example",
      "industry"
    ]
  },
  {
    "question": "die Demokratie, -n",
    "correct": "democracy",
    "choices": [
      "order, tidiness",
      "democracy",
      "flu",
      "area, district"
    ]
  },
  {
    "question": "die Diät, -en",
    "correct": "diet",
    "choices": [
      "modification, change",
      "duty, compulsory",
      "region",
      "diet"
    ]
  },
  {
    "question": "der Dieb, -e",
    "correct": "thief",
    "choices": [
      "thief",
      "cash",
      "warmth",
      "mouth"
    ]
  },
  {
    "question": "der Dienst, -e",
    "correct": "service",
    "choices": [
      "television",
      "service",
      "colour",
      "spare part"
    ]
  },
  {
    "question": "der Diesel (Sg.)",
    "correct": "diesel",
    "choices": [
      "ice cream",
      "apprentice, trainee",
      "holiday",
      "diesel"
    ]
  },
  {
    "question": "das Ding, -e",
    "correct": "thing",
    "choices": [
      "mark, brand, stamp",
      "thing",
      "revenue, takings, income",
      "care insurance"
    ]
  },
  {
    "question": "der Direktor, -en",
    "correct": "director",
    "choices": [
      "CD-ROM",
      "noise",
      "director",
      "contract"
    ]
  },
  {
    "question": "die Diskothek, -en / die Disko, -s",
    "correct": "discotheque",
    "choices": [
      "capital city",
      "street sign",
      "switch",
      "discotheque"
    ]
  },
  {
    "question": "die Diskussion, -en",
    "correct": "discussion",
    "choices": [
      "classwork",
      "professor",
      "discussion",
      "meat"
    ]
  },
  {
    "question": "der Doktor, -en",
    "correct": "doctor",
    "choices": [
      "snow",
      "doctor",
      "holiday",
      "impression"
    ]
  },
  {
    "question": "das Dorf, -\"er",
    "correct": "village",
    "choices": [
      "boy",
      "village",
      "discount",
      "sand"
    ]
  },
  {
    "question": "die Dose, -n",
    "correct": "can",
    "choices": [
      "can",
      "trial",
      "replacement",
      "industry"
    ]
  },
  {
    "question": "die Drogerie, -n",
    "correct": "pharmacist",
    "choices": [
      "information, information desk",
      "pedestrian area",
      "pharmacist",
      "risk of death"
    ]
  },
  {
    "question": "der Drucker, -",
    "correct": "printer",
    "choices": [
      "printer",
      "state",
      "credit, loan",
      "unemployment"
    ]
  },
  {
    "question": "der Druck (Sg.)",
    "correct": "pressure",
    "choices": [
      "shelf",
      "arrival",
      "nerve",
      "pressure"
    ]
  },
  {
    "question": "die Durchsage, -n",
    "correct": "announcement (radio)",
    "choices": [
      "mood",
      "announcement (radio)",
      "movement",
      "cinema"
    ]
  },
  {
    "question": "der Durst (Sg.)",
    "correct": "thirst",
    "choices": [
      "pillow",
      "thirst",
      "region",
      "traffic jam"
    ]
  },
  {
    "question": "die Dusche, -n",
    "correct": "shower",
    "choices": [
      "snow",
      "lock, padlock, castle",
      "shower",
      "pencil"
    ]
  },
  {
    "question": "die DVD, -s",
    "correct": "DVD",
    "choices": [
      "answer",
      "DVD",
      "boat",
      "connection"
    ]
  },
  {
    "question": "die EC-Karte, -n",
    "correct": "EC card (bank card)",
    "choices": [
      "EC card (bank card)",
      "stomach",
      "contribution, fee, subscription, premium",
      "rest, relaxation, recovery"
    ]
  },
  {
    "question": "die Ecke, -n",
    "correct": "corner",
    "choices": [
      "corner",
      "apple",
      "duty, compulsory",
      "partner"
    ]
  },
  {
    "question": "die Ehe, -n",
    "correct": "marrige",
    "choices": [
      "thing",
      "marrige",
      "chocolate",
      "care insurance"
    ]
  },
  {
    "question": "die Ehefrau, -en / der Ehemann, -\"er",
    "correct": "wife",
    "choices": [
      "ointment",
      "nanny",
      "emergency",
      "wife"
    ]
  },
  {
    "question": "der Ehegatte, -n / die Ehegattin, -nen",
    "correct": "spouse",
    "choices": [
      "present",
      "spouse",
      "fog",
      "care insurance"
    ]
  },
  {
    "question": "das Ehepaar, -e",
    "correct": "married couple",
    "choices": [
      "support",
      "married couple",
      "criminal",
      "social care"
    ]
  },
  {
    "question": "die Ehre (Sg.)",
    "correct": "honor",
    "choices": [
      "honor",
      "prohibition, ban",
      "movement",
      "right"
    ]
  },
  {
    "question": "das Ei, -er",
    "correct": "egg",
    "choices": [
      "egg",
      "souvenir",
      "intensive course",
      "supermarket"
    ]
  },
  {
    "question": "die Eile (Sg.)",
    "correct": "haste",
    "choices": [
      "library",
      "plastic",
      "pot",
      "haste"
    ]
  },
  {
    "question": "die Einbahnstraße, -n",
    "correct": "one way street",
    "choices": [
      "nationality",
      "dustbin",
      "one way street",
      "promotion"
    ]
  },
  {
    "question": "der Einbrecher, -",
    "correct": "burglar",
    "choices": [
      "piece of apparatus",
      "burglar",
      "click",
      "action"
    ]
  },
  {
    "question": "der Einbruch, -\"e",
    "correct": "break in",
    "choices": [
      "toothbrush",
      "industry",
      "break in",
      "struggle, fight"
    ]
  },
  {
    "question": "der Eindruck, -\"e",
    "correct": "impression",
    "choices": [
      "contents",
      "application",
      "island",
      "impression"
    ]
  },
  {
    "question": "die Einfahrt, -en",
    "correct": "driving in, entrance, slip road",
    "choices": [
      "pet, domestic animal",
      "driving in, entrance, slip road",
      "appointment",
      "number"
    ]
  },
  {
    "question": "der Einfall, -\"e",
    "correct": "incidence, idea",
    "choices": [
      "preliminary election",
      "incidence, idea",
      "railway station",
      "habour"
    ]
  },
  {
    "question": "der Einfluss, -\"e",
    "correct": "influence",
    "choices": [
      "politics",
      "capital city",
      "influence",
      "honor"
    ]
  },
  {
    "question": "die Einführung, -en",
    "correct": "introduction",
    "choices": [
      "dining car",
      "work",
      "introduction",
      "case, box, crate"
    ]
  },
  {
    "question": "der Eingang, -\"e",
    "correct": "entrance",
    "choices": [
      "banana",
      "buy",
      "entrance",
      "origin"
    ]
  },
  {
    "question": "der Einkauf, -\"e",
    "correct": "shopping",
    "choices": [
      "fire",
      "value",
      "diversion",
      "shopping"
    ]
  },
  {
    "question": "das Einkommen, -",
    "correct": "income",
    "choices": [
      "sauce",
      "income",
      "history",
      "airplane"
    ]
  },
  {
    "question": "die Einladung, -en",
    "correct": "invitation",
    "choices": [
      "domicile",
      "invitation",
      "experience",
      "stroll"
    ]
  },
  {
    "question": "die Einnahme, -n",
    "correct": "revenue, takings, income",
    "choices": [
      "world champion",
      "noodle",
      "revenue, takings, income",
      "lamp"
    ]
  },
  {
    "question": "die Einrichtung, -en",
    "correct": "furnishings, organisation, equipment",
    "choices": [
      "furnishings, organisation, equipment",
      "gate, goal",
      "crossroad",
      "credit card"
    ]
  },
  {
    "question": "das Einschreiben, -",
    "correct": "registered mail/ post",
    "choices": [
      "colour",
      "one way street",
      "spice",
      "registered mail/ post"
    ]
  },
  {
    "question": "der Eintritt, -e",
    "correct": "admission, entrance",
    "choices": [
      "admission, entrance",
      "school graduation exam",
      "camping",
      "track, trace"
    ]
  },
  {
    "question": "der Einwohner, -",
    "correct": "inhabitant",
    "choices": [
      "criminal",
      "inhabitant",
      "conscience",
      "patient"
    ]
  },
  {
    "question": "die Einzelheit, -en",
    "correct": "particular, detail",
    "choices": [
      "suspicion",
      "particular, detail",
      "breakdown",
      "communication"
    ]
  },
  {
    "question": "das Eis (Sg.)",
    "correct": "ice cream",
    "choices": [
      "perfume",
      "bag",
      "bill",
      "ice cream"
    ]
  },
  {
    "question": "das Eisen, -",
    "correct": "iron",
    "choices": [
      "bridge",
      "page",
      "iron",
      "stress"
    ]
  },
  {
    "question": "die Eisenbahn, -en",
    "correct": "railway",
    "choices": [
      "railway",
      "portion",
      "tariff",
      "sign"
    ]
  },
  {
    "question": "die Eltern (Pl.)",
    "correct": "parents",
    "choices": [
      "parents",
      "policeman",
      "conviction",
      "cosmetics"
    ]
  },
  {
    "question": "der Elternabend, -e",
    "correct": "parents evening",
    "choices": [
      "mushroom",
      "cell phone",
      "housing money, housing allowance",
      "parents evening"
    ]
  },
  {
    "question": "der Elternbeirat, -\"e",
    "correct": "parent council",
    "choices": [
      "police",
      "muscician",
      "parent council",
      "lost property office"
    ]
  },
  {
    "question": "die E-Mail, -s",
    "correct": "e mail",
    "choices": [
      "shade, shadow",
      "article",
      "drink",
      "e mail"
    ]
  },
  {
    "question": "der Empfang, -\"e",
    "correct": "reception",
    "choices": [
      "information",
      "bean",
      "reception",
      "fee"
    ]
  },
  {
    "question": "die Empfehlung, -en",
    "correct": "recommendation",
    "choices": [
      "storm",
      "example",
      "telephone",
      "recommendation"
    ]
  },
  {
    "question": "das Ende, -n",
    "correct": "end",
    "choices": [
      "line",
      "end",
      "contribution, fee, subscription, premium",
      "semester"
    ]
  },
  {
    "question": "die Energie, -n",
    "correct": "energy",
    "choices": [
      "printer",
      "old people's home, retirement home",
      "street sign",
      "energy"
    ]
  },
  {
    "question": "der Enkel, -",
    "correct": "grandchild",
    "choices": [
      "grandchild",
      "end",
      "the hand",
      "union"
    ]
  },
  {
    "question": "die Entfernung, -en",
    "correct": "distance",
    "choices": [
      "studies",
      "wish",
      "distance",
      "employer"
    ]
  },
  {
    "question": "die Entscheidung, -en",
    "correct": "decision",
    "choices": [
      "decision",
      "camping",
      "rule",
      "confirmation"
    ]
  },
  {
    "question": "die Entschuldigung, -en",
    "correct": "apology",
    "choices": [
      "tooth",
      "apology",
      "coffee",
      "criminal"
    ]
  },
  {
    "question": "die Enttäuschung, -en",
    "correct": "disappointment",
    "choices": [
      "disappointment",
      "air conditioner",
      "postcard",
      "warmth"
    ]
  },
  {
    "question": "die Entwicklung, -en",
    "correct": "development",
    "choices": [
      "development",
      "maiden name",
      "fire",
      "printer"
    ]
  },
  {
    "question": "die Erde, -n",
    "correct": "earth",
    "choices": [
      "housing money, housing allowance",
      "programme",
      "city (overground) train",
      "earth"
    ]
  },
  {
    "question": "das Erdgeschoss, -e",
    "correct": "ground floor",
    "choices": [
      "economics",
      "star",
      "money",
      "ground floor"
    ]
  },
  {
    "question": "das Ereignis, -se",
    "correct": "event",
    "choices": [
      "part-time",
      "phantasy",
      "cinema",
      "event"
    ]
  },
  {
    "question": "die Erfahrung, -en",
    "correct": "experience",
    "choices": [
      "experience",
      "shop (show) window",
      "costume, suit",
      "stress"
    ]
  },
  {
    "question": "die Erfindung, -en",
    "correct": "invention",
    "choices": [
      "industry",
      "quark, curd cheese",
      "invention",
      "excursion, trip"
    ]
  },
  {
    "question": "der Erfolg, -e",
    "correct": "success",
    "choices": [
      "capital city",
      "alcohol",
      "citizen",
      "success"
    ]
  },
  {
    "question": "das Ergebnis, -se",
    "correct": "result",
    "choices": [
      "world",
      "greeting",
      "quarter",
      "result"
    ]
  },
  {
    "question": "die Erhöhung, -en",
    "correct": "increase",
    "choices": [
      "increase",
      "law",
      "entrance",
      "keyboard"
    ]
  },
  {
    "question": "die Erholung, -en",
    "correct": "rest, relaxation, recovery",
    "choices": [
      "rest, relaxation, recovery",
      "goal, aim",
      "exception",
      "roof"
    ]
  },
  {
    "question": "die Erinnerung, -en",
    "correct": "memory",
    "choices": [
      "emergency",
      "event",
      "memory",
      "public holiday"
    ]
  },
  {
    "question": "die Erklärung, -en",
    "correct": "explanation, declaration",
    "choices": [
      "stain, patch",
      "explanation, declaration",
      "answering machine",
      "baby sitter"
    ]
  },
  {
    "question": "die Erlaubnis, -se",
    "correct": "permission",
    "choices": [
      "fire",
      "pillow",
      "permission",
      "promotion"
    ]
  },
  {
    "question": "das Erlebnis, -se",
    "correct": "experience",
    "choices": [
      "experience",
      "advice",
      "skirt",
      "souvenir"
    ]
  },
  {
    "question": "die Ermäßigung, -en",
    "correct": "reduction",
    "choices": [
      "criticism",
      "city",
      "tennis",
      "reduction"
    ]
  },
  {
    "question": "die Ernährung, -en",
    "correct": "nourishment",
    "choices": [
      "nourishment",
      "connection",
      "report",
      "personnel"
    ]
  },
  {
    "question": "die Eröffnung, -en",
    "correct": "opening",
    "choices": [
      "opening",
      "honor",
      "mother",
      "education, training, instruction"
    ]
  },
  {
    "question": "der Ersatz (Sg.)",
    "correct": "replacement",
    "choices": [
      "pregnancy",
      "replacement",
      "fish",
      "cupboard"
    ]
  },
  {
    "question": "das Ersatzteil, -e",
    "correct": "spare part",
    "choices": [
      "model",
      "mathematics",
      "spare part",
      "migrant"
    ]
  },
  {
    "question": "der Erwachsene, -n",
    "correct": "adult",
    "choices": [
      "democracy",
      "baby sitter",
      "sentence",
      "adult"
    ]
  },
  {
    "question": "die Erziehung, -en",
    "correct": "up bringing, education",
    "choices": [
      "protest",
      "stay, delay, stop",
      "up bringing, education",
      "quantity, lot (of)"
    ]
  },
  {
    "question": "das Essen, -",
    "correct": "food",
    "choices": [
      "youth",
      "food",
      "physics",
      "song"
    ]
  },
  {
    "question": "der Essig, -e",
    "correct": "vinegar",
    "choices": [
      "film",
      "vinegar",
      "circle",
      "pear"
    ]
  },
  {
    "question": "der Experte, -n",
    "correct": "expert",
    "choices": [
      "piece of advice",
      "expert",
      "conscience",
      "suburbs"
    ]
  },
  {
    "question": "der Export, -e",
    "correct": "export",
    "choices": [
      "export",
      "bank code number",
      "player",
      "stove"
    ]
  },
  {
    "question": "die Fabrik, -en",
    "correct": "factory",
    "choices": [
      "hall, room",
      "girl",
      "birth",
      "factory"
    ]
  },
  {
    "question": "das Fach, -\"er",
    "correct": "compartment, field of expertise, subject",
    "choices": [
      "brother",
      "compartment, field of expertise, subject",
      "nail",
      "phantasy"
    ]
  },
  {
    "question": "der Fachmann, -\"er",
    "correct": "expert",
    "choices": [
      "mark, brand, stamp",
      "yard",
      "admission, approval",
      "expert"
    ]
  },
  {
    "question": "die Fachleute (Pl.)",
    "correct": "experts",
    "choices": [
      "experts",
      "state",
      "man",
      "fashion"
    ]
  },
  {
    "question": "die Fähre, -n",
    "correct": "ferry",
    "choices": [
      "production",
      "ferry",
      "cell phone",
      "cousin"
    ]
  },
  {
    "question": "die Fahrbahn, -en",
    "correct": "carriageway, roadway",
    "choices": [
      "agreement",
      "carriageway, roadway",
      "big city",
      "onion"
    ]
  },
  {
    "question": "der Fahrer,",
    "correct": "driver",
    "choices": [
      "ladder",
      "schoe",
      "driver",
      "dessert"
    ]
  },
  {
    "question": "die Fahrkarte, -n",
    "correct": "ticket",
    "choices": [
      "teacher",
      "camera",
      "ticket",
      "bad luck"
    ]
  },
  {
    "question": "der Fahrplan, -\"e",
    "correct": "timetable",
    "choices": [
      "mountain",
      "infection",
      "professor",
      "timetable"
    ]
  },
  {
    "question": "das Fahrrad, -\"er",
    "correct": "bicycle",
    "choices": [
      "annual pass",
      "bicycle",
      "writing desk",
      "male nurse"
    ]
  },
  {
    "question": "die Fahrschule, -n",
    "correct": "driving school",
    "choices": [
      "stay, delay, stop",
      "driving school",
      "radio",
      "injury"
    ]
  },
  {
    "question": "das Fahrzeug, -e",
    "correct": "vehicle",
    "choices": [
      "glasses",
      "housewife",
      "conversation, discussion",
      "vehicle"
    ]
  },
  {
    "question": "der Fall, -\"e",
    "correct": "case",
    "choices": [
      "perfume",
      "request",
      "contents",
      "case"
    ]
  },
  {
    "question": "die Familie, -n",
    "correct": "family",
    "choices": [
      "chair",
      "number plate",
      "stamp, postmark",
      "family"
    ]
  },
  {
    "question": "der Familienstand, -\"e",
    "correct": "marital status",
    "choices": [
      "cabin, cubicle",
      "marital status",
      "taxi",
      "soap"
    ]
  },
  {
    "question": "der Fan, -s",
    "correct": "fan (sport, etc.)",
    "choices": [
      "(radio) Station",
      "vegetables",
      "gate, goal",
      "fan (sport, etc.)"
    ]
  },
  {
    "question": "die Fantasie, -n",
    "correct": "fantasy",
    "choices": [
      "waiter",
      "current account",
      "fantasy",
      "dog"
    ]
  },
  {
    "question": "die Farbe, -n",
    "correct": "colour",
    "choices": [
      "colour",
      "wife",
      "connection",
      "track, trace"
    ]
  },
  {
    "question": "das Fax, -e",
    "correct": "fax",
    "choices": [
      "housing office",
      "exhibition",
      "stroller",
      "fax"
    ]
  },
  {
    "question": "der Fehler,",
    "correct": "mistake",
    "choices": [
      "mistake",
      "article",
      "city (overground) train",
      "court"
    ]
  },
  {
    "question": "die Feier, -n",
    "correct": "celebration",
    "choices": [
      "hairdresser",
      "intensive course",
      "plum",
      "celebration"
    ]
  },
  {
    "question": "der Feierabend, -e",
    "correct": "end of the working day",
    "choices": [
      "approval",
      "apartment",
      "end of the working day",
      "start"
    ]
  },
  {
    "question": "der Feiertag, -e",
    "correct": "public holiday",
    "choices": [
      "body",
      "part",
      "tax",
      "public holiday"
    ]
  },
  {
    "question": "das Fenster,",
    "correct": "window",
    "choices": [
      "migrant",
      "car park",
      "window",
      "curve, arch, bow"
    ]
  },
  {
    "question": "die Ferien (Pl.)",
    "correct": "holidays",
    "choices": [
      "diet",
      "holidays",
      "actor",
      "cake"
    ]
  },
  {
    "question": "die Fernbedienung, -en",
    "correct": "remote control",
    "choices": [
      "remote control",
      "layer",
      "love",
      "cafe"
    ]
  },
  {
    "question": "das Fernsehen (Sg.)",
    "correct": "television",
    "choices": [
      "voice",
      "television",
      "granddad",
      "loss, casualty"
    ]
  },
  {
    "question": "der Fernseher, -",
    "correct": "television",
    "choices": [
      "fork",
      "weight",
      "stamp, postmark",
      "television"
    ]
  },
  {
    "question": "das Fest, -e",
    "correct": "celebration, festival, party",
    "choices": [
      "celebration, festival, party",
      "performance, achievement",
      "childhood",
      "coast"
    ]
  },
  {
    "question": "die Festplatte, -n",
    "correct": "hard disk",
    "choices": [
      "firm",
      "surprise",
      "immigrant background",
      "hard disk"
    ]
  },
  {
    "question": "das Festnetz, -e",
    "correct": "landline",
    "choices": [
      "device",
      "telephone",
      "landline",
      "fairytale"
    ]
  },
  {
    "question": "das Fett, -e",
    "correct": "fat",
    "choices": [
      "view, perspective",
      "break in",
      "identification",
      "fat"
    ]
  },
  {
    "question": "das Feuer, -",
    "correct": "fire",
    "choices": [
      "report",
      "continuation, follow up",
      "recommendation",
      "fire"
    ]
  },
  {
    "question": "das Feuerzeug, -e Ist das Feuerzeug neu?",
    "correct": "lighter",
    "choices": [
      "lighter",
      "driving school",
      "near, proximity, vicinity",
      "choice"
    ]
  },
  {
    "question": "die Feuerwehr, -en",
    "correct": "fire brigade",
    "choices": [
      "fire brigade",
      "material",
      "patient",
      "original"
    ]
  },
  {
    "question": "das Fieber (Sg.)",
    "correct": "fever, temperature",
    "choices": [
      "fever, temperature",
      "beer",
      "connection (TV, internet)",
      "soap"
    ]
  },
  {
    "question": "die Figur, -en",
    "correct": "figure",
    "choices": [
      "couple",
      "parking meter",
      "figure",
      "calculator"
    ]
  },
  {
    "question": "der Film, -e",
    "correct": "film",
    "choices": [
      "film",
      "question",
      "tariff",
      "mobile telephone"
    ]
  },
  {
    "question": "der Finger, -",
    "correct": "finger",
    "choices": [
      "finger",
      "ski",
      "example",
      "impression"
    ]
  },
  {
    "question": "die Firma, die Firmen",
    "correct": "firm",
    "choices": [
      "clothers",
      "modification, change",
      "firm",
      "coincidence"
    ]
  },
  {
    "question": "der Fisch, -e",
    "correct": "fish",
    "choices": [
      "garbage/ rubbish collection, collectors",
      "spice",
      "fish",
      "transport"
    ]
  },
  {
    "question": "die Fitness (Sg.)",
    "correct": "fitness",
    "choices": [
      "spoon",
      "fitness",
      "smoker",
      "ox, cow, beef"
    ]
  },
  {
    "question": "die Fläche, -n",
    "correct": "area",
    "choices": [
      "supermarket",
      "area",
      "SMS",
      "glass"
    ]
  },
  {
    "question": "die Flasche, -n",
    "correct": "bottle",
    "choices": [
      "bottle",
      "soap",
      "stain, patch",
      "cake"
    ]
  },
  {
    "question": "der Fleck, -en",
    "correct": "stain, patch",
    "choices": [
      "part",
      "birth",
      "wind",
      "stain, patch"
    ]
  },
  {
    "question": "das Fleisch (Sg.)",
    "correct": "meat",
    "choices": [
      "truth",
      "pedestrian area",
      "home place",
      "meat"
    ]
  },
  {
    "question": "die Flucht, -en",
    "correct": "flight",
    "choices": [
      "accident",
      "mother",
      "flight",
      "answering machine"
    ]
  },
  {
    "question": "der Flug, -\"e",
    "correct": "flight",
    "choices": [
      "flight",
      "keyboard",
      "zoo, animal park",
      "incidence, idea"
    ]
  },
  {
    "question": "der Flughafen, -\"",
    "correct": "airport",
    "choices": [
      "gas",
      "therapy",
      "e mail",
      "airport"
    ]
  },
  {
    "question": "das Flugzeug, -e",
    "correct": "airplane",
    "choices": [
      "table, blackboard",
      "airplane",
      "beer",
      "workplace, job, place of work"
    ]
  },
  {
    "question": "der Flur, -e",
    "correct": "hallway",
    "choices": [
      "lie",
      "hallway",
      "director",
      "number"
    ]
  },
  {
    "question": "der Fluss, -\"e",
    "correct": "river",
    "choices": [
      "thunderstorm",
      "potato",
      "length",
      "river"
    ]
  },
  {
    "question": "die Flüssigkeit, -en",
    "correct": "fluid",
    "choices": [
      "fluid",
      "nephew",
      "trainer, coach",
      "passport"
    ]
  },
  {
    "question": "die Folge, -n",
    "correct": "episode",
    "choices": [
      "water",
      "witness",
      "episode",
      "dead"
    ]
  },
  {
    "question": "die Forderung, -en",
    "correct": "demand",
    "choices": [
      "demand",
      "bread",
      "influence",
      "emergency exit"
    ]
  },
  {
    "question": "die Förderung, -en",
    "correct": "promotion",
    "choices": [
      "recipe",
      "marrige",
      "model",
      "promotion"
    ]
  },
  {
    "question": "die Form, -en",
    "correct": "shape",
    "choices": [
      "fax",
      "candle",
      "shape",
      "city (overground) train"
    ]
  },
  {
    "question": "das Formular, -e",
    "correct": "formular",
    "choices": [
      "river",
      "formular",
      "opportunity",
      "origin"
    ]
  },
  {
    "question": "die Fortbildung, -en",
    "correct": "further education",
    "choices": [
      "museum",
      "further education",
      "buyer",
      "trust"
    ]
  },
  {
    "question": "der Fortschritt, -e",
    "correct": "progress",
    "choices": [
      "quality",
      "progress",
      "preliminary election",
      "announcement (radio)"
    ]
  },
  {
    "question": "die Fortsetzung, -en",
    "correct": "continuation, follow up",
    "choices": [
      "life",
      "jam",
      "continuation, follow up",
      "meat"
    ]
  },
  {
    "question": "das Foto, -s",
    "correct": "photo",
    "choices": [
      "baby sitter",
      "chemistry",
      "photo",
      "curve, arch, bow"
    ]
  },
  {
    "question": "der Fotoapparat, -e",
    "correct": "camera",
    "choices": [
      "camera",
      "event, function",
      "hat",
      "department store, shopping center"
    ]
  },
  {
    "question": "die Fotografie, -n",
    "correct": "photography",
    "choices": [
      "break in",
      "strike",
      "photography",
      "home"
    ]
  },
  {
    "question": "die Frage, -n",
    "correct": "question",
    "choices": [
      "question",
      "rubbish, trash",
      "plaster",
      "consideration"
    ]
  },
  {
    "question": "die Frau, -en",
    "correct": "woman",
    "choices": [
      "stove",
      "material",
      "woman",
      "family name"
    ]
  },
  {
    "question": "die Freiheit, -en",
    "correct": "freedom",
    "choices": [
      "freedom",
      "object",
      "bird",
      "tax"
    ]
  },
  {
    "question": "die Freizeit, -en",
    "correct": "freetime",
    "choices": [
      "Biro",
      "foreigner",
      "revenue, takings, income",
      "freetime"
    ]
  },
  {
    "question": "die Fremdsprache, -n",
    "correct": "foreign language",
    "choices": [
      "letter, communication",
      "foreign language",
      "sun",
      "wedding"
    ]
  },
  {
    "question": "die Freude, -n",
    "correct": "pleasure",
    "choices": [
      "beard",
      "pleasure",
      "formular",
      "explanation, declaration"
    ]
  },
  {
    "question": "der Freund, -e",
    "correct": "friend",
    "choices": [
      "heart",
      "discount",
      "incidence, idea",
      "friend"
    ]
  },
  {
    "question": "der Friseur, -e",
    "correct": "hairdresser",
    "choices": [
      "hairdresser",
      "philosophy",
      "guarantee",
      "housewife"
    ]
  },
  {
    "question": "die Frist, -en",
    "correct": "deadline",
    "choices": [
      "career",
      "arm",
      "decision",
      "deadline"
    ]
  },
  {
    "question": "die Frucht, -e",
    "correct": "fruit",
    "choices": [
      "folder",
      "box, bag",
      "firm",
      "fruit"
    ]
  },
  {
    "question": "das Frühstück, -e",
    "correct": "breakfast",
    "choices": [
      "chocolate",
      "breakfast",
      "son",
      "world cup"
    ]
  },
  {
    "question": "der Führerschein, -e",
    "correct": "driving license",
    "choices": [
      "weather report",
      "driving license",
      "step, walk",
      "trade"
    ]
  },
  {
    "question": "die Führung, -en",
    "correct": "guide, lead, tour",
    "choices": [
      "flower",
      "guide, lead, tour",
      "clinic",
      "sisters"
    ]
  },
  {
    "question": "das Fundbüro, -s",
    "correct": "lost property office",
    "choices": [
      "lost property office",
      "sofa",
      "view",
      "salt"
    ]
  },
  {
    "question": "der Fuß, -\"e",
    "correct": "foot",
    "choices": [
      "injection",
      "foot",
      "understanding",
      "break in"
    ]
  },
  {
    "question": "der Fußball, -\"e",
    "correct": "football",
    "choices": [
      "replacement",
      "football",
      "entertainment, amusement",
      "device"
    ]
  },
  {
    "question": "der Fußgänger, -",
    "correct": "pedestrian",
    "choices": [
      "south",
      "metal",
      "note",
      "pedestrian"
    ]
  },
  {
    "question": "die Fußgängerzone, -n",
    "correct": "pedestrian area",
    "choices": [
      "protection",
      "pedestrian area",
      "disappointment",
      "magazine"
    ]
  },
  {
    "question": "die Gabel, -n",
    "correct": "fork",
    "choices": [
      "commune, shared flat",
      "suit",
      "hole",
      "fork"
    ]
  },
  {
    "question": "der Gang, \"-e",
    "correct": "walk, passage, aisle",
    "choices": [
      "schnitzel",
      "walk, passage, aisle",
      "pocket money",
      "ear"
    ]
  },
  {
    "question": "die Garage, -n",
    "correct": "garage",
    "choices": [
      "ground",
      "telephone",
      "garage",
      "ferry"
    ]
  },
  {
    "question": "die Garantie, -n",
    "correct": "guarantee",
    "choices": [
      "wonder",
      "vitamin",
      "guarantee",
      "conscience"
    ]
  },
  {
    "question": "die Garderobe, -n",
    "correct": "cloakroom",
    "choices": [
      "cousin",
      "bottle",
      "football",
      "cloakroom"
    ]
  },
  {
    "question": "der Garten, -\"",
    "correct": "garden",
    "choices": [
      "market",
      "back",
      "garden",
      "post box"
    ]
  },
  {
    "question": "das Gas, -e",
    "correct": "gas",
    "choices": [
      "cabin, cubicle",
      "beer",
      "celebration, festival, party",
      "gas"
    ]
  },
  {
    "question": "der Gast, -\"e",
    "correct": "guest",
    "choices": [
      "guest",
      "upstairs, upper floor",
      "cosmetics",
      "parents"
    ]
  },
  {
    "question": "die Gaststätte, -n",
    "correct": "restaurant",
    "choices": [
      "football",
      "pregnancy",
      "concert",
      "restaurant"
    ]
  },
  {
    "question": "das Gebäude, -",
    "correct": "building",
    "choices": [
      "stuff, gear",
      "landing",
      "ship",
      "building"
    ]
  },
  {
    "question": "das Gebäck, -e",
    "correct": "busicuits",
    "choices": [
      "busicuits",
      "street sign",
      "curriculum vitae, CV",
      "quality"
    ]
  },
  {
    "question": "die Gebrauchsanweisung, -en",
    "correct": "instructions",
    "choices": [
      "grandma",
      "dessert",
      "vinegar",
      "instructions"
    ]
  },
  {
    "question": "die Gebühr, -en",
    "correct": "fee",
    "choices": [
      "main railway station",
      "fee",
      "lady",
      "picnic"
    ]
  },
  {
    "question": "die Geburt, -en",
    "correct": "birth",
    "choices": [
      "protest",
      "stretch, distance",
      "birth",
      "ton"
    ]
  },
  {
    "question": "der Geburtstag, -e",
    "correct": "birthday",
    "choices": [
      "birthday",
      "sense",
      "tower",
      "plum"
    ]
  },
  {
    "question": "die Geduld (Sg.)",
    "correct": "patience",
    "choices": [
      "air conditioner",
      "patience",
      "way",
      "name"
    ]
  },
  {
    "question": "die Gefahr, -en",
    "correct": "danger",
    "choices": [
      "childhood",
      "news",
      "pain",
      "danger"
    ]
  },
  {
    "question": "die Lebensgefahr, -en",
    "correct": "risk of death",
    "choices": [
      "consumer",
      "risk of death",
      "fair, show",
      "passport"
    ]
  },
  {
    "question": "das Gefängnis, -se",
    "correct": "prison",
    "choices": [
      "leader, head",
      "trade",
      "leaf, sheet",
      "prison"
    ]
  },
  {
    "question": "das Gefühl, -e",
    "correct": "feeling",
    "choices": [
      "sport",
      "firm",
      "feeling",
      "bicycle"
    ]
  },
  {
    "question": "die Gegend, -en",
    "correct": "area, district",
    "choices": [
      "arrival",
      "area, district",
      "milk",
      "thirst"
    ]
  },
  {
    "question": "der Gegenstand, -\"e",
    "correct": "object",
    "choices": [
      "apprenticeship",
      "school graduation exam",
      "object",
      "Criminal Investigation Department"
    ]
  },
  {
    "question": "das Gehalt, -\"er",
    "correct": "salary",
    "choices": [
      "human being, person",
      "opera",
      "salary",
      "alphabet"
    ]
  },
  {
    "question": "das Geheimnis, -se",
    "correct": "secret",
    "choices": [
      "mother",
      "secret",
      "subject, theme",
      "judge"
    ]
  },
  {
    "question": "das Geld, -er",
    "correct": "money",
    "choices": [
      "money",
      "public",
      "migration",
      "dumpling"
    ]
  },
  {
    "question": "das Taschengeld, -er",
    "correct": "pocket money",
    "choices": [
      "e mail",
      "revenue, takings, income",
      "compartment, field of expertise, subject",
      "pocket money"
    ]
  },
  {
    "question": "die Gelegenheit, -en",
    "correct": "opportunity",
    "choices": [
      "opportunity",
      "further education",
      "sock",
      "birthday"
    ]
  },
  {
    "question": "das Gemüse, -",
    "correct": "vegetables",
    "choices": [
      "development",
      "vegetables",
      "humor",
      "honor"
    ]
  },
  {
    "question": "die Genehmigung, -en",
    "correct": "approval",
    "choices": [
      "humor",
      "recovery",
      "approval",
      "fog"
    ]
  },
  {
    "question": "das Gepäck (Sg.)",
    "correct": "luggage, baggage",
    "choices": [
      "cinema",
      "formular",
      "commune, shared flat",
      "luggage, baggage"
    ]
  },
  {
    "question": "das Gerät, -e",
    "correct": "device",
    "choices": [
      "device",
      "insurance card",
      "association",
      "waste, rubbish, garbage"
    ]
  },
  {
    "question": "das Gericht, -e",
    "correct": "court",
    "choices": [
      "computer",
      "court",
      "breakfast",
      "thief"
    ]
  },
  {
    "question": "die Gerichtsverhandlung, -en",
    "correct": "trial",
    "choices": [
      "cantine",
      "wagon, goods van",
      "trial",
      "director"
    ]
  },
  {
    "question": "das Geschäft, -e",
    "correct": "business, shop",
    "choices": [
      "home place",
      "food",
      "business, shop",
      "wine"
    ]
  },
  {
    "question": "die Geschäftsleute (Pl.)",
    "correct": "business people",
    "choices": [
      "business people",
      "group",
      "diesel",
      "picnic"
    ]
  },
  {
    "question": "das Geschenk, -e",
    "correct": "present",
    "choices": [
      "present",
      "instrument",
      "god",
      "hobby"
    ]
  },
  {
    "question": "die Geschichte, -n",
    "correct": "history",
    "choices": [
      "ship",
      "rest, relaxation, recovery",
      "taxi",
      "history"
    ]
  },
  {
    "question": "das Geschlecht, -er",
    "correct": "sex, gender",
    "choices": [
      "milk",
      "sex, gender",
      "meadow",
      "keyboard"
    ]
  },
  {
    "question": "das Geschirr, -e",
    "correct": "crockerz, pots and pans",
    "choices": [
      "sick-person, invalid",
      "judge",
      "crockerz, pots and pans",
      "head, boss"
    ]
  },
  {
    "question": "der Geschmack, -\"e",
    "correct": "taste",
    "choices": [
      "casualty department",
      "taste",
      "object",
      "stretch, distance"
    ]
  },
  {
    "question": "die Geschwindigkeit, -en",
    "correct": "speed",
    "choices": [
      "speed",
      "fork",
      "EC card (bank card)",
      "migrant"
    ]
  },
  {
    "question": "die Geschwindigkeitsbeschränkung, -en",
    "correct": "speed limit",
    "choices": [
      "the cough",
      "exhaust, waste gas",
      "pleasure",
      "speed limit"
    ]
  },
  {
    "question": "die Geschwister (Pl.)",
    "correct": "sisters",
    "choices": [
      "sisters",
      "bread",
      "zoo, animal park",
      "actor"
    ]
  },
  {
    "question": "die Gesellschaft, -en",
    "correct": "society",
    "choices": [
      "flu",
      "bottle",
      "society",
      "downtown"
    ]
  },
  {
    "question": "das Gesetz, -e",
    "correct": "law",
    "choices": [
      "trade",
      "office",
      "tax",
      "law"
    ]
  },
  {
    "question": "das Gesicht, -er",
    "correct": "face",
    "choices": [
      "face",
      "pronunciation",
      "material",
      "apprentice, trainee"
    ]
  },
  {
    "question": "das Gespräch, -e",
    "correct": "conversation, discussion",
    "choices": [
      "conversation, discussion",
      "city",
      "club, association",
      "information"
    ]
  },
  {
    "question": "die Gesundheit, -en",
    "correct": "health",
    "choices": [
      "health",
      "colleague",
      "valley",
      "duty, compulsory"
    ]
  },
  {
    "question": "das Getränk, -e",
    "correct": "drink",
    "choices": [
      "emergency call",
      "suitcase",
      "drink",
      "end"
    ]
  },
  {
    "question": "die Gewerkschaft, -en",
    "correct": "union",
    "choices": [
      "progress",
      "man",
      "cabin, cubicle",
      "union"
    ]
  },
  {
    "question": "das Gewicht, -e",
    "correct": "weight",
    "choices": [
      "ointment",
      "battery",
      "weight",
      "representation, advocacy"
    ]
  },
  {
    "question": "der Gewinn, -e",
    "correct": "profit",
    "choices": [
      "expenses, output, distribution",
      "trainee, intern",
      "wood",
      "profit"
    ]
  },
  {
    "question": "das Gewissen, -",
    "correct": "conscience",
    "choices": [
      "conscience",
      "fair, show",
      "contents",
      "present"
    ]
  },
  {
    "question": "das Gewitter, -",
    "correct": "thunderstorm",
    "choices": [
      "upstairs, upper floor",
      "prohibition, ban",
      "thunderstorm",
      "thriller, crime film or TV programme"
    ]
  },
  {
    "question": "das Gewürz, -e",
    "correct": "spice",
    "choices": [
      "behaviour",
      "spice",
      "business, shop",
      "first name"
    ]
  },
  {
    "question": "das Gift, -e",
    "correct": "poison",
    "choices": [
      "poison",
      "ox, cow, beef",
      "credit, loan",
      "perfume"
    ]
  },
  {
    "question": "die Gitarre, -n",
    "correct": "guitar",
    "choices": [
      "guitar",
      "step",
      "phantasy",
      "representation, advocacy"
    ]
  },
  {
    "question": "das Glas, -\"er",
    "correct": "glass",
    "choices": [
      "glass",
      "business, shop",
      "layer",
      "child"
    ]
  },
  {
    "question": "das Gleis, -e",
    "correct": "platform",
    "choices": [
      "embassy",
      "relative (cousin, etc)",
      "celebration, festival, party",
      "platform"
    ]
  },
  {
    "question": "das Glück (Sg.)",
    "correct": "luck",
    "choices": [
      "box, bag",
      "cash",
      "luck",
      "coincidence"
    ]
  },
  {
    "question": "der Glückwunsch, -\"e",
    "correct": "congratulations, best wishes",
    "choices": [
      "congratulations, best wishes",
      "guide, lead, tour",
      "knowledge",
      "home"
    ]
  },
  {
    "question": "das Gold (Sg.)",
    "correct": "gold",
    "choices": [
      "money",
      "gold",
      "influence",
      "village"
    ]
  },
  {
    "question": "der Gott, -\"er",
    "correct": "god",
    "choices": [
      "till, cash register",
      "god",
      "alarm",
      "part-time"
    ]
  },
  {
    "question": "das Gras, -\"er",
    "correct": "grass",
    "choices": [
      "grass",
      "guide, lead, tour",
      "downtown",
      "concert"
    ]
  },
  {
    "question": "die Grenze, -n",
    "correct": "border",
    "choices": [
      "fine",
      "test",
      "flat, apartment",
      "border"
    ]
  },
  {
    "question": "der Grill, -s",
    "correct": "grill",
    "choices": [
      "institute",
      "envelope",
      "grill",
      "wool"
    ]
  },
  {
    "question": "die Grippe, -n",
    "correct": "flu",
    "choices": [
      "flu",
      "beard",
      "casualty department",
      "case, box, crate"
    ]
  },
  {
    "question": "die Großstadt, -\"e",
    "correct": "big city",
    "choices": [
      "invention",
      "thing",
      "friend",
      "big city"
    ]
  },
  {
    "question": "die Größe, -n",
    "correct": "size",
    "choices": [
      "king",
      "upstairs, upper floor",
      "property, land",
      "size"
    ]
  },
  {
    "question": "der Grund, -\"e",
    "correct": "ground",
    "choices": [
      "bath",
      "participant",
      "fire brigade",
      "ground"
    ]
  },
  {
    "question": "das Grundstück, -e",
    "correct": "property, land",
    "choices": [
      "representation, advocacy",
      "preliminary election",
      "couch",
      "property, land"
    ]
  },
  {
    "question": "die Gruppe, -n",
    "correct": "group",
    "choices": [
      "translator",
      "jam",
      "group",
      "opnion"
    ]
  },
  {
    "question": "der Gruß, -\"e",
    "correct": "greeting",
    "choices": [
      "room",
      "key",
      "fat",
      "greeting"
    ]
  },
  {
    "question": "das Haar, -e",
    "correct": "hair",
    "choices": [
      "credit, loan",
      "terrace",
      "hair",
      "sweet"
    ]
  },
  {
    "question": "das Hackfleisch (Sg.)",
    "correct": "minced meat",
    "choices": [
      "god",
      "plate",
      "pepper",
      "minced meat"
    ]
  },
  {
    "question": "der Hafen, -\"",
    "correct": "habour",
    "choices": [
      "steak",
      "note",
      "habour",
      "firm"
    ]
  },
  {
    "question": "das Hähnchen, -",
    "correct": "tiny male chicken",
    "choices": [
      "tiny male chicken",
      "accomodation",
      "french fries",
      "jacket"
    ]
  },
  {
    "question": "die Halbpension, -en",
    "correct": "half board",
    "choices": [
      "explanation, declaration",
      "furniture",
      "half board",
      "regulations, rules, instructions"
    ]
  },
  {
    "question": "die Hälfte, -n",
    "correct": "half",
    "choices": [
      "candle",
      "philosophy",
      "amount, sum",
      "half"
    ]
  },
  {
    "question": "die Halle, -n",
    "correct": "hall",
    "choices": [
      "letter, communication",
      "timetable",
      "method",
      "hall"
    ]
  },
  {
    "question": "der Hals, -\"e",
    "correct": "throat",
    "choices": [
      "driving in, entrance, slip road",
      "traffic",
      "throat",
      "the past"
    ]
  },
  {
    "question": "der Halt, -e",
    "correct": "stop",
    "choices": [
      "film",
      "school graduation or result",
      "stop",
      "door bell"
    ]
  },
  {
    "question": "die Haltestelle, -n",
    "correct": "stop(ping place)",
    "choices": [
      "tree",
      "soap",
      "stop(ping place)",
      "preliminary election"
    ]
  },
  {
    "question": "der Hammer, -\"",
    "correct": "hammer",
    "choices": [
      "lawyer",
      "hammer",
      "mother tongue",
      "thanks (noun)"
    ]
  },
  {
    "question": "die Hand, -\"e",
    "correct": "the hand",
    "choices": [
      "waiter",
      "fee",
      "credit card",
      "the hand"
    ]
  },
  {
    "question": "das Handtuch, -\"er",
    "correct": "towel",
    "choices": [
      "business, shop",
      "apricot",
      "towel",
      "holidays"
    ]
  },
  {
    "question": "der Handel (Sg.)",
    "correct": "trade",
    "choices": [
      "population",
      "train",
      "trade",
      "screen"
    ]
  },
  {
    "question": "der Händler, -",
    "correct": "seller, dealer",
    "choices": [
      "schnitzel",
      "farm",
      "choice",
      "seller, dealer"
    ]
  },
  {
    "question": "der Handwerker, -",
    "correct": "craftsman, workman, artisan",
    "choices": [
      "craftsman, workman, artisan",
      "driver",
      "walk, passage, aisle",
      "apprenticeship"
    ]
  },
  {
    "question": "das Handy, -s",
    "correct": "cell phone",
    "choices": [
      "asylum",
      "cell phone",
      "beer",
      "behaviour"
    ]
  },
  {
    "question": "die Hauptstadt, -\"e",
    "correct": "capital city",
    "choices": [
      "writing desk",
      "divorce",
      "association",
      "capital city"
    ]
  },
  {
    "question": "der Hauptbahnhof, -\"e",
    "correct": "main railway station",
    "choices": [
      "claim",
      "lighter",
      "main railway station",
      "physics"
    ]
  },
  {
    "question": "das Haus, -\"er",
    "correct": "haus",
    "choices": [
      "effort",
      "haus",
      "motorway",
      "unemployment"
    ]
  },
  {
    "question": "die Hausaufgabe, -n",
    "correct": "homework",
    "choices": [
      "caution, care",
      "announcement, report",
      "canal",
      "homework"
    ]
  },
  {
    "question": "die Hausfrau, -en",
    "correct": "housewife",
    "choices": [
      "quarter",
      "workplace, job, place of work",
      "housewife",
      "travel agency"
    ]
  },
  {
    "question": "der Hausmann, -\"er",
    "correct": "househusband",
    "choices": [
      "househusband",
      "salary",
      "conditions, terms",
      "estate agents"
    ]
  },
  {
    "question": "der Haushalt, -e",
    "correct": "household",
    "choices": [
      "recipe",
      "pet, domestic animal",
      "household",
      "parent council"
    ]
  },
  {
    "question": "der Hausmeister, -",
    "correct": "caretaker",
    "choices": [
      "chemistry",
      "protection",
      "caretaker",
      "thing"
    ]
  },
  {
    "question": "die Haut, -\"e",
    "correct": "skin",
    "choices": [
      "taste",
      "box, bag",
      "river",
      "skin"
    ]
  },
  {
    "question": "das Heft, -e",
    "correct": "exercise book",
    "choices": [
      "exercise book",
      "politics",
      "information",
      "bath"
    ]
  },
  {
    "question": "das Heim, -e",
    "correct": "home",
    "choices": [
      "weather",
      "home",
      "information, directions",
      "risk"
    ]
  },
  {
    "question": "die Heimat (Sg.)",
    "correct": "home place",
    "choices": [
      "answering machine",
      "home place",
      "stamp",
      "railway station"
    ]
  },
  {
    "question": "das Heimweh (Sg.)",
    "correct": "home sickness",
    "choices": [
      "apprentice, trainee",
      "greeting",
      "home sickness",
      "protection"
    ]
  },
  {
    "question": "die Heizung, -en",
    "correct": "heating",
    "choices": [
      "exhaust, waste gas",
      "special offer",
      "heating",
      "breast, chest"
    ]
  },
  {
    "question": "das Hemd, -en",
    "correct": "shirt",
    "choices": [
      "shirt",
      "stamp",
      "key (on a keyboard)",
      "insurance"
    ]
  },
  {
    "question": "der Herd, -e",
    "correct": "stove",
    "choices": [
      "alphabet",
      "stove",
      "haus",
      "world cup"
    ]
  },
  {
    "question": "die Herkunft, -\"e",
    "correct": "origin",
    "choices": [
      "piece of apparatus",
      "formular",
      "origin",
      "discount"
    ]
  },
  {
    "question": "das Herkunftsland, -\"er",
    "correct": "country of origin",
    "choices": [
      "advertisment",
      "luck",
      "surrounding",
      "country of origin"
    ]
  },
  {
    "question": "der Herr, -en",
    "correct": "man, gentleman",
    "choices": [
      "man, gentleman",
      "hair",
      "casualty department",
      "integration"
    ]
  },
  {
    "question": "der Hersteller, -",
    "correct": "manufacturer",
    "choices": [
      "underground train",
      "driving school",
      "manufacturer",
      "air conditioner"
    ]
  },
  {
    "question": "das Herz, -en",
    "correct": "heart",
    "choices": [
      "studio",
      "heart",
      "garden",
      "carer, nurse, orderly"
    ]
  },
  {
    "question": "die Hilfe, -n",
    "correct": "help",
    "choices": [
      "domicile",
      "freetime",
      "help",
      "breakfast"
    ]
  },
  {
    "question": "der Himmel, -",
    "correct": "sky",
    "choices": [
      "sky",
      "bookshop",
      "congratulations, best wishes",
      "overtime"
    ]
  },
  {
    "question": "der Hit, -s",
    "correct": "hit (song, etc.)",
    "choices": [
      "hit (song, etc.)",
      "cloakroom",
      "vinegar",
      "museum"
    ]
  },
  {
    "question": "die Hitze (Sg.)",
    "correct": "heat",
    "choices": [
      "forgiveness",
      "singer",
      "heat",
      "solution"
    ]
  },
  {
    "question": "das Hobby, -s",
    "correct": "hobby",
    "choices": [
      "upstairs, upper floor",
      "motor vehicle",
      "management",
      "hobby"
    ]
  },
  {
    "question": "die Höhe, -n",
    "correct": "hight",
    "choices": [
      "lightning",
      "cupboard",
      "order, commission, mission",
      "hight"
    ]
  },
  {
    "question": "die Hochzeit, -en",
    "correct": "wedding",
    "choices": [
      "fish",
      "wedding",
      "heart",
      "niece"
    ]
  },
  {
    "question": "der Hof, -\"e",
    "correct": "yard",
    "choices": [
      "environment",
      "yard",
      "disturbance, interference",
      "flight"
    ]
  },
  {
    "question": "der Bauernhof, -\"e",
    "correct": "farm",
    "choices": [
      "storey",
      "birth",
      "diesel",
      "farm"
    ]
  },
  {
    "question": "die Hoffnung, -en",
    "correct": "hope",
    "choices": [
      "waiter",
      "button",
      "hope",
      "bank"
    ]
  },
  {
    "question": "das Holz, -\"er",
    "correct": "wood",
    "choices": [
      "guitar",
      "representation, advocacy",
      "wood",
      "performance, introduction"
    ]
  },
  {
    "question": "der Honig, -e",
    "correct": "honey",
    "choices": [
      "camera",
      "couch",
      "seller, salesman",
      "honey"
    ]
  },
  {
    "question": "die Hose, -n",
    "correct": "trousers",
    "choices": [
      "property, land",
      "congratulations, best wishes",
      "note",
      "trousers"
    ]
  },
  {
    "question": "das Hotel, -s",
    "correct": "hotel",
    "choices": [
      "railway",
      "hm",
      "attempt, experiment",
      "hotel"
    ]
  },
  {
    "question": "das Hühnchen, -",
    "correct": "tiny female chicken",
    "choices": [
      "tiny female chicken",
      "doll",
      "politician",
      "holidays"
    ]
  },
  {
    "question": "der Humor (Sg.)",
    "correct": "humor",
    "choices": [
      "institute",
      "farmer",
      "rubbish, trash",
      "humor"
    ]
  },
  {
    "question": "der Hund, -e",
    "correct": "dog",
    "choices": [
      "curve",
      "dog",
      "town map",
      "stop(ping place)"
    ]
  },
  {
    "question": "der Hunger (Sg.)",
    "correct": "hunger",
    "choices": [
      "picture",
      "bakery",
      "hunger",
      "break in"
    ]
  },
  {
    "question": "der Husten, -",
    "correct": "the cough",
    "choices": [
      "town map",
      "chemistry",
      "hat",
      "the cough"
    ]
  },
  {
    "question": "der Hut, -\"e",
    "correct": "hat",
    "choices": [
      "profession",
      "guarantee",
      "dustbin",
      "hat"
    ]
  },
  {
    "question": "der ICE, -s (Inter City Express)",
    "correct": "intercity express train",
    "choices": [
      "concert",
      "criminal",
      "intercity express train",
      "cow"
    ]
  },
  {
    "question": "die Idee, -n",
    "correct": "idea",
    "choices": [
      "mood",
      "desire",
      "idea",
      "public"
    ]
  },
  {
    "question": "der Import, -e",
    "correct": "import",
    "choices": [
      "CD",
      "import",
      "medium, remedy",
      "sack"
    ]
  },
  {
    "question": "die Industrie, -n",
    "correct": "industry",
    "choices": [
      "work permit",
      "stroller",
      "copy",
      "industry"
    ]
  },
  {
    "question": "das Industriegebiet, -e",
    "correct": "industrial area",
    "choices": [
      "nationality",
      "system",
      "pepper",
      "industrial area"
    ]
  },
  {
    "question": "die Infektion, -en",
    "correct": "infection",
    "choices": [
      "engineer",
      "infection",
      "marrige",
      "reception"
    ]
  },
  {
    "question": "die Information, -en",
    "correct": "information",
    "choices": [
      "full time",
      "progress",
      "information",
      "blood"
    ]
  },
  {
    "question": "der Ingenieur, -e",
    "correct": "engineer",
    "choices": [
      "suit",
      "the hand",
      "furnishings, organisation, equipment",
      "engineer"
    ]
  },
  {
    "question": "der Inhalt, -e",
    "correct": "contents",
    "choices": [
      "start",
      "contents",
      "method",
      "love"
    ]
  },
  {
    "question": "die Innenstadt, -\"e",
    "correct": "downtown",
    "choices": [
      "stretch, distance",
      "pocket, handbag",
      "downtown",
      "appetite"
    ]
  },
  {
    "question": "die Insel, -n",
    "correct": "island",
    "choices": [
      "island",
      "answering machine",
      "stretch, distance",
      "interest"
    ]
  },
  {
    "question": "das Institut, -e",
    "correct": "institute",
    "choices": [
      "caution, care",
      "shopping",
      "institute",
      "cellar"
    ]
  },
  {
    "question": "das Instrument, -e",
    "correct": "instrument",
    "choices": [
      "instrument",
      "grandchild",
      "cat",
      "area"
    ]
  },
  {
    "question": "die Integration, -en",
    "correct": "integration",
    "choices": [
      "lemon",
      "example",
      "integration",
      "reality"
    ]
  },
  {
    "question": "der Integrationskurs, -e",
    "correct": "integration course",
    "choices": [
      "corner",
      "integration course",
      "mum",
      "attempt, experiment"
    ]
  },
  {
    "question": "die Intelligenz, -en",
    "correct": "intelligence",
    "choices": [
      "dispensing machine",
      "goal, aim",
      "tooth",
      "intelligence"
    ]
  },
  {
    "question": "der Intensivkurs, -e",
    "correct": "intensive course",
    "choices": [
      "joe",
      "photo",
      "catastrophe",
      "intensive course"
    ]
  },
  {
    "question": "das Interesse, -n",
    "correct": "interest",
    "choices": [
      "community office",
      "north",
      "postcode",
      "interest"
    ]
  },
  {
    "question": "das Internet (Sg.)",
    "correct": "internet",
    "choices": [
      "cleaning",
      "employment, occupation",
      "candle",
      "internet"
    ]
  },
  {
    "question": "der Internetanschluss, -\"e",
    "correct": "internet connection",
    "choices": [
      "security",
      "bean",
      "part",
      "internet connection"
    ]
  },
  {
    "question": "das Internetcafé, -s",
    "correct": "internet cafe",
    "choices": [
      "parent council",
      "music system, attachment, investment",
      "internet cafe",
      "teacher"
    ]
  },
  {
    "question": "das Interview, -s",
    "correct": "interview",
    "choices": [
      "butcher's shop",
      "interview",
      "rhythm",
      "tennis"
    ]
  },
  {
    "question": "die Jacke, -n",
    "correct": "jacket",
    "choices": [
      "current account",
      "jacket",
      "proof",
      "news"
    ]
  },
  {
    "question": "die Jahreskarte, -n",
    "correct": "annual pass",
    "choices": [
      "subscription",
      "annual pass",
      "strength",
      "town hall"
    ]
  },
  {
    "question": "der Jazz (Sg.)",
    "correct": "jazz",
    "choices": [
      "step, walk",
      "case, box, crate",
      "jazz",
      "help"
    ]
  },
  {
    "question": "die Jeans (Pl.)",
    "correct": "jeans",
    "choices": [
      "jeans",
      "rest, relaxation, recovery",
      "translation",
      "east"
    ]
  },
  {
    "question": "der Job, -s",
    "correct": "job",
    "choices": [
      "engineer",
      "sausage",
      "job",
      "rain"
    ]
  },
  {
    "question": "der Journalist, -en",
    "correct": "journalist",
    "choices": [
      "journalist",
      "building",
      "hunger",
      "cinema"
    ]
  },
  {
    "question": "die Jugend (Sg.)",
    "correct": "youth",
    "choices": [
      "post",
      "boat",
      "motorbike",
      "youth"
    ]
  },
  {
    "question": "das Jugendamt, -\"er",
    "correct": "youth welfare office",
    "choices": [
      "stop",
      "ground",
      "decision",
      "youth welfare office"
    ]
  },
  {
    "question": "der Jugendliche, -n",
    "correct": "young person, teenager",
    "choices": [
      "young person, teenager",
      "mum",
      "can",
      "colour"
    ]
  },
  {
    "question": "der Junge, -n",
    "correct": "boy",
    "choices": [
      "mum",
      "CD",
      "boy",
      "song"
    ]
  },
  {
    "question": "die Kabine, -n",
    "correct": "cabin, cubicle",
    "choices": [
      "wind",
      "culture",
      "end of the working day",
      "cabin, cubicle"
    ]
  },
  {
    "question": "der Kaffee, -s",
    "correct": "coffee",
    "choices": [
      "knee",
      "sportsman",
      "nail",
      "coffee"
    ]
  },
  {
    "question": "der Kalender, -",
    "correct": "calendar",
    "choices": [
      "calendar",
      "socket",
      "desire",
      "master, champion"
    ]
  },
  {
    "question": "die Kälte (Sg.)",
    "correct": "coldness, cold (weather)",
    "choices": [
      "parking meter",
      "speed limit",
      "citizen",
      "coldness, cold (weather)"
    ]
  },
  {
    "question": "die Kamera, -s",
    "correct": "camera",
    "choices": [
      "camera",
      "nationality",
      "pet, domestic animal",
      "stairs, steps"
    ]
  },
  {
    "question": "der Kampf, -\"e",
    "correct": "struggle, fight",
    "choices": [
      "postcard",
      "sauce",
      "cash",
      "struggle, fight"
    ]
  },
  {
    "question": "der Kanal, -\"e",
    "correct": "canal",
    "choices": [
      "canal",
      "injury",
      "animal",
      "rest"
    ]
  },
  {
    "question": "die Kanne, -n",
    "correct": "pot",
    "choices": [
      "book",
      "bottle",
      "pot",
      "mountain"
    ]
  },
  {
    "question": "die Kantine, -n",
    "correct": "cantine",
    "choices": [
      "ointment",
      "quarter",
      "break in",
      "cantine"
    ]
  },
  {
    "question": "das Kapitel, -",
    "correct": "chapter",
    "choices": [
      "chapter",
      "stain, patch",
      "signature",
      "hour, time, watch"
    ]
  },
  {
    "question": "die Karriere, -n",
    "correct": "career",
    "choices": [
      "recovery",
      "career",
      "jewellery",
      "luggage, baggage"
    ]
  },
  {
    "question": "die Karte, -n",
    "correct": "card, menu, ticket, map",
    "choices": [
      "card, menu, ticket, map",
      "freedom",
      "police",
      "top"
    ]
  },
  {
    "question": "die Kartoffel, -n",
    "correct": "potato",
    "choices": [
      "shirt",
      "advice, consultation",
      "potato",
      "craftsman, workman, artisan"
    ]
  },
  {
    "question": "der Käse, -",
    "correct": "cheese",
    "choices": [
      "key (on a keyboard)",
      "music",
      "cheese",
      "industrial area"
    ]
  },
  {
    "question": "die Kasse, -n",
    "correct": "till, cash register",
    "choices": [
      "visit",
      "step, walk",
      "till, cash register",
      "busicuits"
    ]
  },
  {
    "question": "der Kasten, -\"",
    "correct": "case, box, crate",
    "choices": [
      "case, box, crate",
      "trust",
      "haus",
      "return"
    ]
  },
  {
    "question": "der Katalog, -e",
    "correct": "catalogue",
    "choices": [
      "catalogue",
      "ski",
      "original",
      "communication"
    ]
  },
  {
    "question": "die Katastrophe, -n",
    "correct": "catastrophe",
    "choices": [
      "integration course",
      "catastrophe",
      "cousin",
      "lighter"
    ]
  },
  {
    "question": "die Katze, -n",
    "correct": "cat",
    "choices": [
      "near, proximity, vicinity",
      "explanation, declaration",
      "country of origin",
      "cat"
    ]
  },
  {
    "question": "der Kauf, -\"e",
    "correct": "buy",
    "choices": [
      "home sickness",
      "granddad",
      "buy",
      "wagon, goods van"
    ]
  },
  {
    "question": "der Käufer, -",
    "correct": "buyer",
    "choices": [
      "reservation",
      "episode",
      "flight",
      "buyer"
    ]
  },
  {
    "question": "das Kaufhaus, -\"er",
    "correct": "department store, shopping center",
    "choices": [
      "department store, shopping center",
      "woman",
      "type",
      "packet, parcel"
    ]
  },
  {
    "question": "der Keller, -",
    "correct": "cellar",
    "choices": [
      "cellar",
      "adult",
      "tennis",
      "education, training, instruction"
    ]
  },
  {
    "question": "der Kellner, -",
    "correct": "waiter",
    "choices": [
      "atmosphere, mood",
      "opnion",
      "hight",
      "waiter"
    ]
  },
  {
    "question": "die Kenntnisse (Pl.)",
    "correct": "knowledge",
    "choices": [
      "furniture",
      "knowledge",
      "care",
      "course leader"
    ]
  },
  {
    "question": "das Kennzeichen, -",
    "correct": "number plate",
    "choices": [
      "certificate, report, reference",
      "current (electricity)",
      "lamp",
      "number plate"
    ]
  },
  {
    "question": "die Kerze, -n",
    "correct": "candle",
    "choices": [
      "candle",
      "time",
      "camping",
      "cow"
    ]
  },
  {
    "question": "die Kette, -n",
    "correct": "chain",
    "choices": [
      "dispensing machine",
      "chain",
      "hole",
      "dining car"
    ]
  },
  {
    "question": "das Kind, -er",
    "correct": "child",
    "choices": [
      "classwork",
      "line",
      "child",
      "fire"
    ]
  },
  {
    "question": "der Kindergarten, -\"",
    "correct": "Nursery school",
    "choices": [
      "employer",
      "Nursery school",
      "figure",
      "sky"
    ]
  },
  {
    "question": "der Kinderwagen, -",
    "correct": "stroller",
    "choices": [
      "ticket",
      "fear",
      "stroller",
      "credit card"
    ]
  },
  {
    "question": "die Kindheit, -en",
    "correct": "childhood",
    "choices": [
      "prohibition, ban",
      "victim",
      "childhood",
      "spouse"
    ]
  },
  {
    "question": "die Kindertagesstätte, -s",
    "correct": "day care center",
    "choices": [
      "fault",
      "day care center",
      "cell phone",
      "lie"
    ]
  },
  {
    "question": "das Kino, -s",
    "correct": "cinema",
    "choices": [
      "non-smoker",
      "cinema",
      "swimming pool",
      "office"
    ]
  },
  {
    "question": "der Kiosk, -e",
    "correct": "kiosk",
    "choices": [
      "couch",
      "kiosk",
      "disturbance, interference",
      "CD"
    ]
  },
  {
    "question": "die Kirche, -n",
    "correct": "church",
    "choices": [
      "department store, shopping center",
      "title",
      "immigrant background",
      "church"
    ]
  },
  {
    "question": "das Kissen, -",
    "correct": "pillow",
    "choices": [
      "sauce",
      "hm",
      "pillow",
      "advertisment"
    ]
  },
  {
    "question": "die Klasse, -n",
    "correct": "class",
    "choices": [
      "storm",
      "class",
      "sweet",
      "nature"
    ]
  },
  {
    "question": "die Klassenarbeit, -en",
    "correct": "classwork",
    "choices": [
      "pencil",
      "classwork",
      "fog",
      "ship"
    ]
  },
  {
    "question": "das Klavier, -e",
    "correct": "piano",
    "choices": [
      "visa",
      "piano",
      "alarm",
      "supermarket"
    ]
  },
  {
    "question": "das Kleid, -er",
    "correct": "dress",
    "choices": [
      "answer",
      "spectator",
      "dress",
      "idea, suspicion"
    ]
  },
  {
    "question": "die Kleidung (Pl.)",
    "correct": "clothers",
    "choices": [
      "clothers",
      "export",
      "ring",
      "annual pass"
    ]
  },
  {
    "question": "der Klick, - s",
    "correct": "click",
    "choices": [
      "click",
      "calculator",
      "telephone",
      "name"
    ]
  },
  {
    "question": "das Klima, -ta/-te/-s",
    "correct": "climate",
    "choices": [
      "climate",
      "boots",
      "tools",
      "ski"
    ]
  },
  {
    "question": "die Klimaanlage, -n",
    "correct": "air conditioner",
    "choices": [
      "cola",
      "translation",
      "air conditioner",
      "strike"
    ]
  },
  {
    "question": "die Klingel, -n",
    "correct": "door bell",
    "choices": [
      "plum",
      "Lawyer",
      "lighter",
      "door bell"
    ]
  },
  {
    "question": "die Klinik, -en",
    "correct": "clinic",
    "choices": [
      "game",
      "beginning",
      "clinic",
      "mirror"
    ]
  },
  {
    "question": "der Kloß, -\"e",
    "correct": "dumpling",
    "choices": [
      "dumpling",
      "roof",
      "truck (short for der Lastkraftwagen)",
      "interest"
    ]
  },
  {
    "question": "die Kneipe, -n",
    "correct": "pub",
    "choices": [
      "expression, printout",
      "''jui''''ce",
      "ski",
      "pub"
    ]
  },
  {
    "question": "das Knie, -",
    "correct": "knee",
    "choices": [
      "knee",
      "youth",
      "motorbike",
      "fridge"
    ]
  },
  {
    "question": "der Knochen, -",
    "correct": "bones",
    "choices": [
      "bones",
      "printer",
      "Biro",
      "tyre"
    ]
  },
  {
    "question": "der Knopf, -\"e",
    "correct": "button",
    "choices": [
      "rest",
      "consulate",
      "button",
      "party"
    ]
  },
  {
    "question": "der Koch, -\"e",
    "correct": "cook",
    "choices": [
      "bath",
      "passenger",
      "adult",
      "cook"
    ]
  },
  {
    "question": "der Koffer, -",
    "correct": "suitcase",
    "choices": [
      "earth",
      "costume, suit",
      "boots",
      "suitcase"
    ]
  },
  {
    "question": "der Kofferraum, -\"e",
    "correct": "trunk",
    "choices": [
      "trunk",
      "table, blackboard",
      "pensioner",
      "taste"
    ]
  },
  {
    "question": "der Kollege, -n",
    "correct": "colleague",
    "choices": [
      "apple",
      "help",
      "colleague",
      "ladder"
    ]
  },
  {
    "question": "die Kommunikation, -en",
    "correct": "communication",
    "choices": [
      "communication",
      "upstairs, upper floor",
      "monitor",
      "job"
    ]
  },
  {
    "question": "der Kompromiss, -e",
    "correct": "compromise",
    "choices": [
      "haste",
      "compromise",
      "supermarket",
      "shape"
    ]
  },
  {
    "question": "der König, -e",
    "correct": "king",
    "choices": [
      "point",
      "import",
      "king",
      "spouse"
    ]
  },
  {
    "question": "die Konkurrenz, -en",
    "correct": "competition",
    "choices": [
      "meadow",
      "competition",
      "traffic light",
      "thirst"
    ]
  },
  {
    "question": "das Konsulat, -e",
    "correct": "consulate",
    "choices": [
      "the past",
      "warning, reminder",
      "consulate",
      "expenses, output, distribution"
    ]
  },
  {
    "question": "der Kontakt, -e",
    "correct": "contact",
    "choices": [
      "amount, sum",
      "contact",
      "quarter",
      "envelope"
    ]
  },
  {
    "question": "das Konto, die Konten",
    "correct": "account",
    "choices": [
      "matches",
      "homework",
      "account",
      "menu"
    ]
  },
  {
    "question": "das Girokonto, -en",
    "correct": "current account",
    "choices": [
      "current account",
      "swimming pool",
      "acquaintance, known person",
      "wheel, bike"
    ]
  },
  {
    "question": "die Kontrolle, -n",
    "correct": "control",
    "choices": [
      "effort",
      "expiry date",
      "control",
      "mobile telephone"
    ]
  },
  {
    "question": "das Konzert, -e",
    "correct": "concert",
    "choices": [
      "sweet",
      "concert",
      "strength",
      "pension (small hotel)"
    ]
  },
  {
    "question": "der Kopf, -\"e",
    "correct": "head",
    "choices": [
      "head",
      "father",
      "assistant, temporary help",
      "breakdown"
    ]
  },
  {
    "question": "die Kopie, -n",
    "correct": "copy",
    "choices": [
      "monitor",
      "pencil",
      "patience",
      "copy"
    ]
  },
  {
    "question": "der Körper, -",
    "correct": "body",
    "choices": [
      "body",
      "screen",
      "seller, dealer",
      "sweet"
    ]
  },
  {
    "question": "die Kosmetik (Sg.)",
    "correct": "cosmetics",
    "choices": [
      "throat",
      "cosmetics",
      "till, cash register",
      "stress"
    ]
  },
  {
    "question": "die Kosten (Pl.)",
    "correct": "costs",
    "choices": [
      "interview",
      "discotheque",
      "remote control",
      "costs"
    ]
  },
  {
    "question": "das Kostüm, -e",
    "correct": "costume, suit",
    "choices": [
      "citizen",
      "candle",
      "costume, suit",
      "date(s)"
    ]
  },
  {
    "question": "die Kraft, -\"e",
    "correct": "strength",
    "choices": [
      "strength",
      "employment, occupation",
      "matches",
      "risk"
    ]
  },
  {
    "question": "das Kraftfahrzeug, -e",
    "correct": "motor vehicle",
    "choices": [
      "salon",
      "motor vehicle",
      "loud speaker",
      "poll"
    ]
  },
  {
    "question": "der Kranke, -n",
    "correct": "sick-person, invalid",
    "choices": [
      "sick-person, invalid",
      "luck",
      "schnitzel",
      "horse"
    ]
  },
  {
    "question": "das Krankenhaus, -\"er",
    "correct": "hospital",
    "choices": [
      "mouth",
      "city",
      "hospital",
      "storm"
    ]
  },
  {
    "question": "die Krankenkasse, -n",
    "correct": "health insurance",
    "choices": [
      "assistant, temporary help",
      "health insurance",
      "disturbance, interference",
      "estate agents"
    ]
  },
  {
    "question": "der Krankenpfleger, -",
    "correct": "male nurse",
    "choices": [
      "church",
      "cosmetics",
      "male nurse",
      "order, commission, mission"
    ]
  },
  {
    "question": "die Krankenschwester, -n",
    "correct": "female nurse",
    "choices": [
      "spice",
      "female nurse",
      "price",
      "explanation, declaration"
    ]
  },
  {
    "question": "der Krankenwagen, -",
    "correct": "ambulance",
    "choices": [
      "television",
      "ambulance",
      "member",
      "air"
    ]
  },
  {
    "question": "die Krankheit, -en",
    "correct": "illness",
    "choices": [
      "song",
      "instructions",
      "battery",
      "illness"
    ]
  },
  {
    "question": "der Kredit, -e",
    "correct": "credit, loan",
    "choices": [
      "daily routine",
      "population",
      "dishwasher",
      "credit, loan"
    ]
  },
  {
    "question": "die Kreditkarte, -n",
    "correct": "credit card",
    "choices": [
      "credit card",
      "start",
      "public",
      "bank code number"
    ]
  },
  {
    "question": "der Kreis, -e",
    "correct": "circle",
    "choices": [
      "people",
      "father",
      "circle",
      "heating"
    ]
  },
  {
    "question": "das Kreuz, -e",
    "correct": "cross",
    "choices": [
      "cross",
      "family name",
      "fuel station",
      "certificate"
    ]
  },
  {
    "question": "die Kreuzung, -en",
    "correct": "crossing, junction",
    "choices": [
      "member",
      "painter",
      "sender",
      "crossing, junction"
    ]
  },
  {
    "question": "die Kriminalpolizei, -en / Kriminal-",
    "correct": "Criminal Investigation Department",
    "choices": [
      "migrant",
      "mouse",
      "sender",
      "Criminal Investigation Department"
    ]
  },
  {
    "question": "der Krimi, -s",
    "correct": "thriller, crime film or TV programme",
    "choices": [
      "parents",
      "thriller, crime film or TV programme",
      "witness",
      "connection"
    ]
  },
  {
    "question": "die Kritik, -en",
    "correct": "criticism",
    "choices": [
      "female nurse",
      "claim",
      "weather report",
      "criticism"
    ]
  },
  {
    "question": "die Küche, -n",
    "correct": "kitchen",
    "choices": [
      "sign",
      "bill",
      "kitchen",
      "impression"
    ]
  },
  {
    "question": "der Kuchen, -",
    "correct": "cake",
    "choices": [
      "motor vehicle",
      "name",
      "connection",
      "cake"
    ]
  },
  {
    "question": "der Kugelschreiber, -",
    "correct": "ball-point pen, biro",
    "choices": [
      "factory",
      "ball-point pen, biro",
      "south",
      "capital city"
    ]
  },
  {
    "question": "der Kuli, -s",
    "correct": "Biro",
    "choices": [
      "fish",
      "specialist",
      "Biro",
      "wheel, bike"
    ]
  },
  {
    "question": "die Kuh, -\"e",
    "correct": "cow",
    "choices": [
      "account",
      "cow",
      "nerve",
      "boots"
    ]
  },
  {
    "question": "der Kühlschrank, -\"e",
    "correct": "fridge",
    "choices": [
      "trust",
      "fridge",
      "chocolate",
      "opnion"
    ]
  },
  {
    "question": "die Kultur, -en",
    "correct": "culture",
    "choices": [
      "episode",
      "culture",
      "jazz",
      "mum"
    ]
  },
  {
    "question": "der Kunde, -n",
    "correct": "customer",
    "choices": [
      "railway station",
      "customer",
      "parent council",
      "male nurse"
    ]
  },
  {
    "question": "die Kündigung, -en",
    "correct": "notice",
    "choices": [
      "notice",
      "oven",
      "apricot",
      "politician"
    ]
  },
  {
    "question": "die Kunst, -\"e",
    "correct": "art",
    "choices": [
      "thief",
      "identification",
      "art",
      "operation"
    ]
  },
  {
    "question": "der Künstler, -",
    "correct": "artist",
    "choices": [
      "hm",
      "club",
      "building site",
      "artist"
    ]
  },
  {
    "question": "der Kunststoff, -e",
    "correct": "artificial material",
    "choices": [
      "artificial material",
      "delay",
      "beach",
      "action"
    ]
  },
  {
    "question": "der Kurs, -e",
    "correct": "course",
    "choices": [
      "course",
      "democracy",
      "soup",
      "bag"
    ]
  },
  {
    "question": "der Kursleiter / -in, - / -innen",
    "correct": "course leader",
    "choices": [
      "connection, relationship",
      "project",
      "cook",
      "course leader"
    ]
  },
  {
    "question": "die Kurve, -n",
    "correct": "curve",
    "choices": [
      "child",
      "sun",
      "room",
      "curve"
    ]
  },
  {
    "question": "der Kuss, -\"e",
    "correct": "kiss",
    "choices": [
      "cat",
      "kiss",
      "platform",
      "toy"
    ]
  },
  {
    "question": "die Küste, -n",
    "correct": "coast",
    "choices": [
      "coldness, cold (weather)",
      "congratulations, best wishes",
      "coast",
      "battery"
    ]
  },
  {
    "question": "das Labor, -s",
    "correct": "laboratory",
    "choices": [
      "bag",
      "laboratory",
      "income",
      "hammer"
    ]
  },
  {
    "question": "der Laden, -\"",
    "correct": "shop",
    "choices": [
      "theatre",
      "service",
      "shop",
      "throat"
    ]
  },
  {
    "question": "die Lage, -n",
    "correct": "position, situation, place",
    "choices": [
      "feeling",
      "bicycle",
      "hammer",
      "position, situation, place"
    ]
  },
  {
    "question": "das Lager, -\"",
    "correct": "camp",
    "choices": [
      "camp",
      "protest",
      "Nursery school",
      "alcohol"
    ]
  },
  {
    "question": "die Lampe, -n",
    "correct": "lamp",
    "choices": [
      "care insurance",
      "subject, theme",
      "lamp",
      "transfer, referral"
    ]
  },
  {
    "question": "das Land, -\"er",
    "correct": "land, country, state",
    "choices": [
      "plug",
      "ticket (parking)",
      "democracy",
      "land, country, state"
    ]
  },
  {
    "question": "die Landung, -en",
    "correct": "landing",
    "choices": [
      "shower",
      "landing",
      "folder",
      "cleaning"
    ]
  },
  {
    "question": "die Landwirtschaft, -en",
    "correct": "agriculture",
    "choices": [
      "agriculture",
      "temperature",
      "bread roll",
      "philosophy"
    ]
  },
  {
    "question": "die Länge, -n",
    "correct": "length",
    "choices": [
      "length",
      "employer",
      "laboratory",
      "souvenir"
    ]
  },
  {
    "question": "der Lärm (Sg.)",
    "correct": "noise",
    "choices": [
      "coast",
      "noise",
      "sender",
      "grill"
    ]
  },
  {
    "question": "der Laster, -",
    "correct": "lorry, truck",
    "choices": [
      "lorry, truck",
      "soap",
      "price",
      "umrella"
    ]
  },
  {
    "question": "das Laufwerk, -e",
    "correct": "(computer) drive, running gear",
    "choices": [
      "(computer) drive, running gear",
      "protest",
      "Lawyer",
      "car park"
    ]
  },
  {
    "question": "die Laune, -n",
    "correct": "mood",
    "choices": [
      "garden",
      "bones",
      "mood",
      "bank code number"
    ]
  },
  {
    "question": "der Lautsprecher, -",
    "correct": "loud speaker",
    "choices": [
      "spice",
      "loud speaker",
      "pillow",
      "cash"
    ]
  },
  {
    "question": "das Leben, -",
    "correct": "life",
    "choices": [
      "life",
      "beginning",
      "increase",
      "nourishment"
    ]
  },
  {
    "question": "der Lebenslauf, -\"e",
    "correct": "curriculum vitae, CV",
    "choices": [
      "packet, parcel",
      "fever, temperature",
      "curriculum vitae, CV",
      "crossing, junction"
    ]
  },
  {
    "question": "die Lebensmittel (Pl.)",
    "correct": "food",
    "choices": [
      "ladder",
      "food",
      "opening",
      "kiss"
    ]
  },
  {
    "question": "das Leder, -",
    "correct": "leather",
    "choices": [
      "connection, relationship",
      "studies",
      "duty, compulsory",
      "leather"
    ]
  },
  {
    "question": "die Lehre, -n",
    "correct": "apprenticeship",
    "choices": [
      "apprenticeship",
      "''jui''''ce",
      "perfume",
      "shoulder"
    ]
  },
  {
    "question": "der Lehrer, -",
    "correct": "teacher",
    "choices": [
      "teacher",
      "cantine",
      "spare part",
      "acquaintance, known person"
    ]
  },
  {
    "question": "der Lehrling, -e",
    "correct": "apprentice, trainee",
    "choices": [
      "scare, fright",
      "bag",
      "building site",
      "apprentice, trainee"
    ]
  },
  {
    "question": "die Leistung, -en",
    "correct": "performance, achievement",
    "choices": [
      "fan (sport, etc.)",
      "team work, collaboration",
      "pressure",
      "performance, achievement"
    ]
  },
  {
    "question": "der Leiter, -",
    "correct": "leader, head",
    "choices": [
      "compromise",
      "leader, head",
      "injury",
      "switch"
    ]
  },
  {
    "question": "die Leitung, -en",
    "correct": "management",
    "choices": [
      "management",
      "mechanic",
      "win, victory",
      "explanation, declaration"
    ]
  },
  {
    "question": "die Leiter, -n",
    "correct": "ladder",
    "choices": [
      "tower",
      "Illustration",
      "skirt",
      "ladder"
    ]
  },
  {
    "question": "die Leute (Pl.)",
    "correct": "people",
    "choices": [
      "hospital",
      "foreign countries, abroad",
      "people",
      "profession"
    ]
  },
  {
    "question": "das Licht, -er",
    "correct": "light",
    "choices": [
      "text",
      "firm",
      "housing office",
      "light"
    ]
  },
  {
    "question": "die Liebe, -n",
    "correct": "love",
    "choices": [
      "rule",
      "music system, attachment, investment",
      "love",
      "property, land"
    ]
  },
  {
    "question": "das Lied, -er",
    "correct": "song",
    "choices": [
      "surprise",
      "registry office",
      "song",
      "steak"
    ]
  },
  {
    "question": "die Lieferung, -en",
    "correct": "delivery",
    "choices": [
      "pharmacy",
      "delivery",
      "car park",
      "employer"
    ]
  },
  {
    "question": "der Lift, -e",
    "correct": "lift",
    "choices": [
      "understanding",
      "lift",
      "sister",
      "man"
    ]
  },
  {
    "question": "die Limonade, -n",
    "correct": "lemonade",
    "choices": [
      "entrance",
      "scare, fright",
      "origin",
      "lemonade"
    ]
  },
  {
    "question": "die Linie, -n",
    "correct": "line",
    "choices": [
      "line",
      "internet connection",
      "couple",
      "guarantee"
    ]
  },
  {
    "question": "die Lippe, -n",
    "correct": "lip",
    "choices": [
      "camera",
      "increase",
      "lip",
      "paper"
    ]
  },
  {
    "question": "die Liste, -n",
    "correct": "list",
    "choices": [
      "list",
      "country of origin",
      "street sign",
      "tour"
    ]
  },
  {
    "question": "der LKW, -s (Lastkraftwagen)",
    "correct": "truck (short for der Lastkraftwagen)",
    "choices": [
      "name",
      "technology, technique",
      "truck (short for der Lastkraftwagen)",
      "passenger"
    ]
  },
  {
    "question": "das Loch, -\"er",
    "correct": "hole",
    "choices": [
      "hole",
      "Danger, Attention",
      "order, commission, mission",
      "tea"
    ]
  },
  {
    "question": "der Löffel, -",
    "correct": "spoon",
    "choices": [
      "lawyer",
      "spoon",
      "brake",
      "haste"
    ]
  },
  {
    "question": "der Lohn, -\"e",
    "correct": "salary",
    "choices": [
      "salary",
      "area",
      "ointment",
      "body"
    ]
  },
  {
    "question": "das Lokal, -e",
    "correct": "pub",
    "choices": [
      "pub",
      "piece of apparatus",
      "answering machine",
      "communication"
    ]
  },
  {
    "question": "die Lösung, -en",
    "correct": "solution",
    "choices": [
      "mobile telephone",
      "modification, change",
      "guest",
      "solution"
    ]
  },
  {
    "question": "die Luft, -\"e",
    "correct": "air",
    "choices": [
      "incidence, idea",
      "problem",
      "death",
      "air"
    ]
  },
  {
    "question": "die Lüge, -n",
    "correct": "lie",
    "choices": [
      "lie",
      "health",
      "prohibition, ban",
      "tent"
    ]
  },
  {
    "question": "die Lust, -\"e",
    "correct": "desire",
    "choices": [
      "area, district",
      "soup",
      "desire",
      "patience"
    ]
  },
  {
    "question": "das Mädchen, -",
    "correct": "girl",
    "choices": [
      "wound",
      "plastic",
      "girl",
      "way"
    ]
  },
  {
    "question": "der Magen, -\"",
    "correct": "stomach",
    "choices": [
      "king",
      "sportsman",
      "stomach",
      "bird"
    ]
  },
  {
    "question": "die Mahlzeit, -en",
    "correct": "meal",
    "choices": [
      "shirt",
      "meal",
      "walk, trek",
      "hairdresser"
    ]
  },
  {
    "question": "die Mahnung, -en",
    "correct": "warning, reminder",
    "choices": [
      "househusband",
      "economics",
      "warning, reminder",
      "costs"
    ]
  },
  {
    "question": "der Makler, -",
    "correct": "estate agents",
    "choices": [
      "sleep over, stay",
      "estate agents",
      "holidays",
      "intercity express train"
    ]
  },
  {
    "question": "das Mal, -e",
    "correct": "time",
    "choices": [
      "parking meter",
      "time",
      "position, situation, place",
      "secret"
    ]
  },
  {
    "question": "der Maler, -",
    "correct": "painter",
    "choices": [
      "carriageway, roadway",
      "painter",
      "traffic jam",
      "Biro"
    ]
  },
  {
    "question": "die Mama, -s",
    "correct": "mum",
    "choices": [
      "mum",
      "insurance",
      "butter",
      "exit"
    ]
  },
  {
    "question": "der Mann, -\"er",
    "correct": "man",
    "choices": [
      "unemployment",
      "butcher's shop",
      "man",
      "egg"
    ]
  },
  {
    "question": "die Mannschaft, -en",
    "correct": "team",
    "choices": [
      "parcel",
      "team",
      "ointment",
      "habour"
    ]
  },
  {
    "question": "der Mantel, -\"",
    "correct": "coat, jacket",
    "choices": [
      "difficulty",
      "coat, jacket",
      "onion",
      "fruit"
    ]
  },
  {
    "question": "das Märchen, -",
    "correct": "fairytale",
    "choices": [
      "risk",
      "fairytale",
      "replacement",
      "disturbance, interference"
    ]
  },
  {
    "question": "die Margarine, -n",
    "correct": "margarine",
    "choices": [
      "margarine",
      "household",
      "sport",
      "suitcase"
    ]
  },
  {
    "question": "die Marke, -n",
    "correct": "mark, brand, stamp",
    "choices": [
      "letter (of the alphabet)",
      "mark, brand, stamp",
      "cantine",
      "start"
    ]
  },
  {
    "question": "der Markt, -\"e",
    "correct": "market",
    "choices": [
      "embassy",
      "market",
      "ox, cow, beef",
      "condition"
    ]
  },
  {
    "question": "die Marmelade, -n",
    "correct": "jam",
    "choices": [
      "family name",
      "jam",
      "cleaning",
      "compartment, field of expertise, subject"
    ]
  },
  {
    "question": "die Maschine, -n",
    "correct": "machine",
    "choices": [
      "walk, trek",
      "future",
      "machine",
      "current (electricity)"
    ]
  },
  {
    "question": "die Maßnahme, -n",
    "correct": "measure",
    "choices": [
      "measure",
      "celebration",
      "traffic jam",
      "patience"
    ]
  },
  {
    "question": "das Material, -ein",
    "correct": "material",
    "choices": [
      "place, square",
      "manufacturer",
      "material",
      "Agency"
    ]
  },
  {
    "question": "die Mathematik (Sg.)",
    "correct": "mathematics",
    "choices": [
      "tiny male chicken",
      "bread roll",
      "mathematics",
      "butcher's shop"
    ]
  },
  {
    "question": "die Mauer, -n",
    "correct": "wall",
    "choices": [
      "zone",
      "noise",
      "wall",
      "wife"
    ]
  },
  {
    "question": "die Maus, -\"e",
    "correct": "mouse",
    "choices": [
      "balcony",
      "actor",
      "mouse",
      "date(s)"
    ]
  },
  {
    "question": "der Mechaniker, -",
    "correct": "mechanic",
    "choices": [
      "foreigner",
      "text",
      "mechanic",
      "childhood"
    ]
  },
  {
    "question": "das Medikament, -e",
    "correct": "medicine",
    "choices": [
      "dust",
      "medicine",
      "carpet",
      "plastic"
    ]
  },
  {
    "question": "die Medizin (Sg.)",
    "correct": "medicine",
    "choices": [
      "medicine",
      "effect",
      "injury",
      "(radio) Station"
    ]
  },
  {
    "question": "das Meer, -e",
    "correct": "sea",
    "choices": [
      "zoo",
      "end of the working day",
      "sea",
      "authorities"
    ]
  },
  {
    "question": "das Mehl, -e",
    "correct": "flour",
    "choices": [
      "organisation",
      "steak",
      "capital city",
      "flour"
    ]
  },
  {
    "question": "die Mehrheit, -en",
    "correct": "majority",
    "choices": [
      "public",
      "majority",
      "sport",
      "wagon, goods van"
    ]
  },
  {
    "question": "die Mehrwertsteuer (Sg.)",
    "correct": "value added tax, VAT",
    "choices": [
      "conversation, discussion",
      "tooth",
      "value added tax, VAT",
      "work, job"
    ]
  },
  {
    "question": "die Meinung, -en",
    "correct": "opnion",
    "choices": [
      "physics",
      "right of way",
      "fruit",
      "opnion"
    ]
  },
  {
    "question": "der Meister, -",
    "correct": "master, champion",
    "choices": [
      "cousin",
      "master, champion",
      "receipt",
      "health insurance"
    ]
  },
  {
    "question": "die Meldung, -en",
    "correct": "announcement, report",
    "choices": [
      "announcement, report",
      "margarine",
      "note",
      "culture"
    ]
  },
  {
    "question": "die Menge, -n",
    "correct": "quantity, lot (of)",
    "choices": [
      "workshop, garage",
      "employment, occupation",
      "up bringing, education",
      "quantity, lot (of)"
    ]
  },
  {
    "question": "der Mensch, -en",
    "correct": "human being, person",
    "choices": [
      "niece",
      "sport",
      "traffic jam",
      "human being, person"
    ]
  },
  {
    "question": "die Messe, -n",
    "correct": "fair, show",
    "choices": [
      "noise",
      "fair, show",
      "button",
      "warning, reminder"
    ]
  },
  {
    "question": "das Messer, -",
    "correct": "knife",
    "choices": [
      "passport",
      "knife",
      "manufacturer",
      "record"
    ]
  },
  {
    "question": "das Metall, -e",
    "correct": "metal",
    "choices": [
      "thriller, crime film or TV programme",
      "excursion, trip",
      "metal",
      "youth"
    ]
  },
  {
    "question": "die Methode, -n",
    "correct": "method",
    "choices": [
      "method",
      "shop",
      "novel",
      "snow"
    ]
  },
  {
    "question": "die Metzgerei, -en",
    "correct": "butcher's shop",
    "choices": [
      "club, association",
      "practise",
      "parking meter",
      "butcher's shop"
    ]
  },
  {
    "question": "die Miete, -n",
    "correct": "rental fee, rent",
    "choices": [
      "lawyer",
      "rental fee, rent",
      "appetite",
      "row"
    ]
  },
  {
    "question": "der Mieter, -",
    "correct": "tenant",
    "choices": [
      "strike",
      "tenant",
      "performance, introduction",
      "break, pause"
    ]
  },
  {
    "question": "der Migrant, -en",
    "correct": "migrant",
    "choices": [
      "west",
      "migrant",
      "translation",
      "toilet"
    ]
  },
  {
    "question": "die Migration, -en",
    "correct": "migration",
    "choices": [
      "text",
      "window",
      "duty, compulsory",
      "migration"
    ]
  },
  {
    "question": "der Migrationshintergrund, -\"e",
    "correct": "immigrant background",
    "choices": [
      "immigrant background",
      "button",
      "business people",
      "advice, consultation"
    ]
  },
  {
    "question": "die Milch (Sg.)",
    "correct": "milk",
    "choices": [
      "farm",
      "camera",
      "niece",
      "milk"
    ]
  },
  {
    "question": "die Minderheit, -en",
    "correct": "minority",
    "choices": [
      "minority",
      "costume, suit",
      "balcony",
      "insurance card"
    ]
  },
  {
    "question": "das Mineralwasser, \"",
    "correct": "mineral water",
    "choices": [
      "immigrant",
      "marital status",
      "reduction",
      "mineral water"
    ]
  },
  {
    "question": "das Missverständnis, -se",
    "correct": "misunderstanding",
    "choices": [
      "misunderstanding",
      "price",
      "visa",
      "snake"
    ]
  },
  {
    "question": "der Mitarbeiter, -",
    "correct": "employee",
    "choices": [
      "employee",
      "profession",
      "female nurse",
      "credit, loan"
    ]
  },
  {
    "question": "das Mitglied, -er",
    "correct": "member",
    "choices": [
      "detergent",
      "member",
      "rice",
      "public holiday"
    ]
  },
  {
    "question": "die Mitte, -n",
    "correct": "middle",
    "choices": [
      "middle",
      "receipt",
      "line",
      "communication"
    ]
  },
  {
    "question": "das Mittel, -",
    "correct": "medium, remedy",
    "choices": [
      "medium, remedy",
      "culture",
      "semester",
      "temporary work"
    ]
  },
  {
    "question": "die Möbel, -",
    "correct": "furniture",
    "choices": [
      "customs",
      "credit, loan",
      "jeans",
      "furniture"
    ]
  },
  {
    "question": "das Mobiltelefon, -e",
    "correct": "mobile telephone",
    "choices": [
      "chain",
      "understanding",
      "shirt",
      "mobile telephone"
    ]
  },
  {
    "question": "die Mode, -n",
    "correct": "fashion",
    "choices": [
      "stomach",
      "centre",
      "fashion",
      "childhood"
    ]
  },
  {
    "question": "das Modell, -e",
    "correct": "model",
    "choices": [
      "model",
      "pocket, handbag",
      "egg",
      "forehead"
    ]
  },
  {
    "question": "die Möglichkeit, -en",
    "correct": "possibility",
    "choices": [
      "possibility",
      "stretch, distance",
      "advertisement, announcement",
      "trashcan, waste basket"
    ]
  },
  {
    "question": "der Moment, -e",
    "correct": "moment",
    "choices": [
      "classwork",
      "marital status",
      "painter",
      "moment"
    ]
  },
  {
    "question": "der Mond, -e",
    "correct": "moon",
    "choices": [
      "danger",
      "moon",
      "practise",
      "copy"
    ]
  },
  {
    "question": "der Monitor, -e",
    "correct": "monitor",
    "choices": [
      "monitor",
      "animal",
      "instrument",
      "registered mail/ post"
    ]
  },
  {
    "question": "der Motor, -en",
    "correct": "motor",
    "choices": [
      "work permit",
      "picnic",
      "camping",
      "motor"
    ]
  },
  {
    "question": "das Motorrad, -\"er",
    "correct": "motorbike",
    "choices": [
      "garbage/ rubbish collection, collectors",
      "motorbike",
      "tram",
      "meeting point"
    ]
  },
  {
    "question": "die Mühe, -n",
    "correct": "effort",
    "choices": [
      "letter (of the alphabet)",
      "effort",
      "property, land",
      "buy"
    ]
  },
  {
    "question": "der Müll (Sg.)",
    "correct": "rubbish, trash",
    "choices": [
      "milk",
      "grandma",
      "fuel station",
      "rubbish, trash"
    ]
  },
  {
    "question": "die Müllabfuhr, -en",
    "correct": "garbage/ rubbish collection, collectors",
    "choices": [
      "garbage/ rubbish collection, collectors",
      "lie",
      "foreigner",
      "light"
    ]
  },
  {
    "question": "der Mülleimer, -",
    "correct": "trashcan, waste basket",
    "choices": [
      "trashcan, waste basket",
      "capital city",
      "consultation (hour), surgery",
      "approval"
    ]
  },
  {
    "question": "die Mülltonne, -n",
    "correct": "dustbin",
    "choices": [
      "thief",
      "dustbin",
      "door bell",
      "Danger, Attention"
    ]
  },
  {
    "question": "der Sperrmüll (Sg.)",
    "correct": "bulky waste",
    "choices": [
      "west",
      "point in time",
      "head",
      "bulky waste"
    ]
  },
  {
    "question": "der Mund, -\"er",
    "correct": "mouth",
    "choices": [
      "fairytale",
      "participation",
      "energy",
      "mouth"
    ]
  },
  {
    "question": "die Münze, -n",
    "correct": "coin",
    "choices": [
      "coin",
      "handkerchief",
      "niece",
      "risk"
    ]
  },
  {
    "question": "das Museum, die Museen",
    "correct": "museum",
    "choices": [
      "rhythm",
      "museum",
      "activity",
      "cloud"
    ]
  },
  {
    "question": "die Musik, -en",
    "correct": "music",
    "choices": [
      "zoo",
      "revenue, takings, income",
      "music",
      "terrace"
    ]
  },
  {
    "question": "der Musiker, -",
    "correct": "muscician",
    "choices": [
      "face",
      "muscician",
      "request",
      "conscience"
    ]
  },
  {
    "question": "der Muskel, -n",
    "correct": "muscle",
    "choices": [
      "hight",
      "temperature",
      "muscle",
      "cause"
    ]
  },
  {
    "question": "der Mut (Sg.)",
    "correct": "courage",
    "choices": [
      "conviction",
      "daughter",
      "moon",
      "courage"
    ]
  },
  {
    "question": "die Mutter, -\"",
    "correct": "mother",
    "choices": [
      "rain",
      "pensioner",
      "step, walk",
      "mother"
    ]
  },
  {
    "question": "der Nachbar, -n",
    "correct": "neighbours",
    "choices": [
      "brother",
      "neighbours",
      "circle",
      "protection"
    ]
  },
  {
    "question": "die Nachricht, -en",
    "correct": "news",
    "choices": [
      "news",
      "agriculture",
      "dance",
      "coast"
    ]
  },
  {
    "question": "die Nachspeise, -n",
    "correct": "dessert",
    "choices": [
      "detergent",
      "air",
      "contents",
      "dessert"
    ]
  },
  {
    "question": "der Nachteil, -e",
    "correct": "disadvantage",
    "choices": [
      "sauce",
      "progress",
      "disadvantage",
      "tower"
    ]
  },
  {
    "question": "der Nachtisch, -e",
    "correct": "dessert",
    "choices": [
      "brake",
      "dessert",
      "disappointment",
      "cake"
    ]
  },
  {
    "question": "die Nadel, -n",
    "correct": "needle",
    "choices": [
      "television",
      "plaster",
      "leather",
      "needle"
    ]
  },
  {
    "question": "der Nagel, -\"",
    "correct": "nail",
    "choices": [
      "nail",
      "vitamin",
      "atmosphere, mood",
      "train"
    ]
  },
  {
    "question": "die Nähe (Sg.)",
    "correct": "near, proximity, vicinity",
    "choices": [
      "near, proximity, vicinity",
      "trunk",
      "cafe",
      "end"
    ]
  },
  {
    "question": "der Name, -n",
    "correct": "name",
    "choices": [
      "name",
      "tights",
      "career",
      "furnishings, organisation, equipment"
    ]
  },
  {
    "question": "der Familienname, -n",
    "correct": "family name",
    "choices": [
      "internet connection",
      "rest",
      "family name",
      "right of way"
    ]
  },
  {
    "question": "der Mädchenname, -n",
    "correct": "maiden name",
    "choices": [
      "maiden name",
      "brake",
      "egg",
      "advertisement, announcement"
    ]
  },
  {
    "question": "der Vorname, -n",
    "correct": "first name",
    "choices": [
      "modification, change",
      "alcohol",
      "bean",
      "first name"
    ]
  },
  {
    "question": "die Nase, -n",
    "correct": "nose",
    "choices": [
      "nose",
      "honor",
      "team",
      "mushroom"
    ]
  },
  {
    "question": "die Natur, -en",
    "correct": "nature",
    "choices": [
      "nature",
      "special offer",
      "management",
      "politics"
    ]
  },
  {
    "question": "der Nebel (Sg.)",
    "correct": "fog",
    "choices": [
      "rest, peace, quiet",
      "computer",
      "fog",
      "window"
    ]
  },
  {
    "question": "der Neffe, -n",
    "correct": "nephew",
    "choices": [
      "injury",
      "nephew",
      "prison",
      "value added tax, VAT"
    ]
  },
  {
    "question": "der Nerv, -en",
    "correct": "nerve",
    "choices": [
      "nerve",
      "eye",
      "warning, reminder",
      "bicycle"
    ]
  },
  {
    "question": "die Nichte, -n",
    "correct": "niece",
    "choices": [
      "current account",
      "niece",
      "head, boss",
      "cross"
    ]
  },
  {
    "question": "der Nichtraucher, -",
    "correct": "non-smoker",
    "choices": [
      "commune, shared flat",
      "dream",
      "non-smoker",
      "return"
    ]
  },
  {
    "question": "der Norden/Nord/Nord (Sg.)",
    "correct": "north",
    "choices": [
      "camera",
      "development",
      "dining car",
      "north"
    ]
  },
  {
    "question": "die Not, -\"e",
    "correct": "distress, need",
    "choices": [
      "information, directions",
      "trashcan, waste basket",
      "distress, need",
      "fun"
    ]
  },
  {
    "question": "die Notaufnahme, -en",
    "correct": "casualty department",
    "choices": [
      "weather report",
      "casualty department",
      "key",
      "hairdresser"
    ]
  },
  {
    "question": "der Notausgang, -\"e",
    "correct": "emergency exit",
    "choices": [
      "hammer",
      "number plate",
      "village",
      "emergency exit"
    ]
  },
  {
    "question": "der Notfall, -\"e",
    "correct": "emergency",
    "choices": [
      "emergency",
      "consultation (hour), surgery",
      "winner",
      "terrace"
    ]
  },
  {
    "question": "der Notruf, -e",
    "correct": "emergency call",
    "choices": [
      "wall",
      "noise",
      "ticket (parking)",
      "emergency call"
    ]
  },
  {
    "question": "die Note, -n",
    "correct": "marks",
    "choices": [
      "marks",
      "contact",
      "postcode",
      "practical training, internship"
    ]
  },
  {
    "question": "die Notiz, -en",
    "correct": "note",
    "choices": [
      "note",
      "trousers",
      "internet cafe",
      "partner"
    ]
  },
  {
    "question": "die Nudel, -n",
    "correct": "noodle",
    "choices": [
      "exhibition",
      "recommendation",
      "cook",
      "noodle"
    ]
  },
  {
    "question": "die Nummer, -n",
    "correct": "number",
    "choices": [
      "congratulations, best wishes",
      "number",
      "increase",
      "journalist"
    ]
  },
  {
    "question": "das Obst (Sg.)",
    "correct": "fruit",
    "choices": [
      "fruit",
      "salary",
      "face",
      "ground"
    ]
  },
  {
    "question": "der Ofen, -\"",
    "correct": "oven",
    "choices": [
      "purpose, aim",
      "director",
      "oven",
      "up bringing, education"
    ]
  },
  {
    "question": "das Obergeschoss, -e",
    "correct": "upstairs, upper floor",
    "choices": [
      "Lawyer",
      "island",
      "upstairs, upper floor",
      "sun"
    ]
  },
  {
    "question": "das Ohr, -en",
    "correct": "ear",
    "choices": [
      "stairs, steps",
      "pedestrian area",
      "motor",
      "ear"
    ]
  },
  {
    "question": "das Öl, -e",
    "correct": "oil",
    "choices": [
      "thunderstorm",
      "dust",
      "oil",
      "wish"
    ]
  },
  {
    "question": "die Oma, -s",
    "correct": "grandma",
    "choices": [
      "e mail",
      "date(s)",
      "grandma",
      "confirmation"
    ]
  },
  {
    "question": "der Onkel, -",
    "correct": "uncle",
    "choices": [
      "commune, shared flat",
      "stain, patch",
      "uncle",
      "pensioner"
    ]
  },
  {
    "question": "der Opa, -s",
    "correct": "granddad",
    "choices": [
      "remote control",
      "granddad",
      "costume, suit",
      "culture"
    ]
  },
  {
    "question": "die Oper, -n",
    "correct": "opera",
    "choices": [
      "opera",
      "bottle",
      "order, commission, mission",
      "firm"
    ]
  },
  {
    "question": "die Operation, -en",
    "correct": "operation",
    "choices": [
      "gate, goal",
      "cold",
      "joe",
      "operation"
    ]
  },
  {
    "question": "das Opfer, -",
    "correct": "victim",
    "choices": [
      "temperature",
      "protection",
      "land, country, state",
      "victim"
    ]
  },
  {
    "question": "die Orange, -n",
    "correct": "orange",
    "choices": [
      "north",
      "orange",
      "cousin",
      "meadow"
    ]
  },
  {
    "question": "das Orchester, -",
    "correct": "orchestra",
    "choices": [
      "certificate",
      "orchestra",
      "eye",
      "human being, person"
    ]
  },
  {
    "question": "der Ordner, -",
    "correct": "folder",
    "choices": [
      "country of origin",
      "folder",
      "environment",
      "surprise"
    ]
  },
  {
    "question": "die Ordnung, -en",
    "correct": "order, tidiness",
    "choices": [
      "sun",
      "order, tidiness",
      "stroller",
      "wagon, goods van"
    ]
  },
  {
    "question": "die Organisation, -en",
    "correct": "organisation",
    "choices": [
      "shop",
      "organisation",
      "relative (cousin, etc)",
      "special offer"
    ]
  },
  {
    "question": "das Original, -e",
    "correct": "original",
    "choices": [
      "mechanic",
      "therapy",
      "greeting",
      "original"
    ]
  },
  {
    "question": "der Ort, -e",
    "correct": "place",
    "choices": [
      "bathtub",
      "fuel station",
      "place",
      "lady"
    ]
  },
  {
    "question": "der Vorort, -e",
    "correct": "suburbs",
    "choices": [
      "lamp",
      "doctor",
      "suburbs",
      "protection"
    ]
  },
  {
    "question": "der Wohnort, -e",
    "correct": "domicile",
    "choices": [
      "sport",
      "dream",
      "domicile",
      "pension (small hotel)"
    ]
  },
  {
    "question": "der Osten/Ost/Ost (Sg.)",
    "correct": "east",
    "choices": [
      "contact",
      "strike",
      "east",
      "fog"
    ]
  },
  {
    "question": "das Paar, -e",
    "correct": "couple",
    "choices": [
      "mouse",
      "top",
      "couple",
      "competition"
    ]
  },
  {
    "question": "das Päckchen, -",
    "correct": "parcel",
    "choices": [
      "piece",
      "parcel",
      "oven",
      "vinegar"
    ]
  },
  {
    "question": "das Paket, -e",
    "correct": "packet, parcel",
    "choices": [
      "artist",
      "victim",
      "packet, parcel",
      "rice"
    ]
  },
  {
    "question": "die Panne, -n",
    "correct": "breakdown",
    "choices": [
      "artificial material",
      "breakdown",
      "CD",
      "nail"
    ]
  },
  {
    "question": "der Papa, -s",
    "correct": "father",
    "choices": [
      "father",
      "bed",
      "lost property office",
      "fever, temperature"
    ]
  },
  {
    "question": "das Papier, -e",
    "correct": "paper",
    "choices": [
      "paper",
      "dream",
      "vegetables",
      "perpetrator, culprit"
    ]
  },
  {
    "question": "das Parfüm, -s",
    "correct": "perfume",
    "choices": [
      "fitness",
      "perfume",
      "bath",
      "witness"
    ]
  },
  {
    "question": "der Park, -s",
    "correct": "park",
    "choices": [
      "knowledge",
      "park",
      "majority",
      "examination, investigation, inquiry"
    ]
  },
  {
    "question": "das Parkhaus, -\"er",
    "correct": "car park",
    "choices": [
      "symbol",
      "translator",
      "car park",
      "craftsman, workman, artisan"
    ]
  },
  {
    "question": "der Parkplatz, -\"e",
    "correct": "parking spot",
    "choices": [
      "amount, sum",
      "parking spot",
      "leaf, sheet",
      "ring"
    ]
  },
  {
    "question": "die Parkuhr, -en",
    "correct": "parking meter",
    "choices": [
      "parking meter",
      "restaurant",
      "holiday",
      "rubbish, trash"
    ]
  },
  {
    "question": "der Partner, -",
    "correct": "partner",
    "choices": [
      "petrol (uk), gas (us)",
      "illness",
      "return journey",
      "partner"
    ]
  },
  {
    "question": "die Party, -s",
    "correct": "party",
    "choices": [
      "development",
      "party",
      "coldness, cold (weather)",
      "scissors"
    ]
  },
  {
    "question": "der Pass, -\"e",
    "correct": "passport",
    "choices": [
      "ambulance",
      "passport",
      "public",
      "schoe"
    ]
  },
  {
    "question": "der Passagier, -e",
    "correct": "passenger",
    "choices": [
      "traffic light",
      "parents evening",
      "driver",
      "passenger"
    ]
  },
  {
    "question": "der Patient, -en",
    "correct": "patient",
    "choices": [
      "stone",
      "patient",
      "emergency exit",
      "cross"
    ]
  },
  {
    "question": "die Pause, -n",
    "correct": "break, pause",
    "choices": [
      "skirt",
      "tower",
      "loud speaker",
      "break, pause"
    ]
  },
  {
    "question": "das Pech (Sg.)",
    "correct": "bad luck",
    "choices": [
      "lightning",
      "bad luck",
      "sisters",
      "rule"
    ]
  },
  {
    "question": "die Pension, -en",
    "correct": "pension (small hotel)",
    "choices": [
      "beard",
      "parents",
      "timetable",
      "pension (small hotel)"
    ]
  },
  {
    "question": "die Person, -en",
    "correct": "person",
    "choices": [
      "curriculum vitae, CV",
      "connection (TV, internet)",
      "coincidence",
      "person"
    ]
  },
  {
    "question": "das Personal (Sg.)",
    "correct": "personnel",
    "choices": [
      "half",
      "personnel",
      "upstairs, upper floor",
      "lighter"
    ]
  },
  {
    "question": "der Pfeffer, -",
    "correct": "pepper",
    "choices": [
      "entertainment, amusement",
      "pepper",
      "instructions",
      "patient"
    ]
  },
  {
    "question": "das Pferd, -e",
    "correct": "horse",
    "choices": [
      "horse",
      "prohibition, ban",
      "estate agents",
      "team work, collaboration"
    ]
  },
  {
    "question": "die Pflanze, -n",
    "correct": "plant",
    "choices": [
      "pepper",
      "terrace",
      "circle",
      "plant"
    ]
  },
  {
    "question": "das Pflaster, -",
    "correct": "plaster",
    "choices": [
      "thriller, crime film or TV programme",
      "plaster",
      "stroll",
      "layer"
    ]
  },
  {
    "question": "die Pflaume, -n",
    "correct": "plum",
    "choices": [
      "tooth",
      "buyer",
      "plum",
      "technology, technique"
    ]
  },
  {
    "question": "der Pfleger, -",
    "correct": "carer, nurse, orderly",
    "choices": [
      "point in time",
      "timetable",
      "plum",
      "carer, nurse, orderly"
    ]
  },
  {
    "question": "die Pflegeversicherung, -en",
    "correct": "care insurance",
    "choices": [
      "care insurance",
      "job",
      "cream",
      "influence"
    ]
  },
  {
    "question": "die Pflicht, -en",
    "correct": "duty, compulsory",
    "choices": [
      "place",
      "school",
      "museum",
      "duty, compulsory"
    ]
  },
  {
    "question": "die Phantasie, -n (Fantasie)",
    "correct": "phantasy",
    "choices": [
      "phantasy",
      "club",
      "leaflet, brochure",
      "gate, goal"
    ]
  },
  {
    "question": "die Philosophie, -n",
    "correct": "philosophy",
    "choices": [
      "prison",
      "certificate, report, reference",
      "philosophy",
      "key (on a keyboard)"
    ]
  },
  {
    "question": "die Physik (Sg.)",
    "correct": "physics",
    "choices": [
      "injection",
      "assistant, temporary help",
      "physics",
      "tights"
    ]
  },
  {
    "question": "das Picknick, -s",
    "correct": "picnic",
    "choices": [
      "future",
      "picnic",
      "pharmacist",
      "beach"
    ]
  },
  {
    "question": "die Pille, -n",
    "correct": "pill",
    "choices": [
      "dog",
      "pill",
      "breakfast",
      "culture"
    ]
  },
  {
    "question": "der Pilz, -e",
    "correct": "mushroom",
    "choices": [
      "understanding",
      "mushroom",
      "jumper, pullover",
      "home"
    ]
  },
  {
    "question": "der PKW, -s (Personenkraftwagen)",
    "correct": "car",
    "choices": [
      "guarantee",
      "announcement (radio)",
      "perfume",
      "car"
    ]
  },
  {
    "question": "der Plan, -\"e",
    "correct": "plan, map",
    "choices": [
      "public",
      "confirmation",
      "colour",
      "plan, map"
    ]
  },
  {
    "question": "das Plastik (Sg.)",
    "correct": "plastic",
    "choices": [
      "city (overground) train",
      "plastic",
      "artificial material",
      "window"
    ]
  },
  {
    "question": "der Platz, -\"e",
    "correct": "place, square",
    "choices": [
      "condition",
      "place, square",
      "hour, time, watch",
      "weight"
    ]
  },
  {
    "question": "die Politik (Sg.)",
    "correct": "politics",
    "choices": [
      "park",
      "one way street",
      "intelligence",
      "politics"
    ]
  },
  {
    "question": "der Politiker, -",
    "correct": "politician",
    "choices": [
      "politician",
      "computer",
      "meeting point",
      "office"
    ]
  },
  {
    "question": "die Polizei, -en",
    "correct": "police",
    "choices": [
      "grandchild",
      "police",
      "farmer",
      "cream"
    ]
  },
  {
    "question": "der Polizist, -en",
    "correct": "policeman",
    "choices": [
      "living room",
      "policeman",
      "hospital",
      "flat, apartment"
    ]
  },
  {
    "question": "die Pommes frites (Pl.)",
    "correct": "french fries",
    "choices": [
      "present",
      "french fries",
      "breast, chest",
      "bath"
    ]
  },
  {
    "question": "die Portion, -en",
    "correct": "portion",
    "choices": [
      "impression",
      "portion",
      "profession",
      "connection (TV, internet)"
    ]
  },
  {
    "question": "die Post (Sg.)",
    "correct": "post",
    "choices": [
      "cousin",
      "canal",
      "post",
      "honey"
    ]
  },
  {
    "question": "das Postfach, -\"er",
    "correct": "post box",
    "choices": [
      "holidays",
      "discussion",
      "post box",
      "museum"
    ]
  },
  {
    "question": "die Postkarte, -n",
    "correct": "postcard",
    "choices": [
      "pregnancy",
      "breast, chest",
      "postcard",
      "househusband"
    ]
  },
  {
    "question": "die Postleitzahl, -en",
    "correct": "postcode",
    "choices": [
      "model",
      "bread roll",
      "postcode",
      "bridge"
    ]
  },
  {
    "question": "das Praktikum, die Praktika",
    "correct": "practical training, internship",
    "choices": [
      "picture, recording, admission",
      "cake",
      "practical training, internship",
      "step, walk"
    ]
  },
  {
    "question": "der Praktikant, -en",
    "correct": "trainee, intern",
    "choices": [
      "alcohol",
      "zoo",
      "air conditioner",
      "trainee, intern"
    ]
  },
  {
    "question": "die Praxis, -en",
    "correct": "practice",
    "choices": [
      "speed limit",
      "reaction",
      "travel agency",
      "practice"
    ]
  },
  {
    "question": "der Preis, -e",
    "correct": "price",
    "choices": [
      "river",
      "criminal",
      "price",
      "EC card (bank card)"
    ]
  },
  {
    "question": "das Problem, -e",
    "correct": "problem",
    "choices": [
      "maiden name",
      "problem",
      "answer",
      "child"
    ]
  },
  {
    "question": "das Produkt, -e",
    "correct": "product",
    "choices": [
      "product",
      "experts",
      "compromise",
      "burglar"
    ]
  },
  {
    "question": "die Produktion, -en",
    "correct": "production",
    "choices": [
      "cook",
      "marks",
      "lightning",
      "production"
    ]
  },
  {
    "question": "der Professor, -en",
    "correct": "professor",
    "choices": [
      "service",
      "childhood",
      "professor",
      "competition"
    ]
  },
  {
    "question": "der Profi, -s",
    "correct": "professional",
    "choices": [
      "hard disk",
      "professional",
      "call",
      "order, tidiness"
    ]
  },
  {
    "question": "das Programm, -e",
    "correct": "programme",
    "choices": [
      "carpet",
      "programme",
      "demand",
      "cellar"
    ]
  },
  {
    "question": "das Projekt, -e",
    "correct": "project",
    "choices": [
      "address",
      "project",
      "value",
      "forehead"
    ]
  },
  {
    "question": "der Prospekt, -e",
    "correct": "leaflet, brochure",
    "choices": [
      "worker",
      "main railway station",
      "leaflet, brochure",
      "people"
    ]
  },
  {
    "question": "der Protest, -e",
    "correct": "protest",
    "choices": [
      "protest",
      "hour",
      "birthday",
      "translator"
    ]
  },
  {
    "question": "der Prozess, -e",
    "correct": "trial, case, process",
    "choices": [
      "theatre",
      "top",
      "breakfast",
      "trial, case, process"
    ]
  },
  {
    "question": "die Prüfung, -en",
    "correct": "exam, test",
    "choices": [
      "exam, test",
      "apprenticeship",
      "swimming pool",
      "interview"
    ]
  },
  {
    "question": "das Publikum (Sg.)",
    "correct": "public",
    "choices": [
      "price",
      "memory",
      "big city",
      "public"
    ]
  },
  {
    "question": "der Pullover, -",
    "correct": "jumper, pullover",
    "choices": [
      "roof",
      "ground",
      "jumper, pullover",
      "thriller, crime film or TV programme"
    ]
  },
  {
    "question": "der Punkt, -e",
    "correct": "point",
    "choices": [
      "(radio) Station",
      "claim",
      "key",
      "point"
    ]
  },
  {
    "question": "die Puppe, -n",
    "correct": "doll",
    "choices": [
      "activity",
      "doll",
      "thirst",
      "motorway"
    ]
  },
  {
    "question": "die Qualifikation, -en",
    "correct": "qualification",
    "choices": [
      "adult",
      "sister",
      "god",
      "qualification"
    ]
  },
  {
    "question": "die Qualität, -en",
    "correct": "quality",
    "choices": [
      "bakery",
      "account",
      "quality",
      "luggage, baggage"
    ]
  },
  {
    "question": "der Quark (Sg.)",
    "correct": "quark, curd cheese",
    "choices": [
      "household",
      "e mail",
      "bread",
      "quark, curd cheese"
    ]
  },
  {
    "question": "das Quartal, -e",
    "correct": "quarter",
    "choices": [
      "quarter",
      "request",
      "costs",
      "measure"
    ]
  },
  {
    "question": "der Quatsch (Sg.)",
    "correct": "nonsense",
    "choices": [
      "cosmetics",
      "top",
      "chance",
      "nonsense"
    ]
  },
  {
    "question": "die Querstraße, -n",
    "correct": "crossroad",
    "choices": [
      "air conditioner",
      "crossroad",
      "hall, room",
      "wish"
    ]
  },
  {
    "question": "die Quittung, -en",
    "correct": "receipt",
    "choices": [
      "receipt",
      "sugar",
      "crockerz, pots and pans",
      "event, function"
    ]
  },
  {
    "question": "der Rabatt, -e",
    "correct": "discount",
    "choices": [
      "cold",
      "diesel",
      "discount",
      "chemistry"
    ]
  },
  {
    "question": "das Rad, -\"er",
    "correct": "wheel, bike",
    "choices": [
      "reason, justification",
      "border",
      "possibility",
      "wheel, bike"
    ]
  },
  {
    "question": "der Radfahrer, -",
    "correct": "cyclist",
    "choices": [
      "hm",
      "Lawyer",
      "mechanic",
      "cyclist"
    ]
  },
  {
    "question": "das Radio, -s",
    "correct": "radio",
    "choices": [
      "radio",
      "tea",
      "social care",
      "painter"
    ]
  },
  {
    "question": "der Rand, -\"er",
    "correct": "edge",
    "choices": [
      "business people",
      "delivery",
      "criminal",
      "edge"
    ]
  },
  {
    "question": "der Rat (Sg.)",
    "correct": "advice",
    "choices": [
      "sign",
      "advice",
      "plum",
      "protest"
    ]
  },
  {
    "question": "der Ratschlag, -\"e",
    "correct": "piece of advice",
    "choices": [
      "pedestrian",
      "physics",
      "risk",
      "piece of advice"
    ]
  },
  {
    "question": "das Rathaus, -\"er",
    "correct": "town hall",
    "choices": [
      "town hall",
      "bag",
      "engineer",
      "coldness, cold (weather)"
    ]
  },
  {
    "question": "der Raucher, -",
    "correct": "smoker",
    "choices": [
      "gate, goal",
      "smoker",
      "bridge",
      "care insurance"
    ]
  },
  {
    "question": "der Raum, -\"e",
    "correct": "room",
    "choices": [
      "lady",
      "room",
      "health",
      "fish"
    ]
  },
  {
    "question": "die Reaktion, -en",
    "correct": "reaction",
    "choices": [
      "noise",
      "reaction",
      "visit",
      "personnel"
    ]
  },
  {
    "question": "die Realität, -en",
    "correct": "reality",
    "choices": [
      "shower",
      "expiry date",
      "reality",
      "truck (short for der Lastkraftwagen)"
    ]
  },
  {
    "question": "der Rechner, -",
    "correct": "calculator",
    "choices": [
      "control",
      "thing, affair",
      "calculator",
      "announcement, report"
    ]
  },
  {
    "question": "die Rechnung, -en",
    "correct": "bill",
    "choices": [
      "noise",
      "horse",
      "water",
      "bill"
    ]
  },
  {
    "question": "das Recht, -e",
    "correct": "right",
    "choices": [
      "ear",
      "celebration",
      "interest",
      "right"
    ]
  },
  {
    "question": "der Rechtsanwalt, -\"e",
    "correct": "Lawyer",
    "choices": [
      "Lawyer",
      "yard",
      "conviction",
      "heating"
    ]
  },
  {
    "question": "die Rede, -n",
    "correct": "speech, talk",
    "choices": [
      "speech, talk",
      "sex, gender",
      "answer",
      "estate agents"
    ]
  },
  {
    "question": "die Reform, -en",
    "correct": "reform",
    "choices": [
      "reform",
      "cream",
      "information",
      "Agency"
    ]
  },
  {
    "question": "das Regal, -e",
    "correct": "shelf",
    "choices": [
      "player",
      "shelf",
      "wagon, goods van",
      "beer garden"
    ]
  },
  {
    "question": "die Regel, -n",
    "correct": "rule",
    "choices": [
      "rule",
      "Department",
      "football",
      "society"
    ]
  },
  {
    "question": "der Regen, -",
    "correct": "rain",
    "choices": [
      "sugar",
      "piano",
      "tour",
      "rain"
    ]
  },
  {
    "question": "die Region, -en",
    "correct": "region",
    "choices": [
      "foot",
      "social worker",
      "region",
      "continuation, follow up"
    ]
  },
  {
    "question": "der Reifen, -",
    "correct": "tyre",
    "choices": [
      "tyre",
      "material, cloth",
      "title",
      "orchestra"
    ]
  },
  {
    "question": "die Reihe, -n",
    "correct": "row",
    "choices": [
      "stop",
      "hall",
      "row",
      "mood"
    ]
  },
  {
    "question": "die Reinigung, -en",
    "correct": "cleaning",
    "choices": [
      "cleaning",
      "brother",
      "connection (TV, internet)",
      "temperature"
    ]
  },
  {
    "question": "der Reis (Sg.)",
    "correct": "rice",
    "choices": [
      "dining car",
      "postcard",
      "credit card",
      "rice"
    ]
  },
  {
    "question": "die Reise, -n",
    "correct": "journey, voyage",
    "choices": [
      "SMS",
      "exam, test",
      "plum",
      "journey, voyage"
    ]
  },
  {
    "question": "das Reisebüro, -s",
    "correct": "travel agency",
    "choices": [
      "travel agency",
      "end",
      "minced meat",
      "ceiling, blanket"
    ]
  },
  {
    "question": "der Rekord, -e",
    "correct": "record",
    "choices": [
      "case, box, crate",
      "trainer, coach",
      "record",
      "trade"
    ]
  },
  {
    "question": "die Rente, -n",
    "correct": "pension",
    "choices": [
      "sun",
      "sleep",
      "dust",
      "pension"
    ]
  },
  {
    "question": "der Rentner, -",
    "correct": "pensioner",
    "choices": [
      "original",
      "unemployment",
      "pensioner",
      "first name"
    ]
  },
  {
    "question": "die Reparatur, -en",
    "correct": "repair",
    "choices": [
      "school",
      "offer",
      "repair",
      "market"
    ]
  },
  {
    "question": "die Reservierung, -en",
    "correct": "reservation",
    "choices": [
      "economics",
      "umrella",
      "fan (sport, etc.)",
      "reservation"
    ]
  },
  {
    "question": "der Rest, -e",
    "correct": "rest",
    "choices": [
      "production",
      "rest",
      "advice",
      "current (electricity)"
    ]
  },
  {
    "question": "das Restaurant, -s",
    "correct": "restaurant",
    "choices": [
      "exercise book",
      "intelligence",
      "restaurant",
      "househusband"
    ]
  },
  {
    "question": "das Rezept, -e",
    "correct": "recipe",
    "choices": [
      "recipe",
      "trashcan, waste basket",
      "full time",
      "sofa"
    ]
  },
  {
    "question": "die Rezeption, -en",
    "correct": "reception",
    "choices": [
      "start",
      "immigrant",
      "reception",
      "fair, show"
    ]
  },
  {
    "question": "der Rhythmus, die Rhythmen",
    "correct": "rhythm",
    "choices": [
      "centre",
      "repair",
      "ladder",
      "rhythm"
    ]
  },
  {
    "question": "der Richter, -",
    "correct": "judge",
    "choices": [
      "judge",
      "girl",
      "transfer, referral",
      "understanding"
    ]
  },
  {
    "question": "die Richtung, -en",
    "correct": "direction",
    "choices": [
      "direction",
      "umrella",
      "address",
      "form of address"
    ]
  },
  {
    "question": "das Rind, -er",
    "correct": "ox, cow, beef",
    "choices": [
      "bookshop",
      "cat",
      "judgement, sentence",
      "ox, cow, beef"
    ]
  },
  {
    "question": "der Ring, -e",
    "correct": "ring",
    "choices": [
      "ring",
      "game",
      "holidays",
      "material"
    ]
  },
  {
    "question": "das Risiko, die Risiken",
    "correct": "risk",
    "choices": [
      "instructions",
      "sight",
      "toothpaste",
      "risk"
    ]
  },
  {
    "question": "der Rock, -\"e",
    "correct": "skirt",
    "choices": [
      "politics",
      "skirt",
      "alcohol",
      "wish"
    ]
  },
  {
    "question": "der Roman, -e",
    "correct": "novel",
    "choices": [
      "conversation, discussion",
      "law",
      "novel",
      "admission, entrance"
    ]
  },
  {
    "question": "die Rose, -n",
    "correct": "rose",
    "choices": [
      "rose",
      "revenue, takings, income",
      "perfume",
      "employment, occupation"
    ]
  },
  {
    "question": "die Rückfahrt, -en",
    "correct": "return journey",
    "choices": [
      "middle",
      "return journey",
      "day care center",
      "connection (TV, internet)"
    ]
  },
  {
    "question": "die Rückkehr (Sg.)",
    "correct": "return",
    "choices": [
      "win, victory",
      "return",
      "job",
      "wheel, bike"
    ]
  },
  {
    "question": "der Rücken, -",
    "correct": "back",
    "choices": [
      "forest",
      "cloakroom",
      "back",
      "plug"
    ]
  },
  {
    "question": "der Rucksack, -\"e",
    "correct": "rucksack",
    "choices": [
      "glass",
      "rucksack",
      "flower",
      "courage"
    ]
  },
  {
    "question": "die Rücksicht, -en",
    "correct": "consideration",
    "choices": [
      "consideration",
      "stay, delay, stop",
      "world",
      "current (electricity)"
    ]
  },
  {
    "question": "die Ruhe (Sg.)",
    "correct": "rest, peace, quiet",
    "choices": [
      "course leader",
      "person",
      "import",
      "rest, peace, quiet"
    ]
  },
  {
    "question": "der Rundfunk (Sg.)",
    "correct": "broadcast",
    "choices": [
      "cleaning",
      "guide, lead, tour",
      "bridge",
      "broadcast"
    ]
  },
  {
    "question": "der Saal, die Säle",
    "correct": "hall, room",
    "choices": [
      "blood",
      "care",
      "hall, room",
      "detergent"
    ]
  },
  {
    "question": "die Sache, -n",
    "correct": "thing, affair",
    "choices": [
      "walk, passage, aisle",
      "kiosk",
      "thing, affair",
      "copy"
    ]
  },
  {
    "question": "der Sack, -\"e",
    "correct": "sack",
    "choices": [
      "leaflet, brochure",
      "taste",
      "sack",
      "vinegar"
    ]
  },
  {
    "question": "der Saft, -\"e",
    "correct": "''jui''''ce",
    "choices": [
      "cabin, cubicle",
      "''jui''''ce",
      "mistake",
      "poll"
    ]
  },
  {
    "question": "die Sahne (Sg.)",
    "correct": "cream",
    "choices": [
      "cream",
      "production",
      "flower",
      "pharmacy"
    ]
  },
  {
    "question": "die Saison, -s",
    "correct": "season",
    "choices": [
      "househusband",
      "season",
      "case",
      "sign"
    ]
  },
  {
    "question": "der Salon, -s",
    "correct": "salon",
    "choices": [
      "lift",
      "table",
      "sweet",
      "salon"
    ]
  },
  {
    "question": "der Salat, -e",
    "correct": "salad",
    "choices": [
      "letter (of the alphabet)",
      "salad",
      "thing",
      "course"
    ]
  },
  {
    "question": "die Salbe, -n",
    "correct": "ointment",
    "choices": [
      "spectator",
      "celebration",
      "ointment",
      "drop"
    ]
  },
  {
    "question": "das Salz, -e",
    "correct": "salt",
    "choices": [
      "costs",
      "battery",
      "salt",
      "near, proximity, vicinity"
    ]
  },
  {
    "question": "der Sand, -e",
    "correct": "sand",
    "choices": [
      "underground train",
      "specialist",
      "information",
      "sand"
    ]
  },
  {
    "question": "der Sänger, -",
    "correct": "singer",
    "choices": [
      "singer",
      "chair",
      "choice",
      "registry office"
    ]
  },
  {
    "question": "der Satz, -\"e",
    "correct": "sentence",
    "choices": [
      "sentence",
      "speed limit",
      "restaurant",
      "eye"
    ]
  },
  {
    "question": "die Schachtel, -n",
    "correct": "box, bag",
    "choices": [
      "fashion",
      "box, bag",
      "needle",
      "post box"
    ]
  },
  {
    "question": "der Schaden, -\"",
    "correct": "damage",
    "choices": [
      "granddad",
      "pocket money",
      "damage",
      "manufacturer"
    ]
  },
  {
    "question": "der Schalter, -",
    "correct": "switch",
    "choices": [
      "pressure",
      "trunk",
      "health insurance",
      "switch"
    ]
  },
  {
    "question": "der Schatten, -",
    "correct": "shade, shadow",
    "choices": [
      "ground",
      "shade, shadow",
      "Lawyer",
      "joe"
    ]
  },
  {
    "question": "das Schaufenster, -",
    "correct": "shop (show) window",
    "choices": [
      "shop (show) window",
      "number plate",
      "dessert",
      "stain, patch"
    ]
  },
  {
    "question": "der Schauspieler, -",
    "correct": "actor",
    "choices": [
      "cellar",
      "cell phone",
      "area",
      "actor"
    ]
  },
  {
    "question": "die Scheibe, -n",
    "correct": "slice, pane (of glass)",
    "choices": [
      "slice, pane (of glass)",
      "cell phone",
      "origin",
      "face"
    ]
  },
  {
    "question": "die Scheidung, -en",
    "correct": "divorce",
    "choices": [
      "history",
      "fat",
      "advice",
      "divorce"
    ]
  },
  {
    "question": "der Schein, -e",
    "correct": "note",
    "choices": [
      "costs",
      "beard",
      "note",
      "school graduation exam"
    ]
  },
  {
    "question": "die Schere, -n",
    "correct": "scissors",
    "choices": [
      "perfume",
      "scissors",
      "hight",
      "noodle"
    ]
  },
  {
    "question": "die Schicht, -en",
    "correct": "layer",
    "choices": [
      "meadow",
      "technology, technique",
      "tiny male chicken",
      "layer"
    ]
  },
  {
    "question": "das Schiff, -e",
    "correct": "ship",
    "choices": [
      "ship",
      "control",
      "tea",
      "trainer, coach"
    ]
  },
  {
    "question": "das Schild, -er",
    "correct": "sign",
    "choices": [
      "(radio) Station",
      "sign",
      "permission",
      "park"
    ]
  },
  {
    "question": "der Schinken, -",
    "correct": "hm",
    "choices": [
      "argument",
      "hm",
      "goal, aim",
      "secretary"
    ]
  },
  {
    "question": "der Schirm, -e",
    "correct": "umrella",
    "choices": [
      "preliminary election",
      "umrella",
      "episode",
      "shopping"
    ]
  },
  {
    "question": "der Schlaf (Sg.)",
    "correct": "sleep",
    "choices": [
      "jewellery",
      "injection",
      "underground train",
      "sleep"
    ]
  },
  {
    "question": "die Schlange, -n",
    "correct": "snake",
    "choices": [
      "flight",
      "snake",
      "monitor",
      "title"
    ]
  },
  {
    "question": "das Schloss, -\"er",
    "correct": "lock, padlock, castle",
    "choices": [
      "activity",
      "alarm",
      "step",
      "lock, padlock, castle"
    ]
  },
  {
    "question": "der Schluss, -\"e",
    "correct": "end",
    "choices": [
      "beach",
      "end",
      "risk",
      "country of origin"
    ]
  },
  {
    "question": "der Schlüssel, -",
    "correct": "key",
    "choices": [
      "finger",
      "preliminary election",
      "knife",
      "key"
    ]
  },
  {
    "question": "der Schmerz, -en",
    "correct": "pain",
    "choices": [
      "pain",
      "tram",
      "letter (of the alphabet)",
      "paper"
    ]
  },
  {
    "question": "das Schmerzmittel, -",
    "correct": "painkiller",
    "choices": [
      "busicuits",
      "pub",
      "brush",
      "painkiller"
    ]
  },
  {
    "question": "der Schmuck, -e",
    "correct": "jewellery",
    "choices": [
      "wife",
      "jewellery",
      "nose",
      "coin"
    ]
  },
  {
    "question": "der Schnee (Sg.)",
    "correct": "snow",
    "choices": [
      "purpose, aim",
      "keyboard",
      "snow",
      "crossing, junction"
    ]
  },
  {
    "question": "das Schnitzel, -",
    "correct": "schnitzel",
    "choices": [
      "schnitzel",
      "discussion",
      "method",
      "interview"
    ]
  },
  {
    "question": "der Schnupfen, -",
    "correct": "cold",
    "choices": [
      "bed",
      "contents",
      "guest",
      "cold"
    ]
  },
  {
    "question": "die Schokolade, -n",
    "correct": "chocolate",
    "choices": [
      "sign",
      "possibility",
      "work, job",
      "chocolate"
    ]
  },
  {
    "question": "der Schrank, -\"e",
    "correct": "cupboard",
    "choices": [
      "protection",
      "curve, arch, bow",
      "cupboard",
      "cleaning"
    ]
  },
  {
    "question": "der Schreck/Schrecken, -en / -",
    "correct": "scare, fright",
    "choices": [
      "scare, fright",
      "acquaintance, known person",
      "south",
      "printer"
    ]
  },
  {
    "question": "das Schreiben, -",
    "correct": "letter, communication",
    "choices": [
      "letter, communication",
      "sex, gender",
      "breakfast",
      "relative, relation"
    ]
  },
  {
    "question": "der Schreibtisch, -e",
    "correct": "writing desk",
    "choices": [
      "father",
      "dead",
      "burglar",
      "writing desk"
    ]
  },
  {
    "question": "die Schrift, -en",
    "correct": "handwriting",
    "choices": [
      "internet",
      "handwriting",
      "movement",
      "repair"
    ]
  },
  {
    "question": "der Schritt, -e",
    "correct": "step, walk",
    "choices": [
      "dishwasher",
      "t-shirt",
      "contact",
      "step, walk"
    ]
  },
  {
    "question": "der Schuh, -e",
    "correct": "schoe",
    "choices": [
      "tea",
      "schoe",
      "ferry",
      "task, exercise"
    ]
  },
  {
    "question": "die Schuld, -en",
    "correct": "fault",
    "choices": [
      "coat, jacket",
      "trainee",
      "cleaning",
      "fault"
    ]
  },
  {
    "question": "die Schule, -n",
    "correct": "school",
    "choices": [
      "tooth",
      "mistake",
      "information",
      "school"
    ]
  },
  {
    "question": "der Schüler, - / die Schülerin, -nen",
    "correct": "student",
    "choices": [
      "student",
      "job",
      "airport",
      "rain"
    ]
  },
  {
    "question": "die Schulter, -n",
    "correct": "shoulder",
    "choices": [
      "moment",
      "shoulder",
      "admission, approval",
      "series"
    ]
  },
  {
    "question": "der Schutz (Sg.)",
    "correct": "protection",
    "choices": [
      "protection",
      "secretary",
      "import",
      "integration"
    ]
  },
  {
    "question": "die Schwangerschaft, -en",
    "correct": "pregnancy",
    "choices": [
      "pregnancy",
      "delay",
      "team",
      "fear"
    ]
  },
  {
    "question": "das Schwein, -e",
    "correct": "pig",
    "choices": [
      "nanny",
      "furnishings, organisation, equipment",
      "student",
      "pig"
    ]
  },
  {
    "question": "die Schwester, -n",
    "correct": "sister",
    "choices": [
      "sister",
      "salary",
      "information, information desk",
      "cloud"
    ]
  },
  {
    "question": "die Schwierigkeit, -en",
    "correct": "difficulty",
    "choices": [
      "floor (of building)",
      "keyboard",
      "description",
      "difficulty"
    ]
  },
  {
    "question": "das Schwimmbad, -\"er",
    "correct": "swimming pool",
    "choices": [
      "swimming pool",
      "traffic",
      "professor",
      "production"
    ]
  },
  {
    "question": "der See, -n / die See / die Nordsee",
    "correct": "lake",
    "choices": [
      "area",
      "lake",
      "man, gentleman",
      "dumpling"
    ]
  },
  {
    "question": "die Sehenswürdigkeit, -en",
    "correct": "sight",
    "choices": [
      "letter",
      "coincidence",
      "emergency call",
      "sight"
    ]
  },
  {
    "question": "die Seife, -n",
    "correct": "soap",
    "choices": [
      "soap",
      "cat",
      "protection",
      "baby"
    ]
  },
  {
    "question": "die Seite, -n",
    "correct": "page",
    "choices": [
      "cake",
      "page",
      "area, district",
      "post box"
    ]
  },
  {
    "question": "die Sekretärin, -nen",
    "correct": "secretary",
    "choices": [
      "secretary",
      "partner",
      "team work, collaboration",
      "pepper"
    ]
  },
  {
    "question": "das Semester, -",
    "correct": "semester",
    "choices": [
      "cake",
      "knife",
      "speed",
      "semester"
    ]
  },
  {
    "question": "der Sender, -",
    "correct": "(radio) Station",
    "choices": [
      "(radio) Station",
      "piano",
      "downtown",
      "physics"
    ]
  },
  {
    "question": "die Sendung, -en",
    "correct": "consignment, programme, transmission",
    "choices": [
      "visit",
      "switch",
      "consignment, programme, transmission",
      "return journey"
    ]
  },
  {
    "question": "die Senioren (Pl.)",
    "correct": "seniors, old people",
    "choices": [
      "mood",
      "seniors, old people",
      "dishwasher",
      "guest"
    ]
  },
  {
    "question": "die Serie, -n",
    "correct": "series",
    "choices": [
      "advantage",
      "series",
      "intensive course",
      "dog"
    ]
  },
  {
    "question": "der Service (Sg.)",
    "correct": "service",
    "choices": [
      "service",
      "warning, reminder",
      "dining car",
      "key (on a keyboard)"
    ]
  },
  {
    "question": "der Sessel, -",
    "correct": "chair",
    "choices": [
      "stairs, steps",
      "chair",
      "motor",
      "knife"
    ]
  },
  {
    "question": "die Sicherheit, -en",
    "correct": "security",
    "choices": [
      "confirmation",
      "suspicion",
      "training",
      "security"
    ]
  },
  {
    "question": "der Sieg, -e",
    "correct": "win, victory",
    "choices": [
      "service",
      "possibility",
      "stand point",
      "win, victory"
    ]
  },
  {
    "question": "der Sieger, -",
    "correct": "winner",
    "choices": [
      "matches",
      "jewellery",
      "winner",
      "honor"
    ]
  },
  {
    "question": "der Sinn, -e",
    "correct": "sense",
    "choices": [
      "chemistry",
      "steak",
      "prohibition, ban",
      "sense"
    ]
  },
  {
    "question": "die Situation, -en",
    "correct": "situation",
    "choices": [
      "situation",
      "island",
      "particular, detail",
      "cloud"
    ]
  },
  {
    "question": "der Sitz, -e",
    "correct": "seat",
    "choices": [
      "washing",
      "shade, shadow",
      "weather",
      "seat"
    ]
  },
  {
    "question": "der Ski, - / -er",
    "correct": "ski",
    "choices": [
      "bread roll",
      "piece of advice",
      "platform",
      "ski"
    ]
  },
  {
    "question": "die SMS, -",
    "correct": "SMS",
    "choices": [
      "SMS",
      "protest",
      "cow",
      "piece of advice"
    ]
  },
  {
    "question": "die Socke, -n",
    "correct": "sock",
    "choices": [
      "tyre",
      "sock",
      "e mail",
      "living room"
    ]
  },
  {
    "question": "das Sofa, -s",
    "correct": "sofa",
    "choices": [
      "surrounding",
      "costume, suit",
      "city (overground) train",
      "sofa"
    ]
  },
  {
    "question": "die Software, -s",
    "correct": "software",
    "choices": [
      "software",
      "pig",
      "doctor",
      "dispensing machine"
    ]
  },
  {
    "question": "der Sohn, -\"e",
    "correct": "son",
    "choices": [
      "mechanic",
      "son",
      "break in",
      "area"
    ]
  },
  {
    "question": "das Sonderangebot, -e",
    "correct": "special offer",
    "choices": [
      "nerve",
      "special offer",
      "breast, chest",
      "garage"
    ]
  },
  {
    "question": "die Sonne, -n",
    "correct": "sun",
    "choices": [
      "sun",
      "half board",
      "click",
      "clothers"
    ]
  },
  {
    "question": "die Sorge, -n",
    "correct": "worry",
    "choices": [
      "apology",
      "medium, remedy",
      "worry",
      "engineer"
    ]
  },
  {
    "question": "die Soße, -n",
    "correct": "sauce",
    "choices": [
      "traffic",
      "west",
      "banana",
      "sauce"
    ]
  },
  {
    "question": "das Souvenir, -s",
    "correct": "souvenir",
    "choices": [
      "nephew",
      "souvenir",
      "origin",
      "fire"
    ]
  },
  {
    "question": "das Sozialamt, -\"er",
    "correct": "social security office",
    "choices": [
      "social security office",
      "professor",
      "current account",
      "photography"
    ]
  },
  {
    "question": "der Sozialarbeiter, -",
    "correct": "social worker",
    "choices": [
      "uncle",
      "social worker",
      "flour",
      "boy"
    ]
  },
  {
    "question": "die Sozialhilfe, -n",
    "correct": "social care",
    "choices": [
      "truck (short for der Lastkraftwagen)",
      "haste",
      "social care",
      "diversion"
    ]
  },
  {
    "question": "der Spaß ,-\"e",
    "correct": "fun",
    "choices": [
      "replacement",
      "fun",
      "seniors, old people",
      "food"
    ]
  },
  {
    "question": "der Spaziergang, -\"e",
    "correct": "stroll",
    "choices": [
      "stroll",
      "chain",
      "participation",
      "shop (show) window"
    ]
  },
  {
    "question": "die Speisekarte, -n / Speise-",
    "correct": "menu",
    "choices": [
      "clinic",
      "object",
      "menu",
      "craftsman, workman, artisan"
    ]
  },
  {
    "question": "der Speisewagen, - / Speise-",
    "correct": "dining car",
    "choices": [
      "dining car",
      "fear",
      "meeting point",
      "material"
    ]
  },
  {
    "question": "die Vorspeise, -n / -speise",
    "correct": "starter",
    "choices": [
      "problem",
      "patient",
      "starter",
      "toothbrush"
    ]
  },
  {
    "question": "die Spezialpflege, -n / Spezial-",
    "correct": "special care",
    "choices": [
      "member",
      "information, information desk",
      "application, proposal, motion",
      "special care"
    ]
  },
  {
    "question": "der Spezialist, -en",
    "correct": "specialist",
    "choices": [
      "admission, entrance",
      "record",
      "alcohol",
      "specialist"
    ]
  },
  {
    "question": "der Spiegel, -",
    "correct": "mirror",
    "choices": [
      "guarantee",
      "glasses",
      "mirror",
      "representation, advocacy"
    ]
  },
  {
    "question": "das Spiel, -e",
    "correct": "game",
    "choices": [
      "old people's home, retirement home",
      "game",
      "man",
      "walk, trek"
    ]
  },
  {
    "question": "der Spieler, -",
    "correct": "player",
    "choices": [
      "player",
      "bathtub",
      "tower",
      "customer"
    ]
  },
  {
    "question": "der Spielplatz, -\"e",
    "correct": "playground",
    "choices": [
      "announcement (radio)",
      "thriller, crime film or TV programme",
      "lost property office",
      "playground"
    ]
  },
  {
    "question": "das Spielzeug, -e",
    "correct": "toy",
    "choices": [
      "industrial area",
      "studio",
      "cow",
      "toy"
    ]
  },
  {
    "question": "der Sport, -e",
    "correct": "sport",
    "choices": [
      "sun",
      "society",
      "sport",
      "engineer"
    ]
  },
  {
    "question": "die Sportart, -en",
    "correct": "type of sport",
    "choices": [
      "overtime",
      "type of sport",
      "object",
      "atmosphere, mood"
    ]
  },
  {
    "question": "der Sportler, -",
    "correct": "sportsman",
    "choices": [
      "knee",
      "stop(ping place)",
      "sportsman",
      "proof"
    ]
  },
  {
    "question": "die Sprache, -n",
    "correct": "language",
    "choices": [
      "approval",
      "language",
      "mistake",
      "direction"
    ]
  },
  {
    "question": "die Muttersprache, -en",
    "correct": "mother tongue",
    "choices": [
      "ground",
      "fitness",
      "law",
      "mother tongue"
    ]
  },
  {
    "question": "die Sprechstunde, -n",
    "correct": "consultation (hour), surgery",
    "choices": [
      "announcement, report",
      "handwriting",
      "event, function",
      "consultation (hour), surgery"
    ]
  },
  {
    "question": "die Spritze, -n",
    "correct": "injection",
    "choices": [
      "injection",
      "landline",
      "button",
      "politician"
    ]
  },
  {
    "question": "die Spülmaschine, -n",
    "correct": "dishwasher",
    "choices": [
      "dishwasher",
      "experience",
      "photography",
      "freetime"
    ]
  },
  {
    "question": "die Spur, -en",
    "correct": "track, trace",
    "choices": [
      "(computer) drive, running gear",
      "track, trace",
      "insurance card",
      "child"
    ]
  },
  {
    "question": "der Staat, -en",
    "correct": "state",
    "choices": [
      "wound",
      "connection, relationship",
      "''jui''''ce",
      "state"
    ]
  },
  {
    "question": "die Staatsangehörigkeit, -en",
    "correct": "nationality",
    "choices": [
      "boy",
      "nationality",
      "motorway",
      "action"
    ]
  },
  {
    "question": "das Stadion, die Stadien",
    "correct": "stadium",
    "choices": [
      "organisation",
      "trial, case, process",
      "stadium",
      "consignment, programme, transmission"
    ]
  },
  {
    "question": "die Stadt, -\"e",
    "correct": "city",
    "choices": [
      "reception",
      "weather report",
      "disadvantage",
      "city"
    ]
  },
  {
    "question": "der Stadtplan, -\"e",
    "correct": "town map",
    "choices": [
      "bulky waste",
      "jeans",
      "town map",
      "weather"
    ]
  },
  {
    "question": "das Standesamt, -\"er",
    "correct": "registry office",
    "choices": [
      "health",
      "burglar",
      "boy",
      "registry office"
    ]
  },
  {
    "question": "der Standpunkt, -e",
    "correct": "stand point",
    "choices": [
      "furnishings, organisation, equipment",
      "suspicion",
      "employee",
      "stand point"
    ]
  },
  {
    "question": "der Star, -s",
    "correct": "star",
    "choices": [
      "star",
      "detergent",
      "stretch, distance",
      "social worker"
    ]
  },
  {
    "question": "der Start, -s",
    "correct": "start",
    "choices": [
      "living room",
      "start",
      "body",
      "sack"
    ]
  },
  {
    "question": "die Station, -en",
    "correct": "station",
    "choices": [
      "sun",
      "burglar",
      "butcher's shop",
      "station"
    ]
  },
  {
    "question": "der Stau, -s",
    "correct": "traffic jam",
    "choices": [
      "rose",
      "fax",
      "traffic jam",
      "home sickness"
    ]
  },
  {
    "question": "der Staub, -\"e",
    "correct": "dust",
    "choices": [
      "dust",
      "right of way",
      "thirst",
      "fashion"
    ]
  },
  {
    "question": "das Steak, -s",
    "correct": "steak",
    "choices": [
      "competition",
      "steak",
      "trial, case, process",
      "rubbish, trash"
    ]
  },
  {
    "question": "die Steckdose, -n",
    "correct": "socket",
    "choices": [
      "socket",
      "further education",
      "ceiling, blanket",
      "choice"
    ]
  },
  {
    "question": "der Stecker, -",
    "correct": "plug",
    "choices": [
      "group",
      "plug",
      "unemployment",
      "reaction"
    ]
  },
  {
    "question": "der Stein, -e",
    "correct": "stone",
    "choices": [
      "trainee, intern",
      "stone",
      "win, victory",
      "cosmetics"
    ]
  },
  {
    "question": "die Stelle, -n",
    "correct": "place, post, job",
    "choices": [
      "place, post, job",
      "sweet",
      "plant",
      "terrace"
    ]
  },
  {
    "question": "der Stempel, -",
    "correct": "stamp, postmark",
    "choices": [
      "advice",
      "apprenticeship",
      "stamp, postmark",
      "youth"
    ]
  },
  {
    "question": "der Stern, -e",
    "correct": "star",
    "choices": [
      "sportsman",
      "star",
      "effect",
      "dessert"
    ]
  },
  {
    "question": "die Steuer, -n",
    "correct": "tax",
    "choices": [
      "tax",
      "address",
      "business, shop",
      "upstairs, upper floor"
    ]
  },
  {
    "question": "der Stiefel, -",
    "correct": "boots",
    "choices": [
      "emergency",
      "dead",
      "table",
      "boots"
    ]
  },
  {
    "question": "die Stimme, -n",
    "correct": "voice",
    "choices": [
      "nationality",
      "voice",
      "flower",
      "homework"
    ]
  },
  {
    "question": "die Stimmung, -en",
    "correct": "atmosphere, mood",
    "choices": [
      "margarine",
      "atmosphere, mood",
      "place, post, job",
      "desire"
    ]
  },
  {
    "question": "die Stirn, -en",
    "correct": "forehead",
    "choices": [
      "tradition",
      "idea",
      "brother",
      "forehead"
    ]
  },
  {
    "question": "der Stock, -\"e",
    "correct": "floor (of building)",
    "choices": [
      "sport",
      "chocolate",
      "floor (of building)",
      "neighbours"
    ]
  },
  {
    "question": "das Stockwerk, -e",
    "correct": "storey",
    "choices": [
      "storey",
      "stove",
      "example",
      "appointment, announcement"
    ]
  },
  {
    "question": "der Stoff, -e",
    "correct": "material, cloth",
    "choices": [
      "instructions",
      "letter box",
      "material, cloth",
      "infection"
    ]
  },
  {
    "question": "die Störung, -en",
    "correct": "disturbance, interference",
    "choices": [
      "disturbance, interference",
      "vehicle",
      "contents",
      "the cough"
    ]
  },
  {
    "question": "die Strafe, -n",
    "correct": "fine",
    "choices": [
      "coin",
      "place",
      "butcher's shop",
      "fine"
    ]
  },
  {
    "question": "der Strafzettel, -",
    "correct": "ticket (parking)",
    "choices": [
      "trainee",
      "couch",
      "airport",
      "ticket (parking)"
    ]
  },
  {
    "question": "der Strand, -\"e",
    "correct": "beach",
    "choices": [
      "emergency",
      "conditions, terms",
      "beach",
      "key"
    ]
  },
  {
    "question": "die Straße, -n",
    "correct": "street",
    "choices": [
      "plug",
      "cake",
      "certificate",
      "street"
    ]
  },
  {
    "question": "die Strecke, -n",
    "correct": "stretch, distance",
    "choices": [
      "yard",
      "stretch, distance",
      "storm",
      "coin"
    ]
  },
  {
    "question": "das Streichholz, -\"er",
    "correct": "matches",
    "choices": [
      "spouse",
      "thriller, crime film or TV programme",
      "fair, show",
      "matches"
    ]
  },
  {
    "question": "der Streik, -s",
    "correct": "strike",
    "choices": [
      "strike",
      "recovery",
      "meeting point",
      "picnic"
    ]
  },
  {
    "question": "der Streit, -e",
    "correct": "argument",
    "choices": [
      "zone",
      "pedestrian area",
      "poll",
      "argument"
    ]
  },
  {
    "question": "der Stress, -e",
    "correct": "stress",
    "choices": [
      "proof",
      "interview",
      "stress",
      "letter box"
    ]
  },
  {
    "question": "der Strom, -\"e",
    "correct": "current (electricity)",
    "choices": [
      "kiss",
      "printer",
      "current (electricity)",
      "north"
    ]
  },
  {
    "question": "der Strumpf, -\"e",
    "correct": "tights",
    "choices": [
      "cupboard",
      "blouse",
      "tights",
      "acquaintance, known person"
    ]
  },
  {
    "question": "das Stück, -e / -stück, -e",
    "correct": "piece",
    "choices": [
      "plant",
      "(radio) Station",
      "piece",
      "migration"
    ]
  },
  {
    "question": "der Student, -en",
    "correct": "student",
    "choices": [
      "feeling",
      "sense",
      "student",
      "decision"
    ]
  },
  {
    "question": "das Studium, die Studien",
    "correct": "studies",
    "choices": [
      "thirst",
      "door",
      "studies",
      "hairdresser"
    ]
  },
  {
    "question": "das Studio, -s",
    "correct": "studio",
    "choices": [
      "dishwasher",
      "lift",
      "studio",
      "cold"
    ]
  },
  {
    "question": "die Stufe, -n",
    "correct": "step",
    "choices": [
      "stand point",
      "danger",
      "step",
      "laboratory"
    ]
  },
  {
    "question": "der Stuhl, -\"e",
    "correct": "chair",
    "choices": [
      "stomach",
      "information, information desk",
      "chair",
      "point in time"
    ]
  },
  {
    "question": "die Stunde, -n",
    "correct": "hour",
    "choices": [
      "hour",
      "motor",
      "south",
      "incidence, idea"
    ]
  },
  {
    "question": "der Sturm, -\"e",
    "correct": "storm",
    "choices": [
      "courage",
      "moment",
      "storm",
      "cook"
    ]
  },
  {
    "question": "der Süden/Süd/Süd (Sg.)",
    "correct": "south",
    "choices": [
      "behaviour",
      "classwork",
      "training place, apprenticeship",
      "south"
    ]
  },
  {
    "question": "der Supermarkt, -\"e",
    "correct": "supermarket",
    "choices": [
      "record",
      "permission",
      "supermarket",
      "return journey"
    ]
  },
  {
    "question": "die Suppe, -n",
    "correct": "soup",
    "choices": [
      "society",
      "greeting",
      "granddad",
      "soup"
    ]
  },
  {
    "question": "das Symbol, -e",
    "correct": "symbol",
    "choices": [
      "artificial material",
      "haus",
      "symbol",
      "article"
    ]
  },
  {
    "question": "das System, -e",
    "correct": "system",
    "choices": [
      "unemployment",
      "system",
      "fluid",
      "garden"
    ]
  },
  {
    "question": "die Tabelle, -n",
    "correct": "table",
    "choices": [
      "conviction",
      "event, function",
      "table",
      "DVD"
    ]
  },
  {
    "question": "die Tablette, -n",
    "correct": "pill",
    "choices": [
      "water",
      "protest",
      "idea",
      "pill"
    ]
  },
  {
    "question": "die Tafel, -n",
    "correct": "table, blackboard",
    "choices": [
      "translator",
      "responsibility",
      "risk",
      "table, blackboard"
    ]
  },
  {
    "question": "der Tagesablauf, -\"e",
    "correct": "daily routine",
    "choices": [
      "special care",
      "note",
      "pension",
      "daily routine"
    ]
  },
  {
    "question": "die Tagesmutter, -\"",
    "correct": "nanny",
    "choices": [
      "art",
      "male nurse",
      "nanny",
      "motorbike"
    ]
  },
  {
    "question": "das Tal, -\"er",
    "correct": "valley",
    "choices": [
      "deadline",
      "transfer, referral",
      "lock, padlock, castle",
      "valley"
    ]
  },
  {
    "question": "die Tankstelle, -n",
    "correct": "fuel station",
    "choices": [
      "shade, shadow",
      "fuel station",
      "progress",
      "idea"
    ]
  },
  {
    "question": "die Tante, -n",
    "correct": "aunt",
    "choices": [
      "ticket (parking)",
      "aunt",
      "arrival",
      "profession"
    ]
  },
  {
    "question": "der Tanz, -\"e",
    "correct": "dance",
    "choices": [
      "schnitzel",
      "dance",
      "salon",
      "inhabitant"
    ]
  },
  {
    "question": "der Tarif, -e",
    "correct": "tariff",
    "choices": [
      "tariff",
      "sense",
      "integration",
      "reality"
    ]
  },
  {
    "question": "die Tasche, -n",
    "correct": "pocket, handbag",
    "choices": [
      "episode",
      "object",
      "pocket, handbag",
      "studio"
    ]
  },
  {
    "question": "das Taschentuch, -\"er",
    "correct": "handkerchief",
    "choices": [
      "opnion",
      "expenses, output, distribution",
      "sight",
      "handkerchief"
    ]
  },
  {
    "question": "die Tasse, -n",
    "correct": "cup",
    "choices": [
      "hm",
      "fine",
      "cup",
      "wool"
    ]
  },
  {
    "question": "die Taste, -n",
    "correct": "key (on a keyboard)",
    "choices": [
      "win, victory",
      "grill",
      "key (on a keyboard)",
      "employee"
    ]
  },
  {
    "question": "die Tastatur, -en",
    "correct": "keyboard",
    "choices": [
      "history",
      "sweet",
      "keyboard",
      "postman"
    ]
  },
  {
    "question": "die Tat, -en",
    "correct": "act, deed, action",
    "choices": [
      "act, deed, action",
      "trunk",
      "thief",
      "immigrant background"
    ]
  },
  {
    "question": "der Täter, -",
    "correct": "perpetrator, culprit",
    "choices": [
      "perpetrator, culprit",
      "battery",
      "continuation, follow up",
      "knee"
    ]
  },
  {
    "question": "die Tätigkeit, -en",
    "correct": "activity",
    "choices": [
      "act, deed, action",
      "pedestrian area",
      "activity",
      "foot"
    ]
  },
  {
    "question": "das Taxi, -s",
    "correct": "taxi",
    "choices": [
      "driving school",
      "taxi",
      "distress, need",
      "sack"
    ]
  },
  {
    "question": "das Team, -s",
    "correct": "team",
    "choices": [
      "team",
      "leg",
      "conversation, discussion",
      "grandchild"
    ]
  },
  {
    "question": "die Technik, -en",
    "correct": "technology, technique",
    "choices": [
      "part-time",
      "newspaper",
      "technology, technique",
      "souvenir"
    ]
  },
  {
    "question": "der Tee, -s",
    "correct": "tea",
    "choices": [
      "lip",
      "nature",
      "advertisment",
      "tea"
    ]
  },
  {
    "question": "der Teil, -e",
    "correct": "part",
    "choices": [
      "ticket (parking)",
      "coffee",
      "part",
      "idea"
    ]
  },
  {
    "question": "die Teilzeit, -en",
    "correct": "part-time",
    "choices": [
      "part-time",
      "cleaning",
      "quality",
      "guest"
    ]
  },
  {
    "question": "die Teilnahme, -n",
    "correct": "participation",
    "choices": [
      "note",
      "participation",
      "actor",
      "muscician"
    ]
  },
  {
    "question": "der Teilnehmer, -",
    "correct": "participant",
    "choices": [
      "balcony",
      "tip",
      "participant",
      "stain, patch"
    ]
  },
  {
    "question": "das Telefon, -e",
    "correct": "telephone",
    "choices": [
      "(computer) drive, running gear",
      "telephone",
      "stop(ping place)",
      "security"
    ]
  },
  {
    "question": "der Teller, -",
    "correct": "plate",
    "choices": [
      "mum",
      "hammer",
      "plate",
      "cup"
    ]
  },
  {
    "question": "die Temperatur, -en",
    "correct": "temperature",
    "choices": [
      "exception",
      "profit",
      "motorway",
      "temperature"
    ]
  },
  {
    "question": "das Tempo (Sg.)",
    "correct": "speed",
    "choices": [
      "dustbin",
      "speed",
      "part-time",
      "pocket money"
    ]
  },
  {
    "question": "das Tennis (Sg.)",
    "correct": "tennis",
    "choices": [
      "potato",
      "tennis",
      "cloakroom",
      "series"
    ]
  },
  {
    "question": "der Teppich, -e",
    "correct": "carpet",
    "choices": [
      "mountain",
      "photo",
      "future",
      "carpet"
    ]
  },
  {
    "question": "der Termin, -e",
    "correct": "appointment",
    "choices": [
      "appointment",
      "weather",
      "disappointment",
      "warmth"
    ]
  },
  {
    "question": "die Terrasse, -n",
    "correct": "terrace",
    "choices": [
      "wind",
      "incidence, idea",
      "connection (TV, internet)",
      "terrace"
    ]
  },
  {
    "question": "der Test, -s",
    "correct": "test",
    "choices": [
      "ground",
      "firm",
      "test",
      "dispensing machine"
    ]
  },
  {
    "question": "der Text, -e",
    "correct": "text",
    "choices": [
      "loss, casualty",
      "freetime",
      "table, blackboard",
      "text"
    ]
  },
  {
    "question": "das Theater, -",
    "correct": "theatre",
    "choices": [
      "roof",
      "ton",
      "theatre",
      "slice, pane (of glass)"
    ]
  },
  {
    "question": "das Thema, die Themen",
    "correct": "subject, theme",
    "choices": [
      "zoo",
      "pepper",
      "dream",
      "subject, theme"
    ]
  },
  {
    "question": "die Therapie, -n",
    "correct": "therapy",
    "choices": [
      "therapy",
      "television",
      "leg",
      "costs"
    ]
  },
  {
    "question": "das Ticket, -s",
    "correct": "ticket",
    "choices": [
      "nail",
      "needle",
      "ticket",
      "distress, need"
    ]
  },
  {
    "question": "das Tier, -e",
    "correct": "animal",
    "choices": [
      "regulations, rules, instructions",
      "animal",
      "sack",
      "patience"
    ]
  },
  {
    "question": "das Haustier, -e",
    "correct": "pet, domestic animal",
    "choices": [
      "trainer, coach",
      "pet, domestic animal",
      "couple",
      "fine"
    ]
  },
  {
    "question": "der Tierpark, -s",
    "correct": "zoo, animal park",
    "choices": [
      "health",
      "career",
      "zoo, animal park",
      "grass"
    ]
  },
  {
    "question": "der Tipp, -s",
    "correct": "tip",
    "choices": [
      "airport",
      "tip",
      "ointment",
      "film"
    ]
  },
  {
    "question": "der Tisch, -e",
    "correct": "table",
    "choices": [
      "table",
      "piece of advice",
      "opening",
      "material, cloth"
    ]
  },
  {
    "question": "der Titel, -",
    "correct": "title",
    "choices": [
      "title",
      "jewellery",
      "mirror",
      "stadium"
    ]
  },
  {
    "question": "die Tochter, -\"",
    "correct": "daughter",
    "choices": [
      "fluid",
      "daughter",
      "patient",
      "payment"
    ]
  },
  {
    "question": "der Tod, -e",
    "correct": "death",
    "choices": [
      "asylum",
      "death",
      "discount",
      "start"
    ]
  },
  {
    "question": "die Toilette, -n",
    "correct": "toilet",
    "choices": [
      "delivery",
      "ear",
      "mountain",
      "toilet"
    ]
  },
  {
    "question": "die Tomate, -n",
    "correct": "tomato",
    "choices": [
      "car",
      "hunger",
      "box, bag",
      "tomato"
    ]
  },
  {
    "question": "die Tonne, -n",
    "correct": "ton",
    "choices": [
      "care insurance",
      "row",
      "ton",
      "cold"
    ]
  },
  {
    "question": "das Top, -s",
    "correct": "top",
    "choices": [
      "top",
      "customs",
      "wound",
      "truth"
    ]
  },
  {
    "question": "der Topf, -\"e",
    "correct": "pot",
    "choices": [
      "camera",
      "increase",
      "pot",
      "reduction"
    ]
  },
  {
    "question": "das Tor, -e",
    "correct": "gate, goal",
    "choices": [
      "gate, goal",
      "meadow",
      "piano",
      "stretch, distance"
    ]
  },
  {
    "question": "der Tote, -n",
    "correct": "dead",
    "choices": [
      "tradition",
      "drink",
      "dead",
      "landlord"
    ]
  },
  {
    "question": "die Tour, -en",
    "correct": "tour",
    "choices": [
      "dream",
      "tour",
      "profit",
      "relative (cousin, etc)"
    ]
  },
  {
    "question": "der Tourismus (Sg.)",
    "correct": "tourism",
    "choices": [
      "wagon, goods van",
      "loss, casualty",
      "tourism",
      "dictionary"
    ]
  },
  {
    "question": "der Tourist, -en",
    "correct": "tourist",
    "choices": [
      "loud speaker",
      "tourist",
      "speed limit",
      "drop"
    ]
  },
  {
    "question": "die Tradition, -en",
    "correct": "tradition",
    "choices": [
      "tradition",
      "nanny",
      "blood",
      "lightning"
    ]
  },
  {
    "question": "der Trainer, -",
    "correct": "trainer, coach",
    "choices": [
      "consideration",
      "embassy",
      "explanation, declaration",
      "trainer, coach"
    ]
  },
  {
    "question": "das Training, -s",
    "correct": "training",
    "choices": [
      "value",
      "garden",
      "training",
      "increase"
    ]
  },
  {
    "question": "der Transport, -e",
    "correct": "transport",
    "choices": [
      "transport",
      "plug",
      "jewellery",
      "fruit"
    ]
  },
  {
    "question": "die Trauung, -en",
    "correct": "wedding",
    "choices": [
      "wedding",
      "pencil",
      "pill",
      "coat, jacket"
    ]
  },
  {
    "question": "der Traum, -\"e / Traum-",
    "correct": "dream",
    "choices": [
      "calculator",
      "sun",
      "dream",
      "door"
    ]
  },
  {
    "question": "der Treffpunkt, -e",
    "correct": "meeting point",
    "choices": [
      "meeting point",
      "present",
      "keyboard",
      "region"
    ]
  },
  {
    "question": "die Trennung, -en",
    "correct": "seperation",
    "choices": [
      "camping",
      "member",
      "seperation",
      "bill"
    ]
  },
  {
    "question": "die Treppe, -n",
    "correct": "stairs, steps",
    "choices": [
      "stairs, steps",
      "handkerchief",
      "payment",
      "country of origin"
    ]
  },
  {
    "question": "das Trinkgeld, -er",
    "correct": "tip",
    "choices": [
      "protest",
      "picnic",
      "tip",
      "insurance card"
    ]
  },
  {
    "question": "der Tropfen, -",
    "correct": "drop",
    "choices": [
      "drop",
      "return journey",
      "reservation",
      "workplace, job, place of work"
    ]
  },
  {
    "question": "das T-Shirt, -s",
    "correct": "t-shirt",
    "choices": [
      "park",
      "salt",
      "task, exercise",
      "t-shirt"
    ]
  },
  {
    "question": "die Tür, -en",
    "correct": "door",
    "choices": [
      "door",
      "description",
      "parents",
      "opera"
    ]
  },
  {
    "question": "der Turm, -\"e",
    "correct": "tower",
    "choices": [
      "tower",
      "explanation, declaration",
      "material, cloth",
      "dining car"
    ]
  },
  {
    "question": "die Tüte, -n",
    "correct": "bag",
    "choices": [
      "bag",
      "SMS",
      "number",
      "effect"
    ]
  },
  {
    "question": "der Typ, -en",
    "correct": "type",
    "choices": [
      "type",
      "width",
      "one way street",
      "winner"
    ]
  },
  {
    "question": "die Übung, -en",
    "correct": "practise",
    "choices": [
      "practise",
      "professor",
      "class",
      "form of address"
    ]
  },
  {
    "question": "die Übernachtung, -en",
    "correct": "sleep over, stay",
    "choices": [
      "sleep over, stay",
      "candle",
      "printer",
      "curve"
    ]
  },
  {
    "question": "die Überraschung,-en",
    "correct": "surprise",
    "choices": [
      "pillow",
      "surprise",
      "Biro",
      "track, trace"
    ]
  },
  {
    "question": "der Übersetzer, -",
    "correct": "translator",
    "choices": [
      "misfortune, bad luck",
      "rain",
      "employer",
      "translator"
    ]
  },
  {
    "question": "die Übersetzung, -en",
    "correct": "translation",
    "choices": [
      "tights",
      "stroll",
      "steak",
      "translation"
    ]
  },
  {
    "question": "die Überstunde, -n",
    "correct": "overtime",
    "choices": [
      "top",
      "participation",
      "episode",
      "overtime"
    ]
  },
  {
    "question": "die Überweisung, - en",
    "correct": "transfer, referral",
    "choices": [
      "modification, change",
      "boots",
      "driving school",
      "transfer, referral"
    ]
  },
  {
    "question": "die Überzeugung, -en",
    "correct": "conviction",
    "choices": [
      "sidewalk",
      "bed",
      "conviction",
      "tiny male chicken"
    ]
  },
  {
    "question": "die Uhr, -en",
    "correct": "hour, time, watch",
    "choices": [
      "hour, time, watch",
      "waiter",
      "switch",
      "firm, concern, plant, operation"
    ]
  },
  {
    "question": "die Umfrage, -n",
    "correct": "poll",
    "choices": [
      "risk",
      "identification",
      "chance",
      "poll"
    ]
  },
  {
    "question": "die Umgebung, -en",
    "correct": "surrounding",
    "choices": [
      "stomach",
      "exercise book",
      "surrounding",
      "card, menu, ticket, map"
    ]
  },
  {
    "question": "die Umleitung, -en",
    "correct": "diversion",
    "choices": [
      "suggestion",
      "diversion",
      "Danger, Attention",
      "library"
    ]
  },
  {
    "question": "die Umwelt, -en",
    "correct": "environment",
    "choices": [
      "music",
      "environment",
      "weather report",
      "criminal"
    ]
  },
  {
    "question": "der Umzug, -\"e",
    "correct": "move, removal",
    "choices": [
      "printer",
      "move, removal",
      "pharmacy",
      "strength"
    ]
  },
  {
    "question": "der Unfall, -\"e",
    "correct": "accident",
    "choices": [
      "registered mail/ post",
      "accident",
      "future",
      "end of the working day"
    ]
  },
  {
    "question": "das Unglück, -e",
    "correct": "misfortune, bad luck",
    "choices": [
      "misfortune, bad luck",
      "hour, time, watch",
      "rose",
      "citizen"
    ]
  },
  {
    "question": "die Unterhaltung, -en",
    "correct": "entertainment, amusement",
    "choices": [
      "entertainment, amusement",
      "tea",
      "sack",
      "sugar"
    ]
  },
  {
    "question": "die Unterkunft, -\"e",
    "correct": "accomodation",
    "choices": [
      "boy",
      "accomodation",
      "integration",
      "delivery"
    ]
  },
  {
    "question": "die Unterlagen (Pl.)",
    "correct": "documents",
    "choices": [
      "writing desk",
      "documents",
      "fun",
      "fire brigade"
    ]
  },
  {
    "question": "der Unterricht, -e",
    "correct": "lesson",
    "choices": [
      "ski",
      "physics",
      "lesson",
      "photo"
    ]
  },
  {
    "question": "der Unterschied, -e",
    "correct": "difference",
    "choices": [
      "conversation, discussion",
      "difference",
      "camp",
      "meadow"
    ]
  },
  {
    "question": "die Unterschrift, -en",
    "correct": "signature",
    "choices": [
      "signature",
      "sleep over, stay",
      "jeans",
      "steak"
    ]
  },
  {
    "question": "die Unterstützung, -en",
    "correct": "support",
    "choices": [
      "door bell",
      "support",
      "beginning",
      "formular"
    ]
  },
  {
    "question": "die Untersuchung, -en",
    "correct": "examination, investigation, inquiry",
    "choices": [
      "examination, investigation, inquiry",
      "practise",
      "dog",
      "workshop, garage"
    ]
  },
  {
    "question": "der Urlaub, -e",
    "correct": "holiday",
    "choices": [
      "holiday",
      "death",
      "consignment, programme, transmission",
      "plum"
    ]
  },
  {
    "question": "die Ursache, -n",
    "correct": "cause",
    "choices": [
      "pain",
      "top",
      "aunt",
      "cause"
    ]
  },
  {
    "question": "das Urteil, -e",
    "correct": "judgement, sentence",
    "choices": [
      "day care center",
      "suspicion",
      "judgement, sentence",
      "difference"
    ]
  },
  {
    "question": "der Vater, -\"",
    "correct": "father",
    "choices": [
      "leader, head",
      "farm",
      "commune, shared flat",
      "father"
    ]
  },
  {
    "question": "die Veranstaltung, -en",
    "correct": "event, function",
    "choices": [
      "event, function",
      "further education",
      "speed limit",
      "humor"
    ]
  },
  {
    "question": "die Verantwortung, -en",
    "correct": "responsibility",
    "choices": [
      "meeting point",
      "task, exercise",
      "responsibility",
      "neighbours"
    ]
  },
  {
    "question": "das Verbot, -e",
    "correct": "prohibition, ban",
    "choices": [
      "figure",
      "prohibition, ban",
      "schnitzel",
      "strike"
    ]
  },
  {
    "question": "der Verband, -\"e",
    "correct": "association",
    "choices": [
      "flu",
      "furniture",
      "association",
      "conditions, terms"
    ]
  },
  {
    "question": "die Verbindung, -en",
    "correct": "connection",
    "choices": [
      "snow",
      "connection",
      "cook",
      "jam"
    ]
  },
  {
    "question": "der Verbraucher, -",
    "correct": "consumer",
    "choices": [
      "prohibition, ban",
      "fine",
      "consumer",
      "kiss"
    ]
  },
  {
    "question": "der Verbrecher, -",
    "correct": "criminal",
    "choices": [
      "conditions, terms",
      "timetable",
      "criminal",
      "word"
    ]
  },
  {
    "question": "der Verdacht, -\"e",
    "correct": "suspicion",
    "choices": [
      "soup",
      "father",
      "idea",
      "suspicion"
    ]
  },
  {
    "question": "der Verein, -e",
    "correct": "club, association",
    "choices": [
      "credit, loan",
      "reform",
      "product",
      "club, association"
    ]
  },
  {
    "question": "das Verfallsdatum, die Verfallsdaten",
    "correct": "expiry date",
    "choices": [
      "mistake",
      "truth",
      "near, proximity, vicinity",
      "expiry date"
    ]
  },
  {
    "question": "die Vergangenheit, -en",
    "correct": "the past",
    "choices": [
      "body",
      "the past",
      "corner",
      "contents"
    ]
  },
  {
    "question": "der Vergleich, -e",
    "correct": "comparison",
    "choices": [
      "factory",
      "comparison",
      "struggle, fight",
      "hm"
    ]
  },
  {
    "question": "das Verhalten, -",
    "correct": "behaviour",
    "choices": [
      "behaviour",
      "moment",
      "wind",
      "machine"
    ]
  },
  {
    "question": "das Verhältnis, -se",
    "correct": "relationship",
    "choices": [
      "bath",
      "relationship",
      "leaflet, brochure",
      "margarine"
    ]
  },
  {
    "question": "der Verkäufer, -",
    "correct": "seller, salesman",
    "choices": [
      "registered mail/ post",
      "seller, salesman",
      "jazz",
      "pear"
    ]
  },
  {
    "question": "der Verkehr, -e",
    "correct": "traffic",
    "choices": [
      "football",
      "traffic",
      "mobile telephone",
      "farmer"
    ]
  },
  {
    "question": "das Verkehrsmittel, -",
    "correct": "transport",
    "choices": [
      "transport",
      "fear",
      "bank",
      "catalogue"
    ]
  },
  {
    "question": "die Verletzung, -en",
    "correct": "injury",
    "choices": [
      "injury",
      "hard disk",
      "exam, test",
      "door bell"
    ]
  },
  {
    "question": "der Verlust, -e",
    "correct": "loss, casualty",
    "choices": [
      "flour",
      "stadium",
      "loss, casualty",
      "game"
    ]
  },
  {
    "question": "der Vermieter, -",
    "correct": "landlord",
    "choices": [
      "bank code number",
      "landlord",
      "pharmacy",
      "circle"
    ]
  },
  {
    "question": "die Vermittlung, -en",
    "correct": "agency",
    "choices": [
      "agency",
      "marital status",
      "idea, suspicion",
      "tiny male chicken"
    ]
  },
  {
    "question": "die Versichertenkarte, -n",
    "correct": "insurance card",
    "choices": [
      "insurance card",
      "shop",
      "contact",
      "tree"
    ]
  },
  {
    "question": "die Versicherung, -en",
    "correct": "insurance",
    "choices": [
      "object",
      "Department",
      "insurance",
      "line"
    ]
  },
  {
    "question": "die Verspätung, -en",
    "correct": "delay",
    "choices": [
      "delay",
      "boy",
      "heat",
      "colleague"
    ]
  },
  {
    "question": "das Verständnis, -se",
    "correct": "understanding",
    "choices": [
      "potato",
      "sky",
      "understanding",
      "translator"
    ]
  },
  {
    "question": "der Versuch, -e",
    "correct": "attempt, experiment",
    "choices": [
      "firm, concern, plant, operation",
      "attempt, experiment",
      "blood",
      "end"
    ]
  },
  {
    "question": "der Vertrag, -\"e",
    "correct": "contract",
    "choices": [
      "vinegar",
      "work, job",
      "public holiday",
      "contract"
    ]
  },
  {
    "question": "das Vertrauen (Sg.)",
    "correct": "trust",
    "choices": [
      "letter box",
      "hole",
      "trust",
      "carer, nurse, orderly"
    ]
  },
  {
    "question": "der Vertreter, -",
    "correct": "cover, replacement",
    "choices": [
      "north",
      "the hand",
      "cover, replacement",
      "swimming pool"
    ]
  },
  {
    "question": "die Vertretung, -en",
    "correct": "representation, advocacy",
    "choices": [
      "nose",
      "representation, advocacy",
      "head, boss",
      "memory"
    ]
  },
  {
    "question": "die Verwaltung, -en",
    "correct": "management, administration",
    "choices": [
      "management, administration",
      "curve",
      "cleaning",
      "current account"
    ]
  },
  {
    "question": "der Verwandte, -n",
    "correct": "relative, relation",
    "choices": [
      "fault",
      "professional",
      "relative, relation",
      "beach"
    ]
  },
  {
    "question": "die Verzeihung (Sg.)",
    "correct": "forgiveness",
    "choices": [
      "move, removal",
      "sight",
      "exhaust, waste gas",
      "forgiveness"
    ]
  },
  {
    "question": "das Visum, die Visa",
    "correct": "visa",
    "choices": [
      "box, bag",
      "visa",
      "law",
      "playground"
    ]
  },
  {
    "question": "das Vitamin, -e",
    "correct": "vitamin",
    "choices": [
      "admission, approval",
      "vitamin",
      "conversation, discussion",
      "specialist"
    ]
  },
  {
    "question": "der Vogel, -\"",
    "correct": "bird",
    "choices": [
      "bird",
      "row",
      "receipt",
      "bakery"
    ]
  },
  {
    "question": "die Vollzeit, -en",
    "correct": "full time",
    "choices": [
      "youth welfare office",
      "ice cream",
      "full time",
      "sofa"
    ]
  },
  {
    "question": "die Vorbereitung, -en",
    "correct": "preparation",
    "choices": [
      "knowledge",
      "deadline",
      "preparation",
      "cash"
    ]
  },
  {
    "question": "die Vorfahrt, -en",
    "correct": "right of way",
    "choices": [
      "post",
      "account",
      "non-smoker",
      "right of way"
    ]
  },
  {
    "question": "der Vorschlag, -\"e",
    "correct": "suggestion",
    "choices": [
      "application",
      "smoker",
      "cosmetics",
      "suggestion"
    ]
  },
  {
    "question": "die Vorschrift, -en",
    "correct": "regulations, rules, instructions",
    "choices": [
      "sock",
      "dog",
      "regulations, rules, instructions",
      "monitor"
    ]
  },
  {
    "question": "die Vorsicht (Sg.)",
    "correct": "caution, care",
    "choices": [
      "claim",
      "caution, care",
      "machine",
      "head, boss"
    ]
  },
  {
    "question": "die Vorstellung, -en",
    "correct": "performance, introduction",
    "choices": [
      "orange",
      "floor",
      "weather",
      "performance, introduction"
    ]
  },
  {
    "question": "der Vorteil, -e",
    "correct": "advantage",
    "choices": [
      "advantage",
      "butter",
      "light",
      "potato"
    ]
  },
  {
    "question": "die Vorwahl, -en",
    "correct": "preliminary election",
    "choices": [
      "security",
      "current (electricity)",
      "studies",
      "preliminary election"
    ]
  },
  {
    "question": "der Vorwurf, -\"e",
    "correct": "reproach",
    "choices": [
      "(computer) drive, running gear",
      "reproach",
      "stay, delay, stop",
      "ox, cow, beef"
    ]
  },
  {
    "question": "der Wagen, -\"",
    "correct": "wagon, goods van",
    "choices": [
      "apology",
      "jazz",
      "wagon, goods van",
      "opportunity"
    ]
  },
  {
    "question": "die Wahl, -en",
    "correct": "choice",
    "choices": [
      "choice",
      "youth",
      "tiny female chicken",
      "modification, change"
    ]
  },
  {
    "question": "die Wahrheit, -en",
    "correct": "truth",
    "choices": [
      "starter",
      "truth",
      "storm",
      "chain"
    ]
  },
  {
    "question": "der Wald, -\"er",
    "correct": "forest",
    "choices": [
      "step",
      "coin",
      "environment",
      "forest"
    ]
  },
  {
    "question": "die Wand, -\"e",
    "correct": "wall",
    "choices": [
      "cafe",
      "current (electricity)",
      "wall",
      "writing desk"
    ]
  },
  {
    "question": "die Wanderung, -en",
    "correct": "walk, trek",
    "choices": [
      "plant",
      "walk, trek",
      "order, invitation",
      "school"
    ]
  },
  {
    "question": "die Ware, -n",
    "correct": "goods",
    "choices": [
      "knee",
      "reaction",
      "flour",
      "goods"
    ]
  },
  {
    "question": "die Wärme (Sg.)",
    "correct": "warmth",
    "choices": [
      "firm",
      "leaf, sheet",
      "warmth",
      "cake"
    ]
  },
  {
    "question": "die Wäsche (Pl.)",
    "correct": "washing",
    "choices": [
      "expenses, output, distribution",
      "washing",
      "culture",
      "conditions, terms"
    ]
  },
  {
    "question": "das Waschmittel, -",
    "correct": "detergent",
    "choices": [
      "bread",
      "detergent",
      "language",
      "thirst"
    ]
  },
  {
    "question": "das Wasser, -\"",
    "correct": "water",
    "choices": [
      "water",
      "stone",
      "part-time",
      "park"
    ]
  },
  {
    "question": "das WC, -s",
    "correct": "toilet (short for Wasserklossett)",
    "choices": [
      "announcement (radio)",
      "director",
      "cloakroom",
      "toilet (short for Wasserklossett)"
    ]
  },
  {
    "question": "der Wecker, -",
    "correct": "alarm",
    "choices": [
      "letter (of the alphabet)",
      "intention",
      "alarm",
      "salad"
    ]
  },
  {
    "question": "der Weg, -e",
    "correct": "way",
    "choices": [
      "way",
      "emergency",
      "danger",
      "journey, voyage"
    ]
  },
  {
    "question": "der Wein, -e",
    "correct": "wine",
    "choices": [
      "series",
      "suit",
      "wine",
      "underground train"
    ]
  },
  {
    "question": "die Weiterbildung, -en",
    "correct": "further education",
    "choices": [
      "further education",
      "playground",
      "half",
      "toy"
    ]
  },
  {
    "question": "die Welt, -en",
    "correct": "world",
    "choices": [
      "translation",
      "warmth",
      "married couple",
      "world"
    ]
  },
  {
    "question": "der Weltmeister, -",
    "correct": "world champion",
    "choices": [
      "trousers",
      "tariff",
      "wheel, bike",
      "world champion"
    ]
  },
  {
    "question": "die Weltmeisterschaft, -en",
    "correct": "world cup",
    "choices": [
      "world cup",
      "area",
      "school graduation exam",
      "job"
    ]
  },
  {
    "question": "die Werbung, -en",
    "correct": "advertisment",
    "choices": [
      "weather report",
      "parking meter",
      "advertisment",
      "marrige"
    ]
  },
  {
    "question": "das Werk, -e",
    "correct": "work, job",
    "choices": [
      "sex, gender",
      "immigrant",
      "passenger",
      "work, job"
    ]
  },
  {
    "question": "die Werkstatt, -\"en",
    "correct": "workshop, garage",
    "choices": [
      "mushroom",
      "flower",
      "choice",
      "workshop, garage"
    ]
  },
  {
    "question": "das Werkzeug, -e",
    "correct": "tools",
    "choices": [
      "semester",
      "public",
      "tools",
      "tree"
    ]
  },
  {
    "question": "der Wert, -e",
    "correct": "value",
    "choices": [
      "exhaust, waste gas",
      "maiden name",
      "value",
      "court"
    ]
  },
  {
    "question": "der Westen, West, West- (Sg.)",
    "correct": "west",
    "choices": [
      "west",
      "curve, arch, bow",
      "quality",
      "shoulder"
    ]
  },
  {
    "question": "der Wettbewerb, -e",
    "correct": "competition",
    "choices": [
      "start",
      "professor",
      "shelf",
      "competition"
    ]
  },
  {
    "question": "das Wetter (Sg.)",
    "correct": "weather",
    "choices": [
      "detergent",
      "suspicion",
      "right of way",
      "weather"
    ]
  },
  {
    "question": "der Wetterbericht, -e",
    "correct": "weather report",
    "choices": [
      "weather report",
      "upstairs, upper floor",
      "law",
      "state"
    ]
  },
  {
    "question": "die Wiese, -n",
    "correct": "meadow",
    "choices": [
      "noise",
      "impression",
      "admission, approval",
      "meadow"
    ]
  },
  {
    "question": "der Wind, -e",
    "correct": "wind",
    "choices": [
      "button",
      "wind",
      "agreement",
      "fuel station"
    ]
  },
  {
    "question": "die Wirkung, -en",
    "correct": "effect",
    "choices": [
      "temperature",
      "effect",
      "uncle",
      "vitamin"
    ]
  },
  {
    "question": "die Wirklichkeit, -en",
    "correct": "reality",
    "choices": [
      "win, victory",
      "perfume",
      "balcony",
      "reality"
    ]
  },
  {
    "question": "der Wirt, -e",
    "correct": "landlord",
    "choices": [
      "measure",
      "landlord",
      "up bringing, education",
      "fairytale"
    ]
  },
  {
    "question": "die Wirtschaft, -en",
    "correct": "economics",
    "choices": [
      "capital city",
      "heat",
      "economics",
      "majority"
    ]
  },
  {
    "question": "der Witz, -e",
    "correct": "joe",
    "choices": [
      "joe",
      "conditions, terms",
      "letter box",
      "report"
    ]
  },
  {
    "question": "das Wohngeld, -er",
    "correct": "housing money, housing allowance",
    "choices": [
      "situation",
      "judge",
      "current (electricity)",
      "housing money, housing allowance"
    ]
  },
  {
    "question": "die Wohngemeinschaft, -en",
    "correct": "commune, shared flat",
    "choices": [
      "commune, shared flat",
      "magazine",
      "cold",
      "risk"
    ]
  },
  {
    "question": "die Wohnung, -en",
    "correct": "flat, apartment",
    "choices": [
      "opera",
      "wife",
      "flat, apartment",
      "mood"
    ]
  },
  {
    "question": "das Wohnungsamt, -\"er",
    "correct": "housing office",
    "choices": [
      "housing office",
      "stove",
      "ship",
      "step"
    ]
  },
  {
    "question": "das Wohnzimmer, -",
    "correct": "living room",
    "choices": [
      "half board",
      "preliminary election",
      "team",
      "living room"
    ]
  },
  {
    "question": "die Wolke, -n",
    "correct": "cloud",
    "choices": [
      "cyclist",
      "cloud",
      "baby sitter",
      "judge"
    ]
  },
  {
    "question": "die Wolle, -n",
    "correct": "wool",
    "choices": [
      "casualty department",
      "difference",
      "wool",
      "semester"
    ]
  },
  {
    "question": "das Wort, -\"er / das Wort, -e",
    "correct": "word",
    "choices": [
      "event, function",
      "cheese",
      "park",
      "word"
    ]
  },
  {
    "question": "das Wörterbuch, -\"er",
    "correct": "dictionary",
    "choices": [
      "table",
      "key",
      "dictionary",
      "people"
    ]
  },
  {
    "question": "die Wunde, -n",
    "correct": "wound",
    "choices": [
      "connection, relationship",
      "secret",
      "wound",
      "ambulance"
    ]
  },
  {
    "question": "das Wunder, -",
    "correct": "wonder",
    "choices": [
      "wonder",
      "heating",
      "adult",
      "plum"
    ]
  },
  {
    "question": "der Wunsch, -\"e",
    "correct": "wish",
    "choices": [
      "association",
      "sugar",
      "invitation",
      "wish"
    ]
  },
  {
    "question": "die Wurst, -\"e",
    "correct": "sausage",
    "choices": [
      "reproach",
      "cake",
      "soap",
      "sausage"
    ]
  },
  {
    "question": "die Zahl, -en",
    "correct": "number",
    "choices": [
      "room",
      "shape",
      "number",
      "rubbish, trash"
    ]
  },
  {
    "question": "die Zahlung, -en",
    "correct": "payment",
    "choices": [
      "garage",
      "truck (short for der Lastkraftwagen)",
      "cook",
      "payment"
    ]
  },
  {
    "question": "der Zahn, -\"e",
    "correct": "tooth",
    "choices": [
      "hour, time, watch",
      "petrol (uk), gas (us)",
      "tooth",
      "emergency call"
    ]
  },
  {
    "question": "die Zahnpasta / die Zahncreme, -en / -n",
    "correct": "toothpaste",
    "choices": [
      "suitcase",
      "hammer",
      "toothpaste",
      "practice"
    ]
  },
  {
    "question": "das Zeichen, -",
    "correct": "sign",
    "choices": [
      "banana",
      "sign",
      "old people's home, retirement home",
      "beginning"
    ]
  },
  {
    "question": "das Verkehrszeichen, -",
    "correct": "street sign",
    "choices": [
      "street sign",
      "jam",
      "market",
      "Illustration"
    ]
  },
  {
    "question": "die Zeit, -en",
    "correct": "time",
    "choices": [
      "rest, peace, quiet",
      "domicile",
      "special care",
      "time"
    ]
  },
  {
    "question": "die Zeitarbeit, -en",
    "correct": "temporary work",
    "choices": [
      "trashcan, waste basket",
      "piano",
      "temporary work",
      "intention"
    ]
  },
  {
    "question": "der Zeitpunkt, -e",
    "correct": "point in time",
    "choices": [
      "point in time",
      "Nursery school",
      "registry office",
      "wine"
    ]
  },
  {
    "question": "die Zeitschrift, -en",
    "correct": "magazine",
    "choices": [
      "order, tidiness",
      "magazine",
      "brush",
      "picture, recording, admission"
    ]
  },
  {
    "question": "die Zeitung, -en",
    "correct": "newspaper",
    "choices": [
      "majority",
      "newspaper",
      "preparation",
      "scissors"
    ]
  },
  {
    "question": "das Zelt, -e",
    "correct": "tent",
    "choices": [
      "petrol (uk), gas (us)",
      "tent",
      "sea",
      "young person, teenager"
    ]
  },
  {
    "question": "das Zentrum, die Zentren",
    "correct": "centre",
    "choices": [
      "sister",
      "centre",
      "hotel",
      "tights"
    ]
  },
  {
    "question": "das Zertifikat, -e",
    "correct": "certificate",
    "choices": [
      "certificate",
      "accomodation",
      "television",
      "place"
    ]
  },
  {
    "question": "der Zettel, -",
    "correct": "note",
    "choices": [
      "capital city",
      "ambulance",
      "overtime",
      "note"
    ]
  },
  {
    "question": "das Zeug (Sg.) / -zeug",
    "correct": "stuff, gear",
    "choices": [
      "coincidence",
      "age",
      "stuff, gear",
      "stroll"
    ]
  },
  {
    "question": "der Zeuge, -n",
    "correct": "witness",
    "choices": [
      "representation, advocacy",
      "purpose, aim",
      "witness",
      "circle"
    ]
  },
  {
    "question": "das Zeugnis, -se",
    "correct": "certificate, report, reference",
    "choices": [
      "patience",
      "certificate, report, reference",
      "blouse",
      "edge"
    ]
  },
  {
    "question": "das Ziel, -e",
    "correct": "goal, aim",
    "choices": [
      "salon",
      "task, exercise",
      "goal, aim",
      "sentence"
    ]
  },
  {
    "question": "die Zigarette, -n",
    "correct": "cigarette",
    "choices": [
      "cigarette",
      "envelope",
      "lost property office",
      "measure"
    ]
  },
  {
    "question": "das Zimmer, -",
    "correct": "room",
    "choices": [
      "room",
      "stop",
      "hospital",
      "pensioner"
    ]
  },
  {
    "question": "die Zinsen (Pl.)",
    "correct": "interest",
    "choices": [
      "radio",
      "quarter",
      "interest",
      "institute"
    ]
  },
  {
    "question": "die Zitrone, -n",
    "correct": "lemon",
    "choices": [
      "fish",
      "sack",
      "width",
      "lemon"
    ]
  },
  {
    "question": "der Zoll, -\"e",
    "correct": "customs",
    "choices": [
      "cash",
      "customs",
      "roof",
      "town hall"
    ]
  },
  {
    "question": "die Zone, -n",
    "correct": "zone",
    "choices": [
      "zone",
      "apricot",
      "authorities",
      "career"
    ]
  },
  {
    "question": "der Zoo, -s",
    "correct": "zoo",
    "choices": [
      "contents",
      "poison",
      "project",
      "zoo"
    ]
  },
  {
    "question": "der Zucker, -",
    "correct": "sugar",
    "choices": [
      "rose",
      "record",
      "community office",
      "sugar"
    ]
  },
  {
    "question": "der Zufall, -\"e",
    "correct": "coincidence",
    "choices": [
      "mountain",
      "woman",
      "coincidence",
      "jam"
    ]
  },
  {
    "question": "das Zuhause, -",
    "correct": "home",
    "choices": [
      "clinic",
      "connection, relationship",
      "landline",
      "home"
    ]
  },
  {
    "question": "der Zuhörer, -",
    "correct": "listener",
    "choices": [
      "sausage",
      "end of the working day",
      "listener",
      "registered mail/ post"
    ]
  },
  {
    "question": "die Zukunft (Sg.)",
    "correct": "future",
    "choices": [
      "society",
      "future",
      "work permit",
      "amount, sum"
    ]
  },
  {
    "question": "die Zulassung, -en",
    "correct": "admission, approval",
    "choices": [
      "admission, approval",
      "bank code number",
      "secretary",
      "noodle"
    ]
  },
  {
    "question": "die Zusammenarbeit (Sg.)",
    "correct": "team work, collaboration",
    "choices": [
      "team work, collaboration",
      "sleep over, stay",
      "parking meter",
      "vegetables"
    ]
  },
  {
    "question": "der Zuschauer, -",
    "correct": "spectator",
    "choices": [
      "spectator",
      "letter",
      "downtown",
      "data folder"
    ]
  },
  {
    "question": "der Zustand, -\"e",
    "correct": "condition",
    "choices": [
      "condition",
      "switch",
      "goods",
      "club"
    ]
  },
  {
    "question": "die Zustimmung, -en",
    "correct": "agreement",
    "choices": [
      "radio",
      "lost property office",
      "student",
      "agreement"
    ]
  },
  {
    "question": "der Zuwanderer, -",
    "correct": "immigrant",
    "choices": [
      "immigrant",
      "fairytale",
      "alphabet",
      "pressure"
    ]
  },
  {
    "question": "der Zweck, -e",
    "correct": "purpose, aim",
    "choices": [
      "purpose, aim",
      "fee",
      "thirst",
      "leader, head"
    ]
  },
  {
    "question": "die Zwiebel, -n",
    "correct": "onion",
    "choices": [
      "connection (TV, internet)",
      "onion",
      "nanny",
      "call"
    ]
  }
];