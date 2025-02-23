// Utility function to validate and clean names
const cleanName = (name) => {
    return name.trim().replace(/[^a-zA-Z\s-]/g, '');
};

// Object to hold our name generator functionality
const NameGenerator = {
    // Array of first names
    firstNames: [
        "Alexander",
        "Isabella",
        "Benjamin",
        "Charlotte",
        "Sebastian",
        "Victoria",
        "Theodore",
        "Elizabeth",
        "Harrison",
        "Penelope"
    ],

    // Array of last names for variety
    lastNames: [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Garcia",
        "Miller",
        "Davis",
        "Rodriguez",
        "Martinez"
    ],

    // Get a random item from any array
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    // Generate a random first name
    getRandomFirstName() {
        return this.getRandomItem(this.firstNames);
    },

    // Generate a random last name
    getRandomLastName() {
        return this.getRandomItem(this.lastNames);
    },

    // Generate a full name
    getRandomFullName() {
        return `${this.getRandomFirstName()} ${this.getRandomLastName()}`;
    },

    // Add a new name to the list
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

    // Get all available first names
    getAllFirstNames() {
        return [...this.firstNames];
    },

    // Get all available last names
    getAllLastNames() {
        return [...this.lastNames];
    }
};

// Export the NameGenerator object
export default NameGenerator;