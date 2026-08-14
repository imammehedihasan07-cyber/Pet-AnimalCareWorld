// Pet & Animal Care World - Search Index
const searchIndex = [
    // --- ENGLISH: DOGS ---
    {
        title: "Puppy Training Guide: Socialization & Housebreaking",
        description: "Learn proven positive reinforcement techniques for housebreaking and socializing your new puppy.",
        url: "/en/dogs/puppy-training-guide.html",
        language: "en",
        category: "Dogs"
    },
    {
        title: "Dog Skin & Coat Care: How to Prevent Hair Fall",
        description: "Learn expert tips on preventing dog hair fall, managing dandruff, and maintaining a shiny coat.",
        url: "/en/dogs/dog-skin-coat-care.html",
        language: "en",
        category: "Dogs"
    },
    {
        title: "Foods Dogs Can and Cannot Eat: A Safety Guide",
        description: "Discover safe human foods and dangerous toxic items to avoid in your dog's diet.",
        url: "/en/dogs/food-safety-guide.html",
        language: "en",
        category: "Dogs"
    },

    // --- ENGLISH: CATS ---
    {
        title: "Kitten Feeding Guide: Nutrition by Age",
        description: "A complete feeding schedule and nutritional guide for growing kittens.",
        url: "/en/cats/kitten-feeding-guide.html",
        language: "en",
        category: "Cats"
    },
    {
        title: "Pregnant Cat Care & Nesting Guide",
        description: "Essential care, nutrition, and labor signs for expecting mother cats.",
        url: "/en/cats/pregnant-cat-care.html",
        language: "en",
        category: "Cats"
    },
    {
        title: "Why Is My Cat Vomiting? Causes & Solutions",
        description: "Learn common causes of cat vomiting and when to seek emergency veterinary care.",
        url: "/en/cats/cat-vomiting-guide.html",
        language: "en",
        category: "Cats"
    },
    {
        title: "How to Litter Box Train Your Cat",
        description: "Step-by-step guide to teaching your cat stress-free litter box habits.",
        url: "/en/cats/litter-box-training.html",
        language: "en",
        category: "Cats"
    },

    // --- ENGLISH: BIRDS & SMALL PETS ---
    {
        title: "Beginner's Budgie Care Guide",
        description: "Essential diet, cage sizing, seed mixtures, and health tips for Parakeets & Budgies.",
        url: "/en/birds-small-pets/budgie-care-guide.html",
        language: "en",
        category: "Birds & Small Pets"
    },
    {
        title: "Complete Rabbit Care, Diet, and Housing Guide",
        description: "Expert advice on proper hay-based diets, safe housing, and health maintenance.",
        url: "/en/birds-small-pets/rabbit-care-guide.html",
        language: "en",
        category: "Birds & Small Pets"
    },
    {
        title: "Why Won't My Bird Talk? Training & Bonding Guide",
        description: "Discover gentle training techniques to bond with your pet bird and teach them to speak.",
        url: "/en/birds-small-pets/talking-bird-training-guide.html",
        language: "en",
        category: "Birds & Small Pets"
    },

    // --- ENGLISH: VETERINARY HEALTH ---
    {
        title: "Essential Dog & Cat Vaccination Schedule Guide",
        description: "Core and lifestyle immunizations to protect your pets from fatal viral diseases.",
        url: "/en/veterinary-health/pet-vaccination-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Pet Heat Stroke: Symptoms, First Aid & Prevention",
        description: "Recognize early signs of overheating and learn emergency cooling steps for pets.",
        url: "/en/veterinary-health/heat-stroke-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Common Diseases in Cows & Cattle: Prevention & Treatment",
        description: "Comprehensive guide on bloat, mastitis, FMD, and general farm biosecurity.",
        url: "/en/veterinary-health/cow-cattle-health-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Goat Care, Feeding, and Disease Prevention Guide",
        description: "Expert advice on proper housing, nutrition, and PPR prevention for small ruminants.",
        url: "/en/veterinary-health/goat-care-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Basic Horse Care, Nutrition, and Stable Management",
        description: "Beginner's guide to equine nutrition, stable hygiene, hoof care, and colic awareness.",
        url: "/en/veterinary-health/horse-care-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Pregnant Cow Care & Calving Management Guide",
        description: "Nutritional needs during gestation, dry period management, and emergency calving care.",
        url: "/en/veterinary-health/pregnant-cow-care-guide.html",
        language: "en",
        category: "Veterinary Health"
    },
    {
        title: "Causes and Treatment of Diarrhea in Goats",
        description: "Learn causes of scours, rehydration steps, and veterinary treatments to save goats.",
        url: "/en/veterinary-health/goat-diarrhea-treatment.html",
        language: "en",
        category: "Veterinary Health"
    },

    // --- BENGALI: DOGS ---
    {
        title: "পাপির প্রশিক্ষণ গাইড: সামাজিকীকরণ ও হাউসব্রেকিং",
        description: "নতুন কুকুরের ছানার ঘরোয়া প্রশিক্ষণ ও সামাজিকীকরণ শেখার গাইড।",
        url: "/bn/dogs/puppy-training-guide.html",
        language: "bn",
        category: "Dogs"
    },
    {
        title: "কুকুরের ত্বক ও পশমের যত্ন: চুল পড়া রোধ করার উপায়",
        description: "চুল পড়া রোধ এবং পশম চকচকে রাখার কার্যকর উপায়।",
        url: "/bn/dogs/dog-skin-coat-care.html",
        language: "bn",
        category: "Dogs"
    },
    {
        title: "কুকুরের নিরাপদ ও বিষাক্ত খাবার: একটি সেফটি গাইড",
        description: "কোন খাবারগুলো নিরাপদ এবং কোনগুলো বিষাক্ত তা জেনে নিন।",
        url: "/bn/dogs/food-safety-guide.html",
        language: "bn",
        category: "Dogs"
    },

    // --- BENGALI: CATS ---
    {
        title: "বিড়ালের ছানার খাবার ও পুষ্টি গাইড",
        description: "বয়স অনুযায়ী বিড়ালের ছানার সঠিক খাদ্যতালিকা ও পুষ্টি গাইড।",
        url: "/bn/cats/kitten-feeding-guide.html",
        language: "bn",
        category: "Cats"
    },
    {
        title: "গর্ভবতী বিড়ালের যত্ন ও পরিচর্যা গাইড",
        description: "মা বিড়ালের গর্ভকালীন পরিচর্যা, পুষ্টি এবং প্রসবের পূর্বলক্ষণ।",
        url: "/bn/cats/pregnant-cat-care.html",
        language: "bn",
        category: "Cats"
    },
    {
        title: "বিড়াল কেন বমি করে? কারণ ও প্রতিকার",
        description: "বিড়াল কেন বমি করে এবং কখন জরুরি ভেট দেখাতে হবে তা জানুন।",
        url: "/bn/cats/cat-vomiting-guide.html",
        language: "bn",
        category: "Cats"
    },
    {
        title: "বিড়ালকে লিটার বক্স ট্রেনিং করানোর নিয়ম",
        description: "সহজে বিড়ালকে লিটার বক্স ব্যবহারে অভ্যস্ত করার ধাপসমূহ।",
        url: "/bn/cats/litter-box-training.html",
        language: "bn",
        category: "Cats"
    },

    // --- BENGALI: BIRDS & SMALL PETS ---
    {
        title: "শিক্ষানবিসদের জন্য বাজিগর পাখির যত্ন গাইড",
        description: "বাজিগর পাখির সঠিক খাবার, খাঁচার মাপ এবং স্বাস্থ্য সুরক্ষা টিপস।",
        url: "/bn/birds-small-pets/budgie-care-guide.html",
        language: "bn",
        category: "Birds & Small Pets"
    },
    {
        title: "খরগোশের যত্ন, খাদ্য তালিকা ও বাসস্থান গাইড",
        description: "খরগোশের নিরাপদ বাসস্থান, ঘাসভিত্তিক খাবার ও স্বাস্থ্য পরিচর্যা।",
        url: "/bn/birds-small-pets/rabbit-care-guide.html",
        language: "bn",
        category: "Birds & Small Pets"
    },
    {
        title: "পোষা পাখি কেন কথা বলে না? প্রশিক্ষণ গাইড",
        description: "পোষা পাখিকে কথা বলা শেখানোর এবং বন্ডিং বাড়ানোর সহজ কৌশল।",
        url: "/bn/birds-small-pets/talking-bird-training-guide.html",
        language: "bn",
        category: "Birds & Small Pets"
    },

    // --- BENGALI: VETERINARY HEALTH ---
    {
        title: "পোষা প্রাণীর টিকাদান শিডিউল গাইড",
        description: "কুকুর ও বিড়ালের মারাত্মক ভাইরাস রোধে প্রয়োজনীয় টিকার তালিকা।",
        url: "/bn/veterinary-health/pet-vaccination-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "পোষ্য প্রাণীর হিট স্ট্রোক: লক্ষণ ও প্রাথমিক চিকিৎসা",
        description: "অতিরিক্ত গরমে পশুপাখির হিট স্ট্রোকের লক্ষণ ও প্রাথমিক চিকিৎসা।",
        url: "/bn/veterinary-health/heat-stroke-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "গরু ও গবাদি পশুর রোগ: প্রতিকার ও চিকিৎসা",
        description: "খামারের গরুর বাদলা, তড়কা, ওলান প্রদাহ ও ব্লাট রোগের গাইড।",
        url: "/bn/veterinary-health/cow-cattle-health-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "ছাগলের যত্ন, পুষ্টি ও রোগ প্রতিরোধ গাইড",
        description: "স্বাস্থ্যসম্মত বাসস্থান, সুষম খাদ্য ও পিপিআর প্রতিরোধ ব্যবস্থা।",
        url: "/bn/veterinary-health/goat-care-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "ঘোড়ার পরিচর্যা, পুষ্টি ও স্টবল ম্যানেজমেন্ট",
        description: "ঘোড়ার পুষ্টি, খুরের যত্ন এবং কোলিক সচেতনতা নিয়ে বিশেষজ্ঞ গাইড।",
        url: "/bn/veterinary-health/horse-care-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "গর্ভবতী গরুর যত্ন ও প্রসব ব্যবস্থাপনা গাইড",
        description: "ড্রাই পিরিয়ড ব্যবস্থাপনা, গর্ভকালীন পুষ্টি এবং প্রসবকালীন জরুরি প্রস্তুতি।",
        url: "/bn/veterinary-health/pregnant-cow-care-guide.html",
        language: "bn",
        category: "Veterinary Health"
    },
    {
        title: "ছাগলের পাতলা পায়খানা ও ডায়রিয়া চিকিৎসা",
        description: "ডায়রিয়ার কারণ, পানিশূন্যতা রোধ এবং জীবন রক্ষাকারী ভেটেরিনারি চিকিৎসা।",
        url: "/bn/veterinary-health/goat-diarrhea-treatment.html",
        language: "bn",
        category: "Veterinary Health"
    },

    // --- HINDI: DOGS ---
    {
        title: "पप्पी ट्रेनिंग गाइड: समाजीकरण और हाउसब्रेकिंग",
        description: "नए पिल्लों की ट्रेनिंग और समाजीकरण के लिए बेहतरीन टिप्स।",
        url: "/hi/dogs/puppy-training-guide.html",
        language: "hi",
        category: "Dogs"
    },
    {
        title: "कुत्तों की त्वचा और कोट की देखभाल",
        description: "बालों के झड़ने को रोकने और चमक बनाए रखने के तरीके।",
        url: "/hi/dogs/dog-skin-coat-care.html",
        language: "hi",
        category: "Dogs"
    },
    {
        title: "कुत्तों के लिए सुरक्षित और जहरीले खाद्य पदार्थ",
        description: "जानें कौन सा भोजन सुरक्षित है और क्या नहीं खिलाना चाहिए।",
        url: "/hi/dogs/food-safety-guide.html",
        language: "hi",
        category: "Dogs"
    },

    // --- HINDI: CATS ---
    {
        title: "बिल्ली के बच्चों का आहार और पोषण गाइड",
        description: "छोटे बच्चों के लिए सही आहार और पोषण का पूरा शेड्यूल।",
        url: "/hi/cats/kitten-feeding-guide.html",
        language: "hi",
        category: "Cats"
    },
    {
        title: "गर्भवती बिल्ली की देखभाल और घोंसला बनाना",
        description: "गर्भवती बिल्ली की देखभाल, पोषण और प्रसव के लक्षण।",
        url: "/hi/cats/pregnant-cat-care.html",
        language: "hi",
        category: "Cats"
    },
    {
        title: "बिल्ली उल्टी क्यों करती है? कारण और उपाय",
        description: "जानें बिल्ली क्यों उल्टी करती है और कब डॉक्टर से संपर्क करें।",
        url: "/hi/cats/cat-vomiting-guide.html",
        language: "hi",
        category: "Cats"
    },
    {
        title: "बिल्ली को लीटर बॉक्स ट्रेनिंग कैसे दें",
        description: "बिल्ली को आसानी से लीटर बॉक्स इस्तेमाल करना सिखाएं।",
        url: "/hi/cats/litter-box-training.html",
        language: "hi",
        category: "Cats"
    },

    // --- HINDI: BIRDS & SMALL PETS ---
    {
        title: "शुरुआती लोगों के लिए बजीगर पक्षी देखभाल गाइड",
        description: "आवश्यक आहार, पिंजरे का आकार और बजीगर पक्षियों के लिए स्वास्थ्य टिप्स।",
        url: "/hi/birds-small-pets/budgie-care-guide.html",
        language: "hi",
        category: "Birds & Small Pets"
    },
    {
        title: "पूर्ण खरगोश देखभाल, आहार और आवास गाइड",
        description: "खरगोशों के उचित आहार, आवास और स्वास्थ्य रखरखाव पर विशेषज्ञ सलाह।",
        url: "/hi/birds-small-pets/rabbit-care-guide.html",
        language: "hi",
        category: "Birds & Small Pets"
    },
    {
        title: "मेरा पक्षी क्यों नहीं बोलता? प्रशिक्षण गाइड",
        description: "अपने पालतू पक्षी से जुड़ने और उन्हें बोलना सिखाने की तकनीकें।",
        url: "/hi/birds-small-pets/talking-bird-training-guide.html",
        language: "hi",
        category: "Birds & Small Pets"
    },

    // --- HINDI: VETERINARY HEALTH ---
    {
        title: "कुत्तों और बिल्लियों के लिए टीकाकरण अनुसूची गाइड",
        description: "कुत्तों और बिल्लियों को घातक वायरल बीमारियों से बचाने के लिए टीके।",
        url: "/hi/veterinary-health/pet-vaccination-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "पालतू पशु हीट स्ट्रोक: लक्षण और रोकथाम",
        description: "ओवरहीटिंग के शुरुआती लक्षण और पालतू जानवरों के लिए कूलिंग टिप्स।",
        url: "/hi/veterinary-health/heat-stroke-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "गाय और मवेशियों में आम बीमारियां और उपचार",
        description: "मवेशियों में होने वाले सामान्य रोग, रोकथाम और उपचार।",
        url: "/hi/veterinary-health/cow-cattle-health-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "बकरी की देखभाल, पोषण और रोग रोकथाम गाइड",
        description: "आवास, पोषण और बकरियों में बीमारियों की रोकथाम के उपाय।",
        url: "/hi/veterinary-health/goat-care-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "घोड़े की देखभाल, पोषण और स्टेबल प्रबंधन",
        description: "अश्व पोषण, स्टेबल प्रबंधन, खुर की देखभाल और शूल जागरूकता।",
        url: "/hi/veterinary-health/horse-care-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "गर्भवती गाय की देखभाल और प्रसव प्रबंधन",
        description: "गर्भावस्था के दौरान पोषण, ड्राई पीरियड और प्रसव प्रबंधन।",
        url: "/hi/veterinary-health/pregnant-cow-care-guide.html",
        language: "hi",
        category: "Veterinary Health"
    },
    {
        title: "बकरियों में दस्त के कारण और उपचार",
        description: "दस्त के कारण, डिहाइड्रेशन से बचाव और पशु चिकित्सा उपचार।",
        url: "/hi/veterinary-health/goat-diarrhea-treatment.html",
        language: "hi",
        category: "Veterinary Health"
    }
];