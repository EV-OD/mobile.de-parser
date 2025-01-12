const fs = require('fs');
const path = require('path');

function isUserDataPresent(userDataDir) {
    try {
        // Check if the directory exists
        if (!fs.existsSync(userDataDir)) {
            return false;
        }

        // Check if the directory contains any files (e.g., cookies, preferences)
        const files = fs.readdirSync(userDataDir);
        return files.length > 0; // If there are files, user data is likely present
    } catch (error) {
        console.error('Error checking user data directory:', error);
        return false;
    }
}


module.exports = {
    isUserDataPresent
}

