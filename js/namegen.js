// Utility function to validate and clean names
const cleanName = (name) => {
    return name.trim().replace(/[^a-zA-Z\s-]/g, '');
};

const NameGenerator = {

    //NOTE; These names where generated with the use of Claude AI, to simplify the process of just manually adding a ton of random names
    firstNames: [
        // Existing names
        "Alexander", "Isabella", "Benjamin", "Charlotte", "Sebastian", 
        "Victoria", "Theodore", "Elizabeth", "Harrison", "Penelope",
        
        // German origin
        "Klaus", "Wolfgang", "Friedrich", "Hans", "Otto", "Günther", 
        "Gerhard", "Mathilda", "Hedwig", "Ingrid", "Erika", "Helga",
        
        // South Indian
        "Aditya", "Krishna", "Arjun", "Karthik", "Shreya", "Deepa",
        "Priya", "Lakshmi", "Meena", "Ravi", "Vijay", "Anand",
        "Kavya", "Divya", "Pranav", "Aruna", "Shanti", "Venkatesan",
        
        // Japanese
        "Hiroshi", "Takeshi", "Kenji", "Yuki", "Sakura", "Haruki",
        "Akiko", "Yuriko", "Kaori", "Daisuke", "Mei", "Ryu",
        "Kazuko", "Hiro", "Aiko", "Tadashi", "Miyuki", "Satoshi",
        
        // Chinese
        "Wei", "Ming", "Hui", "Xiao", "Ling", "Jun", "Yan", "Li",
        "Feng", "Hong", "Jing", "Yang", "Zhong", "Yun", "Chen",
        "Xiang", "Mei", "Jin", "Hua", "Zhen",
        
        // Irish
        "Aoife", "Siobhan", "Saoirse", "Niamh", "Caoimhe", "Oisin",
        "Cillian", "Eoin", "Padraig", "Seamus", "Rory", "Finn",
        "Ciara", "Sinead", "Mairead", "Declan", "Brendan", "Connor",
        
        // Additional Western
        "Oliver", "Emma", "Noah", "Sophia", "William", "Ava",
        "James", "Mia", "Henry", "Evelyn", "Lucas", "Harper",
        "Ethan", "Amelia", "Mason", "Abigail", "Logan", "Scarlett"
    ],
    
    lastNames: [
        // Existing names
        "Smith", "Johnson", "Williams", "Brown", "Jones",
        "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
        
        // German
        "Schmidt", "Meyer", "Wagner", "Müller", "Weber",
        "Schulz", "Becker", "Hoffmann", "Schäfer", "Koch",
        
        // South Indian
        "Iyer", "Iyengar", "Krishnan", "Subramaniam", "Venkatesh",
        "Raman", "Narayanan", "Raghavan", "Padmanabhan", "Swaminathan",
        
        // Japanese
        "Tanaka", "Suzuki", "Sato", "Watanabe", "Takahashi",
        "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Ito",
        
        // Chinese
        "Zhang", "Li", "Wang", "Liu", "Chen", "Yang", "Huang",
        "Zhao", "Wu", "Zhou", "Sun", "Lin", "Zhu", "Xu", "He",
        
        // Irish
        "O'Connor", "Murphy", "Kelly", "O'Brien", "Ryan",
        "O'Sullivan", "Walsh", "O'Neill", "Flynn", "McCarthy",
        
        // Additional Western
        "Anderson", "Taylor", "Wilson", "Thompson", "White",
        "Harris", "Martin", "Thompson", "Moore", "Jackson",
        "Clark", "Lewis", "Lee", "Walker", "Hall", "Young"
    ],

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    getRandomFirstName() {
        return this.getRandomItem(this.firstNames);
    },

    getRandomLastName() {
        return this.getRandomItem(this.lastNames);
    },

    getRandomFullName() {
        return `${this.getRandomFirstName()} ${this.getRandomLastName()}`;
    },

    addName(name, type = 'first') {
        const cleanedName = cleanName(name);
        if (cleanedName) {
            if (type === 'first') {
                this.firstNames.push(cleanedName);
            } else if (type === 'last') {
                this.lastNames.push(cleanedName);
            }
            return true;
        }
        return false;
    },

    getAllFirstNames() {
        return [...this.firstNames];
    },

    getAllLastNames() {
        return [...this.lastNames];
    }
};

// Make NameGenerator available globally for browser usage
if (typeof window !== 'undefined') {
    window.NameGenerator = NameGenerator;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NameGenerator;
}