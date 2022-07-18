const deitiesObj = {
  'amun': {
    name: "Amun (Amun-Ra)",
    title: "The Creator God",
    description: "Amun is the god of all gods, creator of existence, the supreme leader of gods and humanity in both the world of the living and the dead.",
    appearance: "He can be seen as a human wearing a double plummed crown and sometimes depicted as a ram or a goose as shown by his time in the Karnak."
    },
  'ra': {
    name: "Ra (Atum)",
    title: "God of Sun",
    description:"Ra \"Atum\" is the great sun god. He is the personification of the sun and everything in Egypt including the pyramids of Giza. Ra was the supreme creator who ruled over the land of both the living and the dead.",      
    appearance: "He looks like a child in the morning, an adult at almost high noon, and an old man in the evening."
  },
  'osiris': {
    name: "Osiris",
    title: "God of Justice",
    description: "He presided over the court that determined the fate of kings when they died. Osiris is also equated with the miracle of the Nile and the rich harvest",
    appearance: "He is portrayed as a mummified man wearing a tall white crown adorned with two ostrich feathers."
    },
  "isis": {
    name: "Isis",
    title:"Mother of the Gods",
    description: "Isis represents the power of love to overcome death. She brought her husband and brother, Osiris, back to life and saved her son Horus from certain death.",
    appearance: "She is portrayed wearing the hieroglyph for \"throne\" on her head; from the New Kingdom onward, she sometimes wore a solar disc between cow horns. She is also often depicted mourning the death of her husband and nursing their son."
  },
  "hathor": {
    name: "Hathor",
    title: "Goddess of Drunkenness",
    description: "Hathor has two aspects to her personality: her vengeful side took on the leonine form of the goddess Sekhmet and tried to destroy humanity following the rebellion in the creation myth; and her bovine form is associated with sexuality, joy and music.",
    appearance: "This goddess is represented in three different ways: as a woman holding a menit necklace and wearing a crown consisting of a cow's horns and a sun disk; as a woman with cow ears; and as a cow."
  },
  "ma'at": {
    name: "Ma\'at",
    title: "Goddess of Balance",
    description: "Ma\'at is the goddess of justice, truth, and most importantly, harmony. Her feather is weighed against the heart of the dead to determine if their soul is justified to live in paradise with Osiris.",
    appearance: ". She is identified as a woman with an ostrich plume in her headband."
  },
  "horus": {
    name: "Horus",
    title: "God of Sky",
    description: "His the son of Osiris and Isis, the divine child of the holy family triad. He is one of many gods associated with the falcon. His name means \"he who is above\" and \"he who is distant\". The falcon had been worshipped from earliest times as a cosmic deity whose body represents the heavens and whose eyes represent the sun and the moon.",
    appearance: "Horus is depicted as a falcon wearing a crown with a cobra or the Double Crown of Egypt. The hooded cobra (uraeus), which the gods and pharaohs wore on their foreheads, symbolizes light and royalty."
  },
  "anubis": {
    name: "Anubis",
    title: "God of Death",
    description: "Anubis was a jackal-headed deity who presided over the embalming process and accompanied dead kings in the afterworld. When kings were being judged by Osiris, Anubis placed their hearts on one side of a scale and a feather (representing Maat) on the other. The god Thoth recorded the results, which indicated whether the king could enter the afterworld.",
    appearance: "He\'s depicted as a man with the headof a jackal carrying a staff featured on temples all over Egypt."
  },
  "set": {
    name: "Set",
    title: "God of Deception",
    description: "Seth is the offspring of Geb and Nut. As the god of disorder, he was responsible for killing his brother, Osiris. In the Egyptian dualistic concept of the cosmos, Seth is placed in juxtaposition with Horus, the god who ruled the land with order and stability.",
    appearance: "Seth is an animal-headed deity with a curved head, tall square-topped ears and an erect arrow-like tail. The animal he represents has not been identified. He is sometimes portrayed with a human body and an elongated bird-like head, similar in appearance to the god Thoth."
  },
  "nephthys": {
    name: "Nephthys",
    title: "Goddess of Funerals",
    description: "Nephthys is the daughter of Nut, sister of Isis and wife of Seth, the god of disorder. Her loyalties, however, lay with Osiris, by whom she had a child, Anubis. When Seth found out who the father was, he murdered Osiris, and Nephthys joined Isis in the search for Osiris's body. Along with her sister Isis, she befriends and protects the dead.",
    appearance: "She is represented as a female with the hieroglyph of her name on her head."
  },
  "nut": {
    name: "Nut",
    title: "Goddess of Earth",
    description: "The primordial sky goddess, wife of Geb, and mother of Osiris, Isis, Set, and Nephthys. Each of her limb represents a cardinal point where her body is stretched over the earth.",
    appearance: "She is often depicted swallowing the sun in the evening and giving birth to the sun at night."
  },
  "shu": {
    name: "Shu",
    title: "God of Air",
    description: "Shu was one of the first two gods ever created by Atum with his sister-wife Tefnut. Shu was the god of sunlight and dry air. His job is to separate the sky from the earth.",
    appearance: "He is depicted as a man wearing a headdress in the form of a plume."
  },
  "tefnut": {
    name: "Tefnut",
    title: "Goddess of Moisture",
    description: "Tefnut is the goddess of moisture or corrosive air that brings about change, creating the concept of time.",
    appearance: "She is depicted either as a lioness or a woman with a lioness's head."
  },
  "bastet": {
    name: "Bastet",
    title: "Goddess of Beauty",
    description: "Bastet is a beautiful goddess of cats, fertility, and a protector of evil and misfortune. She represents the more protective aspects of motherhood.",
    appearance: "With a female body and a cat's head, she is often seen holding a sistrum."
  },
  "thoth": {
    name: "Thoth",
    title: "God of Intellect",
    description: "Thoth is the god of wisdom, knowledge, and truth. He is the messenger of the sun god, the inventor of writing and science, and the protector of the scribes.",
    appearance: "He is depicted as a human with the head of an ibis, or as a baboon or the moon occasionally."
  },
  "ptah": {
    name: "Ptah",
    title: "God of Memphis",
    description: "Creator god of the city of Memphis and husband of Sekhmet, Ptah is one of the oldest gods in Egyptian mythology.",
    appearance: "He is depicted as a mummified man wearing a skull cap holding the \"was\" sceptre"
  },
  "khonsu": {
    name: "Khonsu",
    title: "God of Lunar",
    description: "Khonsu is the God of the moon and vengeance. He was very popular and was revered as one of the greatest gods, especially during the days of the new kingdom, for his abilities, such as instantly healing the sick.",
    appearance: "He is shown as a mummy holding a crook and a flail with a moon disc on his head and uraeus."
  },
  "khnum": {
    name: "Khnum",
    title: "God of Potters",
    description: "Khnum is the patron god of potters and everyone who worked in ceramics. He is said to have created humans from the clay of the Nile River and held them to Ra, the sun god, to give them life. He also represents fertility and virility.",
    appearance: "He is depicted as a straight-horned, ram-headed god who is often depicted creating humans on his potter's wheel."
  },
  "hapi": {
    name: "Hapi",
    title: "God of Fertility",
    description: "Hapi, bringer of abundance, controlled the annual flooding of the Nile that enriched the land for growing crops.",
    appearance: "Hapi is depicted as a man who has plants on his head and holds an offering table filled with the produce of the land."
  },
  "sobek": {
    name: "Sobek",
    title: "God of the Nile",
    description: "Sobek is associated with procreation, fertility, medicine, and the Nile.",
    appearance: "He is depicted as a man with a crocodile head."
  },
  "bes": {
    name: "Bes",
    title: "God of Entertainment",
    description: "A famous dwarf god that symbolizes fertility, childbith, humor, and is the protector of women, children, the common man against evil spirits.",
    appearance: "Bes is seen as a bearded dwarf with a lion-like mane, large ears, and a pug nose. His amulets and sculptures are considered a source of good luck."
  },
  "tawaret": {
    name: "Tawaret",
    title: "Goddess of Childbirth",
    description: "She is known as the guardian of children and an essential helper of women during birth and pregnancy.",
    appearance: "Taweret is portrayed with the head of a hippopotamus, the arms and legs of a lion, and the back and tail of a crocodile. Her heavy breasts and full belly indicate she is pregnant."
  },
  "neith": {
    name: "Neith",
    title: "Goddess of Arrows",
    description: "A goddess linked to war and weaving, Neith is an important personage of the funerary cult, along with Isis, Nephthys and Selkis.",
    appearance: "She is usually depicted wearing the red crown of Lower Egypt."
  },
  "serket": {
    name: "Serket",
    title: "Goddess of Scorpions",
    description: "Serket is usually depicted as a woman with a scorpion on her head, and her name means \"the one who causes the throat to breathe\". She is a protector of the hawk-headed canopic jar, and along with three other deities, Isis, Nephthys and Neith, guarded the royal coffins and canopic chests.",
    appearance: "She is depicted as a woman wearing a scorpion on her head."
  },
  "nekhbet": {
    name: "Nekhbet",
    title: "Goddess of Vultures",
    description: "Portrayed as a vulture, Nekhbet was the principal goddess of Upper Egypt, whose king she protected. Her northern counterpart was the cobra goddess Wadjet.",
    appearance: "She is often shown with her wings spread over the king. She comes in the shape of a vulture who is the guardian of Upper Egypt."
  },
  "wadjet": {
    name: "Wadjet",
    title: "Goddess of Kingship",
    description: "She was a cobra goddess whose lethal force protected the king of Lower Egypt. Her northern counterpart was the vulture goddess Nekhbet. She offers protection against bad luck, evil spirits, demons, and ghosts.",
    appearance: "She is represented as a rearing cobra snake, known as the King's Uraeus."
  },
  "kherty": {
    name: "Kherty",
    title: "God of the Underworld",
    description: "An important god who plays the role of the ferryman transporting the dead into the afterlife. He ruled the underworld during the old kingdom before Osiris became Ruler of the Underworld.",
    appearance: "He is depicted as a ram-headed man."
  },
  "unknown": {
    name: "unknown",
    title: "unknown",
    description: "unknown",
    appearance: "unknown"
  }
}
  
  module.exports = { deitiesObj }